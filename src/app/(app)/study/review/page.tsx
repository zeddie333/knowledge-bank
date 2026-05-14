"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlashcardFace } from "@/components/flashcard-face";
import { useStore, useHydrated } from "@/lib/store";
import { isDue, RATINGS } from "@/lib/fsrs";
import { ALL_CARDS } from "@/data/flashcards";
import { Check } from "lucide-react";

export default function ReviewSession() {
  const hydrated = useHydrated();
  const reviews = useStore((s) => s.reviews);
  const reviewCard = useStore((s) => s.reviewCard);

  // Snapshot the session queue once — additions during the session don't
  // jump in, and rescheduled cards don't surprise you by reappearing.
  const [queueIds, setQueueIds] = React.useState<string[] | null>(null);

  React.useEffect(() => {
    if (!hydrated || queueIds !== null) return;
    const now = new Date();
    const ids = Object.values(reviews)
      .filter((r) => isDue(r, now))
      .map((r) => r.cardId);
    setQueueIds(ids);
  }, [hydrated, queueIds, reviews]);

  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [doneCount, setDoneCount] = React.useState(0);

  if (!hydrated || queueIds === null) {
    return <SkeletonCard />;
  }

  if (queueIds.length === 0) {
    return <EmptyState />;
  }

  if (idx >= queueIds.length) {
    return <SessionDone count={doneCount} />;
  }

  const currentId = queueIds[idx];
  const card = ALL_CARDS.find((c) => c.id === currentId);
  if (!card) {
    // Card no longer exists; skip.
    setIdx((i) => i + 1);
    return <SkeletonCard />;
  }

  const grade = (rating: (typeof RATINGS)[number]["rating"]) => {
    reviewCard(currentId, rating);
    setDoneCount((c) => c + 1);
    setFlipped(false);
    setIdx((i) => i + 1);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6 flex items-center justify-between">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Reviewing
        </p>
        <p className="font-sans text-xs text-muted-foreground">
          {idx + 1} of {queueIds.length}
        </p>
      </header>

      <FlashcardFace card={card} flipped={flipped} onClick={() => setFlipped((f) => !f)} />

      {flipped ? (
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {RATINGS.map((r) => (
            <Button
              key={r.id}
              variant={r.id === "again" ? "destructive" : r.id === "easy" ? "accent" : "outline"}
              onClick={() => grade(r.rating)}
              className="flex h-auto flex-col items-stretch gap-0.5 py-3"
            >
              <span className="font-sans text-sm">{r.label}</span>
              <span className="font-sans text-[10px] opacity-80">{r.helper}</span>
            </Button>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-center font-sans text-xs text-muted-foreground">
          Try to recall before flipping. The strain is the practice.
        </p>
      )}
    </div>
  );
}

function SessionDone({ count }: { count: number }) {
  return (
    <div className="mx-auto max-w-md text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
        <Check className="h-6 w-6" />
      </div>
      <h1 className="mt-4 font-serif text-3xl tracking-tight">Done for now.</h1>
      <p className="mt-2 text-foreground/80">
        {count} {count === 1 ? "card" : "cards"} reviewed. The next ones return when they return.
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <Link href="/study">
          <Button variant="outline">All decks</Button>
        </Link>
        <Link href="/home">
          <Button variant="accent">Home</Button>
        </Link>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-md text-center">
      <h1 className="font-serif text-3xl tracking-tight">Nothing due.</h1>
      <p className="mt-2 text-foreground/80">
        FSRS waits until a card is worth seeing again. Add cards from a philosopher page, or browse the decks.
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <Link href="/classroom"><Button variant="outline">Classroom</Button></Link>
        <Link href="/study"><Button variant="accent">All decks</Button></Link>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <Card className="mx-auto max-w-2xl h-[320px] animate-pulse bg-muted" />
  );
}
