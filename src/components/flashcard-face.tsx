"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Flashcard } from "@/lib/types";

// True 3D flip — both faces rendered, the container rotates on Y.
// Spring physics for a satisfying overshoot.
export function FlashcardFace({
  card,
  flipped,
  onClick,
}: {
  card: Flashcard;
  flipped: boolean;
  onClick: () => void;
}) {
  return (
    <div className="w-full" style={{ perspective: 1400 }}>
      <button
        type="button"
        onClick={onClick}
        className="relative block w-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={flipped ? "Show prompt" : "Reveal answer"}
      >
        <motion.div
          className="relative min-h-[280px] sm:min-h-[340px]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.9 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <CardFace card={card} side="front" />
          <CardFace card={card} side="back" />
        </motion.div>
      </button>
      <p className="mt-3 text-center font-sans text-xs text-muted-foreground">
        Tap card · Space or Enter to flip
      </p>
    </div>
  );
}

function CardFace({ card, side }: { card: Flashcard; side: "front" | "back" }) {
  const isBack = side === "back";
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center rounded-lg border border-border bg-card p-8 sm:p-12 text-center shadow-sm",
      )}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: isBack ? "rotateY(180deg)" : undefined,
      }}
    >
      <div className="max-w-lg">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          {isBack ? "Answer" : "Prompt"}
        </p>
        <p
          className={cn(
            "mt-3 font-serif",
            isBack ? "text-lg leading-relaxed" : "text-2xl leading-snug",
          )}
        >
          {isBack ? card.back : card.front}
        </p>
      </div>
    </div>
  );
}
