// Hand-curated personality quiz. Each answer carries a vector of school
// weights; results are computed by summing and normalizing.

export type SchoolKey =
  | "stoicism"
  | "epicureanism"
  | "platonism"
  | "aristotelian"
  | "buddhist"
  | "daoist"
  | "confucian"
  | "existentialist"
  | "perennialist"
  | "pragmatist"
  | "analytic"
  | "marxist"
  | "accelerationist"
  | "phenomenologist"
  | "post-structuralist"
  | "kantian"
  | "utilitarian";

export const SCHOOL_LABELS: Record<SchoolKey, string> = {
  stoicism: "Stoic",
  epicureanism: "Epicurean",
  platonism: "Platonist",
  aristotelian: "Aristotelian",
  buddhist: "Buddhist",
  daoist: "Daoist",
  confucian: "Confucian",
  existentialist: "Existentialist",
  perennialist: "Perennialist",
  pragmatist: "Pragmatist",
  analytic: "Analytic",
  marxist: "Marxist",
  accelerationist: "Accelerationist",
  phenomenologist: "Phenomenologist",
  "post-structuralist": "Post-structuralist",
  kantian: "Kantian",
  utilitarian: "Utilitarian",
};

// Map each school to one or two representative philosopher slugs.
export const SCHOOL_REPRESENTATIVES: Record<SchoolKey, string[]> = {
  stoicism: ["marcus-aurelius", "epictetus"],
  epicureanism: ["epicurus", "lucretius"],
  platonism: ["plato", "plotinus"],
  aristotelian: ["aristotle"],
  buddhist: ["buddha", "nagarjuna"],
  daoist: ["laozi", "zhuangzi"],
  confucian: ["confucius", "mencius"],
  existentialist: ["sartre", "de-beauvoir", "kierkegaard", "camus"],
  perennialist: ["guenon", "schuon", "nasr"],
  pragmatist: ["james", "dewey", "rorty"],
  analytic: ["wittgenstein", "russell", "rawls"],
  marxist: ["marx", "adorno", "habermas"],
  accelerationist: ["land", "fisher"],
  phenomenologist: ["husserl", "heidegger", "merleau-ponty"],
  "post-structuralist": ["foucault", "derrida", "deleuze"],
  kantian: ["kant"],
  utilitarian: ["mill", "singer"],
};

export interface QuizAnswer {
  text: string;
  weights: Partial<Record<SchoolKey, number>>;
}

export interface QuizQuestion {
  prompt: string;
  answers: QuizAnswer[];
}

// 12 questions. Each answer assigns weights to compatible schools. The
// total weight per answer is roughly constant so no answer dominates.
export const QUIZ: QuizQuestion[] = [
  {
    prompt: "What's the most important question philosophy can ask?",
    answers: [
      { text: "How should I live?", weights: { stoicism: 3, aristotelian: 2, confucian: 2, existentialist: 1 } },
      { text: "What is real?", weights: { platonism: 3, buddhist: 2, perennialist: 2, phenomenologist: 1 } },
      { text: "How do we know what we know?", weights: { analytic: 3, kantian: 2, pragmatist: 2, phenomenologist: 1 } },
      { text: "How is society organized — and how should it be?", weights: { marxist: 3, utilitarian: 2, "post-structuralist": 2, kantian: 1 } },
    ],
  },
  {
    prompt: "When things go wrong, what is the most important move?",
    answers: [
      { text: "Examine what is in my power and what isn't, and let go of the rest.", weights: { stoicism: 4, buddhist: 2 } },
      { text: "Recognize that I freely chose what brought me here, and freely choose what comes next.", weights: { existentialist: 4, pragmatist: 1, kantian: 1 } },
      { text: "Trace the structural conditions producing this; they're not random.", weights: { marxist: 3, "post-structuralist": 2, accelerationist: 1 } },
      { text: "Sit with the situation as it actually presents itself, without leaping to judgment.", weights: { phenomenologist: 3, buddhist: 2, daoist: 1 } },
    ],
  },
  {
    prompt: "The good life is mostly a matter of —",
    answers: [
      { text: "Cultivating virtue through habit over a whole lifetime.", weights: { aristotelian: 4, confucian: 2 } },
      { text: "Reducing unnecessary desires and finding pleasure in simplicity.", weights: { epicureanism: 4, buddhist: 2, daoist: 1 } },
      { text: "Aligning yourself with a deeper order that doesn't depend on you.", weights: { stoicism: 2, perennialist: 3, daoist: 2 } },
      { text: "Inventing your meaning, since none is given.", weights: { existentialist: 4, accelerationist: 1, pragmatist: 1 } },
    ],
  },
  {
    prompt: "Pick a metaphor for the self.",
    answers: [
      { text: "A flame — never the same twice, sustained by what flows through it.", weights: { buddhist: 3, daoist: 2, phenomenologist: 1 } },
      { text: "A character in a story I'm still writing.", weights: { existentialist: 3, pragmatist: 2, "post-structuralist": 1 } },
      { text: "A reasoning agent whose dignity rests on its rationality.", weights: { kantian: 4, analytic: 1 } },
      { text: "A node in a web of relationships I didn't choose.", weights: { confucian: 3, marxist: 2, "post-structuralist": 1 } },
    ],
  },
  {
    prompt: "On the question of God or ultimate reality —",
    answers: [
      { text: "There is one ultimate reality; the world's traditions are all paths toward it.", weights: { perennialist: 4, platonism: 1, buddhist: 1 } },
      { text: "Whatever is ultimate is beyond predication; better to point at it through practice than to argue about it.", weights: { daoist: 3, buddhist: 2, phenomenologist: 1 } },
      { text: "We should suspend judgment about claims that can't be empirically tested.", weights: { analytic: 3, pragmatist: 2 } },
      { text: "God is dead; what comes after is the actual problem.", weights: { existentialist: 3, accelerationist: 2, "post-structuralist": 1 } },
    ],
  },
  {
    prompt: "When a moral dilemma is hard, what's the right way through?",
    answers: [
      { text: "Calculate which option produces the most good for the most people.", weights: { utilitarian: 4 } },
      { text: "Test the principle: could you will every person to act on it?", weights: { kantian: 4 } },
      { text: "Ask what a person of practical wisdom would do, here, now.", weights: { aristotelian: 3, confucian: 2 } },
      { text: "Recognize that the framing of the dilemma already encodes a politics; question that.", weights: { "post-structuralist": 3, marxist: 2 } },
    ],
  },
  {
    prompt: "Pick the closest description of your relation to tradition.",
    answers: [
      { text: "Tradition contains real wisdom; modernity has lost the thread.", weights: { perennialist: 4, confucian: 1 } },
      { text: "Traditions are useful starting points; their authority depends on what they produce now.", weights: { pragmatist: 3, aristotelian: 1, confucian: 1 } },
      { text: "Traditions are systems of power that need to be examined as such.", weights: { "post-structuralist": 3, marxist: 2, accelerationist: 1 } },
      { text: "Whatever the tradition says, the burden of choice falls on me anyway.", weights: { existentialist: 3, kantian: 1 } },
    ],
  },
  {
    prompt: "What's the role of suffering?",
    answers: [
      { text: "It has a cause we can identify and a path we can follow to its cessation.", weights: { buddhist: 4 } },
      { text: "It's an external; the inner response to it is what's up to us.", weights: { stoicism: 4 } },
      { text: "It's a structural feature of how the existing system distributes life chances.", weights: { marxist: 3, "post-structuralist": 1 } },
      { text: "It's the condition for genuine self-overcoming.", weights: { existentialist: 2, accelerationist: 2 } },
    ],
  },
  {
    prompt: "Where should political authority come from?",
    answers: [
      { text: "The consent of free and equal persons.", weights: { kantian: 2, utilitarian: 1, marxist: 1 } },
      { text: "The moral and intellectual cultivation of those in office, recognized by the community.", weights: { confucian: 3, aristotelian: 2 } },
      { text: "Whatever arrangement produces the best outcomes overall.", weights: { utilitarian: 4 } },
      { text: "Any concentration of authority needs to be continuously interrogated — every state form has its violences.", weights: { "post-structuralist": 3, marxist: 1 } },
    ],
  },
  {
    prompt: "When you read a difficult text, what's the right posture?",
    answers: [
      { text: "Defer to the reading the author intended; the text is the authority.", weights: { perennialist: 2, analytic: 1 } },
      { text: "Look for the points where the text undoes its own stated position.", weights: { "post-structuralist": 4 } },
      { text: "Approach it as a tool to clarify problems we already face.", weights: { pragmatist: 3, accelerationist: 1 } },
      { text: "Suspend your prior assumptions and let the text appear as it gives itself.", weights: { phenomenologist: 3, buddhist: 1 } },
    ],
  },
  {
    prompt: "The strongest argument for studying philosophy at all?",
    answers: [
      { text: "It teaches you to live better.", weights: { stoicism: 2, aristotelian: 2, buddhist: 1, epicureanism: 1 } },
      { text: "It clarifies thought and exposes confusion.", weights: { analytic: 4 } },
      { text: "It opens the resources to change unjust arrangements.", weights: { marxist: 3, "post-structuralist": 1, utilitarian: 1 } },
      { text: "It tracks how the deepest questions have been worked through across cultures and centuries.", weights: { perennialist: 2, platonism: 2, phenomenologist: 1 } },
    ],
  },
  {
    prompt: "Last one: what's your default mood toward the future?",
    answers: [
      { text: "Composed. Whatever happens, the inner response is mine to shape.", weights: { stoicism: 4 } },
      { text: "Uneasy — the present already contains processes accelerating beyond our control.", weights: { accelerationist: 3, "post-structuralist": 1 } },
      { text: "Hopeful in a specific sense: we can build better arrangements if we work at it.", weights: { pragmatist: 3, marxist: 2, utilitarian: 1 } },
      { text: "Unresolved. Existence is the kind of thing whose meaning is never settled.", weights: { existentialist: 3, phenomenologist: 1 } },
    ],
  },
];

export interface ProfileResult {
  school: SchoolKey;
  percentage: number;
}

export function computeResults(scores: Record<SchoolKey, number>): ProfileResult[] {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  if (total === 0) return [];
  return (Object.entries(scores) as [SchoolKey, number][])
    .filter(([, v]) => v > 0)
    .map(([school, v]) => ({ school, percentage: Math.round((v / total) * 100) }))
    .sort((a, b) => b.percentage - a.percentage);
}
