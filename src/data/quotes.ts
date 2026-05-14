import type { Quote } from "@/lib/types";

// Every quote has a sourceLocation. If a quote can't be traced, it doesn't ship.
export const QUOTES: Quote[] = [
  {
    id: "q-plato-1",
    philosopherId: "plato",
    sourceTextId: "republic",
    sourceLocation: "Republic 514a",
    text: "Behold human beings as though they were in an underground cave-like dwelling.",
    context: "Opening of the Allegory of the Cave.",
  },
  {
    id: "q-plato-2",
    philosopherId: "plato",
    sourceTextId: "republic",
    sourceLocation: "Republic 38a (Apology)",
    text: "The unexamined life is not worth living.",
    context: "Socrates' defense at his trial, as recorded by Plato.",
  },
  {
    id: "q-aristotle-1",
    philosopherId: "aristotle",
    sourceTextId: "nicomachean-ethics",
    sourceLocation: "NE I.7, 1098a18",
    text: "One swallow does not make a spring, nor does one day; and so too one day, or a short time, does not make a man blessed and happy.",
    context: "Setting up the requirement that eudaimonia takes a complete life.",
  },
  {
    id: "q-aristotle-2",
    philosopherId: "aristotle",
    sourceTextId: "nicomachean-ethics",
    sourceLocation: "NE II.1, 1103a14",
    text: "We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts.",
    context: "Virtue is acquired by habituation, not by argument.",
  },
  {
    id: "q-marcus-1",
    philosopherId: "marcus-aurelius",
    sourceTextId: "meditations",
    sourceLocation: "Meditations II.1",
    text: "Begin the morning by saying to thyself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial.",
  },
  {
    id: "q-marcus-2",
    philosopherId: "marcus-aurelius",
    sourceTextId: "meditations",
    sourceLocation: "Meditations V.16",
    text: "Even in a palace, life may be lived well.",
  },
  {
    id: "q-marcus-3",
    philosopherId: "marcus-aurelius",
    sourceTextId: "meditations",
    sourceLocation: "Meditations IV.7",
    text: "Remove the judgement, and you have removed the thought 'I am hurt'; remove the thought 'I am hurt,' and the hurt itself is removed.",
  },
  {
    id: "q-nagarjuna-1",
    philosopherId: "nagarjuna",
    sourceTextId: "mmk",
    sourceLocation: "MMK 24.18",
    text: "Whatever is dependently co-arisen, that is explained to be emptiness; that, being a dependent designation, is itself the middle way.",
    context: "The single most-cited verse in Madhyamaka.",
  },
  {
    id: "q-nagarjuna-2",
    philosopherId: "nagarjuna",
    sourceTextId: "mmk",
    sourceLocation: "MMK 24.8",
    text: "The Buddha's teaching of the Dharma rests on two truths: a truth of worldly convention and an ultimate truth.",
  },
  {
    id: "q-nietzsche-1",
    philosopherId: "nietzsche",
    sourceTextId: "gay-science",
    sourceLocation: "The Gay Science §125",
    text: "God is dead. God remains dead. And we have killed him. How shall we comfort ourselves, the murderers of all murderers?",
  },
  {
    id: "q-nietzsche-2",
    philosopherId: "nietzsche",
    sourceTextId: "gay-science",
    sourceLocation: "The Gay Science §276",
    text: "I want to learn more and more to see as beautiful what is necessary in things. Amor fati: let that be my love henceforth.",
  },
  {
    id: "q-nietzsche-3",
    philosopherId: "nietzsche",
    sourceTextId: null,
    sourceLocation: "Beyond Good and Evil §146",
    text: "He who fights with monsters should look to it that he himself does not become a monster. And when you gaze long into an abyss, the abyss also gazes into you.",
  },
  {
    id: "q-beauvoir-1",
    philosopherId: "de-beauvoir",
    sourceTextId: "second-sex",
    sourceLocation: "The Second Sex, Vol. II, Part I, Ch. 1",
    text: "One is not born, but rather becomes, a woman.",
  },
  {
    id: "q-beauvoir-2",
    philosopherId: "de-beauvoir",
    sourceTextId: null,
    sourceLocation: "The Ethics of Ambiguity, Part II",
    text: "To will oneself free is also to will others free.",
    context: "The relational ethics of existentialist freedom.",
  },
];

export function quotesByPhilosopher(philosopherId: string): Quote[] {
  return QUOTES.filter((q) => q.philosopherId === philosopherId);
}
