"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useFilterSet, FilterRow } from "@/components/game-filters";
import { PHILOSOPHERS } from "@/data/philosophers";
import type { Theme, Era, Region } from "@/lib/types";

const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;
const LENGTHS = [10, 25, 50] as const;
const THEMES: Theme[] = ["metaphysics", "ethics", "epistemology", "mind", "politics", "aesthetics", "religion", "logic"];
const ERAS: Era[] = ["ancient", "medieval", "early-modern", "modern", "contemporary"];
const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];

export default function FlashcardsSetup() {
  const router = useRouter();
  const [difficulty, setDifficulty] = React.useState<(typeof DIFFICULTIES)[number]>("beginner");
  const [length, setLength] = React.useState<(typeof LENGTHS)[number]>(10);
  const themes = useFilterSet<Theme>();
  const eras = useFilterSet<Era>();
  const regions = useFilterSet<Region>();

  const matching = PHILOSOPHERS.filter((p) => {
    if (themes.selected.size > 0 && !p.themes.some((t) => themes.selected.has(t))) return false;
    if (eras.selected.size > 0 && !eras.selected.has(p.era)) return false;
    if (regions.selected.size > 0 && !regions.selected.has(p.region)) return false;
    return true;
  });

  const begin = () => {
    const params = new URLSearchParams();
    params.set("d", difficulty);
    params.set("l", String(length));
    if (themes.selected.size) params.set("th", Array.from(themes.selected).join(","));
    if (eras.selected.size) params.set("er", Array.from(eras.selected).join(","));
    if (regions.selected.size) params.set("rg", Array.from(regions.selected).join(","));
    router.push(`/play/flashcards/play?${params.toString()}`);
  };

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Let's Play · Flashcards</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Multiple choice</h1>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Questions pulled from content you've touched, with about one in five from somewhere new. End screen shows what you missed.
        </p>
      </header>

      <Card className="p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">Difficulty</span>
          <div className="flex gap-1.5">
            {DIFFICULTIES.map((d) => (
              <button key={d} type="button" onClick={() => setDifficulty(d)}>
                <Badge variant={difficulty === d ? "accent" : "outline"} className="qz-chip cursor-pointer capitalize">{d}</Badge>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">Length</span>
          <div className="flex gap-1.5">
            {LENGTHS.map((l) => (
              <button key={l} type="button" onClick={() => setLength(l)}>
                <Badge variant={length === l ? "accent" : "outline"} className="qz-chip cursor-pointer">{l} questions</Badge>
              </button>
            ))}
          </div>
        </div>

        <FilterRow label="Theme" options={THEMES} filter={themes} />
        <FilterRow label="Era" options={ERAS} filter={eras} />
        <FilterRow label="Region" options={REGIONS} filter={regions} />
      </Card>

      <div className="flex items-center justify-between">
        <p className="font-sans text-sm text-muted-foreground">
          <Filter className="-mt-0.5 mr-1 inline h-3.5 w-3.5" />
          {matching.length} philosophers match these filters.
        </p>
        <Button variant="accent" onClick={begin} disabled={matching.length < 4}>
          Begin
        </Button>
      </div>
    </div>
  );
}
