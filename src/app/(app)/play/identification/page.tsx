"use client";

import * as React from "react";
import Link from "next/link";
import { Check, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Portrait } from "@/components/portrait";
import { QUOTES } from "@/data/quotes";
import { PHILOSOPHERS, getPhilosopher } from "@/data/philosophers";
import { useStore } from "@/lib/store";
import { useFilterSet, FilterRow } from "@/components/game-filters";
import type { Theme, Era, Region } from "@/lib/types";

const THEMES: Theme[] = ["metaphysics", "ethics", "epistemology", "mind", "politics", "aesthetics", "religion", "logic"];
const ERAS: Era[] = ["ancient", "medieval", "early-modern", "modern", "contemporary"];
const REGIONS: Region[] = ["greek", "roman", "east-asian", "south-asian", "islamic", "european", "african", "american"];
const LENGTHS = [5, 10, 20] as const;

interface IdRound {
  passage: string;
  source: string;
  correctId: string;
  choices: string[];
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function philosophersMatching(
  themes: Set<Theme>,
  eras: Set<Era>,
  regions: Set<Region>,
) {
  return PHILOSOPHERS.filter((p) => {
    if (themes.size > 0 && !p.themes.some((t) => themes.has(t))) return false;
    if (eras.size > 0 && !eras.has(p.era)) return false;
    if (regions.size > 0 && !regions.has(p.region)) return false;
    return true;
  });
}

function buildRounds(
  themes: Set<Theme>,
  eras: Set<Era>,
  regions: Set<Region>,
  n: number,
): IdRound[] {
  const eligible = philosophersMatching(themes, eras, regions);
  const eligibleIds = new Set(eligible.map((p) => p.id));
  const usableQuotes = QUOTES.filter(
    (q) => q.text.length > 30 && eligibleIds.has(q.philosopherId),
  );
  const distractorPool = eligible.length >= 4 ? eligible : PHILOSOPHERS;
  return shuffle(usableQuotes)
    .slice(0, n)
    .map((q) => {
      const wrong = shuffle(
        distractorPool.filter((p) => p.id !== q.philosopherId).map((p) => p.id),
      ).slice(0, 3);
      return {
        passage: q.text,
        source: q.sourceLocation,
        correctId: q.philosopherId,
        choices: shuffle([q.philosopherId, ...wrong]),
      };
    });
}

export default function IdentificationGame() {
  const [phase, setPhase] = React.useState<"setup" | "playing">("setup");
  const themes = useFilterSet<Theme>();
  const eras = useFilterSet<Era>();
  const regions = useFilterSet<Region>();
  const [length, setLength] = React.useState<(typeof LENGTHS)[number]>(10);
  const [rounds, setRounds] = React.useState<IdRound[]>([]);

  const previewCount = React.useMemo(
    () =>
      QUOTES.filter(
        (q) =>
          q.text.length > 30 &&
          philosophersMatching(themes.selected, eras.selected, regions.selected).some(
            (p) => p.id === q.philosopherId,
          ),
      ).length,
    [themes.selected, eras.selected, regions.selected],
  );

  if (phase === "setup") {
    return (
      <div className="space-y-8">
        <header>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Let's Play · Identification</p>
          <h1 className="mt-1 font-serif text-3xl tracking-tight">Read the passage. Name the philosopher.</h1>
          <p className="mt-2 max-w-prose text-foreground/80">
            Customize what kinds of passages get drawn. Match every filter or leave them all open.
          </p>
        </header>

        <Card className="space-y-4 p-5">
          <FilterRow label="Theme" options={THEMES} filter={themes} />
          <FilterRow label="Era" options={ERAS} filter={eras} />
          <FilterRow label="Region" options={REGIONS} filter={regions} />
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Length
            </span>
            <div className="flex gap-1.5">
              {LENGTHS.map((l) => (
                <button key={l} type="button" onClick={() => setLength(l)}>
                  <Badge
                    variant={length === l ? "accent" : "outline"}
                    className="qz-chip cursor-pointer"
                  >
                    {l} rounds
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <p className="font-sans text-sm text-muted-foreground">
            <Filter className="-mt-0.5 mr-1 inline h-3.5 w-3.5" />
            {previewCount} passages match these filters.
          </p>
          <Button
            variant="accent"
            disabled={previewCount === 0}
            onClick={() => {
              setRounds(
                buildRounds(themes.selected, eras.selected, regions.selected, length),
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

  return <PlayingRounds rounds={rounds} />;
}

function PlayingRounds({ rounds }: { rounds: IdRound[] }) {
  const [idx, setIdx] = React.useState(0);
  const [pickedId, setPickedId] = React.useState<string | null>(null);
  const [revealed, setRevealed] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const awardXp = useStore((s) => s.awardXp);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const startedAt = React.useRef<string>(new Date().toISOString());

  if (idx >= rounds.length) {
    const accuracy = Math.round((score / rounds.length) * 100);
    return (
      <FinishedScreen
        score={score}
        total={rounds.length}
        accuracy={accuracy}
        onFinishRecord={() => {
          recordQuiz({
            id: `id-${Date.now()}`,
            gameType: "identification",
            score,
            accuracy,
            xpEarned: score,
            startedAt: startedAt.current,
            finishedAt: new Date().toISOString(),
          });
        }}
      />
    );
  }

  const round = rounds[idx];
  const submit = () => {
    if (!pickedId || revealed) return;
    setRevealed(true);
    if (pickedId === round.correctId) {
      setScore((s) => s + 1);
      awardXp(1);
    }
  };
  const next = () => {
    setPickedId(null);
    setRevealed(false);
    setIdx((i) => i + 1);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <div className="mb-2 flex items-center justify-between font-sans text-xs text-muted-foreground">
          <span>Round {idx + 1} of {rounds.length}</span>
          <span>Score: {score}</span>
        </div>
        <Progress value={((idx + 1) / rounds.length) * 100} />
      </header>

      <Card className="p-6">
        <Badge variant="outline" className="font-sans">Identification</Badge>
        <blockquote className="mt-4 border-l-2 border-foreground/40 pl-5 font-serif text-lg italic leading-relaxed">
          “{round.passage}”
        </blockquote>
        {revealed && (
          <p className="mt-2 font-sans text-xs text-muted-foreground">{round.source}</p>
        )}

        <p className="mt-6 font-sans text-xs uppercase tracking-widest text-muted-foreground">Who said this?</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {round.choices.map((pid) => {
            const p = getPhilosopher(pid);
            if (!p) return null;
            const isCorrect = pid === round.correctId;
            const isSelected = pickedId === pid;
            const tone =
              revealed && isCorrect
                ? "border-foreground bg-foreground/10"
                : revealed && isSelected && !isCorrect
                  ? "border-foreground/60 bg-muted line-through"
                  : isSelected
                    ? "border-foreground bg-muted"
                    : "border-border bg-card hover:border-foreground/40";
            return (
              <button
                key={pid}
                type="button"
                disabled={revealed}
                onClick={() => setPickedId(pid)}
                className={`qz-interactive flex items-center gap-3 rounded-md border px-3 py-3 text-left ${tone}`}
              >
                <Portrait name={p.name} src={p.imageUrl} size="sm" />
                <span className="font-serif">{p.name}</span>
                <span className="ml-auto">
                  {revealed && isCorrect && <Check className="h-4 w-4" />}
                  {revealed && isSelected && !isCorrect && <X className="h-4 w-4" />}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          {revealed ? (
            <Button variant="accent" onClick={next}>
              {idx + 1 === rounds.length ? "Finish" : "Next"}
            </Button>
          ) : (
            <Button variant="accent" disabled={!pickedId} onClick={submit}>Submit</Button>
          )}
        </div>
      </Card>
    </div>
  );
}

function FinishedScreen({
  score,
  total,
  accuracy,
  onFinishRecord,
}: {
  score: number;
  total: number;
  accuracy: number;
  onFinishRecord: () => void;
}) {
  React.useEffect(() => {
    onFinishRecord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-auto max-w-md text-center">
      <h1 className="font-serif text-3xl tracking-tight">Done.</h1>
      <p className="mt-1 text-foreground/80">
        {score} of {total} correct — {accuracy}%.
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <Link href="/play"><Button variant="outline">Pick another game</Button></Link>
        <Link href="/play/identification"><Button variant="accent">Play again</Button></Link>
      </div>
    </div>
  );
}
