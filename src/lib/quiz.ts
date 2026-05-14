// Multiple-choice quiz generator. Pulls questions from the user's touched
// content with a small percentage of unseen content for discovery.

import { PHILOSOPHERS } from "@/data/philosophers";
import { CONCEPTS } from "@/data/concepts";
import { QUOTES } from "@/data/quotes";
import type { Difficulty, Theme, Era, Region } from "./types";

export interface QuizFilters {
  themes?: Set<Theme>;
  eras?: Set<Era>;
  regions?: Set<Region>;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: { id: string; label: string }[];
  correctId: string;
  explanation: string;
  // For end-screen "the two things you got wrong" surfacing.
  topic: { type: "philosopher" | "concept" | "quote"; id: string };
}

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function distractors<T>(pool: T[], correct: T, n: number, eq: (a: T, b: T) => boolean): T[] {
  return shuffled(pool.filter((p) => !eq(p, correct))).slice(0, n);
}

function philosopherMatchesFilters(
  p: (typeof PHILOSOPHERS)[number],
  f: QuizFilters | undefined,
): boolean {
  if (!f) return true;
  if (f.themes && f.themes.size > 0 && !p.themes.some((t) => f.themes!.has(t))) return false;
  if (f.eras && f.eras.size > 0 && !f.eras.has(p.era)) return false;
  if (f.regions && f.regions.size > 0 && !f.regions.has(p.region)) return false;
  return true;
}

export function generateQuiz(
  difficulty: Difficulty,
  length: 10 | 25 | 50,
  touchedPhilosopherIds: string[],
  filters?: QuizFilters,
): QuizQuestion[] {
  const philosopherPoolBase = PHILOSOPHERS.filter((p) => philosopherMatchesFilters(p, filters));
  const knownPhilosophers = philosopherPoolBase.filter((p) => touchedPhilosopherIds.includes(p.id));
  const seedPhilosophers = knownPhilosophers.length >= 3 ? knownPhilosophers : philosopherPoolBase;
  const quotesPool = QUOTES.filter((q) =>
    philosopherPoolBase.some((p) => p.id === q.philosopherId),
  );
  const conceptsPool = CONCEPTS.filter((c) => {
    if (!filters?.themes || filters.themes.size === 0) return true;
    return filters.themes.has(c.theme);
  });

  // ~80% from touched content, ~20% from new — per brief.
  const newRatio = 0.2;
  const questions: QuizQuestion[] = [];

  if (philosopherPoolBase.length < 4 || quotesPool.length === 0) {
    return [];
  }

  for (let i = 0; i < length; i++) {
    const useNew = Math.random() < newRatio;
    const philosopherPool = useNew ? philosopherPoolBase : seedPhilosophers;
    const kind = i % 3; // rotate question shapes

    if (kind === 0) {
      // Quote → author
      const q = pick(quotesPool);
      const correct = PHILOSOPHERS.find((p) => p.id === q.philosopherId)!;
      const wrongs = distractors(philosopherPoolBase, correct, 3, (a, b) => a.id === b.id);
      const choices = shuffled([correct, ...wrongs]).map((p) => ({ id: p.id, label: p.name }));
      questions.push({
        id: `q-${i}`,
        prompt: `Who said: “${q.text}”?`,
        choices,
        correctId: correct.id,
        explanation: `${correct.name}, ${q.sourceLocation}.`,
        topic: { type: "quote", id: q.id },
      });
    } else if (kind === 1) {
      // Philosopher → summary
      const correct = pick(philosopherPool);
      const wrongs = distractors(philosopherPoolBase, correct, 3, (a, b) => a.id === b.id);
      const choices = shuffled([
        { id: correct.id, label: correct.shortSummary.split(".")[0] + "." },
        ...wrongs.map((w) => ({ id: w.id, label: w.shortSummary.split(".")[0] + "." })),
      ]);
      questions.push({
        id: `q-${i}`,
        prompt: `Which of these best captures ${correct.name}?`,
        choices,
        correctId: correct.id,
        explanation: `${correct.name}: ${correct.shortSummary}`,
        topic: { type: "philosopher", id: correct.id },
      });
    } else {
      // Concept → philosopher
      const correctConcept = conceptsPool.length > 0 ? pick(conceptsPool) : pick(CONCEPTS);
      const correctPhi =
        PHILOSOPHERS.find((p) => correctConcept.philosopherIds.includes(p.id)) ??
        pick(philosopherPoolBase);
      const wrongs = distractors(philosopherPoolBase, correctPhi, 3, (a, b) => a.id === b.id);
      const choices = shuffled([correctPhi, ...wrongs]).map((p) => ({ id: p.id, label: p.name }));
      questions.push({
        id: `q-${i}`,
        prompt: `${correctConcept.name} — most closely associated with which philosopher?`,
        choices,
        correctId: correctPhi.id,
        explanation: `${correctConcept.name}: ${correctConcept.shortSummary}`,
        topic: { type: "concept", id: correctConcept.id },
      });
    }
  }

  // Difficulty trim: easier difficulties stay with shorter prompts; advanced uses everything.
  if (difficulty === "beginner") return questions.map((q) => ({ ...q })); // no-op for now
  return questions;
}
