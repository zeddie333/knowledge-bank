"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { customDeck } from "@/data/flashcards";
import { useStore } from "@/lib/store";

// Random session: shuffle the entire card pool, pull 20.
export default function StudyRandom() {
  const router = useRouter();
  const ensure = useStore((s) => s.ensureCardReviews);

  React.useEffect(() => {
    const cards = customDeck({
      contentTypes: new Set(),
      themes: new Set(),
      eras: new Set(),
      regions: new Set(),
      limit: 20,
      random: true,
    });
    ensure(cards.map((c) => c.id));
    sessionStorage.setItem("custom-deck-ids", JSON.stringify(cards.map((c) => c.id)));
    router.replace("/study/custom-session");
  }, [ensure, router]);

  return (
    <p className="text-muted-foreground">Shuffling…</p>
  );
}
