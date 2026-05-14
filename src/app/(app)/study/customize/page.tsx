"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { customDeck } from "@/data/flashcards";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import type { Theme, Era, Region } from "@/lib/types";
import { Shuffle, Sparkles } from "lucide-react";

const THEMES: Theme[] = ["metaphysics", "ethics", "epistemology", "mind", "politics", "aesthetics", "religion", "logic"];
const ERAS: Era[] = ["ancient", "medieval", "early-modern", "modern", "contemporary"];
const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];
const TYPES = [
  { id: "philosopher", label: "Philosopher → core idea" },
  { id: "concept", label: "Concept → definition" },
  { id: "quote", label: "Quote → author" },
] as const;

export default function CustomizePage() {
  const router = useRouter();
  const [types, setTypes] = React.useState<Set<"philosopher" | "concept" | "quote">>(new Set());
  const [themes, setThemes] = React.useState<Set<Theme>>(new Set());
  const [eras, setEras] = React.useState<Set<Era>>(new Set());
  const [regions, setRegions] = React.useState<Set<Region>>(new Set());
  const [limit, setLimit] = React.useState(20);
  const [random, setRandom] = React.useState(true);
  const ensure = useStore((s) => s.ensureCardReviews);

  const toggle = <T,>(set: Set<T>, value: T, update: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    update(next);
  };

  const preview = customDeck({
    contentTypes: types,
    themes: themes as Set<string>,
    eras: eras as Set<string>,
    regions: regions as Set<string>,
    limit,
    random,
  });

  const start = () => {
    if (preview.length === 0) return;
    ensure(preview.map((c) => c.id));
    sessionStorage.setItem("custom-deck-ids", JSON.stringify(preview.map((c) => c.id)));
    router.push("/study/custom-session");
  };

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Custom deck</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Build a deck</h1>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Same filters as the Classroom. Pick what you want to drill on; we'll assemble the cards.
        </p>
      </header>

      <Card className="space-y-4 p-5">
        <FilterRow
          label="Card type"
          options={TYPES.map((t) => t.id)}
          selected={types as Set<string>}
          onToggle={(v) => toggle(types, v as "philosopher" | "concept" | "quote", setTypes)}
          renderLabel={(v) => TYPES.find((t) => t.id === v)?.label ?? v}
        />
        <FilterRow
          label="Theme"
          options={THEMES}
          selected={themes as Set<string>}
          onToggle={(v) => toggle(themes, v as Theme, setThemes)}
        />
        <FilterRow
          label="Era"
          options={ERAS}
          selected={eras as Set<string>}
          onToggle={(v) => toggle(eras, v as Era, setEras)}
        />
        <FilterRow
          label="Region"
          options={REGIONS}
          selected={regions as Set<string>}
          onToggle={(v) => toggle(regions, v as Region, setRegions)}
        />
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Length</span>
          <Input
            type="number"
            min={5}
            max={100}
            value={limit}
            onChange={(e) => setLimit(Math.max(5, Math.min(100, parseInt(e.target.value || "20", 10))))}
            className="h-9 w-24"
          />
          <button onClick={() => setRandom(!random)}>
            <Badge variant={random ? "accent" : "outline"} className="qz-chip cursor-pointer">
              <Shuffle className="mr-1 h-3 w-3" /> Random order
            </Badge>
          </button>
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <p className="font-sans text-sm text-muted-foreground">
          <Sparkles className="-mt-0.5 mr-1 inline h-3.5 w-3.5" />
          {preview.length} card{preview.length === 1 ? "" : "s"} match these filters.
        </p>
        <div className="flex gap-2">
          <Link href="/study"><Button variant="outline">Back</Button></Link>
          <Button variant="accent" onClick={start} disabled={preview.length === 0}>
            Start session
          </Button>
        </div>
      </div>
    </div>
  );
}

function FilterRow({
  label,
  options,
  selected,
  onToggle,
  renderLabel,
}: {
  label: string;
  options: readonly string[];
  selected: Set<string>;
  onToggle: (v: string) => void;
  renderLabel?: (v: string) => string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = selected.has(opt);
          return (
            <button key={opt} onClick={() => onToggle(opt)} type="button">
              <Badge
                variant={active ? "accent" : "outline"}
                className="qz-chip cursor-pointer font-sans capitalize"
              >
                {renderLabel ? renderLabel(opt) : opt.replace("-", " ")}
              </Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}
