import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Patristic, Christian medieval, Islamic Golden Age, Jewish medieval.
export const MEDIEVAL: Philosopher[] = [
  {
    id: "augustine",
    slug: "augustine",
    name: "Augustine of Hippo",
    birthYear: 354,
    deathYear: 430,
    region: "european",
    era: "medieval",
    difficulty: "intermediate",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Saint_Augustine_by_Philippe_de_Champaigne.jpg"),
    themes: ["religion", "ethics", "metaphysics"],
    shortSummary:
      "Augustine invented the inner life as Western philosophy now uses it. The Confessions are the first sustained self-examination in literature, and the questions they pose — about memory, time, will, evil — set the agenda for the next thousand years.",
    fullBody: `Augustine wrote the *Confessions* (c. 397–400) as an address to God, but what he produced was the first sustained inquiry into the inner life as something with its own structure and difficulty. Memory, attention, desire, self-deception — all of these are philosophical objects after Augustine in a way they weren't before.

His mature theology pulled Platonism and Christianity into a single system that dominated Western thought through the medieval period. The Form of the Good became God; the soul's ascent became salvation; the cave became the fallen world. From Plotinus he took the structure; from Christianity the historical claims and the ethical weight.

The hard problems he names are still hard. *On Free Choice of the Will* asks how a good God's creation can contain evil — Augustine's answer (evil is a privation, not a substance) shaped every later theodicy. *Confessions* XI asks what time is, given that the past no longer exists, the future doesn't yet, and the present has no extension. His tentative answer — time is a *distention of the soul* — is closer to phenomenology than to physics, and it shows.

The *City of God* (413–426), written after Rome's sack, separates the political community from the moral one and gives Christianity a way to be at home in a world that didn't have to be Christian.`,
    sources: [
      { title: "Augustine (SEP)", cite: "Mendelson, M. SEP entry 'Saint Augustine'", url: "https://plato.stanford.edu/entries/augustine/" },
    ],
  },
  {
    id: "boethius",
    slug: "boethius",
    name: "Boethius",
    birthYear: 480,
    deathYear: 524,
    region: "european",
    era: "medieval",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Boethius_imprisoned_Consolation_of_philosophy_1385.jpg"),
    themes: ["metaphysics", "ethics"],
    shortSummary:
      "Boethius wrote The Consolation of Philosophy while waiting to be executed. It is the most widely read philosophical book in Europe between Augustine and Aquinas — and it imagines philosophy itself, as a woman, visiting the cell.",
    fullBody: `Boethius was a Roman senator who served Theodoric the Ostrogoth and was charged with treason in 523. While awaiting execution he wrote *De Consolatione Philosophiae* — a dialogue in alternating prose and verse in which Lady Philosophy visits his cell and walks him out of his self-pity. It became the most widely read philosophical book of the Middle Ages; Alfred the Great, Chaucer, and Elizabeth I all translated it.

The arguments are largely Platonic and Stoic, but the dramatic situation does the moral work. Fortune, Philosophy tells him, never promised stability; the only good that genuinely belongs to you is the kind no one can take. The famous wheel of Fortune image is from Book II — turning, indifferent, owing you nothing.

Boethius also translated Aristotle's logic into Latin, which is partly why anyone in the Latin West knew Aristotle at all before the twelfth century. The translations are dry; the *Consolation* is not.`,
    sources: [
      { title: "Boethius (SEP)", cite: "Marenbon, J. SEP entry 'Boethius'", url: "https://plato.stanford.edu/entries/boethius/" },
    ],
  },
  {
    id: "anselm",
    slug: "anselm",
    name: "Anselm of Canterbury",
    birthYear: 1033,
    deathYear: 1109,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Cathedral_of_Canterbury_-_Anselmus.jpg"),
    themes: ["religion", "metaphysics", "logic"],
    shortSummary:
      "Anselm produced the ontological argument — the attempt to prove God exists from the concept alone, with no help from observation. It has never quite worked and never quite died.",
    fullBody: `Anselm's *Proslogion* (1078) presents one of the strangest arguments in philosophy. God is "that than which nothing greater can be thought." A being that exists only in the mind is less great than one that exists in reality. Therefore God, the greatest conceivable being, must exist in reality. To deny it is to contradict yourself.

Almost everyone who reads the argument is convinced something is wrong with it. Gaunilo, a contemporary monk, objected with a "perfect island" parody: by the same logic, the greatest conceivable island must exist. Kant, six centuries later, gave the standard modern response — *existence is not a predicate*, not a property that beings can have more or less of. To say something exists is not to add a feature to its description but to assert its instantiation.

And yet the argument keeps coming back. Gödel produced a formalized modal version. Alvin Plantinga revived it in the twentieth century. Even those who reject the argument tend to find that locating the exact mistake is harder than it looks. That is, at minimum, philosophically interesting.`,
    sources: [
      { title: "Saint Anselm (SEP)", cite: "Williams, T. SEP entry 'Saint Anselm'", url: "https://plato.stanford.edu/entries/anselm/" },
    ],
  },
  {
    id: "aquinas",
    slug: "aquinas",
    name: "Thomas Aquinas",
    birthYear: 1225,
    deathYear: 1274,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("St-thomas-aquinas.jpg"),
    themes: ["religion", "metaphysics", "ethics"],
    shortSummary:
      "Aquinas spent his life arguing that Aristotle's philosophy and Christian theology, taken seriously, didn't conflict — they completed each other. The Summa Theologica is the monument to that wager, and Catholic philosophy has never quite left it.",
    fullBody: `When Aquinas began writing in the mid-thirteenth century, Aristotle's full corpus was newly available in Latin via Arabic intermediaries (especially Averroes), and there was no settled view of how to reconcile it with Christian doctrine. The Franciscan tradition, following Augustine, was suspicious of Aristotle. The Latin Averroists embraced him so fully they accepted some conclusions that conflicted with theology. Aquinas argued for a third path: Aristotle's natural philosophy is largely correct; faith and reason address different questions and do not, properly understood, contradict.

The *Summa Theologica* (1265–1274, left unfinished) is the result — a vast catechism-shaped treatise covering God, creation, ethics, law, the sacraments. The Five Ways (*ST* I, q.2, a.3) — five arguments for God's existence — are the most famous passage. Aquinas thinks none of them, on its own, gives you the God of revelation; they get you to something the tradition has called God, and revelation does the rest.

His ethics is virtue-based and Aristotelian, with the addition of *theological* virtues (faith, hope, love) above the cardinal ones. Natural law theory in its classic Catholic form is his: human practical reason can grasp basic moral principles without revelation, because it grasps the structure of human flourishing.

Aquinas was canonized in 1323 and made a Doctor of the Church. His work was officially endorsed by Leo XIII in 1879 and has remained the spine of Catholic philosophy.`,
    sources: [
      { title: "Thomas Aquinas (SEP)", cite: "McInerny, R. & O'Callaghan, J. SEP entry 'Saint Thomas Aquinas'", url: "https://plato.stanford.edu/entries/aquinas/" },
    ],
  },
  {
    id: "scotus",
    slug: "duns-scotus",
    name: "John Duns Scotus",
    birthYear: 1266,
    deathYear: 1308,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Justus_van_Gent_-_John_Duns_Scotus.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Duns Scotus introduced haecceity — 'thisness' — as what makes Socrates this Socrates and not just an instance of human-being. The move opened a route between Aristotelian universals and full nominalism that medieval philosophy spent the next century arguing about.",
    fullBody: `Scotus' central problem is the relation between universals (humanity, dogness) and particulars (Socrates, Fido). Aquinas held that particulars get their individuation from matter — Socrates and Plato share the same form but are different chunks of matter. Scotus thought this couldn't be right; matter alone is too generic to do the work.

His proposal is *haecceitas* — "thisness." Every individual has a unique formal property that is not a universal at all, that makes it this particular thing and not merely an instance of a type. This is technical, but the move matters: it preserves the reality of universals while giving particulars their own metaphysical weight.

Scotus also defended the *univocity of being* — that "being" means the same thing when applied to God and to creatures, against Aquinas' claim that it could only be applied analogically. This sounds dry; in fact it shapes how the entire late-medieval tradition does theology and ontology. Deleuze, in the twentieth century, will revive univocity for very different purposes.`,
    sources: [
      { title: "John Duns Scotus (SEP)", cite: "Williams, T. SEP entry 'John Duns Scotus'", url: "https://plato.stanford.edu/entries/duns-scotus/" },
    ],
  },
  {
    id: "ockham",
    slug: "william-of-ockham",
    name: "William of Ockham",
    birthYear: 1287,
    deathYear: 1347,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("William_of_Ockham.png"),
    themes: ["metaphysics", "logic"],
    shortSummary:
      "Ockham's Razor is the slogan version of a serious metaphysical position: universals don't exist outside the mind, and any explanation that posits more entities than necessary is on shaky ground. The razor has outlived its source.",
    fullBody: `"Plurality is not to be posited without necessity" — the principle now called Ockham's Razor. It is not a single sentence in his work; it's a methodological commitment that runs through everything he wrote. The principle's role is not to settle ontological questions but to put the burden of proof on whoever wants to add to the inventory.

Ockham's substantive metaphysical thesis is *nominalism*: universals (humanity, redness, justice) do not exist outside minds. What exists are particular individuals; "humanity" is a concept that picks out a similarity among them, not a thing they share in. This is the position Plato and Aquinas reject and Scotus complicates; Ockham makes it sharp.

The political and theological consequences were severe. His insistence that God's omnipotence couldn't be constrained by abstract universals helped pull theology away from the Aristotelian synthesis, and contributed to the late-medieval intellectual environment that the Reformation grew out of. The pope tried to have him arrested.`,
    sources: [
      { title: "William of Ockham (SEP)", cite: "Spade, P. SEP entry 'William of Ockham'", url: "https://plato.stanford.edu/entries/ockham/" },
    ],
  },
  // ---- Islamic Golden Age ----
  {
    id: "al-farabi",
    slug: "al-farabi",
    name: "Al-Fārābī",
    birthYear: 872,
    deathYear: 950,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Al-Farabi.jpg"),
    themes: ["politics", "metaphysics", "logic"],
    shortSummary:
      "Al-Fārābī is called the 'Second Teacher' — second, that is, to Aristotle — for synthesizing Greek philosophy with the political and religious life of the Islamic city. His Virtuous City reads as Plato's Republic transposed into Baghdad.",
    fullBody: `Al-Fārābī worked in tenth-century Baghdad and Damascus and produced the first systematic philosophical synthesis in the Arabic tradition. He was called *al-Mu'allim al-Thānī* — the Second Teacher — for his work on Aristotle's logic, and his commentaries shaped how the entire later Islamic and Latin scholastic tradition read the Stagirite.

His political philosophy, in *The Virtuous City* (*al-Madīna al-Fāḍila*), takes Plato's framework — a city ordered by reason, ruled by a philosopher — and asks what role the prophet plays in it. His answer: the prophet is a kind of philosopher-king whose imagination translates philosophical truths into the symbolic language a population can act on. This makes religion something like *philosophy translated for the many*, which is a productive idea and a dangerous one.

He also produced one of the early treatments of music as a philosophical object (*Kitāb al-Mūsīqā al-Kabīr*), and Maimonides and Aquinas both read him carefully.`,
    sources: [
      { title: "Al-Farabi (SEP)", cite: "Adamson, P. SEP entry 'Al-Farabi'", url: "https://plato.stanford.edu/entries/al-farabi/" },
    ],
  },
  {
    id: "avicenna",
    slug: "avicenna",
    name: "Avicenna (Ibn Sīnā)",
    birthYear: 980,
    deathYear: 1037,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("1950_CPA_1497.jpg"),
    themes: ["metaphysics", "mind", "religion"],
    shortSummary:
      "Avicenna was the major philosopher of the Islamic Golden Age and one of the most ambitious metaphysicians who ever lived. His distinction between essence and existence, and the Floating Man thought experiment, are still being argued about.",
    fullBody: `Avicenna's *Kitāb al-Shifāʾ* (*The Book of Healing*) is a philosophical encyclopedia covering logic, natural philosophy, mathematics, and metaphysics. He wrote it in the early eleventh century while serving as a court physician and political advisor in cities across central Asia, often working at night and from memory.

His central metaphysical move is the distinction between *essence* and *existence*. What a thing is (its essence — being a triangle, being a horse) is logically separate from whether it exists. In contingent beings, the two come apart: a horse's essence does not entail that any horses exist. In *one* being — the Necessary Existent — essence and existence are identical, and this is what we mean by God.

The Floating Man (in *Shifāʾ*, Psychology) is the most famous: imagine a person created fully grown, suspended in air, with no sense input — no contact with their own body, no memory, nothing. Avicenna argues that such a being would still be certain of one thing: that it exists. This is six centuries before Descartes and the structure is recognizably similar; whether it's the same argument is contested.

He shaped Aquinas, who treats him as a major interlocutor, and Mulla Sadra, who builds on him in the Persian tradition into the seventeenth century.`,
    sources: [
      { title: "Avicenna (SEP)", cite: "McGinnis, J. SEP entry 'Ibn Sina [Avicenna]'", url: "https://plato.stanford.edu/entries/ibn-sina/" },
    ],
  },
  {
    id: "al-ghazali",
    slug: "al-ghazali",
    name: "Al-Ghazālī",
    birthYear: 1058,
    deathYear: 1111,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Al-Ghazali_Maghazi_Manuscript.jpg"),
    themes: ["religion", "epistemology"],
    shortSummary:
      "Al-Ghazālī's Incoherence of the Philosophers was the most devastating critique of Islamic Aristotelianism, and arguably ended its dominance. Then he went silent for ten years, came back, and wrote one of the great spiritual autobiographies of any tradition.",
    fullBody: `Al-Ghazālī was a star theologian in Baghdad — head of the prestigious Niẓāmiyya madrasa — when he had what would now be called a spiritual breakdown. He left his post in 1095, traveled for a decade, lived in seclusion in Damascus and Jerusalem, and returned to write the work that made him famous well beyond Islam.

*Tahāfut al-Falāsifa* (*The Incoherence of the Philosophers*, c. 1095) is a point-by-point demolition of the Aristotelian-Avicennan philosophical system on twenty issues, focusing on three he calls grounds for declaring philosophers unbelievers: the eternity of the world, God's knowledge of particulars, and the resurrection of the body. The arguments are technical and sharp, and they shifted the center of gravity in Islamic intellectual life away from *falsafa* and toward theology and Sufism.

*The Deliverance from Error* (*al-Munqidh min al-Ḍalāl*) is his autobiography of the crisis. It is also one of the earliest examples of the skeptical method later associated with Descartes: he doubts his way through theologians, philosophers, Ismailis, and Sufis, looking for a foundation that survives. He finds it, on his account, in direct mystical experience — which philosophy can describe but cannot replace.`,
    sources: [
      { title: "Al-Ghazali (SEP)", cite: "Griffel, F. SEP entry 'Al-Ghazali'", url: "https://plato.stanford.edu/entries/al-ghazali/" },
    ],
  },
  {
    id: "averroes",
    slug: "averroes",
    name: "Averroes (Ibn Rushd)",
    birthYear: 1126,
    deathYear: 1198,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("AverroesColor.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Averroes wrote the most influential commentaries on Aristotle of the medieval era and answered al-Ghazālī with The Incoherence of the Incoherence. In Latin Europe he was 'the Commentator' — the philosopher you cited when you cited Aristotle.",
    fullBody: `Ibn Rushd of Córdoba was a judge, court physician, and the major Aristotelian of his generation. He wrote three levels of commentary on most of Aristotle's surviving works — short, middle, and long — and the long commentaries became the standard reference in Latin Europe for centuries. Aquinas calls him simply "the Commentator."

His reply to al-Ghazālī, *Tahāfut al-Tahāfut* (*The Incoherence of the Incoherence*), defends philosophy by showing — in his view — that al-Ghazālī had misread Aristotle and the philosophers, and that the apparent contradictions with theology dissolve under careful interpretation. The defense did not prevail in the Islamic East; in the Latin West it created a current called Latin Averroism that the Church spent two centuries trying to suppress.

Averroes' position on the relation between philosophy and revelation (in *Faṣl al-Maqāl*, *Decisive Treatise*) is more careful than the caricature: philosophical truth and religious truth, properly understood, agree; where they appear to conflict, the religious text should be interpreted allegorically. This formula will be picked up by Maimonides, Aquinas, and Spinoza in different ways.`,
    sources: [
      { title: "Ibn Rushd (SEP)", cite: "Taylor, R. & Adamson, P. SEP entry 'Ibn Rushd'", url: "https://plato.stanford.edu/entries/ibn-rushd/" },
    ],
  },
  {
    id: "ibn-arabi",
    slug: "ibn-arabi",
    name: "Ibn ʿArabī",
    birthYear: 1165,
    deathYear: 1240,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Mohyiddin_ibn_Arabi.png"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Ibn ʿArabī is the Andalusian mystic-philosopher who pushed Islamic Neoplatonism to its limit: God is not a being that exists alongside other beings; God is the only Real, and what we call creation is the self-disclosure of the divine to itself.",
    fullBody: `Ibn ʿArabī, born in Murcia in 1165, is the central figure of philosophical Sufism. His enormous *al-Futūḥāt al-Makkiyya* (*The Meccan Revelations*) and the more compact *Fuṣūṣ al-Ḥikam* (*The Bezels of Wisdom*) develop a metaphysical vision built around what later interpreters called *waḥdat al-wujūd* — "the unity of being."

The thesis, stated carefully: there is only one Real. Creation is not a separate set of things alongside God; it is the *self-disclosure* (*tajallī*) of the One in the manifold forms in which it appears to itself. The mystical path is the recognition of this — not as a doctrine to be asserted but as the reality from which the asserter has been distracted.

Ibn ʿArabī is technical, dense, and produced an entire interpretive school after him (the Akbarī tradition). Mulla Sadra synthesizes him with Avicennan philosophy in seventeenth-century Iran; in the modern era, Henry Corbin's readings made him part of comparative religion.`,
    sources: [
      { title: "Ibn Arabi (SEP)", cite: "Knysh, A. SEP entry 'Ibn Arabi'", url: "https://plato.stanford.edu/entries/ibn-arabi/" },
    ],
  },
  {
    id: "maimonides",
    slug: "maimonides",
    name: "Maimonides",
    birthYear: 1138,
    deathYear: 1204,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Maimonides-2.jpg"),
    themes: ["religion", "metaphysics", "ethics"],
    shortSummary:
      "Maimonides wrote The Guide of the Perplexed for educated Jews who couldn't square Aristotle with their tradition. His answer — interpret the tradition philosophically, name what is poetry as poetry — set the agenda for Jewish thought down to the present.",
    fullBody: `Moses ben Maimon — Maimonides in the Greek-Latin spelling — lived in Córdoba, Fez, and finally Cairo, where he served as court physician to Saladin. He wrote the *Mishneh Torah*, a comprehensive code of Jewish law, and the *Guide of the Perplexed* (1190), a philosophical work addressed in Arabic to readers caught between rabbinic tradition and Aristotelian philosophy.

The *Guide* argues that anthropomorphic descriptions of God in scripture must be read allegorically — God has no body, no location, no passions in any literal sense. God's nature is so beyond human understanding that strictly speaking we can only say what God is *not* (the "negative theology" tradition). Where Aristotle conflicts with revelation — the eternity of the world is his standout case — Maimonides treats the philosophical arguments as inconclusive and accepts the religious teaching.

His ethics combines Aristotelian virtue theory with a Talmudic framework. His political philosophy, like al-Fārābī's, locates the prophet between the philosopher and the people. Aquinas read him; Spinoza read him and revolted against him.`,
    sources: [
      { title: "Maimonides (SEP)", cite: "Seeskin, K. SEP entry 'Maimonides'", url: "https://plato.stanford.edu/entries/maimonides/" },
    ],
  },
];
