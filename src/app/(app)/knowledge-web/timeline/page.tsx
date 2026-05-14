"use client";

// Historical timeline V2 — a horizontally scrollable, expandable canvas
// with inline portrait markers, era bands, and click-to-inspect detail.

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Portrait } from "@/components/portrait";
import { PHILOSOPHERS } from "@/data/philosophers";
import { SCHOOLS } from "@/data/schools";
import { TEXTS } from "@/data/texts";
import { schoolImage } from "@/data/imagery";
import type { Region } from "@/lib/types";
import { ZoomIn, ZoomOut, RefreshCcw } from "lucide-react";

const REGIONS: Region[] = [
  "greek",
  "roman",
  "east-asian",
  "south-asian",
  "islamic",
  "european",
  "african",
  "american",
];

type Lane = "philosopher" | "school" | "text";

interface TLNode {
  kind: Lane;
  id: string;
  slug: string;
  name: string;
  year: number;
  yearEnd?: number;
  image: string | null;
  summary: string;
}

function nodesForRegion(region: Region): TLNode[] {
  const out: TLNode[] = [];
  for (const p of PHILOSOPHERS) {
    if (p.region !== region || p.birthYear == null) continue;
    out.push({
      kind: "philosopher",
      id: p.id,
      slug: p.slug,
      name: p.name,
      year: p.birthYear,
      yearEnd: p.deathYear ?? undefined,
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
      yearEnd: s.eraEnd ?? undefined,
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
  if (Math.abs(y) >= 1000) return y < 0 ? `${Math.abs(y)} BCE` : `${y}`;
  return y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`;
}

// Eras as labeled bands. Used to give the canvas additional visual structure.
const ERA_BANDS: { name: string; from: number; to: number }[] = [
  { name: "Pre-Socratic", from: -700, to: -450 },
  { name: "Classical", from: -450, to: -322 },
  { name: "Hellenistic", from: -322, to: 200 },
  { name: "Late Antique", from: 200, to: 500 },
  { name: "Medieval", from: 500, to: 1400 },
  { name: "Renaissance", from: 1400, to: 1600 },
  { name: "Early Modern", from: 1600, to: 1780 },
  { name: "Modern", from: 1780, to: 1900 },
  { name: "20th century", from: 1900, to: 2000 },
  { name: "21st century", from: 2000, to: 2050 },
];

export default function TimelinePage() {
  const [region, setRegion] = React.useState<Region>("greek");
  const allNodes = React.useMemo(() => nodesForRegion(region), [region]);

  const minYear = allNodes.length ? Math.min(...allNodes.map((n) => n.year)) - 50 : -700;
  const maxYear = allNodes.length ? Math.max(...allNodes.map((n) => n.year)) + 50 : 2025;

  // Pixels-per-year zoom. The canvas is horizontally scrollable.
  const [pxPerYear, setPxPerYear] = React.useState(2);
  React.useEffect(() => {
    // Sensible default per region.
    const span = maxYear - minYear;
    setPxPerYear(span > 1500 ? 1.5 : span > 600 ? 2.5 : 4);
  }, [region, minYear, maxYear]);

  const canvasWidth = Math.max(1000, (maxYear - minYear) * pxPerYear);
  const xFor = (year: number) => (year - minYear) * pxPerYear;

  const tickStep = pxPerYear < 1.5 ? 200 : pxPerYear < 3 ? 100 : 50;
  const ticks: number[] = [];
  for (let y = Math.ceil(minYear / tickStep) * tickStep; y <= maxYear; y += tickStep) ticks.push(y);

  const [selected, setSelected] = React.useState<TLNode | null>(null);

  // Lay nodes into 3 lanes by kind. Within a lane, stagger if two nodes' years are close.
  const laneFor = (n: TLNode): number => (n.kind === "philosopher" ? 0 : n.kind === "school" ? 1 : 2);
  const laneTop = (laneIdx: number, sublane: number) => {
    const base = 80 + laneIdx * 130;
    return base + sublane * 60;
  };

  // Assign sublane within a lane to avoid overlap.
  const sublaneByNode = new Map<string, number>();
  for (let lane = 0; lane < 3; lane++) {
    const inLane = allNodes.filter((n) => laneFor(n) === lane);
    const occupiedEnds: number[] = [];
    for (const n of inLane) {
      const nodeWidth = 110; // px approx for portrait + label
      const start = xFor(n.year);
      const end = start + nodeWidth;
      let placed = -1;
      for (let s = 0; s < occupiedEnds.length; s++) {
        if (occupiedEnds[s] <= start) {
          occupiedEnds[s] = end;
          placed = s;
          break;
        }
      }
      if (placed === -1) {
        occupiedEnds.push(end);
        placed = occupiedEnds.length - 1;
      }
      sublaneByNode.set(`${n.kind}:${n.id}`, placed);
    }
  }

  const canvasHeight = (() => {
    let maxSublane = 0;
    for (const [k, s] of sublaneByNode.entries()) {
      const lane = laneFor(allNodes.find((n) => `${n.kind}:${n.id}` === k)!);
      const top = laneTop(lane, s);
      if (top > maxSublane) maxSublane = top;
    }
    return Math.max(360, maxSublane + 120);
  })();

  return (
    <div className="space-y-6">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Knowledge Web · Timeline
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Historical timelines</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Pick a region. Scroll the canvas horizontally. Zoom to expand. Click any portrait, school marker, or text marker to read a quick outline.
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

      <Card className="overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-border p-3">
          <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Zoom</span>
          <Button variant="ghost" size="sm" onClick={() => setPxPerYear((p) => Math.max(0.5, p / 1.5))}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setPxPerYear((p) => Math.min(20, p * 1.5))}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const span = maxYear - minYear;
              setPxPerYear(span > 1500 ? 1.5 : span > 600 ? 2.5 : 4);
            }}
          >
            <RefreshCcw className="h-4 w-4" /> Reset
          </Button>
          <span className="ml-auto font-sans text-xs text-muted-foreground">
            {allNodes.length} entries · {Math.round(pxPerYear * 100) / 100} px/yr
          </span>
        </div>

        <div className="relative overflow-x-auto overflow-y-hidden">
          <div className="relative" style={{ width: canvasWidth, height: canvasHeight }}>
            {/* Era bands */}
            {ERA_BANDS.filter((b) => b.to > minYear && b.from < maxYear).map((b) => {
              const left = xFor(Math.max(b.from, minYear));
              const right = xFor(Math.min(b.to, maxYear));
              return (
                <div
                  key={b.name}
                  className="absolute top-0 bottom-0 border-l border-border/70 bg-muted/30 first:border-l-0"
                  style={{ left, width: right - left }}
                >
                  <span className="absolute left-2 top-1 font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
                    {b.name}
                  </span>
                </div>
              );
            })}

            {/* Year ticks */}
            {ticks.map((y) => (
              <div
                key={y}
                className="absolute bottom-0 top-7 border-l border-border/40"
                style={{ left: xFor(y) }}
              >
                <span className="absolute bottom-1 left-1 font-sans text-[10px] tabular-nums text-muted-foreground">
                  {formatYear(y)}
                </span>
              </div>
            ))}

            {/* Nodes */}
            {allNodes.map((n) => {
              const left = xFor(n.year);
              const lane = laneFor(n);
              const sublane = sublaneByNode.get(`${n.kind}:${n.id}`) ?? 0;
              const top = laneTop(lane, sublane);
              const isSelected = selected && selected.kind === n.kind && selected.id === n.id;
              return (
                <motion.button
                  key={`${n.kind}-${n.id}`}
                  type="button"
                  onClick={() => setSelected(n)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="absolute flex flex-col items-center"
                  style={{ left: left - 30, top }}
                >
                  <span
                    className={
                      "relative block h-14 w-14 overflow-hidden rounded-full border-2 bg-card " +
                      (isSelected ? "border-foreground ring-2 ring-foreground/40" : "border-border")
                    }
                  >
                    {n.image ? (
                      <Image
                        src={n.image}
                        alt={n.name}
                        fill
                        sizes="56px"
                        className="object-cover grayscale"
                        unoptimized
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center font-serif text-sm text-muted-foreground">
                        {n.name
                          .replace(/[^a-zA-Z\sÀ-ſ]/g, "")
                          .split(/\s+/)
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 max-w-[120px] truncate font-sans text-[10px] leading-tight text-foreground">
                    {n.name}
                  </span>
                  <span className="font-sans text-[9px] tabular-nums text-muted-foreground">
                    {formatYear(n.year)}
                    {n.yearEnd ? `–${n.yearEnd < 0 ? Math.abs(n.yearEnd) : n.yearEnd}` : ""}
                  </span>
                </motion.button>
              );
            })}

            {allNodes.length === 0 && (
              <p className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                No entries for this region yet.
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-border p-3 font-sans text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border-2 border-foreground bg-card" /> Philosopher
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border-2 border-foreground bg-muted" /> School
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-full border-2 border-foreground bg-foreground/20" /> Text
          </span>
        </div>
      </Card>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
          >
            <Card className="p-5">
              <div className="flex items-start gap-4">
                <Portrait name={selected.name} src={selected.image} size="md" />
                <div className="min-w-0 flex-1">
                  <Badge variant="outline" className="capitalize">{selected.kind}</Badge>
                  <h2 className="mt-2 font-serif text-2xl tracking-tight">{selected.name}</h2>
                  <p className="mt-1 font-sans text-xs text-muted-foreground">
                    {formatYear(selected.year)}
                    {selected.yearEnd ? ` – ${formatYear(selected.yearEnd)}` : ""}
                  </p>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
