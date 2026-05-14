// Thin FSRS wrapper around ts-fsrs. The library handles all the math;
// we expose just enough surface area for the review screen.

import { fsrs, generatorParameters, Rating, State, type Card, type Grade } from "ts-fsrs";
import type { FlashcardReview } from "./types";

const params = generatorParameters({ enable_fuzz: true, enable_short_term: true });
const scheduler = fsrs(params);

export const RATINGS: { id: "again" | "hard" | "good" | "easy"; rating: Grade; label: string; helper: string }[] = [
  { id: "again", rating: Rating.Again as Grade, label: "Again", helper: "I forgot." },
  { id: "hard", rating: Rating.Hard as Grade, label: "Hard", helper: "Got it, just barely." },
  { id: "good", rating: Rating.Good as Grade, label: "Good", helper: "Got it, with effort." },
  { id: "easy", rating: Rating.Easy as Grade, label: "Easy", helper: "Trivial; space it out." },
];

function toCard(review: FlashcardReview): Card {
  return {
    due: new Date(review.due),
    stability: review.stability,
    difficulty: review.difficulty,
    elapsed_days: review.elapsedDays,
    scheduled_days: review.scheduledDays,
    reps: review.reps,
    lapses: review.lapses,
    state: stateFromString(review.state),
    last_review: review.lastReview ? new Date(review.lastReview) : undefined,
  };
}

function stateFromString(s: FlashcardReview["state"]): State {
  switch (s) {
    case "new": return State.New;
    case "learning": return State.Learning;
    case "review": return State.Review;
    case "relearning": return State.Relearning;
  }
}

function stateToString(s: State): FlashcardReview["state"] {
  switch (s) {
    case State.New: return "new";
    case State.Learning: return "learning";
    case State.Review: return "review";
    case State.Relearning: return "relearning";
  }
}

export function newReview(cardId: string): FlashcardReview {
  const now = new Date();
  return {
    cardId,
    due: now.toISOString(),
    stability: 0,
    difficulty: 0,
    elapsedDays: 0,
    scheduledDays: 0,
    reps: 0,
    lapses: 0,
    state: "new",
    lastReview: null,
  };
}

export function applyRating(review: FlashcardReview, rating: Grade, now: Date = new Date()): FlashcardReview {
  const card = toCard(review);
  const item = scheduler.next(card, now, rating);
  const next = item.card;
  return {
    cardId: review.cardId,
    due: next.due.toISOString(),
    stability: next.stability,
    difficulty: next.difficulty,
    elapsedDays: next.elapsed_days,
    scheduledDays: next.scheduled_days,
    reps: next.reps,
    lapses: next.lapses,
    state: stateToString(next.state),
    lastReview: now.toISOString(),
  };
}

export function isDue(review: FlashcardReview, now: Date = new Date()): boolean {
  return new Date(review.due).getTime() <= now.getTime();
}

export function dueCount(reviews: FlashcardReview[], now: Date = new Date()): number {
  return reviews.filter((r) => isDue(r, now)).length;
}
