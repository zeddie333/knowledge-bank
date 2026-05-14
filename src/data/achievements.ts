import type { Achievement } from "@/lib/types";

// Specific and witty, never generic — per brief.
export const ACHIEVEMENTS: Achievement[] = [
  { key: "allegory-approved", title: "Allegory Approved", description: "Finish the Plato's Cave thought experiment.", icon: "Mountain" },
  { key: "bad-faith-detector", title: "Bad Faith Detector", description: "Read three existentialists.", icon: "Search" },
  { key: "beyond-the-pillars", title: "Beyond the Pillars", description: "Read your first non-Western philosopher.", icon: "Compass" },
  { key: "daily-examination", title: "Daily Examination", description: "Seven-day journal streak.", icon: "BookOpen" },
  { key: "memento-mori", title: "Memento Mori", description: "Finish a Stoic.", icon: "Hourglass" },
  { key: "the-examined-life", title: "The Examined Life", description: "Read 30 philosopher pages.", icon: "Library" },
  { key: "the-cogito", title: "The Cogito", description: "Complete your first quiz with 100% accuracy.", icon: "BrainCircuit" },
  { key: "first-aphorism", title: "First Aphorism", description: "Master your first flashcard.", icon: "Sparkles" },
];
