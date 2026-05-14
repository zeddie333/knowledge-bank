import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// 20th–21st century analytic tradition: logic, language, mind, ethics, political.
export const ANALYTIC: Philosopher[] = [
  {
    id: "russell",
    slug: "russell",
    name: "Bertrand Russell",
    birthYear: 1872,
    deathYear: 1970,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Bertrand_Russell_1957.jpg"),
    themes: ["logic", "epistemology", "politics"],
    shortSummary:
      "Russell co-wrote Principia Mathematica, won a Nobel Prize for prose, went to prison twice for political activism, and lived ninety-seven years arguing in public. Most twentieth-century analytic philosophy is a footnote to something he started.",
    fullBody: `Russell co-authored, with Whitehead, the *Principia Mathematica* (1910–13), an attempt to derive all of mathematics from a logical foundation. It is largely successful, monumentally tedious, and was rendered obsolete by Gödel's incompleteness theorems twenty years later — though "obsolete" understates how much subsequent logic still depends on its machinery.

The philosophical contribution that survives best is the *theory of descriptions* (*On Denoting*, 1905). Russell's puzzle: what is the logical form of "the present King of France is bald"? There is no present King of France; if the sentence is referring to him, what is it referring to? Russell's answer is that the sentence is not a simple subject-predicate statement but a quantified statement with internal structure: "there exists exactly one x such that x is presently King of France, and x is bald." Now the sentence is straightforwardly false (because the existence clause is false) rather than meaningless. The analysis is the founding move of analytic philosophy of language.

Russell's *Problems of Philosophy* (1912) is the best short introduction to philosophy in English. *The History of Western Philosophy* (1945) is a brilliant, unfair, frequently wrong, indispensable book.

Politically he was a pacifist (jailed in 1918 for opposing WWI), a campaigner against nuclear weapons (chairing the Pugwash Conferences), a critic of religion (*Why I Am Not a Christian*, 1927), and a frequent target. He won the Nobel Prize in Literature in 1950 — for the prose, not the logic.`,
    sources: [
      { title: "Bertrand Russell (SEP)", cite: "Irvine, A. SEP entry 'Bertrand Russell'", url: "https://plato.stanford.edu/entries/russell/" },
    ],
  },
  {
    id: "wittgenstein",
    slug: "wittgenstein",
    name: "Ludwig Wittgenstein",
    birthYear: 1889,
    deathYear: 1951,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("35._Portrait_of_Wittgenstein.jpg"),
    themes: ["logic", "epistemology", "mind"],
    shortSummary:
      "Wittgenstein wrote one short, oracular book in his twenties that he thought solved philosophy. He spent the rest of his life concluding it was wrong and writing the longer, equally oracular book in his sixties that has shaped most of the philosophy that came after.",
    fullBody: `The *Tractatus Logico-Philosophicus* (1921) is seventy-five pages of numbered propositions arranged in a decimal hierarchy. Its central claims: language pictures the world; what can be said clearly can be said; the rest — ethics, aesthetics, the meaning of life — cannot be said and must be passed over in silence. The famous closing: "Whereof one cannot speak, thereof one must be silent" (7).

Wittgenstein thought the *Tractatus* solved philosophy and left the discipline for ten years. He worked as a primary school teacher in rural Austria, designed his sister's house, and only returned to Cambridge in 1929. By then he had become convinced that the early picture was wrong.

The *Philosophical Investigations* (published posthumously, 1953) is the result of the long second thought. Language does not work by picturing. There is no single function of language — words are tools, used in different *language-games* embedded in different *forms of life*. Meaning is not what a word names; it is the rule-governed use of the word in a community of speakers. The famous *private language argument* (PI §243–§315) argues that the very idea of an essentially private language — one that, in principle, no one else could understand — is incoherent. Meaning is constitutively social.

The structure of the *Investigations* is anti-systematic on purpose. There is no thesis to be proved, no theory to be defended. There is a series of careful reminders meant to dissolve the philosophical confusions that drove the *Tractatus* and most of the tradition. Whether this is the success Wittgenstein took it to be, or a sophisticated form of giving up, is contested.

Almost no major movement in late-twentieth-century philosophy — ordinary language philosophy, philosophy of mind, philosophy of action, philosophy of mathematics, post-analytic philosophy — escapes him.`,
    sources: [
      { title: "Ludwig Wittgenstein (SEP)", cite: "Biletzki, A. & Matar, A. SEP entry 'Ludwig Wittgenstein'", url: "https://plato.stanford.edu/entries/wittgenstein/" },
    ],
  },
  {
    id: "carnap",
    slug: "carnap",
    name: "Rudolf Carnap",
    birthYear: 1891,
    deathYear: 1970,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Rudolf_Carnap.jpg"),
    themes: ["logic", "epistemology"],
    shortSummary:
      "Carnap was the central philosopher of the Vienna Circle and the most rigorous defender of logical positivism. Quine destroyed the position, mostly; the working assumptions Carnap built into contemporary philosophy of science survived.",
    fullBody: `Carnap was the most systematic member of the Vienna Circle — the group of philosophers and scientists who, between the wars, tried to use the new symbolic logic to clean up philosophy by exposing the bulk of traditional metaphysics as cognitively empty.

The *verification principle* — that a sentence is cognitively meaningful only if it can, in principle, be verified empirically — does the destructive work. Most claims of traditional metaphysics fail the test and are dismissed not as false but as meaningless. The principle itself, of course, is hard to verify, which is the standard reply and the eventual cause of logical positivism's decline.

Carnap's positive program is more interesting. *The Logical Structure of the World* (1928) attempts to reconstruct all empirical concepts from a base of immediate experiences. *Logical Syntax of Language* (1934) argues that philosophical disputes are often choices of language frameworks rather than substantive disagreements; you don't argue *whether* numbers exist, you choose whether to use a language framework that includes them. *Empiricism, Semantics, and Ontology* (1950) formalizes this with the *internal/external* questions distinction.

Quine's "Two Dogmas of Empiricism" (1951) attacked the analytic/synthetic distinction Carnap relied on, and the post-Quinean consensus is that strict logical positivism is dead. But the picture of philosophy as continuous with science, the use of formal tools, the suspicion of metaphysical claims that do no empirical work — those Carnapian impulses are still default in analytic philosophy.`,
    sources: [
      { title: "Rudolf Carnap (SEP)", cite: "Friedman, M. SEP entry 'Rudolf Carnap'", url: "https://plato.stanford.edu/entries/carnap/" },
    ],
  },
  {
    id: "quine",
    slug: "quine",
    name: "W.V.O. Quine",
    birthYear: 1908,
    deathYear: 2000,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Wvq-passport-1975-400dpi-crop.png"),
    themes: ["epistemology", "logic"],
    shortSummary:
      "Quine destroyed the analytic/synthetic distinction in a fifteen-page paper and then spent the rest of his career working out what holism and naturalism look like once you take that seriously. His argument is still being argued with.",
    fullBody: `"Two Dogmas of Empiricism" (1951) is the most cited paper in twentieth-century analytic philosophy. The two dogmas: that there is a sharp line between analytic truths (true by meaning alone — "bachelors are unmarried") and synthetic truths (true by how the world is); and that meaningful sentences can be reduced to statements about immediate experience.

Quine argues that the first distinction cannot be drawn without circularity, and the second is hopeless. What replaces them is *holism*: our beliefs face the tribunal of experience as a *whole*, not one by one. Confronting recalcitrant experience, we have wide latitude in choosing where to make revisions — most often at the edges of the web, occasionally deep in the middle. There is no class of sentences immune to revision.

This has serious consequences. There is no clean distinction between philosophy and science; philosophy is continuous with empirical inquiry, and *naturalism* — the view that there is no special philosophical method or subject matter separate from natural science — follows. Quine pushed this aggressively in *Word and Object* (1960), *Ontological Relativity* (1969), and *From a Logical Point of View* (1953).

His thesis of the *indeterminacy of translation* — that there can in principle be multiple, equally adequate translation manuals between languages that systematically diverge — is one of the most strenuously argued positions in the analytic tradition.`,
    sources: [
      { title: "Willard Van Orman Quine (SEP)", cite: "Hylton, P. SEP entry 'Willard Van Orman Quine'", url: "https://plato.stanford.edu/entries/quine/" },
    ],
  },
  {
    id: "rawls",
    slug: "rawls",
    name: "John Rawls",
    birthYear: 1921,
    deathYear: 2002,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("John_Rawls_(1971_photo_portrait).jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Rawls reopened political philosophy in 1971 with a book that everyone thought the discipline had outgrown. A Theory of Justice argues for principles of justice that rational people would choose if they didn't yet know who they'd turn out to be in the resulting society.",
    fullBody: `Before Rawls, political philosophy had been declared dead by enough analytic philosophers that the death was widely believed. *A Theory of Justice* (1971) made the obituary look premature.

The central device: the *original position*, a hypothetical situation in which rational people choose principles to govern their society from behind a *veil of ignorance* — not yet knowing their race, class, sex, talents, or comprehensive moral views. The question: what principles would they choose?

Rawls argues they would choose two: (1) the most extensive system of basic liberties compatible with the same liberties for everyone, and (2) social and economic inequalities are permitted only insofar as they are attached to positions open to all under fair equality of opportunity, and only insofar as they benefit the worst-off (the *difference principle*).

The argument's structure is contestable in many ways. *Why* would behind-the-veil reasoners choose Rawls' specific principles, rather than Harsanyi's expected-utility maximization? Are the principles really separable from a substantive (and contestable) liberal worldview? Robert Nozick's *Anarchy, State, and Utopia* (1974) launched the libertarian reply; Michael Sandel's *Liberalism and the Limits of Justice* (1982) launched the communitarian one; feminist critics, notably Susan Moller Okin, argued the veil failed to make the family visible.

Rawls' later *Political Liberalism* (1993) softens the original framework: the principles of justice are presented not as deductions from rationality but as a *political conception* that can be the subject of an *overlapping consensus* among people who disagree about deeper religious or philosophical views.`,
    sources: [
      { title: "John Rawls (SEP)", cite: "Wenar, L. SEP entry 'John Rawls'", url: "https://plato.stanford.edu/entries/rawls/" },
    ],
  },
  {
    id: "nozick",
    slug: "nozick",
    name: "Robert Nozick",
    birthYear: 1938,
    deathYear: 2002,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Robert_nozick.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Nozick's Anarchy, State, and Utopia (1974) is the most rigorous defense of libertarianism written. The Experience Machine thought experiment, in chapter three, is one of the cleanest arguments against hedonism. Both target his Harvard colleague Rawls.",
    fullBody: `*Anarchy, State, and Utopia* (1974) is structured as three movements. Part I asks whether the minimal state — a state limited to enforcement of contracts and protection from violence, theft, and fraud — can be justified to anarchists who object to *any* state; Nozick argues, via an "invisible hand" derivation, that it can. Part II asks whether anything *more* than the minimal state can be justified to libertarians; Nozick argues it cannot, attacking redistributive theories of justice (including Rawls') in detail. Part III asks what the minimal state would look like in practice: a framework for utopia in which different communities, voluntarily entered, can experiment with different ways of life.

The argument depends on a *historical* or *entitlement* theory of justice: a distribution is just if it arose from a just initial acquisition through a sequence of just transfers. The question of distributive justice — who has what relative to whom — is, on this view, the wrong question. The right question is whether the holdings came about through legitimate processes. Rawls' difference principle treats distributive patterns as the object of justice and is, Nozick argues, incompatible with respect for persons as ends in themselves.

The *Experience Machine* (Chapter 3, §I) is the cleanest argument against hedonism still in circulation. Imagine a machine that could give you any experiences you wanted, indistinguishable from real ones — you'd think you were living a life full of meaning, accomplishment, and love. Would you plug in for life? Most people balk. If hedonism (the view that pleasure is the only thing that matters) were right, plugging in should be obvious. The intuition that something is missing — that we want to actually do things and be a certain kind of person, not just have the corresponding experiences — is what the machine elicits.`,
    sources: [
      { title: "Robert Nozick (SEP)", cite: "Lacey, A. SEP entry 'Robert Nozick'", url: "https://plato.stanford.edu/entries/nozick-political/" },
    ],
  },
  {
    id: "kripke",
    slug: "kripke",
    name: "Saul Kripke",
    birthYear: 1940,
    deathYear: 2022,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Saul_Kripke.png"),
    themes: ["logic", "epistemology"],
    shortSummary:
      "Kripke wrote a Princeton master's-level course in 1970, and the lectures — Naming and Necessity — overturned mid-century philosophy of language and revived metaphysics. He was twenty-nine.",
    fullBody: `Before Kripke, the dominant view (Frege, Russell, the early Wittgenstein, mid-twentieth-century descendants) was *descriptivism*: a proper name like "Aristotle" works by being associated with a description ("the student of Plato who taught Alexander"). If Aristotle had not been Plato's student, the name would have referred to someone else — whoever in fact satisfied the description.

Kripke's *Naming and Necessity* (1970 lectures, 1972/1980 book) attacks this systematically. Names are *rigid designators*: in any possible world in which the referent exists, the name refers to that referent. If Aristotle had grown up to be a baker, "Aristotle" would still refer to him, not to whoever became the famous student of Plato. Reference is fixed by an initial *baptism* and transmitted through *causal chains* of usage, not by any description the speaker currently associates with the name.

The implications are extensive. Kripke introduces the concept of *a posteriori necessities* — things that are necessarily true but knowable only through experience. "Water is H₂O" is one: if it's true, it's necessarily true (in any possible world, water is H₂O), but we couldn't have known it without doing chemistry. This is a category traditional empiricism had ruled out.

Kripke also produced the semantics for modal logic that bears his name (Kripke semantics, with possible worlds and accessibility relations), now standard. *Wittgenstein on Rules and Private Language* (1982) is his reading of the central puzzles of the *Investigations*, and is itself one of the most discussed books in late-twentieth-century philosophy.`,
    sources: [
      { title: "Saul Kripke (SEP)", cite: "Soames, S. SEP entry 'Saul Kripke'", url: "https://plato.stanford.edu/entries/kripke/" },
    ],
  },
  {
    id: "anscombe",
    slug: "anscombe",
    name: "G.E.M. Anscombe",
    birthYear: 1919,
    deathYear: 2001,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("G.E.M._Anscombe.jpg"),
    themes: ["ethics", "mind", "religion"],
    shortSummary:
      "Anscombe single-handedly revived virtue ethics in twentieth-century analytic philosophy, published the first modern treatise on intention, and translated Wittgenstein into English. She was Catholic, formidable, and frequently uncomfortable to read.",
    fullBody: `Anscombe's *Modern Moral Philosophy* (1958) is a sixteen-page essay that argued mid-century moral philosophy was bankrupt. The concepts of "moral obligation" and "moral duty" that the post-Kantian and utilitarian traditions kept using, she said, are leftovers from a Christian framework that no longer makes sense once you've stopped believing in divine law. Without the law-giver, the language of obligation is a kind of throat-clearing. She recommended dropping it and returning to Aristotelian virtue ethics — to questions about what kind of person to be rather than what rules to follow.

The recommendation took. By the 1980s, virtue ethics — through Alasdair MacIntyre, Philippa Foot, Rosalind Hursthouse, Bernard Williams — was a major position in normative ethics. Anscombe coined the term *consequentialism* in the same essay, partly to name the family of views she was rejecting.

*Intention* (1957) is one of the founding texts of contemporary philosophy of action. The question — what makes an action *intentional*? — leads her to distinctions about how reasons function in describing action, about the role of practical reasoning, about the difference between an event you cause and an action you perform.

Her translation of Wittgenstein's *Philosophical Investigations* is the standard English text and a feat of philosophical translation. She was, throughout, an unapologetic Catholic, an opponent of contraception, abortion, and nuclear deterrence (her objection to Truman receiving an Oxford honorary degree in 1956 was on the grounds that he was a murderer for ordering the atomic bombings).`,
    sources: [
      { title: "G.E.M. Anscombe (SEP)", cite: "Teichmann, R. SEP entry 'Elizabeth Anscombe'", url: "https://plato.stanford.edu/entries/anscombe/" },
    ],
  },
  {
    id: "foot",
    slug: "foot",
    name: "Philippa Foot",
    birthYear: 1920,
    deathYear: 2010,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["ethics"],
    shortSummary:
      "Foot did the careful philosophical work that made virtue ethics defensible and invented the Trolley Problem along the way. Natural Goodness (2001) is her most ambitious book.",
    fullBody: `Foot worked alongside Anscombe at Oxford and made the more conciliatory case for virtue ethics. *Natural Goodness* (2001) argues that moral evaluation of human beings is continuous with biological evaluation of living things: just as we evaluate a wolf or a plant in terms of what counts as flourishing for its kind, we evaluate humans in terms of what counts as human flourishing — and that includes the cultivation of the virtues.

The argument resists two common objections. It is not naturalistic in the bad sense (deriving "ought" from "is" without remainder); the kind of evaluation is irreducibly normative. And it is not relativistic; the structure of human life — our need for cooperation, language, long-term planning, raising children — sets serious constraints on what can count as a flourishing version of it.

Foot also invented the *Trolley Problem* (in *The Problem of Abortion and the Doctrine of Double Effect*, 1967), originally as a tool for distinguishing doing harm from allowing harm. The case has since produced a vast literature, much of which she found exasperating. She was clear that her version of the case was meant to illuminate a specific distinction, not to be the central thought experiment of moral philosophy.`,
    sources: [
      { title: "Philippa Foot (SEP)", cite: "Hursthouse, R. SEP entry on related virtue ethics topics", url: "https://plato.stanford.edu/entries/ethics-virtue/" },
    ],
  },
  {
    id: "williams",
    slug: "bernard-williams",
    name: "Bernard Williams",
    birthYear: 1929,
    deathYear: 2003,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Bernard_Williams_(philosopher).jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Williams attacked utilitarianism, Kantianism, and the very project of trying to systematize ethics — all in prose that other analytic philosophers found uncomfortably readable. His critique that ethical theory misses what matters in actual moral life has worn well.",
    fullBody: `Williams' attack on utilitarianism — most famously in his contribution to *Utilitarianism: For and Against* (with J.J.C. Smart, 1973) — turned on what he called *integrity*. Utilitarianism, he argued, treats every agent as a neutral calculator of consequences and gives no weight to the agent's own projects, commitments, and identifications. A theory that requires me to be willing to abandon what makes me *me* if doing so produces marginally better consequences has lost something important about what ethics is for.

The illustrative case: George, a chemist, who is offered a job in chemical and biological weapons research. He'd quit if he could afford to; the only effect of his refusal would be that someone less scrupulous takes the job and pushes the research further. Utilitarianism implies George should take the job. Williams thinks this misses the moral structure of George's situation — that the *agent-relative* claim ("I cannot do this") is not reducible to *agent-neutral* calculation.

Williams was equally critical of Kantianism for parallel reasons: the universal, impartial, impersonal standpoint it demands is in tension with the partial, personal, situated commitments that actually structure moral life. *Ethics and the Limits of Philosophy* (1985) is the most sustained attack on the very project of moral theory — the attempt to find a single set of principles that organizes our moral thinking.

*Truth and Truthfulness* (2002), his last book, argues that the values of *accuracy* and *sincerity* are practical necessities for any society that uses language seriously, and that fashionable critiques of truth (he had genealogies and postmodernists in mind) underestimate what they are attacking.`,
    sources: [
      { title: "Bernard Williams (SEP)", cite: "Chappell, S. SEP entry 'Bernard Williams'", url: "https://plato.stanford.edu/entries/williams-bernard/" },
    ],
  },
  {
    id: "parfit",
    slug: "parfit",
    name: "Derek Parfit",
    birthYear: 1942,
    deathYear: 2017,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Derek_Parfit.jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Parfit thought personal identity didn't matter the way we assume it does, and that our ordinary view of it produces serious confusions in ethics. Reasons and Persons (1984) is one of the great works of late-twentieth-century philosophy; On What Matters (2011/2017) is even more ambitious.",
    fullBody: `*Reasons and Persons* (1984) is structured as four sustained arguments. Part I attacks self-interest theories on their own grounds. Part II attacks the rationality of our usual concern for our own future. Part III is on personal identity. Part IV is on future generations and population ethics.

The personal identity argument: Parfit deploys teletransporter thought experiments, fission cases (your brain split into two functioning halves, each transplanted into a new body), and gradual replacement scenarios to argue that personal identity is not "what matters." What matters is *psychological continuity and connectedness* — memory, intention, personality — and these can come apart from identity in the strict philosophical sense. If a future "you" is connected to current you in the right ways, that's what matters morally; whether it's the *same person* in the metaphysician's sense is a separate question, and probably not deeply meaningful.

The implications cascade. If identity is not what matters, the *self-interest theory* (that I have special reason to care about my own future) loses much of its grip. The boundary between rational concern for myself and rational concern for others becomes less sharp, which has consequences for ethical theory.

*On What Matters* (Vols. I–II, 2011; Vol. III, 2017) is Parfit's attempt to show that the three major ethical theories — Kantian, Rule-Consequentialist, Contractualist — can be reformulated so as to converge on the same set of conclusions: that they are "climbing the same mountain on different sides." Whether the convergence is real or whether Parfit is reformulating each theory to fit the destination is the question reviewers spent a thousand pages each on.`,
    sources: [
      { title: "Derek Parfit (SEP)", cite: "SEP entry on personal identity by Olson, E.", url: "https://plato.stanford.edu/entries/identity-personal/" },
    ],
  },
  {
    id: "dennett",
    slug: "dennett",
    name: "Daniel Dennett",
    birthYear: 1942,
    deathYear: 2024,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Daniel_Dennett_in_Venice_2006.png"),
    themes: ["mind", "religion"],
    shortSummary:
      "Dennett argued that consciousness, free will, and the self are real but not what naive introspection takes them to be. The standard objection is that he explains away what most people meant by the words. The standard reply is that what people meant was the confused part.",
    fullBody: `Dennett's *Consciousness Explained* (1991) takes on the hard problem head-on. The traditional Cartesian picture — that there is a place in the brain where everything "comes together" in a unified inner theater, with a self watching the show — Dennett calls the *Cartesian Theater* and argues no such place exists. What we have instead is the *multiple drafts* model: many parallel cognitive processes producing partial narrations, only some of which surface as anything like conscious experience, and which one surfaces depends on what the system needs to report.

This is widely accused of being *eliminativism* about consciousness — of explaining away what we wanted explained. Dennett's reply is that the thing being explained away (the inner theater, qualia as private intrinsic properties) was a confusion to begin with; what's *real* about consciousness — patterns of behavior, reportable contents, integrated information processing — is consistent with the multiple-drafts picture.

His work on *intentionality* introduces the *intentional stance*: treating a system as if it had beliefs and desires is a strategy that works on humans, dogs, chess programs, and thermostats — and the question of whether the system *really* has beliefs is, on his pragmatist reading, not separable from the question of whether the stance is useful.

*Freedom Evolves* (2003) defends compatibilism — free will is real and compatible with determinism — by arguing that what we wanted from free will (responsibility, planning, self-control) was never the impossible libertarian thing, and the compatibilist version delivers it. *Breaking the Spell* (2006) is on religion as a natural phenomenon.`,
    sources: [
      { title: "Daniel Dennett (SEP)", cite: "SEP entry on related topics in philosophy of mind", url: "https://plato.stanford.edu/entries/consciousness/" },
    ],
  },
  {
    id: "searle",
    slug: "searle",
    name: "John Searle",
    birthYear: 1932,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("John_searle2.jpg"),
    themes: ["mind", "logic"],
    shortSummary:
      "Searle's Chinese Room argument is the most famous twentieth-century attack on the view that strong AI is possible in principle. Whether it succeeds is a debate philosophy of mind has never quite ended.",
    fullBody: `The *Chinese Room* (1980) is Searle's central argument. Imagine you are locked in a room with a rulebook for manipulating Chinese characters. Chinese speakers outside the room slip questions in Chinese under the door; you, following the rulebook mechanically, slip back answers that are indistinguishable from those of a fluent speaker. You pass the Turing Test for Chinese. You also understand no Chinese whatsoever.

The argument's target is *strong AI*: the view that a suitably programmed computer would, in virtue of running the program, genuinely understand and have a mind. Searle's claim is that the room shows that *syntactic* manipulation — pure symbol-pushing — is insufficient for *semantic* understanding. The brain produces understanding because it has the right kind of *causal powers*; a program running on silicon does not, unless those causal powers are duplicated. Whether they could be is a different question.

The reply industry is enormous. The *systems reply* (the person in the room doesn't understand, but the whole system does) is the most discussed. The *robot reply* (a properly embodied system interacting with the world really would understand) is the most concessive. Searle replied to most of these in further papers, and the debate has shaped both philosophy of mind and AI for forty years.

His earlier *Speech Acts* (1969) extended Austin's analysis of how language *does* things (promising, commanding, asserting) into a systematic theory. *The Construction of Social Reality* (1995) develops the framework for how institutional facts (money, marriage, presidencies) are constituted by collective intentionality.`,
    sources: [
      { title: "The Chinese Room Argument (SEP)", cite: "Cole, D. SEP entry 'The Chinese Room Argument'", url: "https://plato.stanford.edu/entries/chinese-room/" },
    ],
  },
  {
    id: "putnam",
    slug: "putnam",
    name: "Hilary Putnam",
    birthYear: 1926,
    deathYear: 2016,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Hilary_Whitehall_Putnam.jpg"),
    themes: ["mind", "metaphysics", "epistemology"],
    shortSummary:
      "Putnam changed his mind in public more than any major philosopher of his generation. The Twin Earth thought experiment, multiple realizability, and internal realism are all his — and each was the move he then revised. The pattern is, on his own view, the point of doing philosophy.",
    fullBody: `Putnam's *Twin Earth* thought experiment (*The Meaning of "Meaning,"* 1975) imagines a planet exactly like Earth except that the substance that looks and behaves like water there is, on chemical analysis, XYZ rather than H₂O. Speakers on each planet use "water" the same way. But the *referent* differs — "water" on Earth refers to H₂O, "water" on Twin Earth refers to XYZ. Therefore meanings cannot be entirely "in the head"; they depend on environmental and social facts external to the speaker. This is one of the founding arguments of *semantic externalism*.

*Multiple realizability* (in his earlier *functionalism*): the same mental state — say, pain — can be realized by very different physical substrates. So identifying mental states with specific brain states (the "type-identity theory") is a mistake. Functionalism is the view that mental states are identified by their causal roles, not by the stuff implementing them. Putnam was the central early advocate and later one of the major critics.

*Internal realism* (his middle period): there is no view from nowhere, no "ready-made world" with its joints carved in advance of any conceptual scheme; truth is correspondence to reality *as conceptualized*. Later he moved closer to a "natural realism" that sat uncomfortably with positions he had earlier defended.

The pattern — building a precise position, finding what was wrong with it, building the next one — is what philosophy looks like when done in public with great seriousness.`,
    sources: [
      { title: "Hilary Putnam (SEP)", cite: "Hickey, L. SEP entry 'Hilary Putnam'", url: "https://plato.stanford.edu/entries/putnam/" },
    ],
  },
  {
    id: "chomsky",
    slug: "chomsky",
    name: "Noam Chomsky",
    birthYear: 1928,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Noam_Chomsky_portrait_2017.jpg"),
    themes: ["mind", "politics", "epistemology"],
    shortSummary:
      "Chomsky's argument that humans are born with a language-specific cognitive faculty — universal grammar — overturned behaviorist psychology and helped found cognitive science. He has also spent sixty years writing the sharpest mainstream-left American political commentary in print.",
    fullBody: `Chomsky's *Syntactic Structures* (1957) and his demolishing review of Skinner's *Verbal Behavior* (1959) ended behaviorism as a serious account of language acquisition. The argument: the linguistic input children receive is impoverished and inconsistent, yet they reliably converge on a grammar of comparable complexity by age five. No general learning mechanism applied to the impoverished input can explain this. There must be a substantial innate contribution — *universal grammar* — that constrains what children expect language to be.

This is one of the founding arguments of cognitive science. Whatever happens to specific Chomskyan proposals — and they have evolved through several major frameworks (Standard Theory, Government and Binding, Minimalism) — the broader picture, that human cognition has substantial domain-specific structure, has held.

Chomsky's political writing is on the same scale and a separate project. *Manufacturing Consent* (with Edward Herman, 1988) is the classic critique of American media as a system that does not need formal censorship to produce a reliably narrow range of opinion. His critique of US foreign policy across decades is the longest-running adversarial commentary on the American empire from inside it.`,
    sources: [
      { title: "Noam Chomsky (SEP)", cite: "Smith, N. SEP entry 'Noam Chomsky'", url: "https://plato.stanford.edu/entries/chomsky/" },
    ],
  },
  {
    id: "singer",
    slug: "peter-singer",
    name: "Peter Singer",
    birthYear: 1946,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Peter_Singer_MIT_Veritas.jpg"),
    themes: ["ethics"],
    shortSummary:
      "Singer turned utilitarianism into a movement — animal liberation, effective altruism, drowning-child arguments about famine relief. His positions are easy to find disturbing and hard to refute. Both are part of the point.",
    fullBody: `*Animal Liberation* (1975) was the founding text of the modern animal rights movement. The argument is structurally simple: there is no morally relevant property that all humans share and no non-human animals share. So whatever moral consideration we give to humans for being able to suffer, we owe to any other beings capable of suffering. *Speciesism* — preferring humans over animals on the basis of species membership alone — is, on his account, structurally parallel to racism and sexism, and equally untenable.

*Famine, Affluence, and Morality* (1972) is one of the most quoted twenty-page papers in ethics. The drowning child case: if I walked past a shallow pond in which a child was drowning, I would be morally required to wade in and save her, even at the cost of ruining my shoes. The cost is small, the benefit enormous. Singer argues that the structure is identical to my situation regarding distant strangers dying of preventable causes: a small donation could save a life I would never meet. If the pond case obligates me, so does the distant case. Most people accept the pond case and reject the conclusion about distant strangers. Singer asks where the relevant moral difference is.

The argument is part of why *effective altruism* became a movement: take Singer seriously, work out what does the most good per dollar, give accordingly. The movement has had real successes and serious internal troubles, but the philosophical core is recognizably Singer's.`,
    sources: [
      { title: "Peter Singer (SEP)", cite: "Related entries on consequentialism and animal ethics", url: "https://plato.stanford.edu/entries/animals-other/" },
    ],
  },
];
