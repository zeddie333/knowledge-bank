"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Portrait } from "@/components/portrait";
import { CONCEPTS } from "@/data/concepts";
import { PHILOSOPHERS, getPhilosopher } from "@/data/philosophers";
import { useStore } from "@/lib/store";
import { useFilterSet, FilterRow } from "@/components/game-filters";
import type { Theme, Era, Region } from "@/lib/types";
import { cn } from "@/lib/utils";

const THEMES: Theme[] = ["metaphysics", "ethics", "epistemology", "mind", "politics", "aesthetics", "religion", "logic"];
const ERAS: Era[] = ["ancient", "medieval", "early-modern", "modern", "contemporary"];
const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];
const TIME_LIMITS = [45, 60, 90] as const;
const PAIR_COUNTS = [4, 6, 8] as const;

interface Pair {
  philosopherId: string;
  philosopherName: string;
  philosopherImage: string | null;
  conceptId: string;
  conceptName: string;
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function eligibleConcepts(
  themes: Set<Theme>,
  eras: Set<Era>,
  regions: Set<Region>,
) {
  return CONCEPTS.filter((c) => {
    if (c.philosopherIds.length === 0) return false;
    if (themes.size > 0 && !themes.has(c.theme)) return false;
    if (eras.size > 0 || regions.size > 0) {
      const linked = c.philosopherIds
        .map((id) => PHILOSOPHERS.find((p) => p.id === id))
        .filter((p): p is NonNullable<typeof p> => !!p);
      if (
        !linked.some(
          (p) =>
            (eras.size === 0 || eras.has(p.era)) &&
            (regions.size === 0 || regions.has(p.region)),
        )
      ) {
        return false;
      }
    }
    return true;
  });
}

function buildBoard(
  themes: Set<Theme>,
  eras: Set<Era>,
  regions: Set<Region>,
  n: number,
): Pair[] {
  const picked = shuffle(eligibleConcepts(themes, eras, regions)).slice(0, n);
  return picked
    .map((c) => {
      const p = getPhilosopher(c.philosopherIds[0]);
      if (!p) return null;
      return {
        philosopherId: p.id,
        philosopherName: p.name,
        philosopherImage: p.imageUrl,
        conceptId: c.id,
        conceptName: c.name,
      };
    })
    .filter((x): x is Pair => !!x);
}

export default function MatchingGame() {
  const [phase, setPhase] = React.useState<"setup" | "playing">("setup");
  const themes = useFilterSet<Theme>();
  const eras = useFilterSet<Era>();
  const regions = useFilterSet<Region>();
  const [pairCount, setPairCount] = React.useState<(typeof PAIR_COUNTS)[number]>(6);
  const [timeLimit, setTimeLimit] = React.useState<(typeof TIME_LIMITS)[number]>(60);
  const [board, setBoard] = React.useState<Pair[]>([]);

  const previewCount = React.useMemo(
    () => eligibleConcepts(themes.selected, eras.selected, regions.selected).length,
    [themes.selected, eras.selected, regions.selected],
  );

  if (phase === "setup") {
    return (
      <div className="space-y-8">
        <header>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Let's Play · Matching</p>
          <h1 className="mt-1 font-serif text-3xl tracking-tight">Pair philosophers to their concepts</h1>
          <p className="mt-2 max-w-prose text-foreground/80">
            Click a philosopher, then click a concept to pair them. Beat the timer.
          </p>
        </header>

        <Card className="space-y-4 p-5">
          <FilterRow label="Theme" options={THEMES} filter={themes} />
          <FilterRow label="Era" options={ERAS} filter={eras} />
          <FilterRow label="Region" options={REGIONS} filter={regions} />
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">Pairs</span>
            <div className="flex gap-1.5">
              {PAIR_COUNTS.map((n) => (
                <button key={n} type="button" onClick={() => setPairCount(n)}>
                  <Badge
                    variant={pairCount === n ? "accent" : "outline"}
                    className="qz-chip cursor-pointer"
                  >
                    {n} pairs
                  </Badge>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">Timer</span>
            <div className="flex gap-1.5">
              {TIME_LIMITS.map((t) => (
                <button key={t} type="button" onClick={() => setTimeLimit(t)}>
                  <Badge
                    variant={timeLimit === t ? "accent" : "outline"}
                    className="qz-chip cursor-pointer"
                  >
                    {t}s
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <p className="font-sans text-sm text-muted-foreground">
            <Filter className="-mt-0.5 mr-1 inline h-3.5 w-3.5" />
            {previewCount} concepts match these filters.
          </p>
          <Button
            variant="accent"
            disabled={previewCount < pairCount}
            onClick={() => {
              setBoard(
                buildBoard(themes.selected, eras.selected, regions.selected, pairCount),
              );
              setPhase("playing");
            }}
          >
            Begin
          </Button>
        </div>
      </div>
    );
  }

  return <PlayBoard board={board} timeLimit={timeLimit} />;
}

function PlayBoard({ board, timeLimit }: { board: Pair[]; timeLimit: number }) {
  const [philosopherOrder] = React.useState<Pair[]>(() => shuffle(board));
  const [conceptOrder] = React.useState<Pair[]>(() => shuffle(board));
  const [selectedPhilosopherId, setSelectedPhilosopherId] = React.useState<string | null>(null);
  const [selectedConceptId, setSelectedConceptId] = React.useState<string | null>(null);
  const [matched, setMatched] = React.useState<Set<string>>(new Set());
  const [wrongFlash, setWrongFlash] = React.useState<{ phi: string; con: string } | null>(null);
  const [timeLeft, setTimeLeft] = React.useState(timeLimit);
  const [running, setRunning] = React.useState(true);
  const awardXp = useStore((s) => s.awardXp);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const startedAt = React.useRef(new Date().toISOString());
  const recordedRef = React.useRef(false);

  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [running]);

  React.useEffect(() => {
    if (timeLeft === 0) setRunning(false);
  }, [timeLeft]);

  React.useEffect(() => {
    if (matched.size === board.length) setRunning(false);
  }, [matched.size, board.length]);

  React.useEffect(() => {
    if (!selectedPhilosopherId || !selectedConceptId) return;
    const correct = board.find(
      (p) => p.philosopherId === selectedPhilosopherId && p.conceptId === selectedConceptId,
    );
    if (correct) {
      setMatched((s) => new Set(s).add(correct.philosopherId));
      awardXp(2);
      setSelectedPhilosopherId(null);
      setSelectedConceptId(null);
    } else {
      setWrongFlash({ phi: selectedPhilosopherId, con: selectedConceptId });
      const t = setTimeout(() => {
        setWrongFlash(null);
        setSelectedPhilosopherId(null);
        setSelectedConceptId(null);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [selectedPhilosopherId, selectedConceptId, board, awardXp]);

  React.useEffect(() => {
    if (running || recordedRef.current) return;
    recordedRef.current = true;
    const accuracy = Math.round((matched.size / board.length) * 100);
    recordQuiz({
      id: `match-${Date.now()}`,
      gameType: "matching",
      score: matched.size,
      accuracy,
      xpEarned: matched.size * 2,
      startedAt: startedAt.current,
      finishedAt: new Date().toISOString(),
    });
  }, [running, matched.size, board.length, recordQuiz]);

  const ended = !running;
  const accuracy = Math.round((matched.size / board.length) * 100);

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Matching</p>
            <h1 className="font-serif text-2xl tracking-tight">Pair the philosopher to the concept</h1>
          </div>
          <Badge variant={timeLeft < 15 ? "due" : "outline"} className="font-sans">{timeLeft}s</Badge>
        </div>
        <div className="mt-3">
          <Progress value={((timeLimit - timeLeft) / timeLimit) * 100} />
        </div>
      </header>

      {ended ? (
        <Card className="p-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
            <Check className="h-6 w-6" />
          </div>
          <h2 className="mt-4 font-serif text-2xl tracking-tight">
            {matched.size === board.length ? "Cleared." : "Time up."}
          </h2>
          <p className="mt-1 text-foreground/80">
            {matched.size} of {board.length} pairs — {accuracy}%.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <Link href="/play"><Button variant="outline">Pick another</Button></Link>
            <Link href="/play/matching"><Button variant="accent">Play again</Button></Link>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">Philosophers</p>
            <div className="space-y-2">
              {philosopherOrder.map((p) => {
                const isMatched = matched.has(p.philosopherId);
                const isSelected = selectedPhilosopherId === p.philosopherId;
                const isWrong = wrongFlash?.phi === p.philosopherId;
                return (
                  <button
                    key={p.philosopherId}
                    type="button"
                    disabled={isMatched}
                    onClick={() => !isMatched && setSelectedPhilosopherId(p.philosopherId)}
                    className={cn(
                      "qz-interactive flex w-full items-center gap-3 rounded-md border px-3 py-3 text-left",
                      isMatched && "opacity-40 line-through",
                      isSelected && "border-foreground bg-muted",
                      isWrong && "border-foreground/60 bg-muted",
                      !isMatched && !isSelected && !isWrong && "border-border bg-card hover:border-foreground/40",
                    )}
                  >
                    <Portrait name={p.philosopherName} src={p.philosopherImage} size="sm" />
                    <span className="font-serif">{p.philosopherName}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">Concepts</p>
            <div className="space-y-2">
              {conceptOrder.map((c) => {
                const isMatched = matched.has(c.philosopherId);
                const isSelected = selectedConceptId === c.conceptId;
                const isWrong = wrongFlash?.con === c.conceptId;
                return (
                  <button
                    key={c.conceptId}
                    type="button"
                    disabled={isMatched}
                    onClick={() => !isMatched && setSelectedConceptId(c.conceptId)}
                    className={cn(
                      "qz-interactive w-full rounded-md border px-3 py-3 text-left",
                      isMatched && "opacity-40 line-through",
                      isSelected && "border-foreground bg-muted",
                      isWrong && "border-foreground/60 bg-muted",
                      !isMatched && !isSelected && !isWrong && "border-border bg-card hover:border-foreground/40",
                    )}
                  >
                    <span className="font-serif">{c.conceptName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
