"use client";

import * as React from "react";
import { notFound, useParams } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getPhilosopher } from "@/data/philosophers";
import { useStore } from "@/lib/store";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function TutorChat() {
  const params = useParams<{ slug: string }>();
  const philosopher = getPhilosopher(params.slug);
  const username = useStore((s) => s.username);

  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [draft, setDraft] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const scrollerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length, pending]);

  if (!philosopher) notFound();

  const send = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!draft.trim() || pending) return;
    setError(null);
    const next: ChatMessage[] = [...messages, { role: "user", content: draft.trim() }];
    setMessages(next);
    setDraft("");
    setPending(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          philosopherId: philosopher.id,
          messages: next,
          clientId: username ?? "anon",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl flex flex-col h-[calc(100vh-7rem)]">
      <header className="mb-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-accent/15 text-accent flex items-center justify-center font-serif">
          {philosopher.name[0]}
        </div>
        <div>
          <p className="font-serif text-xl tracking-tight">{philosopher.name}</p>
          <p className="font-sans text-xs text-muted-foreground">
            <Badge variant="outline" className="mr-1 capitalize">{philosopher.era.replace("-", " ")}</Badge>
            Constrained to documented positions. Will push back.
          </p>
        </div>
      </header>

      <div
        ref={scrollerRef}
        className="flex-1 min-h-0 overflow-y-auto space-y-3 rounded-lg border border-border bg-card/40 p-4"
      >
        {messages.length === 0 && (
          <div className="text-center py-12">
            <p className="font-serif italic text-foreground/80">
              {philosopher.name} is waiting for a question.
            </p>
            <p className="mt-2 font-sans text-xs text-muted-foreground">
              Try: "Why should I trust your idea of {philosopher.themes[0] ?? "the good"}?"
            </p>
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              "max-w-[85%] rounded-lg px-4 py-3 font-serif leading-relaxed " +
              (m.role === "user"
                ? "ml-auto bg-accent/15 text-foreground"
                : "mr-auto bg-background border border-border")
            }
          >
            {m.content.split("\n").map((line, j) => (
              <p key={j} className={j === 0 ? "" : "mt-2"}>{line}</p>
            ))}
          </div>
        ))}
        {pending && (
          <div className="mr-auto inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Thinking…
          </div>
        )}
        {error && (
          <Card className="border-destructive/40 bg-destructive/5 p-3 text-sm">
            <p className="font-sans">{error}</p>
            <p className="mt-1 font-sans text-xs text-muted-foreground">
              The tutor route needs <code>ANTHROPIC_API_KEY</code> in <code>.env.local</code>.
            </p>
          </Card>
        )}
      </div>

      <form onSubmit={send} className="mt-3 flex gap-2">
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) send();
          }}
          placeholder="Ask. Press ⌘/Ctrl+Enter to send."
          rows={2}
          className="min-h-[60px]"
        />
        <Button type="submit" variant="accent" disabled={!draft.trim() || pending}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
