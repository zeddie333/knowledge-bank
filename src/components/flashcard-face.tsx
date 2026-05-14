"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Flashcard } from "@/lib/types";

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
    <button
      type="button"
      onClick={onClick}
      className="relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
      aria-label={flipped ? "Show front" : "Reveal answer"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={flipped ? "back" : "front"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={cn(
            "min-h-[260px] sm:min-h-[320px] rounded-lg border border-border bg-card p-8 sm:p-12",
            "flex items-center justify-center text-center",
          )}
        >
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              {flipped ? "Answer" : "Prompt"}
            </p>
            <p className={cn("mt-3 font-serif", flipped ? "text-lg leading-relaxed" : "text-2xl leading-snug")}>
              {flipped ? card.back : card.front}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className="mt-3 text-center font-sans text-xs text-muted-foreground">
        Tap card to {flipped ? "show prompt" : "reveal"}
      </p>
    </button>
  );
}
