"use client";

import * as React from "react";
import { PhilosopherCard } from "@/components/philosopher-card";
import { ConceptCard } from "@/components/concept-card";
import { SchoolCard } from "@/components/school-card";
import { TextCard } from "@/components/text-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PHILOSOPHERS } from "@/data/philosophers";
import { CONCEPTS } from "@/data/concepts";
import { SCHOOLS } from "@/data/schools";
import { TEXTS } from "@/data/texts";
import type { Theme, Era, Region, Philosopher } from "@/lib/types";

const THEMES: Theme[] = ["metaphysics", "ethics", "epistemology", "mind", "politics", "aesthetics", "religion", "logic", "science", "language"];
const ERAS: Era[] = ["ancient", "medieval", "early-modern", "modern", "contemporary"];
const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];

// Multi-select filters: a result must match every active dimension.
// "all selected" within a dimension is treated as the dimension being open.
export default function ClassroomPage() {
  const [themes, setThemes] = React.useState<Set<Theme>>(new Set());
  const [eras, setEras] = React.useState<Set<Era>>(new Set());
  const [regions, setRegions] = React.useState<Set<Region>>(new Set());

  const toggle = <T,>(set: Set<T>, value: T, update: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    update(next);
  };
  const clearAll = () => {
    setThemes(new Set());
    setEras(new Set());
    setRegions(new Set());
  };

  const themeMatches = (xs: readonly Theme[]) =>
    themes.size === 0 || xs.some((t) => themes.has(t));

  const philosophers: Philosopher[] = PHILOSOPHERS.filter((p) => {
    if (eras.size > 0 && !eras.has(p.era)) return false;
    if (regions.size > 0 && !regions.has(p.region)) return false;
    if (!themeMatches(p.themes)) return false;
    return true;
  }).slice().sort((a, b) => a.name.localeCompare(b.name));

  // Concepts: have a single theme but no era/region of their own.
  // We use the *associated philosophers* to inherit era/region constraints.
  const concepts = CONCEPTS.filter((c) => {
    if (themes.size > 0 && !themes.has(c.theme)) return false;
    if (eras.size === 0 && regions.size === 0) return true;
    const linked = c.philosopherIds
      .map((id) => PHILOSOPHERS.find((p) => p.id === id))
      .filter((p): p is Philosopher => !!p);
    if (linked.length === 0) {
      // Concepts not yet linked appear only when no era/region filters set.
      return false;
    }
    return linked.some(
      (p) =>
        (eras.size === 0 || eras.has(p.era)) &&
        (regions.size === 0 || regions.has(p.region)),
    );
  }).slice().sort((a, b) => a.name.localeCompare(b.name));

  // Schools: have their own region; era inferred from eraStart.
  const eraFromStart = (start: number): Era =>
    start < 500
      ? "ancient"
      : start < 1400
        ? "medieval"
        : start < 1780
          ? "early-modern"
          : start < 1900
            ? "modern"
            : "contemporary";
  const schools = SCHOOLS.filter((s) => {
    if (regions.size > 0 && !regions.has(s.region)) return false;
    if (eras.size > 0 && !eras.has(eraFromStart(s.eraStart))) return false;
    if (themes.size > 0) {
      // Match if any member philosopher hits a selected theme.
      const linked = s.philosopherIds
        .map((id) => PHILOSOPHERS.find((p) => p.id === id))
        .filter((p): p is Philosopher => !!p);
      if (!linked.some((p) => themeMatches(p.themes))) return false;
    }
    return true;
  }).slice().sort((a, b) => a.name.localeCompare(b.name));

  const texts = TEXTS.filter((t) => {
    if (eras.size > 0 && (!t.era || !eras.has(t.era))) return false;
    if (regions.size > 0 && (!t.region || !regions.has(t.region))) return false;
    if (themes.size > 0 && !(t.themes ?? []).some((th) => themes.has(th))) return false;
    return true;
  }).slice().sort((a, b) => a.title.localeCompare(b.title));

  const activeCount = themes.size + eras.size + regions.size;

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Classroom
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Browse the canon</h1>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Filter by theme, era, or region. Filters compose — pick metaphysics + ancient + Greek and only results matching all three appear.
        </p>
      </header>

      <div className="space-y-3 rounded-lg border border-border bg-card p-4">
        <FilterRow
          label="Theme"
          options={THEMES}
          selected={themes}
          onToggle={(v) => toggle(themes, v as Theme, setThemes)}
        />
        <FilterRow
          label="Era"
          options={ERAS}
          selected={eras}
          onToggle={(v) => toggle(eras, v as Era, setEras)}
        />
        <FilterRow
          label="Region"
          options={REGIONS}
          selected={regions}
          onToggle={(v) => toggle(regions, v as Region, setRegions)}
        />
        {activeCount > 0 && (
          <div className="flex items-center justify-between pt-1">
            <span className="font-sans text-xs text-muted-foreground">
              {activeCount} filter{activeCount === 1 ? "" : "s"} active
            </span>
            <Button variant="ghost" size="sm" onClick={clearAll}>
              Clear all
            </Button>
          </div>
        )}
      </div>

      <Tabs defaultValue="philosophers">
        <TabsList className="flex flex-wrap h-auto">
          <TabsTrigger value="philosophers">
            Philosophers
            <span className="ml-1.5 font-sans text-xs text-muted-foreground">({philosophers.length})</span>
          </TabsTrigger>
          <TabsTrigger value="concepts">
            Concepts
            <span className="ml-1.5 font-sans text-xs text-muted-foreground">({concepts.length})</span>
          </TabsTrigger>
          <TabsTrigger value="schools">
            Schools
            <span className="ml-1.5 font-sans text-xs text-muted-foreground">({schools.length})</span>
          </TabsTrigger>
          <TabsTrigger value="reading">
            Reading
            <span className="ml-1.5 font-sans text-xs text-muted-foreground">({texts.length})</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="philosophers">
          {philosophers.length === 0 ? (
            <EmptyState onClear={clearAll} />
          ) : (
            <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {philosophers.map((p) => <PhilosopherCard key={p.id} p={p} />)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="concepts">
          {concepts.length === 0 ? (
            <EmptyState onClear={clearAll} />
          ) : (
            <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {concepts.map((c) => <ConceptCard key={c.id} c={c} />)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="schools">
          {schools.length === 0 ? (
            <EmptyState onClear={clearAll} />
          ) : (
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {schools.map((s) => <SchoolCard key={s.id} s={s} />)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="reading">
          {texts.length === 0 ? (
            <EmptyState onClear={clearAll} />
          ) : (
            <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {texts.map((t) => <TextCard key={t.id} t={t} />)}
            </div>
          )}
        </TabsContent>
      </Tabs>
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
  selected: Set<T>;
  onToggle: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-16 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">
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
                {opt.replace("-", " ")}
              </Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="mt-6 rounded-md border border-dashed border-border p-8 text-center">
      <p className="font-serif text-lg">No results match every filter.</p>
      <p className="mt-1 text-sm text-muted-foreground">Try removing one of the active dimensions.</p>
      <div className="mt-4">
        <Button variant="outline" size="sm" onClick={onClear}>Clear filters</Button>
      </div>
    </div>
  );
}
