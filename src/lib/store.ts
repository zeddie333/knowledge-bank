"use client";

// Client-side state. Persisted to localStorage via zustand/middleware.
// When Supabase wiring lands, replace persistence with server-state and
// keep the same selectors — components don't need to change.

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { applyRating, isDue, newReview } from "./fsrs";
import type {
  Achievement,
  CardState,
  Collection,
  Difficulty,
  FavouriteEntry,
  FlashcardReview,
  JournalEntry,
  ProgressEntry,
  QuizAttempt,
  Theme,
} from "./types";
import type { Grade } from "ts-fsrs";
import { ACHIEVEMENTS } from "@/data/achievements";

interface OnboardingResult {
  difficulty: Difficulty;
  themesOfInterest: Theme[];
  pace: "5" | "10" | "20" | "30";
  knownPhilosopherIds: string[];
}

interface StoreState {
  // Auth (stubbed — no real Supabase yet)
  authed: boolean;
  username: string | null;
  email: string | null;

  // Profile
  xp: number;
  streakDays: number;
  lastActiveISODate: string | null;
  difficultyPreference: Difficulty;
  themesOfInterest: Theme[];
  pace: "5" | "10" | "20" | "30";
  onboardingComplete: boolean;

  // Content state
  progress: Record<string, ProgressEntry>; // key: `${type}:${id}`
  favourites: FavouriteEntry[];
  collections: Collection[];

  // FSRS state per card id
  reviews: Record<string, FlashcardReview>;

  // Quiz history
  quizAttempts: QuizAttempt[];

  // Journal
  journal: JournalEntry[];

  // Achievements
  achievements: Achievement[];

  // ---------- Actions ----------
  signIn: (email: string, username?: string) => void;
  signOut: () => void;
  completeOnboarding: (r: OnboardingResult) => void;

  markFinished: (contentType: string, contentId: string) => void;
  markReading: (contentType: string, contentId: string, pct: number) => void;

  toggleFavourite: (contentType: string, contentId: string, collectionId?: string | null) => void;
  isFavourite: (contentType: string, contentId: string) => boolean;
  toggleReadLater: (contentType: string, contentId: string) => void;
  isReadLater: (contentType: string, contentId: string) => boolean;
  createCollection: (name: string, description?: string) => string;
  renameCollection: (id: string, name: string) => void;
  deleteCollection: (id: string) => void;

  ensureCardReviews: (cardIds: string[]) => void;
  reviewCard: (cardId: string, rating: Grade) => void;
  resetCard: (cardId: string) => void;

  recordQuiz: (a: QuizAttempt) => void;

  addJournal: (entry: JournalEntry) => void;
  updateJournal: (id: string, patch: Partial<Pick<JournalEntry, "title" | "body">>) => void;
  deleteJournal: (id: string) => void;

  awardXp: (amount: number) => void;
  unlockAchievement: (key: string) => void;
  tickStreak: () => void;

  // Pure selectors (called via getState in non-React contexts only)
  dueCardIds: () => string[];
}

const todayISODate = () => new Date().toISOString().slice(0, 10);

function isConsecutiveDay(prev: string | null, next: string): boolean {
  if (!prev) return false;
  const a = new Date(prev + "T00:00:00").getTime();
  const b = new Date(next + "T00:00:00").getTime();
  return Math.round((b - a) / (1000 * 60 * 60 * 24)) === 1;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      authed: false,
      username: null,
      email: null,

      xp: 0,
      streakDays: 0,
      lastActiveISODate: null,
      difficultyPreference: "beginner",
      themesOfInterest: [],
      pace: "10",
      onboardingComplete: false,

      progress: {},
      favourites: [],
      collections: [],
      reviews: {},
      quizAttempts: [],
      journal: [],
      achievements: [],

      signIn: (email, username) => {
        set({
          authed: true,
          email,
          username: username ?? email.split("@")[0],
        });
      },
      signOut: () => set({ authed: false, email: null, username: null }),

      completeOnboarding: (r) => {
        set({
          onboardingComplete: true,
          difficultyPreference: r.difficulty,
          themesOfInterest: r.themesOfInterest,
          pace: r.pace,
        });
      },

      markFinished: (contentType, contentId) => {
        const key = `${contentType}:${contentId}`;
        const already = get().progress[key]?.status === "finished";
        set((s) => ({
          progress: {
            ...s.progress,
            [key]: {
              contentType: contentType as ProgressEntry["contentType"],
              contentId,
              status: "finished",
              progressPct: 100,
              lastReadAt: new Date().toISOString(),
            },
          },
        }));
        if (!already) get().awardXp(10);
      },

      markReading: (contentType, contentId, pct) => {
        const key = `${contentType}:${contentId}`;
        const existing = get().progress[key];
        if (existing?.status === "finished") return;
        set((s) => ({
          progress: {
            ...s.progress,
            [key]: {
              contentType: contentType as ProgressEntry["contentType"],
              contentId,
              status: "reading",
              progressPct: Math.max(existing?.progressPct ?? 0, pct),
              lastReadAt: new Date().toISOString(),
            },
          },
        }));
      },

      toggleFavourite: (contentType, contentId, collectionId = null) => {
        const present = get().favourites.find(
          (f) =>
            f.contentType === contentType &&
            f.contentId === contentId &&
            (f.kind ?? "favourite") === "favourite",
        );
        if (present) {
          set((s) => ({
            favourites: s.favourites.filter(
              (f) =>
                !(
                  f.contentType === contentType &&
                  f.contentId === contentId &&
                  (f.kind ?? "favourite") === "favourite"
                ),
            ),
          }));
        } else {
          set((s) => ({
            favourites: [
              ...s.favourites,
              {
                contentType: contentType as FavouriteEntry["contentType"],
                contentId,
                collectionId,
                kind: "favourite",
                createdAt: new Date().toISOString(),
              },
            ],
          }));
        }
      },

      isFavourite: (contentType, contentId) =>
        !!get().favourites.find(
          (f) =>
            f.contentType === contentType &&
            f.contentId === contentId &&
            (f.kind ?? "favourite") === "favourite",
        ),

      toggleReadLater: (contentType, contentId) => {
        const present = get().favourites.find(
          (f) =>
            f.contentType === contentType &&
            f.contentId === contentId &&
            f.kind === "read-later",
        );
        if (present) {
          set((s) => ({
            favourites: s.favourites.filter(
              (f) =>
                !(
                  f.contentType === contentType &&
                  f.contentId === contentId &&
                  f.kind === "read-later"
                ),
            ),
          }));
        } else {
          set((s) => ({
            favourites: [
              ...s.favourites,
              {
                contentType: contentType as FavouriteEntry["contentType"],
                contentId,
                collectionId: null,
                kind: "read-later",
                createdAt: new Date().toISOString(),
              },
            ],
          }));
        }
      },

      isReadLater: (contentType, contentId) =>
        !!get().favourites.find(
          (f) =>
            f.contentType === contentType &&
            f.contentId === contentId &&
            f.kind === "read-later",
        ),

      createCollection: (name, description) => {
        const id = `col-${Date.now()}`;
        set((s) => ({
          collections: [
            ...s.collections,
            { id, name, description, createdAt: new Date().toISOString() },
          ],
        }));
        return id;
      },

      renameCollection: (id, name) =>
        set((s) => ({
          collections: s.collections.map((c) => (c.id === id ? { ...c, name } : c)),
        })),

      deleteCollection: (id) =>
        set((s) => ({
          collections: s.collections.filter((c) => c.id !== id),
          favourites: s.favourites.map((f) =>
            f.collectionId === id ? { ...f, collectionId: null } : f,
          ),
        })),

      ensureCardReviews: (cardIds) => {
        const current = get().reviews;
        const missing = cardIds.filter((id) => !current[id]);
        if (missing.length === 0) return;
        const additions: Record<string, FlashcardReview> = {};
        for (const id of missing) additions[id] = newReview(id);
        set({ reviews: { ...current, ...additions } });
      },

      reviewCard: (cardId, rating) => {
        const existing = get().reviews[cardId] ?? newReview(cardId);
        const next = applyRating(existing, rating);
        set((s) => ({ reviews: { ...s.reviews, [cardId]: next } }));
        get().awardXp(1);
        if (Object.keys(get().reviews).length === 1) {
          get().unlockAchievement("first-aphorism");
        }
      },

      resetCard: (cardId) => {
        set((s) => {
          const { [cardId]: _, ...rest } = s.reviews;
          return { reviews: rest };
        });
      },

      recordQuiz: (a) => set((s) => ({ quizAttempts: [a, ...s.quizAttempts].slice(0, 50) })),

      addJournal: (entry) => set((s) => ({ journal: [entry, ...s.journal] })),
      updateJournal: (id, patch) =>
        set((s) => ({
          journal: s.journal.map((j) =>
            j.id === id ? { ...j, ...patch, updatedAt: new Date().toISOString() } : j,
          ),
        })),
      deleteJournal: (id) =>
        set((s) => ({ journal: s.journal.filter((j) => j.id !== id) })),

      awardXp: (amount) => {
        set((s) => ({ xp: s.xp + amount }));
        get().tickStreak();
      },

      unlockAchievement: (key) => {
        const current = get().achievements;
        if (current.find((a) => a.key === key)) return;
        const meta = ACHIEVEMENTS.find((a) => a.key === key);
        if (!meta) return;
        set((s) => ({
          achievements: [
            ...s.achievements,
            { ...meta, unlockedAt: new Date().toISOString() },
          ],
        }));
      },

      tickStreak: () => {
        const today = todayISODate();
        const last = get().lastActiveISODate;
        if (last === today) return; // already counted today
        const consecutive = isConsecutiveDay(last, today);
        set((s) => ({
          lastActiveISODate: today,
          streakDays: consecutive ? s.streakDays + 1 : 1,
        }));
      },

      dueCardIds: () => {
        const reviews = get().reviews;
        const now = new Date();
        return Object.values(reviews)
          .filter((r) => isDue(r, now))
          .map((r) => r.cardId);
      },
    }),
    {
      name: "knowledge-bank-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        authed: s.authed,
        username: s.username,
        email: s.email,
        xp: s.xp,
        streakDays: s.streakDays,
        lastActiveISODate: s.lastActiveISODate,
        difficultyPreference: s.difficultyPreference,
        themesOfInterest: s.themesOfInterest,
        pace: s.pace,
        onboardingComplete: s.onboardingComplete,
        progress: s.progress,
        favourites: s.favourites,
        collections: s.collections,
        reviews: s.reviews,
        quizAttempts: s.quizAttempts,
        journal: s.journal,
        achievements: s.achievements,
      }),
    },
  ),
);

// SSR-safe hydration guard — components can call this to suppress
// hydration mismatches when reading persisted state.
export function useHydrated(): boolean {
  return useStore.persist?.hasHydrated() ?? true;
}

// Re-export so consumers don't need to import from internal location.
export type { Grade } from "ts-fsrs";
export type { CardState };
