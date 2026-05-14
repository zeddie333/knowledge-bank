"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import { flashcardsForDeck } from "@/data/flashcards";

export function MakeFlashcardsButton({ deckId }: { deckId: string }) {
  const ensureCardReviews = useStore((s) => s.ensureCardReviews);
  const router = useRouter();
  const [added, setAdded] = React.useState(false);

  const handleClick = () => {
    const ids = flashcardsForDeck(deckId).map((c) => c.id);
    ensureCardReviews(ids);
    setAdded(true);
    setTimeout(() => router.push("/study/review"), 600);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleClick} disabled={added}>
      {added ? <Check className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
      {added ? "Added — opening review…" : "Make flashcards from this"}
    </Button>
  );
}
