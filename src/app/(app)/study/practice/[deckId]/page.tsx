"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FlashcardFace } from "@/components/flashcard-face";
import { ArrowLeft, ArrowRight, Shuffle } from "lucide-react";
import { flashcardsForDeck, getDeck } from "@/data/flashcards";

export default function PracticeDeck() {
  const params = useParams<{ deckId: string }>();
  const deck = getDeck(params.deckId);
  const allCards = React.useMemo(() => flashcardsForDeck(params.deckId), [params.deckId]);
  const [order, setOrder] = React.useState<number[]>(allCards.map((_, i) => i));
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  if (!deck) {
    return <p className="text-muted-foreground">Deck not found.</p>;
  }
  if (allCards.length === 0) {
    return <p className="text-muted-foreground">This deck has no cards yet.</p>;
  }

  const card = allCards[order[idx]];

  const next = () => {
    setFlipped(false);
    setIdx((i) => (i + 1) % order.length);
  };
  const prev = () => {
    setFlipped(false);
    setIdx((i) => (i - 1 + order.length) % order.length);
  };
  const shuffle = () => {
    const o = [...order];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    setOrder(o);
    setIdx(0);
    setFlipped(false);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Practice</p>
          <h1 className="mt-1 font-serif text-2xl tracking-tight">{deck.name}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={shuffle}>
            <Shuffle className="h-4 w-4" /> Shuffle
          </Button>
          <Link href="/study"><Button variant="ghost" size="sm">All decks</Button></Link>
        </div>
      </header>

      <FlashcardFace card={card} flipped={flipped} onClick={() => setFlipped((f) => !f)} />

      <div className="mt-6 flex items-center justify-between">
        <Button variant="outline" size="sm" onClick={prev}>
          <ArrowLeft className="h-4 w-4" /> Prev
        </Button>
        <span className="font-sans text-xs text-muted-foreground">
          {idx + 1} / {order.length}
        </span>
        <Button variant="outline" size="sm" onClick={next}>
          Next <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
