import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// German Idealism, British 19th century, Russian, plus Nietzsche (the V1 essay).
export const NINETEENTH: Philosopher[] = [
  {
    id: "hegel",
    slug: "hegel",
    name: "G.W.F. Hegel",
    birthYear: 1770,
    deathYear: 1831,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Hegel_portrait_by_Schlesinger_1831.jpg"),
    themes: ["metaphysics", "politics", "ethics"],
    shortSummary:
      "Hegel argued that history is the gradual self-realization of reason, that consciousness develops through contradictions it generates and overcomes, and that the rational and the real are, in the long view, the same. Even people who think he was wrong have spent two centuries arguing with him.",
    fullBody: `Hegel's *Phenomenology of Spirit* (1807) traces the development of consciousness through stages — sensory certainty, perception, understanding, self-consciousness, reason, spirit — each of which generates contradictions that drive the move to the next. The pattern, often glossed as *thesis–antithesis–synthesis* (Hegel rarely used those terms), is the *dialectic*: a position contains its own negation, the negation gets articulated, and a higher position emerges that contains what was right in both.

The famous master-slave dialectic (Phen. IV.A) is one moment in this sequence. Two consciousnesses meet; each needs recognition from the other to be a self. The struggle for recognition produces a master and a slave — but the master, recognized by someone he doesn't fully recognize as a self, gets unsatisfying recognition. The slave, doing the work, develops the capacities through which genuine self-consciousness becomes possible. The structure has been generative in every direction: Marx's class analysis, de Beauvoir's analysis of gender, Kojève's existentialist reading, Honneth's recognition theory.

The *Philosophy of Right* (1821) develops the political theory. The rational state is not a contractual aggregation of individuals but the institutional embodiment of *ethical life* (*Sittlichkeit*) — the customs, family structures, and civic institutions in which individual freedom becomes actual rather than merely abstract. The famous line "what is rational is real, what is real is rational" has been read as quietist (whatever exists is justified) and as critical (only what is rationally adequate is fully real). Both readings have textual support.

Hegel split his immediate inheritance. The "Right Hegelians" treated him as the legitimator of the Prussian state; the "Left Hegelians" — Feuerbach, Bauer, the young Marx — used the dialectical method to critique religion, capitalism, and the state itself.`,
    sources: [
      { title: "Hegel (SEP)", cite: "Redding, P. SEP entry 'Georg Wilhelm Friedrich Hegel'", url: "https://plato.stanford.edu/entries/hegel/" },
    ],
  },
  {
    id: "schopenhauer",
    slug: "schopenhauer",
    name: "Arthur Schopenhauer",
    birthYear: 1788,
    deathYear: 1860,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Arthur_Schopenhauer_by_J_Schäfer,_1859b.jpg"),
    themes: ["metaphysics", "ethics", "aesthetics"],
    shortSummary:
      "Schopenhauer accepted Kant's distinction between appearance and thing-in-itself, and then named the thing-in-itself: Will. Pessimism follows immediately. Aesthetic experience and ascetic renunciation are the two paths out of the suffering this generates.",
    fullBody: `*The World as Will and Representation* (1818, expanded 1844) starts where Kant left off. Kant had argued that the thing-in-itself is unknowable. Schopenhauer agrees that it is unknowable *from outside* — through ordinary representation — but argues that we have one place of intimate access to it: ourselves. Inwardly, we are not just the spatially extended bodies we observe; we are *willing*. The body is the will *as representation*; the will is the body's inner nature.

By analogy and argument, Schopenhauer extends this to everything. The world's underlying nature is a blind striving Will, manifested at different levels as physical force, biological drive, human desire. The Will has no end, no purpose, no satisfaction — its nature is *to want*, and as soon as one wanting is satisfied another arises. Pessimism follows: existence is a structure of frustration with brief intervals of boredom (the original of "If you want to make God laugh, tell him your plans").

There are two routes out. *Aesthetic contemplation* is one: lost in a work of art or a piece of music, the contemplating mind briefly stops being a wanting subject and becomes a pure knowing subject; the will subsides. *Asceticism* — the renunciation of desire itself — is the deeper one, and it brings Schopenhauer close to the Buddhist and Hindu traditions he read deeply.

The influence on Nietzsche is direct (and ambivalent — Nietzsche read him as a young man, took the Will, and rejected the renunciation). Wagner adored him. Freud's unconscious drives are recognizably Schopenhauerian. Wittgenstein read him as a teenager and never quite stopped.`,
    sources: [
      { title: "Arthur Schopenhauer (SEP)", cite: "Wicks, R. SEP entry 'Arthur Schopenhauer'", url: "https://plato.stanford.edu/entries/schopenhauer/" },
    ],
  },
  {
    id: "kierkegaard",
    slug: "kierkegaard",
    name: "Søren Kierkegaard",
    birthYear: 1813,
    deathYear: 1855,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Kierkegaard.jpg"),
    themes: ["religion", "ethics", "metaphysics"],
    shortSummary:
      "Kierkegaard wrote against Hegelian system-building from a position of radical particularity. The individual existing in front of God is what philosophy keeps missing, and what only the most strenuous kind of writing can keep in view.",
    fullBody: `Kierkegaard published his most important books under pseudonyms — Johannes Climacus, Anti-Climacus, Constantin Constantius, Victor Eremita — partly to dramatize his thesis that there is no neutral standpoint from which philosophical claims can be made. Every claim is made by *someone* in *some situation*, and pretending otherwise produces what he called the "phantom" of speculative thought.

*Either/Or* (1843) presents two ways of life — the aesthetic (the life of pleasure, novelty, and the avoidance of commitment) and the ethical (the life of obligation, marriage, civic duty) — and refuses to settle the choice for the reader. The point is that no argument can settle it; the choice is yours, and you must make it.

*Fear and Trembling* (1843, as Johannes de Silentio) is on the story of Abraham being asked to sacrifice Isaac. Kierkegaard reads it as the paradigm of the *religious* stage above the ethical — Abraham must, on faith, suspend a universal ethical demand for a particular religious one, and there is no philosophical justification available for the suspension. If Abraham is the father of faith, faith is not what most modern Christians take it to be.

*The Sickness Unto Death* (1849, as Anti-Climacus) develops the analysis of despair. The self, on Kierkegaard's account, is a relation that relates itself to itself; despair is what happens when that relation fails — in various intricate ways he charts.

Kierkegaard is the founder of religious existentialism. Heidegger, Sartre, Camus, and Buber all read him; his account of authentic existence in the face of the absurd is the source of theirs.`,
    sources: [
      { title: "Søren Kierkegaard (SEP)", cite: "McDonald, W. SEP entry 'Søren Kierkegaard'", url: "https://plato.stanford.edu/entries/kierkegaard/" },
    ],
  },
  {
    id: "mill",
    slug: "mill",
    name: "John Stuart Mill",
    birthYear: 1806,
    deathYear: 1873,
    region: "european",
    era: "modern",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("John_Stuart_Mill_by_London_Stereoscopic_Company,_c1870.jpg"),
    themes: ["ethics", "politics", "epistemology"],
    shortSummary:
      "Mill made utilitarianism defensible by complicating it: pleasures differ in quality as well as quantity, individuals owe each other a strong liberty principle, and rights are not exceptions to utility but necessary conditions of it. His On Liberty is the founding modern text on the limits of state and social coercion.",
    fullBody: `Mill was the most precocious philosopher of the nineteenth century — his father, James Mill, raised him on Bentham, Greek by age three, classical political economy by his teens — and his mature work is the product of the breakdown he had at twenty (described in his *Autobiography*) and the recovery that gave him room for everything Bentham had ignored.

*Utilitarianism* (1861) is the cleanest expression of the moral theory. Actions are right insofar as they promote happiness; happiness is pleasure and the absence of pain. The Benthamite version is *quantitative* — pleasures differ only in intensity, duration, and so on — and produces uncomfortable results (a life of intense sensual pleasure scores higher than a life of intellectual engagement). Mill insists pleasures also differ in *quality*: "Better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied" (*Utilitarianism* II). How to measure quality without smuggling in non-utilitarian standards is the standard objection.

*On Liberty* (1859) is more enduring. The *harm principle*: "the only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others" (*On Liberty* I). This rules out paternalism (state interference for the individual's own good) and moralism (state interference to enforce private morality). The defense of freedom of thought and discussion in Chapter II — including the defense of letting wrong opinions be expressed because even wrong opinions sharpen the right ones — is the foundational modern statement.

*The Subjection of Women* (1869) argues that the legal subordination of women is "wrong in itself, and now one of the chief hindrances to human improvement." Mill was an MP and tried, unsuccessfully, to add women's suffrage to the Reform Act of 1867.`,
    sources: [
      { title: "John Stuart Mill (SEP)", cite: "Macleod, C. SEP entry 'John Stuart Mill'", url: "https://plato.stanford.edu/entries/mill/" },
    ],
  },
  {
    id: "marx",
    slug: "marx",
    name: "Karl Marx",
    birthYear: 1818,
    deathYear: 1883,
    region: "european",
    era: "modern",
    difficulty: "intermediate",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Karl_Marx_001.jpg"),
    themes: ["politics", "ethics", "metaphysics"],
    shortSummary:
      "Marx took Hegel's dialectical method, inverted it from spirit to material conditions, and produced the most influential critique of capitalism ever written. The twentieth century is, in a hard sense, what happened next.",
    fullBody: `Marx began as a Left Hegelian — using Hegel's dialectical method to critique religion and the state — and ended as the founder of a political and analytical tradition that shaped the next 150 years. The *Theses on Feuerbach* (1845) capture the turn: "Philosophers have only interpreted the world, in various ways; the point, however, is to change it" (Thesis XI).

The materialist conception of history, developed with Engels in *The German Ideology* (1846) and stated in *The Communist Manifesto* (1848), holds that the prevailing mode of production at any historical moment shapes the social, political, and intellectual life of the era. "It is not the consciousness of men that determines their being, but, on the contrary, their social being that determines their consciousness" (*Preface to A Contribution to the Critique of Political Economy*, 1859).

The economic analysis is in *Capital* (Vol. I, 1867; Vols. II and III published posthumously). The core concepts: *labor theory of value* (commodities have exchange value because of the socially necessary labor embodied in them); *surplus value* (the difference between the value workers produce and what they are paid, which is the source of capitalist profit); *commodity fetishism* (the way relations among people in capitalist economies appear as relations among things); *alienation* (workers separated from the product of their labor, the labor process, their species-being, and one another).

The political program — that capitalism's internal contradictions will produce its overthrow by an organized working class, and that what follows will eventually be a classless society — is the prediction history has so far refused to confirm or definitively refute.

Even philosophers who reject Marx's politics work in the wake of his analysis. The Frankfurt School, the British New Left, the French structural Marxists, contemporary critical theory — all are arguments inside the space he opened.`,
    sources: [
      { title: "Karl Marx (SEP)", cite: "Wolff, J. & Leopold, D. SEP entry 'Karl Marx'", url: "https://plato.stanford.edu/entries/marx/" },
    ],
  },
  {
    id: "nietzsche",
    slug: "nietzsche",
    name: "Friedrich Nietzsche",
    birthYear: 1844,
    deathYear: 1900,
    region: "european",
    era: "modern",
    difficulty: "intermediate",
    readingTimeMinutes: 10,
    imageUrl: wikiImage("Nietzsche187a.jpg"),
    themes: ["ethics", "metaphysics", "aesthetics", "religion"],
    shortSummary:
      "Nietzsche didn't kill God; he wrote God's obituary and then spent the rest of his life asking what we were supposed to do with the body. His project was psychological as much as philosophical: what kind of people will we become once the old certainties stop holding us up?",
    fullBody: `## Why Nietzsche matters

Nietzsche didn't kill God; he wrote God's obituary and then spent the rest of his life asking what we were supposed to do with the body. His project was psychological as much as philosophical: he wanted to know what kind of people we'd become once the old certainties — Christian morality, Enlightenment reason, the comfortable idea that history was going somewhere — stopped holding us up. His answer, very roughly, was that most of us would invent new gods (the State, Progress, Science) and never notice. A few might do something harder.

## The death of God

The famous line — *God is dead, and we have killed him* — is in *The Gay Science* §125, spoken by a madman in a marketplace whose audience laughs at him. The whole point is that they laugh. They do not yet understand what has happened. Nietzsche's claim is not metaphysical. It is sociological: the cultural authority of Christian belief has collapsed, and the values that depended on it — pity, equality, the love of neighbor, the meaning of suffering — are running on borrowed time. The next century, he says, will be either a creative response to this or a long flat panic.

## Master and slave morality

In *On the Genealogy of Morals* (1887), Nietzsche traces our most basic moral words — good, evil, guilty, free — back to their social origins. His diagnosis: what we now call "good" (humility, meekness, equality) was originally the value system of the powerless, who could not act and so revalued inaction as virtue. He calls this *ressentiment*. It is not an attack on the powerless. It is an attack on the unselfconsciousness of our inheritance — most of what we treat as ethics, he argues, is the metabolism of an ancient grievance.

The opposite, "master morality," is not what the Nazis later made of it. Nietzsche's "noble" type is not a brute. He is someone capable of *self-overcoming* — capable of making and remaking his own values without needing them ratified by a herd or a god.

## Eternal recurrence

The thought experiment at *The Gay Science* §341: a demon visits you in your loneliest hour and tells you that you will live this life again — every joy, every shame, every dust mote, in the same order, eternally. Would you gnash your teeth, or call him divine?

Eternal recurrence is not a metaphysical claim. It is a test of your relationship to your own life. The person who can affirm the recurrence — who would *will* it — has, in Nietzsche's vocabulary, said yes to existence. Most of us cannot, and the cant we use to avoid noticing is what *Twilight of the Idols* takes apart.

## What Nietzsche is not

He is not a nihilist. He thinks nihilism is the *problem* — the danger we are walking toward without admitting it (*The Will to Power* §1). He spends his late work trying to prevent it. He is also not a systematic philosopher; he distrusts systems, and the people who treat him as one usually end up endorsing the parts he was clearly testing rather than affirming.

## Where to start

*Beyond Good and Evil* — the most argued and the least poetic. Then *On the Genealogy of Morals* for the historical method. *The Gay Science* for the aphoristic side. Save *Thus Spoke Zarathustra* for last; it is the most performed and the easiest to misread.`,
    sources: [
      { title: "Nietzsche (Stanford Encyclopedia of Philosophy)", cite: "Anderson, R. L. SEP entry 'Friedrich Nietzsche'", url: "https://plato.stanford.edu/entries/nietzsche/" },
      { title: "Beyond Good and Evil", cite: "trans. Walter Kaufmann, Vintage 1989" },
      { title: "On the Genealogy of Morals", cite: "trans. Walter Kaufmann & R.J. Hollingdale, Vintage 1989" },
      { title: "The Gay Science", cite: "trans. Walter Kaufmann, Vintage 1974" },
    ],
  },
  {
    id: "peirce",
    slug: "peirce",
    name: "Charles Sanders Peirce",
    birthYear: 1839,
    deathYear: 1914,
    region: "american",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Charles_Sanders_Peirce.jpg"),
    themes: ["logic", "epistemology"],
    shortSummary:
      "Peirce was the most original American philosopher of the nineteenth century and the least famous in his lifetime. He founded pragmatism, did fundamental work in logic and semiotics, and died in poverty in rural Pennsylvania.",
    fullBody: `Peirce founded what he initially called *pragmatism* (later *pragmaticism*, after William James popularized a softer version Peirce thought was confused). The pragmatic maxim: "Consider what effects, which might conceivably have practical bearings, we conceive the object of our conception to have. Then, our conception of these effects is the whole of our conception of the object" (*How to Make Our Ideas Clear*, 1878).

Stated more crudely than Peirce would: the meaning of a concept is exhausted by the practical differences its truth or falsity would make. Disputes that turn out to have no possible practical bearing are, on the pragmatic test, not real disputes.

Peirce's contributions to logic are independent of, and in some ways ahead of, Frege's. His sign theory — the triadic structure of icon, index, and symbol — founded modern semiotics. His category theory (Firstness, Secondness, Thirdness) is dense and idiosyncratic.

He never got a permanent academic job after Johns Hopkins fired him in 1884 for what they euphemistically described as personal irregularities. His later work was supported partly by James, partly by editing for the *Century Dictionary*. Most of his thought is in the papers he never managed to publish.`,
    sources: [
      { title: "Charles Sanders Peirce (SEP)", cite: "Burch, R. SEP entry 'Charles Sanders Peirce'", url: "https://plato.stanford.edu/entries/peirce/" },
    ],
  },
  {
    id: "james",
    slug: "william-james",
    name: "William James",
    birthYear: 1842,
    deathYear: 1910,
    region: "american",
    era: "modern",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("William_James_b1842c.jpg"),
    themes: ["epistemology", "mind", "religion"],
    shortSummary:
      "William James made pragmatism a public philosophy and founded American psychology. His Varieties of Religious Experience is the first serious psychological study of religion that takes the experience seriously without collapsing into either reduction or piety.",
    fullBody: `James' *Principles of Psychology* (1890) was the founding textbook of the new discipline of scientific psychology, and his *stream of consciousness* — that experience is a continuous flow, not a series of discrete contents — became a foundational metaphor for the next century of literature and psychology alike.

His *Pragmatism* (1907) is the more accessible cousin of Peirce's. Truth, James argues, is what "works" — what proves itself useful in the conduct of life, what coheres with our other beliefs, what we can act on without disappointment. The slogan invited the standard misreadings (that pragmatism reduces truth to mere convenience) which James spent the rest of his life trying to correct.

*The Varieties of Religious Experience* (1902) is his most enduring book. Rather than asking whether religious beliefs are true, James asks what religious *experience* is — what its phenomenology is, what its psychological function is, what we should say about people whose lives are transformed by it. He neither reduces religion to neurochemistry nor demands its truth; he insists on taking the experience as a primary datum.

His *will to believe* essay (1896) argues that in matters where evidence is genuinely incomplete and a choice cannot be deferred, the choice to believe — to live as if the proposition is true — is itself legitimate. The standard objection (Clifford's evidentialism) finds this irresponsible. The right reading of James is more careful than either side often allows.`,
    sources: [
      { title: "William James (SEP)", cite: "Goodman, R. SEP entry 'William James'", url: "https://plato.stanford.edu/entries/james/" },
    ],
  },
  {
    id: "frege",
    slug: "frege",
    name: "Gottlob Frege",
    birthYear: 1848,
    deathYear: 1925,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Young_frege.jpg"),
    themes: ["logic", "epistemology"],
    shortSummary:
      "Frege invented modern logic almost single-handedly, founded analytic philosophy by accident, and watched Russell discover that his life's foundational project contained a fatal contradiction. He kept working.",
    fullBody: `Frege's *Begriffsschrift* (1879) — "concept-script" — is the founding text of modern formal logic. In a hundred pages, he developed first-order predicate logic with quantifiers (universal and existential), a notation for capturing the logical form of complex propositions, and the basic ideas that would let mathematics be derived from logic (logicism).

The notation is dead — replaced by the cleaner notation we use now — but the *content* is alive. Predicate logic is essentially Frege's invention; every later work in mathematical logic, philosophy of language, and analytic philosophy presupposes it.

His most important philosophical contribution is the *sense/reference* distinction (*Über Sinn und Bedeutung*, 1892). "The morning star" and "the evening star" *refer* to the same thing (Venus), but they have different *senses* — they present that thing in different ways. The distinction matters because it explains how "the morning star is the evening star" can be informative (different senses) without being trivial (same reference). The whole twentieth-century industry of philosophy of language descends from this paper.

The crushing event was 1902. Frege had nearly finished the second volume of his *Grundgesetze der Arithmetik* — the technical execution of logicism — when Bertrand Russell wrote to him pointing out that his foundational axiom (Basic Law V) generates a contradiction (Russell's Paradox). Frege replied with grace and never quite recovered. He spent his last years gradually concluding that arithmetic must be founded on geometry instead.`,
    sources: [
      { title: "Gottlob Frege (SEP)", cite: "Zalta, E. SEP entry 'Gottlob Frege'", url: "https://plato.stanford.edu/entries/frege/" },
    ],
  },
];
