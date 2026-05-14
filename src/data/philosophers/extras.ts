import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Additional canonical figures across all eras. Keeping entries shorter
// (~2 paragraphs) so I can cover more breadth without bloating the file.
export const EXTRAS: Philosopher[] = [
  // ---- Pre-Socratic / Ancient (extras) ----
  {
    id: "anaxagoras",
    slug: "anaxagoras",
    name: "Anaxagoras",
    birthYear: -500,
    deathYear: -428,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Anaxagoras_Lebiedzki_Rahl.jpg"),
    themes: ["metaphysics"],
    shortSummary:
      "Anaxagoras introduced Mind (Nous) as the principle that orders the cosmos — the first philosopher to propose that an intelligent, non-corporeal cause structures the physical world.",
    fullBody: `Anaxagoras was the first philosopher to bring serious natural philosophy to Athens, where he was eventually prosecuted for impiety (his claim that the sun was a fiery rock larger than the Peloponnese was sufficient evidence). His central innovation: *Nous* (Mind) is a separate principle that initiates and orders the cosmic mixture. Everything else contains "a portion of everything," which is why apparent qualitative change is possible without any genuine creation or destruction.

Socrates, in Plato's *Phaedo* (97b–98b), describes his youthful excitement at reading Anaxagoras and his disappointment that Nous only got the cosmos going and was not invoked to explain why things are arranged for the best. The complaint shaped Plato's own teleological metaphysics.`,
    sources: [{ title: "Anaxagoras (SEP)", cite: "Curd, P. SEP entry 'Anaxagoras'", url: "https://plato.stanford.edu/entries/anaxagoras/" }],
  },
  {
    id: "empedocles",
    slug: "empedocles",
    name: "Empedocles",
    birthYear: -494,
    deathYear: -434,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Empedocles_in_Thomas_Stanley_History_of_Philosophy.jpg"),
    themes: ["metaphysics"],
    shortSummary:
      "Empedocles introduced the four elements — earth, water, air, fire — combined and separated by Love and Strife. He also claimed to be a god and, legend says, threw himself into Mount Etna to confirm it.",
    fullBody: `Empedocles' surviving fragments come from two poems, *On Nature* and *Purifications*. His cosmology: four elemental "roots" (earth, water, air, fire) are eternal; they combine and separate under the alternating action of *Philia* (Love) and *Neikos* (Strife). The four-element scheme, modified by Aristotle, dominated Western natural philosophy until the early modern era.

The *Purifications* are stranger — about transmigration of souls, taboos, and the path of purification. Diogenes Laertius reports the legend of his death by leap into Mount Etna; whether he believed himself divine or was tragic-comically misunderstood is a question for two and a half thousand years.`,
    sources: [{ title: "Empedocles (SEP)", cite: "Parry, R. SEP entry 'Empedocles'", url: "https://plato.stanford.edu/entries/empedocles/" }],
  },
  {
    id: "gorgias",
    slug: "gorgias",
    name: "Gorgias",
    birthYear: -483,
    deathYear: -375,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["epistemology", "logic"],
    shortSummary:
      "Gorgias of Leontini argued — apparently seriously — that nothing exists, that even if it did we couldn't know it, and that even if we could know it, we couldn't communicate it. The structure of the argument is more interesting than its outrageous conclusions.",
    fullBody: `Gorgias was a Sicilian sophist whose treatise *On the Non-Existent* (or *On Nature*) is preserved in summary by Sextus Empiricus and an anonymous source. The three theses: nothing exists; if anything existed, it could not be known; if anything could be known, it could not be communicated.

Whether the work was meant as serious philosophy or as a rhetorical *tour de force* showing what argumentative virtuosity could achieve is contested. Either way, the structural moves anticipate later skeptical arguments and demonstrate a sophistication that the Platonic caricature of Sophists obscures. His *Encomium of Helen* — defending the abducted queen on the grounds that she was either taken by force, persuaded by speech, struck by love, or fated by gods, and so blameless in any case — is a small masterpiece of forensic rhetoric.`,
    sources: [{ title: "Gorgias (SEP)", cite: "Bonazzi, M. SEP entry 'Protagoras'", url: "https://plato.stanford.edu/entries/protagoras/" }],
  },
  {
    id: "cicero",
    slug: "cicero",
    name: "Cicero",
    birthYear: -106,
    deathYear: -43,
    region: "roman",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("M-T-Cicero.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Cicero was the major Roman transmitter of Greek philosophy to Latin readers and one of the most consequential political theorists of the late Republic. His Latin coinages — qualitas, essentia, individuum — became the European philosophical vocabulary.",
    fullBody: `Cicero translated, paraphrased, and synthesized Greek philosophy for Roman audiences across two dozen surviving works. *De Officiis* (On Duties) is the most influential — a Stoic-leaning treatise on practical ethics that Voltaire still considered "the best book on morals that has ever been written." *De Re Publica* and *De Legibus* extend the Greek inheritance into Roman political theory.

Cicero is sometimes treated as merely a popularizer, but the framing understates his original work. His *Academic* skepticism — moderate, action-permitting — shaped Augustine and the Renaissance humanists. The Latin philosophical vocabulary he invented (*qualitas*, *essentia*, *individuum*, *moralis*) became the European tradition's working terminology.

He was executed by Antony's forces in 43 BCE, having opposed Caesar's heirs in a series of devastating speeches (the *Philippics*).`,
    sources: [{ title: "Cicero (SEP)", cite: "Atkins, J. SEP entry 'Cicero'", url: "https://plato.stanford.edu/entries/cicero/" }],
  },
  // ---- Medieval (extras) ----
  {
    id: "abelard",
    slug: "abelard",
    name: "Peter Abelard",
    birthYear: 1079,
    deathYear: 1142,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Peter_Abelard_(Pierre_Abélard)_-_Project_Gutenberg_eText_12973.jpg"),
    themes: ["logic", "ethics"],
    shortSummary:
      "Abelard was the most brilliant logician of the twelfth century, a defender of conceptualism against medieval realism, and the central figure in one of the most famous love affairs in European literature. The philosophy outlived the scandal.",
    fullBody: `Abelard's solution to the problem of universals — usually called *conceptualism* — argued that universals are neither things in the world (extreme realism) nor merely vocal sounds (extreme nominalism) but *concepts* in the mind, derived from the similarities we abstract from particulars. The position is more careful than either of the extremes it mediates between, and it set the terms of the medieval debate.

His ethics, in *Ethica* (also called *Scito te ipsum* — "Know yourself"), made the intention of the agent central to the moral evaluation of an action — an emphasis closer to Kant than to most of his contemporaries.

The famous biography (the *Historia Calamitatum*, an autobiography in letter form) recounts his clandestine marriage to Heloise, his castration by her uncle's hired thugs, and her career as an abbess and his most rigorous philosophical correspondent. Their letters are themselves a major work of medieval thought.`,
    sources: [{ title: "Peter Abelard (SEP)", cite: "King, P. SEP entry 'Peter Abelard'", url: "https://plato.stanford.edu/entries/abelard/" }],
  },
  // ---- Asian (extras) ----
  {
    id: "mozi",
    slug: "mozi",
    name: "Mozi",
    birthYear: -470,
    deathYear: -391,
    region: "east-asian",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Mozi.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Mozi argued for impartial care (jiān ài) — that we should care for all people equally, not preferentially for our own family — and against the wasteful Confucian rituals he saw as luxuries the people paid for.",
    fullBody: `Mozi led the *Mohist* school, the main rival to Confucianism in early classical Chinese thought. His central ethical claim is *jiān ài* — often translated "universal love" but better rendered as "impartial care" — the view that we should care equally for all people, not preferentially for our own family and clan. The Confucians treated this as monstrous; Mozi argued it was the only consistent position once you took seriously what *rén* (humaneness) is supposed to mean.

His political program was utilitarian in structure: actions and institutions should be evaluated by whether they produce benefit (*lì*) to the people. He opposed elaborate funerals and lengthy mourning periods (which the Confucians supported) on the grounds that they impoverished the living. His arguments against offensive war were among the most rigorous in antiquity.

Mohism was extinguished as a school during the Han dynasty's Confucian consolidation, but its logical and ethical innovations were rediscovered by twentieth-century Chinese philosophers and have been actively studied since.`,
    sources: [{ title: "Mohism (SEP)", cite: "Fraser, C. SEP entry 'Mohism'", url: "https://plato.stanford.edu/entries/mohism/" }],
  },
  {
    id: "ramanuja",
    slug: "ramanuja",
    name: "Rāmānuja",
    birthYear: 1017,
    deathYear: 1137,
    region: "south-asian",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Ramanuja_Sriperumbudur_3.jpg"),
    themes: ["religion", "metaphysics"],
    shortSummary:
      "Rāmānuja challenged Śaṅkara's strict non-dualism from within Vedānta. His Viśiṣṭādvaita — 'qualified non-dualism' — preserves the distinction between selves and Brahman while affirming their deep unity.",
    fullBody: `Rāmānuja's *Śrī Bhāṣya* — his commentary on the *Brahma Sūtras* — gives the systematic statement of *Viśiṣṭādvaita*, "qualified non-dualism." His objection to Śaṅkara: if the apparent plurality of selves is just *māyā*, the Upaniṣadic injunction to *know* Brahman makes no sense — there is no genuine self that could come to know anything. Liberation needs a real relation between real selves and the divine.

The positive proposal: Brahman has reality, and individual selves and the world are real but constituted as the body of which Brahman is the inner controller. The relation is intimate but not identity. Devotion (*bhakti*) and divine grace play larger roles than they do in Śaṅkara's tradition.

Rāmānuja shaped Vaiṣṇavism and remains central to South Indian Hindu philosophical theology.`,
    sources: [{ title: "Ramanuja (SEP)", cite: "SEP entries on Vedānta", url: "https://plato.stanford.edu/entries/ramanuja/" }],
  },
  {
    id: "madhva",
    slug: "madhva",
    name: "Madhva",
    birthYear: 1238,
    deathYear: 1317,
    region: "south-asian",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Madhvacharya.jpg"),
    themes: ["religion", "metaphysics"],
    shortSummary:
      "Madhva is the dualist of Vedānta — Dvaita. Against Śaṅkara and Rāmānuja, he argued that selves, the world, and Brahman are all really distinct, and that the apparent unity of the Upaniṣads has been overread.",
    fullBody: `Madhva (also called Ānandatīrtha) defends *Dvaita Vedānta* — "dualism" — against both Śaṅkara's Advaita and Rāmānuja's Viśiṣṭādvaita. His thesis: the distinctions among Brahman, individual selves, and material reality are real, fundamental, and not to be dissolved by interpretive moves. Liberation is the soul's beatific relation to Viṣṇu (whom Madhva identifies as the supreme being), not its merger with the absolute.

The polemical force of Madhva's writing is the most direct in the Vedānta tradition. His commentaries on the *Brahma Sūtras*, the principal Upaniṣads, and the *Bhagavad Gītā* set up dvaita as the third major school of Vedānta and remain the textual foundation of the tradition.

Modern Indology has, controversially, suggested Madhva sometimes invents source texts to support his readings — an accusation his followers reject. The substantive philosophy is independent of the textual question.`,
    sources: [{ title: "Madhva (SEP)", cite: "SEP entries on Vedānta", url: "https://plato.stanford.edu/entries/madhva/" }],
  },
  {
    id: "suzuki",
    slug: "dt-suzuki",
    name: "D.T. Suzuki",
    birthYear: 1870,
    deathYear: 1966,
    region: "east-asian",
    era: "contemporary",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Daisetsu_Teitaro_Suzuki_Photo.jpg"),
    themes: ["religion", "metaphysics"],
    shortSummary:
      "Suzuki almost single-handedly introduced Zen Buddhism to the English-speaking world. The presentation is often less scholarly than its later academic critics demanded — but the introduction worked, and the field exists in his wake.",
    fullBody: `Daisetz Teitaro Suzuki spent the better part of seven decades translating, explaining, and exemplifying Zen Buddhism for English-language audiences. His *Essays in Zen Buddhism* (1927–1934) and dozens of subsequent books reached a wider readership than any Japanese philosophical figure of the twentieth century.

Academic Buddhology has been critical of Suzuki's presentation — that he over-emphasized the satori (sudden awakening) tradition, that he romanticized Zen's connection to Japanese culture, that he downplayed institutional Buddhism's complicities with Japanese imperialism. The critiques are mostly fair. But the field of comparative philosophy and the Western reception of Buddhism as a serious philosophical interlocutor exist because of him in a way that the critiques have not undone.

He was friends with Erich Fromm, met Carl Jung, influenced John Cage and Thomas Merton, and lived to see Zen become — for better and worse — part of Western intellectual culture.`,
    sources: [{ title: "Daisetz Teitaro Suzuki (SEP)", cite: "SEP entries on Japanese philosophy", url: "https://plato.stanford.edu/entries/japanese-zen/" }],
  },
  {
    id: "nishida",
    slug: "nishida",
    name: "Nishida Kitarō",
    birthYear: 1870,
    deathYear: 1945,
    region: "east-asian",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Kitaro_Nishida.jpg"),
    themes: ["metaphysics", "religion", "mind"],
    shortSummary:
      "Nishida founded the Kyoto School — the major twentieth-century Japanese philosophical movement. His basho (place) is the underlying field of being that contains the dualities of subject and object, being and nothingness.",
    fullBody: `Nishida's *An Inquiry into the Good* (1911) was the first sustained attempt in Japan to do original philosophical work in dialogue with Western traditions while drawing on the resources of Zen Buddhism. His mature philosophy develops the concept of *basho* — "place" or "topos" — as the underlying field within which subject and object, being and nothingness, are differentiated.

The basic move: Western philosophy has often started from a subject confronting an object and tried to bridge the gap. Nishida starts from a more primary unity within which the subject/object distinction is itself a moment, and asks how that unity articulates itself. The structural similarity to Heidegger's Being is real and partly direct.

The Kyoto School (Nishida, Tanabe Hajime, Nishitani Keiji, Watsuji Tetsurō, and others) is the major non-Western contribution to twentieth-century philosophy. Its complicated relationship to Japanese wartime nationalism is the subject of an extensive scholarly literature.`,
    sources: [{ title: "Nishida Kitarō (SEP)", cite: "Maraldo, J. SEP entry 'Nishida Kitarō'", url: "https://plato.stanford.edu/entries/nishida-kitaro/" }],
  },
  // ---- Early modern extras ----
  {
    id: "montaigne",
    slug: "montaigne",
    name: "Michel de Montaigne",
    birthYear: 1533,
    deathYear: 1592,
    region: "european",
    era: "early-modern",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Michel_de_Montaigne_1.jpg"),
    themes: ["ethics", "epistemology"],
    shortSummary:
      "Montaigne invented the essay as a form by asking, repeatedly, the question 'que sais-je?' — what do I know? The answer was much less than the late-Renaissance scholars around him claimed.",
    fullBody: `Montaigne's *Essais* (first published 1580, revised and expanded until his death) are a body of work without obvious precedent. They are short prose explorations of whatever caught his attention — cannibals, friendship, drunkenness, education, smells, the death of a friend, the limits of knowledge — written in a voice that admits the writer's confusion as itself part of the data.

The skeptical motto on his medal — *Que sais-je?* "What do I know?" — names his method. Not the polemical Pyrrhonism of antiquity, but a careful suspension of confident judgment, particularly about other cultures, about religious certainty, and about the various dogmatisms of his age. The essay "Of Cannibals" is among the earliest pieces of European writing to use ethnographic comparison to relativize European pretensions.

Shakespeare read him; so did Pascal (who hated him in print and quoted him constantly); so did Emerson, Nietzsche, and Virginia Woolf. The form itself — the personal, exploratory essay — is his invention.`,
    sources: [{ title: "Michel de Montaigne (SEP)", cite: "Foglia, M. SEP entry 'Michel de Montaigne'", url: "https://plato.stanford.edu/entries/montaigne/" }],
  },
  {
    id: "voltaire",
    slug: "voltaire",
    name: "Voltaire",
    birthYear: 1694,
    deathYear: 1778,
    region: "european",
    era: "early-modern",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Atelier_de_Nicolas_de_Largillière,_portrait_de_Voltaire,_détail_(musée_Carnavalet)_-002.jpg"),
    themes: ["politics", "religion"],
    shortSummary:
      "Voltaire was the most famous public intellectual in eighteenth-century Europe and the era's most consistent enemy of religious intolerance. His philosophical writing is less systematic than his polemic; the polemic is what changed Europe.",
    fullBody: `Voltaire — pen name of François-Marie Arouet — wrote in every form available to him: tragedies, histories, scientific commentaries, the *Philosophical Dictionary*, the *Letters Concerning the English Nation*, and the satire *Candide* (1759) that buried Leibniz's "best of all possible worlds" beneath sustained ridicule.

His most enduring contributions are political. The *Treatise on Toleration* (1763), written after the judicial murder of a Protestant in Catholic Toulouse, is one of the founding texts of European religious liberty. His relentless campaign against the *infâme* — the alliance of priestly authority and political power — shaped the Enlightenment's adversarial stance toward established religion.

Voltaire was not a systematic philosopher, and the academic tradition has sometimes condescended to him on that ground. The condescension misses the scale of what he did. He spent his career arguing in public, and the public partly listened.`,
    sources: [{ title: "Voltaire (SEP)", cite: "Pearson, R. SEP entry 'Voltaire'", url: "https://plato.stanford.edu/entries/voltaire/" }],
  },
  {
    id: "bentham",
    slug: "bentham",
    name: "Jeremy Bentham",
    birthYear: 1748,
    deathYear: 1832,
    region: "european",
    era: "early-modern",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Bentham invented utilitarianism in its classical form: the greatest happiness of the greatest number, calculated where possible, sought always. He designed prisons, drafted constitutions, and asked to be preserved and displayed after his death (he was, and he still is).",
    fullBody: `Bentham's *Introduction to the Principles of Morals and Legislation* (1789) gives the founding statement of classical utilitarianism. The right action — the right law, the right institution — is the one that produces the greatest balance of happiness over suffering for those affected. Bentham hoped this could be made quantitative through what he called the *felicific calculus*; the project has been the source of utilitarianism's analytic power and its persistent objections.

He was a tireless institutional reformer, drafting model legislation on prison reform, electoral law, religious toleration, animal welfare (he was one of the first European philosophers to argue seriously that animal suffering counted morally), and free trade. He designed the Panopticon, the circular prison Foucault later took as the diagram of modern disciplinary power.

He directed in his will that his body be preserved as an "auto-icon" and displayed at University College London, where it has been since 1850. The head, after several incidents, is now stored separately.`,
    sources: [{ title: "Jeremy Bentham (SEP)", cite: "Sweet, W. SEP entry 'Jeremy Bentham'", url: "https://plato.stanford.edu/entries/bentham/" }],
  },
  {
    id: "fichte",
    slug: "fichte",
    name: "J.G. Fichte",
    birthYear: 1762,
    deathYear: 1814,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Johann_Gottlieb_Fichte.jpg"),
    themes: ["metaphysics", "politics"],
    shortSummary:
      "Fichte took Kant's distinction between phenomena and noumena and argued there is no noumenal realm — what we take to be external reality is *posited* by the I in the course of its own self-realization. The move was either the next step after Kant or a wrong turn; Hegel decided which.",
    fullBody: `Fichte's *Wissenschaftslehre* ("Doctrine of Science," in several versions from 1794 onward) is the founding text of post-Kantian German Idealism. His argument: Kant's distinction between phenomena and the unknowable thing-in-itself is unstable. If the thing-in-itself causes our experience, we know causal facts about it, contradicting its unknowability; if it doesn't, it does no explanatory work and should be dropped.

Drop it, and what remains is the *I* — the active, self-positing subject — and whatever it posits in the course of becoming itself. The world we experience is what the I posits as a *not-I* in order to have something to be active *about*. This is more careful than the "world is created by my mind" caricature; the *I* in question is not the empirical individual but a transcendental structure.

Fichte's *Addresses to the German Nation* (1808), delivered under French occupation, made him an early figure in German cultural nationalism — a legacy he had limited control over and which has been the subject of substantial subsequent argument.`,
    sources: [{ title: "Johann Gottlieb Fichte (SEP)", cite: "Breazeale, D. SEP entry 'Johann Gottlieb Fichte'", url: "https://plato.stanford.edu/entries/johann-fichte/" }],
  },
  {
    id: "schelling",
    slug: "schelling",
    name: "F.W.J. Schelling",
    birthYear: 1775,
    deathYear: 1854,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Friedrich_Wilhelm_Joseph_Schelling_1848.jpg"),
    themes: ["metaphysics"],
    shortSummary:
      "Schelling tried, against Fichte, to give nature its own status as a moment in the self-realization of the absolute. His late work on the philosophy of mythology and revelation is now being reread as the unfinished alternative to Hegel.",
    fullBody: `Schelling moved through several phases. The early *Naturphilosophie* (philosophy of nature) defended the view that nature is not merely the inert *not-I* Fichte described, but a self-organizing dynamic system that is itself a manifestation of absolute reason. This influenced Coleridge, Goethe, and the Romantic understanding of nature for a generation.

The middle period — *System of Transcendental Idealism* (1800) — synthesized Fichte's I and his own nature-philosophy into a single account in which the absolute realizes itself through both subjective and objective routes. The *Philosophical Investigations into the Essence of Human Freedom* (1809) is the major work, focusing on freedom, evil, and the limits of rational systems.

The late Schelling — most famously in his Berlin lectures of the 1840s, attended by Kierkegaard, Bakunin, Engels, and Burckhardt — turned against Hegel and developed a "positive philosophy" that insists rational philosophy alone cannot deliver the *that* of existence; existence is given, not deduced. The late lectures, recently reread by figures from Heidegger to Slavoj Žižek, have come to look less like an embarrassing decline and more like an alternative path.`,
    sources: [{ title: "F.W.J. Schelling (SEP)", cite: "Bowie, A. SEP entry 'F.W.J. Schelling'", url: "https://plato.stanford.edu/entries/schelling/" }],
  },
  // ---- 19c / 20c extras ----
  {
    id: "emerson",
    slug: "emerson",
    name: "Ralph Waldo Emerson",
    birthYear: 1803,
    deathYear: 1882,
    region: "american",
    era: "modern",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Emerson founded American Transcendentalism and produced essays — Self-Reliance, Nature, Experience — that shaped Nietzsche, James, Dewey, and the texture of nineteenth-century American intellectual life.",
    fullBody: `Emerson's essays, written across the 1830s, 40s, and 50s, are the founding texts of American Transcendentalism — a loose New England movement, Romantic in inspiration, that drew on German Idealism, the Bhagavad Gītā, Plato, and the Quaker tradition.

"Self-Reliance" (1841) is the most cited, and the most misread. Emerson is not preaching atomistic individualism; he is arguing that the moral authority each person carries needs to be recovered from the social pressures that systematically suppress it. The famous lines ("Whoso would be a man must be a nonconformist"; "A foolish consistency is the hobgoblin of little minds") are recommendations for moral seriousness, not for selfishness.

"Experience" (1844), written after the death of his five-year-old son, is the more philosophically demanding work — a meditation on the unstable conditions under which experience itself is possible. Nietzsche, who read Emerson in German translation as a teenager, kept quoting him for life.`,
    sources: [{ title: "Ralph Waldo Emerson (SEP)", cite: "Goodman, R. SEP entry 'Ralph Waldo Emerson'", url: "https://plato.stanford.edu/entries/emerson/" }],
  },
  {
    id: "du-bois",
    slug: "du-bois",
    name: "W.E.B. Du Bois",
    birthYear: 1868,
    deathYear: 1963,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("W.E.B._Du_Bois_by_James_E._Purdy,_1907.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Du Bois introduced 'double consciousness' as a description of Black experience in America, wrote the first major sociological study of an American city, and lived ninety-five years arguing for racial justice in print and on platforms across three continents.",
    fullBody: `*The Souls of Black Folk* (1903) is Du Bois' best-known book. Its central concept — *double consciousness* — names the structural experience of being Black in America: the sense of always seeing oneself through the eyes of a dominant society that does not quite see you as a fellow self, while also living one's life as a Black American with one's own internal perspective. The doubleness is not a pathology but a structural feature of the position.

*The Philadelphia Negro* (1899) was the first major sociological study of an American city, conducted with a methodological rigor that should have made Du Bois a major figure in American sociology a generation before he was finally credited with it.

Across the next sixty years he wrote against Jim Crow, helped found the NAACP (and later resigned from it twice), edited *The Crisis*, became a Marxist, joined the Communist Party in 1961, and died in Ghana the night before the March on Washington. The arc is one of the more remarkable lives in American intellectual history.`,
    sources: [{ title: "W.E.B. Du Bois (SEP)", cite: "Outlaw, L. SEP entry 'W.E.B. Du Bois'", url: "https://plato.stanford.edu/entries/dubois/" }],
  },
  {
    id: "bergson",
    slug: "bergson",
    name: "Henri Bergson",
    birthYear: 1859,
    deathYear: 1941,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Henri_Bergson_02.jpg"),
    themes: ["metaphysics", "mind"],
    shortSummary:
      "Bergson argued that real time — duration — is a continuous, qualitative flow that mathematical and scientific representation systematically distorts. The argument cost him a famous debate with Einstein and has been quietly vindicated by some twentieth-century philosophy of mind.",
    fullBody: `Bergson's *Time and Free Will* (1889), *Matter and Memory* (1896), and *Creative Evolution* (1907) build a sustained case that the way we ordinarily represent time — as a series of instants on a line — is a falsification of how time actually is. *Duration* (*durée*) is qualitative, continuous, and only secondarily quantifiable; the standard mathematical representation captures the spatialized image and misses the thing.

His debate with Einstein in 1922 over the philosophical interpretation of relativity was widely taken at the time as a defeat for Bergson and an end to his philosophical credibility. The reception has shifted; Deleuze's *Bergsonism* (1966) revived him for the post-structuralist generation, and contemporary philosophy of time has rediscovered some of his concerns.

He won the Nobel Prize in Literature in 1927. He died in 1941 of pneumonia, having stood in line for hours in the cold to register as a Jew under Vichy regulations.`,
    sources: [{ title: "Henri Bergson (SEP)", cite: "Lawlor, L. & Moulard-Leonard, V. SEP entry 'Henri Bergson'", url: "https://plato.stanford.edu/entries/bergson/" }],
  },
  {
    id: "tagore",
    slug: "tagore",
    name: "Rabindranath Tagore",
    birthYear: 1861,
    deathYear: 1941,
    region: "south-asian",
    era: "modern",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Rabindranath_Tagore_in_1909.jpg"),
    themes: ["aesthetics", "ethics", "politics"],
    shortSummary:
      "Tagore was India's most influential modern philosophical voice in the early twentieth century — poet, essayist, educator, anti-imperialist, and critic of the nationalism his own work was sometimes pressed into service for.",
    fullBody: `Tagore won the Nobel Prize in Literature in 1913 — the first non-European to do so — for *Gitanjali*, a collection of poems written in Bengali and rendered into English partly by himself. His prose work, especially the essays in *Nationalism* (1917) and *The Religion of Man* (1931), is what makes him a philosophical figure.

His central arguments cut against the grain of his time. Against rising European and Asian nationalism, he warned that nation-states organized around exclusionary collective identity were a structural threat to human flourishing. Against the colonial framing of "Eastern spirituality" versus "Western materialism," he insisted both traditions had been more capable of mutual learning than the framing allowed.

His correspondence with Gandhi — they admired each other and disagreed substantially — is one of the major documents of twentieth-century Indian thought. His founding of Visva-Bharati University at Santiniketan was an attempt to embody his pedagogical philosophy: education as cultivation of full human capacity in a setting that drew freely from world cultural traditions.`,
    sources: [{ title: "Rabindranath Tagore (SEP)", cite: "Sen, A. (essays); SEP entries on Indian philosophy", url: "https://plato.stanford.edu/entries/tagore/" }],
  },
  // ---- Analytic extras ----
  {
    id: "moore",
    slug: "moore",
    name: "G.E. Moore",
    birthYear: 1873,
    deathYear: 1958,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("George_Edward_Moore_c1914.jpg"),
    themes: ["ethics", "epistemology"],
    shortSummary:
      "Moore's Principia Ethica (1903) attacked 'the naturalistic fallacy' and made good an indefinable simple non-natural property. His defense of common sense — 'here is one hand, and here is another' — is the founding move of much twentieth-century epistemology.",
    fullBody: `Moore's *Principia Ethica* (1903) launched what came to be called metaethics. The *open question argument*: take any naturalistic definition of "good" (say, "good means pleasant") and you can always ask, intelligibly, "is that really good?" If the question is open, the definition was wrong. Moore concludes that *good* is a simple, indefinable, non-natural property. The argument has been criticized in every direction but has shaped the field.

*A Defence of Common Sense* (1925) and *Proof of an External World* (1939) are the founding texts of contemporary anti-skeptical epistemology. Moore famously held up one hand and said "Here is one hand" — held up the other and said "and here is another" — and concluded that the external world exists. The argument is more careful than the gesture suggests: Moore's point is that we have *more* warrant for our ordinary perceptual claims than for any of the skeptical premises that would defeat them.

Moore was a founding figure of analytic philosophy — Russell credited him for the move away from British Idealism — and one of the major voices on the Cambridge intellectual scene that included Russell and Wittgenstein.`,
    sources: [{ title: "G.E. Moore (SEP)", cite: "Preti, C. SEP entry 'George Edward Moore'", url: "https://plato.stanford.edu/entries/moore/" }],
  },
  {
    id: "davidson",
    slug: "davidson",
    name: "Donald Davidson",
    birthYear: 1917,
    deathYear: 2003,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["mind", "logic"],
    shortSummary:
      "Davidson built a unified theory of meaning, action, and mind around the idea of radical interpretation — that understanding a speaker is structurally like translating an alien language with no shared dictionary.",
    fullBody: `Davidson's *Truth and Meaning* (1967) proposed that a theory of meaning for a natural language could be formulated as a Tarski-style theory of truth: the meaning of a sentence is given by the conditions under which it is true. The proposal has been hugely productive in formal semantics.

His *radical interpretation* program asks how we could come to understand a speaker whose language we don't yet share. The answer requires the *principle of charity* — we must assume the speaker's beliefs are largely true and consistent, because without that assumption we can't begin to interpret what they mean. Davidson uses this to argue that radical disagreement of the sort some relativists imagine is in principle impossible: a being whose beliefs were genuinely different from ours in the way relativists describe would be uninterpretable, and therefore not a believer at all.

His "anomalous monism" in philosophy of mind holds that mental events are physical events but that there are no strict laws linking mental and physical descriptions of them. The combination is unusual and has been productive.`,
    sources: [{ title: "Donald Davidson (SEP)", cite: "Malpas, J. SEP entry 'Donald Davidson'", url: "https://plato.stanford.edu/entries/davidson/" }],
  },
  {
    id: "macintyre",
    slug: "macintyre",
    name: "Alasdair MacIntyre",
    birthYear: 1929,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["ethics", "politics"],
    shortSummary:
      "MacIntyre's After Virtue (1981) argued that modern moral discourse is in disrepair because we have inherited fragments of an Aristotelian framework without the framework that made them coherent. Virtue ethics, on his account, has to be recovered through a tradition-embedded practice.",
    fullBody: `*After Virtue* (1981) is one of the most influential works of moral philosophy of the late twentieth century. MacIntyre's diagnosis: contemporary moral debate is interminable because the disputants are drawing on incompatible fragments of moral traditions whose original frameworks they no longer share. We use the language of rights, virtues, and duties as if they were neutral terms, but they came from different traditions with different supporting beliefs, and we have lost the traditions.

The recovery he proposes is a return to Aristotelian-Thomistic virtue ethics — but a recovery that recognizes virtues are sustained by *practices*, *narrative* (the conception of a human life as a unified story), and *tradition* (an ongoing argument among practitioners). *Whose Justice? Which Rationality?* (1988) and *Three Rival Versions of Moral Enquiry* (1990) develop the historical and methodological argument.

MacIntyre's later positions have moved closer to Catholic moral theology, and his work has been read both as a defense of traditional communities and as a Marxist-influenced critique of liberalism. Both readings have textual basis.`,
    sources: [{ title: "Alasdair MacIntyre (SEP)", cite: "Lutz, C. SEP entry 'Alasdair MacIntyre'", url: "https://plato.stanford.edu/entries/macintyre/" }],
  },
  {
    id: "scanlon",
    slug: "scanlon",
    name: "T.M. Scanlon",
    birthYear: 1940,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["ethics", "politics"],
    shortSummary:
      "Scanlon's What We Owe to Each Other (1998) developed contractualism: an act is wrong if it would be disallowed by any set of principles that no one could reasonably reject. The framework is more careful than its slogan and now anchors a major strand of contemporary moral philosophy.",
    fullBody: `Scanlon's contractualism reframes moral wrongness in terms of justifiability *to others*. An act is wrong, on his view, if it would be disallowed by any set of principles for the general regulation of behavior that no one could *reasonably reject* as a basis for informed, unforced general agreement.

The position contrasts with utilitarianism (which aggregates welfare across persons in ways Scanlon thinks violates the separateness of persons) and with Kantian universalizability tests (which Scanlon thinks are not quite the right formal device). Its central concept is *reasonable rejection* — what a person could reasonably refuse to live under, given the impact on their life.

The framework has been productive in normative ethics, in political philosophy, and in applied ethics (especially Scanlon's later work on blame and on tolerance). It now sits alongside utilitarianism and Kantianism as one of the three major normative ethical frameworks taken seriously in contemporary moral philosophy.`,
    sources: [{ title: "Contractualism (SEP)", cite: "Ashford, E. & Mulgan, T. SEP entry 'Contractualism'", url: "https://plato.stanford.edu/entries/contractualism/" }],
  },
  {
    id: "young",
    slug: "iris-marion-young",
    name: "Iris Marion Young",
    birthYear: 1949,
    deathYear: 2006,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["politics", "ethics"],
    shortSummary:
      "Young's Justice and the Politics of Difference (1990) reframed the question of justice around structural injustice — the systemic patterns that disadvantage groups even when no specific individuals are doing wrong.",
    fullBody: `Young's argument: standard distributive theories of justice (Rawls included) focus on the allocation of resources among individuals. They miss the way that injustice often operates at the level of *group structures* — patterns of opportunity, vulnerability, recognition, and norm that disadvantage some groups without requiring any specific individual to act unjustly.

Five "faces of oppression" — exploitation, marginalization, powerlessness, cultural imperialism, and violence — name dimensions along which group-based injustice operates. The framework has been one of the most influential alternatives to distributive frameworks in late-twentieth-century political theory.

Her later *Responsibility for Justice* (2011, published posthumously) develops a *social connection model* of responsibility: when injustice arises from structural processes that many people participate in (sweatshop labor, housing markets, climate change), our responsibility for it is not individual fault but a shared political responsibility to organize collective change.`,
    sources: [{ title: "Iris Marion Young (SEP)", cite: "Allen, A. SEP entry 'Feminist Perspectives on Globalization'", url: "https://plato.stanford.edu/entries/feminism-globalization/" }],
  },
  // ---- Critical theory / contemporary continental extras ----
  {
    id: "benjamin",
    slug: "benjamin",
    name: "Walter Benjamin",
    birthYear: 1892,
    deathYear: 1940,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Walter_Benjamin_vers_1928.jpg"),
    themes: ["aesthetics", "politics", "religion"],
    shortSummary:
      "Benjamin worked at the edge of Marxism, Jewish messianism, and German literary criticism, producing essays — on art, history, photography, mechanical reproduction — that have shaped culture studies and critical theory more than the more systematic Frankfurt School members.",
    fullBody: `Benjamin's most-cited piece is "The Work of Art in the Age of Its Technological Reproducibility" (1936), which traced what mechanical reproduction does to art's *aura* — the singular presence of an artwork in a particular place and time. The argument has shaped every subsequent discussion of art in the age of mass media.

His "Theses on the Philosophy of History" (1940), written months before his death, is the more demanding work. The image of the *Angel of History* — facing the wreckage piling at his feet, blown backward by the storm called progress — is one of the most cited figures in critical theory. Benjamin's argument that history must be read against the grain of the victors, with attention to the dead whose suffering was never officially recorded, has shaped a generation of historians and critics.

He killed himself at the French-Spanish border in September 1940, fleeing Nazi-occupied France with a transit visa that he feared would not be honored. The next day, the rest of his group was let through.`,
    sources: [{ title: "Walter Benjamin (SEP)", cite: "Osborne, P. SEP entry 'Walter Benjamin'", url: "https://plato.stanford.edu/entries/benjamin/" }],
  },
  {
    id: "marcuse",
    slug: "marcuse",
    name: "Herbert Marcuse",
    birthYear: 1898,
    deathYear: 1979,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Herbert_Marcuse_in_Newton,_Massachusetts_1955.jpeg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Marcuse's One-Dimensional Man (1964) argued that advanced industrial society has so absorbed dissent into consumption that genuine opposition has been rendered structurally invisible. The book was the philosophical text of the New Left.",
    fullBody: `Marcuse trained with Heidegger before fleeing Germany; in exile in the United States, he worked with the Frankfurt School and stayed when most of his colleagues returned to Frankfurt after the war. *Eros and Civilization* (1955) used Freud to argue that the repression of desire is not, as Freud thought, a necessary cost of civilization but a contingent feature of *this* civilization that genuine liberation could undo.

*One-Dimensional Man* (1964) is the more famous book. The argument: advanced industrial capitalism has absorbed potential opposition into its consumption circuits so thoroughly that the political imagination has been narrowed to one dimension — the operational and the marketable. Even art and sexuality, traditionally sources of opposition, have been integrated. What remains is partly an account of the difficulty and partly a defense of the marginal positions — students, racial minorities, the unintegrated — from which serious opposition might still come.

He became, in the late 1960s, a frequently cited figure in the New Left. He was less comfortable with the role than the citations suggested.`,
    sources: [{ title: "Herbert Marcuse (SEP)", cite: "Farr, A. SEP entry 'Herbert Marcuse'", url: "https://plato.stanford.edu/entries/marcuse/" }],
  },
  {
    id: "irigaray",
    slug: "irigaray",
    name: "Luce Irigaray",
    birthYear: 1930,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["politics", "metaphysics"],
    shortSummary:
      "Irigaray's Speculum of the Other Woman (1974) argued that Western philosophy has been structured by the systematic erasure of sexual difference — and that imagining a philosophy in which feminine subjectivity has its own positive form (rather than as a defective version of the masculine) is the unfinished project of philosophy.",
    fullBody: `Irigaray trained as a psychoanalyst with Lacan and was expelled from his school after publishing *Speculum of the Other Woman* (1974), which read the canonical Western philosophical tradition — from Plato through Freud — as systematically structured by the assumption that the masculine subject is the norm and the feminine is its lacking shadow.

The proposed alternative: a philosophy that takes *sexual difference* as constitutive rather than as a deviation. This does not mean essentialism in the simple sense (Irigaray spends substantial time complicating that reading); it means refusing to treat one form of subjectivity as the standard against which others are evaluated.

Her work is dense, allusive, and frequently controversial. Whether it is the radical resource defenders take it to be, or merely a sophisticated form of biologism dressed in post-structuralist vocabulary, is one of the live debates in feminist theory.`,
    sources: [{ title: "Luce Irigaray (SEP)", cite: "Stone, A. SEP entry 'Luce Irigaray'", url: "https://plato.stanford.edu/entries/irigaray/" }],
  },
  {
    id: "ranciere",
    slug: "ranciere",
    name: "Jacques Rancière",
    birthYear: 1940,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Jacques_Rancière_2018.jpg"),
    themes: ["politics", "aesthetics"],
    shortSummary:
      "Rancière's politics begins from the radical equality of intelligence: democracy is the disruption that occurs when those who were assumed to have no part in the discussion show up speaking and acting as if they had.",
    fullBody: `Rancière broke with his teacher Louis Althusser in 1974 over the role of the proletariat in Marxist theory — Althusser kept treating workers as needing intellectuals to understand their situation, and Rancière thought this was structurally identical to the relation he was supposed to be critiquing. His subsequent work — *The Ignorant Schoolmaster* (1987), *Disagreement* (1995), *The Emancipated Spectator* (2008) — built around a single axiom: the *equality of intelligences*. Pedagogy that begins from inequality and tries to reduce it ends up reproducing it. Democratic politics that begins from the assumption that some are qualified to speak and others need to be educated first ends up not being democratic.

*Disagreement* defines politics as the moment when those who were *assumed to have no part* — the "part of those who have no part" — speak and act in a way that disrupts the existing distribution of who counts. This is not just a description of revolution; it is, on Rancière's view, what politics *is*. The opposite — what he calls *the police* — is the management of populations that allocates positions and silences claims of equality.`,
    sources: [{ title: "Jacques Rancière (SEP)", cite: "SEP entries on contemporary political philosophy", url: "https://plato.stanford.edu/entries/political-philosophy/" }],
  },
];
