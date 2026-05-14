"use client";

import * as React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon } from "lucide-react";
import { PHILOSOPHERS } from "@/data/philosophers";
import { CONCEPTS } from "@/data/concepts";
import { SCHOOLS } from "@/data/schools";
import { QUOTES } from "@/data/quotes";
import { getPhilosopher } from "@/data/philosophers";

type Hit =
  | { kind: "philosopher"; id: string; slug: string; title: string; snippet: string }
  | { kind: "concept"; id: string; slug: string; title: string; snippet: string }
  | { kind: "school"; id: string; slug: string; title: string; snippet: string }
  | { kind: "quote"; id: string; slug: string; title: string; snippet: string };

function score(q: string, ...fields: string[]): number {
  const needle = q.toLowerCase();
  let s = 0;
  for (const f of fields) {
    const hay = f.toLowerCase();
    if (!hay) continue;
    if (hay === needle) s += 100;
    if (hay.startsWith(needle)) s += 20;
    if (hay.includes(needle)) s += 10;
  }
  return s;
}

export default function SearchPage() {
  const [q, setQ] = React.useState("");

  const hits = React.useMemo<Hit[]>(() => {
    if (q.trim().length < 2) return [];
    const out: { hit: Hit; s: number }[] = [];
    for (const p of PHILOSOPHERS) {
      const s = score(q, p.name, p.shortSummary, p.fullBody);
      if (s > 0) {
        out.push({
          s,
          hit: { kind: "philosopher", id: p.id, slug: p.slug, title: p.name, snippet: p.shortSummary },
        });
      }
    }
    for (const c of CONCEPTS) {
      const s = score(q, c.name, c.shortSummary, c.fullBody);
      if (s > 0) {
        out.push({
          s,
          hit: { kind: "concept", id: c.id, slug: c.slug, title: c.name, snippet: c.shortSummary },
        });
      }
    }
    for (const sch of SCHOOLS) {
      const s = score(q, sch.name, sch.shortSummary);
      if (s > 0) {
        out.push({
          s,
          hit: { kind: "school", id: sch.id, slug: sch.slug, title: sch.name, snippet: sch.shortSummary },
        });
      }
    }
    for (const qt of QUOTES) {
      const s = score(q, qt.text, qt.sourceLocation);
      if (s > 0) {
        const author = getPhilosopher(qt.philosopherId);
        const slug = author ? author.slug : "";
        out.push({
          s,
          hit: {
            kind: "quote",
            id: qt.id,
            slug,
            title: `“${qt.text.slice(0, 70)}…”`,
            snippet: `${author?.name ?? "?"} — ${qt.sourceLocation}`,
          },
        });
      }
    }
    return out.sort((a, b) => b.s - a.s).slice(0, 30).map((x) => x.hit);
  }, [q]);

  return (
    <div className="space-y-6">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Search</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Find anything</h1>
        <p className="mt-2 text-foreground/80">
          Philosophers, concepts, schools, quotes. Two characters in, results show up.
        </p>
      </header>

      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try 'Nietzsche' or 'eternal recurrence' or 'emptiness'"
          className="pl-10 h-12"
          autoFocus
        />
      </div>

      {hits.length === 0 && q.trim().length >= 2 && (
        <p className="text-muted-foreground">No results.</p>
      )}

      <ul className="space-y-2">
        {hits.map((h, i) => {
          const href =
            h.kind === "philosopher"
              ? `/classroom/philosophers/${h.slug}`
              : h.kind === "concept"
                ? `/classroom/concepts/${h.slug}`
                : h.kind === "school"
                  ? `/classroom/schools/${h.slug}`
                  : `/classroom/philosophers/${h.slug}`;
          return (
            <li key={`${h.kind}-${h.id}-${i}`}>
              <Link href={href}>
                <Card className="p-4 transition-colors hover:border-accent/60">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="capitalize">{h.kind}</Badge>
                    <div className="min-w-0">
                      <p className="font-serif">{h.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-foreground/80">{h.snippet}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
