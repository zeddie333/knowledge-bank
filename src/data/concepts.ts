import type { Concept } from "@/lib/types";

export const CONCEPTS: Concept[] = [
  // ---- V1 deep entries (kept) ----
  {
    id: "theory-of-forms",
    slug: "theory-of-forms",
    name: "Theory of Forms",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["plato"],
    shortSummary:
      "Plato's claim that the physical world is a flickering version of unchanging patterns — Forms — that the things we perceive participate in but never fully are.",
    fullBody: `The Theory of Forms is Plato's answer to a problem about explanation: why do two sticks count as "equal" when no two physical things are ever exactly equal? His answer, defended in *Phaedo* 74a–75b, is that "equal" names something the sticks share in but do not contain — *Equality itself*, a pattern that the sticks point to without being.

Generalize this and you have his metaphysics. Every meaningful concept — beauty, justice, triangle, dog — corresponds to a Form. The Forms are unchanging, non-physical, and (controversially) more real than the things in the visible world that participate in them.

Plato never settles on a clean account of *how* participation works, and in *Parmenides* 130e–134e he allows the elder Parmenides to demolish several plausible accounts in front of a young Socrates. The "Third Man" objection is the most famous: if the Form of Largeness explains why large things are large, what explains why the Form is large? Another Form? An infinite regress.

The theory's longest-running legacy is not the metaphysics but the move: that abstract structure can be more fundamental than concrete instances. Mathematicians often help themselves to a version of this; so do many cognitive scientists. The Forms in their full Platonic glory belong to Plato, but the impulse outlives him.`,
    sources: [
      { title: "Plato's Phaedo", cite: "trans. G.M.A. Grube, Hackett 1977, 74a–75b" },
      { title: "Plato's Parmenides", cite: "trans. M.L. Gill & P. Ryan, Hackett 1996, 130e–134e" },
    ],
  },
  {
    id: "eudaimonia",
    slug: "eudaimonia",
    name: "Eudaimonia",
    difficulty: "beginner",
    theme: "ethics",
    philosopherIds: ["aristotle"],
    shortSummary:
      "The highest human good, in Aristotle's view: not a feeling but an activity — the activity of a soul living in accordance with virtue, over a complete life.",
    fullBody: `*Eudaimonia* is usually translated "happiness," but the translation is misleading. Aristotle defines it at *Nicomachean Ethics* I.7 (1098a16–18) as "the activity of soul in accordance with virtue, and if there are more than one virtue, in accordance with the best and most complete."

Three features distinguish *eudaimonia* from happiness as we usually mean it:

1. **It is an activity, not a feeling.** A person asleep is not flourishing, however content. A person who happens to feel cheerful while doing nothing meaningful is not flourishing either.
2. **It requires virtue.** The cheerful coward is not eudaimon. Neither is the miserable virtuous person — Aristotle is not a Stoic; he thinks external goods matter — but a life that lacks virtue cannot be flourishing on his account.
3. **It requires a complete life.** "One swallow does not make a spring" (*NE* I.7, 1098a18–19). A genuinely good twelve-year-old is not eudaimon, because the concept tracks the arc, not the moment.

This is more demanding than "happiness" and explains why ancient virtue ethics rewards a different kind of attention than modern utilitarianism. You cannot maximize *eudaimonia* the way you might maximize pleasure. You have to *live* it, slowly, and the question is not how much you have at the end but what kind of activity composed the whole.`,
    sources: [
      { title: "Nicomachean Ethics", cite: "trans. Terence Irwin, Hackett 1999, I.7" },
      { title: "Aristotle's Ethics (SEP)", cite: "Kraut, R. SEP entry 'Aristotle's Ethics'", url: "https://plato.stanford.edu/entries/aristotle-ethics/" },
    ],
  },
  {
    id: "amor-fati",
    slug: "amor-fati",
    name: "Amor fati",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["nietzsche", "marcus-aurelius"],
    shortSummary:
      "Nietzsche's name for the disposition of loving one's fate — affirming what has happened and what will, not as resignation but as the test of whether one is finally on the side of one's own life.",
    fullBody: `Nietzsche introduces *amor fati* at *The Gay Science* §276:

> I want to learn more and more to see as beautiful what is necessary in things; then I shall be one of those who make things beautiful. *Amor fati*: let that be my love henceforth!

The phrase is Latin — "love of fate" — but the idea is doing different work than the Stoic version it echoes. Marcus Aurelius writes again and again that one should accept what comes from the universe with equanimity (*Meditations* IV.23, X.6). The Stoic project is to make oneself unbreakable by what cannot be controlled.

Nietzsche wants more. Equanimity is not enough — equanimity is still a way of holding the world at arm's length. *Amor fati* is the disposition of someone who would not subtract anything, even the suffering, even the embarrassments, because the whole life is what it is and the parts cannot be peeled apart. It is the affective form of the same test posed by *eternal recurrence*: if the demon offered you this life again, what would your answer be?

The point is not optimism. Nietzsche thought optimism was usually a cover story. The point is that resentment of one's own life is the basic enemy, and *amor fati* is the practiced alternative.`,
    sources: [
      { title: "The Gay Science", cite: "trans. Walter Kaufmann, Vintage 1974, §276 and §341" },
      { title: "Meditations", cite: "trans. Robin Hard, Oxford 2011, IV.23, X.6" },
    ],
  },
  {
    id: "sunyata",
    slug: "sunyata",
    name: "Śūnyatā (Emptiness)",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["nagarjuna"],
    shortSummary:
      "Not nothingness. The claim that nothing exists by virtue of its own essence — every entity is what it is only by depending on something else.",
    fullBody: `*Śūnyatā* — usually rendered "emptiness" — is the central concept of Madhyamaka Buddhism. It does not mean nothing exists. It means nothing exists *independently*. Every object, every property, every concept is what it is only through its dependencies. Take away the dependencies and there is no thing-in-itself left over.

Nāgārjuna defends emptiness across the *Mūlamadhyamakakārikā* by a single recurring strategy: take a candidate for own-being (motion, causation, the self, suffering), enumerate the ways it could exist independently, and show that each option collapses. The conclusion is never "X does not exist." It is always "X has no svabhāva — own-being."

The doctrine of *two truths* (*MMK* 24.8–10) is required to read this correctly. At the level of conventional truth, the chair is a chair and you may sit on it. At the level of ultimate truth, the chair has no essence; calling it a chair is a useful designation, not a discovery of how reality is carved at its joints. The two truths do not contradict; they answer different questions.

Emptiness sounds like it should be liberating in some vague spiritual sense. The Buddhist tradition argues it is liberating in a precise one: clinging requires a thing to cling to, and a thing to cling to requires that thing to have own-being. Strip the own-being and the clinging has nothing to land on.`,
    sources: [
      { title: "The Fundamental Wisdom of the Middle Way", cite: "trans. & commentary Jay L. Garfield, Oxford 1995" },
      { title: "Nāgārjuna (SEP)", cite: "Westerhoff, J. SEP entry 'Nāgārjuna'", url: "https://plato.stanford.edu/entries/nagarjuna/" },
    ],
  },
  {
    id: "bad-faith",
    slug: "bad-faith",
    name: "Bad faith",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["de-beauvoir", "sartre"],
    shortSummary:
      "The self-deception of pretending we are not free — convincing ourselves that our role, our nature, or our situation has made our choices for us when in fact we are still choosing.",
    fullBody: `Sartre introduces *mauvaise foi* in *Being and Nothingness* (1943), but de Beauvoir gives the concept its most usable form in *The Ethics of Ambiguity* (1947). Bad faith is the self-deception of pretending we are not free — convincing ourselves that our role, our nature, or our situation has made our choices for us when in fact we are still choosing, and still responsible.

The classic example is Sartre's waiter at a café (*Being and Nothingness*, Part I, Ch. 2): a man performing "waiter" so thoroughly that he treats his role as if it were his nature. The mistake is not the performance. The mistake is the moment he tells himself there is nothing to do but perform — that the waiter-role *is* what he is.

De Beauvoir extends the analysis politically. In *The Second Sex*, she identifies a structural form of bad faith available to women: accepting the position of permanent Object, of "feminine destiny," because the freedom of refusing is heavier than the comfort of complying. She is not blaming the women who do this; she is describing the trap, which is engineered to be hard to climb out of.

The concept's power is diagnostic. Once you have it, you start noticing how often "I had no choice" is a story you are telling yourself to make a choice less painful to own.`,
    sources: [
      { title: "Being and Nothingness", cite: "Sartre, trans. Hazel Barnes, Washington Square 1956, Part I Ch. 2" },
      { title: "The Ethics of Ambiguity", cite: "trans. Bernard Frechtman, Citadel 1948" },
    ],
  },
  {
    id: "categorical-imperative",
    slug: "categorical-imperative",
    name: "Categorical imperative",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["kant"],
    shortSummary:
      "Kant's test for moral action: act only on principles you could rationally will every other human being to act on. If the principle breaks when universalized, it isn't moral; it's just convenient.",
    fullBody: `Kant's *Groundwork of the Metaphysics of Morals* (1785) presents the categorical imperative in several formulations. The most famous: "Act only according to that maxim by which you can at the same time will that it should become a universal law" (*Groundwork* 4:421).

A maxim is the principle you are actually acting on — not what you'd say if asked, but what you'd have to say if you were honest. Kant's test: imagine the maxim universalized. If the universal version is incoherent (would defeat itself) or unwillable (no rational agent could endorse it), the action is not moral; it is just convenient.

The second formulation makes the spirit clearer: "Act so that you treat humanity, whether in your own person or in that of another, always as an end and never as a means only" (*Groundwork* 4:429). Other people are not raw material for your projects. Treating them as such — even when nothing visible goes wrong — is what Kant means by immoral.

The criticism Kant invites, and partly deserves, is that the test is too formal. Many maxims pass universalization on a technicality but feel ugly anyway; many maxims fail on a technicality but seem fine. Hegel's complaint that Kantian ethics has "no content" is the start of an argument that the next two centuries kept having.`,
    sources: [
      { title: "Groundwork of the Metaphysics of Morals", cite: "trans. Mary Gregor, Cambridge 1998, 4:421, 4:429" },
      { title: "Kant's Moral Philosophy (SEP)", cite: "Johnson, R. & Cureton, A. SEP entry 'Kant's Moral Philosophy'", url: "https://plato.stanford.edu/entries/kant-moral/" },
    ],
  },
  {
    id: "the-other",
    slug: "the-other",
    name: "The Other",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["de-beauvoir"],
    shortSummary:
      "The structural role assigned to a group whose interiority is treated as supplementary — the position against which a dominant 'we' defines itself.",
    fullBody: `De Beauvoir adapts Hegel's master-slave dialectic — in which two consciousnesses become selves by recognizing one another — and asks what happens when the recognition is structurally one-way. The result, traced in the Introduction to *The Second Sex*, is the Other: a group whose perspective is treated as supplementary, and whose existence functions to stabilize the identity of the dominant group.

Man, in her analysis, has placed himself as Subject and Woman as Other. He does not need to argue for his point of view; it is the default. She must justify hers each time. The asymmetry is what makes the structure work.

The concept's reach is broad. Fanon read de Beauvoir closely and extended the analysis to race in *Black Skin, White Masks* (1952). Edward Said's *Orientalism* (1978) uses a recognizably similar move for empire and the East. Wherever a group's humanity is presumed to require permission, the Other is what is being deployed.

Two cautions. First, the Other is not the same as the "marginalized." Othering is a specific operation — being made the Object against which a Subject defines itself — not a generic synonym for disadvantage. Second, de Beauvoir's solution is not to invert the structure (women as Subjects, men as Other) but to dissolve the asymmetry — to make mutual recognition genuine.`,
    sources: [
      { title: "The Second Sex", cite: "trans. Borde & Malovany-Chevallier, Vintage 2009, Introduction" },
      { title: "Phenomenology of Spirit", cite: "Hegel, trans. A.V. Miller, Oxford 1977, IV.A (master-slave)" },
    ],
  },
  {
    id: "cogito",
    slug: "cogito",
    name: "Cogito, ergo sum",
    difficulty: "beginner",
    theme: "epistemology",
    philosopherIds: ["descartes"],
    shortSummary:
      "Descartes' point of last retreat: even if everything I think I know about the world is wrong, the fact that I am thinking proves I exist. Foundations don't come cheaper than this.",
    fullBody: `Descartes lands on *cogito, ergo sum* — "I think, therefore I am" — in the second of his *Meditations on First Philosophy* (1641). He has spent the first meditation systematically doubting everything: his senses (sometimes deceive), his memory (sometimes wrong), even mathematics (an evil demon could be deceiving him). The cogito is what survives the doubt.

The argument is not "I am thinking, and only thinking things exist, so I exist." It is more interesting than that. The act of doubting is itself a thought. Whatever the demon does, there has to be someone for the demon to deceive. The self that doubts is the one thing the doubt cannot reach.

What the cogito establishes is narrow. It does not show I have a body, or that the world exists, or that other minds exist. Descartes spends the rest of the *Meditations* trying to build those back, with mixed results. The cogito is foundational not because it gives you a lot, but because it gives you something that cannot be taken away.

The standard contemporary objection is that "I think" smuggles in more than it earns — why "I" rather than just "there is thinking"? Lichtenberg made this point in the eighteenth century; Nietzsche made it sharper in the nineteenth (*Beyond Good and Evil* §17). Whether the cogito survives the objection is one of the longest debates in the field.`,
    sources: [
      { title: "Meditations on First Philosophy", cite: "Descartes, trans. John Cottingham, Cambridge 1996, II" },
      { title: "Beyond Good and Evil", cite: "trans. Walter Kaufmann, Vintage 1989, §17" },
    ],
  },
  // ---- NEW concepts ----
  {
    id: "eternal-recurrence",
    slug: "eternal-recurrence",
    name: "Eternal recurrence",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["nietzsche"],
    shortSummary:
      "Nietzsche's thought experiment: if a demon offered you this life again, every joy and every shame in the same order, eternally, what would your answer be? The question is a test of your relationship to your life.",
    fullBody: `Nietzsche introduces eternal recurrence at *The Gay Science* §341 — "The Greatest Weight." A demon visits you in your loneliest moment and tells you that you will live this life again, with every detail in the same order, forever. Would you gnash your teeth and curse the demon? Or have you ever experienced a moment so affirming that you would call him divine?

The thought experiment is not metaphysics. Nietzsche has occasional cosmological speculations about whether the universe might literally repeat (in his unpublished notes), but the published version treats recurrence as a test. The question is what your relation to your life would be if you could not subtract any of it.

Most people, Nietzsche thinks, could not affirm the recurrence. We secretly hold pieces of our lives at arm's length — that humiliation we don't remember, that decision we don't acknowledge — and the inability to integrate them is what *ressentiment*, weakness, and bad faith feed on. The capacity to affirm — *amor fati* in the practiced form — is what Nietzsche calls saying yes to existence.`,
    sources: [
      { title: "The Gay Science", cite: "trans. Walter Kaufmann, Vintage 1974, §341" },
    ],
  },
  {
    id: "will-to-power",
    slug: "will-to-power",
    name: "Will to power",
    difficulty: "advanced",
    theme: "ethics",
    philosopherIds: ["nietzsche"],
    shortSummary:
      "Nietzsche's psychological-metaphysical hypothesis that what motivates living beings is not the will to survive or to pleasure but a more fundamental drive to grow, to overcome, to extend. The concept has been seriously misused; the careful reading is more interesting.",
    fullBody: `*Wille zur Macht* is one of Nietzsche's most consequential and most misappropriated ideas. It does not mean a desire for political power, military power, or domination over others — although the term has been used that way, especially in the Nazi appropriation of Nietzsche.

The careful reading is psychological and (in Nietzsche's late work) metaphysical. Living beings, Nietzsche claims, are not primarily motivated by survival (against Darwin) or by pleasure (against Bentham and the utilitarians); they are motivated by a more basic drive toward *Macht* — growth, overcoming, extension of capacity. Pleasure is a sign of expanding power; pain is a sign of obstruction. Survival is a consequence, not a goal.

This applies, on Nietzsche's reading, to art, philosophy, science, religion, asceticism — even apparently self-denying practices, he argues, can be forms of will-to-power redirected (ascetic ideals, in his analysis, are ways the ascetic exerts power over himself).

The metaphysical generalization, in the unpublished notes that became *The Will to Power*, extends this to all reality. Whether Nietzsche really endorsed this generalization, or whether the published works support a more restricted psychological reading, is contested. Walter Kaufmann's translations and Brian Leiter's contemporary analytic work argue for the more careful reading.`,
    sources: [
      { title: "Beyond Good and Evil", cite: "trans. Kaufmann, Vintage 1989, §13, §36" },
      { title: "On the Genealogy of Morals", cite: "trans. Kaufmann & Hollingdale, Vintage 1989, III" },
    ],
  },
  {
    id: "ressentiment",
    slug: "ressentiment",
    name: "Ressentiment",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["nietzsche"],
    shortSummary:
      "Nietzsche's term for the slow metabolism of an ancient grievance — the way the powerless, unable to act, revalue inaction as virtue and call the result morality. The Genealogy of Morals is the argument.",
    fullBody: `Nietzsche's first essay in *On the Genealogy of Morals* (1887) traces the modern moral vocabulary back to what he argues are its psychological origins. The earliest moral distinctions, on Nietzsche's reconstruction, were between *good* (the noble, the strong, the able) and *bad* (the base, the weak, the unable). These were aristocratic terms, applied first to oneself.

A *transvaluation* occurred in which the weak — unable to act on their hatred of the strong but unable to forget it — produced a new valuation. The strong became *evil*; the weak became *good*; meekness, humility, suffering, and patience became virtues. Christianity, Nietzsche argues, gave this transvaluation its most successful institutional form.

The label *ressentiment* (Nietzsche keeps the French term) names this affective state: a slow, internalized resentment that cannot discharge itself and so reorganizes the world conceptually. The morality it produces is *real* — Nietzsche is not denying that meekness and humility are values for the people who practice them — but its psychological structure is what philosophy needs to see, and what most moralists never do.

This is one of Nietzsche's most enduring contributions, even where his historical reconstruction is contested. The structural insight — that moral concepts can carry the residue of power relations that produced them — has shaped genealogical analysis from Foucault forward.`,
    sources: [
      { title: "On the Genealogy of Morals", cite: "trans. Kaufmann & Hollingdale, Vintage 1989, I" },
    ],
  },
  {
    id: "dasein",
    slug: "dasein",
    name: "Dasein / Being-in-the-world",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["heidegger"],
    shortSummary:
      "Heidegger's term for the human being — the entity for whom its own being is a question. Dasein is always already in a world of equipment, projects, and others; the mind/world split of the tradition is, on this picture, a derived abstraction.",
    fullBody: `*Dasein* — literally "being-there" — is Heidegger's term for the human being in *Being and Time* (1927). He uses it instead of "human," "person," or "subject" because each of those carries traditional commitments he wants to suspend.

The central thesis: Dasein is *being-in-the-world*. Not a mind contained in a body, watching an external world through sensory windows. Not a subject confronting objects. Dasein is, from the start, *involved* in a structured field of equipment, social practices, projects, and meanings. The cup on your desk does not appear as a featureless object that you then interpret as a cup; it appears already as for-coffee, ready-to-hand, embedded in the practice of drinking.

This is more radical than it sounds. The traditional mind-body problem, on Heidegger's analysis, only arises because the tradition has *already abstracted* from the original involvement and produced the figure of the disengaged subject contemplating objects. The mind-body problem is artificial, generated by the abstraction.

Dasein has structural features (*existentialia*) that include *temporality* (we are always projecting forward into possibilities, finding ourselves thrown into circumstances, attending to a present structured by both), *being-with* (we are essentially among others), *being-toward-death* (our finitude is constitutive of who we are), and *care* (the fundamental mode of involvement that holds the other structures together).`,
    sources: [
      { title: "Being and Time", cite: "Heidegger, trans. Macquarrie & Robinson, Harper 1962, §§9–12" },
    ],
  },
  {
    id: "phenomenology-method",
    slug: "phenomenology-method",
    name: "Phenomenological method (epoché)",
    difficulty: "advanced",
    theme: "mind",
    philosopherIds: ["husserl"],
    shortSummary:
      "Husserl's method for studying consciousness: bracket the natural-attitude assumption that the world simply exists out there, and instead describe how things appear in experience with what structures, in what modes of givenness.",
    fullBody: `Husserl's *epoché* (Greek for "suspension") is the methodological move that defines phenomenology. In the *natural attitude*, we treat the world as simply there, as containing objects with properties, as causally interacting with us in ways physics will eventually fully explain. Phenomenological inquiry does not deny any of this. It *brackets* it — sets it aside — in order to attend to what is given in experience as it is given.

The point is methodological discipline. Once you stop assuming what the experience must be about (its causal substrate, its accuracy, its representation of an external reality), what is left to describe is the structure of the experience itself: its temporal flow, its horizons, its modes of giving (perceiving, remembering, imagining, anticipating), its intentional structure (consciousness is always *of* or *about* something).

What you find, when you do this carefully, is that consciousness has intricate structures that the natural-attitude leap to causation misses. The way an object appears across changes of perspective; the way the past is co-present with the now in the form of *retention*; the way other people are *originally* given as other intentional centers, not first as bodies whose minds we infer; the way the lived world (*Lebenswelt*) has its own structure that scientific reconstruction depends on without acknowledging.`,
    sources: [
      { title: "Ideas", cite: "Husserl, trans. F. Kersten, Springer 1982, §§31–32" },
    ],
  },
  {
    id: "panopticon",
    slug: "panopticon",
    name: "Panopticism",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["foucault"],
    shortSummary:
      "Foucault's diagram of modern disciplinary power: not the spectacle of punishment, but the architecture of constant possible observation that produces self-regulating subjects. The prison is the model; the school, the hospital, and the factory work the same way.",
    fullBody: `Jeremy Bentham designed the Panopticon in the late eighteenth century: a circular prison with a central watchtower from which a single guard could observe any cell at any time, without the prisoners being able to see whether they were being observed. The prisoners, never knowing when they were watched, internalize the watching and regulate themselves.

Foucault, in *Discipline and Punish* (1975), takes Bentham's prison as the *diagram* of modern disciplinary power. The shift he identifies is from earlier *sovereign power* (the public spectacle of punishment, exercised on the body of the criminal) to *disciplinary power* (the invisible normalization of behavior through institutions that all share the panoptic structure). The school, the hospital, the barracks, the factory, the mental asylum — all of these institutions, on Foucault's analysis, operate by partitioning and observing their populations in ways that produce specific kinds of subjects.

The mature claim is more careful than the slogan. Foucault is not saying that modern societies are literally prisons; he is saying that the *technique* of producing self-regulating subjects through arrangements of visibility has spread far beyond actual prisons and now structures much of modern life. The "carceral society" is not a metaphor for totalitarianism; it is a description of how power has been redistributed across a society that does not require explicit coercion to produce conforming behavior.`,
    sources: [
      { title: "Discipline and Punish", cite: "Foucault, trans. Alan Sheridan, Vintage 1995, Part III Ch. 3" },
    ],
  },
  {
    id: "biopolitics",
    slug: "biopolitics",
    name: "Biopolitics",
    difficulty: "advanced",
    theme: "politics",
    philosopherIds: ["foucault"],
    shortSummary:
      "Foucault's term for a modality of power that takes the life of populations as its object — birth rates, mortality, health, sexuality, race. Modern states govern populations as biological aggregates; this is what made some forms of mass violence possible in the 20th century.",
    fullBody: `Foucault introduces *biopouvoir* (biopower) at the end of *The History of Sexuality, Vol. 1* (1976) and develops it in the *Society Must Be Defended* lectures (1976) and *Security, Territory, Population* (1977–78).

The argument distinguishes two modalities of modern power. *Discipline* operates on individual bodies, training and partitioning them. *Biopolitics* operates on populations — entire collective bodies — managed as biological aggregates with statistical regularities. Birth rates, mortality, longevity, public health, racial composition, sexuality — these become objects of administrative attention in ways that previous political traditions had no language for.

The historical claim: the modern state, from the eighteenth century onward, has increasingly taken life as its object. The classical sovereign claimed the right to *take* life or let live; the modern state claims the right to *make* live and let die. This sounds benign, and in many ways is — public health, sanitation, vaccinations, life expectancy. But Foucault argues it also opens the door to specifically modern forms of mass violence: when life is the object of administration, the question "which lives?" can be answered in catastrophic ways. State racism, on his analysis, is the mechanism through which biopolitics can become genocidal.

Giorgio Agamben's *Homo Sacer* (1995) takes Foucault's framework further, developing the concept of *bare life* — life stripped of political form — as a category modern sovereignty produces and exploits.`,
    sources: [
      { title: "The History of Sexuality, Vol. 1", cite: "Foucault, trans. Robert Hurley, Vintage 1990, V" },
    ],
  },
  {
    id: "differance",
    slug: "differance",
    name: "Différance",
    difficulty: "advanced",
    theme: "logic",
    philosopherIds: ["derrida"],
    shortSummary:
      "Derrida's neologism — the same in French sound as différence — combining to differ (mark off as different) and to defer (postpone in time). It names the structure by which meaning is generated without ever being fully present.",
    fullBody: `*Différance* is Derrida's neologism, introduced in essays of the late 1960s. The a in place of the e marks the difference from *différence*; the two are *not* distinguishable in spoken French, which is part of the joke and part of the philosophical point. The term combines two senses of the French verb *différer*: to differ (mark off as different from) and to defer (postpone in time).

The argument it names: meaning is not generated by signs that simply name pre-existing things. Following Saussure, Derrida holds that meaning is differential — a sign means what it does because of its differences from other signs in the system. But Derrida pushes further: the meaning of a sign is never *fully present* at any moment, because any sign refers to other signs, and the chain has no end. Meaning is always also being *deferred* — postponed to a fullness it never achieves.

This is one move in Derrida's sustained argument against what he calls the *metaphysics of presence* — the Western tradition's recurring assumption that the truly real is fully self-present, identical with itself, available without remainder. Derrida finds versions of this assumption in everyone from Plato to Husserl, and his readings are attempts to show how each text's commitment to full presence is undermined by the very structures it tries to ground itself on.

The political and ethical payoff is genuine but easy to overstate. Différance is not a license for "anything goes." It is a discipline for noticing that closure — interpretive, conceptual, political — is always premature, and that what has been excluded often deserves a hearing.`,
    sources: [
      { title: "Margins of Philosophy", cite: "Derrida, trans. Alan Bass, Chicago 1982, 'Différance'" },
    ],
  },
  {
    id: "simulacrum",
    slug: "simulacrum",
    name: "Simulacrum / Hyperreality",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["baudrillard"],
    shortSummary:
      "Baudrillard's term for signs that have lost any relation to an original — copies of nothing, signs of signs. The hyperreal is what we get when the simulation no longer claims to represent anything outside itself.",
    fullBody: `Baudrillard's *Simulacra and Simulation* (1981) traces three orders of simulacra. In the first order (the early modern era), signs are *counterfeits* — imitations of real things. In the second order (industrial production), signs are mass-produced *copies* of an original. In the third order (the contemporary moment), signs are *simulacra* — copies without originals, signs that no longer refer to anything outside the system of signs.

A Disney castle is not a copy of a real castle; it is a sign of *castle-ness* that has cut loose from any actual castle. The *hyperreal* is the regime of such signs — a domain in which the question of what underlies the appearance is no longer well-formed, because nothing does.

The political consequence is the most discussed. Once we are in the hyperreal, the distinction between truth and simulation breaks down not because we have lost interest in truth but because the systems that produce our shared reality are made of signs that have no truth-relation to anything. Political campaigns, news media, branded identities — all operate in this register.

The argument is easy to caricature ("nothing is real!") and easy to dismiss. The careful reading is more disturbing: Baudrillard is not denying that things happen; he is arguing that our relation to them is increasingly mediated by sign systems that don't depend on the things being what they signify.`,
    sources: [
      { title: "Simulacra and Simulation", cite: "Baudrillard, trans. Sheila Faria Glaser, Michigan 1994" },
    ],
  },
  {
    id: "alienation",
    slug: "alienation",
    name: "Alienation (Marx)",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["marx"],
    shortSummary:
      "Marx's analysis of how capitalist labor separates workers from the product of their labor, the process of work, their own species-being, and one another. The Economic and Philosophic Manuscripts of 1844 is the foundational text.",
    fullBody: `Marx develops the concept of *Entfremdung* — alienation — in the *Economic and Philosophic Manuscripts of 1844*, building on Hegel's analysis of how spirit becomes estranged from itself and on Feuerbach's account of religious alienation (we project our human qualities onto a fictive God and then experience ourselves as deficient).

Capitalist labor, on Marx's account, alienates workers in four interrelated ways:

1. **From the product of their labor.** The worker makes things she does not own, has no control over, and often cannot afford. The product faces her as an alien object.
2. **From the activity of labor.** Work under capitalism is, for most workers, externally imposed, monotonous, and the antithesis of human creativity. Labor that should be self-expression becomes self-mortification.
3. **From their species-being.** What distinguishes humans (Marx argues) is the capacity for free, conscious, creative production. Capitalism reduces this to wage-earning survival, alienating workers from what is most distinctively human about them.
4. **From other workers.** Capitalism's competitive structure makes other workers into rivals rather than collaborators.

The concept fades in Marx's later, more economic work (*Capital*) but recurs in Western Marxism — Lukács, the Frankfurt School, the existentialist Marxisms — as a way of holding open the human stakes of structural critique. The 1844 manuscripts were not published until 1932 and substantially changed the twentieth-century reception of Marx.`,
    sources: [
      { title: "Economic and Philosophic Manuscripts of 1844", cite: "trans. Martin Milligan, Prometheus 1988" },
    ],
  },
  {
    id: "general-will",
    slug: "general-will",
    name: "General will",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["rousseau"],
    shortSummary:
      "Rousseau's name for the collective sovereignty of citizens who, in willing the common good, will both freely and as one. Not the same as the will of the majority; the concept has been productively defended and dangerously misappropriated.",
    fullBody: `In *The Social Contract* (1762), Rousseau distinguishes the *general will* (*volonté générale*) from the *will of all* (*volonté de tous*). The will of all is just the aggregate of individual preferences. The general will is what citizens would will if they were oriented toward the common good of the political community as a whole.

The relation is delicate. The general will is not whatever the majority happens to want; majorities can be wrong about what serves the common good. It is not what any individual decides the common good is; that would be replacing self-government with paternalism. It is, in some sense, what the citizen body would converge on under conditions where deliberation is well-informed and oriented toward shared interests rather than narrow ones.

This produces the famous and disturbing claim that whoever resists the general will may have to be "forced to be free." Liberal critics from Constant onward have argued this licenses tyranny — anyone who resists the regime can be told that they don't really understand their own freedom. Defenders argue that Rousseau is making a stronger claim than the slogan suggests: in a properly constituted republic with the conditions for genuine self-rule (rough equality, civic education, small scale, real participation), the general will is something each citizen can recognize as her own deeper choice, and being held to it is not coercion but reminder.

Whether any actual society has ever satisfied Rousseau's conditions is a separate question. The concept's afterlife in Hegel, Marx, and twentieth-century democratic theory is enormous.`,
    sources: [
      { title: "The Social Contract", cite: "Rousseau, trans. Maurice Cranston, Penguin 1968, Book I" },
    ],
  },
  {
    id: "veil-of-ignorance",
    slug: "veil-of-ignorance",
    name: "Veil of ignorance",
    difficulty: "beginner",
    theme: "politics",
    philosopherIds: ["rawls"],
    shortSummary:
      "Rawls' thought experiment: design principles of justice from behind a veil that hides your race, class, talents, and circumstances. Whatever you'd rationally choose without knowing who you'd turn out to be is what justice requires.",
    fullBody: `In *A Theory of Justice* (1971), Rawls introduces the *original position* as a thought experiment: rational people choose the principles to govern their society from behind a *veil of ignorance* that hides their race, class, sex, age, talents, religion, and comprehensive moral views. Whatever such hypothetical choosers would rationally select is what justice requires.

The device's purpose is to formalize the intuition that justice should not depend on facts about ourselves that are morally arbitrary. We don't deserve our natural talents or our family circumstances; principles of justice that work by exploiting our advantages over others fail to take this seriously. The veil filters out the arbitrary factors.

Rawls argues that rational choosers behind the veil would converge on two principles. First, the most extensive set of basic liberties compatible with the same liberties for everyone (equal political and civil rights). Second, social and economic inequalities are permitted only insofar as positions are open to all under fair equality of opportunity, *and* only insofar as they benefit the worst-off (the *difference principle*).

The structure of the argument is contestable in several ways. Why exactly *these* principles rather than others? How thick is the veil — are the choosers behind it Western liberal subjects in disguise? Is the original position really neutral, or does it build in assumptions? Critics from Nozick to Sandel to Okin have pressed these questions. The thought experiment remains, despite the critiques, one of the most-used devices in contemporary political philosophy.`,
    sources: [
      { title: "A Theory of Justice", cite: "Rawls, Harvard 1971, §§3–4, §24" },
    ],
  },
  {
    id: "qualia",
    slug: "qualia",
    name: "Qualia",
    difficulty: "advanced",
    theme: "mind",
    philosopherIds: [],
    shortSummary:
      "The subjective, qualitative character of conscious experience — what it's like to see red, taste coffee, feel pain. The hard problem of consciousness is whether qualia can be fully accounted for in any physicalist theory of mind.",
    fullBody: `Qualia (singular: *quale*) are the introspectively accessible qualitative features of conscious experience. The redness you see, the painfulness of pain, the saltiness of taste — these have specific phenomenal character that is, on the standard view, the central explanandum of consciousness.

The contested philosophical question: can qualia be fully explained in physical terms? Several arguments are taken to suggest they cannot.

*The Knowledge Argument* (Frank Jackson, 1982): Mary the color scientist knows all the physical facts about color vision but has never seen red. When she finally sees a red rose, she learns something new — what it's like to see red. So there are facts (about qualia) that the physical facts don't include.

*The Zombie Argument* (David Chalmers, 1996): we can coherently conceive of a being physically identical to me but with no inner experience whatsoever. If such a *zombie* is conceivable, physical facts don't entail qualia.

*The Explanatory Gap* (Joseph Levine, 1983): no matter how complete our physical theory of the brain becomes, it leaves a residual question about why those physical processes are accompanied by *this* subjective experience and not some other one (or none).

The standard physicalist replies (multiple realizability, type-identity revisions, illusionism — Dennett, Frankish) deny that qualia have the special features the arguments assume. Whether consciousness has a "hard problem" in this sense is one of the live disputes in philosophy of mind.`,
    sources: [
      { title: "Frank Jackson, 'Epiphenomenal Qualia'", cite: "Philosophical Quarterly 32 (1982): 127–136" },
      { title: "David Chalmers, The Conscious Mind", cite: "Oxford 1996" },
    ],
  },
  {
    id: "mind-body",
    slug: "mind-body-problem",
    name: "Mind-body problem",
    difficulty: "intermediate",
    theme: "mind",
    philosopherIds: ["descartes"],
    shortSummary:
      "How is the mental related to the physical? The question Descartes formulated has produced four centuries of competing answers — substance dualism, physicalism, functionalism, property dualism, panpsychism — and is still open.",
    fullBody: `The mind-body problem in its modern form was formulated by Descartes. He held that minds and bodies are two fundamentally different kinds of substance — minds essentially thinking, unextended; bodies essentially extended, non-thinking. This is *substance dualism*, and its central problem is causal interaction: how does an unextended mind move an extended body?

The major contemporary positions:

*Physicalism (or materialism)*: everything is physical, including mental states. Various flavors include *type identity theory* (mental kinds are identical to physical kinds), *functionalism* (mental states are defined by their functional role, multiply realizable in different physical systems), and *eliminativism* (some mental categories will turn out not to refer to anything real).

*Property dualism*: physical substances are the only kind of substance, but they have both physical and mental properties, with the mental ones not reducible to the physical ones.

*Panpsychism*: the mental is fundamental and ubiquitous; some primitive form of experience attaches to all physical systems. The position has been revived in serious philosophy in the last few decades.

*Idealism*: the physical is reducible to the mental. Berkeley is the historical exemplar; contemporary versions are rarer but exist.

The "hard problem of consciousness" (Chalmers, 1995) is a specific challenge to physicalist programs: even a complete account of the brain's functioning seems to leave open *why* there is subjective experience at all. Whether this is a real explanatory gap or an artifact of how we currently conceive things is the live debate.`,
    sources: [
      { title: "Philosophy of Mind (SEP)", cite: "Kim, J. Multiple entries", url: "https://plato.stanford.edu/entries/mind-identity/" },
    ],
  },
  {
    id: "free-will",
    slug: "free-will-determinism",
    name: "Free will and determinism",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: [],
    shortSummary:
      "Are our choices genuinely free, given that we live in a universe of physical causes? Compatibilists say yes (freedom is compatible with determinism); libertarians say yes (and determinism is false); hard determinists say no. The debate is older than philosophy and not close to settled.",
    fullBody: `The free will problem is older than philosophy as a discipline, but its modern form depends on a tension between two intuitions:

1. We do, sometimes, freely choose what to do — and our being free is what makes moral responsibility coherent.
2. The universe is governed by causal laws (or, at the quantum level, by laws plus genuine randomness). Either way, the choices we make are the result of prior physical states we did not control.

The major positions:

*Hard determinism*: the universe is deterministic, free will is incompatible with determinism, so we lack free will. Moral responsibility, on the strict version, has to be revised accordingly.

*Libertarianism* (about free will, not the political position): the universe is *not* fully deterministic with respect to human choice; we have a genuine causal contribution that is not reducible to prior states. The challenge is to explain how this is supposed to work without making free choice merely random.

*Compatibilism*: free will and determinism are compatible because what we mean by "free" is something like "acting from one's own desires without external coercion" — and that can be true even in a determined universe. Hume, Dennett, and most contemporary analytic philosophers are compatibilists.

Recent neuroscience (Libet's experiments and successors) has been read by some as undermining free will, but the philosophical inference from neuroscience to "no free will" depends on which conception of free will is in play. Compatibilists are mostly unmoved.`,
    sources: [
      { title: "Free Will (SEP)", cite: "O'Connor, T. SEP entry 'Free Will'", url: "https://plato.stanford.edu/entries/freewill/" },
    ],
  },
  {
    id: "tao",
    slug: "the-tao",
    name: "Dao (Tao)",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["laozi", "zhuangzi"],
    shortSummary:
      "The Daoist name for what cannot quite be named — the underlying pattern of reality, the way of things. The Daodejing opens with the warning that the dao that can be told is not the eternal dao, and most of what follows tries to gesture rather than to say.",
    fullBody: `*Dào* — usually translated "the way" — is the central concept of philosophical Daoism. The *Daodejing* opens with the line that "the dao that can be told is not the eternal dao," and the whole book is in some sense an attempt to point at what cannot be directly stated.

The dao is the underlying pattern from which the world emerges and to which it returns. It is not a being among other beings; it is more like the way things are when they are not being forced into the categories that human language and human politics impose. Water, in the *Daodejing*, is the favored image: soft, yielding, but ultimately stronger than what is rigid because it flows around obstacles rather than fighting them.

The ethical and political doctrine that follows is *wú wéi* — "non-action," or more precisely, action that does not coerce against the grain of things. The skilled cook, the wise ruler, the sage — all are described as acting in ways that are powerful precisely because they do not assert themselves against the dao.

Confucianism uses the word too, but means something more like "the right way to live" — a moral norm. The Daoist *dao* is more fundamental, more cosmological, and more skeptical of the very ethical and political categories that Confucianism takes as central.`,
    sources: [
      { title: "Daodejing", cite: "trans. D.C. Lau, Penguin 1963" },
    ],
  },
  {
    id: "ren",
    slug: "ren",
    name: "Rén (humaneness)",
    difficulty: "beginner",
    theme: "ethics",
    philosopherIds: ["confucius", "mencius"],
    shortSummary:
      "The central Confucian virtue. Sometimes translated 'humaneness,' 'benevolence,' or 'co-humanity' — the disposition to recognize others as fellow human beings and to act accordingly. Mencius argued the seeds of rén are in everyone.",
    fullBody: `*Rén* (仁) is the central Confucian virtue. The character itself is composed of "person" and "two" — suggesting the inherently relational character of the virtue. Translations include *humaneness*, *benevolence*, *co-humanity*, and *human-heartedness*. None is quite right; each captures part of what the term names.

In the *Analects*, Confucius famously refuses to give a single definition. Asked what rén is, he answers differently to different students — describing what rén looks like in their particular case, what would be excessive or deficient for them. The implication is that rén is not a rule to be followed but a disposition to be cultivated, and the cultivation is always concrete and situated.

Mencius extends rén into a theory of human nature: the *seed* (*duān*) of rén is innate in every person. His famous example: anyone who sees a child about to fall into a well will feel a sudden surge of alarm and compassion, not from calculation of reputation, not from desire for reward, simply because seeing the child triggers something prior to deliberation (*Mencius* 2A.6). That spontaneous response is the seed of rén. Cultivation grows it into a stable disposition; failure of cultivation leaves it stunted but does not destroy it.

The political extension: the legitimate ruler is one whose government is humane (*ren zheng*), oriented toward the people's flourishing rather than the ruler's own wealth or status. Mencius gives this a sharp edge: tyrants forfeit the *Mandate of Heaven* and can be legitimately overthrown.`,
    sources: [
      { title: "The Analects", cite: "trans. Edward Slingerland, Hackett 2003" },
      { title: "Mencius", cite: "trans. D.C. Lau, Penguin 2004, 2A.6" },
    ],
  },
  {
    id: "wu-wei",
    slug: "wu-wei",
    name: "Wú wéi (non-action)",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["laozi", "zhuangzi"],
    shortSummary:
      "Daoist 'non-action' — not passivity, but the kind of action that aligns with the grain of things rather than forcing against it. The cook in the Zhuangzi who carves an ox without dulling his blade is the model.",
    fullBody: `*Wú wéi* (無為) — literally "without action" — is one of the most consistently misunderstood concepts in classical Chinese thought. It does not mean doing nothing. It means acting without *forcing* — without trying to coerce a situation against its own tendencies.

The image in the *Zhuangzi* (Chapter 3) is the cook carving an ox. The novice butcher hacks at the carcass; his blade dulls quickly. The mediocre butcher cuts more carefully; his blade lasts a year. The master cook has used the same blade for nineteen years and it is as sharp as when he started. His secret: he no longer cuts the ox. He follows the spaces between the joints, and the ox separates itself.

The political application in the *Daodejing*: the best ruler is hardly noticed; the next best is loved; the next is feared; the worst is despised. The well-ordered state runs itself; the ruler who is constantly intervening — passing new laws, fighting wars, imposing taxes — produces the disorder he is trying to suppress.

The ethical application: skilled action of any kind, on the Daoist view, involves a kind of disappearance of the agent. The cook is not separated from his blade or from the ox; the ruler is not separated from the people; the sage is not separated from the dao. Where Confucianism cultivates moral effort, Daoism cultivates the dropping away of the effort that gets in the way of skilled response.`,
    sources: [
      { title: "Zhuangzi", cite: "trans. Brook Ziporyn, Hackett 2009, Chapter 3" },
      { title: "Daodejing", cite: "trans. D.C. Lau, Penguin 1963, §17" },
    ],
  },
  {
    id: "karma",
    slug: "karma",
    name: "Karma",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["buddha"],
    shortSummary:
      "The Indian doctrine that actions produce consequences for the agent — across this life and (in most versions) future lives. The popular Western reading is shallower than the philosophical traditions warrant.",
    fullBody: `*Karma* (Sanskrit) — literally "action" — names a doctrine shared in different forms by most Indian philosophical and religious traditions (Hindu, Buddhist, Jain, Sikh). The popular Western version ("what goes around comes around") captures very little of what the philosophical traditions mean.

The shared core: actions performed with intention create dispositions and consequences for the agent that extend into the future. In most Indian traditions, these consequences extend across multiple lifetimes through the mechanism of *saṃsāra* — the cycle of rebirth. The kind of life one is born into, the dispositions one finds oneself with, the consequences one encounters — all are, in part, the working out of past karma.

The Buddhist version is the most carefully worked out philosophically. Karma is not a substance that travels from one life to the next; it is a pattern of conditioning that propagates through dependent origination. Nāgārjuna and the later Mahāyāna traditions argue that karma, like everything else, is *empty* — real at the conventional level, without independent essence at the ultimate level.

The Jain version is the most precise: karma is conceived as a kind of subtle matter that adheres to the soul as a result of action and produces consequences through specific mechanisms. The Jain doctrine of *ahiṃsā* (non-harm) is partly motivated by karmic considerations.

Hindu traditions vary, with Advaita Vedānta treating karma as part of the larger structure of *māyā* that liberation transcends, and Bhakti traditions emphasizing devotion as a way of acting that does not produce binding karma.`,
    sources: [
      { title: "Karma (SEP)", cite: "Related SEP entries on Indian philosophy and Buddhism", url: "https://plato.stanford.edu/entries/karma/" },
    ],
  },
  {
    id: "brahman-atman",
    slug: "brahman-atman",
    name: "Brahman / Ātman",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["adi-shankara"],
    shortSummary:
      "The Upaniṣadic claim that the ultimate reality (Brahman) and the deepest self (Ātman) are not similar, not analogous, but identical. The whole of Advaita Vedānta is the working out of this thesis.",
    fullBody: `*Brahman* is the term for ultimate reality in the Vedic philosophical tradition. *Ātman* is the term for the deepest self — what each of us most fundamentally is. The central thesis of the principal Upaniṣads, refined by Advaita Vedānta, is that these two are not merely similar or connected. They are identical. *Tat tvam asi* — "you are that" — is the *mahāvākya* (great saying) of the *Chāndogya Upaniṣad* that crystallizes the doctrine.

The implications are demanding. The plurality of distinct selves we ordinarily experience is, on this view, an artifact of *avidyā* (ignorance) and *māyā* (the appearance-generating power). The realization of identity with Brahman is not the attainment of a new state but the recognition of what was always already the case.

Brahman is *not* a personal deity in the standard Abrahamic sense; it is *not* a being with properties; it is *not* one entity among others, even the greatest. It is what is *real* when all the false distinctions — including, ultimately, the distinction between knower and known — have been seen through.

Rāmānuja's *Viśiṣṭādvaita* (qualified non-dualism) and Madhva's *Dvaita* (dualism) contest Śaṅkara's reading of the same texts, arguing for various qualifications and pluralities. The three schools together constitute the major debate of medieval Indian philosophical theology, and arguments are still being developed within all three traditions today.`,
    sources: [
      { title: "Adi Shankara (SEP)", cite: "Ram-Prasad, C. SEP entry 'Sankara'", url: "https://plato.stanford.edu/entries/shankara/" },
    ],
  },
  {
    id: "performativity",
    slug: "performativity",
    name: "Performativity",
    difficulty: "advanced",
    theme: "politics",
    philosopherIds: ["butler"],
    shortSummary:
      "Butler's extension of speech-act theory: gender is not a cultural overlay on a pre-existing biological substrate but the iterated performance through which that substrate is constituted as the kind of thing it is.",
    fullBody: `J.L. Austin's *How to Do Things with Words* (1955) distinguished *constative* utterances (which describe the world) from *performative* utterances (which do something — "I do" in a wedding constitutes the marriage; it doesn't describe one).

Judith Butler's *Gender Trouble* (1990) takes this distinction and applies it to gender. Gender, on her account, is *performative* — not in the loose sense of "performing a role" but in the precise sense that the iterated performance is what produces the supposed underlying gender. The body that "has" a gender is the body we have learned to read through countless small reiterations of social norms — gestures, clothing, intonation, comportment.

The key distinction: this is *not* the simple sex/gender distinction in which sex is biological and gender is the cultural overlay. On Butler's account, even the apparent biological substrate is constituted as the kind of object it is through cultural practices of naming, examining, regulating. The "natural" body of a given sex is itself a cultural product, all the way down.

The political implication: gender is not chosen (the standard misreading); it is constituted by deeply constraining repetitions that we did not initiate. What it does open is the possibility of *subversive repetition* — performances that expose and disrupt the apparent naturalness of the norm. Drag, on Butler's analysis, is not a parody of an original gender but the revelation that what we took to be the original was always already performance.`,
    sources: [
      { title: "Gender Trouble", cite: "Butler, Routledge 1990, Conclusion" },
    ],
  },
  {
    id: "subaltern",
    slug: "subaltern",
    name: "The subaltern",
    difficulty: "advanced",
    theme: "politics",
    philosopherIds: ["spivak"],
    shortSummary:
      "Spivak's extension of Gramsci: those whose social position is so structurally subordinated that even their resistance is hard to register within available discursive frameworks. The question 'can the subaltern speak?' is more careful than the slogan suggests.",
    fullBody: `Antonio Gramsci used *subaltern* in his *Prison Notebooks* (1929–1935) to designate social groups whose subordination places them outside the dominant historical narrative. Gayatri Spivak, in her 1988 essay "Can the Subaltern Speak?", extends and complicates the concept.

Spivak's question is not whether the subaltern can literally produce sound or words. It is whether, given the discursive structures available, the speech of the most marginalized — particularly women in colonized societies — can be *heard* as speech rather than as silence, hysteria, or pathology. Her case study is the British colonial debate about sati (widow self-immolation) in nineteenth-century India: the colonial discourse ("white men saving brown women from brown men") and the indigenous nationalist discourse ("women died willingly") both foreclosed the actual perspective of the women involved. Whatever the women said, the available frameworks rendered it inaudible.

Her preliminary conclusion — sometimes summarized as "no, the subaltern cannot speak" — is more precise than the slogan: it is not that the subaltern has no voice but that the discursive conditions for that voice to register *as speech* are systematically absent.

The political and ethical question is the work required to produce those conditions. This is not a counsel of despair; it is an injunction to the careful labor of listening differently and creating the frameworks within which previously inaudible speech becomes hearable.`,
    sources: [
      { title: "Can the Subaltern Speak?", cite: "Spivak, in *Marxism and the Interpretation of Culture*, Illinois 1988" },
    ],
  },
  {
    id: "orientalism-concept",
    slug: "orientalism",
    name: "Orientalism",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["said"],
    shortSummary:
      "Said's term for the Western academic, literary, and political discourse about 'the East' as a system of representations that produces the object it claims to describe — and serves the interests of those producing it.",
    fullBody: `Edward Said's *Orientalism* (1978) takes Foucault's analysis of discourse and applies it to the Western corpus of writing about the Middle East, North Africa, and Asia. The argument: the disciplines that came to be called "Orientalism" — philology, history, literary criticism, anthropology, political analysis — did not neutrally describe the regions they studied. They produced a *discourse* with characteristic figures (the sensual, despotic, mysterious, irrational East), characteristic absences (the perspective of those being represented), and characteristic effects (the legitimation of colonial administration, the framing of contemporary geopolitics).

The argument is not that every individual Orientalist scholar was malicious, or that every claim made was false. It is that the *discursive system* did the work of producing its object in such a way that the imperial projects depending on it were rendered intellectually respectable.

The book has been criticized for the scope of its claims (does it apply to *all* Western scholarship on these regions?) and for its method (some have argued the archive is selectively chosen). But the structural point — that knowledge production about the "Other" has political conditions and political effects — has been transformative. *Orientalism* essentially founded postcolonial studies as a field, and its analytical strategy has been extended to similar discourses about Africa, Latin America, Eastern Europe, and other regions whose representations have been shaped by their relations to imperial powers.`,
    sources: [
      { title: "Orientalism", cite: "Said, Pantheon 1978" },
    ],
  },
  {
    id: "natural-law",
    slug: "natural-law",
    name: "Natural law",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["aquinas"],
    shortSummary:
      "The tradition — Stoic, Christian (especially Thomist), and Enlightenment — that holds moral and legal norms can be derived from the rational structure of human nature and the world. Still alive in Catholic ethics, in some human-rights theory, and in revived analytic moral philosophy.",
    fullBody: `Natural law theory holds that moral and legal norms can be derived from the rational structure of human nature and the world. The tradition has several layers.

The Stoic version (Cicero, Seneca, Marcus Aurelius) holds that there is a *logos* — a rational order — that pervades the cosmos, and that human reason participates in it. To live according to reason is to live according to nature, and the moral law is what reason recognizes as binding regardless of the conventions of any particular state.

The Christian version, classically formulated by Aquinas (*Summa Theologica* I-II, qq. 90–97), distinguishes *eternal law* (God's wisdom), *divine law* (revelation), *natural law* (the rational creature's participation in the eternal law), and *human law* (the positive laws of particular communities). Natural law is what human practical reason can grasp without revelation about the structure of human flourishing, and human laws are legitimate insofar as they are derivations from natural law.

The Enlightenment versions (Grotius, Pufendorf, Locke) secularize the tradition, grounding natural law in human nature alone without explicit appeal to God. This becomes the philosophical basis for early modern theories of natural rights and the social contract.

The tradition was largely eclipsed in the twentieth century by legal positivism (the view that the validity of law has no necessary connection to morality) and by various forms of moral skepticism. But it has had a serious analytic revival — John Finnis' *Natural Law and Natural Rights* (1980), Robert P. George, and others — that has made the tradition philosophically respectable again. The capabilities approach in Nussbaum has structural affinities with natural law without explicitly being one.`,
    sources: [
      { title: "Natural Law (SEP)", cite: "Murphy, M. SEP entry 'The Natural Law Tradition in Ethics'", url: "https://plato.stanford.edu/entries/natural-law-ethics/" },
    ],
  },
  {
    id: "hegelian-dialectic",
    slug: "dialectic",
    name: "Dialectic (Hegelian)",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["hegel", "marx"],
    shortSummary:
      "Hegel's method: a position generates its own contradiction, the contradiction gets articulated, and a higher position emerges that contains what was right in both. Often glossed as thesis-antithesis-synthesis, though Hegel rarely used those terms.",
    fullBody: `Hegel's dialectic is the developmental movement by which consciousness, history, and concepts unfold through their internal contradictions. The structure: a position (a thesis) is held; on examination, the position turns out to generate or depend on its own opposite (the antithesis); the recognition of this contradiction produces a new position (the synthesis) that contains what was right in both, sublating (*Aufhebung* — at once canceling, preserving, and lifting) the earlier moments.

This pattern runs through Hegel's major works in different domains. In the *Phenomenology of Spirit* (1807), consciousness develops through stages — sensory certainty, perception, understanding, self-consciousness, reason — each of which collapses into the next when its internal contradictions become explicit. In the *Logic* (1812–16), pure thought develops through a parallel sequence of category-pairs. In the *Philosophy of Right* (1821), ethical life develops through family, civil society, and the state.

Marx famously inverted the dialectic from spirit to matter: history unfolds through the contradictions of *modes of production*, not through the self-realization of *Geist*. The Hegelian Right Hegelians took the system as legitimating the existing order; the Left Hegelians took the method as a critical instrument.

The dialectic has had a complicated reception. It is sometimes caricatured as a mechanical formula. Hegel himself was usually more careful, treating the movement as immanent to the specific subject matter rather than imposed from outside. Whether the dialectic is a substantive philosophical method or a way of structuring exposition is a question that has persisted for two centuries.`,
    sources: [
      { title: "Hegel's Phenomenology of Spirit", cite: "trans. A.V. Miller, Oxford 1977" },
    ],
  },
  {
    id: "social-contract",
    slug: "social-contract",
    name: "Social contract",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["hobbes", "locke", "rousseau", "rawls"],
    shortSummary:
      "The tradition — Hobbes, Locke, Rousseau, Rawls — that derives the legitimacy of political authority from the hypothetical or actual consent of those subject to it. The differences among contract theorists matter as much as the shared structure.",
    fullBody: `Social contract theories ground the legitimacy of political authority in the consent of those subject to it. The contract is typically *hypothetical* (what rational agents *would* consent to under appropriate conditions) rather than historical (an actual agreement at some past moment, which mostly didn't happen).

The major versions differ sharply.

*Hobbes* (*Leviathan*, 1651): in the state of nature, life is a war of all against all. Rational agents trade in their natural rights for security under an absolute sovereign. The contract is one-way: the people surrender; the sovereign is not party to it and can therefore not break it. The contract justifies authoritarianism as the rational alternative to chaos.

*Locke* (*Second Treatise*, 1689): the state of nature is bad but not as bad as Hobbes thought — natural law applies, but enforcement is inconvenient. Agents form government with limited and conditional authority, retaining natural rights to life, liberty, and property. If government violates the conditions, the people retain the right to dissolve it. This justifies limited constitutional government and (eventually) revolution.

*Rousseau* (*Social Contract*, 1762): the contract creates not a sovereign over the people but a sovereign people. Legitimate government is the expression of the general will of citizens taken collectively. This is direct democracy of a demanding kind, and the conditions for it are stringent.

*Rawls* (*A Theory of Justice*, 1971): the contract is reformulated as a hypothetical choice from behind the veil of ignorance. What principles would rational agents choose to govern their society if they didn't know their position in it? This produces Rawls' two principles of justice.

The shared structure — legitimacy from consent — has been criticized by anarchists (no actual consent was given), by communitarians (the abstraction from concrete community is suspect), and by feminists (the original contracts were among men, leaving women in a parallel "sexual contract" — Carole Pateman). The structure has nonetheless been one of the most productive frameworks in modern political philosophy.`,
    sources: [
      { title: "Contractarianism (SEP)", cite: "Cudd, A. & Eftekhari, S. SEP entry 'Contractarianism'", url: "https://plato.stanford.edu/entries/contractarianism/" },
    ],
  },
  {
    id: "two-truths",
    slug: "two-truths",
    name: "Two truths",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["nagarjuna"],
    shortSummary:
      "The Buddhist (especially Madhyamaka) doctrine that there is a difference between conventional truth — what works for everyday purposes — and ultimate truth — what survives rigorous analysis. The doctrine is required to make emptiness coherent.",
    fullBody: `The two truths doctrine is central to Madhyamaka Buddhism and articulated most precisely by Nāgārjuna at *MMK* 24.8–10. There are two levels of truth: *saṃvṛti-satya* (conventional or "covering" truth) and *paramārtha-satya* (ultimate truth).

Conventional truth is the truth of everyday assertions: this is a chair, you can sit on it, water boils at 100°C. These are not false; they are how things are at the level at which we ordinarily interact with the world. Ultimate truth is what remains when conventional designations are subjected to rigorous analysis: nothing has *svabhāva* (own-being); everything is empty of intrinsic essence.

The two truths do not contradict each other. They answer different questions. The question "is there a chair?" gets a yes at the conventional level and a more careful answer at the ultimate level: there is something we conventionally call a chair, but no inherent chairness underlies the designation.

Nāgārjuna insists that without understanding the two truths, the Buddha's teaching cannot be understood. Take ultimate truth without conventional truth, and you end up in nihilism (nothing exists, ethics is meaningless). Take conventional truth as ultimate, and you end up in essentialism (things exist with fixed essences, and the suffering produced by clinging to them is unavoidable). The middle way runs between.

The doctrine has parallels in other traditions — Plato's distinction between appearance and reality, Kant's phenomena and noumena, contemporary discussions of "manifest" and "scientific" images of the world — but is more precisely worked out in the Buddhist case than in most.`,
    sources: [
      { title: "The Fundamental Wisdom of the Middle Way", cite: "Garfield commentary on MMK 24" },
    ],
  },
  {
    id: "intentionality",
    slug: "intentionality",
    name: "Intentionality",
    difficulty: "advanced",
    theme: "mind",
    philosopherIds: ["husserl", "searle"],
    shortSummary:
      "The 'aboutness' of mental states — that consciousness is always consciousness *of* something. Brentano introduced the term; Husserl made it the center of phenomenology; analytic philosophers have spent a century trying to naturalize it.",
    fullBody: `Franz Brentano introduced the modern philosophical use of *intentionality* in *Psychology from an Empirical Standpoint* (1874). The thesis: mental states are essentially *directed at* something. A belief is about something; a desire is for something; a perception is of something. This *aboutness* is what distinguishes the mental from the merely physical.

Husserl took intentionality as the central structure of consciousness in his phenomenology. Every act of consciousness has a *noetic* side (the act of consciousness itself) and a *noematic* side (the object as it is presented in the act). The noema is not a separate mental entity; it is the object intended, considered in its mode of givenness.

The challenge for naturalist philosophers of mind has been to explain how a physical system (the brain) can be about anything. Several major proposals have been developed.

*Causal/historical theories* (Dretske, Fodor): mental representations get their content from the causal relations they bear to the things they represent.

*Teleosemantic theories* (Millikan): content is explained in terms of the biological functions of representational mechanisms.

*Conceptual role theories* (Brandom, Block): content is explained by the inferential role a representation plays in a system's cognitive economy.

*Phenomenal intentionality theories* (Loar, Horgan, Strawson): intentionality is grounded in or constituted by consciousness rather than the other way around.

Whether any of these adequately captures what Brentano and Husserl meant is an open question. Whether there is a fundamental obstacle to naturalizing intentionality at all (the way some think there is for consciousness) is a separate question, also open.`,
    sources: [
      { title: "Intentionality (SEP)", cite: "Jacob, P. SEP entry 'Intentionality'", url: "https://plato.stanford.edu/entries/intentionality/" },
    ],
  },
  {
    id: "verification",
    slug: "verification-principle",
    name: "Verification principle",
    difficulty: "intermediate",
    theme: "epistemology",
    philosopherIds: ["carnap"],
    shortSummary:
      "The Vienna Circle's tool for clearing out traditional metaphysics: a sentence is cognitively meaningful only if it can, in principle, be empirically verified. The principle famously cannot verify itself, which is part of why logical positivism eventually unwound.",
    fullBody: `The verification principle, in its sharpest form: a sentence is cognitively meaningful if and only if it is either *analytically true* (true by virtue of meaning, like "all bachelors are unmarried") or *empirically verifiable* (capable of being confirmed or disconfirmed by sensory experience). Sentences that meet neither criterion are not false; they are *cognitively empty* — not really sentences at all, in any philosophically interesting sense.

A.J. Ayer's *Language, Truth and Logic* (1936) gives the most polemical English-language presentation. On the principle's strict application, traditional metaphysical claims ("The Absolute is changeless," "God is love"), ethical claims ("murder is wrong" — Ayer treats these as expressions of emotion, not statements), aesthetic claims, and most theological claims all fail the test.

The famous self-undermining problem: the verification principle is itself neither analytically true nor empirically verifiable. So by its own standard, it is meaningless. Various reformulations were attempted; none fully escaped the difficulty.

Quine's "Two Dogmas of Empiricism" (1951) attacked the analytic/synthetic distinction the principle relied on. Once the analytic/synthetic line blurs, the whole edifice — analytic truths on one side, empirical verification on the other, with no third category — becomes hard to maintain.

The principle is largely abandoned in its strict form, but its working spirit — that philosophy should make contact with empirical inquiry, that claims with no possible empirical bearing should not be treated as substantive scientific or philosophical claims — survives across analytic philosophy of science and philosophy of mind.`,
    sources: [
      { title: "Logical Positivism (SEP)", cite: "Creath, R. SEP entry 'Logical Empiricism'", url: "https://plato.stanford.edu/entries/logical-empiricism/" },
    ],
  },
  {
    id: "paradigm-shift",
    slug: "paradigm-shift",
    name: "Paradigm shift",
    difficulty: "intermediate",
    theme: "epistemology",
    philosopherIds: ["kuhn"],
    shortSummary:
      "Kuhn's term for the structural reorganization that occurs when a scientific field transitions from one framework of accepted methods, exemplars, and assumptions to another. The popular use of the term has loosened it; the careful version remains philosophically serious.",
    fullBody: `Thomas Kuhn introduced *paradigm shift* in *The Structure of Scientific Revolutions* (1962). A *paradigm* is a constellation of methods, exemplary problem-solutions, theoretical assumptions, and tacit standards shared by the practitioners of a mature scientific field. *Normal science* is the puzzle-solving activity that goes on within a paradigm. *Revolutionary science* is what happens when the paradigm breaks down and a new one takes its place.

The trigger for revolution is the accumulation of *anomalies* — observations or problems the paradigm cannot accommodate. For long stretches, anomalies are explained away or set aside. But under pressure, the field enters *crisis*, alternative paradigms emerge, and eventually one takes over.

The controversial part is Kuhn's claim that paradigms are *incommensurable*. Practitioners working in different paradigms may use the same words to mean different things, attend to different problems, even pre-organize their perception in different ways. There is no theory-neutral standpoint from which to compare paradigms and judge which is closer to the truth — though Kuhn was careful not to deny progress, only to deny the specific kind of cumulative progress the classical view assumed.

The book transformed philosophy of science and made the word *paradigm* into a buzzword that now means almost anything. In business school usage, "paradigm shift" usually just means "a notable change." Kuhn's actual position is more demanding: paradigm shifts are rare, structural, and incommensurable in a precise sense. Most cases that get the label do not deserve it.`,
    sources: [
      { title: "Thomas Kuhn (SEP)", cite: "Bird, A. SEP entry 'Thomas Kuhn'", url: "https://plato.stanford.edu/entries/thomas-kuhn/" },
    ],
  },

  // ---- Perennialist / Traditionalist concepts ----
  {
    id: "perennial-philosophy",
    slug: "perennial-philosophy",
    name: "Philosophia Perennis",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["guenon", "schuon", "lings", "nasr", "coomaraswamy"],
    shortSummary:
      "The Perennialist thesis that every authentic spiritual tradition has transmitted a single underlying metaphysical doctrine under different forms. Not the flat 'all religions teach love' — the doctrine is precise, technical, and (on the Perennialist account) accessible only through legitimate initiatory transmission.",
    fullBody: `The phrase *philosophia perennis* — perennial philosophy — was used by Agostino Steuco in the sixteenth century and revived in the twentieth by Aldous Huxley (*The Perennial Philosophy*, 1945) and then, more rigorously, by the Traditionalist School around Guénon and Schuon.

The Perennialist version of the doctrine has several distinct features that the popular use of the phrase has tended to elide. First: the perennial doctrine is *metaphysical*, not ethical. The claim is not that all religions teach the same moral lessons (they don't, even on the Perennialists' own account); the claim is that all authentic religions are paths to the same ultimate reality, accessed under different formal vocabularies. Second: access to this reality requires submission to *one* tradition's form, followed in earnest, not a cobbling-together of elements from many. The Perennialist is more committed to particular religious practice than the eclectic spiritual shopper, not less. Third: the doctrine is held to be inaccessible to merely discursive reason — it requires *initiatory transmission* through a living lineage.

The Perennialist case has been extensively criticized. Critics argue that what the Perennialists identify as the underlying common doctrine is itself a specific synthesis (heavily indebted to Advaita Vedānta and Sufism) projected onto traditions it doesn't quite fit; that the criterion of "authentic transmission" is unfalsifiable; that the school's hostility to modernity makes it politically suspect. Defenders argue that the Perennialists are doing serious comparative metaphysics in a register the secular academy has refused to engage on its own terms.

Whatever one's verdict, the Perennialist diagnosis of modernity — the loss of the sacred, the substitution of quantity for quality, the desacralization of knowledge — has been a persistent intellectual presence even outside the school proper, audible in figures from Charles Taylor to certain currents in ecological thought.`,
    sources: [
      { title: "René Guénon, The Crisis of the Modern World", cite: "Sophia Perennis 2004 (orig. 1927)" },
      { title: "Frithjof Schuon, The Transcendent Unity of Religions", cite: "Quest Books 1984 (orig. 1948)" },
      { title: "Seyyed Hossein Nasr, Knowledge and the Sacred", cite: "SUNY Press 1989" },
    ],
  },
  {
    id: "transcendent-unity",
    slug: "transcendent-unity-of-religions",
    name: "Transcendent Unity of Religions",
    difficulty: "advanced",
    theme: "religion",
    philosopherIds: ["schuon"],
    shortSummary:
      "Schuon's central thesis: religions are unified at the metaphysical level while remaining irreducibly different at the level of form, doctrine, and ritual. The position rejects both exclusivism and flat ecumenism — and threads a needle most contemporary religious studies has refused to try threading.",
    fullBody: `Frithjof Schuon's *The Transcendent Unity of Religions* (1948) gave the Perennialist position its sharpest twentieth-century formulation. The argument turns on a distinction between the *exoteric* and *esoteric* dimensions of any authentic tradition.

The *exoteric* is the outward form: doctrine, ritual, scripture as read at face value, the moral and social practices that define the community. At this level, religions differ — really differ, in ways that cannot be argued away. The doctrine of the Trinity is not the doctrine of *tawḥīd*; the Eucharistic mystery is not Vedic sacrifice; the rules for prayer in Islam are not the rules for meditation in Buddhism. These differences are not surface features that careful ecumenism can dissolve.

The *esoteric* is the inner metaphysical content to which the exoteric form refers and through which it is approached. At this level, on Schuon's account, the world's authentic traditions are unified — they are different formal vocabularies for the same metaphysical reality. The unity is real but does not abolish the formal differences; the formal differences are real but do not contradict the underlying unity.

The position has practical consequences. Schuon held — and the Perennialist tradition has generally followed him — that the path to the esoteric runs *through* a specific exoteric form, not above or between them. You become a serious Sufi, a serious Catholic, a serious Vedāntin; you do not become a "spiritual person" without form. The exoteric form is the channel through which the formless makes itself accessible.`,
    sources: [
      { title: "Schuon, The Transcendent Unity of Religions", cite: "Quest Books 1984 (orig. 1948)" },
    ],
  },
  // ---- Accelerationism / CCRU concepts ----
  {
    id: "hyperstition",
    slug: "hyperstition",
    name: "Hyperstition",
    difficulty: "advanced",
    theme: "politics",
    philosopherIds: ["land", "negarestani"],
    shortSummary:
      "A fiction that propagates itself into reality. Coined by the CCRU in the 1990s, hyperstition names the mechanism by which a sufficiently widespread anticipation of a future state contributes to producing that state — capital and AI being the contemporary paradigm cases.",
    fullBody: `Hyperstition is a CCRU coinage from the 1990s. The concept names a specific mechanism: a fiction whose currency in the social imagination produces the conditions of its own realization. The classical example used in CCRU texts is the dollar — a "fiction" in the sense that its value depends on widespread belief in that value, and that belief is in turn supported and propagated by the institutional infrastructure that the fiction itself organizes. The dollar is real *because* the hyperstition has succeeded.

The concept's reach is broader than economics. Capital itself, in Land's reading, is a hyperstition that has by now mostly written itself into reality. AI as a technology is partly real and partly a hyperstition operating on present capital allocations. Conspiracy theories operate hyperstitionally when they produce the political conditions they claim to merely describe. Branding, religious revival, technological hype cycles, prophetic political programs — all admit of hyperstitional analysis.

The concept is more careful than it looks. Hyperstitions are not merely beliefs that become true; they are fictions whose mode of operation produces real institutional, technical, and political consequences. The line between description and intervention, between forecasting and engineering, runs through hyperstitional analysis as its core question.

Reza Negarestani's *Cyclonopedia* (2008) is the most extended philosophical treatment of hyperstition as method. The concept has since moved well beyond its CCRU origins and is now part of the contemporary vocabulary across philosophy of technology, science and technology studies, and contemporary political theory.`,
    sources: [
      { title: "Nick Land, Fanged Noumena", cite: "Urbanomic 2011, esp. essays from 1994–1998" },
      { title: "Reza Negarestani, Cyclonopedia", cite: "re.press 2008" },
    ],
  },
  {
    id: "accelerationism-concept",
    slug: "accelerationism",
    name: "Accelerationism",
    difficulty: "advanced",
    theme: "politics",
    philosopherIds: ["land", "fisher"],
    shortSummary:
      "The position — or family of incompatible positions — that takes capitalism's tendency to deterritorialize all stable social forms not as a problem to be solved but as a process that should be analyzed on its own terms. What follows depends on whether you are a right, left, or unconditional accelerationist.",
    fullBody: `Accelerationism is the most contested term in contemporary continental philosophy because it names at least three positions that mostly cannot share a room.

*Right accelerationism* (Land, 2010s onward): capital is a cybernetic process that has already escaped human control; emancipatory politics is a category mistake; what remains is to accelerate the process and see what it produces. Land's later political positions (the "Dark Enlightenment," neoreaction) follow from this analysis though most of his interlocutors reject them.

*Left accelerationism* (Williams, Srnicek, Negri-influenced strands): the Landian diagnosis is roughly correct, but the political conclusion is wrong. The technological and organizational capacities capitalism has built can be redirected toward post-capitalist ends — automated luxury communism, universal basic income, the abolition of work. Williams and Srnicek's *Accelerationist Manifesto* (2013) and *Inventing the Future* (2015) are the major statements.

*Unconditional accelerationism* (U/ACC): both political accelerationisms are too tied to specific human projects to think the process they describe. The position is closer to a contemplative posture than to a political program.

What unites the three is the diagnosis: contemporary capitalism is not a contingent economic system in the standard sense, but a self-augmenting process with its own trajectory that the political tradition has not yet learned to think. What divides them is what to do about it.`,
    sources: [
      { title: "Robin Mackay & Armen Avanessian (eds.), #Accelerate: The Accelerationist Reader", cite: "Urbanomic/MIT 2014" },
      { title: "Nick Srnicek & Alex Williams, Inventing the Future", cite: "Verso 2015" },
    ],
  },
  {
    id: "capitalist-realism",
    slug: "capitalist-realism",
    name: "Capitalist Realism",
    difficulty: "intermediate",
    theme: "politics",
    philosopherIds: ["fisher"],
    shortSummary:
      "Fisher's name for the cultural condition in which it has become easier to imagine the end of the world than the end of capitalism. Not a doctrine consciously held but a structure of feeling that organizes contemporary cultural production, mental health, and political imagination.",
    fullBody: `Mark Fisher's *Capitalist Realism: Is There No Alternative?* (2009) names a condition the left had been describing without quite saying for a decade. Adapting a line attributed variously to Jameson and Žižek — "it is easier to imagine the end of the world than the end of capitalism" — Fisher gives the condition a precise diagnostic vocabulary.

Capitalist realism is not a doctrine that anyone consciously holds. It is the *structure of feeling* in which capitalism appears not as a contingent historical formation that could in principle be otherwise but as the natural and inevitable background against which everything else takes place. Even cultural production that explicitly criticizes capitalism — climate fiction, anti-corporate satire, contrarian art — tends to operate within capitalist realism rather than puncture it; the criticism is itself absorbed into the cultural circuits it claims to oppose.

Fisher traces the consequences in three domains. *Mental health*: the rising rates of anxiety and depression are not merely individual neurochemical events but the privatization of stress that the dismantling of social protections has produced. *Education*: the corporatization of universities (where Fisher taught) substitutes audit culture for the goods it claims to measure. *Cultural production*: the slow cancellation of the future — the inability of contemporary culture to produce the genuinely new — is itself an effect of the political horizon's narrowing.

The book has been hugely influential on a generation of writers, organizers, and cultural producers. Its diagnostic vocabulary has become standard well outside its original Marxist-Lacanian register. Fisher's late work — collected in the posthumous *k-punk* — was an attempt to find what real emancipatory politics could look like after capitalist realism had been named.`,
    sources: [
      { title: "Mark Fisher, Capitalist Realism: Is There No Alternative?", cite: "Zero Books 2009" },
    ],
  },
  {
    id: "correlationism",
    slug: "correlationism",
    name: "Correlationism",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["meillassoux"],
    shortSummary:
      "Meillassoux's term for the move that has dominated post-Kantian philosophy: the assumption that we can only think the relation between thought and being, never being independent of thought. Speculative realism is the attempt to philosophize otherwise.",
    fullBody: `Quentin Meillassoux introduced *correlationism* in *After Finitude* (2006) as the structural target of the speculative realist project. The term names what Meillassoux takes to be the dominant assumption of post-Kantian philosophy: that we can only think the *correlation* between thought and being, never being independent of thought.

Kant's distinction between phenomena (what appears to us) and noumena (the thing-in-itself, unknowable as such), Husserl's intentional correlation between consciousness and its object, Heidegger's being-in-the-world, Derrida's différance — all are versions, on Meillassoux's reading, of the same basic move. Each insists that the question "what is being, apart from how we encounter it?" is somehow malformed.

Meillassoux's argument that correlationism is incoherent turns on the *arche-fossil* — empirical evidence (radioactive decay rates, the fossil record) of a world that demonstrably preceded any conscious being capable of being correlated with it. The correlationist cannot affirm such evidence as evidence about a real prior world; she can only affirm it as a feature of the current correlation. Meillassoux takes this to be a reductio.

The positive proposal — that what we can know speculatively is the absolute contingency of all things — is Meillassoux's *principle of factiality*. Whether the proposal escapes the post-Kantian critique it claims to escape, or merely reformulates pre-critical metaphysics in a slightly more sophisticated register, is the question subsequent speculative realism has been working through.`,
    sources: [
      { title: "Quentin Meillassoux, After Finitude", cite: "trans. Ray Brassier, Continuum 2008" },
    ],
  },
  {
    id: "necropolitics",
    slug: "necropolitics",
    name: "Necropolitics",
    difficulty: "advanced",
    theme: "politics",
    philosopherIds: ["mbembe"],
    shortSummary:
      "Mbembe's extension of Foucault's biopolitics. Where biopolitics governs life — making populations live — necropolitics governs death: who is permitted to live and who is sentenced, slowly or quickly, to die. Slavery, colonial occupation, contemporary border regimes are the institutional forms.",
    fullBody: `Achille Mbembe introduced *necropolitics* in a 2003 essay in *Public Culture* and expanded the argument in *Necropolitique* (2016). The concept builds on and extends Foucault's analysis of biopolitics.

Foucault had argued that modern power, from roughly the eighteenth century, increasingly took as its object the *life* of populations — birth rates, mortality, public health, sexuality — rather than the spectacle of sovereign punishment of individual bodies. The state asserts the right to *make* live and let die, rather than the older right to take life or let live.

Mbembe argues that what colonial and postcolonial modernity have actually produced, alongside biopolitics, is a parallel *necropolitical* regime — the politics of who is permitted to live and who is sentenced to a slow or fast death, who counts as a grievable life and whose death barely registers. Slavery, the plantation, colonial occupation, the camp, contemporary border regimes, the militarized policing of racialized populations: these are the institutional forms of necropolitics. They are not exceptional cases that the standard biopolitical analysis can accommodate as deviations; they are constitutive structures that the standard analysis has not adequately theorized because European political theory has tended to take the European case as the universal one.

The argument has had substantial influence well beyond African and postcolonial studies — in contemporary work on race, migration, prison abolition, and the politics of the Anthropocene. Mbembe's *Necropolitics* (English 2019) is the major book-length development.`,
    sources: [
      { title: "Achille Mbembe, Necropolitics", cite: "Duke UP 2019 (orig. 2016)" },
    ],
  },
  {
    id: "plasticity",
    slug: "plasticity",
    name: "Plasticity",
    difficulty: "advanced",
    theme: "mind",
    philosopherIds: ["malabou"],
    shortSummary:
      "Malabou's term, taken from Hegel and extended through neuroscience. Plasticity is the simultaneous capacity to give form and to receive form — a structure she finds in the dialectic, in the brain, and in the human person.",
    fullBody: `Catherine Malabou developed *plasticity* as a philosophical concept across two stages. The first, in *The Future of Hegel: Plasticity, Temporality, and Dialectic* (1996), traced the term through Hegel — for whom *Plastizität* names a specific mode of self-formation: the dialectical subject is plastic insofar as it can give form to itself while being formed by what it encounters.

The second stage extends the concept into contemporary neuroscience. *What Should We Do with Our Brain?* (2004) argues that neuroscience's central discovery — that the brain remains plastic throughout life, capable of being reshaped by experience — is also a philosophical discovery. The plastic brain is *neither* the rigid neural substrate of older neuroscience *nor* the indefinitely flexible self of contemporary capitalism's gig-economy ideology. It is a form that gives shape while being shaped, that creates while being created.

The political payoff: contemporary capitalism prizes a particular conception of flexibility — the worker who can endlessly reskill, the consumer who can be infinitely segmented and addressed. Malabou's plasticity is structurally different. It is *form-giving*, not form-dissolving; it produces shape, even as it accepts the shape of what it encounters. Emancipatory politics, on her account, requires recovering the distinction.

*The New Wounded* (2007) extends plasticity into the analysis of trauma — particularly the "destructive plasticity" of severe brain injury, in which the subject becomes, in some sense, a different person with no path back. Contemporary philosophy of mind has not yet, Malabou argues, found adequate concepts for this kind of transformation.`,
    sources: [
      { title: "Catherine Malabou, What Should We Do with Our Brain?", cite: "Fordham UP 2008 (orig. 2004)" },
      { title: "Malabou, The Future of Hegel", cite: "Routledge 2005 (orig. 1996)" },
    ],
  },
  {
    id: "the-event",
    slug: "the-event",
    name: "The Event (Badiou)",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["badiou"],
    shortSummary:
      "In Badiou's metaphysics, events are ruptures in the existing situation — moments that cannot be accounted for in the terms of the situation they interrupt. Truths are produced by patient fidelity to such events. The French Revolution, the discovery of the irrationals, falling in love.",
    fullBody: `Alain Badiou's *Being and Event* (1988) makes events the central category of his metaphysics. The set-theoretic ontology gives us the structure of situations; events are what the structure cannot describe in its own terms — what happens when something occurs that the situation has no resources to account for.

Examples Badiou returns to: the French Revolution (which the *ancien régime* had no terms for), the Greek discovery of the irrationals (which Pythagorean number theory could not accommodate), the resurrection of Christ as event for Pauline subjectivity (Badiou is an atheist; he reads the event as a paradigm of *fidelity* rather than as a historical claim), genuinely new love (which the lover's prior life could not have anticipated).

What follows from an event is not its immediate consequence but the long work of *fidelity* — the patient construction, over years or centuries, of what the event has made newly thinkable. Truth, on Badiou's account, is what fidelity produces. The French Revolution's truth is the still-unfinished project of organizing political life around the equality of speakers; modern mathematics' truth is the still-unfinished project of working through what set theory permits us to think; love's truth is the construction of a life with someone the lover did not, before, have the resources to recognize as the person she would love.

Badiou distinguishes four "truth procedures": politics, science, art, and love. Events occur in each. Subjects are constituted by their fidelity to such events. Philosophy's role is not to produce truths itself — that is the work of the four procedures — but to think the conditions under which truths can be recognized as such.`,
    sources: [
      { title: "Alain Badiou, Being and Event", cite: "trans. Oliver Feltham, Continuum 2005 (orig. 1988)" },
    ],
  },

  // ---- Core categories added in current expansion ----
  {
    id: "ontology",
    slug: "ontology",
    name: "Ontology",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["aristotle", "heidegger", "quine"],
    shortSummary:
      "The branch of metaphysics that asks what exists, in the most general possible sense. The question 'what is there?' — Quine's one-word answer was 'Everything' — turns out to be much harder than it sounds.",
    fullBody: `Ontology is the philosophical study of being qua being — what kinds of things exist, what it is for them to exist, what their general categories are.

The ancient version is Aristotle's *Metaphysics*, particularly Book IV: "There is a science that studies being qua being, and the attributes that belong to it of itself." Aristotle's substance/accident distinction, his theory of categories (substance, quality, quantity, relation, place, time, position, state, action, passion), and his account of the four causes all belong to ontology in its founding form.

The modern revival of ontology in twentieth-century analytic philosophy is partly Quine's. His "On What There Is" (1948) made the field rigorous by tying ontological commitments to the existential quantifiers of first-order logic. To exist is to be the value of a bound variable; debates about whether numbers, properties, fictional characters, or possible worlds exist become debates about whether our best theories must quantify over them.

The continental version, particularly Heidegger's, is broader. Heidegger asks not just what exists but what *being* means — what it is for anything to be at all. *Being and Time* is the major attempt to recover this question after centuries of philosophy's drifting toward beings (things, properties, events) and away from being itself.

Contemporary ontology spans both traditions and includes mereology, formal ontology in information science, ontology of art, social ontology (institutional facts), and the metametaphysics that asks whether ontological disputes are substantive or merely verbal.`,
    sources: [
      { title: "Aristotle, Metaphysics", cite: "Book IV" },
      { title: "Quine, On What There Is (1948)", cite: "in From a Logical Point of View" },
    ],
  },
  {
    id: "nihilism",
    slug: "nihilism",
    name: "Nihilism",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["nietzsche", "brassier"],
    shortSummary:
      "The view that there is no inherent meaning, value, or purpose in existence. Often misunderstood. Nietzsche treated nihilism as the major intellectual problem of the modern world — not a position to adopt but a danger to be worked through.",
    fullBody: `Nihilism — from the Latin *nihil*, nothing — names the position that there are no inherent values, no inherent meanings, no inherent purposes in reality. The concept has several distinct registers worth keeping separate.

*Moral nihilism* is the view that there are no objective moral facts. Nothing is really good or evil; the moral vocabulary describes nothing in the world.

*Existential nihilism* is the view that human existence has no inherent meaning or purpose. Some people draw consoling conclusions ("we are therefore free to invent meaning"); others find it crushing. Camus' question — given existential nihilism, why not suicide? — is the start of his *Myth of Sisyphus*.

*Metaphysical or ontological nihilism* is the more extreme view that nothing exists at all — or that the categories by which we ordinarily divide reality have no purchase. Nāgārjuna is *not* a nihilist in this sense, despite occasional misreadings; he is at pains to distinguish *śūnyatā* from this view.

Nietzsche is the philosopher most associated with nihilism, but he treated it as the problem rather than the position. The death of God produces what Nietzsche called the *advent of nihilism* — a cultural condition in which the values that organized European life have lost their grounding, and what will replace them is genuinely uncertain. His work is the attempt to think through what comes after, not to recommend nihilism.

Contemporary nihilism has a renewed academic register through Ray Brassier's *Nihil Unbound* (2007), which argues for a "transcendental nihilism" that takes seriously the eventual extinction of consciousness — local and cosmic — as a *speculative* fact philosophy must think rather than evade.`,
    sources: [
      { title: "Nietzsche, The Will to Power", cite: "§§1–28 on nihilism as the central modern problem" },
      { title: "Ray Brassier, Nihil Unbound", cite: "Palgrave Macmillan 2007" },
    ],
  },
  {
    id: "hermeneutics",
    slug: "hermeneutics",
    name: "Hermeneutics",
    difficulty: "advanced",
    theme: "language",
    philosopherIds: ["heidegger", "taylor"],
    shortSummary:
      "The philosophical study of interpretation. Originally about how to read scripture; now a general theory of how understanding any text, situation, or tradition is possible — and why it is always partial.",
    fullBody: `Hermeneutics began as a discipline of biblical interpretation in early modern Europe and was generalized by Schleiermacher in the early nineteenth century into a theory of textual interpretation as such. Wilhelm Dilthey extended it further: hermeneutics is what distinguishes the *Geisteswissenschaften* (human sciences) from the natural sciences. We *understand* texts, persons, and historical periods through interpretation; we *explain* natural phenomena through causal laws.

The major twentieth-century turn was Heidegger's. In *Being and Time*, hermeneutics is not a method but a fundamental feature of being human. We are always already interpreting our situation, projecting meaning onto what we encounter, embedded in a pre-reflective understanding (the *hermeneutic circle*: we can only understand the parts in terms of the whole and the whole in terms of the parts).

Hans-Georg Gadamer's *Truth and Method* (1960) is the major systematic development. The encounter with any text, on Gadamer's account, is a *fusion of horizons* — the interpreter's horizon (assumptions, prejudices, historical position) meets the horizon of the text. Understanding is not the elimination of one's prejudices but their productive engagement with the text's. Interpretation has no view from nowhere.

Paul Ricoeur extended hermeneutics into philosophy of action, narrative, and the self. Charles Taylor's work on modern identity is recognizably hermeneutic. The contemporary humanities operate, mostly without naming it, in the hermeneutic mode.`,
    sources: [
      { title: "Gadamer, Truth and Method", cite: "trans. Weinsheimer & Marshall, Bloomsbury 2013 (orig. 1960)" },
      { title: "Ricoeur, From Text to Action", cite: "Northwestern UP 1991" },
    ],
  },
  {
    id: "idealism",
    slug: "idealism",
    name: "Idealism",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["berkeley", "kant", "hegel"],
    shortSummary:
      "The family of metaphysical positions holding that reality is, in some fundamental sense, mental or mind-dependent. The varieties differ sharply, but each is doing work materialism cannot quite do.",
    fullBody: `Idealism is the broad metaphysical position that mind, ideas, or consciousness is in some way ontologically fundamental — that reality is structured by, dependent on, or reducible to mental things rather than material ones.

The varieties differ substantially. *Subjective idealism* (Berkeley) holds that what exists are minds and the ideas in them; physical objects are bundles of perceptions, sustained by God. *Transcendental idealism* (Kant) makes a more careful claim: the world of experience is structured by the forms of intuition (space, time) and the categories of the understanding that the mind contributes, while the thing-in-itself remains unknowable. *Absolute idealism* (Hegel, Schelling, Fichte) is the most ambitious — reality is the self-realization of a single rational spirit (*Geist*) through history.

Twentieth-century analytic philosophy was, by and large, hostile to idealism, partly because of Moore's 1903 *Refutation of Idealism* and partly because the verificationist movements that followed found idealism's claims hard to formulate empirically. The continental tradition has been more sympathetic; recent revival in speculative realism circles has produced renewed interest.

The hard part: idealism is constantly accused of being defeated by simple observations ("you can't think a tree out of existence!") that, on careful reading, none of the major idealists ever denied. The position is harder to refute than dismissal suggests, and arguments for it ("how can a mind-independent reality be coherently described, given that all our descriptions are mind-shaped?") are not trivial.`,
    sources: [
      { title: "Idealism (SEP)", cite: "Guyer, P. & Horstmann, R-P. SEP entry 'Idealism'", url: "https://plato.stanford.edu/entries/idealism/" },
    ],
  },
  {
    id: "materialism",
    slug: "materialism",
    name: "Materialism",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: ["democritus", "lucretius", "marx"],
    shortSummary:
      "The view that everything that exists is physical, or supervenes on the physical. The dominant ontology of contemporary science, but the relation between mind, value, and meaning to the physical remains contested.",
    fullBody: `Materialism is the metaphysical view that everything that exists is physical, or that everything that exists supervenes on physical facts. The view has ancient roots (Democritus and the atomists, Epicurus, Lucretius) and is the dominant ontology of contemporary science.

The contemporary scene is more careful than "everything is material." *Physicalism* — usually the preferred contemporary term — holds that everything supervenes on the physical, leaving room for emergent properties, multiple realization, and other complications the eliminative materialists of an earlier generation rejected.

Several hard problems persist within the broadly materialist tradition. *Consciousness* — the explanatory gap between physical descriptions of brain states and the subjective character of experience — is the most contested. *Mathematical and logical truths* — what makes 7 + 5 = 12 true in a way that requires nothing material? *Moral truths* — if any exist, can they be reduced to the natural? *Meaning* — Quine and Davidson worried about what physical facts could fix the meaning of a sentence.

Marxist materialism is a separate development: historical materialism is the thesis that the material conditions of production shape social, political, and intellectual life (the *base* / *superstructure* distinction). The thesis is sometimes confused with the metaphysical version, though they are logically independent.`,
    sources: [
      { title: "Lucretius, De Rerum Natura", cite: "Books I–III on atoms and the soul" },
      { title: "Physicalism (SEP)", cite: "Stoljar, D. SEP entry 'Physicalism'", url: "https://plato.stanford.edu/entries/physicalism/" },
    ],
  },
  {
    id: "dualism",
    slug: "dualism",
    name: "Dualism",
    difficulty: "intermediate",
    theme: "mind",
    philosopherIds: ["descartes"],
    shortSummary:
      "The view that mind and body are distinct kinds of thing. Descartes is the classical exponent, and his position has been argued against constantly for four centuries — but its hard problems (consciousness, intentionality) keep not going away.",
    fullBody: `Mind-body dualism is the view that minds and bodies are distinct ontological kinds — that the mental is not reducible to the physical or identical with anything physical.

Descartes' *substance dualism* in the *Meditations* (1641) is the historical reference point. Minds are essentially thinking, unextended; bodies are essentially extended, non-thinking. The view immediately raised the interaction problem: how does an unextended mind cause changes in an extended body, or receive changes from it? Descartes' proposed answer — that the interaction happens at the pineal gland — is the famous failure of the position.

Subsequent dualism is more careful. *Property dualism* holds that mental properties are not reducible to physical properties, even if the only substance is physical. Some versions of *non-reductive physicalism* are close to property dualism in practice. *Emergent dualism* (a position with current defenders like William Hasker) holds that mental properties genuinely emerge from but are not reducible to neural ones.

Contemporary philosophy of mind is dominated by various forms of monism (most commonly physicalism), but dualism has had a low-key revival through David Chalmers' *naturalistic dualism* (1996) and the broader hard-problem literature. The intuition that subjective experience is not the same kind of thing as neural firing has proven harder to refute than mid-twentieth-century materialists assumed.`,
    sources: [
      { title: "Descartes, Meditations", cite: "II and VI on the real distinction between mind and body" },
      { title: "Dualism (SEP)", cite: "Robinson, H. SEP entry 'Dualism'", url: "https://plato.stanford.edu/entries/dualism/" },
    ],
  },
  {
    id: "determinism",
    slug: "determinism",
    name: "Determinism",
    difficulty: "intermediate",
    theme: "metaphysics",
    philosopherIds: [],
    shortSummary:
      "The view that every event, including every human choice, is fixed by prior causes and the laws of nature. If true, what we ordinarily call free will is at best a kind of useful illusion. Compatibilists argue the dichotomy is the wrong way to frame the question.",
    fullBody: `Determinism is the metaphysical view that everything that happens is the unique outcome of prior conditions and the laws of nature. The position is sometimes mistakenly equated with fatalism (which adds the claim that human effort makes no difference); they are logically distinct.

The major contemporary version is *causal determinism*: at any given time, the laws of nature plus the complete state of the universe uniquely determine the next state. Classical mechanics was thought to be deterministic in this sense; quantum mechanics complicates the picture, though whether quantum indeterminacy is real (and at what scale) remains contested.

The contrast position is *indeterminism*: at least some events are not uniquely determined by their causes. Within indeterminism, *libertarianism* about free will adds the claim that human choices fall in the indetermined gap, and that our agency requires this.

*Compatibilism* — the view of Hume, Hobbes, Frankfurt, Dennett, and probably most contemporary analytic philosophers — argues that the dichotomy is the wrong frame. Free will, on compatibilist accounts, doesn't require indeterminism; it requires that one's choices flow from one's own desires and reasons without external coercion, even if those desires and reasons are themselves causally embedded. The intuition that "real" free will requires a break in the causal chain depends, the compatibilist argues, on a confused picture of what we wanted from agency in the first place.`,
    sources: [
      { title: "Causal Determinism (SEP)", cite: "Hoefer, C. SEP entry 'Causal Determinism'", url: "https://plato.stanford.edu/entries/determinism-causal/" },
    ],
  },
  {
    id: "absurdism",
    slug: "absurdism",
    name: "The Absurd",
    difficulty: "beginner",
    theme: "ethics",
    philosopherIds: ["camus", "kierkegaard"],
    shortSummary:
      "The condition produced by the collision between humanity's demand for meaning and a universe that supplies none. Camus thought the proper response was neither suicide nor a leap of faith but lucid revolt — Sisyphus, happy.",
    fullBody: `The absurd, as Camus develops it in *The Myth of Sisyphus* (1942), names not a property of the universe but a *relation*: between humans, who demand meaning and intelligibility from existence, and a universe that supplies none. Either side could remove the absurd. A meaningful universe would; a humanity that did not demand meaning would. Neither obtains.

Camus' question — given this condition, is suicide rational? — opens the book. His answer is no, but for non-obvious reasons. *Philosophical suicide* (Kierkegaard's leap of faith, Husserl's transcendental reduction) tries to dissolve the absurd by abandoning one side of the relation. *Actual suicide* removes the absurd by removing the subject who needed meaning. Both are evasions.

The recommended response is *revolt* — sustained, lucid awareness of the absurd, refusing to dissolve it. Sisyphus, condemned to roll a boulder up a hill forever only to watch it roll back down, is the figure of the absurd hero. The boulder is futile; Sisyphus is not. He is the man who keeps his consciousness intact in the face of futility, and who finds — Camus closes the book here — that one must imagine Sisyphus happy.

The position is sometimes confused with nihilism and sometimes with existentialism. Camus refused both labels. Absurdism is closer to a stoic posture that has lost the Stoic's metaphysical confidence.`,
    sources: [
      { title: "Camus, The Myth of Sisyphus", cite: "trans. Justin O'Brien, Vintage 1955 (orig. 1942)" },
    ],
  },
  {
    id: "consciousness",
    slug: "consciousness",
    name: "Consciousness",
    difficulty: "advanced",
    theme: "mind",
    philosopherIds: ["dennett", "searle"],
    shortSummary:
      "The fact that there is something it is like to be a conscious being — and the persistent failure of every reductive theory to account for that fact. The 'hard problem' has shaped philosophy of mind for thirty years.",
    fullBody: `Consciousness, in the contemporary philosophical sense, names the subjective character of experience — that there is something it is like to be you, to see red, to feel pain, to taste coffee. Thomas Nagel's "What Is It Like to Be a Bat?" (1974) crystallized the question; David Chalmers' "Facing Up to the Problem of Consciousness" (1995) gave it the name *the hard problem*.

The hard problem is distinguished from a series of *easy problems*: how the brain processes sensory information, integrates it into a unified representation, produces reportable contents, controls attention, and so on. These are difficult empirical questions that contemporary neuroscience is making progress on. The hard problem asks why any of these information-processing facts are accompanied by subjective experience at all. A perfectly functional zombie — physically identical to me but with no inner life — seems coherently conceivable, on Chalmers' analysis, in a way that strict physicalism cannot accommodate.

The major positions: *physicalism* in various forms (reductive, non-reductive, eliminative — Dennett's *Consciousness Explained*); *property dualism* (Chalmers' own position); *panpsychism* (consciousness as a fundamental and ubiquitous feature, scaled up from very primitive bases in all physical systems — Galen Strawson, recent Chalmers); *higher-order theories* (consciousness as a higher-order representation of mental states); *integrated information theory* (Tononi's IIT, a quantitative theory popular in neuroscience).

Whether the hard problem is genuinely intractable, or merely currently intractable, or in fact a confusion, is the disagreement that organizes the field. There is no consensus and the disagreement is substantive.`,
    sources: [
      { title: "Consciousness (SEP)", cite: "Van Gulick, R. SEP entry 'Consciousness'", url: "https://plato.stanford.edu/entries/consciousness/" },
      { title: "Chalmers, The Conscious Mind", cite: "Oxford UP 1996" },
    ],
  },

  // ---- Round-2 additions ----
  {
    id: "authenticity",
    slug: "authenticity",
    name: "Authenticity",
    difficulty: "advanced",
    theme: "ethics",
    philosopherIds: ["heidegger", "sartre", "kierkegaard"],
    shortSummary:
      "Heidegger's term for the mode of Dasein's existence in which it has taken ownership of its own being. Not 'being true to yourself' in the loose contemporary sense — closer to refusing to flee one's finitude into the comfort of doing what one does.",
    fullBody: `Authenticity (*Eigentlichkeit*, from *eigen*, "one's own") is Heidegger's term in *Being and Time* (1927) for the mode of Dasein's existence in which it has *taken ownership* of its own being. The default mode is *inauthenticity* — Dasein scattered into the anonymous "they" (*das Man*), doing what one does, thinking what one thinks, fleeing the sharp particularity of its own situation into the comfort of average everydayness.

The pivot is being-toward-death. Genuine recognition of one's mortality — not as a distant abstract fact but as the specific limit that gives one's life its specific shape — individualizes Dasein from the "they" and recovers the question of how to live. Authentic Dasein, on Heidegger's account, is not a different kind of person but the same person *resolutely* taking up what their situation actually contains.

The concept survived Heidegger and has had a long and complicated reception. Sartre adapts it for existentialist ethics: authenticity is taking responsibility for the radical freedom we all in fact have, against the temptation of bad faith. Charles Taylor's *The Ethics of Authenticity* (1991) gives a more communitarian reading: authentic selfhood is the recovery of moral sources we share but have forgotten.

The contemporary use of "authentic" — as praise for being unfiltered, transparent, "your real self" — is closer to a marketing concept than to either Heidegger's or Sartre's position. Both philosophers would have found it shallow.`,
    sources: [
      { title: "Heidegger, Being and Time", cite: "trans. Macquarrie & Robinson, §§54–60" },
      { title: "Charles Taylor, The Ethics of Authenticity", cite: "Harvard UP 1991" },
    ],
  },
  {
    id: "forms-of-life",
    slug: "forms-of-life",
    name: "Forms of life",
    difficulty: "advanced",
    theme: "language",
    philosopherIds: ["wittgenstein"],
    shortSummary:
      "Wittgenstein's term for the embedded social practices in which language and meaning live. Not a doctrine but a name for what the Philosophical Investigations keeps pointing at: the irreducible fact that meaning is sustained by what we do together.",
    fullBody: `*Lebensform* — form of life — is one of the most cited and least pinned-down concepts in the *Philosophical Investigations* (1953). Wittgenstein uses it sparingly (perhaps a dozen times across the book) but it does load-bearing work.

The minimal claim: language is not understood by inspecting its internal logical structure (the picture the *Tractatus* had defended). Language is understood by attending to the *language-games* in which words are used, and these language-games are embedded in *forms of life* — the broader patterns of human activity, training, agreement, and shared response that give language its possibility.

"What has to be accepted, the given, is — so one could say — *forms of life*" (PI II.xi). The remark is meant to close, not open, a regress. Justifying linguistic practice by reference to deeper rules would only push the question further; eventually we hit bedrock, and the bedrock is the form of life we share.

The concept has been read both deflationarily (forms of life are just contingent human practices we happen to share) and substantively (forms of life are necessary conditions of mutual intelligibility that the philosophical tradition has obscured). Stanley Cavell, John McDowell, and others have built substantial positions on the latter reading.`,
    sources: [
      { title: "Wittgenstein, Philosophical Investigations", cite: "trans. Anscombe, §§19, 23, 241, II.xi" },
    ],
  },
  {
    id: "family-resemblance",
    slug: "family-resemblance",
    name: "Family resemblance",
    difficulty: "intermediate",
    theme: "language",
    philosopherIds: ["wittgenstein"],
    shortSummary:
      "Wittgenstein's term for the kind of conceptual unity that has no shared essential feature. Consider the word 'game' — there's no single property all games share; the cases overlap and crisscross like the resemblances of a family.",
    fullBody: `Wittgenstein introduces *family resemblance* (*Familienähnlichkeit*) at *Philosophical Investigations* §§65–67. The example is the word *game*. Board games, card games, ball games, the games children play in the schoolyard — what do they all have in common? Wittgenstein walks through candidate features (entertainment, competition, rules, skill, luck) and shows that each is shared by some games but not others. There is no single property that all games have.

What unifies the category, instead, is a network of overlapping and crisscrossing similarities — "a complicated network of similarities overlapping and crisscrossing, sometimes overall similarities, sometimes similarities of detail" (PI §66) — like the resemblances among members of a family.

The concept's reach is broader than the example. Wittgenstein uses it to dissolve a tradition (running from Plato through to early-twentieth-century logical analysis) that had assumed every meaningful general term must have a shared essence picked out by a precise definition. Many — most — of our concepts don't work like that. Recognizing this matters for philosophy, where confidently demanded definitions ("what is justice? what is knowledge? what is art?") often produce confused answers because the question presupposes a structure the concept doesn't have.

The concept has been important in cognitive psychology (Eleanor Rosch's prototype theory of categories), philosophy of art (Morris Weitz on the "definition of art" debate), and philosophy of mind.`,
    sources: [
      { title: "Wittgenstein, Philosophical Investigations", cite: "§§65–67" },
    ],
  },
  {
    id: "a-priori",
    slug: "a-priori",
    name: "A priori knowledge",
    difficulty: "intermediate",
    theme: "epistemology",
    philosopherIds: ["kant", "kripke", "quine"],
    shortSummary:
      "Knowledge that can be acquired and justified independently of experience. Mathematics and logic are the standard examples. Whether there is genuinely any a priori knowledge — and what its nature is — is one of the longest-running debates in epistemology.",
    fullBody: `A priori knowledge is knowledge whose justification does not depend on particular experiences. The standard examples are mathematical and logical truths: that 7 + 5 = 12, that no proposition can be both true and false in the same sense, that if A implies B and A is true then B is true.

The classical Kantian framework distinguishes two pairs. Knowledge is *a priori* or *a posteriori* (independent of vs. dependent on experience for its justification); propositions are *analytic* or *synthetic* (true by virtue of meanings of terms vs. requiring something more). Kant's famous claim is that there are *synthetic a priori* truths — substantive claims about the world that we can know independently of experience — and that mathematics, the principles of natural science, and some metaphysical claims fall into this category.

Quine's "Two Dogmas of Empiricism" (1951) attacked the analytic/synthetic distinction and, with it, the standard understanding of the a priori. If there is no sharp line between truths by meaning and truths by fact, then there is no clean class of truths immune to revision in light of experience. Quine's holism (the web of belief faces experience as a whole) made the a priori category much harder to defend in the form Kant had given it.

Kripke (in *Naming and Necessity*, 1980) complicated the picture from the other direction. He argued that *necessary a posteriori* truths exist — propositions that are necessarily true but knowable only through experience ("water is H₂O" if it's true is necessarily true, but we needed chemistry to know it). The a priori / a posteriori distinction and the necessary / contingent distinction don't track each other in the way the tradition had assumed.`,
    sources: [
      { title: "A Priori Knowledge (SEP)", cite: "Russell, B. SEP entry 'A Priori Justification and Knowledge'", url: "https://plato.stanford.edu/entries/apriori/" },
    ],
  },
  {
    id: "universals",
    slug: "universals",
    name: "Universals",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["plato", "aristotle", "ockham"],
    shortSummary:
      "The properties or kinds that multiple particular things can share — redness, humanity, triangularity. Whether universals exist as real entities (realism), only as concepts in minds (conceptualism), or only as names (nominalism) is the oldest open debate in Western metaphysics.",
    fullBody: `The problem of universals is the question of how we should account for the apparent fact that distinct particular things can share a property or kind. Two red apples are both red. Socrates and Plato are both human. What does it mean to say they share something?

Three classical positions. *Realism* — Plato's, in extreme form — holds that universals exist as real entities, distinct from the particulars that participate in them. The Form of Red is a separate, mind-independent reality; particular red things are red by participating in it. *Conceptualism* — associated with Aristotle, Abelard, and Locke — holds that universals exist only in minds; they are concepts the mind extracts from particulars by abstraction. *Nominalism* — Ockham's classical position — holds that only particulars exist; "redness" is a name, a linguistic device, with no corresponding entity in the world.

The classical debate ran from Plato to Ockham. The contemporary debate (since the early twentieth century, especially through Russell, D.M. Armstrong, David Lewis, Trope theorists) has refined the positions considerably. *Trope theory* introduces a fourth option — there are real instances of redness in particulars (this apple's redness, that apple's redness), but no further universal redness in addition. Armstrong's *immanent realism* keeps real universals but locates them wholly in their particular instances.

The question matters far beyond academic metaphysics. Mathematics (do numbers and sets exist?), philosophy of language (what do general terms refer to?), philosophy of science (do natural kinds exist?), and political philosophy (does "humanity" pick out something real that grounds rights?) all turn on it.`,
    sources: [
      { title: "The Medieval Problem of Universals (SEP)", cite: "Klima, G. SEP entry", url: "https://plato.stanford.edu/entries/universals-medieval/" },
    ],
  },
  {
    id: "truth",
    slug: "truth",
    name: "Truth",
    difficulty: "intermediate",
    theme: "epistemology",
    philosopherIds: ["aristotle", "james", "tarski-implicit"],
    shortSummary:
      "What is it for a proposition to be true? Correspondence to reality (the classical view), coherence with other beliefs, what works in practice (pragmatism), or — Tarski — just a formal disquotational schema. The major debate of twentieth-century epistemology.",
    fullBody: `The classical conception of truth is *correspondence*: a proposition is true if it corresponds to the way things are. Aristotle's formulation (*Metaphysics* IV.7) is the canonical ancient statement: "to say of what is that it is, and of what is not that it is not, is true." The correspondence theory has dominated the Western tradition for most of its history.

The alternatives have been substantial. *Coherence* theories hold that a proposition is true if it coheres with the rest of one's beliefs; without a way to step outside our beliefs and check them against unmediated reality, correspondence seems unworkable. Hegel, Bradley, and various idealists defended versions of this.

*Pragmatism* — William James in particular — holds that what we mean by truth is, in the end, what works in the long run of inquiry. Truth is what survives test, refinement, and use. The position invited mockery (truth as "whatever you find useful") and James spent the rest of his life clarifying that the test had to be serious and long-run, not personal convenience.

The twentieth century brought *Tarski's semantic theory* (1933) — a formal disquotational schema: "Snow is white" is true if and only if snow is white. The schema is meant to be philosophically deflationary; it tells us what truth is for any specific sentence without giving a metaphysical account of "truth" as a substantive property.

The current major options include: Davidsonian truth-conditional semantics (truth is a primitive that organizes meaning), various forms of *deflationism* (there is nothing substantial to say about truth beyond the disquotational schema), and *primitivism* (truth is a basic concept, not analyzable in other terms). The correspondence intuition has not died despite repeated obituaries.`,
    sources: [
      { title: "The Correspondence Theory of Truth (SEP)", cite: "David, M. SEP entry", url: "https://plato.stanford.edu/entries/truth-correspondence/" },
    ],
  },
  {
    id: "modality",
    slug: "modality",
    name: "Necessity and possibility (modality)",
    difficulty: "advanced",
    theme: "metaphysics",
    philosopherIds: ["leibniz", "kripke", "david-lewis"],
    shortSummary:
      "What does it mean for something to be necessarily true rather than merely contingently true? Modal logic gave the formal apparatus; possible-worlds semantics interprets it; whether the possible worlds are real (Lewis) or useful fictions is the live question.",
    fullBody: `*Modal* claims are claims about necessity, possibility, and contingency: that something *must* be the case, *could* be the case, or *happens to* be the case but didn't have to be. The traditional logical apparatus for distinguishing these — Aristotle's modal syllogistic — was not particularly well-developed.

Leibniz's possible-worlds analysis was the major early-modern advance. A proposition is *necessarily* true if it is true in every possible world; *possibly* true if it is true in at least one; *contingently* true if it is true in the actual world but false in at least one other. The framework gave a clear semantics to modal talk for the first time.

The modern revival came with Saul Kripke's work in the 1960s (*A Completeness Theorem in Modal Logic*, 1959; *Naming and Necessity*, 1970/72). Kripke gave possible-worlds semantics rigorous form for modal logic, defended *rigid designation* (proper names refer to the same entity in every possible world where the entity exists), and introduced the distinction between *necessary a posteriori* and *contingent a priori* truths. Both categories are surprising; both have organized subsequent metaphysics.

The metaphysical question Kripke's framework leaves open is whether possible worlds *exist*. David Lewis (*On the Plurality of Worlds*, 1986) defended *modal realism*: all possible worlds exist as real, concrete, mutually inaccessible universes, each as real as our own. Almost no other major analytic philosopher agreed; the cost in ontological extravagance was widely thought to outweigh the explanatory benefits. The alternatives — *ersatz* possible worlds (worlds as abstract entities), modal *fictionalism*, or modal *primitivism* — remain contested.`,
    sources: [
      { title: "Modal Logic (SEP)", cite: "Garson, J. SEP entry", url: "https://plato.stanford.edu/entries/logic-modal/" },
    ],
  },
  {
    id: "beauty",
    slug: "beauty",
    name: "Beauty",
    difficulty: "intermediate",
    theme: "aesthetics",
    philosopherIds: ["plato", "kant"],
    shortSummary:
      "The central concept of aesthetics — and one of the most argued-over in philosophy. Is beauty an objective property of things, a subjective response, or a culturally constituted judgment that presents itself to us as more than that?",
    fullBody: `The classical Western conception of beauty — Plato's, articulated in the *Symposium* and the *Phaedrus* — treats beauty as an objective property of things, with the Form of Beauty as its ultimate source. The beautiful body, the beautiful proposition, the beautiful action all participate in the same Form. Beauty is what we love when we love truly.

Kant's *Critique of Judgment* (1790) gave the modern philosophical theory of beauty its founding form. A judgment of beauty (a *pure judgment of taste*) is subjective in that it is grounded in the subject's pleasure rather than in any concept of the object, but is universal in its claim — when I say "this is beautiful," I am claiming that every other rational agent ought to agree with me, even though I cannot prove it. Beauty is, for Kant, a kind of subjective universality.

Hume's "Of the Standard of Taste" (1757) defended a more empirical position: beauty is in the eye of the beholder, but not all beholders are equal; the *true judges* are those whose practice has refined their sensibility, and their judgments converge enough to make a standard of taste possible.

Twentieth-century philosophy of art largely shifted attention away from beauty as the central aesthetic concept. The interesting twentieth-century artwork is often unbeautiful, even ugly, in ways that the classical concept can't easily accommodate; critics like Theodor Adorno argued that "beauty" had become a category serving comforting kitsch. But the concept has been quietly returning — Elaine Scarry's *On Beauty and Being Just* (1999), Alexander Nehamas' *Only a Promise of Happiness* (2007), and others have made the case that beauty deserves more philosophical attention than the mid-twentieth century gave it.`,
    sources: [
      { title: "Kant's Aesthetics (SEP)", cite: "Ginsborg, H. SEP entry 'Kant's Aesthetics and Teleology'", url: "https://plato.stanford.edu/entries/kant-aesthetics/" },
    ],
  },
  {
    id: "i-thou",
    slug: "i-thou",
    name: "I and Thou",
    difficulty: "intermediate",
    theme: "ethics",
    philosopherIds: ["buber", "levinas"],
    shortSummary:
      "Buber's distinction between two basic modes of relating to anything. In the I-It mode, the other is an object — classified, used, theorized about. In the I-Thou mode, the other is met as a whole presence I am fully present to. Both are needed; modern life has structurally lost the second.",
    fullBody: `Martin Buber's *Ich und Du* (1923) introduced the distinction between *I-It* and *I-Thou* as the two basic modes of human relation to anything — another person, a tree, God, a piece of music.

In the *I-It* mode, the other is encountered as an object: classified, useful, predictable, controllable. This mode is necessary; without it survival, science, ordinary practical action would be impossible. The *I* of *I-It* is a stable, bounded self that knows itself through its handling of what it confronts.

In the *I-Thou* mode, the other is met without those mediating categories — as a whole presence, in a meeting that the *I* itself is fully present to. The *I* of *I-Thou* is not a bounded knower facing an object; it is constituted in the meeting. Buber's repeated point is that *I-Thou* relations have no content that can be extracted and described — describing the relation already steps outside it into the *I-It* mode.

Modernity, on Buber's diagnosis, has structurally over-developed the *I-It* mode at the cost of the *I-Thou*. Industrial production, bureaucratic administration, scientific abstraction, and consumerist exchange all train the human person to treat everything (including other persons) as material for handling. The recovery of *I-Thou* — particularly in the encounter with another person — is, for Buber, the deepest spiritual and social task of the present age.

The framework has been important in dialogical philosophy, in pastoral and educational psychology (Carl Rogers drew on Buber heavily), in mid-twentieth-century theology, and in contemporary care ethics. Levinas's ethics of the face is recognizably in dialogue with Buber, though Levinas pushes the argument in different directions.`,
    sources: [
      { title: "Martin Buber, I and Thou", cite: "trans. Walter Kaufmann, Touchstone 1970 (orig. 1923)" },
    ],
  },
];

export function getConcept(slug: string): Concept | undefined {
  return CONCEPTS.find((c) => c.slug === slug);
}
