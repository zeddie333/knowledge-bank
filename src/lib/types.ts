// Content + user-state types. These mirror the Supabase schema in the brief,
// so swapping the mock data layer for `@supabase/supabase-js` later is a seam,
// not a rewrite.

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type ContentType =
  | "philosopher"
  | "concept"
  | "school"
  | "text"
  | "quote"
  | "thought_experiment";

export type Theme =
  | "metaphysics"
  | "ethics"
  | "epistemology"
  | "mind"
  | "politics"
  | "aesthetics"
  | "religion"
  | "logic"
  | "science"
  | "language";

export type Era =
  | "ancient"
  | "medieval"
  | "early-modern"
  | "modern"
  | "contemporary";

export type Region =
  | "greek"
  | "roman"
  | "east-asian"
  | "south-asian"
  | "islamic"
  | "european"
  | "african"
  | "american";

export interface Source {
  title: string;
  url?: string;
  cite: string;
}

export interface Philosopher {
  id: string;
  slug: string;
  name: string;
  birthYear: number | null;
  deathYear: number | null;
  region: Region;
  era: Era;
  shortSummary: string;
  fullBody: string; // markdown
  difficulty: Difficulty;
  readingTimeMinutes: number;
  imageUrl: string | null;
  themes: Theme[];
  sources: Source[];
}

export interface Concept {
  id: string;
  slug: string;
  name: string;
  shortSummary: string;
  fullBody: string;
  difficulty: Difficulty;
  theme: Theme;
  imageUrl?: string | null;
  philosopherIds: string[]; // people who advanced / defined this
  sources: Source[];
}

export interface School {
  id: string;
  slug: string;
  name: string;
  shortSummary: string;
  fullBody: string;
  eraStart: number;
  eraEnd: number | null;
  region: Region;
  imageUrl?: string | null;
  philosopherIds: string[];
}

export interface Text {
  id: string;
  slug: string;
  title: string;
  authorId: string;
  yearWritten: number;
  shortSummary: string;
  keyPassages: { location: string; text: string }[];
  languageOriginal: string;
  imageUrl?: string | null;
  themes?: Theme[];
  region?: Region;
  era?: Era;
}

export interface Quote {
  id: string;
  text: string;
  philosopherId: string;
  sourceTextId: string | null;
  sourceLocation: string; // e.g. "§259", "p.84", "Republic 514a"
  context?: string;
}

export interface Relationship {
  id: string;
  fromType: ContentType;
  fromId: string;
  toType: ContentType;
  toId: string;
  relation:
    | "influenced"
    | "critiqued"
    | "student_of"
    | "belongs_to"
    | "exemplifies"
    | "related_to";
  notes?: string;
}

export interface ThoughtExperiment {
  id: string;
  slug: string;
  title: string;
  setup: string;
  question: string;
  options: { id: string; label: string }[];
  reveal: {
    philosopherId?: string;
    schoolId?: string;
    position: string;
  }[];
  relatedPhilosopherIds: string[];
  relatedConceptIds: string[];
  imageUrl?: string | null;
}

// ---------- User state ----------

export type LevelName =
  | "Initiate"
  | "Student"
  | "Sophist"
  | "Rhetor"
  | "Dialectician"
  | "Philosopher"
  | "Sage";

export interface LevelBand {
  name: LevelName;
  min: number;
  max: number; // exclusive upper bound (Infinity for Sage)
}

export interface Profile {
  id: string;
  username: string;
  xp: number;
  streakDays: number;
  lastActiveAt: string;
  difficultyPreference: Difficulty;
  themesOfInterest: Theme[];
}

export interface ProgressEntry {
  contentType: ContentType;
  contentId: string;
  status: "reading" | "finished";
  progressPct: number;
  lastReadAt: string;
}

export type SaveKind = "favourite" | "read-later";

export interface FavouriteEntry {
  contentType: ContentType;
  contentId: string;
  collectionId: string | null;
  kind: SaveKind;
  createdAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}

// FSRS state stored per card.
export type CardState = "new" | "learning" | "review" | "relearning";

export interface FlashcardReview {
  cardId: string;
  due: string; // ISO
  stability: number;
  difficulty: number;
  elapsedDays: number;
  scheduledDays: number;
  reps: number;
  lapses: number;
  state: CardState;
  lastReview: string | null;
}

export interface Flashcard {
  id: string;
  deckId: string;
  front: string;
  back: string;
  kind: "term-def" | "quote-author" | "philosopher-idea" | "concept-school";
  sourceContentType: ContentType;
  sourceContentId: string;
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  sourceContentType: ContentType;
  sourceContentId: string;
}

export interface QuizAttempt {
  id: string;
  gameType: "multiple-choice" | "identification" | "matching";
  score: number;
  accuracy: number;
  xpEarned: number;
  startedAt: string;
  finishedAt: string;
}

export interface Achievement {
  key: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface JournalEntry {
  id: string;
  date: string;           // ISO date (yyyy-mm-dd) for grouping/streaks
  createdAt: string;      // full ISO timestamp
  updatedAt: string;
  title: string;
  prompt: string;         // empty string for free entries
  body: string;
  themeAnchor?: Theme;
}
