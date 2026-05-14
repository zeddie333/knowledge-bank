// Socratic tutor API route. Server-only — the Anthropic key never reaches
// the client. In-memory rate limit per stable client identifier; replace
// with a real store (Upstash, Postgres) before production.

import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getPhilosopherById, systemPromptFor } from "@/lib/tutor";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  philosopherId: string;
  messages: ChatMessage[];
  clientId?: string;
}

// Naive per-process rate limiter. Good enough for local dev; replace
// with Upstash/Redis when this goes anywhere near production.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export async function POST(req: Request) {
  let body: RequestBody;
  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { philosopherId, messages, clientId } = body;
  const philosopher = getPhilosopherById(philosopherId);
  if (!philosopher) {
    return NextResponse.json({ error: "Unknown philosopher" }, { status: 400 });
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Messages required" }, { status: 400 });
  }

  const rateKey = clientId ?? req.headers.get("x-forwarded-for") ?? "anon";
  if (rateLimited(rateKey)) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Try again in a minute." },
      { status: 429 },
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        error:
          "ANTHROPIC_API_KEY is not configured. The tutor needs a server-side API key to run.",
      },
      { status: 503 },
    );
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const completion = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      system: systemPromptFor(philosopher),
      messages: messages.slice(-20).map((m) => ({ role: m.role, content: m.content })),
    });

    const reply = completion.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("\n")
      .trim();

    return NextResponse.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
