"use client";

import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Portrait } from "@/components/portrait";
import { CONCEPTS } from "@/data/concepts";
import { getPhilosopher } from "@/data/philosophers";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

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

function buildBoard(n = 6): Pair[] {
  const usable = CONCEPTS.filter((c) => c.philosopherIds.length > 0);
  const picked = shuffle(usable).slice(0, n);
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

const TIME_LIMIT = 60; // seconds

export default function MatchingGame() {
  const [board] = React.useState<Pair[]>(() => buildBoard(6));
  const [philosopherOrder] = React.useState<Pair[]>(() => shuffle(board));
  const [conceptOrder] = React.useState<Pair[]>(() => shuffle(board));
  const [selectedPhilosopherId, setSelectedPhilosopherId] = React.useState<string | null>(null);
  const [selectedConceptId, setSelectedConceptId] = React.useState<string | null>(null);
  const [matched, setMatched] = React.useState<Set<string>>(new Set());
  const [wrongFlash, setWrongFlash] = React.useState<{ phi: string; con: string } | null>(null);
  const [timeLeft, setTimeLeft] = React.useState(TIME_LIMIT);
  const [running, setRunning] = React.useState(true);

  const awardXp = useStore((s) => s.awardXp);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const startedAt = React.useRef(new Date().toISOString());
  const recordedRef = React.useRef(false);

  // Timer
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

  // Try-match when both sides are selected.
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

  // Record at end.
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
          <Badge variant={timeLeft < 15 ? "due" : "outline"} className="font-sans">
            {timeLeft}s
          </Badge>
        </div>
        <div className="mt-3">
          <Progress value={((TIME_LIMIT - timeLeft) / TIME_LIMIT) * 100} />
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
