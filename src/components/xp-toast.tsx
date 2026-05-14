"use client";

// Subtle "+N XP" toast that fires whenever the persisted XP value increases.
// Reads directly from the zustand store; no event bus needed.

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useStore, useHydrated } from "@/lib/store";

interface Toast {
  id: number;
  delta: number;
}

export function XpToast() {
  const hydrated = useHydrated();
  const xp = useStore((s) => s.xp);
  const prev = React.useRef<number | null>(null);
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  React.useEffect(() => {
    if (!hydrated) return;
    // Initialize ref on first hydrated reading; don't fire a toast for it.
    if (prev.current === null) {
      prev.current = xp;
      return;
    }
    if (xp > prev.current) {
      const delta = xp - prev.current;
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, delta }]);
      // Auto-remove after the animation completes.
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 1800);
    }
    prev.current = xp;
  }, [xp, hydrated]);

  return (
    <div className="pointer-events-none fixed bottom-20 right-6 z-50 flex flex-col items-end gap-2 lg:bottom-6">
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 240, damping: 20, mass: 0.7 }}
            className="rounded-full border border-border bg-card px-3 py-1.5 shadow-md"
          >
            <span className="inline-flex items-center gap-1.5 font-sans text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              +{t.delta} XP
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
