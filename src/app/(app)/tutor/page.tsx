"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Portrait } from "@/components/portrait";
import { PHILOSOPHERS } from "@/data/philosophers";
import { Search as SearchIcon } from "lucide-react";
import type { Theme, Era, Region } from "@/lib/types";

const THEMES: Theme[] = ["metaphysics", "ethics", "epistemology", "mind", "politics", "aesthetics", "religion", "logic"];
const ERAS: Era[] = ["ancient", "medieval", "early-modern", "modern", "contemporary"];
const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];

export default function TutorIndex() {
  const [query, setQuery] = React.useState("");
  const [themes, setThemes] = React.useState<Set<Theme>>(new Set());
  const [eras, setEras] = React.useState<Set<Era>>(new Set());
  const [regions, setRegions] = React.useState<Set<Region>>(new Set());

  const toggle = <T,>(set: Set<T>, value: T, update: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    update(next);
  };

  const q = query.trim().toLowerCase();
  const filtered = PHILOSOPHERS.filter((p) => {
    if (q && !p.name.toLowerCase().includes(q) && !p.shortSummary.toLowerCase().includes(q)) {
      return false;
    }
    if (themes.size > 0 && !p.themes.some((t) => themes.has(t))) return false;
    if (eras.size > 0 && !eras.has(p.era)) return false;
    if (regions.size > 0 && !regions.has(p.region)) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Socratic tutor</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Pick a philosopher to argue with</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          A chat that talks back. Each tutor is constrained to their documented positions, pushes back on your premises, and cites specific works. The point isn't agreement — it's that you leave knowing what you actually think.
        </p>
        <p className="mt-2 font-sans text-xs text-muted-foreground">
          Requires <code>ANTHROPIC_API_KEY</code> in <code>.env.local</code>. The key is server-side only.
        </p>
      </header>

      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or what they did"
          className="h-11 pl-10"
        />
      </div>

      <div className="space-y-3 rounded-lg border border-border bg-card p-4">
        <FilterRow label="Theme" options={THEMES} selected={themes as Set<string>} onToggle={(v) => toggle(themes, v as Theme, setThemes)} />
        <FilterRow label="Era" options={ERAS} selected={eras as Set<string>} onToggle={(v) => toggle(eras, v as Era, setEras)} />
        <FilterRow label="Region" options={REGIONS} selected={regions as Set<string>} onToggle={(v) => toggle(regions, v as Region, setRegions)} />
        {(themes.size + eras.size + regions.size > 0 || query) && (
          <div className="flex items-center justify-between pt-1">
            <span className="font-sans text-xs text-muted-foreground">
              {filtered.length} tutor{filtered.length === 1 ? "" : "s"} match
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setThemes(new Set());
                setEras(new Set());
                setRegions(new Set());
                setQuery("");
              }}
            >
              Clear
            </Button>
          </div>
        )}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <li key={p.id}>
            <Link href={`/tutor/${p.slug}`}>
              <Card className="qz-interactive h-full p-5">
                <div className="flex items-start gap-3">
                  <Portrait name={p.name} src={p.imageUrl} size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-lg leading-tight">{p.name}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <Badge variant="outline" className="capitalize">{p.era.replace("-", " ")}</Badge>
                      <Badge variant="outline" className="capitalize">{p.region.replace("-", " ")}</Badge>
                    </div>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-foreground/80">{p.shortSummary}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: readonly T[];
  selected: Set<string>;
  onToggle: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-16 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = selected.has(opt);
          return (
            <button key={opt} onClick={() => onToggle(opt)} type="button">
              <Badge variant={active ? "accent" : "outline"} className="qz-chip cursor-pointer capitalize">
                {opt.replace("-", " ")}
              </Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}
