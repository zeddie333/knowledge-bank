import type { LevelBand, LevelName } from "./types";

// XP bands from the brief. Names belong to the app, not "Level 1, 2..."
export const LEVELS: LevelBand[] = [
  { name: "Initiate", min: 0, max: 500 },
  { name: "Student", min: 500, max: 1500 },
  { name: "Sophist", min: 1500, max: 3500 },
  { name: "Rhetor", min: 3500, max: 7000 },
  { name: "Dialectician", min: 7000, max: 14000 },
  { name: "Philosopher", min: 14000, max: 25000 },
  { name: "Sage", min: 25000, max: Infinity },
];

export function levelFromXp(xp: number): LevelBand {
  return LEVELS.find((l) => xp >= l.min && xp < l.max) ?? LEVELS[LEVELS.length - 1];
}

export function nextLevel(xp: number): LevelBand | null {
  const current = levelFromXp(xp);
  const idx = LEVELS.findIndex((l) => l.name === current.name);
  return LEVELS[idx + 1] ?? null;
}

export function progressInLevel(xp: number): number {
  const lvl = levelFromXp(xp);
  if (lvl.max === Infinity) return 1;
  return (xp - lvl.min) / (lvl.max - lvl.min);
}

export const XP_AWARDS = {
  finishPage: 10,
  flashcardReview: 1,
  quizCorrect: 1,
  quizStreakBonus: 5,
  dailyStreak: 5,
} as const;

export type LevelLookup = Record<LevelName, LevelBand>;
