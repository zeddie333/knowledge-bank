"use client";

import Link from "next/link";
import * as React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ScrollText, Shuffle, Sparkles, Sliders } from "lucide-react";
import { DECKS, AUTO_DECKS, flashcardsForDeck } from "@/data/flashcards";
import { useStore, useHydrated } from "@/lib/store";
import { dueCount } from "@/lib/fsrs";

export default function StudyHome() {
  const hydrated = useHydrated();
  const reviews = useStore((s) => s.reviews);
  const due = React.useMemo(() => dueCount(Object.values(reviews)), [reviews]);
  const totalCards = Object.keys(reviews).length;

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Study</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Spaced repetition</h1>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Pick a curated deck, generate one from any philosopher or school, or build a custom set by filter. FSRS handles the scheduling.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/study/review" className="md:col-span-1">
          <Card className="qz-interactive h-full p-6">
            <div className="flex items-center justify-between">
              <p className="font-serif text-xl">Review</p>
              <Badge variant={due > 0 ? "due" : "outline"}>{hydrated ? `${due} due` : "—"}</Badge>
            </div>
            <p className="mt-2 text-sm text-foreground/80">FSRS-driven. Whatever's due across your decks, mixed.</p>
            <p className="mt-1 font-sans text-xs text-muted-foreground">
              {hydrated ? `${totalCards} cards in queue` : ""}
            </p>
          </Card>
        </Link>
        <Link href="/study/customize" className="md:col-span-1">
          <Card className="qz-interactive h-full p-6">
            <div className="flex items-center gap-2">
              <Sliders className="h-5 w-5" />
              <p className="font-serif text-xl">Customize</p>
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              Pick a content type (philosopher / concept / quote) and any theme, era, or region. Build a deck to your spec.
            </p>
          </Card>
        </Link>
        <Link href="/study/random" className="md:col-span-1">
          <Card className="qz-interactive h-full p-6">
            <div className="flex items-center gap-2">
              <Shuffle className="h-5 w-5" />
              <p className="font-serif text-xl">Random</p>
            </div>
            <p className="mt-2 text-sm text-foreground/80">
              Shuffle the entire card pool. Twenty cards drawn from anywhere.
            </p>
          </Card>
        </Link>
      </div>

      <section>
        <h2 className="flex items-center gap-2 font-serif text-xl tracking-tight">
          <Sparkles className="h-4 w-4" /> Curated decks
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {DECKS.map((d) => <DeckRow key={d.id} deck={d} />)}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl tracking-tight">All decks</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Auto-generated from the content. One per philosopher, one per school of thought.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {AUTO_DECKS.map((d) => <DeckRow key={d.id} deck={d} />)}
        </div>
      </section>
    </div>
  );
}

function DeckRow({ deck }: { deck: { id: string; name: string; description: string } }) {
  const count = flashcardsForDeck(deck.id).length;
  const ensure = useStore((s) => s.ensureCardReviews);
  const [done, setDone] = React.useState(false);
  return (
    <Card className="flex items-center justify-between p-5">
      <div className="min-w-0">
        <p className="font-serif text-lg leading-tight">{deck.name}</p>
        <p className="mt-1 line-clamp-2 text-sm text-foreground/80">{deck.description}</p>
        <p className="mt-1 font-sans text-xs text-muted-foreground">{count} cards</p>
      </div>
      <div className="ml-4 flex shrink-0 flex-col gap-2">
        <Link href={`/study/practice/${deck.id}`}>
          <Button variant="outline" size="sm">
            <ScrollText className="h-4 w-4" /> Practice
          </Button>
        </Link>
        <Button
          variant="accent"
          size="sm"
          onClick={() => {
            ensure(flashcardsForDeck(deck.id).map((c) => c.id));
            setDone(true);
          }}
          disabled={done || count === 0}
        >
          <Play className="h-4 w-4" /> {done ? "Added" : "Add to review"}
        </Button>
      </div>
    </Card>
  );
}
