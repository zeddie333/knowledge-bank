"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlashcardFace } from "@/components/flashcard-face";
import { ALL_CARDS } from "@/data/flashcards";
import { useStore } from "@/lib/store";
import { RATINGS } from "@/lib/fsrs";
import { Check } from "lucide-react";

// Reads the card IDs from sessionStorage (set by /customize or /random),
// then runs an FSRS session over them.
export default function CustomSession() {
  const reviewCard = useStore((s) => s.reviewCard);
  const [queue, setQueue] = React.useState<string[] | null>(null);
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    const raw = sessionStorage.getItem("custom-deck-ids");
    setQueue(raw ? (JSON.parse(raw) as string[]) : []);
  }, []);

  if (queue === null) {
    return <Card className="h-64 animate-pulse bg-muted" />;
  }
  if (queue.length === 0) {
    return (
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-serif text-3xl tracking-tight">No cards selected.</h1>
        <p className="mt-2 text-foreground/80">Go back and adjust the filters.</p>
        <Link href="/study/customize" className="mt-4 inline-block">
          <Button variant="accent">Customize</Button>
        </Link>
      </div>
    );
  }

  if (idx >= queue.length) {
    return (
      <div className="mx-auto max-w-md text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
          <Check className="h-6 w-6" />
        </div>
        <h1 className="mt-4 font-serif text-3xl tracking-tight">Session complete.</h1>
        <p className="mt-2 text-foreground/80">{queue.length} cards reviewed.</p>
        <div className="mt-6 flex justify-center gap-2">
          <Link href="/study"><Button variant="outline">All decks</Button></Link>
          <Link href="/home"><Button variant="accent">Home</Button></Link>
        </div>
      </div>
    );
  }

  const cardId = queue[idx];
  const card = ALL_CARDS.find((c) => c.id === cardId);
  if (!card) {
    setIdx((i) => i + 1);
    return null;
  }

  const grade = (rating: (typeof RATINGS)[number]["rating"]) => {
    reviewCard(cardId, rating);
    setFlipped(false);
    setIdx((i) => i + 1);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6 flex items-center justify-between">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Custom session</p>
        <p className="font-sans text-xs text-muted-foreground">
          {idx + 1} of {queue.length}
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
          Recall before flipping. The strain is the practice.
        </p>
      )}
    </div>
  );
}
