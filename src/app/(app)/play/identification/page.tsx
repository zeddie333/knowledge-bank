"use client";

import * as React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Portrait } from "@/components/portrait";
import { QUOTES } from "@/data/quotes";
import { PHILOSOPHERS, getPhilosopher } from "@/data/philosophers";
import { useStore } from "@/lib/store";

interface IdRound {
  passage: string;
  source: string;
  correctId: string;
  choices: string[]; // philosopher ids
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function buildRounds(n = 10): IdRound[] {
  const usable = QUOTES.filter((q) => q.text.length > 30); // exclude over-short fragments
  return shuffle(usable)
    .slice(0, n)
    .map((q) => {
      const wrong = shuffle(
        PHILOSOPHERS.filter((p) => p.id !== q.philosopherId).map((p) => p.id),
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
  const [rounds] = React.useState<IdRound[]>(() => buildRounds(10));
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
