import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Renaissance, 17th-century rationalists, British empiricists, Enlightenment.
export const EARLY_MODERN: Philosopher[] = [
  {
    id: "machiavelli",
    slug: "machiavelli",
    name: "Niccolò Machiavelli",
    birthYear: 1469,
    deathYear: 1527,
    region: "european",
    era: "early-modern",
    difficulty: "beginner",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Santi_di_Tito_-_Niccolo_Machiavelli's_portrait_headcrop.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Machiavelli did not invent political cynicism; he described what politicians had been doing for centuries and refused to dress it up. The Prince is shorter, harsher, and stranger than its reputation suggests — and the Discourses are the part of him most readers skip.",
    fullBody: `Machiavelli was a Florentine diplomat who served the Republic for fourteen years and was tortured by the returning Medici when it fell. He spent his exile writing political theory and hoping to be employed again, which is part of why *The Prince* (1513) reads the way it does.

The famous claim — better to be feared than loved, if you cannot be both (*Prince* XVII) — is offered as empirical observation, not moral recommendation. Princes who try to be loved are unreliable rulers; princes who are feared can keep order if they avoid being hated. The point is that political action operates by rules different from those that govern private virtue, and a ruler who refuses to see this loses the state. The state's loss, for Machiavelli, is the loss of the conditions under which any virtue is possible.

*Discourses on Livy* (also c. 1513) is republican Machiavelli — a long argument for the superiority of republics over principalities, with concrete institutional recommendations. The compatibility of *Prince* and *Discourses* is one of the longest debates in the field. The most defensible reading: *Prince* is what you need when conditions are corrupt and a single founder must impose order; *Discourses* is what you need once a republic exists.

His enduring contribution is the separation of politics from theology. Saint Augustine's *City of God* had treated political success as either divine providence or vanity; Machiavelli treats it as a craft with its own difficulties, susceptible to skill and luck (*fortuna*) but not to prayer.`,
    sources: [
      { title: "Niccolò Machiavelli (SEP)", cite: "Nederman, C. SEP entry 'Niccolò Machiavelli'", url: "https://plato.stanford.edu/entries/machiavelli/" },
    ],
  },
  {
    id: "bacon",
    slug: "francis-bacon",
    name: "Francis Bacon",
    birthYear: 1561,
    deathYear: 1626,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Somer_Francis_Bacon.jpg"),
    themes: ["epistemology"],
    shortSummary:
      "Bacon argued, in 1620, that we had spent two thousand years deducing from premises and producing nothing useful. He proposed inducting from carefully collected data instead. The scientific revolution is, in part, the working out of his program.",
    fullBody: `Bacon's *Novum Organum* ("New Organon," 1620) was a deliberate echo of Aristotle's *Organon* — the collection of his logical works — and the title is a polemic. Two thousand years of Aristotelian science, Bacon argues, has produced little of practical value because it works in the wrong direction: from general principles deduced from authority down to particular cases, rather than from carefully observed particulars up to general principles.

His proposed method is *induction* in a careful form — tables of presence, absence, and degrees of variation — designed to extract reliable causal laws from comprehensive observation. Modern science does not actually follow Bacon's exact procedure, but the spirit — that knowledge comes from systematic empirical investigation, that hypotheses must be testable, that progress is collaborative — is broadly his.

He is also the source of the famous *idols of the mind* — four classes of systematic error to which human inquiry is prone: the *idols of the tribe* (cognitive distortions shared by all humans), the *idols of the cave* (individual idiosyncrasies), the *idols of the market* (errors from language), the *idols of the theater* (errors from received doctrines). This is, recognizably, an early sketch of what we now call cognitive bias.`,
    sources: [
      { title: "Francis Bacon (SEP)", cite: "Klein, J. SEP entry 'Francis Bacon'", url: "https://plato.stanford.edu/entries/francis-bacon/" },
    ],
  },
  {
    id: "hobbes",
    slug: "hobbes",
    name: "Thomas Hobbes",
    birthYear: 1588,
    deathYear: 1679,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Thomas_Hobbes_(portrait).jpg"),
    themes: ["politics", "ethics", "metaphysics"],
    shortSummary:
      "Hobbes started political philosophy over. Strip away divine right, classical virtue, and natural hierarchies, and what's left is a contract among self-interested individuals trying to escape a state of nature that would be 'nasty, brutish, and short.' Modern political theory is the argument with that picture.",
    fullBody: `*Leviathan* (1651), written during the English Civil War, opens with a thought experiment. Imagine all political authority dissolved — no government, no laws, no enforcement. What follows is not a peaceful idyll but a *state of nature* in which every person has a right to every thing, including each other's bodies, and the result is a war of all against all in which life is "solitary, poor, nasty, brutish, and short" (*Leviathan* I.13).

Reason, on Hobbes' account, dictates a way out: lay down the natural right to everything in exchange for security, transferring that right to a sovereign whose absolute authority is the only thing that prevents the relapse to war. The contract is rational because the alternative is worse. The sovereign's power is not divinely ordained; it is constructed by the people who need it.

This is the founding move of modern political theory. The next four centuries — Locke, Rousseau, Kant, Rawls, Nozick — are largely arguments with various features of the Hobbesian frame: that the state of nature is really that bad, that the contract really transfers that much, that the sovereign really must be absolute, that the alternative to authoritarianism really is anarchy. The frame survived being argued with.

Hobbes' metaphysics is materialist and determinist; his theory of language and meaning is austere; his account of the passions is mordant. He is, throughout, more sophisticated than the caricature.`,
    sources: [
      { title: "Hobbes' Moral and Political Philosophy (SEP)", cite: "Lloyd, S. & Sreedhar, S. SEP entry 'Hobbes's Moral and Political Philosophy'", url: "https://plato.stanford.edu/entries/hobbes-moral/" },
    ],
  },
  {
    id: "descartes",
    slug: "descartes",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Frans_Hals_-_Portret_van_René_Descartes.jpg"),
    themes: ["epistemology", "metaphysics", "mind"],
    shortSummary:
      "Descartes set out to find one thing he could not doubt and rebuild knowledge from there. The cogito is what he found, and the problems with it have shaped epistemology and philosophy of mind ever since.",
    fullBody: `The *Meditations on First Philosophy* (1641) is structured as six days of philosophical introspection. The first day systematically doubts everything: senses (sometimes deceive), memory (sometimes wrong), even mathematics (an evil demon could be making me wrong). The second day finds what doubt cannot reach — the act of doubting is itself a thought, and there must be a thinker.

*Cogito, ergo sum* — "I think, therefore I am." It does not give him much. It does not show he has a body, or that the external world exists, or that other minds exist. Descartes spends Meditations III–VI trying to build these back, relying on a proof of God's existence to license the trustworthiness of his clear and distinct ideas. The Cartesian circle (do I trust the proof because of the clarity, or the clarity because of the proof?) is the standard objection.

His substance dualism — minds and bodies as fundamentally different kinds of stuff — defined philosophy of mind for three centuries by giving it a target. Most subsequent positions are attempts to dispense with dualism without losing what was right about Descartes' phenomenology.

Descartes was also a major mathematician — Cartesian coordinates are his — and his commitment to the unity of philosophy and natural science is part of why he matters in the long arc of early modern thought.`,
    sources: [
      { title: "Descartes (SEP)", cite: "Hatfield, G. SEP entry 'René Descartes'", url: "https://plato.stanford.edu/entries/descartes/" },
    ],
  },
  {
    id: "pascal",
    slug: "pascal",
    name: "Blaise Pascal",
    birthYear: 1623,
    deathYear: 1662,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Blaise_Pascal_Versailles.JPG"),
    themes: ["religion", "ethics", "epistemology"],
    shortSummary:
      "Pascal was a mathematical genius who, after a religious conversion, spent his last years writing fragments aimed at people indifferent to God. The Pensées are the unfinished result, and the Wager is its most famous (and most misunderstood) passage.",
    fullBody: `Pascal invented projective geometry as a teenager, formalized probability theory with Fermat, and built one of the first mechanical calculators. After a profound religious experience in 1654 — "FIRE. God of Abraham, God of Isaac, God of Jacob, not of philosophers and scholars" (the *Mémorial*, found sewn into his coat) — he turned to apologetics.

The *Pensées* ("Thoughts," published posthumously in 1670) are notes for an unfinished defense of Christianity. The famous Wager (frag. 233 in the Lafuma numbering) is the argument that since we cannot prove God exists by reason, and since infinite reward outweighs finite cost, the rational bet is on God. The standard objection — that you cannot believe at will, and that Pascal's argument is therefore not really an argument for belief but for a kind of psychological conditioning — is the one Pascal himself anticipates and addresses (sort of).

The deeper philosophical interest is elsewhere. Pascal's fragments on the *misère* and *grandeur* of the human condition — that we are uniquely capable of recognizing our own wretchedness, which is itself a form of dignity — anticipate existentialism. His warning that "all of humanity's problems stem from man's inability to sit quietly in a room alone" (frag. 136) is older than most who quote it know.`,
    sources: [
      { title: "Blaise Pascal (SEP)", cite: "Connor, J. SEP entry 'Blaise Pascal'", url: "https://plato.stanford.edu/entries/pascal/" },
    ],
  },
  {
    id: "spinoza",
    slug: "spinoza",
    name: "Baruch Spinoza",
    birthYear: 1632,
    deathYear: 1677,
    region: "european",
    era: "early-modern",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Spinoza.jpg"),
    themes: ["metaphysics", "ethics", "religion"],
    shortSummary:
      "Spinoza was excommunicated from the Amsterdam Jewish community at twenty-three for views he had not yet published. When he did publish — geometrically, with definitions and propositions like Euclid — he produced one of the most uncompromising metaphysical systems ever written.",
    fullBody: `Spinoza's *Ethics* (published posthumously, 1677) is a book of metaphysics with the ethical conclusions in the title because, for Spinoza, you cannot get one without the other. The argument is laid out *more geometrico* — in the style of Euclid — with definitions, axioms, and proved propositions. Reading it is hard work; what you find when you do is one of the most rigorous philosophical systems anyone has written.

The central thesis: there is only one substance, and we call it God or Nature (*Deus sive Natura*). Everything that exists is a mode of this single substance, expressed under different attributes — extension (the physical aspect) and thought (the mental aspect) are the two we have access to. Mind and body are not two different things; they are the same thing seen under two different attributes.

This is *not* pantheism in the soft contemporary sense. Spinoza's God is not personal, does not act for purposes, does not respond to prayers, and has no special relation to humans. The traditional religious framework is, in his system, a confused projection. He was, accordingly, denounced as an atheist for two centuries before being rehabilitated.

The ethical payoff: human flourishing comes from understanding our place in this single nature, recognizing our affects as causally embedded, and replacing passive emotions (which we suffer) with active ones (which we constitute). Freedom is not exemption from causation; it is understanding it.

Deleuze and Antonio Negri, in the twentieth century, revived Spinoza for the left. The current that runs through them goes back to a quiet lens grinder in The Hague who refused a chair at Heidelberg because he wanted to keep thinking on his own terms.`,
    sources: [
      { title: "Baruch Spinoza (SEP)", cite: "Nadler, S. SEP entry 'Baruch Spinoza'", url: "https://plato.stanford.edu/entries/spinoza/" },
    ],
  },
  {
    id: "locke",
    slug: "locke",
    name: "John Locke",
    birthYear: 1632,
    deathYear: 1704,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("John_Locke.jpg"),
    themes: ["epistemology", "politics", "mind"],
    shortSummary:
      "Locke argued that the mind starts blank and is written on by experience, that government's legitimacy comes from the consent of the governed, and that property is what you mix your labor with. The American founding is, broadly, Locke wearing a powdered wig.",
    fullBody: `Locke's *Essay Concerning Human Understanding* (1689) opens with an explicit rejection of innate ideas. The mind, he writes, is a *tabula rasa* — a blank slate — on which experience writes through two channels: sensation (data from outside) and reflection (the mind's awareness of its own operations). All concepts and all knowledge come, ultimately, from these two sources.

This is the founding move of British Empiricism. The doctrine has obvious problems — mathematical truths and logical necessities seem hard to derive from experience alone — and Berkeley and Hume will spend the next decades pushing it to its limits. But the structural commitment, that knowledge requires empirical grounding, becomes the default position of British and American philosophy for centuries.

The *Two Treatises of Government* (1689), written in defense of the Glorious Revolution, argue that political authority comes from the *consent of the governed*. We are born in a *state of nature* not as bad as Hobbes thought — limited natural law applies — but inconvenient enough that we form societies. We give government conditional authority; if it fails to protect our natural rights to life, liberty, and property, we have the right to dissolve it. The American Declaration of Independence is Locke with edits.

The labor theory of property (II §27) — that we acquire property by mixing our labor with previously unowned things — became one of the foundational ideas of liberalism. Marx will later argue from the same premise to opposite conclusions.`,
    sources: [
      { title: "John Locke (SEP)", cite: "Uzgalis, W. SEP entry 'John Locke'", url: "https://plato.stanford.edu/entries/locke/" },
    ],
  },
  {
    id: "leibniz",
    slug: "leibniz",
    name: "Gottfried Wilhelm Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    region: "european",
    era: "early-modern",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_(ca._1695).jpg"),
    themes: ["metaphysics", "logic"],
    shortSummary:
      "Leibniz invented calculus independently of Newton, designed binary arithmetic, and built a metaphysical system in which the universe is composed of windowless monads that nonetheless mirror each other in pre-established harmony. Most of his work was unpublished in his lifetime.",
    fullBody: `Leibniz' published output was a small fraction of what he wrote. The major systematic work, the *Monadology* (1714), is fifteen pages of dense theses laying out a metaphysical picture as ambitious as Spinoza's and the opposite in shape.

The world, for Leibniz, is composed of *monads* — simple, immaterial substances, each with its own internal principle of activity. Monads have no windows: they do not interact causally with each other. What appears as interaction is in fact each monad unfolding its own internal program in such a way that everything coheres. God set this up at creation — the *pre-established harmony* — by choosing, from among all possible worlds, the one that maximizes goodness compatible with metaphysical coherence.

This is the source of the famous claim that we live in "the best of all possible worlds," which Voltaire savaged in *Candide* (and which Leibniz never meant in the trivial sense Voltaire pretended). The thought is constrained: not that nothing bad happens, but that no other coherent world would have less bad on balance.

Leibniz' logic is more impressive than his metaphysics. He attempted a *characteristica universalis* — a universal symbolic language in which all propositions could be expressed formally — and a *calculus ratiocinator* for mechanical inference. Russell and Frege, two centuries later, did versions of what Leibniz had imagined.`,
    sources: [
      { title: "Gottfried Leibniz (SEP)", cite: "Look, B. SEP entry 'Gottfried Wilhelm Leibniz'", url: "https://plato.stanford.edu/entries/leibniz/" },
    ],
  },
  {
    id: "berkeley",
    slug: "berkeley",
    name: "George Berkeley",
    birthYear: 1685,
    deathYear: 1753,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("John_Smibert_-_Bishop_George_Berkeley_-_Google_Art_Project.jpg"),
    themes: ["metaphysics", "epistemology"],
    shortSummary:
      "Berkeley argued that material substance does not exist. To be is to be perceived. The trees you do not see continue to exist because God perceives them. Almost everyone thinks this is wrong; almost no one finds it easy to refute.",
    fullBody: `Berkeley took Locke's empiricism and pushed it further. If all our knowledge comes from sensory ideas, what reason is there to posit a "material substance" behind those ideas? We never experience matter; we only experience qualities — color, shape, texture. The supposed substance underlying these qualities is a metaphysical extra we have no grounds for.

Hence the famous *esse est percipi* — to be is to be perceived (*Principles of Human Knowledge*, 1710). What exists are minds and the ideas in minds. The pen on your desk does not exist independently of being perceived; it consists of the experiences you and others have of it.

The standard objection — what about objects no one is currently perceiving? — is answered by God: God is constantly perceiving everything, so the universe maintains its consistency between human observations. The limerick by Ronald Knox captures it: "There was a young man who said, God / Must think it exceedingly odd / That this tree I see / Should continue to be / When there's no one about in the Quad."

The hard part of Berkeley is that his arguments are stronger than the conclusion makes them sound. Samuel Johnson famously kicked a stone and said "I refute it thus," but kicking a stone is, on Berkeley's view, exactly the kind of experiential coherence his theory predicts and explains. Refuting him requires showing what *more* a mind-independent material substance would add — and that turns out to be philosophically difficult.`,
    sources: [
      { title: "George Berkeley (SEP)", cite: "Downing, L. SEP entry 'George Berkeley'", url: "https://plato.stanford.edu/entries/berkeley/" },
    ],
  },
  {
    id: "hume",
    slug: "hume",
    name: "David Hume",
    birthYear: 1711,
    deathYear: 1776,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Painting_of_David_Hume.jpg"),
    themes: ["epistemology", "ethics", "religion"],
    shortSummary:
      "Hume took empiricism to its limit and found that almost nothing we thought we knew was as well-grounded as we'd assumed — including causation, the self, and the inference from past to future. He was cheerful about it.",
    fullBody: `Hume's *Treatise of Human Nature* (1739–40) was the most ambitious work of an unknown twenty-eight-year-old in eighteenth-century Scotland, and it "fell dead-born from the press" — his words. He spent the rest of his life re-presenting its arguments in more accessible form (*Enquiries*, 1748 and 1751) and being correctly recognized as one of the major philosophers in any tradition.

The problem of *induction*: we infer that the future will resemble the past, but the inference cannot be justified by reason (it's not a logical truth) or by experience (using past experience to justify trust in past-future similarity is circular). What we are doing when we make such inferences is habit, not reasoning. This does not stop the inferences from being useful, but it does stop them from being rationally certified.

The problem of *causation*: when we observe one billiard ball striking another and the second moving, what we actually see is two events in succession. We never observe a *causal power* connecting them. The idea of causation, on Hume's analysis, is a habit of expectation projected onto events that exhibit constant conjunction.

The problem of the *self*: when Hume introspects, he finds particular perceptions — heat, hunger, pleasure, an idea of a book — but never an underlying "self" that has them. The self, he concludes, is a "bundle of perceptions," not a substantial entity behind them. Buddhists got there a millennium earlier.

The ethical turn: in Book III of the *Treatise*, Hume argues that you cannot derive an "ought" from an "is." Moral judgments are not statements of fact about the world; they are expressions of moral sentiment, refined and corrected by social interaction. Hume is not a moral subjectivist in the easy sense — sentiment, properly cultivated, tracks something real — but he is committed to morality being grounded in human nature rather than in some external moral order.

His attack on religious miracles (*Enquiry* X) and his posthumous *Dialogues Concerning Natural Religion* (1779) are still among the sharpest critiques of theistic argument anyone has written.`,
    sources: [
      { title: "David Hume (SEP)", cite: "Morris, W. & Brown, C. SEP entry 'David Hume'", url: "https://plato.stanford.edu/entries/hume/" },
    ],
  },
  {
    id: "rousseau",
    slug: "rousseau",
    name: "Jean-Jacques Rousseau",
    birthYear: 1712,
    deathYear: 1778,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Jean-Jacques_Rousseau_(painted_portrait).jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Rousseau wrote that man is born free but is everywhere in chains, and the proposed remedy — the general will, expressed through democratic self-government — is one of the most consequential and contested ideas in political thought.",
    fullBody: `Rousseau is the most paradoxical figure of the Enlightenment — committed to reason but suspicious of the philosophes, an advocate of education who abandoned his own children, a defender of nature against the corruption of society. The contradictions are part of why he matters.

His *Discourse on the Origin of Inequality* (1755) argues that pre-social humans, in a hypothetical state of nature, were free and equal. The development of property, division of labor, and political institutions produced inequalities that society then naturalized. This is not a literal anthropology; it is a critical mirror held up to eighteenth-century European societies and their claims to civilization.

*The Social Contract* (1762) opens with the most quoted line of political philosophy: "Man is born free, and everywhere he is in chains." His proposed answer is the *general will* — the collective sovereignty of citizens who, in willing the common good, will both freely and as one. The general will is not the same as the will of the majority; it is what an idealized citizen body would will if it deliberated well.

The reception has been split for two centuries. Liberal critics worry that the general will licenses tyranny — anyone resisting can be told they don't really understand their own freedom. Defenders argue that Rousseau means something more demanding: a polity in which the conditions for genuine collective self-rule have been met, with everything that requires (rough material equality, civic education, small scale).

*Emile* (1762) is his treatise on education, and *Confessions* (posthumous, 1782) is the first modern autobiography in something like the form the genre has kept. Both shaped Romanticism more than Enlightenment.`,
    sources: [
      { title: "Jean Jacques Rousseau (SEP)", cite: "Bertram, C. SEP entry 'Jean Jacques Rousseau'", url: "https://plato.stanford.edu/entries/rousseau/" },
    ],
  },
  {
    id: "smith",
    slug: "adam-smith",
    name: "Adam Smith",
    birthYear: 1723,
    deathYear: 1790,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("AdamSmith.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Adam Smith wrote two books. The first, on moral sentiments, argued that human ethics rests on natural sympathy. The second, on the wealth of nations, founded modern economics. Smith thought they were two halves of the same project; nearly everyone since has remembered only one.",
    fullBody: `*The Theory of Moral Sentiments* (1759) makes Smith's ethical case. We naturally project ourselves into others' situations, feel what we imagine they feel, and adjust our own conduct partly through the imagined judgment of an *impartial spectator*. Morality, on this account, is grounded not in abstract reason but in the social structure of sympathy — *sympathy* in the eighteenth-century sense of fellow-feeling, not modern compassion.

*The Wealth of Nations* (1776) is the founding text of economics, and the famous *invisible hand* (IV.ii.9) is the most quoted phrase in the social sciences. Individuals pursuing their own interests, in conditions of free exchange, are led "as if by an invisible hand" to promote outcomes — efficient resource allocation, increased aggregate wealth — that none specifically intended. Markets, on the right conditions, can convert self-interest into broad benefit.

Smith is regularly misappropriated by partisans on both sides. He was not a libertarian: he favored progressive taxation, public education, regulation of banking, and was acutely concerned about the dulling effects of repetitive labor on factory workers (*WN* V.i.f.50). He was also not a socialist: he thought markets were genuinely productive and that government interference was usually clumsy.

The two books fit together if you read them. *Sentiments* is about how individuals are formed into moral beings by social life; *Wealth* is about how the institutional structure of an economy channels the resulting agents' choices. The ethics constrains what kind of economy is desirable; the economics describes how the desirable kind operates.`,
    sources: [
      { title: "Adam Smith's Moral and Political Philosophy (SEP)", cite: "Fleischacker, S. SEP entry", url: "https://plato.stanford.edu/entries/smith-moral-political/" },
    ],
  },
  {
    id: "wollstonecraft",
    slug: "wollstonecraft",
    name: "Mary Wollstonecraft",
    birthYear: 1759,
    deathYear: 1797,
    region: "european",
    era: "early-modern",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Mary_Wollstonecraft_by_John_Opie_(c._1797).jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Wollstonecraft wrote that if rationality is the basis of moral standing — as her Enlightenment contemporaries kept insisting — then denying women education and equal rights was straightforwardly incoherent. The argument is harder to evade than its dismissal suggests.",
    fullBody: `*A Vindication of the Rights of Woman* (1792) takes Enlightenment premises seriously and applies them where the philosophes did not. Reason, her contemporaries insisted, is the basis of moral and political standing. Women, those same contemporaries insisted, were incapable of full reason — a defect attributed variously to nature and to upbringing. Wollstonecraft's argument is structurally simple and rhetorically merciless: either reason really is the basis of standing, in which case women's rational capacities need to be cultivated and recognized; or it isn't, in which case the whole Enlightenment claim against arbitrary authority collapses.

She is hardest on Rousseau, whom she had read closely and admired in many ways. *Emile* prescribes a vigorous rational education for boys and an education for girls oriented entirely around pleasing men. Wollstonecraft takes the contradiction apart in detail (*Vindication* Ch. 5).

Her *Vindication of the Rights of Men* (1790) — published earlier, in reply to Burke's defense of monarchy — is the more polemical work. The second *Vindication* is the philosophical one. She died at thirty-eight from complications of childbirth; her daughter, Mary Shelley, wrote *Frankenstein*.`,
    sources: [
      { title: "Mary Wollstonecraft (SEP)", cite: "Tomaselli, S. SEP entry 'Mary Wollstonecraft'", url: "https://plato.stanford.edu/entries/wollstonecraft/" },
    ],
  },
  {
    id: "kant",
    slug: "kant",
    name: "Immanuel Kant",
    birthYear: 1724,
    deathYear: 1804,
    region: "european",
    era: "early-modern",
    difficulty: "advanced",
    readingTimeMinutes: 7,
    imageUrl: wikiImage("Immanuel_Kant_(painted_portrait).jpg"),
    themes: ["epistemology", "ethics", "metaphysics"],
    shortSummary:
      "Kant tried to settle the rationalism/empiricism dispute by showing that both sides were half right — that knowledge requires both the structure the mind imposes and the data the world supplies. The result is the most important philosophical system of the modern era, and the hardest to read.",
    fullBody: `Hume, Kant said, "interrupted my dogmatic slumber." The *Critique of Pure Reason* (1781, 2nd ed. 1787) is the answer. Where rationalists insisted that genuine knowledge comes from pure reason, and empiricists insisted that it comes from experience, Kant argued that knowledge of objects — empirical knowledge — requires both: the *forms* of intuition (space and time) and the *categories* of the understanding (substance, causation, etc.) that the mind brings to experience, plus the sensory data that experience supplies.

This is the *Copernican turn*. Rather than asking how the mind conforms to objects, Kant asks how objects conform to the mind — that is, what conditions any object of experience must meet in order to be experienceable at all. The categories are those conditions. Hume was right that we can't derive causation from experience; Kant's answer is that we don't need to, because causation is a precondition of experience structuring it in advance.

The cost is steep. We can know objects only as they *appear* to us (*phenomena*), never as they are in themselves (*noumena*). Traditional metaphysics — soul, God, world as a whole — concerns objects beyond possible experience and is therefore not knowable, though we may have practical reasons to commit to some of those concepts.

The *Groundwork of the Metaphysics of Morals* (1785) develops the ethical side. The *categorical imperative* — "act only on a maxim you could will to be a universal law" (*GMM* 4:421), and "treat humanity always as an end, never merely as a means" (*GMM* 4:429) — is what reason demands of any agent acting morally. Morality, Kant argues, is not grounded in consequences, sentiment, or divine command; it is grounded in the requirements of practical reason itself.

*Critique of Practical Reason* (1788) and *Critique of Judgment* (1790) complete the system. The latter — on beauty, the sublime, and teleological judgment — is where contemporary aesthetics begins.

Kant's reception is the next two centuries of European philosophy. Fichte, Schelling, Hegel develop one branch; Schopenhauer, the pragmatists, the neo-Kantians develop another. Even philosophers who reject him — Nietzsche, the logical positivists, the existentialists — are arguing with him.`,
    sources: [
      { title: "Immanuel Kant (SEP)", cite: "Rohlf, M. SEP entry 'Immanuel Kant'", url: "https://plato.stanford.edu/entries/kant/" },
    ],
  },
];
