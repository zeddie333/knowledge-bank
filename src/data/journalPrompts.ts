import type { Theme } from "@/lib/types";

export interface JournalPrompt {
  id: string;
  prompt: string;
  anchor: Theme;
  attribution: string;
}

export const JOURNAL_PROMPTS: JournalPrompt[] = [
  {
    id: "marcus-control",
    prompt:
      "Marcus Aurelius writes that we should ask each morning what we can and can't control. What's one thing in each column for you today?",
    anchor: "ethics",
    attribution: "Meditations II.1",
  },
  {
    id: "nietzsche-recurrence",
    prompt:
      "If a demon offered you this day again, every detail in the same order, forever — what would you keep, and what would you wish to do differently?",
    anchor: "ethics",
    attribution: "Nietzsche, The Gay Science §341",
  },
  {
    id: "aristotle-habit",
    prompt:
      "Aristotle thought we become what we repeatedly do. What did you repeat today, and what is it making of you?",
    anchor: "ethics",
    attribution: "Nicomachean Ethics II.1",
  },
  {
    id: "plato-shadows",
    prompt:
      "Name one belief you hold mostly because the people around you do. Is it a shadow on the wall, or have you turned to look?",
    anchor: "epistemology",
    attribution: "Plato, Republic 514a–520a",
  },
  {
    id: "nagarjuna-self",
    prompt:
      "List five things that, taken away, would leave you no longer 'you.' Now ask whether the 'you' was anywhere apart from them.",
    anchor: "metaphysics",
    attribution: "Nāgārjuna, MMK on the self",
  },
  {
    id: "beauvoir-other",
    prompt:
      "Whose perspective do you treat as supplementary in your day — not maliciously, but by default? What would it cost to flip that?",
    anchor: "politics",
    attribution: "de Beauvoir, The Second Sex",
  },
  {
    id: "stoic-evening",
    prompt:
      "What did you do well today, what did you do badly, and what is left to do? (The Stoic evening review, from Seneca.)",
    anchor: "ethics",
    attribution: "Seneca, On Anger III.36",
  },
];

export function promptForDate(date: Date): JournalPrompt {
  // Stable rotation: prompt index = day-of-year mod count.
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  return JOURNAL_PROMPTS[day % JOURNAL_PROMPTS.length];
}
