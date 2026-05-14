"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { generateQuiz, type QuizQuestion } from "@/lib/quiz";
import { getPhilosopher, PHILOSOPHERS } from "@/data/philosophers";
import { getConcept } from "@/data/concepts";
import type { Difficulty } from "@/lib/types";

export default function MultipleChoiceQuiz() {
  const search = useSearchParams();
  const router = useRouter();
  const difficulty = (search.get("d") as Difficulty) ?? "beginner";
  const length = Math.max(1, Math.min(50, parseInt(search.get("l") ?? "10", 10))) as 10 | 25 | 50;

  const progress = useStore((s) => s.progress);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const awardXp = useStore((s) => s.awardXp);
  const unlockAchievement = useStore((s) => s.unlockAchievement);

  const touchedPhilosopherIds = React.useMemo(
    () =>
      Object.values(progress)
        .filter((p) => p.contentType === "philosopher")
        .map((p) => p.contentId),
    [progress],
  );

  const [questions] = React.useState<QuizQuestion[]>(() =>
    generateQuiz(difficulty, length, touchedPhilosopherIds),
  );

  const [idx, setIdx] = React.useState(0);
  const [answered, setAnswered] = React.useState<Record<string, string>>({});
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [revealed, setRevealed] = React.useState(false);
  const [streak, setStreak] = React.useState(0);
  const startedAtRef = React.useRef<string>(new Date().toISOString());

  if (questions.length === 0) return <p>Loading…</p>;

  const q = questions[idx];
  const done = idx >= questions.length;

  const submit = () => {
    if (!selectedId || revealed) return;
    setRevealed(true);
    setAnswered((prev) => ({ ...prev, [q.id]: selectedId }));
    if (selectedId === q.correctId) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      awardXp(1);
      if (newStreak > 0 && newStreak % 5 === 0) awardXp(5);
    } else {
      setStreak(0);
    }
  };

  const advance = () => {
    setSelectedId(null);
    setRevealed(false);
    setIdx((i) => i + 1);
  };

  if (done) {
    const correct = questions.filter((qq) => answered[qq.id] === qq.correctId).length;
    const accuracy = Math.round((correct / questions.length) * 100);
    const wrong = questions
      .filter((qq) => answered[qq.id] && answered[qq.id] !== qq.correctId)
      .slice(0, 2);
    return (
      <Summary
        correct={correct}
        total={questions.length}
        accuracy={accuracy}
        wrong={wrong}
        onComplete={() => {
          recordQuiz({
            id: `quiz-${Date.now()}`,
            gameType: "multiple-choice",
            score: correct,
            accuracy,
            xpEarned: correct,
            startedAt: startedAtRef.current,
            finishedAt: new Date().toISOString(),
          });
          if (accuracy === 100) unlockAchievement("the-cogito");
          router.replace("/home");
        }}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <div className="mb-2 flex items-center justify-between font-sans text-xs text-muted-foreground">
          <span>Question {idx + 1} of {questions.length}</span>
          <span>Streak: {streak}</span>
        </div>
        <Progress value={((idx + 1) / questions.length) * 100} />
      </header>

      <Card className="p-6">
        <p className="font-serif text-xl leading-snug">{q.prompt}</p>

        <div className="mt-6 space-y-2">
          {q.choices.map((c) => {
            const isCorrect = c.id === q.correctId;
            const isSelected = selectedId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                disabled={revealed}
                onClick={() => setSelectedId(c.id)}
                className={
                  "block w-full rounded-md border px-4 py-3 text-left font-serif text-base transition-colors " +
                  (revealed && isCorrect
                    ? "border-accent bg-accent/15"
                    : revealed && isSelected && !isCorrect
                      ? "border-destructive bg-destructive/10"
                      : isSelected
                        ? "border-accent bg-accent/10"
                        : "border-border bg-card hover:border-accent/50")
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <span>{c.label}</span>
                  {revealed && isCorrect && <Check className="h-4 w-4 text-accent" />}
                  {revealed && isSelected && !isCorrect && <X className="h-4 w-4 text-destructive" />}
                </div>
              </button>
            );
          })}
        </div>

        {revealed && (
          <p className="mt-4 rounded-md bg-muted p-3 font-serif text-sm">
            {q.explanation}
          </p>
        )}

        <div className="mt-6 flex justify-end">
          {revealed ? (
            <Button variant="accent" onClick={advance}>
              {idx + 1 === questions.length ? "Finish" : "Next"}
            </Button>
          ) : (
            <Button variant="accent" disabled={!selectedId} onClick={submit}>
              Submit
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

function Summary({
  correct,
  total,
  accuracy,
  wrong,
  onComplete,
}: {
  correct: number;
  total: number;
  accuracy: number;
  wrong: QuizQuestion[];
  onComplete: () => void;
}) {
  React.useEffect(() => {
    // Record exactly once.
    onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pick a single recommendation: the philosopher behind the first wrong answer.
  const rec = wrong[0]?.topic.type === "philosopher"
    ? getPhilosopher(wrong[0].topic.id)
    : wrong[0]?.topic.type === "concept"
      ? PHILOSOPHERS.find((p) => p.id === getConcept(wrong[0].topic.id)?.philosopherIds[0])
      : null;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="font-serif text-3xl tracking-tight">Done.</h1>
      <p className="mt-1 text-foreground/80">
        {correct} of {total} correct — {accuracy}%.
      </p>

      {wrong.length > 0 && (
        <Card className="mt-6 p-6">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            What you missed
          </p>
          <ul className="mt-3 space-y-3">
            {wrong.slice(0, 2).map((q) => (
              <li key={q.id}>
                <p className="font-serif">{q.prompt}</p>
                <p className="mt-1 text-sm text-foreground/85">{q.explanation}</p>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {rec && (
        <Card className="mt-4 p-6">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">One recommendation</p>
          <p className="mt-2 font-serif text-lg">Read {rec.name}.</p>
          <p className="mt-1 line-clamp-2 text-sm text-foreground/80">{rec.shortSummary}</p>
          <div className="mt-4">
            <Link href={`/classroom/philosophers/${rec.slug}`}>
              <Button variant="accent">Open</Button>
            </Link>
          </div>
        </Card>
      )}

      <div className="mt-6">
        <Link href="/home"><Button variant="outline">Home</Button></Link>
      </div>
    </div>
  );
}
