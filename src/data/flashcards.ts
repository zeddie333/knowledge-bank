import type { Deck, Flashcard } from "@/lib/types";
import { PHILOSOPHERS } from "./philosophers";
import { CONCEPTS } from "./concepts";
import { QUOTES } from "./quotes";
import { SCHOOLS } from "./schools";

// ---- Curated decks (the original V1 set) ----
export const DECKS: Deck[] = [
  { id: "deck-plato", name: "Plato — core", description: "Forms, the cave, the Republic.", sourceContentType: "philosopher", sourceContentId: "plato" },
  { id: "deck-aristotle", name: "Aristotle — Nicomachean Ethics", description: "Eudaimonia, virtue as a mean, practical wisdom.", sourceContentType: "philosopher", sourceContentId: "aristotle" },
  { id: "deck-marcus", name: "Marcus Aurelius — Stoic practice", description: "Meditations, the dichotomy of control.", sourceContentType: "philosopher", sourceContentId: "marcus-aurelius" },
  { id: "deck-nagarjuna", name: "Nāgārjuna — emptiness", description: "Śūnyatā, two truths, dependent origination.", sourceContentType: "philosopher", sourceContentId: "nagarjuna" },
  { id: "deck-nietzsche", name: "Nietzsche — beyond good and evil", description: "Death of God, eternal recurrence, master/slave morality.", sourceContentType: "philosopher", sourceContentId: "nietzsche" },
  { id: "deck-beauvoir", name: "de Beauvoir — second sex", description: "Bad faith, the Other, ethics of ambiguity.", sourceContentType: "philosopher", sourceContentId: "de-beauvoir" },
];

export const FLASHCARDS: Flashcard[] = [
  // Plato
  { id: "c-plato-1", deckId: "deck-plato", kind: "term-def", front: "Theory of Forms", back: "Plato's view that physical things are imperfect participants in unchanging, non-physical patterns (Forms).", sourceContentType: "philosopher", sourceContentId: "plato" },
  { id: "c-plato-2", deckId: "deck-plato", kind: "term-def", front: "Allegory of the Cave (location)", back: "Republic 514a–520a. Prisoners chained facing a wall mistake shadows for reality.", sourceContentType: "philosopher", sourceContentId: "plato" },
  { id: "c-plato-3", deckId: "deck-plato", kind: "philosopher-idea", front: "What is Plato's argument for the Forms in Phaedo?", back: "We recognize two sticks as 'equal' even though no two physical things are exactly equal — so we must already have access to Equality itself (Phaedo 74a–75b).", sourceContentType: "philosopher", sourceContentId: "plato" },

  // Aristotle
  { id: "c-aristotle-1", deckId: "deck-aristotle", kind: "term-def", front: "Eudaimonia", back: "Human flourishing — the activity of a soul in accordance with virtue, over a complete life (NE I.7).", sourceContentType: "philosopher", sourceContentId: "aristotle" },
  { id: "c-aristotle-2", deckId: "deck-aristotle", kind: "term-def", front: "Doctrine of the mean", back: "Virtue lies between two vices — one of excess and one of deficiency (NE II.6).", sourceContentType: "philosopher", sourceContentId: "aristotle" },
  { id: "c-aristotle-3", deckId: "deck-aristotle", kind: "term-def", front: "Phronesis", back: "Practical wisdom — the capacity to judge what the right action is in a particular situation.", sourceContentType: "philosopher", sourceContentId: "aristotle" },

  // Marcus
  { id: "c-marcus-1", deckId: "deck-marcus", kind: "term-def", front: "Dichotomy of control (Stoic)", back: "Some things are up to us; some are not. Wisdom is keeping the columns distinct (Epictetus, Enchiridion §1).", sourceContentType: "philosopher", sourceContentId: "marcus-aurelius" },
  { id: "c-marcus-2", deckId: "deck-marcus", kind: "quote-author", front: "'Even in a palace, life may be lived well.'", back: "Marcus Aurelius, Meditations V.16.", sourceContentType: "philosopher", sourceContentId: "marcus-aurelius" },
  { id: "c-marcus-3", deckId: "deck-marcus", kind: "philosopher-idea", front: "Why did Marcus Aurelius write the Meditations?", back: "Private notebooks (Greek: 'to himself'). An emperor trying to talk himself out of becoming what power tends to make.", sourceContentType: "philosopher", sourceContentId: "marcus-aurelius" },

  // Nāgārjuna
  { id: "c-nagarjuna-1", deckId: "deck-nagarjuna", kind: "term-def", front: "Śūnyatā", back: "'Emptiness' — nothing exists by its own essence (svabhāva). Things exist only through their dependencies.", sourceContentType: "philosopher", sourceContentId: "nagarjuna" },
  { id: "c-nagarjuna-2", deckId: "deck-nagarjuna", kind: "term-def", front: "Two truths", back: "Conventional truth and ultimate truth answer different questions and do not contradict (MMK 24.8–10).", sourceContentType: "philosopher", sourceContentId: "nagarjuna" },
  { id: "c-nagarjuna-3", deckId: "deck-nagarjuna", kind: "concept-school", front: "Nāgārjuna belongs to which school?", back: "Madhyamaka — the 'middle way' school of Mahāyāna Buddhism.", sourceContentType: "philosopher", sourceContentId: "nagarjuna" },

  // Nietzsche
  { id: "c-nietzsche-1", deckId: "deck-nietzsche", kind: "term-def", front: "Eternal recurrence", back: "Nietzsche's thought experiment (Gay Science §341): would you will this life again? A test of your relationship to your own life.", sourceContentType: "philosopher", sourceContentId: "nietzsche" },
  { id: "c-nietzsche-2", deckId: "deck-nietzsche", kind: "term-def", front: "Ressentiment", back: "The metabolism of an ancient grievance — the powerless revalue inaction as virtue (Genealogy of Morals I).", sourceContentType: "philosopher", sourceContentId: "nietzsche" },
  { id: "c-nietzsche-3", deckId: "deck-nietzsche", kind: "quote-author", front: "'God is dead, and we have killed him.'", back: "Nietzsche, The Gay Science §125 (the Madman).", sourceContentType: "philosopher", sourceContentId: "nietzsche" },
  { id: "c-nietzsche-4", deckId: "deck-nietzsche", kind: "term-def", front: "Amor fati", back: "'Love of fate' — affirming one's life so completely one would will it again (Gay Science §276).", sourceContentType: "philosopher", sourceContentId: "nietzsche" },

  // de Beauvoir
  { id: "c-beauvoir-1", deckId: "deck-beauvoir", kind: "quote-author", front: "'One is not born, but rather becomes, a woman.'", back: "Simone de Beauvoir, The Second Sex, Volume II, Part I, Chapter 1.", sourceContentType: "philosopher", sourceContentId: "de-beauvoir" },
  { id: "c-beauvoir-2", deckId: "deck-beauvoir", kind: "term-def", front: "Bad faith", back: "The self-deception of pretending we are not free.", sourceContentType: "philosopher", sourceContentId: "de-beauvoir" },
  { id: "c-beauvoir-3", deckId: "deck-beauvoir", kind: "term-def", front: "The Other (Beauvoir)", back: "The structural role of a group treated as a permanent Object — defined in relation to a dominant Subject.", sourceContentType: "philosopher", sourceContentId: "de-beauvoir" },
];

// ---- Auto-generated cards (one-shot derived from full content) ----
// One philosopher-summary card per philosopher.
// One concept-definition card per concept.
// One quote-author card per quote.
// These give Study a large card pool without hand-authoring 500 cards.

function firstSentence(s: string): string {
  const m = s.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return (m ? m[0] : s).trim();
}

const autoCards: Flashcard[] = [];

for (const p of PHILOSOPHERS) {
  autoCards.push({
    id: `auto-phi-${p.id}`,
    deckId: `auto-philosopher-${p.id}`,
    kind: "philosopher-idea",
    front: `What is ${p.name}'s central project?`,
    back: firstSentence(p.shortSummary),
    sourceContentType: "philosopher",
    sourceContentId: p.id,
  });
}

for (const c of CONCEPTS) {
  autoCards.push({
    id: `auto-concept-${c.id}`,
    deckId: `auto-concept-${c.id}`,
    kind: "term-def",
    front: c.name,
    back: firstSentence(c.shortSummary),
    sourceContentType: "concept",
    sourceContentId: c.id,
  });
}

for (const q of QUOTES) {
  autoCards.push({
    id: `auto-quote-${q.id}`,
    deckId: `auto-quote-${q.philosopherId}`,
    kind: "quote-author",
    front: `Who said: "${q.text}"`,
    back: `${PHILOSOPHERS.find((p) => p.id === q.philosopherId)?.name ?? "?"} — ${q.sourceLocation}`,
    sourceContentType: "quote",
    sourceContentId: q.id,
  });
}

export const ALL_CARDS: Flashcard[] = [...FLASHCARDS, ...autoCards];

// Auto decks derived from the data — one per philosopher, one per school, one per theme.
function autoDecksFromData(): Deck[] {
  const decks: Deck[] = [];
  // Per philosopher (skip philosophers already covered by curated decks).
  const curatedIds = new Set(DECKS.map((d) => d.sourceContentId));
  for (const p of PHILOSOPHERS) {
    if (curatedIds.has(p.id)) continue;
    const cards = ALL_CARDS.filter(
      (c) =>
        (c.sourceContentType === "philosopher" && c.sourceContentId === p.id) ||
        (c.sourceContentType === "quote" && c.deckId === `auto-quote-${p.id}`) ||
        (c.sourceContentType === "concept" &&
          CONCEPTS.find((cc) => cc.id === c.sourceContentId)?.philosopherIds.includes(p.id)),
    );
    if (cards.length === 0) continue;
    decks.push({
      id: `deck-auto-${p.id}`,
      name: `${p.name}`,
      description: p.shortSummary.split(".")[0] + ".",
      sourceContentType: "philosopher",
      sourceContentId: p.id,
    });
  }
  // Per school.
  for (const s of SCHOOLS) {
    decks.push({
      id: `deck-school-${s.id}`,
      name: s.name,
      description: s.shortSummary.split(".")[0] + ".",
      sourceContentType: "school",
      sourceContentId: s.id,
    });
  }
  return decks;
}

export const AUTO_DECKS: Deck[] = autoDecksFromData();
export const ALL_DECKS: Deck[] = [...DECKS, ...AUTO_DECKS];

export function flashcardsForDeck(deckId: string): Flashcard[] {
  // 1) Curated deckId — exact match.
  const curated = FLASHCARDS.filter((c) => c.deckId === deckId);
  if (curated.length > 0) return curated;

  // 2) Auto philosopher deck.
  if (deckId.startsWith("deck-auto-")) {
    const phiId = deckId.replace("deck-auto-", "");
    const phi = PHILOSOPHERS.find((p) => p.id === phiId);
    if (!phi) return [];
    return ALL_CARDS.filter(
      (c) =>
        (c.sourceContentType === "philosopher" && c.sourceContentId === phi.id) ||
        (c.sourceContentType === "quote" && c.deckId === `auto-quote-${phi.id}`) ||
        (c.sourceContentType === "concept" &&
          CONCEPTS.find((cc) => cc.id === c.sourceContentId)?.philosopherIds.includes(phi.id)),
    );
  }

  // 3) Auto school deck — cards for member philosophers.
  if (deckId.startsWith("deck-school-")) {
    const schoolId = deckId.replace("deck-school-", "");
    const sch = SCHOOLS.find((s) => s.id === schoolId);
    if (!sch) return [];
    const memberIds = new Set(sch.philosopherIds);
    return ALL_CARDS.filter((c) => {
      if (c.sourceContentType === "philosopher") return memberIds.has(c.sourceContentId);
      if (c.sourceContentType === "quote") return memberIds.has(c.deckId.replace("auto-quote-", ""));
      if (c.sourceContentType === "concept") {
        const concept = CONCEPTS.find((cc) => cc.id === c.sourceContentId);
        return concept?.philosopherIds.some((pid) => memberIds.has(pid)) ?? false;
      }
      return false;
    });
  }
  return [];
}

export function getDeck(deckId: string): Deck | undefined {
  return ALL_DECKS.find((d) => d.id === deckId);
}

// Build a custom deck from filters — used by /study customize.
export function customDeck(filters: {
  contentTypes: Set<"philosopher" | "concept" | "quote">;
  themes: Set<string>;
  eras: Set<string>;
  regions: Set<string>;
  limit?: number;
  random?: boolean;
}): Flashcard[] {
  const { contentTypes, themes, eras, regions, limit, random } = filters;
  const matches = ALL_CARDS.filter((c) => {
    if (contentTypes.size > 0) {
      const ct =
        c.sourceContentType === "quote"
          ? "quote"
          : c.sourceContentType === "concept"
            ? "concept"
            : "philosopher";
      if (!contentTypes.has(ct)) return false;
    }
    // Resolve associated philosopher(s) for era/region matching.
    let relatedPhilosopher: ReturnType<typeof PHILOSOPHERS.find> | null = null;
    if (c.sourceContentType === "philosopher") {
      relatedPhilosopher = PHILOSOPHERS.find((p) => p.id === c.sourceContentId) ?? null;
    } else if (c.sourceContentType === "quote") {
      const phiId = c.deckId.replace("auto-quote-", "");
      relatedPhilosopher = PHILOSOPHERS.find((p) => p.id === phiId) ?? null;
    } else if (c.sourceContentType === "concept") {
      const concept = CONCEPTS.find((cc) => cc.id === c.sourceContentId);
      if (concept && concept.philosopherIds.length > 0) {
        relatedPhilosopher = PHILOSOPHERS.find((p) => p.id === concept.philosopherIds[0]) ?? null;
      }
      if (themes.size > 0 && concept) {
        if (!themes.has(concept.theme)) return false;
      }
    }
    if (eras.size > 0) {
      if (!relatedPhilosopher || !eras.has(relatedPhilosopher.era)) return false;
    }
    if (regions.size > 0) {
      if (!relatedPhilosopher || !regions.has(relatedPhilosopher.region)) return false;
    }
    if (themes.size > 0 && c.sourceContentType === "philosopher") {
      if (!relatedPhilosopher || !relatedPhilosopher.themes.some((t) => themes.has(t))) return false;
    }
    return true;
  });
  const shuffled = random
    ? matches
        .map((c) => ({ c, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((x) => x.c)
    : matches;
  return limit ? shuffled.slice(0, limit) : shuffled;
}
