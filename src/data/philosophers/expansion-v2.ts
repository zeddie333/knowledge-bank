import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Round-two additions. Editorial voice consistent with earlier files;
// most entries are 2–3 paragraphs.
export const EXPANSION_V2: Philosopher[] = [
  // ---- Ancient (extras) ----
  {
    id: "chrysippus",
    slug: "chrysippus",
    name: "Chrysippus of Soli",
    birthYear: -279,
    deathYear: -206,
    region: "greek",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Chrysippos_BM_1846.jpg"),
    themes: ["logic", "ethics", "metaphysics"],
    shortSummary:
      "If Zeno founded Stoicism, Chrysippus is the philosopher who made the system work. He wrote some 700 treatises, almost all lost; what survived as 'Stoicism' for two thousand years is largely his.",
    fullBody: `Chrysippus succeeded Cleanthes as the third head of the Stoa around 230 BCE and put the school's doctrines into the form that would persist. He developed propositional logic — independently of and at a higher level of formal rigor than Aristotle's syllogistic — including conditionals, conjunctions, disjunctions, and a treatment of the indemonstrable inference schemata (modus ponens, modus tollens, and others) that anticipated nineteenth-century work by more than two thousand years.

In ethics he sharpened the distinction between what is genuinely good (only virtue) and what is merely *preferred* (health, wealth, the lives of one's children) — preserving the Stoic claim that the wise person is invulnerable to fortune while making space for ordinary attachments. In physics he developed the Stoic doctrine of universal sympathy and the *logos* that pervades the cosmos. The ancients said: "Without Chrysippus, there would be no Stoa."

Almost nothing of his enormous output survives directly. The reconstruction is from fragments and reports — but enough that contemporary logicians (Bochenski, Mates, Łukasiewicz) recognized his standing as one of the greatest logicians who ever lived.`,
    sources: [
      { title: "Chrysippus (SEP)", cite: "Bobzien, S. SEP entry 'Chrysippus'", url: "https://plato.stanford.edu/entries/chrysippus/" },
    ],
  },
  {
    id: "pyrrho",
    slug: "pyrrho",
    name: "Pyrrho of Elis",
    birthYear: -360,
    deathYear: -270,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Pyrrho_in_Thomas_Stanley_History_of_Philosophy.jpg"),
    themes: ["epistemology", "ethics"],
    shortSummary:
      "Pyrrho founded the most radical school of ancient skepticism. His student Timon left the few surviving traces; the school proper resumed under Aenesidemus and reached full form in Sextus Empiricus. The aim was untroubled tranquility through suspended judgment.",
    fullBody: `Pyrrho left no writings. He traveled with Alexander to India in 326 BCE — where he reportedly encountered the *gymnosophists* (naked philosophers, probably Jain ascetics) — and returned to Elis with the conviction that *nothing can be known* and that recognizing this clearly is the path to *ataraxia* (tranquility).

The system is reconstructed mainly from Sextus Empiricus' *Outlines of Pyrrhonism* (2nd c. CE), seven hundred years later. Three claims structure the position. First, *isostheneia*: for any proposition, opposing arguments can be marshaled with equal force. Second, *epoché*: the only honest response to this is to suspend judgment. Third, *ataraxia* follows — not because suspension produces peace by some psychological mechanism, but because the strain of trying to settle what cannot be settled is itself the source of unrest.

Pyrrhonism has had a long second life. Montaigne read Sextus; Hume took the problem of induction from him; Wittgenstein's later philosophy has a recognizably Pyrrhonist temperament.`,
    sources: [
      { title: "Pyrrho (SEP)", cite: "Bett, R. SEP entry 'Pyrrho'", url: "https://plato.stanford.edu/entries/pyrrho/" },
    ],
  },
  {
    id: "sextus-empiricus",
    slug: "sextus-empiricus",
    name: "Sextus Empiricus",
    birthYear: 160,
    deathYear: 210,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["epistemology", "logic"],
    shortSummary:
      "Sextus Empiricus is the source for almost everything we know about ancient skepticism. His Outlines of Pyrrhonism is the most rigorous skeptical text from antiquity — and Hume read it carefully.",
    fullBody: `Sextus was a physician of the empirical medical school and the last major Pyrrhonist of the ancient world. His three surviving works — *Outlines of Pyrrhonism*, *Against the Logicians*, and *Against the Mathematicians* — preserve more of ancient skepticism than any other source.

The Outlines is the methodical version. Sextus catalogues the *tropes* — patterns of argument that produce suspension of judgment — and applies them domain by domain to logic, ethics, theology, mathematics, grammar, music. The cumulative effect is one of the most thorough skeptical exercises in any tradition. Crucially, Sextus does not assert that knowledge is impossible (which would be a dogmatic claim); he reports the suspension of judgment as a *practical attitude* that has produced tranquility in those who maintain it.

The rediscovery of Sextus' Greek manuscript by Renaissance humanists — Henri Estienne published a Latin translation in 1562 — was one of the more consequential events in the prehistory of modern philosophy. Descartes' Method, Hume's *Enquiry*, and Bayle's *Dictionary* all bear Sextus' imprint.`,
    sources: [
      { title: "Sextus Empiricus (SEP)", cite: "Bett, R. SEP entry 'Sextus Empiricus'", url: "https://plato.stanford.edu/entries/sextus-empiricus/" },
    ],
  },
  {
    id: "hypatia",
    slug: "hypatia",
    name: "Hypatia of Alexandria",
    birthYear: 350,
    deathYear: 415,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Hypatia_portrait.png"),
    themes: ["metaphysics", "logic"],
    shortSummary:
      "Hypatia headed the Neoplatonist school in Alexandria, taught mathematics and astronomy to a generation of pagan and Christian students, and was murdered by a Christian mob in 415 — a turning point in the city's transition from antiquity to the early Christian era.",
    fullBody: `Hypatia was the daughter of the mathematician Theon, the last attested member of the Library of Alexandria, and herself a major teacher in the Neoplatonist tradition. Her surviving works are lost; what we have are letters from her student Synesius of Cyrene, who became a Christian bishop while remaining her devoted correspondent.

She produced commentaries on Diophantus, Apollonius, and Ptolemy — the technical mathematical and astronomical works of late antiquity — and is reported to have taught a syncretic curriculum that combined Plato, Aristotle, and the Neoplatonic emanationist framework. Her students were drawn from both pagan and Christian elites in a city whose religious situation was becoming impossibly fraught.

Her murder by a mob loosely affiliated with the Patriarch Cyril in 415 — she was dragged from her chariot, beaten, and dismembered — has been read variously as a religious atrocity, a political assassination, or a symbol of the closing of the ancient pagan philosophical schools. Whatever the specific motives, her death belongs to the history of the moment when classical philosophy's institutional infrastructure was no longer politically viable.`,
    sources: [
      { title: "Hypatia (SEP)", cite: "Watts, E. SEP entry 'Hypatia'", url: "https://plato.stanford.edu/entries/hypatia/" },
    ],
  },
  // ---- Medieval ----
  {
    id: "eriugena",
    slug: "john-scotus-eriugena",
    name: "John Scotus Eriugena",
    birthYear: 815,
    deathYear: 877,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Eriugena.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Eriugena translated the Greek Christian Neoplatonists into Latin and wrote, in the Periphyseon, the most ambitious cosmological system of the early Middle Ages. The Church condemned the book three centuries after his death.",
    fullBody: `John Scotus Eriugena ("Irishman" — his name reflects his origin) worked at the court of Charles the Bald in the ninth century. His major translation — the corpus of Pseudo-Dionysius the Areopagite — gave the Latin West its first sustained access to the apophatic theology and Neoplatonic emanationism that had developed in the Greek Christian East.

His *Periphyseon* (or *De Divisione Naturae*, c. 867) is the more original work. The system distinguishes four divisions of "nature": (1) nature that creates and is not created (God as source); (2) nature that creates and is created (the divine Ideas); (3) nature that is created and does not create (the physical world); (4) nature that neither creates nor is created (God as final goal). The whole universe is a procession from and return to God, with each level fully real and yet entirely contingent on the next.

The work was condemned at the Synod of Sens in 1210 — the Church found its tendencies too close to pantheism. The condemnation didn't stop later mystics from reading it; Meister Eckhart, Nicholas of Cusa, and the Florentine Platonists all drew on Eriugena's vocabulary.`,
    sources: [
      { title: "John Scottus Eriugena (SEP)", cite: "Moran, D. SEP entry", url: "https://plato.stanford.edu/entries/scottus-eriugena/" },
    ],
  },
  {
    id: "hildegard",
    slug: "hildegard-of-bingen",
    name: "Hildegard of Bingen",
    birthYear: 1098,
    deathYear: 1179,
    region: "european",
    era: "medieval",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Hildegard.jpg"),
    themes: ["religion", "aesthetics"],
    shortSummary:
      "Hildegard of Bingen was a twelfth-century abbess, mystic, composer, natural philosopher, and the first woman granted official permission by the Pope to write theology. Her recorded visions — and the systematic theology she built from them — remain singular.",
    fullBody: `Hildegard founded the monastery at Rupertsberg in 1150, composed one of the largest surviving bodies of medieval monophonic music under any single name, and produced three major theological works — *Scivias*, *Liber Vitae Meritorum*, and *Liber Divinorum Operum* — that present her visions of God's relation to creation as a structured cosmological theology.

Her natural-philosophical works (*Physica*, *Causae et Curae*) covered herbs, minerals, animals, and the medical theory of the day with a precision that has earned her belated recognition in the history of science. The *viriditas* ("greenness") that runs throughout her writing is a name for the divine life-force that animates the world — the closest medieval Latin theology gets to a vitalist principle.

She was canonized in 2012 — eight and a half centuries after her death — and named a Doctor of the Church the same year, the fourth woman so designated.`,
    sources: [
      { title: "Hildegard of Bingen (SEP)", cite: "Pernoud, R. SEP entry 'Hildegard of Bingen'", url: "https://plato.stanford.edu/entries/hildegard/" },
    ],
  },
  {
    id: "eckhart",
    slug: "meister-eckhart",
    name: "Meister Eckhart",
    birthYear: 1260,
    deathYear: 1328,
    region: "european",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Meister_Eckhart_Statue.jpg"),
    themes: ["religion", "metaphysics"],
    shortSummary:
      "Eckhart is the major German Christian mystic of the Middle Ages. His vernacular German sermons — preached and circulated widely — pushed the apophatic tradition to claims the Inquisition found difficult to ignore.",
    fullBody: `Eckhart was a Dominican theologian, twice professor at Paris, and prior of the Order in Saxony. His Latin theological works — particularly the unfinished *Opus Tripartitum* — sit within the Thomistic-Aristotelian mainstream. His German sermons are what made him famous and what brought him to the attention of the Inquisition.

The central claims: God's *ground* and the soul's *ground* are identical; the soul's deepest activity is the eternal birth of the Word in the soul; detachment (*Abgeschiedenheit*) is the highest virtue because it lets the soul approach God without the distorting medium of created things. The vocabulary borrowed from Aristotelian metaphysics — "ground," "intellect," "image" — but the conclusions pushed beyond what either Aquinas or the Augustinian tradition had countenanced.

Pope John XXII condemned twenty-eight propositions extracted from Eckhart's writings in the bull *In Agro Dominico* (1329), shortly after Eckhart's death — likely while a defense was still pending. Later Christian mysticism, particularly Tauler and Suso, took Eckhart as their teacher; Hegel, Schopenhauer, and Heidegger all read him with attention; in the twentieth century he became one of the principal interlocutors for comparative work between Christian mysticism and Buddhism.`,
    sources: [
      { title: "Meister Eckhart (SEP)", cite: "Hollywood, A. SEP entry 'Meister Eckhart'", url: "https://plato.stanford.edu/entries/meister-eckhart/" },
    ],
  },
  {
    id: "suhrawardi",
    slug: "suhrawardi",
    name: "Shihāb al-Dīn Suhrawardī",
    birthYear: 1154,
    deathYear: 1191,
    region: "islamic",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Suhrawardī founded the Illuminationist school of Islamic philosophy — Ḥikmat al-Ishrāq — which rejected Avicenna's essentialism in favor of a metaphysics built around the primacy of light. He was executed at thirty-seven for views the Aleppan authorities found heretical.",
    fullBody: `Suhrawardī's major work, *The Philosophy of Illumination* (*Ḥikmat al-Ishrāq*, 1186), proposes a fundamental revision of Avicennan metaphysics. Instead of building the system on the distinction between essence and existence, Suhrawardī builds it on *light* — degrees of luminosity arranged in a hierarchy from the Light of Lights (God) downward through the angelic intelligences to the embodied human soul.

The Illuminationist tradition that follows from him remained alive in Persian philosophy long after the Islamic East had turned away from *falsafa* in the Avicennan-Averroist mainstream. Mulla Sadra synthesizes Illuminationism with Avicennan philosophy three centuries later. The contemporary tradition of Iranian philosophy — including Sayyid Ḥusayn Ṭabāṭabāʾī and Henry Corbin's French scholarship — owes much of its substance to this lineage.

Suhrawardī's execution at thirty-seven (1191, by order of Saladin's son al-Ẓāhir) was for heterodox views — particularly his claim that prophecy continued beyond Muhammad in some form. The school he founded outlived him by almost a millennium.`,
    sources: [
      { title: "Suhrawardi (SEP)", cite: "Marcotte, R. SEP entry 'Suhrawardi'", url: "https://plato.stanford.edu/entries/suhrawardi/" },
    ],
  },
  {
    id: "mulla-sadra",
    slug: "mulla-sadra",
    name: "Mulla Sadra",
    birthYear: 1571,
    deathYear: 1640,
    region: "islamic",
    era: "early-modern",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Mulla_Sadra.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Mulla Sadra synthesized Avicennan philosophy, Suhrawardian Illuminationism, and the Sufi metaphysics of Ibn ʿArabī into the system he called Transcendent Theosophy. He is the most important Persian philosopher of the early modern period.",
    fullBody: `Mulla Sadra Shirazi worked in Safavid Persia and produced, in his enormous *Al-Asfār al-Arbaʿa* ("The Four Journeys"), the most ambitious philosophical synthesis the Islamic tradition would produce after Avicenna.

The central thesis: *aṣālat al-wujūd* — the primacy of existence over essence. Where Avicenna held that essence and existence are distinguishable in concept but inseparable in things (with essence somehow prior), Mulla Sadra argues that existence is fundamental — essence is just the specific limit or mode that existence takes in a particular thing. This reverses several centuries of the Avicennan tradition and reorganizes the whole metaphysics.

The system also proposes *substantial motion* (*ḥaraka jawhariyya*) — that change is not just in the accidents but in the very substance of things, which are continuously being renewed in time. The implications run through cosmology, eschatology, and the philosophical theory of resurrection.

Mulla Sadra remains the central figure in Iranian philosophical theology today, and the work has begun to be read seriously in comparative philosophy in the West through Henry Corbin's mid-twentieth-century scholarship.`,
    sources: [
      { title: "Mulla Sadra (SEP)", cite: "Rizvi, S. SEP entry 'Mulla Sadra'", url: "https://plato.stanford.edu/entries/mulla-sadra/" },
    ],
  },
  {
    id: "abhinavagupta",
    slug: "abhinavagupta",
    name: "Abhinavagupta",
    birthYear: 950,
    deathYear: 1016,
    region: "south-asian",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["metaphysics", "aesthetics", "religion"],
    shortSummary:
      "Abhinavagupta is the central philosopher-theologian of Kashmir Shaivism, the author of the major treatise on aesthetics and yogic experience, and a serious metaphysician on the structure of consciousness as fundamental.",
    fullBody: `Abhinavagupta worked in tenth- and eleventh-century Kashmir and produced an enormous body of philosophical, theological, aesthetic, and tantric writing. His central treatises — the *Tantrāloka* on Trika Shaivism, and the *Abhinavabhāratī* commentary on Bharata's *Nāṭyaśāstra* on aesthetic experience — together represent one of the most sophisticated philosophical projects in the South Asian tradition.

The metaphysics is *Pratyabhijñā* ("Recognition") philosophy. Consciousness, understood as Śiva, is the fundamental reality. The apparent plurality of things and selves is the self-disclosure of consciousness in different modes; liberation is the *recognition* that one's own consciousness was always already identical with the divine consciousness. The position is non-dualist but, unlike Śaṅkara's Advaita, treats the world's appearance as a positive expression of the Real rather than as māyā in the privative sense.

The aesthetic theory is equally subtle. *Rasa* — the savored aesthetic emotion produced by literary and dramatic experience — is for Abhinavagupta a glimpse of the unconditioned consciousness from which all particular emotions arise. The theory has been hugely influential in classical Indian aesthetics and is now being engaged seriously in comparative work in philosophy of emotion.`,
    sources: [
      { title: "Abhinavagupta (SEP)", cite: "Related entries on Indian philosophy", url: "https://plato.stanford.edu/entries/kashmir-shiva/" },
    ],
  },
  {
    id: "dignaga",
    slug: "dignaga",
    name: "Dignāga",
    birthYear: 480,
    deathYear: 540,
    region: "south-asian",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["logic", "epistemology"],
    shortSummary:
      "Dignāga founded the Buddhist logic and epistemology tradition. His Pramāṇasamuccaya gave Indian Buddhist philosophy a technically rigorous account of perception, inference, and the means of valid knowledge that rivaled Nyāya for the next thousand years.",
    fullBody: `Dignāga's *Pramāṇasamuccaya* ("Compendium on Valid Knowledge") is the founding text of Buddhist *pramāṇavāda* — the technical philosophy of the means of valid knowledge. Where Nyāya recognized four pramāṇas (perception, inference, comparison, testimony), Dignāga argued that only two are genuinely independent: *pratyakṣa* (perception) and *anumāna* (inference). His account of each is more rigorous than what came before.

Perception, for Dignāga, is non-conceptual — direct awareness of particulars unmediated by the categories language imposes. Conceptual cognition (which appears once perception has occurred and the mind has begun categorizing) is constructed and unreliable as a guide to the particular as such. His theory of *apoha* — that linguistic meaning is fundamentally a matter of *exclusion* (the word "cow" picks out its referent by excluding what is not a cow) — is one of the most sophisticated semantic theories in any premodern tradition.

His successor Dharmakīrti (7th c.) refined the system into the form that would dominate Buddhist epistemology for the next millennium. The Sanskrit and Tibetan philosophical traditions continued working on Dignāga's problems into the eighteenth century; contemporary philosophers of language and perception have begun engaging this work seriously.`,
    sources: [
      { title: "Dignāga (SEP)", cite: "Tillemans, T. SEP entry 'Dharmakirti' (covers Dignāga)", url: "https://plato.stanford.edu/entries/dharmakiirti/" },
    ],
  },
  // ---- Early Modern ----
  {
    id: "bruno",
    slug: "giordano-bruno",
    name: "Giordano Bruno",
    birthYear: 1548,
    deathYear: 1600,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Giordano_Bruno.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Bruno argued, before there was modern science to support the claim, that the universe is infinite, that the stars are other suns with their own worlds, and that the soul is immanent in all matter. The Roman Inquisition burned him for it in 1600.",
    fullBody: `Bruno was a Dominican friar who left the order, traveled across Europe lecturing, and produced a body of work that combines Renaissance Neoplatonism, Lullism, Copernican cosmology, and a pantheist (or panentheist) metaphysics into a vision unlike anything else in his century.

The central cosmological claim — defended in *De l'Infinito, Universo e Mondi* (1584) — is that the universe is infinite, that the stars are suns surrounded by their own planets, and that nothing privileges Earth or the Sun in the cosmic order. The metaphysical claim — defended in *De la Causa, Principio et Uno* (1584) and *De Monade, Numero et Figura* — is that there is a single substance (anticipating Spinoza by nearly a century), of which all things are modes, and that this substance is the universe itself thought as both matter and as the divine soul.

He was arrested by the Venetian Inquisition in 1592, transferred to Rome, and imprisoned for seven years before being burned at the stake on the Campo de' Fiori on 17 February 1600. The Catholic Church has never formally retracted the sentence. A statue of him stands now on the site of his execution.`,
    sources: [
      { title: "Giordano Bruno (SEP)", cite: "Gatti, H. SEP entry 'Giordano Bruno'", url: "https://plato.stanford.edu/entries/bruno/" },
    ],
  },
  {
    id: "conway",
    slug: "anne-conway",
    name: "Anne Conway",
    birthYear: 1631,
    deathYear: 1679,
    region: "european",
    era: "early-modern",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Anne_Conway,_Viscountess_Conway_by_Sir_Peter_Lely.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Anne Conway's Principles of the Most Ancient and Modern Philosophy (published posthumously, 1690) developed a monist vitalist metaphysics that influenced Leibniz substantially. She read Descartes and More carefully and disagreed with both.",
    fullBody: `Anne Conway grew up in Cromwell's England, suffered from severe migraines her entire adult life, and corresponded with Henry More — the Cambridge Platonist — for over a decade. Her single book, *Principia philosophiae antiquissimae et recentissimae* (Latin 1690, English 1692), was published anonymously after her death.

The argument rejects both Cartesian dualism (mind and matter as fundamentally different substances) and Hobbesian materialism (only matter is real). Conway proposes a unified vitalist metaphysics: there is one substance, what we call "matter" and "spirit" are different degrees of refinement of the same underlying reality, and every created being has within it a principle of life and motion. The metaphysical scale runs from God at one pole (pure spirit, pure activity) through angels, humans, and animals down to apparently inert matter (which is in fact slumbering spirit).

Leibniz owned a copy of Conway's book and credited her, in his letters, with influencing his monadology. Her position has been substantially reread in the past three decades as one of the more original early modern systems and as a serious precursor to nineteenth-century vitalism and contemporary panpsychism.`,
    sources: [
      { title: "Anne Conway (SEP)", cite: "Hutton, S. SEP entry 'Lady Anne Conway'", url: "https://plato.stanford.edu/entries/conway/" },
    ],
  },
  {
    id: "pizan",
    slug: "christine-de-pizan",
    name: "Christine de Pizan",
    birthYear: 1364,
    deathYear: 1430,
    region: "european",
    era: "medieval",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Christine_de_Pisan_-_cathedra.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Christine de Pizan is the first European woman known to have supported herself by her writing. Her Book of the City of Ladies (1405) is the founding text of the literary defense of women in the Western tradition.",
    fullBody: `Christine de Pizan was widowed at twenty-five with three children and her mother to support, and made her living writing — over forty works in French verse and prose across thirty years. Her major philosophical contribution is *Le Livre de la Cité des Dames* (1405), a sustained refutation of the misogynist tradition of late medieval French literature.

The book is structured as a vision: three allegorical figures (Reason, Rectitude, Justice) help Christine build an allegorical city as a refuge for women, populating it with examples from history, mythology, and scripture that contradict the standard misogynist claims about women's capacity for reason, virtue, and intellectual accomplishment. The argumentative method is recognizable to contemporary feminism: take the standard claims at face value, marshal counterexamples, and force the reader to specify what would actually settle the question.

The companion work, *Le Livre des Trois Vertus* (1405), addresses how women in different social stations should conduct themselves to flourish in the world as it is. The political theory in *Le Livre du Corps de Policie* (1407) develops a Christian humanist political philosophy that engages Aristotle and contemporary politics carefully.`,
    sources: [
      { title: "Christine de Pizan (SEP)", cite: "Green, K. SEP entry", url: "https://plato.stanford.edu/entries/christine-pizan/" },
    ],
  },
  // ---- 20c / contemporary ----
  {
    id: "whitehead",
    slug: "alfred-north-whitehead",
    name: "Alfred North Whitehead",
    birthYear: 1861,
    deathYear: 1947,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Alfred_North_Whitehead_in_1936.jpg"),
    themes: ["metaphysics", "logic"],
    shortSummary:
      "Whitehead co-authored Principia Mathematica with Russell, then spent the second half of his life building process philosophy — a metaphysics in which the basic units of reality are events of becoming rather than enduring substances.",
    fullBody: `Whitehead is two philosophers stitched together. The young Whitehead, with Russell, produced *Principia Mathematica* (1910–13) — three volumes that attempted to derive all of mathematics from logic, and that, for all its flaws, became one of the founding documents of twentieth-century analytic philosophy.

The older Whitehead, having moved to Harvard at sixty-three, produced *Process and Reality* (1929) — the major work of what is now called *process philosophy*. The argument: the basic units of reality are not enduring substances (things that persist through time while their accidents change) but *actual occasions* — events of becoming, each of which "prehends" prior occasions and contributes to the constitution of subsequent ones. The world is, on this picture, a creative advance into novelty.

Process philosophy has had a smaller mainstream following than analytic philosophy or phenomenology but a distinctive long arc. It has shaped process theology (Hartshorne, Cobb), some currents in philosophy of biology, contemporary work on emergence, and recent ecological and indigenous philosophy looking for alternatives to substance metaphysics. Bergson and Whitehead together are the major twentieth-century resources for thinking the metaphysics of change.`,
    sources: [
      { title: "Alfred North Whitehead (SEP)", cite: "Desmet, R. SEP entry 'Alfred North Whitehead'", url: "https://plato.stanford.edu/entries/whitehead/" },
    ],
  },
  {
    id: "levinas",
    slug: "emmanuel-levinas",
    name: "Emmanuel Levinas",
    birthYear: 1906,
    deathYear: 1995,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Emmanuel-Levinas.jpg"),
    themes: ["ethics", "metaphysics", "religion"],
    shortSummary:
      "Levinas argued that ethics — the encounter with the face of the other — is first philosophy. The claim is more careful than it sounds, and it shaped continental philosophy of the late twentieth century.",
    fullBody: `Levinas was a Lithuanian-French phenomenologist who studied with Husserl and Heidegger, lost his family in the Holocaust, and spent his career developing the argument that ethics is philosophically prior to ontology — that the encounter with the *face* of the other is the originary structure of human existence, and that the entire Heideggerian framework of being-in-the-world rests on a more fundamental responsibility to the other person.

The major works are *Totality and Infinity* (1961) and *Otherwise than Being* (1974). The arguments are dense and accumulative. The recurring claim: ontology — the attempt to think being in general — is structurally a *totalizing* activity that subsumes the singular other into the categories of the same. Ethics interrupts ontology. The face of the other, in its irreducible specificity, places an infinite demand on me that cannot be discharged by any general principle, calculus, or duty. To be a self is, before anything else, to be *for the other*.

The position has been hugely influential on subsequent continental philosophy (Derrida wrote one of the major engagements; Marion, Lacoste, and Caputo developed it in religious phenomenology) and on twentieth-century Jewish philosophical thought.`,
    sources: [
      { title: "Emmanuel Levinas (SEP)", cite: "Bergo, B. SEP entry 'Emmanuel Levinas'", url: "https://plato.stanford.edu/entries/levinas/" },
    ],
  },
  {
    id: "buber",
    slug: "martin-buber",
    name: "Martin Buber",
    birthYear: 1878,
    deathYear: 1965,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Martin_Buber_portrait.jpg"),
    themes: ["religion", "ethics"],
    shortSummary:
      "Buber distinguished two basic modes of relating to anything — I-Thou and I-It — and argued that the loss of the first under modern conditions is the deepest spiritual problem of the age. The book that says so, Ich und Du, is short enough to read in a sitting.",
    fullBody: `Martin Buber was an Austrian-born Jewish philosopher who spent the first half of his career working on Hasidism and the latter half developing the philosophical vision presented in *Ich und Du* (*I and Thou*, 1923) and elaborated across decades of subsequent essays.

The central distinction: we can stand in relation to anything — a tree, another person, God — in one of two ways. In the *I-It* mode, the other is an object: classified, used, theorized about, controlled. In the *I-Thou* mode, the other is met as a whole presence that I am also fully present to; the meeting cannot be reduced to its content. Both modes are needed; an *I-It* posture is necessary for survival, science, and most ordinary practical life. But a life lived entirely in the *I-It* mode has lost something essential to being human, and Buber thinks modern industrial society has structurally drifted in that direction.

The political and theological consequences are real. Buber was a major figure in cultural Zionism — a current that argued for a Jewish state grounded in the renewal of Jewish religious culture rather than the imitation of European nation-states — and a serious dialogue partner for Christian theologians. His later writings on the kibbutz movement and on Arab-Jewish relations belong to the same project.`,
    sources: [
      { title: "Martin Buber (SEP)", cite: "Zank, M. SEP entry 'Martin Buber'", url: "https://plato.stanford.edu/entries/buber/" },
    ],
  },
  {
    id: "althusser",
    slug: "louis-althusser",
    name: "Louis Althusser",
    birthYear: 1918,
    deathYear: 1990,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Louis_Althusser_1978.jpg"),
    themes: ["politics", "metaphysics"],
    shortSummary:
      "Althusser reread Marx through structuralism, argued for an 'epistemological break' between the young humanist Marx and the mature scientific Marx, and produced the concept of ideological state apparatuses that still organizes much of contemporary political theory.",
    fullBody: `Louis Althusser taught at the École Normale Supérieure for three decades and trained a generation of French Marxists. The major works — *For Marx* (1965), *Reading Capital* (1965, with Étienne Balibar and others) — were attempts to recover Marx from the humanist, Hegelianizing readings dominant in postwar French Marxism.

Two theses define the project. First, the *epistemological break* (a term borrowed from Bachelard): there is a discontinuity in Marx's thought around 1845. The early Marx (the manuscripts on alienation) is still operating within the Hegelian-Feuerbachian humanist framework. The mature Marx (*Capital*) has broken with that framework and is doing something more like science — analyzing the structural relations of capitalist production in a register independent of any particular moral framework.

Second, the theory of *ideological state apparatuses* (in the 1970 essay): the reproduction of capitalist relations depends not only on the *repressive* state apparatus (police, army, courts) but on a network of *ideological* state apparatuses (schools, churches, families, media, unions) that produce the kinds of subjects capitalism requires. Ideology, on Althusser's account, has a material existence in these institutions and operates by *interpellating* individuals as subjects.

The biographical end is tragic: Althusser strangled his wife Hélène Rytmann in 1980 during a psychotic episode, was deemed incompetent to stand trial, and spent the remainder of his life institutionalized. The work has been read and contested since regardless.`,
    sources: [
      { title: "Louis Althusser (SEP)", cite: "Lewis, W. SEP entry 'Louis Althusser'", url: "https://plato.stanford.edu/entries/althusser/" },
    ],
  },
  {
    id: "chalmers",
    slug: "david-chalmers",
    name: "David Chalmers",
    birthYear: 1966,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("David_Chalmers_TASC2008.JPG"),
    themes: ["mind", "metaphysics"],
    shortSummary:
      "Chalmers named the 'hard problem of consciousness' in 1995 and has spent his career arguing that subjective experience cannot be fully explained by physical facts about the brain. His current work on extended mind and the philosophy of virtual worlds is shaping its respective fields.",
    fullBody: `David Chalmers, Australian-born, currently at NYU, made his name with "Facing Up to the Problem of Consciousness" (1995) and the book it preceded, *The Conscious Mind* (1996). The argument: there are *easy problems* of consciousness (how the brain integrates information, attends, reports states) that empirical science is making progress on, and there is a *hard problem* — why any of this information processing is accompanied by subjective experience at all.

The standard physicalist responses, Chalmers argues, fail. The conceivability of zombies (creatures physically identical to us but with no inner life) is enough to show that subjective experience is not entailed by physical facts. Various forms of property dualism, *naturalistic dualism*, and panpsychism remain live options.

His subsequent work has covered the *extended mind* thesis (with Andy Clark, 1998) — that cognitive states sometimes extend beyond the skin into tools, notebooks, smartphones — and most recently, in *Reality+* (2022), the philosophy of virtual reality. The argument there: virtual worlds, sufficiently developed, would be real worlds in every philosophically interesting sense. The book is a major intervention in the question of what counts as a real environment, and likely the major work of philosophy specifically about simulation and virtual experience.`,
    sources: [
      { title: "David Chalmers (related SEP entries)", cite: "SEP entries on consciousness and extended mind", url: "https://plato.stanford.edu/entries/consciousness/" },
    ],
  },
  {
    id: "nagel",
    slug: "thomas-nagel",
    name: "Thomas Nagel",
    birthYear: 1937,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Thomas_Nagel_teaching_Ethics_class_at_NYU,_September_2008.jpg"),
    themes: ["mind", "ethics"],
    shortSummary:
      "Nagel's 'What Is It Like to Be a Bat?' (1974) crystallized the hard problem of consciousness before it had that name. His subsequent work in ethics, political philosophy, and metaphysics has been steadily produced for fifty years from NYU.",
    fullBody: `Thomas Nagel, currently University Professor at NYU, has produced a body of work distinguished by clarity of writing and a willingness to defend positions that don't fit comfortably into contemporary analytic philosophy's mainstream.

"What Is It Like to Be a Bat?" (1974) is the paper everyone knows. The argument: there is something it is like to be a bat — to navigate by echolocation, to live in the bat's specific phenomenological world. Whatever facts we have about the bat's brain, we cannot, by mere accumulation of physical information, come to know what bat-experience is like from the inside. So there are facts (about subjective experience) that the physical facts don't capture. The argument is concise and has resisted decades of attempted refutation.

*The Possibility of Altruism* (1970) makes the structurally similar argument in ethics: if you take seriously the symmetry between my own future self and someone else's, the case for purely self-interested action becomes harder to make than is usually assumed. *The View from Nowhere* (1986) is the major systematic work — an extended meditation on the tension between subjective and objective standpoints in ethics, knowledge, and the metaphysics of the self.

*Mind and Cosmos* (2012) is his most controversial recent book — an argument that the standard materialist neo-Darwinian picture of nature cannot accommodate consciousness, cognition, or moral truth, and that some form of teleological extension of naturalism is required. The reception was hostile; the argument has not gone away.`,
    sources: [
      { title: "Thomas Nagel (SEP)", cite: "Related SEP entries on consciousness, moral realism", url: "https://plato.stanford.edu/entries/qualia/" },
    ],
  },
  {
    id: "david-lewis",
    slug: "david-lewis",
    name: "David Lewis",
    birthYear: 1941,
    deathYear: 2001,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: null,
    themes: ["metaphysics", "logic", "language"],
    shortSummary:
      "Lewis was one of the most systematic analytic metaphysicians of the late twentieth century. He defended modal realism — that all possible worlds exist as concretely as the actual world — with arguments that other philosophers found impossible and indispensable in equal measure.",
    fullBody: `David Lewis taught at Princeton for thirty years and produced, across four books and several volumes of essays, the most sustained metaphysical system in late-twentieth-century analytic philosophy.

The thesis he is most associated with — *modal realism*, the view that possible worlds exist as real, concrete, mutually unrelated universes, each as real as our own — was advanced in *Counterfactuals* (1973) and defended in detail in *On the Plurality of Worlds* (1986). The motivation: possible-worlds semantics, developed by Kripke and others for modal logic, can be made philosophically respectable if we don't treat possible worlds as mere abstractions but as real entities. The cost: a vast ontology of inaccessible universes. Lewis thought the explanatory work modal realism does — for counterfactuals, properties, propositions — was worth the cost. Almost no other major analytic philosopher agreed; the argument is, even so, one of the major theoretical achievements of the era.

His work on counterfactuals (the *closest possible world* analysis), on the metaphysics of causation, on the analysis of mental content via narrow vs. wide content, on the analysis of language games and convention (*Convention*, 1969 — built on game theory), all remain reference points. His prose is a model of how to write analytic philosophy: precise, witty, willing to follow arguments wherever they lead.`,
    sources: [
      { title: "David Lewis (SEP)", cite: "Weatherson, B. SEP entry 'David Lewis'", url: "https://plato.stanford.edu/entries/david-lewis/" },
    ],
  },
  {
    id: "korsgaard",
    slug: "christine-korsgaard",
    name: "Christine Korsgaard",
    birthYear: 1952,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: null,
    themes: ["ethics"],
    shortSummary:
      "Korsgaard is the most influential contemporary Kantian ethicist. Her The Sources of Normativity (1996) reframes the foundational question of metaethics — what gives moral demands their authority over us — and her later work on animal ethics extends Kantianism to ground we'd been told it couldn't reach.",
    fullBody: `Christine Korsgaard taught at Harvard for over three decades and has produced one of the major contemporary developments of Kantian moral philosophy.

*The Sources of Normativity* (1996) is the central work. The question — first posed by her Tanner Lectures — is what gives moral demands their authority over us. Why should I do what morality says? Korsgaard's answer is constructivist and Kantian: we are not free to be amoral because we cannot coherently be ourselves at all without endorsing some principles to act on, and the principles we can rationally endorse have substantial content. The argument turns on what she calls *self-constitution*: the same activity by which I become a unified agent — by giving myself reasons to act — also constrains me to recognize the standing of other agents.

*Self-Constitution* (2009) develops this systematically. *Fellow Creatures: Our Obligations to the Other Animals* (2018) is the more recent and most-discussed work. Korsgaard argues that animals have moral standing because they are, like us, beings for whom things matter — beings whose lives and deaths are bad or good *from their own perspectives*, even though they may not be able to formulate that perspective in language. The position is more demanding than utilitarian animal ethics (it grounds animal standing in Kantian considerations the utilitarian tradition lacks) and has been pivotal in the contemporary expansion of Kantianism beyond its traditional anthropocentric scope.`,
    sources: [
      { title: "Christine Korsgaard (related SEP entries)", cite: "SEP entries on Kantian ethics and animal ethics", url: "https://plato.stanford.edu/entries/kant-moral/" },
    ],
  },
  {
    id: "dussel",
    slug: "enrique-dussel",
    name: "Enrique Dussel",
    birthYear: 1934,
    deathYear: 2023,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Enrique_Dussel_(retrato).jpg"),
    themes: ["politics", "ethics", "religion"],
    shortSummary:
      "Dussel founded the Latin American Philosophy of Liberation movement. His work argues that the standard history of European philosophy has systematically excluded the perspective of the colonized — and that taking that perspective seriously transforms what philosophy looks like.",
    fullBody: `Enrique Dussel was born in Argentina, exiled to Mexico after a bombing of his home in 1975, and spent the remainder of his career as one of the founding figures of *Filosofía de la Liberación* — Latin American Philosophy of Liberation.

The project's core: the history of European philosophy that the academic discipline teaches itself has systematically taken the perspective of the European subject as universal, treating the rest of the world as the "outside" that European philosophy contemplates. Latin America, indigenous America, Africa, Asia have all appeared in this history as objects, not as sources of philosophical content. The Philosophy of Liberation begins from the perspective of the *excluded other* — the colonized, the impoverished, the indigenous, the woman, the racially subordinated — and asks what philosophy looks like when reconstructed from that starting point.

Dussel's major works include *Filosofía de la Liberación* (1977), *The Underside of Modernity* (1995), and the three-volume *Ética de la Liberación en la Edad de la Globalización y de la Exclusión* (1998). The position has substantial overlap with postcolonial theory but is distinctively Latin American in its philosophical formation — drawing on Levinas, Marx, the dependency-theory tradition, and Catholic liberation theology.`,
    sources: [
      { title: "Enrique Dussel (SEP)", cite: "Mendieta, E. SEP entry 'Enrique Dussel'", url: "https://plato.stanford.edu/entries/dussel/" },
    ],
  },
];
