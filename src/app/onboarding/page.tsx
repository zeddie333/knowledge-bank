"use client";

// Placement quiz. 5–7 questions that seed difficulty + theme interest + pace.

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useStore, useHydrated } from "@/lib/store";
import type { Difficulty, Theme } from "@/lib/types";

const STEPS = [
  {
    id: "philosophers",
    kind: "multi" as const,
    question: "Which of these have you heard of? Pick any that ring a bell.",
    options: [
      { id: "plato", label: "Plato" },
      { id: "aristotle", label: "Aristotle" },
      { id: "marcus-aurelius", label: "Marcus Aurelius" },
      { id: "nagarjuna", label: "Nāgārjuna" },
      { id: "nietzsche", label: "Nietzsche" },
      { id: "de-beauvoir", label: "Simone de Beauvoir" },
      { id: "confucius", label: "Confucius" },
      { id: "foucault", label: "Foucault" },
    ],
  },
  {
    id: "background",
    kind: "single" as const,
    question: "Which best describes you?",
    options: [
      { id: "beginner", label: "Complete beginner. I want to start somewhere." },
      { id: "intermediate", label: "Read some. Mostly self-taught." },
      { id: "advanced", label: "Studied philosophy formally." },
    ],
  },
  {
    id: "interest",
    kind: "single" as const,
    question: "Pick the question that pulls at you most.",
    options: [
      { id: "ethics", label: "How should I live?" },
      { id: "metaphysics", label: "What is real?" },
      { id: "mind", label: "What is consciousness?" },
      { id: "politics", label: "What do we owe each other?" },
    ],
  },
  {
    id: "pace",
    kind: "single" as const,
    question: "How much time do you want to give this in a day?",
    options: [
      { id: "5", label: "5 minutes" },
      { id: "10", label: "10 minutes" },
      { id: "20", label: "20 minutes" },
      { id: "30", label: "30+ minutes" },
    ],
  },
] as const;

type Answers = Record<string, string | string[]>;

export default function Onboarding() {
  const router = useRouter();
  const hydrated = useHydrated();
  const authed = useStore((s) => s.authed);
  const onboardingComplete = useStore((s) => s.onboardingComplete);
  const completeOnboarding = useStore((s) => s.completeOnboarding);

  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answers>({});

  React.useEffect(() => {
    if (!hydrated) return;
    if (!authed) router.replace("/");
    if (authed && onboardingComplete) router.replace("/home");
  }, [authed, onboardingComplete, hydrated, router]);

  if (!hydrated || !authed) return null;

  const current = STEPS[step];
  const currentAnswer = answers[current.id];
  const canAdvance = current.kind === "multi" ? true : !!currentAnswer;

  const advance = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }
    const background = answers["background"] as Difficulty;
    const interest = answers["interest"] as Theme;
    const pace = answers["pace"] as "5" | "10" | "20" | "30";
    const known = (answers["philosophers"] as string[] | undefined) ?? [];
    completeOnboarding({
      difficulty: background ?? "beginner",
      themesOfInterest: interest ? [interest] : ["ethics"],
      pace: pace ?? "10",
      knownPhilosopherIds: known,
    });
    router.push("/home");
  };

  return (
    <div className="min-h-screen">
      <main className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12">
        <div className="mb-10">
          <div className="mb-2 flex items-center justify-between font-sans text-xs text-muted-foreground">
            <span>Question {step + 1} of {STEPS.length}</span>
            <span>You can change all of this later in profile.</span>
          </div>
          <Progress value={((step + 1) / STEPS.length) * 100} />
        </div>

        <h1 className="font-serif text-3xl leading-snug tracking-tight">
          {current.question}
        </h1>

        <div className="mt-8 space-y-2">
          {current.options.map((opt) => {
            const selected =
              current.kind === "multi"
                ? Array.isArray(currentAnswer) && currentAnswer.includes(opt.id)
                : currentAnswer === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  if (current.kind === "multi") {
                    const arr = Array.isArray(currentAnswer) ? currentAnswer : [];
                    setAnswers({
                      ...answers,
                      [current.id]: arr.includes(opt.id)
                        ? arr.filter((x) => x !== opt.id)
                        : [...arr, opt.id],
                    });
                  } else {
                    setAnswers({ ...answers, [current.id]: opt.id });
                  }
                }}
                className={
                  "block w-full rounded-md border px-4 py-3 text-left font-serif text-base transition-colors " +
                  (selected
                    ? "border-accent bg-accent/10"
                    : "border-border bg-card hover:border-accent/50")
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <span>{opt.label}</span>
                  {selected ? <Badge variant="accent">Selected</Badge> : null}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Button
            variant="ghost"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button variant="accent" onClick={advance} disabled={!canAdvance}>
            {step === STEPS.length - 1 ? "Begin" : "Next"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
