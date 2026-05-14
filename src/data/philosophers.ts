import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";
import { ANCIENT } from "./philosophers/ancient";
import { MEDIEVAL } from "./philosophers/medieval";
import { ASIAN } from "./philosophers/asian";
import { EARLY_MODERN } from "./philosophers/early-modern";
import { NINETEENTH } from "./philosophers/nineteenth";
import { ANALYTIC } from "./philosophers/analytic";
import { CONTINENTAL } from "./philosophers/continental";
import { CONTEMPORARY } from "./philosophers/contemporary";
import { EXTRAS } from "./philosophers/extras";

// Editorial voice: confident, a little literary, never reverent for its own sake.
// Every concrete claim is sourced. If a passage couldn't be traced, it's not here.
// Six deep essays live in ancient.ts (Plato, Aristotle, Marcus Aurelius),
// asian.ts (Nāgārjuna), and nineteenth.ts (Nietzsche) + continental.ts (de Beauvoir);
// the rest are shorter editorial entries in the same voice.

export const PHILOSOPHERS: Philosopher[] = [
  ...ANCIENT,
  ...MEDIEVAL,
  ...ASIAN,
  ...EARLY_MODERN,
  ...NINETEENTH,
  ...ANALYTIC,
  ...CONTINENTAL,
  ...CONTEMPORARY,
  ...EXTRAS,
];

export function getPhilosopher(slug: string): Philosopher | undefined {
  return PHILOSOPHERS.find((p) => p.slug === slug);
}

// Re-export helper for the per-era files to share.
export { wikiImage };
