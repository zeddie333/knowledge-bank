"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Portrait } from "@/components/portrait";
import {
  QUIZ,
  SCHOOL_LABELS,
  SCHOOL_REPRESENTATIVES,
  computeResults,
  type SchoolKey,
} from "@/data/personalityQuiz";
import { getPhilosopher } from "@/data/philosophers";

export default function PersonalityProfile() {
  const [picks, setPicks] = React.useState<number[]>([]);
  const [done, setDone] = React.useState(false);

  const restart = () => {
    setPicks([]);
    setDone(false);
  };

  const onAnswer = (answerIdx: number) => {
    const next = [...picks, answerIdx];
    if (next.length === QUIZ.length) {
      setPicks(next);
      setDone(true);
    } else {
      setPicks(next);
    }
  };

  const idx = picks.length;
  const question = QUIZ[idx];

  // Compute running scores in case we want to show them.
  const scores: Record<SchoolKey, number> = {} as Record<SchoolKey, number>;
  picks.forEach((p, i) => {
    const answer = QUIZ[i].answers[p];
    for (const [k, v] of Object.entries(answer.weights)) {
      scores[k as SchoolKey] = (scores[k as SchoolKey] ?? 0) + (v ?? 0);
    }
  });

  if (done) {
    const results = computeResults(scores).slice(0, 6); // top 6
    return <ResultScreen results={results} onRestart={restart} />;
  }

  return (
    <div className="space-y-6">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Philosophy Personality Profile
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">
          Where do you sit, philosophically?
        </h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Twelve questions. No right answers — just answer honestly. Each answer carries weights to a handful of philosophical schools; at the end we'll show you which mix you map onto.
        </p>
      </header>

      <div className="mb-2 flex items-center justify-between font-sans text-xs text-muted-foreground">
        <span>Question {idx + 1} of {QUIZ.length}</span>
        <span>{Math.round(((idx + 1) / QUIZ.length) * 100)}%</span>
      </div>
      <Progress value={((idx + 1) / QUIZ.length) * 100} />

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="p-6">
            <p className="font-serif text-2xl leading-snug">{question.prompt}</p>
            <div className="mt-6 space-y-2">
              {question.answers.map((a, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onAnswer(i)}
                  className="qz-interactive block w-full rounded-md border border-border bg-card px-4 py-3 text-left font-serif hover:border-foreground/40"
                >
                  {a.text}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ResultScreen({
  results,
  onRestart,
}: {
  results: { school: SchoolKey; percentage: number }[];
  onRestart: () => void;
}) {
  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Your philosophy profile
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">
          You map onto —
        </h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          The percentages reflect how heavily your answers leaned toward each
          tradition's characteristic responses. This is a sketch, not a verdict.
        </p>
      </header>

      <Card className="p-6">
        <ul className="space-y-4">
          {results.map((r, i) => (
            <li key={r.school}>
              <div className="mb-1 flex items-baseline justify-between">
                <span className="font-serif text-lg">
                  {i === 0 && <Sparkles className="mr-2 -mt-0.5 inline h-4 w-4" />}
                  {SCHOOL_LABELS[r.school]}
                </span>
                <span className="font-sans text-sm tabular-nums">{r.percentage}%</span>
              </div>
              <Progress value={r.percentage} />
            </li>
          ))}
        </ul>
      </Card>

      <section>
        <h2 className="font-serif text-xl tracking-tight">Philosophers you should read</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The figures most representative of the traditions you map onto.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.slice(0, 3).flatMap((r) => {
            const reps = SCHOOL_REPRESENTATIVES[r.school] ?? [];
            return reps.slice(0, 2).map((slug) => {
              const p = getPhilosopher(slug);
              if (!p) return null;
              return (
                <li key={`${r.school}-${slug}`}>
                  <Link href={`/classroom/philosophers/${p.slug}`}>
                    <Card className="qz-interactive flex items-center gap-3 p-4">
                      <Portrait name={p.name} src={p.imageUrl} size="md" />
                      <div className="min-w-0">
                        <p className="font-serif text-lg leading-tight">{p.name}</p>
                        <Badge variant="outline" className="mt-1">{SCHOOL_LABELS[r.school]}</Badge>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            });
          })}
        </ul>
      </section>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={onRestart}>
          <RotateCcw className="h-4 w-4" /> Retake
        </Button>
        <Link href="/profile"><Button variant="accent">Back to profile</Button></Link>
      </div>

      <p className="font-sans text-xs text-muted-foreground">
        Methodology: a hand-curated 12-question quiz; each answer carries weights to
        a handful of traditions. Results are normalized to percentages. This is a
        rough orientation tool, not a substitute for actually reading the work.
      </p>
    </div>
  );
}
