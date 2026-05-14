"use client";

// Per-region historical timeline of philosophers, schools, and (via author)
// texts. Zoom is a year-range slider; click any node for an inline summary
// with a link to its full page.

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Portrait } from "@/components/portrait";
import { PHILOSOPHERS } from "@/data/philosophers";
import { SCHOOLS } from "@/data/schools";
import { TEXTS } from "@/data/texts";
import type { Region } from "@/lib/types";
import { schoolImage } from "@/data/imagery";

const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];

type Node =
  | { kind: "philosopher"; id: string; slug: string; name: string; year: number; image: string | null; summary: string }
  | { kind: "school"; id: string; slug: string; name: string; year: number; image: string | null; summary: string }
  | { kind: "text"; id: string; slug: string; name: string; year: number; image: string | null; summary: string };

function nodesForRegion(region: Region): Node[] {
  const out: Node[] = [];
  for (const p of PHILOSOPHERS) {
    if (p.region !== region) continue;
    if (p.birthYear == null) continue;
    out.push({
      kind: "philosopher",
      id: p.id,
      slug: p.slug,
      name: p.name,
      year: p.birthYear,
      image: p.imageUrl,
      summary: p.shortSummary,
    });
  }
  for (const s of SCHOOLS) {
    if (s.region !== region) continue;
    out.push({
      kind: "school",
      id: s.id,
      slug: s.slug,
      name: s.name,
      year: s.eraStart,
      image: schoolImage(s.slug),
      summary: s.shortSummary,
    });
  }
  for (const t of TEXTS) {
    if (t.region !== region) continue;
    out.push({
      kind: "text",
      id: t.id,
      slug: t.slug,
      name: t.title,
      year: t.yearWritten,
      image: t.imageUrl ?? null,
      summary: t.shortSummary,
    });
  }
  return out.sort((a, b) => a.year - b.year);
}

function formatYear(y: number): string {
  return y < 0 ? `${Math.abs(y)} BCE` : `${y}`;
}

export default function TimelinePage() {
  const [region, setRegion] = React.useState<Region>("greek");
  const allNodes = React.useMemo(() => nodesForRegion(region), [region]);

  const minYear = allNodes.length ? Math.min(...allNodes.map((n) => n.year)) : -700;
  const maxYear = allNodes.length ? Math.max(...allNodes.map((n) => n.year)) : 2025;
  const fullSpan = Math.max(100, maxYear - minYear);

  // Zoom: user-controlled visible range.
  const [from, setFrom] = React.useState(minYear);
  const [to, setTo] = React.useState(maxYear);

  // Reset zoom when region changes.
  React.useEffect(() => {
    setFrom(minYear);
    setTo(maxYear);
  }, [region, minYear, maxYear]);

  const nodes = allNodes.filter((n) => n.year >= from && n.year <= to);
  const span = Math.max(1, to - from);

  // Pick decade ticks for the axis.
  const tickStep = Math.max(50, Math.round(span / 8 / 10) * 10);
  const ticks: number[] = [];
  for (let y = Math.ceil(from / tickStep) * tickStep; y <= to; y += tickStep) ticks.push(y);

  const [selected, setSelected] = React.useState<Node | null>(null);

  const xForYear = (year: number) => ((year - from) / span) * 100;

  // Lay out nodes in lanes by kind to reduce overlap.
  const laneFor = (n: Node) => (n.kind === "philosopher" ? 0 : n.kind === "school" ? 1 : 2);

  return (
    <div className="space-y-6">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Knowledge Web · Timeline
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Historical timelines</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          One region at a time. Drag the zoom handles to focus a period; click any marker to read a short outline.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        {REGIONS.map((r) => (
          <button key={r} onClick={() => setRegion(r)}>
            <Badge variant={r === region ? "accent" : "outline"} className="qz-chip cursor-pointer capitalize">
              {r.replace("-", " ")}
            </Badge>
          </button>
        ))}
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Zoom</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={minYear}
              max={maxYear}
              step={Math.max(1, Math.round(fullSpan / 200))}
              value={from}
              onChange={(e) => setFrom(Math.min(parseInt(e.target.value, 10), to - 50))}
              className="w-40"
            />
            <span className="font-sans text-xs tabular-nums">{formatYear(from)}</span>
            <span className="font-sans text-xs text-muted-foreground">→</span>
            <input
              type="range"
              min={minYear}
              max={maxYear}
              step={Math.max(1, Math.round(fullSpan / 200))}
              value={to}
              onChange={(e) => setTo(Math.max(parseInt(e.target.value, 10), from + 50))}
              className="w-40"
            />
            <span className="font-sans text-xs tabular-nums">{formatYear(to)}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => { setFrom(minYear); setTo(maxYear); }}>Reset</Button>
        </div>

        <div className="relative h-[260px] overflow-hidden rounded-md border border-border bg-card">
          {/* axis */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
          {ticks.map((y) => (
            <div
              key={y}
              className="absolute top-0 bottom-0"
              style={{ left: `${xForYear(y)}%` }}
            >
              <div className="absolute top-1/2 -ml-px h-2 w-px -translate-y-1/2 bg-border" />
              <div className="absolute top-[calc(50%+0.5rem)] -translate-x-1/2 font-sans text-[10px] text-muted-foreground tabular-nums">
                {formatYear(y)}
              </div>
            </div>
          ))}
          {nodes.length === 0 && (
            <p className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              No entries in this range.
            </p>
          )}
          {nodes.map((n, i) => {
            const lane = laneFor(n);
            // Stagger within lane to avoid overlap of very close years.
            const yPercent = lane === 0 ? 20 : lane === 1 ? 35 : 70;
            return (
              <button
                key={`${n.kind}-${n.id}-${i}`}
                type="button"
                onClick={() => setSelected(n)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${xForYear(n.year)}%`, top: `${yPercent}%` }}
                aria-label={n.name}
              >
                <span
                  className={
                    "block h-2.5 w-2.5 rounded-full border " +
                    (n.kind === "philosopher"
                      ? "border-foreground bg-foreground"
                      : n.kind === "school"
                        ? "border-foreground bg-background"
                        : "border-foreground bg-foreground/30")
                  }
                />
                <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap font-sans text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {n.name}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex items-center gap-4 font-sans text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-foreground bg-foreground" /> Philosopher
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-foreground bg-background" /> School
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-2.5 w-2.5 rounded-full border border-foreground bg-foreground/30" /> Text
          </span>
        </div>
      </Card>

      {selected && (
        <Card className="p-5">
          <div className="flex items-start gap-4">
            <Portrait name={selected.name} src={selected.image} size="md" />
            <div className="min-w-0 flex-1">
              <Badge variant="outline" className="capitalize">{selected.kind}</Badge>
              <h2 className="mt-2 font-serif text-2xl tracking-tight">{selected.name}</h2>
              <p className="mt-1 font-sans text-xs text-muted-foreground">{formatYear(selected.year)}</p>
              <p className="mt-2 text-foreground/85">{selected.summary}</p>
              <div className="mt-4">
                <Link
                  href={
                    selected.kind === "philosopher"
                      ? `/classroom/philosophers/${selected.slug}`
                      : selected.kind === "school"
                        ? `/classroom/schools/${selected.slug}`
                        : `/classroom/reading/${selected.slug}`
                  }
                >
                  <Button variant="accent" size="sm">Open full page</Button>
                </Link>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSelected(null)}>Close</Button>
          </div>
        </Card>
      )}

      <p className="font-sans text-xs text-muted-foreground">
        {nodes.length} entr{nodes.length === 1 ? "y" : "ies"} in view.
      </p>
    </div>
  );
}
