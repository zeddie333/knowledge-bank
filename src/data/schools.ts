import type { School } from "@/lib/types";

// ~40 schools and movements across all major traditions.
export const SCHOOLS: School[] = [
  // ---- Ancient Greek / Hellenistic ----
  {
    id: "pre-socratic",
    slug: "pre-socratics",
    name: "The Pre-Socratics",
    eraStart: -600,
    eraEnd: -400,
    region: "greek",
    philosopherIds: ["thales", "anaximander", "pythagoras", "heraclitus", "parmenides", "zeno-of-elea", "democritus", "protagoras"],
    shortSummary:
      "The first Greek philosophers — Thales through Democritus and the Sophists — asked what everything is made of, whether change is real, whether knowledge is possible, and whether the gods exist. The questions outlived their answers.",
    fullBody: `The Pre-Socratics are the philosophers before Socrates whose work survives only in fragments and reports. They include the Milesians (Thales, Anaximander, Anaximenes), Pythagoras and his school, Heraclitus, the Eleatics (Parmenides, Zeno, Melissus), the Pluralists (Empedocles, Anaxagoras), the Atomists (Leucippus, Democritus), and the Sophists (Protagoras, Gorgias).

What unites them is less a doctrine than a stance. They treated the natural world as a legitimate object of rational inquiry, not as a domain where the gods alone could explain things. They asked what is fundamental, what change is, what knowledge is, and what we can say about any of it. Almost every later move in Greek philosophy — Plato's Forms, Aristotle's matter and form, the Stoic logos, Epicurean atoms — is a development of something the Pre-Socratics started.

Our sources are almost entirely *doxographies* (reports of their views by later writers) and *fragments* (quotations preserved in commentaries). Reading them is therefore a reconstructive art, and modern scholarship has produced very different readings of the same figures.`,
  },
  {
    id: "sophism",
    slug: "sophism",
    name: "Sophism",
    eraStart: -450,
    eraEnd: -380,
    region: "greek",
    philosopherIds: ["protagoras"],
    shortSummary:
      "The Sophists were itinerant teachers of rhetoric and political judgment, employed by Athenian aristocrats and despised by Plato. Their reputation is mostly Plato's polemic; the few surviving fragments suggest the actual thinkers were more interesting.",
    fullBody: `The Sophists taught rhetoric, statecraft, and what we would now call practical reasoning for fees, primarily to the sons of the Athenian elite. Their best-known members include Protagoras, Gorgias, Hippias, Prodicus, and Antiphon. Plato treated them as enemies of philosophy — purveyors of clever argument with no concern for truth — and the resulting reputation has stuck.

The fragments tell a different story. Protagoras' "man is the measure of all things" is a serious epistemological claim. Gorgias' *On the Non-Existent* is a structurally subtle argument against the possibility of knowledge that prefigures later skeptical traditions. The Sophists' relativism, where it exists, is more careful than Plato's caricature.

The hostility was partly social (they were paid; Plato thought wisdom should be transmitted by association, not commerce) and partly political (their students were often the people who later orchestrated oligarchic coups). Reading them now, with Plato's polemic bracketed, repays the effort.`,
  },
  {
    id: "platonism",
    slug: "platonism",
    name: "Platonism",
    eraStart: -380,
    eraEnd: 200,
    region: "greek",
    philosopherIds: ["plato"],
    shortSummary:
      "Plato's Academy operated for nine centuries — the longest-running philosophical institution in antiquity — and the doctrines associated with it shaped Greek, Roman, Christian, Islamic, and Jewish thought through the Renaissance.",
    fullBody: `Plato founded the Academy in Athens around 387 BCE; it operated continuously until 529 CE when Justinian closed the pagan schools of philosophy. Over those nine centuries it went through several phases — the dogmatic Old Academy (Plato, Speusippus, Xenocrates), the skeptical Middle Academy (Arcesilaus, Carneades) which abandoned the metaphysics for an inquiry-based skepticism, and the systematizing Neoplatonism that finally crystallized in Plotinus.

The doctrines associated with Plato across these phases: the theory of Forms, the immortality of the soul, the tripartite division of the soul, the conception of justice as harmony, the philosopher-king, the dialectical method, the priority of reason over appearance. Each was developed, contested, and reinterpreted by later Platonists.

The reception is enormous. Augustine's Christianity is partly Platonic; Avicenna's metaphysics is partly Platonic; the Cambridge Platonists revived Platonism in the seventeenth century; the German Idealists drew on him; even contemporary mathematical Platonism (the view that numbers exist as real, mind-independent abstract objects) is a recognizable descendant.`,
  },
  {
    id: "peripatetic",
    slug: "peripatetic",
    name: "Peripatetic (Aristotelian) School",
    eraStart: -335,
    eraEnd: 200,
    region: "greek",
    philosopherIds: ["aristotle"],
    shortSummary:
      "Aristotle's school at the Lyceum — named for the covered walkway (peripatos) where its members thought best while walking — built the empirical, classificatory approach to philosophy that the Latin West would rediscover in the twelfth century.",
    fullBody: `Aristotle founded the Lyceum in Athens in 335 BCE. The school took its informal name from its members' habit of walking while discussing — *peripatētikoi*, "those who walk around." Theophrastus succeeded Aristotle and continued the empirical research program, especially in botany and mineralogy.

The Peripatetic tradition placed enormous emphasis on classification, observation, and systematic treatment of subject matter. Its lasting contributions outside philosophy proper include the founding of biology, comparative politics, literary theory, and formal logic.

The school's influence in late antiquity was eclipsed by Neoplatonism, but Aristotle's works survived through Syrian, Arabic, and finally Latin transmission. The twelfth- and thirteenth-century rediscovery of his full corpus produced Aristotelian Scholasticism — Aquinas, Scotus, Ockham — and made him the dominant philosophical authority in late-medieval Europe.`,
  },
  {
    id: "stoicism",
    slug: "stoicism",
    name: "Stoicism",
    eraStart: -300,
    eraEnd: 300,
    region: "greek",
    philosopherIds: ["zeno-of-citium", "epictetus", "seneca", "marcus-aurelius"],
    shortSummary:
      "A practical school that began in a painted porch in Athens and survived as the moral spine of educated Romans for four centuries. Its core insight: distinguish what is in your power from what isn't, and stake your peace on the first column.",
    fullBody: `Stoicism began with Zeno of Citium teaching on the *Stoa Poikile* (the Painted Porch) in Athens around 300 BCE. By the late Republic, it was the working philosophy of educated Romans — Seneca, Epictetus, Marcus Aurelius. By the early Christian centuries, it had been absorbed so thoroughly into Western moral thinking that you can find Stoic moves in writers who would have rejected the name.

The system has three traditional divisions: logic (how to think well), physics (the nature of the universe), and ethics (how to live well). The ethics is what survives in popular memory, but the Stoics themselves saw the three as one.

The famous practical core comes from Epictetus' *Enchiridion* §1: some things are up to us — our judgments, intentions, attitudes — and some are not — our reputation, our health, our circumstances. The whole of practical wisdom is keeping these two columns distinct. The Stoic does not pretend to control the second column. She refuses to let it control the first.

Common misreadings: Stoicism is not stoic in the modern sense (suppressing feeling). It is the project of training your feelings to track what actually matters. Stoicism is not fatalism (passively accepting whatever happens). It demands constant moral effort — but on yourself, not the world.`,
  },
  {
    id: "epicureanism",
    slug: "epicureanism",
    name: "Epicureanism",
    eraStart: -307,
    eraEnd: 200,
    region: "greek",
    philosopherIds: ["epicurus", "lucretius"],
    shortSummary:
      "Epicurus' Garden taught that the good life consists in tranquility achieved by removing fear (of death, of the gods), distinguishing necessary from unnecessary desires, and cultivating friendship. The hedonism caricature has obscured how austere the actual program was.",
    fullBody: `Epicurus founded his school — the Garden — in Athens around 307 BCE. It admitted women and slaves, which set it apart from most contemporary schools, and was organized as a community of friends rather than a public institution.

The physics is Democritean atomism with a small but important addition: the *swerve*, a random deviation in atomic motion that breaks strict determinism. The ethics derives from the physics: if we are mortal aggregates of atoms, death is not to be feared (we will not be there to suffer it), and the gods, if they exist, do not concern themselves with us.

The practical ethics has four parts ("*tetrapharmakos*," the fourfold remedy): the gods are not to be feared; death is not to be feared; what is good is easy to obtain; what is bad is easy to endure. The recommended life involves distinguishing *necessary natural desires* (food, water, basic shelter, simple friendship) from *unnecessary* ones (luxuries, fame, power) and minimizing the latter.

Lucretius' Latin poem *De Rerum Natura* is the major surviving exposition. Its rediscovery in 1417 helped detonate the Renaissance, and Thomas Jefferson read it twenty-six times.`,
  },
  {
    id: "cynicism",
    slug: "cynicism",
    name: "Cynicism",
    eraStart: -400,
    eraEnd: 200,
    region: "greek",
    philosopherIds: ["diogenes"],
    shortSummary:
      "Cynicism was a discipline of self-sufficiency through the deliberate rejection of social conventions. The aim was not provocation; the provocation was a method, designed to expose how much of what we want is convention masquerading as nature.",
    fullBody: `The school traces back to Antisthenes, a student of Socrates, but its central figure is Diogenes of Sinope, whose lifestyle and theatrical confrontations gave the movement its lasting image. The Greek word *kynikos* — "dog-like" — was originally an insult Diogenes adopted.

The doctrine is practical and brief. The good life is *autarkeia* — self-sufficiency. The path to self-sufficiency is the systematic stripping away of social conventions that mistake superfluities for necessities. Status, wealth, reputation, refined manners — these are not just dispensable; the attachment to them is what makes you unfree.

Cynicism shaped Stoicism (Zeno was a student of the Cynic Crates), and the figure of the Cynic survived into the Roman era as a kind of itinerant moral provocateur. Foucault's late lectures on *parrhesia* (frank speech) take the Cynics as paradigmatic.`,
  },
  {
    id: "academic-skepticism",
    slug: "academic-skepticism",
    name: "Academic Skepticism",
    eraStart: -266,
    eraEnd: -90,
    region: "greek",
    philosopherIds: [],
    shortSummary:
      "Plato's Academy under Arcesilaus and Carneades turned skeptical: they argued nothing can be known with certainty and that the wise should suspend judgment. The position was a serious philosophical challenge, not the throwaway position the term 'skepticism' now suggests.",
    fullBody: `Around 266 BCE, Arcesilaus became head of the Academy and turned it in a skeptical direction. Carneades, in the second century, sharpened the position into one of the most rigorous philosophical schools of antiquity. The Academic skeptics argued that we cannot achieve certainty about anything (against the Stoics' confident epistemology), and that the wise response is to suspend judgment (*epochē*) and to act on probabilities.

The school's argumentative method was to defend opposed positions on the same question with equal force, in order to expose the absence of decisive grounds for either. Carneades famously gave a public lecture in Rome arguing for justice one day and against justice the next — which scandalized the senators and led to his expulsion.

The Academic Skeptics were one of two ancient skeptical traditions; the other, Pyrrhonism (Sextus Empiricus is the main source), pushed the position further. The two influenced each other and were sometimes confused by later writers. Cicero's *Academica* is the best surviving Roman discussion.`,
  },
  {
    id: "neoplatonism",
    slug: "neoplatonism",
    name: "Neoplatonism",
    eraStart: 200,
    eraEnd: 600,
    region: "greek",
    philosopherIds: ["plotinus"],
    shortSummary:
      "Plotinus and his successors developed a systematic metaphysics in which everything that exists is an overflow from a single ineffable source — The One. The system shaped Christian, Islamic, and Jewish theology for a millennium.",
    fullBody: `Plotinus (204–270) is the founder; his student Porphyry edited the *Enneads* and made the school an institutional reality. Later major figures include Iamblichus, who introduced theurgy (ritual practice) into the philosophical curriculum, and Proclus, whose enormous *Elements of Theology* gave the system its most rigorous late-antique formulation.

The metaphysics has a clear architecture: *The One* (beyond being, beyond predication, the source from which everything flows); *Nous* (Intellect, containing the Forms); *Soul* (animating the physical world); the *physical universe*. Everything that exists is at some remove from the One; everything that exists also has a path back to it through philosophical contemplation.

The influence on Christianity (through Augustine), on Islamic philosophy (through Al-Kindi, Al-Farabi, and the spurious *Theology of Aristotle*, which was actually Plotinus), on Jewish mysticism, and on the Renaissance (through Ficino and the Florentine Academy) is enormous. Most negative theology, in any of these traditions, traces back to Neoplatonism's claim that the highest reality is beyond what language can capture.`,
  },
  // ---- Medieval Christian ----
  {
    id: "scholasticism",
    slug: "scholasticism",
    name: "Scholasticism",
    eraStart: 1100,
    eraEnd: 1500,
    region: "european",
    philosopherIds: ["anselm", "aquinas", "scotus", "ockham"],
    shortSummary:
      "Scholasticism was the philosophical method of the medieval European universities — disputation, careful textual commentary, the systematic application of logic to theological and philosophical questions. Aquinas is its high point and Ockham its end.",
    fullBody: `Scholasticism is named for the medieval *schola* — the cathedral schools and the universities that grew from them, starting in the eleventh century. Its characteristic method is the *quaestio disputata*: a question is posed, arguments are marshaled on both sides, a determination is given, and objections are answered. The *Summa* of Aquinas is the most famous example.

The Scholastics worked on a defined corpus — the Bible, the Church Fathers, the available works of Aristotle (gradually expanded through Arabic transmission), Boethius' logical works — and the philosophical advances were often made through commentary on these. Disputation was a live practice; students were expected to defend theses publicly.

The high point is the thirteenth century — Albert the Great, Aquinas, Bonaventure. The fourteenth century brings the more critical work of Duns Scotus and William of Ockham, and the late fourteenth-fifteenth centuries produce diminishing returns as the questions become increasingly technical and divorced from substantive philosophical issues. Renaissance humanism's polemical contempt for "Scholastics" is what gives the period its bad reputation; the actual achievement is more substantial.`,
  },
  {
    id: "thomism",
    slug: "thomism",
    name: "Thomism",
    eraStart: 1265,
    eraEnd: null,
    region: "european",
    philosopherIds: ["aquinas"],
    shortSummary:
      "The philosophical school that develops Aquinas' synthesis of Aristotle and Christian theology. Endorsed by Leo XIII in 1879 as the official Catholic philosophical position, it remains the spine of much Catholic intellectual life.",
    fullBody: `Thomism is the school that follows and develops Aquinas. It became contested almost immediately after his death — the Franciscans favored Scotism, the early Dominicans Thomism — and the question of Aquinas' relation to Aristotle and his independence from earlier scholastic traditions has been argued ever since.

The school revived in the late sixteenth century (the "Second Thomism" of Cajetan and the Salamanca school), declined under the pressure of modern philosophy, and was revived again by Leo XIII's 1879 encyclical *Aeterni Patris*, which made Thomism the official philosophical and theological framework of the Catholic Church. Twentieth-century Thomists include Jacques Maritain, Étienne Gilson, and Alasdair MacIntyre (whose virtue-ethics work is partly Thomist).

Contemporary "analytic Thomism" attempts to bring Aquinas into dialogue with analytic philosophy of religion and metaethics. It is a live tradition with serious internal debates and external interlocutors.`,
  },
  // ---- Islamic Golden Age ----
  {
    id: "falsafa",
    slug: "falsafa",
    name: "Falsafa (Islamic Aristotelianism)",
    eraStart: 800,
    eraEnd: 1200,
    region: "islamic",
    philosopherIds: ["al-farabi", "avicenna", "averroes"],
    shortSummary:
      "Falsafa is the rigorous philosophical tradition of the Islamic Golden Age — Al-Kindi, Al-Fārābī, Avicenna, Averroes — that integrated Greek philosophy with Islamic theological commitments and shaped both later Islamic and Latin Christian thought.",
    fullBody: `*Falsafa* (the Arabic for "philosophy," borrowed from the Greek *philosophia*) names the tradition of rigorous philosophical work in the Islamic world from roughly the ninth to the twelfth centuries. Its central figures are Al-Kindi (Baghdad), Al-Fārābī (Baghdad and Damascus), Avicenna (the eastern Islamic world), Al-Ghazālī (a critic from within), and Averroes (Córdoba).

The tradition synthesized the available Greek philosophical corpus — Aristotle, especially, but also Plato, the Neoplatonists, and the medical writers — with the theological commitments of Islam. The major problems concerned the relation between revelation and reason, the nature of God, the eternity of the world, the soul, and political philosophy.

Al-Ghazālī's critique in the *Incoherence of the Philosophers* shifted the center of gravity in the Islamic East away from *falsafa* and toward *kalām* (theology) and Sufism. The tradition survived in the Persian world — Suhrawardī's Illuminationism, Mulla Sadra's Transcendent Philosophy — and was transmitted to Latin Europe through Sicily and Spain, where Avicenna and Averroes became major authorities for the High Scholastic period.`,
  },
  {
    id: "sufism",
    slug: "sufism",
    name: "Sufism",
    eraStart: 750,
    eraEnd: null,
    region: "islamic",
    philosopherIds: ["ibn-arabi"],
    shortSummary:
      "Sufism is the mystical and contemplative tradition within Islam, with its own philosophical sophistication — particularly in the school of Ibn ʿArabī, whose 'unity of being' is one of the most rigorous mystical metaphysics ever developed.",
    fullBody: `Sufism (*taṣawwuf*) is the broad tradition of Islamic mysticism, organized around practices of remembrance (*dhikr*), poetry, music, and the company of a spiritual teacher (*shaykh*). It has, from early on, also had a philosophical dimension — the attempt to articulate what the mystical path discloses about the nature of reality.

The philosophical wing reaches a high point in Ibn ʿArabī (1165–1240), whose vast *al-Futūḥāt al-Makkiyya* and more compact *Fuṣūṣ al-Ḥikam* develop the doctrine of *waḥdat al-wujūd* — "the unity of being." On this view, there is only one Real (*al-Ḥaqq*); what we call "creation" is the self-disclosure (*tajallī*) of the One through the names and attributes by which it is known. The metaphysics is sophisticated and has been developed by an extensive commentary tradition.

Rumi (1207–1273), the Persian poet, is the most widely read Sufi figure outside the tradition itself; his *Mathnawi* is a philosophical poem of enormous depth. Sufism continues as a living practice across the Muslim world, with major orders (Naqshbandi, Qadiri, Mevlevi, Chishti) and a continuing philosophical tradition.`,
  },
  // ---- Indian ----
  {
    id: "advaita-vedanta",
    slug: "advaita-vedanta",
    name: "Advaita Vedānta",
    eraStart: 700,
    eraEnd: null,
    region: "south-asian",
    philosopherIds: ["adi-shankara"],
    shortSummary:
      "The 'non-dual' school of Hindu philosophy, systematized by Śaṅkara, whose central thesis is that the deepest self (Ātman) and the ultimate reality (Brahman) are identical. Everything else is, in some sense, a mistake.",
    fullBody: `Advaita ("non-dual") Vedānta is the philosophical theology built around the Upaniṣadic claim that *Ātman* (the deepest self) and *Brahman* (ultimate reality) are not two. Ādi Śaṅkara's eighth-century commentaries on the *Brahma Sūtras*, the principal Upaniṣads, and the *Bhagavad Gītā* are the foundational systematic statement.

The school's claims are demanding. There is only one reality (Brahman). The plurality of selves and objects we ordinarily experience is *māyā* — a kind of cognitive misprision that takes the appearance for the real. Liberation (*mokṣa*) is not the attainment of a new state but the recognition of what was already the case: that the apparent individual self is not really other than the absolute.

The school was contested from within Vedānta by Rāmānuja (Viśiṣṭādvaita, "qualified non-dualism") and by Madhva (Dvaita, "dualism"), each defending a different relation between selves and Brahman. The three together constitute the major debate of medieval Indian philosophical theology, with arguments still being developed today.`,
  },
  {
    id: "madhyamaka",
    slug: "madhyamaka",
    name: "Madhyamaka",
    eraStart: 150,
    eraEnd: null,
    region: "south-asian",
    philosopherIds: ["nagarjuna"],
    shortSummary:
      "The 'middle way' school of Mahāyāna Buddhism founded by Nāgārjuna. Its central claim is that nothing exists by virtue of its own essence — and its central method is to show why every alternative to that claim collapses.",
    fullBody: `Madhyamaka — literally "the middle way" — is the school of Mahāyāna Buddhist philosophy founded by Nāgārjuna in the second century CE. The "middle" is between two extremes the school rejects: that things exist with their own intrinsic essence, and that things do not exist at all. Both, the Madhyamaka argues, miss what dependent origination actually means.

The school's central doctrine is *śūnyatā* — emptiness — the claim that nothing has *svabhāva*, own-being. Its central method, deployed across Nāgārjuna's *Mūlamadhyamakakārikā*, is *prasaṅga*: taking each proposed alternative and showing that it produces incoherence when pressed. Madhyamaka does not have its own positive metaphysics. It clears the ground.

The tradition split, after Nāgārjuna's student Āryadeva, into two main interpretive branches: *Svatantrika* (which accepts certain provisional positive theses to make arguments) and *Prasaṅgika* (which insists the school's only move is the negative one). The Tibetan tradition, which inherited Madhyamaka via Candrakīrti, mostly sides with the Prasaṅgika.

Madhyamaka's reach extends far past its institutional homes. The logical sophistication Nāgārjuna developed — and the willingness to follow negative arguments wherever they lead — produced a school of analysis that, by any reasonable measure, was ahead of contemporary work in either the Greek or the Chinese traditions of its century.`,
  },
  {
    id: "yogacara",
    slug: "yogacara",
    name: "Yogācāra",
    eraStart: 300,
    eraEnd: null,
    region: "south-asian",
    philosopherIds: ["vasubandhu"],
    shortSummary:
      "Yogācāra is the 'consciousness-only' school of Mahāyāna Buddhism — the claim that what we take to be a world of independent objects is, on careful analysis, a structured field of experience. The argument is more careful than the idealism caricature.",
    fullBody: `Yogācāra developed in fourth- and fifth-century India under Asaṅga and Vasubandhu. The school's signature claim is *cittamātra* — "consciousness-only" — usually misunderstood as the simple claim that the external world doesn't exist. The actual position is more careful.

What Yogācāra argues against is the naive realism that takes our ordinary experience of independent material objects at face value. Careful analysis of experience, on the Yogācāra account, reveals that we never have access to objects "in themselves" but only to their representations within consciousness. The notion of a "mind-independent object" turns out to do no explanatory work and to be incoherent on inspection.

The school developed an elaborate analysis of consciousness — eight levels, including the *ālaya-vijñāna* ("storehouse consciousness") that carries the karmic seeds of past actions — and a refined account of how dependent origination produces the appearance of an external world.

Yogācāra was transmitted to China (as the Faxiang school), Japan (as Hossō), and Tibet (where it remains a major school). The structural similarities to phenomenology have produced productive contemporary dialogues.`,
  },
  {
    id: "nyaya",
    slug: "nyaya",
    name: "Nyāya",
    eraStart: -200,
    eraEnd: null,
    region: "south-asian",
    philosopherIds: [],
    shortSummary:
      "Nyāya is the Indian school of logic and epistemology — its name means 'reasoning' — and its analysis of inference, perception, testimony, and analogy is one of the most sophisticated in any tradition.",
    fullBody: `Nyāya, founded by the *Nyāya Sūtra* of Gautama (Akṣapāda, c. 2nd century BCE — 2nd century CE), is the orthodox Hindu school dedicated to logic, epistemology, and the means of valid knowledge (*pramāṇas*). The school holds that there are four pramāṇas: *pratyakṣa* (perception), *anumāna* (inference), *upamāna* (comparison), and *śabda* (testimony).

The analysis of inference is the school's most distinctive contribution. The standard form is a five-membered syllogism: thesis, reason, example, application, conclusion. Each member plays a specific role, and the system has built-in checks against typical fallacies. The school's analysis of *vyāpti* — the relation of "pervasion" that makes inference reliable — is among the most subtle in any logical tradition.

*Navya-Nyāya* ("new Nyāya"), developed by Gaṅgeśa in the fourteenth century, refined the system into an extraordinarily precise technical language for handling problems in logic and philosophy of language. Modern logicians and philosophers of language have begun to engage seriously with Navya-Nyāya only recently, and the rewards have been considerable.`,
  },
  // ---- Chinese ----
  {
    id: "confucianism",
    slug: "confucianism",
    name: "Confucianism",
    eraStart: -550,
    eraEnd: null,
    region: "east-asian",
    philosopherIds: ["confucius", "mencius", "xunzi"],
    shortSummary:
      "The dominant ethical and political tradition in East Asia for two and a half millennia. Built around ritual (lǐ), humaneness (rén), and the cultivation of character through family and study, it has shaped Chinese, Korean, Japanese, and Vietnamese societies in ways that outlived the dynasties that endorsed it.",
    fullBody: `Confucianism is the tradition that develops Confucius' (Kǒngzǐ, 551–479 BCE) teachings, primarily through the *Analects*, the *Mencius*, and the writings of Xunzi, into a comprehensive ethical and political philosophy.

The central concepts are *rén* (humaneness, the disposition toward genuine concern for others), *lǐ* (ritual propriety, the patterned forms in which relationships are conducted), *yì* (rightness, appropriate response to a situation), *zhì* (wisdom), and *xiào* (filial piety). These hang together: humans become humane through participation in the rituals that structure family and political life.

The political doctrine — that good government is the extension of good character, that rulers should be exemplary rather than merely effective — became the dominant ideology of the Chinese imperial state, particularly after Han Wudi made Confucianism official in the second century BCE. The civil service examinations, from the Sui dynasty onward, made knowledge of the Confucian classics the gateway to political office.

The tradition continued to develop philosophically — Neo-Confucianism in the Song and Ming dynasties added a metaphysical depth — and has been undergoing a serious revival in the contemporary Chinese-speaking world.`,
  },
  {
    id: "neo-confucianism",
    slug: "neo-confucianism",
    name: "Neo-Confucianism",
    eraStart: 1000,
    eraEnd: 1900,
    region: "east-asian",
    philosopherIds: ["zhu-xi", "wang-yangming"],
    shortSummary:
      "The Song and Ming-dynasty synthesis of Confucian ethics with Buddhist and Daoist metaphysics. Zhu Xi's School of Principle and Wang Yangming's School of Mind are the two major branches, both still influential.",
    fullBody: `Neo-Confucianism developed in the eleventh century as a Confucian response to the philosophical sophistication that Buddhism (especially Chan) and Daoism had brought to Chinese intellectual life. Where classical Confucianism had relatively little to say about metaphysics, Neo-Confucianism developed an elaborate account of *lǐ* (principle), *qì* (material energy), and the human *xīn* (heart-mind) as bearer of moral knowing.

Zhu Xi (1130–1200) is the central figure of the *School of Principle* (*lǐxué*). His position: principle is the rational pattern that makes anything what it is; *qì* is the material through which principle is realized; moral cultivation is the clarification of one's *qì* so that the principle in one's nature can manifest unobstructed. Zhu Xi's commentaries on the *Four Books* — the *Analects*, *Mencius*, *Great Learning*, and *Doctrine of the Mean* — became the basis of the Chinese civil service examinations from 1313 to 1905.

Wang Yangming (1472–1529) is the central figure of the *School of Mind* (*xīnxué*). He challenged Zhu Xi's program of patient external study, arguing that principle is already present in the heart-mind and that the moral task is to extend the innate moral knowing (*liángzhī*) into action. His doctrine of the *unity of knowledge and action* is the school's signature.`,
  },
  {
    id: "daoism",
    slug: "daoism",
    name: "Daoism (philosophical)",
    eraStart: -550,
    eraEnd: null,
    region: "east-asian",
    philosopherIds: ["laozi", "zhuangzi"],
    shortSummary:
      "Philosophical Daoism — distinct from the later religious Daoism — is built around the dao, the underlying pattern of reality, and wú wéi, action that aligns with that pattern rather than forcing against it. The Daodejing and Zhuangzi are the foundational texts.",
    fullBody: `Philosophical Daoism (*Dàojiā*, the "school of the Dao") is distinct from later religious Daoism (*Dàojiào*) with its pantheon, alchemy, and ritual. The philosophical school is built around the *Daodejing* (traditionally attributed to Laozi) and the *Zhuangzi* — two of the most influential texts in Chinese thought.

The central concept is *dao* — "the way," the underlying pattern from which the world emerges and to which it returns. The *Daodejing* opens by acknowledging that the dao that can be told is not the eternal dao, and most of what follows is an attempt to gesture at it without claiming to capture it.

The ethical and political doctrine is *wú wéi* — usually translated "non-action" but better understood as "non-coercive action." Govern by not micromanaging. Act by aligning with the grain of things rather than forcing against it. The strongest political claim is *Daodejing* 60: "Govern a great state as you would cook a small fish."

The *Zhuangzi* develops a more literary, less political wing of the tradition, with anecdotes and parables that argue against the seriousness of categories and the rigidity of the self. The influence on later Chan/Zen Buddhism is direct.`,
  },
  {
    id: "legalism",
    slug: "legalism",
    name: "Legalism (Fǎjiā)",
    eraStart: -350,
    eraEnd: -200,
    region: "east-asian",
    philosopherIds: ["han-feizi"],
    shortSummary:
      "Legalism took the hard view of human nature — people respond to incentives, not exhortations — and built a political program around law, technique, and impersonal positional authority. The Qin used it to unify China; the Han rebranded as Confucian and kept most of the machinery.",
    fullBody: `Legalism (*Fǎjiā*, the "school of law") is the third major school of Chinese political thought, alongside Confucianism and Daoism. Its central figures include Shang Yang (statecraft), Shen Buhai (administrative technique), Shen Dao (positional authority), and Han Feizi, who synthesized their work into a single system.

The school's premises: human nature is primarily self-interested, public-spirited behavior cannot be reliably expected, and political stability depends on impersonal institutions rather than the cultivation of moral rulers. The three legs of the program: *fǎ* (clear public law with predictable rewards and punishments), *shù* (administrative technique for managing officials), and *shì* (the positional authority of the throne, independent of the ruler's personal qualities).

The Qin used Legalism to unify China in 221 BCE and collapsed within fifteen years of its founder's death. The Han dynasty rebranded itself as Confucian and made Legalism the villain of imperial Chinese political history. But the bureaucratic machinery, the impersonal law, the centralized administration — these survived under Confucian rhetoric for the next two thousand years.`,
  },
  {
    id: "chan-zen",
    slug: "chan-zen",
    name: "Chan / Zen Buddhism",
    eraStart: 500,
    eraEnd: null,
    region: "east-asian",
    philosopherIds: ["dogen"],
    shortSummary:
      "Chan (Chinese) / Zen (Japanese) is the Buddhist school that emphasizes direct insight over scriptural study, transmission outside the scriptures, and practice rather than doctrine. Its philosophical implications run deep, especially in Dōgen's later work.",
    fullBody: `Chan Buddhism emerged in sixth-century China as a synthesis of Indian Mahāyāna Buddhism with Daoist sensibilities. Its central commitments are *transmission outside the scriptures*, *direct pointing at the mind*, and *seeing one's nature*. The school distinguishes itself from more scholastic Buddhist traditions by emphasizing practice and immediate insight over textual study, though Chan masters were typically deeply learned.

The school transmitted to Japan as Zen (the Japanese pronunciation of *Chan*) and split into two main branches: Rinzai (which uses *kōan* practice — paradoxical riddles designed to break conceptual fixation) and Sōtō (which emphasizes *shikantaza*, "just sitting" — meditation as practice and realization at once).

Dōgen (1200–1253) is the philosophical depth of the Japanese tradition. His *Shōbōgenzō* — "Treasury of the True Dharma Eye" — develops Zen into a sophisticated philosophical project, particularly in its analyses of practice/realization, being-time, and the relation between conventional and ultimate truth.

The twentieth-century encounter between Zen and Western philosophy — Heidegger's interest, the Kyoto School (Nishida, Nishitani), the popularization through D.T. Suzuki — has produced a substantial body of comparative work.`,
  },
  // ---- Early modern philosophy ----
  {
    id: "renaissance-humanism",
    slug: "renaissance-humanism",
    name: "Renaissance Humanism",
    eraStart: 1350,
    eraEnd: 1600,
    region: "european",
    philosopherIds: ["machiavelli"],
    shortSummary:
      "Humanism was the recovery of classical antiquity — Greek and Latin literature, philosophy, history — as a model for human education and civic life. Petrarch, Erasmus, Pico della Mirandola, Machiavelli all worked within it; the Reformation and the scientific revolution grew out of it.",
    fullBody: `Renaissance Humanism is the intellectual movement, beginning in fourteenth-century Italy and spreading across Europe by the sixteenth, that took the classical Greek and Latin heritage as the model for human formation. The humanists prized the *studia humanitatis* — grammar, rhetoric, poetry, history, moral philosophy — as the curriculum that produced free citizens capable of political life.

The movement's intellectual achievements are uneven. Petrarch's literary recovery, Lorenzo Valla's critical philological work (his demonstration that the *Donation of Constantine* was a medieval forgery is the founding act of modern textual criticism), Erasmus' scholarly editions and biting *Praise of Folly*, Pico della Mirandola's *Oration on the Dignity of Man*, More's *Utopia*, Machiavelli's political writings.

The humanists were not, mostly, original philosophers in the way that the Scholastics or the seventeenth-century rationalists were. Their contribution is methodological and cultural: the conviction that human life and political community can be improved through engagement with the best of the classical past, and the institutional infrastructure (printed books, secular universities, a Republic of Letters) that made that engagement portable.`,
  },
  {
    id: "rationalism",
    slug: "rationalism",
    name: "Continental Rationalism",
    eraStart: 1640,
    eraEnd: 1750,
    region: "european",
    philosopherIds: ["descartes", "spinoza", "leibniz"],
    shortSummary:
      "The 17th-century continental tradition — Descartes, Spinoza, Leibniz — that held the most fundamental knowledge comes from reason rather than the senses. Each built systematic metaphysics on a small set of supposedly self-evident principles. The British Empiricists were having none of it.",
    fullBody: `Continental Rationalism is the seventeenth- and early-eighteenth-century philosophical movement associated with Descartes, Spinoza, and Leibniz. Its members differ enormously, but share a methodological commitment: the most fundamental truths about reality can be reached through rational reflection on self-evident principles, and the senses can mislead us about the structure of what is most real.

Descartes' *Meditations* (1641) provides the template. Doubt everything, find the indubitable, and build outward by clear and distinct ideas. Spinoza's *Ethics* (1677) deploys a geometric method — definitions, axioms, propositions — to derive an austere metaphysics in which there is only one substance. Leibniz' *Monadology* (1714) reaches the opposite conclusion (infinitely many simple substances) by similar means.

The school's reception is a mixed bag. The systematic ambition has not aged well; few contemporary philosophers think the most basic truths can be derived a priori. But specific contributions — Descartes on consciousness, Spinoza on the relation of mind and body, Leibniz on logic and possible worlds — are alive in current debates.`,
  },
  {
    id: "empiricism",
    slug: "empiricism",
    name: "British Empiricism",
    eraStart: 1690,
    eraEnd: 1780,
    region: "european",
    philosopherIds: ["locke", "berkeley", "hume"],
    shortSummary:
      "Locke, Berkeley, and Hume — the three figures of British Empiricism — held that knowledge comes from experience and that any concept not traceable to experience is suspect. Berkeley pushed the doctrine to immaterialism; Hume to skepticism. Kant tried to mediate.",
    fullBody: `British Empiricism is the philosophical tradition associated with John Locke (1632–1704), George Berkeley (1685–1753), and David Hume (1711–1776). Each takes Locke's founding claim — that the mind is a *tabula rasa* (blank slate) on which experience writes — and develops it in a different direction.

Locke uses the doctrine to limit what can be claimed to be known: anything that isn't derivable from sensation or reflection on the operations of the mind is suspect. The political and religious applications (in *A Letter Concerning Toleration* and the *Two Treatises*) are part of the same project of marking what reason can responsibly assert.

Berkeley argues that since we only ever encounter sense-data, the further hypothesis of a material substance underlying them is gratuitous. *Esse est percipi* — to be is to be perceived. What exists are minds and the ideas in them; the consistency of the world is maintained by God's perception.

Hume takes empiricism to its limit. The supposed concept of *causation*, on careful examination, is just the habit of expectation. The supposed concept of *self* is just a bundle of perceptions. The inference from past to future cannot be rationally justified. Hume is cheerful about this; his philosophical conclusions don't bother him in everyday life.

Kant's response — that experience requires not only sense-data but mind-supplied structures (the forms of intuition and categories of understanding) — is the start of the next major movement.`,
  },
  // ---- Enlightenment / Idealism / 19th c ----
  {
    id: "enlightenment",
    slug: "enlightenment",
    name: "The Enlightenment",
    eraStart: 1680,
    eraEnd: 1800,
    region: "european",
    philosopherIds: ["rousseau", "smith", "wollstonecraft", "kant"],
    shortSummary:
      "The 18th-century European movement organized around the use of reason to criticize received authority — religious, political, social — and to ground political and moral commitments in argument rather than tradition. Its legacies, both progressive and problematic, are still being argued about.",
    fullBody: `The Enlightenment is the broad eighteenth-century European intellectual movement organized around the application of critical reason to received authority. Voltaire's anti-clericalism, Rousseau's political philosophy, Smith's economics, Kant's epistemology and ethics, Wollstonecraft's feminism, the *Encyclopédie* — all are part of it, though the participants disagreed about a great deal.

Kant's slogan from "What Is Enlightenment?" (1784) — *sapere aude*, "dare to know" — captures the spirit. The movement's lasting contributions: religious toleration (Locke, Voltaire), separation of church and state, the idea of inalienable human rights, constitutional government, the critique of slavery, the founding of modern economics, modern science as an institutional enterprise.

The critique of the Enlightenment is now also a tradition. Romantic and post-Romantic thinkers from Herder to Adorno and Foucault have argued that the Enlightenment's universal claims often masked particular European and bourgeois interests, that its faith in reason was naive about the role of power and history, and that its instrumentalization of nature has had catastrophic costs. The argument is now part of how we read the Enlightenment.`,
  },
  {
    id: "german-idealism",
    slug: "german-idealism",
    name: "German Idealism",
    eraStart: 1781,
    eraEnd: 1840,
    region: "european",
    philosopherIds: ["hegel", "schopenhauer"],
    shortSummary:
      "The post-Kantian movement — Fichte, Schelling, Hegel — that took Kant's distinction between phenomena and things-in-themselves and tried to overcome it by showing that reality, properly understood, is intelligible all the way down. Whether they succeeded is debated. Whether they shaped the next two centuries of European thought is not.",
    fullBody: `German Idealism is the movement of post-Kantian philosophy associated primarily with Fichte (1762–1814), Schelling (1775–1854), and Hegel (1770–1831), with Schopenhauer as a dissident inheritor. Each takes the question that Kant left open — the relation between phenomena (what we experience) and noumena (things-in-themselves) — and offers a different solution.

Fichte argued that there is no separate noumenal world; what we take to be external reality is posited by the *I* in the course of its self-realization. Schelling tried to give nature its own status as a moment in the self-realization of absolute spirit. Hegel produced the most ambitious version: history itself is the gradual self-realization of *Geist* (spirit), and the apparent opposition between subject and object is overcome in the dialectical movement of consciousness.

The post-Hegelian inheritance is split. The Right Hegelians treated the system as the legitimation of the existing order; the Left Hegelians — Feuerbach, Bauer, Marx — used the dialectical method to critique religion, capitalism, and the state. Almost every major movement in nineteenth- and twentieth-century European thought (Marxism, existentialism, phenomenology, critical theory, postmodernism) is a response to or development of German Idealism.`,
  },
  {
    id: "utilitarianism",
    slug: "utilitarianism",
    name: "Utilitarianism",
    eraStart: 1780,
    eraEnd: null,
    region: "european",
    philosopherIds: ["mill", "singer"],
    shortSummary:
      "The ethical view that the right action is the one that produces the greatest happiness for the greatest number. Founded by Bentham, refined by Mill, defended in different forms by contemporary utilitarians, and constantly criticized for sacrificing individuals to aggregates.",
    fullBody: `Utilitarianism is the moral theory that the rightness of an action depends entirely on its consequences for aggregate welfare. Jeremy Bentham (1748–1832) gave it the classical formulation: actions are right insofar as they maximize the total balance of pleasure over pain. John Stuart Mill refined the position in his *Utilitarianism* (1861), distinguishing higher and lower pleasures and offering a more sophisticated account of how rights and rules fit into a consequentialist framework.

The contemporary debates are extensive. *Act* vs. *rule* utilitarianism: do we evaluate individual actions, or rules that, when generally followed, produce good outcomes? Hedonic vs. preference vs. objective-list theories of welfare: what counts as well-being? *Aggregation*: how do we compare and sum welfare across persons?

The standard objections are persistent. Utilitarianism appears to license, in principle, sacrificing one person to save five (the trolley case is sometimes deployed this way). It treats persons as containers of welfare to be aggregated, with no special weight to integrity, rights, or personal projects (Williams' critique). It produces uncomfortable conclusions in population ethics (the *repugnant conclusion*: a vast population of barely-happy lives can outweigh a smaller population of flourishing ones, on the math).

Contemporary defenders include Peter Singer, Derek Parfit (in part), and the effective altruism movement. The view has been more practically influential — in public policy, animal welfare, global development — than its critics often allow.`,
  },
  {
    id: "marxism",
    slug: "marxism",
    name: "Marxism",
    eraStart: 1844,
    eraEnd: null,
    region: "european",
    philosopherIds: ["marx", "adorno", "habermas"],
    shortSummary:
      "The tradition that develops Marx's analysis of capitalism and the materialist conception of history. It split early into branches — orthodox, Western, structuralist, analytic, critical — that have continued to do philosophical work even where the political movements have receded.",
    fullBody: `Marxism is the broad philosophical and political tradition that develops Karl Marx's work. The orthodox tradition (Lenin, Stalin, Mao) is the political-state version; the *Western Marxism* of the twentieth century (Lukács, Gramsci, the Frankfurt School, the French structuralists, the British New Left) is the philosophical inheritance.

The shared commitments: the materialist conception of history (modes of production shape social, political, and intellectual life); a structural critique of capitalism as a system of exploitation that generates its own contradictions; emancipation as the political horizon. The disagreements are sharp — over the relation of base to superstructure, the role of ideology, the agency of revolutionary change, the relation of class to other axes of domination (race, gender, colonialism).

Twentieth-century Marxist philosophy has been one of the most productive currents in continental thought. Gramsci's *hegemony*, Althusser's *ideological state apparatuses*, the Frankfurt School's critique of mass culture, the French structural Marxists' reading of *Capital*, the British New Left's cultural studies — all are recognizably Marxist contributions to ongoing philosophical debates.`,
  },
  // ---- 20th-century movements ----
  {
    id: "pragmatism",
    slug: "pragmatism",
    name: "Pragmatism",
    eraStart: 1870,
    eraEnd: null,
    region: "american",
    philosopherIds: ["peirce", "james", "dewey", "rorty"],
    shortSummary:
      "The American philosophical tradition — Peirce, James, Dewey, Rorty — built around the idea that the meaning and truth of concepts and beliefs are to be settled by their practical consequences, not by correspondence to some metaphysical reality behind appearances.",
    fullBody: `Pragmatism is the American philosophical tradition founded by Charles Sanders Peirce in the 1870s and developed by William James (1842–1910), John Dewey (1859–1952), and George Herbert Mead (1863–1931). The neopragmatist revival, led by Hilary Putnam and Richard Rorty in the late twentieth century, brought pragmatist themes back into mainstream analytic philosophy.

The pragmatic maxim: consider what effects a concept would have, in practice, if it were true; those effects are the whole content of the concept. Disputes that turn out to make no practical difference are, on this test, not real disputes.

The classical pragmatists developed this in different directions. Peirce kept it as a doctrine in the philosophy of science. James broadened it into a general theory of truth and meaning (and a defense of religious experience). Dewey developed an enormous program in education, ethics, politics, aesthetics, and logic, all unified by the insight that thinking is a form of practical engagement with problematic situations.

The neopragmatists — Putnam, Rorty, Robert Brandom, Cheryl Misak — bring pragmatism into conversation with analytic philosophy of language and mind. The result is one of the more productive currents in contemporary philosophy.`,
  },
  {
    id: "phenomenology",
    slug: "phenomenology",
    name: "Phenomenology",
    eraStart: 1900,
    eraEnd: null,
    region: "european",
    philosopherIds: ["husserl", "heidegger", "merleau-ponty", "sartre", "de-beauvoir"],
    shortSummary:
      "The 20th-century tradition founded by Husserl: a disciplined first-person investigation of how things appear in experience, with assumptions about underlying reality bracketed. The methodological starting point of most twentieth-century continental philosophy.",
    fullBody: `Phenomenology is the philosophical tradition founded by Edmund Husserl at the turn of the twentieth century. Its method is the disciplined first-person investigation of how things appear in conscious experience — what is *given*, with what structure, in what mode — *bracketing* (epoché) the natural-attitude assumption that the world simply exists out there independent of how we encounter it.

Husserl developed this through *Logical Investigations* (1900–01) and *Ideas* (1913) into a comprehensive program. Subsequent phenomenologists — Heidegger, Merleau-Ponty, Sartre, de Beauvoir, Levinas — modified the method in important ways, often disagreeing with Husserl while remaining within phenomenological practice.

The signature claims that emerged include: consciousness is *intentional* (always of or about something); experience has elaborate intrinsic structures (temporality, horizon, embodiment, intersubjectivity) that are missed when we leap to causal explanations; the lived world is not simply the world of physics but a structured field of meaning that any theoretical reconstruction has to start from.

Phenomenology has been the methodological foundation of most twentieth-century continental philosophy. Its specific influence on contemporary philosophy of mind, cognitive science, psychiatry (especially Karl Jaspers and the existential psychotherapists), and qualitative social research is substantial and continues.`,
  },
  {
    id: "existentialism",
    slug: "existentialism",
    name: "Existentialism",
    eraStart: 1840,
    eraEnd: 1980,
    region: "european",
    philosopherIds: ["kierkegaard", "nietzsche", "sartre", "de-beauvoir", "camus", "heidegger"],
    shortSummary:
      "The cluster of mid-twentieth-century thinkers who insisted that the human condition has no script, that freedom is therefore unavoidable, and that most of what we call morality is the cost of pretending otherwise.",
    fullBody: `"Existentialism" is a tag attached, sometimes against the wishes of those tagged, to a loose cluster of nineteenth- and twentieth-century thinkers: Kierkegaard, Nietzsche (proto-existentialists), then Heidegger, Sartre, de Beauvoir, Camus, Merleau-Ponty in the canonical mid-twentieth-century run.

The shared thought, in Sartre's formulation: *existence precedes essence*. A paper knife is made for a purpose; its essence (cutting paper) precedes its existence. A human being is not. We show up first, and have to invent our purposes as we go. There is no human nature waiting to be discovered that will tell you what to do with your Tuesday.

The consequences are heavy. We are, in Sartre's phrase, "condemned to be free." We cannot offload responsibility onto our role, our class, our god, or our circumstances — though all four are eternally tempting. *Bad faith* is the name for the self-deception that hides this from us.

De Beauvoir's contribution — in *The Ethics of Ambiguity* and *The Second Sex* — was to develop the social side that Sartre's individualism couldn't reach: that freedom requires the freedom of others, that the structures we live inside shape what freedom is even available to us, and that liberation is therefore necessarily a political project, not a private one.

Existentialism's reputation as gloomy is unearned. The diagnosis is hard. The prescription — invent meaning, take responsibility, refuse the comforts of pretending — is not despair; it is the alternative to despair.`,
  },
  {
    id: "logical-positivism",
    slug: "logical-positivism",
    name: "Logical Positivism / Vienna Circle",
    eraStart: 1924,
    eraEnd: 1960,
    region: "european",
    philosopherIds: ["carnap"],
    shortSummary:
      "The Vienna Circle of the 1920s and 30s tried to use modern logic to clean up philosophy by exposing most traditional metaphysics as cognitively empty. The strict program collapsed under Quine's critique, but its working assumptions still shape analytic philosophy.",
    fullBody: `Logical Positivism (or *logical empiricism*) is the philosophical movement that grew out of the Vienna Circle — a group of philosophers, mathematicians, and scientists who met in Vienna in the 1920s and 30s — and the Berlin Society. Major figures include Moritz Schlick, Rudolf Carnap, Otto Neurath, Hans Hahn, Herbert Feigl, Hans Reichenbach, and (loosely) the early Wittgenstein.

The program: use the new symbolic logic developed by Frege and Russell to clean up philosophy. The *verification principle* — a sentence is cognitively meaningful only if it can, in principle, be verified empirically — was the destructive instrument. Most traditional metaphysics fails this test and is dismissed not as false but as cognitively empty. What remained for philosophy was logical analysis of scientific language and the clarification of concepts.

The Nazi takeover scattered the Circle; many members emigrated to Britain and the United States, where they became influential in shaping mid-twentieth-century analytic philosophy. A.J. Ayer's *Language, Truth and Logic* (1936) brought a version of the program to English readers.

Quine's "Two Dogmas of Empiricism" (1951) is generally taken to have ended strict logical positivism. But the working commitments — that philosophy is continuous with science, that formal logic is a serious tool, that metaphysical claims need empirical or logical credentials — remain default positions in analytic philosophy.`,
  },
  {
    id: "analytic-philosophy",
    slug: "analytic-philosophy",
    name: "Analytic Philosophy",
    eraStart: 1900,
    eraEnd: null,
    region: "european",
    philosopherIds: ["frege", "russell", "wittgenstein", "carnap", "quine", "kripke", "rawls", "nozick"],
    shortSummary:
      "The dominant philosophical tradition in the English-speaking world for the last century, characterized by careful argument, the use of formal logic, and a focus on language. Its boundaries are contested; its productivity is not.",
    fullBody: `Analytic philosophy is the broad tradition that has dominated philosophy in the English-speaking world since the early twentieth century. Its origins are typically traced to Frege, Russell, Moore, and the early Wittgenstein, with the Vienna Circle providing institutional infrastructure.

The shared features (more characteristic than definitional) include: a commitment to clear, careful argument; engagement with developments in formal logic; substantial attention to language; a respect for scientific knowledge and a frequent attempt to integrate philosophy with the sciences; a piecemeal approach to large questions, breaking them into smaller, more tractable problems.

The field has changed significantly over the century. Mid-twentieth-century analytic philosophy was substantially metaphilosophical (logical positivism, ordinary language philosophy) — focused on what philosophy can do. The decades since Rawls' *A Theory of Justice* (1971) have seen a revival of substantive normative ethics and political philosophy. Philosophy of mind, philosophy of language, metaphysics, philosophy of science, epistemology, ethics, political philosophy — all are productive and contentious.

The boundaries with continental philosophy are real but increasingly porous. Major figures (McDowell, Brandom, Cavell) have worked in ways that draw from both traditions.`,
  },
  {
    id: "frankfurt-school",
    slug: "frankfurt-school",
    name: "Frankfurt School / Critical Theory",
    eraStart: 1923,
    eraEnd: null,
    region: "european",
    philosopherIds: ["adorno", "habermas"],
    shortSummary:
      "The interdisciplinary Marxist tradition that began at the Institute for Social Research in Frankfurt — Horkheimer, Adorno, Marcuse, Benjamin — and continued through Habermas and contemporary critical theory. Its critique of mass culture, instrumental reason, and bureaucratic capitalism has aged better than its predictions.",
    fullBody: `The Frankfurt School began with the founding of the Institute for Social Research in Frankfurt in 1923, with Max Horkheimer becoming director in 1930. The school's distinctive contribution was the combination of empirical social research with Marxist theory and German philosophical sophistication.

The Nazi takeover forced the Institute into exile in New York in 1933; the major Frankfurt School works of the 1940s — *Dialectic of Enlightenment* (Horkheimer and Adorno), *Minima Moralia* (Adorno), *Eros and Civilization* (Marcuse) — were written in exile. The school returned to Frankfurt after the war.

The classical Frankfurt thesis is dark: the same Enlightenment rationality that promised emancipation has, under conditions of advanced capitalism, produced a totally administered society in which mass culture replaces political deliberation and instrumental rationality colonizes every domain of life.

Jürgen Habermas — the major second-generation figure — turned the tradition in a more constructive direction with his theory of communicative action, defending the rational core of Enlightenment commitments against both the pessimism of his elders and the post-structuralist critiques developing in France. The third generation (Axel Honneth, Rainer Forst) continues this work.`,
  },
  {
    id: "structuralism",
    slug: "structuralism",
    name: "Structuralism",
    eraStart: 1916,
    eraEnd: 1980,
    region: "european",
    philosopherIds: ["levi-strauss"],
    shortSummary:
      "The 20th-century approach — derived from Saussure's linguistics — that interprets cultural phenomena as systems of differential relations among signs. Lévi-Strauss in anthropology, Lacan in psychoanalysis, Althusser in Marxism, the early Foucault in the history of knowledge.",
    fullBody: `Structuralism is the broad methodological approach that takes Ferdinand de Saussure's analysis of language — meaning is generated by differential relations among signs, not by signs referring to fixed external objects — and applies it to other cultural phenomena.

The key claim: surface complexity is generated by underlying structural patterns that are not consciously available to the participants in those practices. The job of structuralist analysis is to identify these structures.

Claude Lévi-Strauss applied this to kinship systems and myths. Roland Barthes applied it to literature, fashion, and food. Jacques Lacan reread Freudian psychoanalysis as the analysis of structures in which the unconscious is "structured like a language." Louis Althusser reread Marx through structuralist lenses, treating capitalism as a system of structural relations rather than the result of conscious historical action. The early Foucault (*The Order of Things*, 1966) traced *epistemes* — structural conditions that made certain kinds of knowledge possible in different historical periods.

The post-structuralist generation — Derrida, the later Foucault, Deleuze, Lyotard — emerged from inside structuralism, often by arguing that the structures structuralism described were themselves unstable, historically variable, and shot through with the power relations they were supposed to neutralize.`,
  },
  {
    id: "post-structuralism",
    slug: "post-structuralism",
    name: "Post-Structuralism",
    eraStart: 1966,
    eraEnd: null,
    region: "european",
    philosopherIds: ["foucault", "derrida", "deleuze", "lacan"],
    shortSummary:
      "The French intellectual movement of the late 1960s and after — Derrida, Foucault, Deleuze, Lyotard — that took the structuralist project and pushed it further: the structures themselves are unstable, historical, shot through with the power relations they were supposed to be neutral about.",
    fullBody: `Post-structuralism is the French intellectual movement that emerged in the late 1960s and shaped continental philosophy and the humanities for the next several decades. The major figures include Jacques Derrida, the later Michel Foucault, Gilles Deleuze, Jean-François Lyotard, Julia Kristeva, and (with qualifications) Roland Barthes and Jean Baudrillard.

The movement grew out of structuralism and shared many of its analytical resources, but pushed in a different direction. Where structuralism sought stable underlying structures generating surface variation, post-structuralism argued that the supposed structures were themselves unstable, historically specific, and constituted by what they tried to exclude. Where structuralism's analyses tended to be synchronic and formal, post-structuralism reintroduced history, power, contingency, and the body.

Derrida's deconstruction is one signature project. Foucault's genealogies of power are another. Deleuze's metaphysics of difference is a third. Lyotard's postmodernism is a fourth. The shared sensibility is suspicion of foundationalist claims and attention to what those claims have had to exclude or repress in order to function.

The reception in the English-speaking world — particularly in literature departments, where post-structuralism took hold in the 1980s — was uneven, with some serious engagement and some popularization that the original thinkers found unrecognizable.`,
  },
  {
    id: "postmodernism",
    slug: "postmodernism",
    name: "Postmodernism",
    eraStart: 1979,
    eraEnd: null,
    region: "european",
    philosopherIds: ["lyotard", "baudrillard", "foucault", "derrida"],
    shortSummary:
      "The cluster of late-20th-century positions characterized by suspicion of grand narratives, attention to the constructedness of categories, and skepticism about universalist claims to truth, reason, or progress. The label is often a slur; the underlying questions are real.",
    fullBody: `Postmodernism, as a philosophical label, was popularized by Lyotard's *The Postmodern Condition* (1979) and quickly became one of the most overused terms in late-twentieth-century thought. The label covers a cluster of positions — none of them held by every "postmodern" thinker — including:

- Suspicion of *metanarratives*: the grand stories (Enlightenment progress, Hegelian spirit, Marxist emancipation, scientific advance) that legitimated modernity have lost their credibility.
- Attention to the *constructedness* of categories that previous traditions took as given (race, gender, nature, the self).
- Skepticism about universalist claims to truth, reason, or moral foundations.
- Interest in *play*, irony, pastiche, surface, and the absence of depth as positive features rather than failures.

The major theoretical figures are usually identified as Lyotard, Baudrillard, the later Foucault, Derrida, and Deleuze. Postmodernism in architecture, literature, and visual art has its own history that overlaps with but is not identical to the philosophical movement.

The reception has been intensely polarized. Critics (Habermas, Searle, Sokal) have treated postmodernism as either incoherent or politically irresponsible. Defenders argue the critiques mostly attack a strawman and that the actual work — Derrida, Foucault, the careful theorists — repays serious engagement. The dust has not yet settled.`,
  },
  // ---- Contemporary movements ----
  {
    id: "feminist-philosophy",
    slug: "feminist-philosophy",
    name: "Feminist Philosophy",
    eraStart: 1949,
    eraEnd: null,
    region: "european",
    philosopherIds: ["de-beauvoir", "butler", "nussbaum", "haraway", "bell-hooks"],
    shortSummary:
      "The philosophical tradition that takes seriously the question of what philosophy looks like when the experience and standing of women are not bracketed as exceptions. The work covers metaphysics, epistemology, ethics, political philosophy, and philosophy of science.",
    fullBody: `Feminist philosophy as a distinct field emerged in the mid-twentieth century with Simone de Beauvoir's *The Second Sex* (1949) and developed rapidly from the 1970s onward. Its concerns span every area of philosophy — though some have been particularly transformed:

*Ethics and political philosophy*: the critique of liberal frameworks that ignore the family and unpaid labor (Susan Moller Okin); care ethics and its relation to other moral traditions (Carol Gilligan, Virginia Held, Nel Noddings); the capabilities approach (Martha Nussbaum); analyses of structural injustice (Iris Marion Young).

*Epistemology and philosophy of science*: standpoint theory (Sandra Harding, Patricia Hill Collins); analyses of how the gender of inquirers shapes what counts as knowledge (Donna Haraway); feminist empiricism (Helen Longino).

*Metaphysics and philosophy of mind*: the construction of gender (Judith Butler); the role of embodiment (Iris Marion Young, Rosalyn Diprose); critiques of supposedly neutral metaphysical categories that smuggle in masculine assumptions.

*Intersectional and Black feminist thought*: bell hooks, Patricia Hill Collins, Kimberlé Crenshaw, Audre Lorde — work that examines how gender intersects with race, class, and other axes of domination, and that has often been done in tension with mainstream (largely white, largely middle-class) feminism.`,
  },
  {
    id: "postcolonial-theory",
    slug: "postcolonial-theory",
    name: "Postcolonial Theory",
    eraStart: 1952,
    eraEnd: null,
    region: "african",
    philosopherIds: ["fanon", "said", "spivak"],
    shortSummary:
      "The tradition — Fanon, Said, Spivak, Bhabha — that examines the philosophical, cultural, and political legacies of colonialism. Its central question is how the categories produced by colonial relations continue to shape post-independence societies, including their philosophy.",
    fullBody: `Postcolonial theory examines the cultural, philosophical, and political legacies of European colonialism in the societies it shaped — both colonized and colonizing. The founding texts include Frantz Fanon's *Black Skin, White Masks* (1952) and *The Wretched of the Earth* (1961), Edward Said's *Orientalism* (1978), Gayatri Spivak's "Can the Subaltern Speak?" (1988), and Homi Bhabha's *The Location of Culture* (1994).

The shared question is how the categories produced by colonial relations continue to shape post-independence societies. The categories include not just political ones (sovereignty, nation, citizen) but also philosophical ones (reason, modernity, history, universal) and even the structure of disciplines that examine them.

Postcolonial theory is sometimes confused with *decolonial* thought, which is mostly Latin American (Aníbal Quijano, Walter Mignolo, María Lugones) and tends to emphasize the *coloniality of power* and the recovery of indigenous epistemologies rather than the post-structuralist resources that postcolonial theory often deploys.

The field has been part of major debates about the universality of human rights, the politics of knowledge production, the legacies of slavery and colonization, the politics of museums and archives, and the very project of canon formation.`,
  },
  {
    id: "africana-philosophy",
    slug: "africana-philosophy",
    name: "Africana Philosophy",
    eraStart: 1903,
    eraEnd: null,
    region: "african",
    philosopherIds: ["fanon", "west", "appiah", "bell-hooks"],
    shortSummary:
      "Philosophy in the African and African diasporic traditions — encompassing classical African philosophical thought, Black American philosophical traditions, Caribbean thought, and contemporary African philosophy. Long marginalized in Western academic philosophy; increasingly recognized as a major resource.",
    fullBody: `Africana philosophy is the broad rubric covering philosophical traditions across the African continent and the African diaspora. It includes:

*Classical African philosophy*: the philosophical traditions of pre-colonial Africa (Yoruba, Akan, Bantu, and many others), which have their own metaphysical, ethical, and political systems and have been the subject of serious philosophical study by figures like Kwame Gyekye, Kwasi Wiredu, and Paulin Hountondji.

*African-American philosophy*: a tradition running from W.E.B. Du Bois through Alain Locke, Anna Julia Cooper, Cornel West, bell hooks, Charles Mills, Tommie Shelby, and many others. Major themes include double consciousness, the philosophy of race, Black political thought, and the relation of African-American experience to mainstream American philosophical traditions.

*Caribbean philosophy*: the Martiniquan negritude movement (Aimé Césaire, Léopold Sédar Senghor), the work of Frantz Fanon, Sylvia Wynter, Édouard Glissant, and a continuing rich tradition.

*Contemporary African philosophy*: a productive tradition with figures including Kwame Anthony Appiah, Achille Mbembe, Souleymane Bachir Diagne, and many others, working on the philosophy of identity, postcolonial theory, political philosophy, and the relation of African philosophical traditions to the global philosophical canon.

The marginalization of these traditions in Western academic philosophy has been substantial and is now widely recognized as a problem rather than a feature.`,
  },
  {
    id: "speculative-realism",
    slug: "speculative-realism",
    name: "Speculative Realism / Object-Oriented Ontology",
    eraStart: 2007,
    eraEnd: null,
    region: "european",
    philosopherIds: [],
    shortSummary:
      "A 21st-century cluster of philosophers — Meillassoux, Harman, Brassier, Grant — who push back against what they call the 'correlationism' of post-Kantian philosophy: the assumption that we can only think about reality as it relates to thought.",
    fullBody: `Speculative Realism is a label adopted at a 2007 conference at Goldsmiths College by a group of philosophers who shared a critique of what Quentin Meillassoux called *correlationism*: the post-Kantian assumption that we can only think about reality as correlated with thought, never as it is in itself.

The participants — Meillassoux, Graham Harman, Ray Brassier, Iain Hamilton Grant — disagreed about many things, but they shared an attempt to think reality without that correlationist constraint. Meillassoux's *After Finitude* (2006) develops a "speculative materialism" in which the absolute necessity of contingency is argued for; Harman's *Object-Oriented Ontology* (OOO) treats objects as withdrawn entities whose relations are never exhaustive of their being; Brassier defends a "transcendental nihilism" with strong scientific naturalist commitments; Grant develops a Schellingian philosophy of nature.

The movement has been productive — particularly Harman's OOO, which has been picked up in architecture, art criticism, and the environmental humanities — and contested. It remains a recognizably contemporary movement rather than a settled school.`,
  },
  {
    id: "perennialism",
    slug: "perennialism",
    name: "Perennialism (Traditionalist School)",
    eraStart: 1920,
    eraEnd: null,
    region: "european",
    philosopherIds: ["guenon", "schuon", "lings", "nasr", "coomaraswamy"],
    shortSummary:
      "The 20th-century school founded by Guénon and developed by Schuon, Coomaraswamy, Lings, and Nasr. Its central claim is that the world's authentic religions share a single metaphysical core beneath their irreducibly different forms — and that modern Western thought has lost the thread.",
    fullBody: `Perennialism — also called the Traditionalist School or *Sophia Perennis* — is the philosophical and metaphysical school founded by René Guénon in the 1920s and developed across the twentieth century by Ananda Coomaraswamy, Frithjof Schuon, Titus Burckhardt, Martin Lings, Huston Smith, Seyyed Hossein Nasr, and others.

The shared claim: there is a single underlying metaphysical doctrine — the *philosophia perennis* — that every authentic spiritual tradition has transmitted under different forms appropriate to its historical and cultural matrix. The doctrines, rituals, and moral codes of Hinduism, Buddhism, Christianity, Islam, Judaism, and Taoism are *really* different at the formal level; what they refer to, the perennialists argue, is the same metaphysical reality.

This is not the flat ecumenism of "all religions teach love." The perennialists insist that access to the metaphysical core requires deep submission to a particular form — there is no path "above" or "between" traditions. Schuon called the alternative ("dilettantism") one of modernity's characteristic failures. Most major perennialists therefore committed fully to one tradition (Guénon, Schuon, Lings, Nasr to Sufism; Coomaraswamy was less explicit; Burckhardt to Sufi Islam) while writing comparatively across many.

The diagnostic side of perennialism — its critique of modernity as a metaphysical deviation that has produced the loss of the sacred and the substitution of quantity for quality — was first developed by Guénon (*The Crisis of the Modern World*, 1927; *The Reign of Quantity*, 1945) and extended by every subsequent perennialist. Whatever one's view of the metaphysics, the diagnosis is recognizable even to readers who reject the framework.

The school has remained marginal in secular academic philosophy and substantial in comparative religion, religious studies, traditional Islamic and Catholic intellectual circles, and certain currents in art history and ecological thought (Coomaraswamy on traditional aesthetics; Nasr on religion and the order of nature).`,
  },
  {
    id: "accelerationism",
    slug: "accelerationism",
    name: "Accelerationism",
    eraStart: 1990,
    eraEnd: null,
    region: "european",
    philosopherIds: ["land", "plant", "fisher", "negarestani"],
    shortSummary:
      "Accelerationism began at the CCRU at Warwick in the 1990s — a philosophical reading of capitalism not as a contingent economic system to be reformed but as a self-augmenting cybernetic process. The contemporary debate has split into left-accelerationist and right-accelerationist branches that mostly cannot bear each other's company.",
    fullBody: `Accelerationism names a philosophical position — and now a cluster of incompatible philosophical positions — that emerged from the Cybernetic Culture Research Unit at the University of Warwick in the 1990s under Nick Land and Sadie Plant, and that has since fragmented into several distinct contemporary currents.

The original Landian formulation treats capitalism not as a contingent economic system that politics could choose to alter but as a self-augmenting cybernetic process that progressively deterritorializes every social form it encounters. The argument draws on Deleuze and Guattari's *Anti-Oedipus*, but pushes the position toward conclusions Deleuze and Guattari would have rejected. The political consequence (in Land's later work) was the abandonment of left-revolutionary politics; subsequent Landian positions ("Dark Enlightenment," neoreaction) have alienated most of his original interlocutors.

The contemporary debate, beginning roughly with Alex Williams and Nick Srnicek's *Accelerationist Manifesto* (2013), produced a *left accelerationism* that takes the diagnostic side of Land seriously — capital really is doing what Land said it is doing — while rejecting the political conclusion. The left-accelerationist proposal is that emancipatory politics requires *accelerating* the technological and organizational capacities capitalism has developed, redirecting them away from capital's specific imperatives toward post-capitalist ends. Nick Srnicek and Alex Williams' *Inventing the Future* (2015) is the major book-length statement.

A separate strand — *unconditional accelerationism* (U/ACC) — argues that both right and left accelerationisms are too political, too tied to specific human projects, to grasp the autonomy of the process they describe. The dispute is partly about what kind of agent is genuinely *in* the situation.

Mark Fisher's *Capitalist Realism* (2009) reads as a sustained left-accelerationist intervention before that vocabulary stabilized; Reza Negarestani's *Cyclonopedia* (2008) and *Intelligence and Spirit* (2018) belong to the same conversation. The school remains philosophically active and increasingly contested.`,
  },
  {
    id: "ccru",
    slug: "ccru",
    name: "Cybernetic Culture Research Unit (CCRU)",
    eraStart: 1995,
    eraEnd: 2003,
    region: "european",
    philosopherIds: ["land", "plant", "fisher", "negarestani"],
    shortSummary:
      "The CCRU was an unofficial research collective at Warwick — founded by Sadie Plant in 1995, taken over by Nick Land — that produced, across about a decade, the body of collaborative theory-fiction that the contemporary accelerationist, hauntological, and weird-realist traditions all trace back to.",
    fullBody: `The Cybernetic Culture Research Unit at the University of Warwick was founded by Sadie Plant in 1995 and quickly became something other than what Warwick had authorized. Land took the lead after Plant left in 1997; the collective operated largely outside official university structures, producing collaboratively-authored texts that crossed philosophy, fiction, cyberpunk, occultism, music criticism, and early internet culture.

The CCRU's output is hard to characterize because the genres are deliberately mixed. *Ccru: Writings 1997–2003* (Urbanomic, 2017) collects the major texts: numogram diagrams, fictional pantheons (the *Numogram Pandemonium*), readings of jungle and drum'n'bass as theory-objects, the texture of pre-millennium internet anxiety, sustained engagement with H.P. Lovecraft and J.G. Ballard as philosophical interlocutors. The methodology — which Land later called *theory-fiction* — treats the boundary between concept and narrative as something philosophy should learn to cross rather than police.

What survived the collective's collapse is the constellation of figures who passed through it: Land and Plant most centrally; Mark Fisher (who did his PhD there, *Flatline Constructs*); Iain Hamilton Grant; Reza Negarestani (later, in conversation); Steve Goodman (the music theorist and dub artist Kode9); Anna Greenspan; Ray Brassier (briefly). The collective produced no canonical doctrine, but the figures it formed have shaped subsequent debates across accelerationism, speculative realism, hauntology, contemporary weird fiction, and electronic music theory.

The CCRU is now read as one of the more consequential British philosophical formations of the late twentieth century — partly because its concept of *hyperstition* (fictions that produce their own reality through propagation) describes the mode of its own subsequent influence.`,
  },
  {
    id: "kyoto-school",
    slug: "kyoto-school",
    name: "Kyoto School",
    eraStart: 1913,
    eraEnd: null,
    region: "east-asian",
    philosopherIds: [],
    shortSummary:
      "The 20th-century Japanese school — Nishida Kitarō, Tanabe Hajime, Nishitani Keiji — that synthesizes Buddhist (especially Zen) philosophy with German Idealism and phenomenology. The result is one of the major non-Western contributions to 20th-century philosophy.",
    fullBody: `The Kyoto School is the loose grouping of twentieth-century Japanese philosophers centered on Kyoto University and the work of Nishida Kitarō (1870–1945). Major figures include Tanabe Hajime, Nishitani Keiji, Watsuji Tetsurō, Miki Kiyoshi, and Ueda Shizuteru.

The school's distinctive project is the philosophical articulation of Buddhist (especially Zen) thought in conversation with the major Western traditions, particularly German Idealism, phenomenology, and existentialism. Nishida's central concept of *basho* ("place" or "topos") — a kind of underlying field of being that contains the dualities of subject and object, being and nothingness — is the most distinctive technical contribution.

The school's relationship to Japanese nationalism during the 1930s and 40s is one of its painful complications. Some members supported the Imperial project in ways their philosophical sympathies do not require; the philosophical work itself is independent of, though entangled with, the political failures.

Contemporary engagement with the Kyoto School has been growing, particularly in comparative philosophy and in dialogue with phenomenology and Buddhist studies.`,
  },
  // ---- Madhyamaka (already in V1) reused ----

  // ---- Added in current expansion ----
  {
    id: "liberalism",
    slug: "liberalism",
    name: "Liberalism",
    eraStart: 1680,
    eraEnd: null,
    region: "european",
    philosopherIds: ["locke", "mill", "rawls", "nozick", "taylor"],
    shortSummary:
      "The political tradition built around the individual as the basic unit of moral and political concern, the limited and accountable state, and the rights that constrain what governments can do. Has split into incompatible branches but remains the dominant political philosophy of the West.",
    fullBody: `Liberalism is the broad political tradition that begins with John Locke's *Two Treatises of Government* (1689) and develops across Smith, Bentham, Mill, the framers of the US Constitution, and twentieth-century thinkers from Rawls to Hayek to Nozick.

The shared commitments — held in different forms by different liberals — include: the individual person as the basic unit of moral and political concern; rights (whatever their grounding) that constrain what the state may do to individuals; government legitimated by some form of consent or accountability to the governed; toleration of differing comprehensive views about how to live; some space, called the private sphere or civil society, that the state does not directly govern.

The internal disagreements are sharp. *Classical liberalism* (Locke, Smith, Mill, Hayek) emphasizes negative liberty and limited government. *Egalitarian liberalism* (Rawls, Dworkin) takes substantive economic and social equality as part of what liberalism requires. *Libertarianism* (Nozick) treats Lockean property rights as nearly inviolable. *Welfare liberalism* (Roosevelt-era progressivism) builds large redistributive states inside liberal frameworks.

Liberalism has been criticized from the left (Marx: it masks class domination; Mbembe: it presupposes a universal humanity it never actually extended), from the right (Schmitt: it cannot make hard political decisions; communitarians: it abstracts persons from the communities that constitute them), and from within (feminist critics like Susan Moller Okin: it ignores the family). Its dominance is contested but persistent.`,
  },
  {
    id: "anarchism",
    slug: "anarchism",
    name: "Anarchism",
    eraStart: 1840,
    eraEnd: null,
    region: "european",
    philosopherIds: [],
    shortSummary:
      "The political tradition that holds the state to be neither necessary nor justifiable. Internally fragmented (individualist, communist, syndicalist, mutualist, anarcho-feminist) but united by skepticism of coercive authority as the organizing principle of human life.",
    fullBody: `Anarchism as a self-conscious political tradition begins with Pierre-Joseph Proudhon (*What Is Property?*, 1840), Mikhail Bakunin, Peter Kropotkin, and Emma Goldman in the nineteenth century, with antecedents reaching back to William Godwin and the radical Christian and Daoist traditions.

The shared claim: the coercive state — whether monarchical, liberal-democratic, or socialist — is neither necessary nor justifiable. Human flourishing is better served by voluntary association, mutual aid, and decentralized self-organization than by hierarchical authority backed by the threat of force.

The internal varieties differ substantially. *Individualist anarchism* (Stirner, Tucker) emphasizes the sovereignty of the individual against any coercive collective. *Anarcho-communism* (Kropotkin, Goldman) treats communal property and mutual aid as the natural alternative to both state and capital. *Anarcho-syndicalism* takes worker-run unions as the organizational form of post-state society. *Mutualism* (Proudhon) builds around credit cooperatives and reciprocal exchange. Contemporary *anarcha-feminism*, *queer anarchism*, and *green anarchism* add further dimensions.

Anarchism is regularly dismissed by mainstream political philosophy as utopian, but its diagnostic critiques — of the state's monopoly on legitimate violence, of the way liberal democracies depend on coercion they don't acknowledge, of the historical record of revolutionary socialism actually producing new states — have a way of returning when other traditions exhaust themselves. The intellectual revival in late-twentieth-century social movements (Graeber, Bookchin, the alter-globalization movement) reflects this.`,
  },
  {
    id: "deconstruction",
    slug: "deconstruction",
    name: "Deconstruction",
    eraStart: 1967,
    eraEnd: null,
    region: "european",
    philosopherIds: ["derrida"],
    shortSummary:
      "Derrida's method of reading. Not 'destroy' — that's the standard misreading. Deconstruction finds, in any sufficiently complex text, the points at which its own argument depends on the very things it tries to exclude.",
    fullBody: `Deconstruction is Jacques Derrida's method, developed across *Of Grammatology* (1967), *Writing and Difference* (1967), and *Speech and Phenomena* (1967), and elaborated through dozens of subsequent books.

The label is misleading. *Deconstruct* is not "demolish" or "show to be false." Deconstructive reading takes a text on its own terms, follows its argument carefully, and shows that the text's stated position depends — for the very coherence of its formulation — on the things it tries to exclude. The most famous examples are Derrida's readings of Plato (the *Phaedrus* on writing), Rousseau (the *Essay on the Origin of Languages*), Husserl, and Saussure. In each, the hierarchical opposition the author thinks he is establishing turns out, on close reading, to be one the text cannot maintain.

The political and ethical force of deconstruction has been the most disputed element. Critics (Habermas, Searle) read it as a kind of sophisticated relativism that erases the possibility of substantive argument. Defenders argue that deconstruction is a discipline of careful reading that exposes precisely the kinds of premature closure (in politics, in metaphysics, in the canon of texts deemed worth reading) that have historically been used to suppress the perspectives, persons, and questions excluded by them.

Late Derrida wrote increasingly explicitly about justice, hospitality, mourning, and democracy — arguing that deconstruction itself is, in a precise sense, *justice* — the never-completed responsiveness to what cannot be fully captured by any existing framework.`,
  },
  {
    id: "queer-theory",
    slug: "queer-theory",
    name: "Queer Theory",
    eraStart: 1990,
    eraEnd: null,
    region: "american",
    philosopherIds: ["butler", "foucault"],
    shortSummary:
      "The body of theoretical work — Butler, Sedgwick, Edelman, Halberstam — that takes the constructedness of sexual and gendered identity seriously without thereby denying its political reality. Builds on Foucault, Derrida, and feminist theory.",
    fullBody: `Queer theory crystallized as a distinct field in the early 1990s, with Eve Kosofsky Sedgwick's *Epistemology of the Closet* (1990), Judith Butler's *Gender Trouble* (1990), and Teresa de Lauretis' use of "queer theory" as a working term at a 1990 UC Santa Cruz conference.

The shared commitments: gender and sexual identity are not natural categories with discoverable boundaries but historically constituted formations whose apparent stability is a product of repeated institutional and social practice. The hetero/homo binary, the male/female binary, the cis/trans distinction, the normal/abnormal valuation — each is a system whose violence is partly hidden by its presentation as neutral description.

Foucault's *History of Sexuality* (1976) is the major intellectual precondition. His argument that modern sexuality was not repressed but *produced* by the disciplinary regimes that claimed to manage it gave queer theory its central methodological move. Butler's *performativity* (gender as the iterated performance that produces what it appears merely to express) gave it the conceptual tool that travels most widely outside specialist contexts.

The internal disputes — between assimilationist and anti-assimilationist tendencies, between universalist and minoritizing claims, between queer theory and trans studies — have been productive. The field has now generated a substantial second and third generation (Halberstam, Edelman, Muñoz, Ahmed, Puar) whose work moves in directions the founders did not anticipate.`,
  },
  {
    id: "transhumanism",
    slug: "transhumanism",
    name: "Transhumanism",
    eraStart: 1957,
    eraEnd: null,
    region: "american",
    philosopherIds: [],
    shortSummary:
      "The position that humanity should use technology to transcend its current biological limits — extending life, enhancing cognition, eliminating involuntary suffering. Started as a fringe position; now adjacent to (and often arguing with) AI safety, longevity research, and the broader rationalist movement.",
    fullBody: `Transhumanism takes the name from Julian Huxley's 1957 essay "Transhumanism," but its philosophical roots run through Enlightenment thinkers (Condorcet, Godwin) who anticipated technologies that would extend human life and capacities. The contemporary movement emerged in the 1980s and 90s around figures like FM-2030 (formerly F.M. Esfandiary), Max More, and Nick Bostrom, and stabilized through the World Transhumanist Association (later Humanity+).

The substantive commitments vary, but commonly include: longevity and life extension as ethical priorities; cognitive enhancement (through technology, biology, or both) as broadly desirable; the cryonic preservation of brain or body in case future technology can revive; the eventual possibility of mind-uploading or substrate-independent personal continuity; some form of openness to artificial general intelligence as a development to engage rather than reject.

The philosophical literature ranges from Bostrom's careful work on existential risk and the simulation argument, to more speculative positions on the long-term future and the cosmological implications of indefinite life extension. The movement overlaps significantly with the contemporary AI safety / AI alignment field, the rationalist community around LessWrong, and the longevity research community.

Criticism has been substantial. Religious traditions object that transhumanism evades the proper acknowledgment of finitude and creaturely limit. Egalitarian critics worry that enhancement technologies will deepen existing inequalities catastrophically. Conservative critics from Leon Kass onward argue that the transhumanist project mistakes what makes a life worth living. The debate is increasingly important as the technologies the movement anticipated start to become real.`,
  },
  {
    id: "mysticism",
    slug: "mysticism",
    name: "Mysticism",
    eraStart: -500,
    eraEnd: null,
    region: "european",
    philosopherIds: ["plotinus", "ibn-arabi", "schuon"],
    shortSummary:
      "The current that runs across most major religious traditions, holding that the highest knowledge of ultimate reality is direct experiential acquaintance rather than discursive reasoning. Plotinus, the Christian mystics, the Sufis, the Vedāntins.",
    fullBody: `Mysticism is the cross-traditional name for the currents within major religious and philosophical traditions that hold the highest form of knowledge of ultimate reality to be *direct experiential acquaintance* — variously called *gnosis*, *theoria*, *fana*, *samādhi*, *mokṣa* — rather than the discursive reasoning that ordinary philosophy and theology rely on.

The phenomenon is genuinely cross-cultural. Within Christianity: Pseudo-Dionysius the Areopagite (5th c.), Meister Eckhart, Saint Teresa of Ávila, John of the Cross, the Cloud of Unknowing. Within Judaism: the Kabbalistic tradition. Within Islam: the Sufi orders. Within Hinduism: the Upaniṣadic and Advaita traditions. Within Buddhism: the meditative traditions across schools. Within Greek philosophy: Plotinus and the Neoplatonic tradition.

The philosophical questions mysticism raises are sharp. What is the epistemic status of mystical experience? William James (*Varieties of Religious Experience*, 1902) argued that mystical experiences have characteristic features — ineffability, noetic quality, transiency, passivity — across traditions, and that they constitute genuine knowledge from the experiencer's perspective even if their content cannot be straightforwardly verified externally. Steven Katz argued (1978) that mystical experiences are themselves always tradition-shaped, not raw uninterpreted data. The debate continues.

The Perennialist tradition (Guénon, Schuon, Coomaraswamy, Lings, Nasr) reads the cross-traditional structure as evidence of a single underlying metaphysical reality that all the traditions are approaching from different cultural starting points. Critics argue this overstates the structural similarity and projects a specific (often Advaitin or Sufi) metaphysics onto traditions whose own self-understanding differs.`,
  },
  {
    id: "process-philosophy",
    slug: "process-philosophy",
    name: "Process Philosophy",
    eraStart: 1900,
    eraEnd: null,
    region: "european",
    philosopherIds: ["whitehead"],
    shortSummary:
      "The metaphysical tradition — Bergson, Whitehead, Hartshorne, the recent revival in Deleuze and Stengers — that treats becoming as more fundamental than being. The basic units of reality are events of change, not enduring substances.",
    fullBody: `Process philosophy is the broad twentieth-century tradition that holds *becoming* to be more fundamental than *being*. The basic units of reality, on this view, are not enduring substances (things that persist through time while their accidents change) but events of becoming — *actual occasions*, in Whitehead's vocabulary — each of which arises out of prior events and contributes to the conditions for subsequent ones.

The major figures: Henri Bergson (whose *durée* is the proximate ancestor); Alfred North Whitehead, whose *Process and Reality* (1929) is the canonical systematic statement; Charles Hartshorne, who developed the theological implications across decades of work; in the contemporary scene, Isabelle Stengers and the Deleuzian tradition have recovered Whitehead for the post-structuralist generation.

The position has had a smaller mainstream presence than analytic or phenomenological philosophy but a distinctive long arc. Process theology (Hartshorne, Cobb) gave Christian theology a way to take time and change seriously without sacrificing divine reality. Contemporary work on emergence, on philosophy of biology, and on ecological metaphysics has drawn on Whiteheadian resources. The tradition's central wager — that the substance metaphysics inherited from Aristotle has been a long detour, and that thinking through events is what philosophy should have been doing all along — remains a live option.`,
  },
  {
    id: "pyrrhonism",
    slug: "pyrrhonism",
    name: "Pyrrhonism",
    eraStart: -300,
    eraEnd: 300,
    region: "greek",
    philosopherIds: ["pyrrho", "sextus-empiricus"],
    shortSummary:
      "The most radical school of ancient skepticism. Founded by Pyrrho, systematized by Aenesidemus, and given its definitive form in Sextus Empiricus' Outlines — the source nearly all subsequent skepticism draws on.",
    fullBody: `Pyrrhonism is the more radical of the two ancient skeptical schools (the other, Academic Skepticism, took over Plato's Academy from the mid-third century BCE). Pyrrho left no writings; the school survives to us through Sextus Empiricus' three works in the second century CE.

Three claims structure the position. *Isostheneia*: for any proposition, opposing arguments can be marshaled with equal force. *Epoché*: the honest response is to suspend judgment. *Ataraxia*: tranquility follows, not because suspension produces peace by some psychological mechanism, but because the strain of trying to settle what cannot be settled is itself the source of unrest.

Sextus distinguishes Pyrrhonism sharply from Academic Skepticism. The Academic, he says, *asserts* that nothing can be known — a dogmatic claim about the impossibility of knowledge. The Pyrrhonist makes no such assertion; she simply finds, on case-by-case examination, that confidence is unjustified, and reports the suspension as a practical attitude rather than a doctrine.

The rediscovery of Sextus by Renaissance humanists — Henri Estienne published the Latin in 1562 — was one of the more consequential events in the prehistory of modern philosophy. Montaigne, Descartes (negatively), Hume, and Bayle all read Sextus carefully. Contemporary epistemology has rediscovered Pyrrhonism as a serious option worth taking seriously rather than dismissing as paradox.`,
  },
  {
    id: "jainism",
    slug: "jainism",
    name: "Jainism",
    eraStart: -600,
    eraEnd: null,
    region: "south-asian",
    philosopherIds: [],
    shortSummary:
      "Jainism is among the oldest continuous philosophical traditions in the world. Its commitment to ahiṃsā (non-harming) is unmatched in any other tradition for its rigor; its metaphysics — anekāntavāda, the many-sidedness of reality — anticipates philosophical positions only recently rediscovered in the analytic tradition.",
    fullBody: `Jainism's recorded history begins with Mahāvīra (599–527 BCE) — though Jains hold the tradition to be far older, descending through twenty-four prior *tīrthaṅkaras*. Across two and a half millennia the tradition has produced a continuous philosophical and ethical project distinct from both Hindu and Buddhist alternatives.

The central ethical commitment is *ahiṃsā* — non-harming, in a stronger sense than any other tradition formalizes. The Jain monk strains drinking water through cloth, sweeps the path before stepping, and refuses several forms of food on the grounds that gathering them would harm the producing organism. The argument is not utilitarian but metaphysical: every sentient being carries a soul whose karma is affected by the harms it receives, and one's own karma is affected by the harms one inflicts.

The metaphysical doctrine is *anekāntavāda* — the many-sidedness of reality. No single description of any complex object can be complete; truth is irreducibly perspectival, and intellectual humility about this is built into the system. The technical apparatus — *syādvāda* (the doctrine of seven-valued logic for partial truths) and *nayavāda* (the systematic enumeration of standpoints) — is among the most sophisticated in any premodern logic tradition.

The two main monastic branches (Digambara and Śvetāmbara) split in late antiquity over questions of monastic practice; both continue today. The philosophical figures who shaped the tradition include Umāsvāti (c. 2nd c., the *Tattvārtha Sūtra*), Kundakunda (c. 2nd c., on the soul), Haribhadra (8th c.), and Hemacandra (12th c.).`,
  },
  {
    id: "critical-race-theory",
    slug: "critical-race-theory",
    name: "Critical Race Theory",
    eraStart: 1989,
    eraEnd: null,
    region: "american",
    philosopherIds: [],
    shortSummary:
      "The legal-academic tradition — Derrick Bell, Kimberlé Crenshaw, Patricia Williams, Richard Delgado, Charles Mills — that examines how race is constructed and reproduced by ostensibly neutral legal frameworks. Now widely misappropriated; the actual scholarly tradition is more careful than the political controversy suggests.",
    fullBody: `Critical Race Theory (CRT) emerged in the late 1970s and 80s in American legal scholarship as a response to limits the early figures saw in both liberal civil-rights legalism and Marxist critique. The founding figures — Derrick Bell at Harvard, then Kimberlé Crenshaw, Mari Matsuda, Patricia Williams, Richard Delgado, Charles Lawrence, and others — produced a distinctive body of legal and philosophical work in conversation with critical legal studies, Black feminist thought, and postcolonial theory.

The shared commitments include: race is not a natural category but a social and legal construction with continuing material effects; that construction has been produced and reproduced by ostensibly race-neutral legal and institutional frameworks; *interest convergence* (Bell) — substantial civil rights gains have historically occurred when they happened to align with majority interests; the *colorblind* posture in law often produces continuity of unequal effects rather than equality of treatment; and the perspective of those subjected to racial subordination has distinctive standing in identifying these patterns.

Kimberlé Crenshaw's 1989 paper "Demarginalizing the Intersection of Race and Sex" introduced the concept of *intersectionality* — the analysis of how race, gender, class, and other axes of subordination overlap in ways that single-axis frameworks miss. The concept has since traveled far beyond the CRT context.

The recent political controversy about "CRT" has tended to be about a much broader set of curricula and frameworks than the actual scholarly tradition; whatever one's views on the politics, the philosophical work the original figures produced remains a serious resource.`,
  },
  {
    id: "liberation-philosophy",
    slug: "liberation-philosophy",
    name: "Philosophy of Liberation",
    eraStart: 1971,
    eraEnd: null,
    region: "american",
    philosopherIds: ["dussel"],
    shortSummary:
      "Filosofía de la Liberación — the Latin American philosophical movement, founded around Enrique Dussel and the Argentine philosophers of the early 1970s, that begins philosophy from the perspective of the excluded and the colonized rather than the European universal subject.",
    fullBody: `The Latin American Philosophy of Liberation crystallized in the early 1970s, particularly at the 1971 conference in Salta, Argentina, around a group of philosophers including Enrique Dussel, Juan Carlos Scannone, Osvaldo Ardiles, and Mario Casalla. The movement was profoundly affected by the political conditions of the period: the wave of military dictatorships, the dependency-theory analysis of Latin American underdevelopment, the influence of Vatican II and liberation theology, and the influence of Levinas (whose ethics of the Other Dussel adapted as the framework's philosophical foundation).

The central commitment: the standard history of European philosophy has been written from the perspective of the European subject as universal, treating the rest of the world as the "outside" that European philosophy contemplates and develops categories for. The Philosophy of Liberation begins from the perspective of the *excluded other* — the colonized, the impoverished, the indigenous, the racially and economically subordinated — and asks what philosophy looks like when reconstructed from that starting point.

The relation to liberation theology was originally close. The movement has since branched: Dussel's later work has developed a substantial philosophy of economics and politics; Latin American feminist thinkers (María Lugones, Ofelia Schutte) have extended the framework; *decolonial thought* (Aníbal Quijano, Walter Mignolo, Catherine Walsh) shares much with the Philosophy of Liberation while developing its own distinctive vocabulary.`,
  },
  {
    id: "logical-atomism",
    slug: "logical-atomism",
    name: "Logical Atomism",
    eraStart: 1900,
    eraEnd: 1930,
    region: "european",
    philosopherIds: ["russell", "wittgenstein"],
    shortSummary:
      "The brief but influential metaphysical program of the early Russell and the early Wittgenstein: reality is composed of logically simple facts; complex propositions are truth-functions of atomic ones; philosophy is logical analysis of language down to the atomic level.",
    fullBody: `Logical Atomism is the metaphysical program developed by Bertrand Russell in the lectures he gave in London in 1918 (*The Philosophy of Logical Atomism*) and by Ludwig Wittgenstein in the *Tractatus Logico-Philosophicus* (1921). The two versions differ in significant ways, but the shared structure is unmistakable.

The central claim: reality is composed of *atomic facts* (Russell) or *Sachverhalte* (Wittgenstein) — basic states of affairs that cannot be analyzed into simpler facts. Complex propositions are truth-functions of atomic propositions, and complex facts in the world are composed of atomic facts. Logical analysis of language — Russell developed the *theory of descriptions* as a model — reveals the underlying structure that ordinary language obscures.

The program lasted barely a decade. Wittgenstein himself abandoned it in his later work, where language games and forms of life replace the picture theory of meaning. Russell shifted his positions repeatedly through the 1920s and 30s. The Vienna Circle inherited the methodology (logical analysis of language; the world as composed of logically simple facts) without the substantive metaphysics.

But the longer arc is real. The *form* of analytic philosophy — taking sentences apart, asking what their logical form is, asking what the world has to be like for them to be true — was given enduring shape by the Logical Atomist moment, even where subsequent analytic philosophy rejected its specific theses.`,
  },
  {
    id: "buddhism-umbrella",
    slug: "buddhism",
    name: "Buddhism (umbrella)",
    eraStart: -500,
    eraEnd: null,
    region: "south-asian",
    philosopherIds: ["buddha", "nagarjuna", "vasubandhu", "dogen"],
    shortSummary:
      "The 2,500-year-old tradition that begins with the Buddha and develops across the Theravāda, Mahāyāna, and Vajrayāna lineages, including Madhyamaka, Yogācāra, and Chan/Zen.",
    fullBody: `Buddhism is the family of philosophical and religious traditions that traces back to the Buddha's teaching in north India in roughly the fifth century BCE. The early teachings — preserved in the Pali Canon — center on the Four Noble Truths (suffering exists, has a cause, can end, and there is a path that ends it) and the doctrine of *anātman* (no permanent self).

Buddhism splits into three major branches. *Theravāda* ("the teaching of the elders") is the southern Buddhism of Sri Lanka and Southeast Asia, conservative in its claim to preserve the earliest teachings and focused on individual liberation through the Eightfold Path. *Mahāyāna* ("the great vehicle") emerges around the first century CE and develops the Bodhisattva ideal — liberation pursued for the sake of all sentient beings — alongside the philosophical schools (Madhyamaka, Yogācāra) that gave Buddhism much of its conceptual depth. *Vajrayāna* ("the diamond vehicle") is the tantric tradition of Tibet and parts of East Asia, integrating Mahāyāna philosophy with ritual practice and meditative discipline aimed at accelerated liberation.

The major philosophical contributions: the *anātman* doctrine (no self) and its long working-out across the Abhidharma; Nāgārjuna's Madhyamaka (no own-being, dependent origination, two truths); Yogācāra's consciousness-only thesis and analysis of the *ālaya-vijñāna* (storehouse consciousness); the Chan/Zen tradition's claim that the highest insight is direct rather than scriptural; the Tibetan tradition's syncretic preservation of nearly all the earlier philosophical schools alongside its own tantric developments.

The encounter between Buddhism and Western philosophy has been productive in both directions over the last two centuries, particularly around questions of mind, consciousness, no-self, and the metaphysics of dependence.`,
  },
];

export function getSchool(slug: string): School | undefined {
  return SCHOOLS.find((s) => s.slug === slug);
}
