import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Pre-Socratic, Classical Greek, Hellenistic, Roman.
export const ANCIENT: Philosopher[] = [
  {
    id: "thales",
    slug: "thales",
    name: "Thales of Miletus",
    birthYear: -624,
    deathYear: -546,
    region: "greek",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Illustrerad_Verldshistoria_band_I_Ill_107.jpg"),
    themes: ["metaphysics"],
    shortSummary:
      "Thales is the first philosopher we have a name for — and the first to ask the question that started it all: what is everything made of, fundamentally? His answer was water. He was wrong; that he asked is what matters.",
    fullBody: `Thales is the first person in the Greek tradition we call a philosopher, and what makes him the first is not his answer but his question. He asked what everything was *fundamentally* made of, on the assumption that there is a single underlying stuff and that human reason can get at it without invoking the gods. Aristotle, three centuries later, treats this as the founding move of the discipline (*Metaphysics* I.3, 983b20).

His answer — water — sounds quaint now, and Aristotle is candid that the reasoning is partly lost. But the structure of the move is what survives: a unifying explanation, naturalistic, in principle revisable. Everything that the Pre-Socratics do after Thales is variations on this theme.

He is also remembered for predicting an eclipse (probably the one of 28 May 585 BCE) and for falling into a well while looking at the stars, which a Thracian servant girl laughed at — the original philosopher joke (Plato, *Theaetetus* 174a).`,
    sources: [
      { title: "Pre-Socratic Philosophy (SEP)", cite: "Curd, P. SEP entry 'Presocratic Philosophy'", url: "https://plato.stanford.edu/entries/presocratics/" },
      { title: "Aristotle, Metaphysics", cite: "trans. W.D. Ross, I.3, 983b20" },
    ],
  },
  {
    id: "anaximander",
    slug: "anaximander",
    name: "Anaximander",
    birthYear: -610,
    deathYear: -546,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Anaximander_Mosaic.jpg"),
    themes: ["metaphysics"],
    shortSummary:
      "Anaximander did what Thales didn't: refused to pick a familiar substance. His arche was the apeiron — the boundless — because no specific thing could be the source of all specific things. The move is more sophisticated than it gets credit for.",
    fullBody: `Anaximander's *apeiron* — usually translated "the boundless" or "the indefinite" — is the first attempt at a genuinely abstract metaphysical principle. He saw the problem with Thales' water immediately: if the underlying stuff is itself a specific thing, it has properties that constrain what it can become. Hot can't come from cold; wet can't come from dry. Whatever is genuinely fundamental must be *indeterminate*, neither hot nor cold nor wet nor dry, and capable of generating all of them.

This is two and a half thousand years before Spinoza's substance or Kant's noumenon, and the structural move is the same. He also proposed the first naturalistic cosmology — Earth as an unsupported cylinder floating in space, held in place by equidistance from all directions — which is closer to right than anything for the next two thousand years.

Only one fragment of his book survives (DK 12 B 1), and it describes things "paying penalty and retribution to each other for their injustice according to the assessment of time." It is the oldest surviving sentence of Western philosophy.`,
    sources: [
      { title: "Anaximander (SEP)", cite: "Couprie, D. SEP entry 'Anaximander'", url: "https://plato.stanford.edu/entries/anaximander/" },
    ],
  },
  {
    id: "pythagoras",
    slug: "pythagoras",
    name: "Pythagoras",
    birthYear: -570,
    deathYear: -495,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Kapitolinischer_Pythagoras_adjusted.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Pythagoras founded a religious-mathematical brotherhood that believed reality was, at bottom, number. The theorem isn't even his most interesting claim — that the universe is mathematically structured is.",
    fullBody: `Almost everything attributed to Pythagoras was probably done by his followers, who maintained a vow of silence and a habit of crediting the founder. What survives in his name is a doctrine that reality is, at its deepest, mathematical — that the ratios that make music harmonious also structure the cosmos. The Pythagoreans found these ratios in everything they could measure: octaves, planetary orbits, body proportions. Plato inherited the impulse and gave the Forms a mathematical cast.

The brotherhood was as much a cult as a school: communal property, vegetarianism, taboos against beans, and a belief in the transmigration of souls. Heraclitus, who hated them, called Pythagoras "the chief of all impostors."

What we now call the Pythagorean theorem was known to Babylonian mathematicians a thousand years earlier; the proof, however, may be his school's. The deeper legacy is the conviction that mathematical structure is not a description of reality but constitutive of it — a thought picked up by everyone from Galileo to Max Tegmark.`,
    sources: [
      { title: "Pythagoras (SEP)", cite: "Huffman, C. SEP entry 'Pythagoras'", url: "https://plato.stanford.edu/entries/pythagoras/" },
    ],
  },
  {
    id: "heraclitus",
    slug: "heraclitus",
    name: "Heraclitus",
    birthYear: -535,
    deathYear: -475,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Utrecht_Moreelse_Heraclite.JPG"),
    themes: ["metaphysics"],
    shortSummary:
      "Heraclitus thought reality was strife — opposites in tension, never resolved, generating everything we see. 'You cannot step in the same river twice' is the most quoted line of Greek philosophy and almost always misunderstood.",
    fullBody: `Heraclitus' surviving fragments are aphorisms — short, dense, deliberately puzzling. He wrote, by his own account, for the few who could handle being puzzled. Nicknamed "the obscure" in antiquity, he was right that most readers would skim him.

His central claim: reality is structured by *strife* — the unresolved tension between opposites. Hot and cold, wet and dry, life and death are not stable categories that occasionally clash; they generate each other through their conflict. The famous line about the river (DK 22 B 12) is not "everything is in flux" in the lazy sense people use. It is more precise: the river is what it is *because* the water is always different. Stop the change and you no longer have a river — you have a pond.

Plato's view that this made knowledge impossible (*Theaetetus* 152e) is unfair. Heraclitus thought there was an underlying *logos* — a rational order — that the strife expressed. The trick was to listen for the logos rather than mistake the surface noise for it. That distinction outlived him.`,
    sources: [
      { title: "Heraclitus (SEP)", cite: "Graham, D. SEP entry 'Heraclitus'", url: "https://plato.stanford.edu/entries/heraclitus/" },
    ],
  },
  {
    id: "parmenides",
    slug: "parmenides",
    name: "Parmenides",
    birthYear: -515,
    deathYear: -450,
    region: "greek",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Sanzio_01_Parmenides.jpg"),
    themes: ["metaphysics", "logic"],
    shortSummary:
      "Parmenides argued, in a single poem, that change is logically impossible and that everything is in fact one unchanging Being. The argument is wrong — but no one was sure why for two thousand years, which is more interesting than being right.",
    fullBody: `Parmenides' surviving poem, *On Nature*, is the first sustained piece of argument in Western philosophy — not aphorism, not myth, but a deductive chain. His conclusion: change is impossible, plurality is impossible, and reality is a single unchanging Being.

The argument turns on a hard reading of "is" and "is not." If something comes to be, it must come from what is not — but what is not cannot give rise to anything. If something passes away, it goes into what is not — but what is not is nothing. So nothing comes to be or passes away. Reality is one, full, ungenerated, eternal (DK 28 B 8).

This was clearly wrong, and yet every Greek philosopher after him had to deal with it. Plato's Forms, Aristotle's matter and form, the atomists' void — all are attempts to find logical room for change without violating Parmenidean strictures on being. The atomists in particular conceded the argument and then proposed that what is not (the void) does, after all, exist. That move opened physics.

Plato wrote a dialogue named after Parmenides in which the elder destroys the young Socrates' theory of Forms — partly homage, partly demolition. It is one of Plato's hardest texts.`,
    sources: [
      { title: "Parmenides (SEP)", cite: "Palmer, J. SEP entry 'Parmenides'", url: "https://plato.stanford.edu/entries/parmenides/" },
    ],
  },
  {
    id: "zeno-of-elea",
    slug: "zeno-of-elea",
    name: "Zeno of Elea",
    birthYear: -490,
    deathYear: -430,
    region: "greek",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: null,
    themes: ["logic", "metaphysics"],
    shortSummary:
      "Zeno's paradoxes — Achilles and the tortoise, the arrow that can't move — were arguments for Parmenides. Take change seriously, he showed, and it falls apart. Mathematicians needed two and a half millennia to answer him.",
    fullBody: `Zeno was Parmenides' student, and his paradoxes are weapons in defense of his teacher. If reality is many and changing — as common sense insists — then absurdities follow. Therefore reality is one and unchanging.

The most famous: Achilles can never catch a tortoise with a head start, because by the time he reaches where the tortoise was, it has moved a little further; by the time he reaches that, it has moved a little further again; and so on, infinitely (Aristotle, *Physics* 239b14). The argument depends on the assumption that an infinite sequence of intervals cannot be completed. We now know it can be — convergent series have finite sums — but pinning down why required the nineteenth-century arithmetization of the continuum.

Zeno's paradoxes are not historical curiosities. They forced philosophers and mathematicians to specify exactly what a continuum is, what a limit is, and how something can be both indefinitely divisible and finitely complete. Modern analysis is the answer; Zeno wrote the question.`,
    sources: [
      { title: "Zeno of Elea (SEP)", cite: "Palmer, J. SEP entry 'Zeno of Elea'", url: "https://plato.stanford.edu/entries/zeno-elea/" },
    ],
  },
  {
    id: "democritus",
    slug: "democritus",
    name: "Democritus",
    birthYear: -460,
    deathYear: -370,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Hendrick_ter_Brugghen_-_Democritus.jpg"),
    themes: ["metaphysics"],
    shortSummary:
      "Democritus proposed that everything was made of indivisible particles moving through empty space. He was, broadly, correct — twenty-three centuries before anyone could confirm it.",
    fullBody: `Democritus, with his teacher Leucippus, proposed the most influential wrong theory in the history of science — except that it turned out, more or less, to be right. Reality, on their account, is made of *atoms* (literally "uncuttable" particles) moving in *void* (empty space). Atoms differ in shape, size, and arrangement; all observable properties — color, taste, temperature — emerge from atomic configurations.

The motivation was partly Parmenidean. Atomism takes the prohibition on coming-into-being from nothing seriously — atoms are eternal, neither created nor destroyed — and accommodates change by letting them rearrange. The void is the controversial part; Parmenides had denied that "what is not" exists, and Democritus had to insist that empty space was a real kind of nothing.

The match with modern atomic theory is imperfect but striking. Atoms are not actually indivisible, and the void is more complicated than empty Newtonian space. But the move — that macroscopic phenomena are emergent from microscopic invariants — is the move that physics still makes.

Democritus was also, by ancient accounts, the "laughing philosopher." He found the spectacle of human pretension funny rather than tragic. It is a temperament worth keeping.`,
    sources: [
      { title: "Democritus (SEP)", cite: "Berryman, S. SEP entry 'Democritus'", url: "https://plato.stanford.edu/entries/democritus/" },
    ],
  },
  {
    id: "protagoras",
    slug: "protagoras",
    name: "Protagoras",
    birthYear: -490,
    deathYear: -420,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Salvator_Rosa_-_Democritus_and_Protagoras.jpg"),
    themes: ["epistemology", "politics"],
    shortSummary:
      "Protagoras, the most famous of the Sophists, taught that 'man is the measure of all things.' Whether this is shallow relativism or a serious epistemological claim is exactly the question Plato spent his career arguing about.",
    fullBody: `"Of all things the measure is man: of things that are, that they are; of things that are not, that they are not" — Protagoras' surviving fragment (DK 80 B 1). What it means is contested. Plato reads it as relativism: whatever appears true to me is true *for me*. Other readers — including some recent ones — take it as the more careful claim that what counts as real always depends on a perspective and that pretending otherwise smuggles in a god's-eye view that no human has.

Either way, Protagoras is the most serious of the Sophists, and he gets a worse reputation than he deserves. He taught rhetoric and political judgment for pay (which the Athenian aristocracy resented), and he charged that his enemies were "those who claim to know which they do not." He was prosecuted for impiety after writing that on the gods he could not say whether they exist or not — "the question is obscure and human life is short."

Plato's dialogue *Protagoras* gives him a fair hearing for a Sophist; *Theaetetus* attacks him in absentia. Reading both is the right way to meet him.`,
    sources: [
      { title: "Protagoras (SEP)", cite: "Bonazzi, M. SEP entry 'Protagoras'", url: "https://plato.stanford.edu/entries/protagoras/" },
    ],
  },
  {
    id: "socrates",
    slug: "socrates",
    name: "Socrates",
    birthYear: -470,
    deathYear: -399,
    region: "greek",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Socrate_du_Louvre.jpg"),
    themes: ["ethics", "epistemology"],
    shortSummary:
      "Socrates wrote nothing, taught no doctrine, and asked questions that ruined careers. The Athenians killed him for it. He is the most consequential person in Western philosophy partly because he refused to be the kind of person philosophy was about to become.",
    fullBody: `Socrates wrote nothing. Everything we have is filtered through Plato, Xenophon, and Aristophanes, each with an axe to grind. What survives is a method: ask, listen, expose the contradictions in what your interlocutor thinks he knows, refuse to substitute your own answer. The *elenchus* — Socratic refutation — is the engine of every Platonic dialogue that has Socrates in it as a real interlocutor and not as a mouthpiece.

The trial in 399 BCE was on charges of "corrupting the youth" and "introducing new gods." The real charge was political: Socrates had taught Critias and Charmides, leaders of the brief oligarchic terror after Athens lost the Peloponnesian War, and the restored democracy wanted blood. He refused exile, defended himself by sharpening every offense, and was sentenced to drink hemlock.

What survives as "Socratic ethics" is mostly two claims: that virtue is a kind of knowledge, and that no one does wrong willingly (anyone who does wrong has miscalculated what's good for them). Both are contested, and Aristotle thought the second was simply false — people do know better and do worse all the time. But the bet that ethics is open to rational examination, and that the unexamined life is not worth living (*Apology* 38a), is the bet that the whole tradition inherits.`,
    sources: [
      { title: "Socrates (SEP)", cite: "Nails, D. SEP entry 'Socrates'", url: "https://plato.stanford.edu/entries/socrates/" },
      { title: "Plato, Apology", cite: "trans. G.M.A. Grube, Hackett 1981" },
    ],
  },
  // ----- The two deep Plato + Aristotle entries (original V1 essays) -----
  {
    id: "plato",
    slug: "plato",
    name: "Plato",
    birthYear: -428,
    deathYear: -348,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 9,
    imageUrl: wikiImage("Plato_Silanion_Musei_Capitolini_MC1377.jpg"),
    themes: ["metaphysics", "ethics", "politics", "epistemology"],
    shortSummary:
      "Plato's wager was that the world your senses report is a thin, flickering version of something realer. He spent his life trying to describe the source of the flicker, and the political consequences of admitting that most of us never look up from the wall.",
    fullBody: `## Why Plato matters

Plato's wager was that the world your senses report is a thin, flickering version of something realer. The chair in front of you is a chair because it shares in something — an unchanging pattern that makes a chair a chair and not a stool. He called these patterns *Forms*, and he meant it. The Forms are not metaphors. They are, on his account, more real than the things you can touch.

If that sounds suspicious, that is the appropriate first reaction. The argument is in the *Republic*, and it ends with one of the strangest political claims in Western philosophy: that since most people will never grasp the Forms, most people should not run the city. Only those who have done the climb — the philosopher-kings — should rule. Two and a half thousand years later, every political theorist is still arguing about this.

## The cave

The image that survives is the *Allegory of the Cave* (*Republic* 514a–520a). Prisoners chained facing a wall mistake shadows for the world. One escapes, sees the sun, returns to free the others, and is killed for the trouble. The shadows are appearance. The sun is the Good. The killing is what happened to Socrates, and Plato never quite recovered from it.

## What Plato is doing with Socrates

Almost everything we have from Plato is a dialogue, and almost every dialogue stars Socrates. This is a literary problem and a philosophical one. The early dialogues seem to record Socrates' actual method: ask a question, get an answer, show the answer is incoherent, repeat. The later dialogues use "Socrates" as a mouthpiece for things the historical Socrates probably never said. Reading Plato well means tracking when the mouthpiece changes hands.

## The Forms, briefly

In *Phaedo* 74a–75b, Plato argues that we recognize two sticks as "equal" only because we already have access to *Equality itself* — a standard nothing in the world quite meets. Generalize this and you have his metaphysics: every meaningful concept points to a Form, and the Forms are what philosophy is for.

The strongest objection comes from Plato himself. In *Parmenides* 130e–134e, he lets the elder Parmenides shred the theory of Forms in front of a young Socrates. It is the closest thing in ancient philosophy to a thinker publishing his own demolition. Whether Plato thought the Forms survived the attack is one of the open questions of the field.

## Where to go next

Start with the *Apology* — Socrates' trial — for the moral stakes. Then *Republic* Books I, VII, and X for the political vision and the cave. *Symposium* if you want to see the literary range. *Parmenides* only after you have read the other three, and only if you want to feel intelligently lost.`,
    sources: [
      { title: "Plato (Stanford Encyclopedia of Philosophy)", cite: "Kraut, R. SEP entry 'Plato'", url: "https://plato.stanford.edu/entries/plato/" },
      { title: "Plato's Republic", cite: "trans. G.M.A. Grube, rev. C.D.C. Reeve, Hackett 1992" },
      { title: "Plato's Phaedo", cite: "trans. G.M.A. Grube, Hackett 1977" },
    ],
  },
  {
    id: "aristotle",
    slug: "aristotle",
    name: "Aristotle",
    birthYear: -384,
    deathYear: -322,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 10,
    imageUrl: wikiImage("Aristotle_Altemps_Inv8575.jpg"),
    themes: ["metaphysics", "ethics", "politics", "logic"],
    shortSummary:
      "Aristotle is what happens when a student spends twenty years in Plato's Academy and then politely decides his teacher was wrong about almost everything. He invented logic, founded biology, and wrote the first serious book on how to live a good life — and they are all the same project.",
    fullBody: `## Why Aristotle matters

Aristotle is what happens when a student spends twenty years in Plato's Academy and then politely decides his teacher was wrong about almost everything. Where Plato pointed up — to Forms beyond the world — Aristotle pointed at the world: this fish, this constitution, this person trying to act well in a particular situation. His default move is to take a phenomenon seriously enough to classify it before theorizing about it.

This is why he invented so many fields. *Prior Analytics* invents formal logic. *On the Soul* invents psychology. *Politics* is the first comparative political science. *Nicomachean Ethics* is the first ethics treatise that does not collapse into either rules or vibes.

## The good life is an activity

The *Nicomachean Ethics* opens with a question: what is the highest good for a human being? Aristotle's answer is *eudaimonia* — usually translated "happiness," but closer to "flourishing." Crucially, *eudaimonia* is not a feeling. It is an activity: the activity of a human soul living in accordance with virtue, over a complete life (*NE* I.7, 1098a16–18).

This rules out a great deal. The miserable virtuous person is not flourishing. Neither is the cheerful coward. Neither is the genuinely good twelve-year-old, because flourishing requires a full arc. You can fail at it through bad luck, and Aristotle is honest about this — see his discussion of Priam at *NE* I.10.

## Virtue as a mean

The famous doctrine: virtue is a mean between two vices, one of excess and one of deficiency. Courage sits between rashness and cowardice. Generosity between waste and meanness. The mean is not an arithmetic midpoint — it is the appropriate response in the actual situation, judged by a person of practical wisdom (*phronesis*).

This is more demanding than it sounds. The mean for me at this moment is not the mean for you at yours. There is no formula. There is only the slow training of judgment, which Aristotle thinks takes most of a life.

## Where Aristotle parts from Plato

Plato thought the Form of the Good explained why things are good. Aristotle thought this confused the issue (*NE* I.6). Goodness, for him, is always the goodness of *something* — a good horse, a good knife, a good citizen. There is no separate Form floating somewhere, doing the explanatory work. This is the move that turns metaphysics from a search for what lies behind appearance into a careful study of what appears.

## Where to start

*Nicomachean Ethics* Books I and II for the framework. *Politics* Book I if you want to see the same method applied to constitutions. *Metaphysics* Book IV only after you have read the *Ethics* — it is technical and rewards patience.`,
    sources: [
      { title: "Aristotle (Stanford Encyclopedia of Philosophy)", cite: "Shields, C. SEP entry 'Aristotle'", url: "https://plato.stanford.edu/entries/aristotle/" },
      { title: "Nicomachean Ethics", cite: "trans. Terence Irwin, Hackett 1999" },
      { title: "Politics", cite: "trans. C.D.C. Reeve, Hackett 1998" },
    ],
  },
  {
    id: "diogenes",
    slug: "diogenes",
    name: "Diogenes of Sinope",
    birthYear: -412,
    deathYear: -323,
    region: "greek",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Jean-Léon_Gérôme_-_Diogenes_-_Walters_37131.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Diogenes lived in a barrel, mocked Plato to his face, masturbated in public, and called himself a citizen of the world. Beneath the theater was a serious claim: most of what we call civilization is a costume convention.",
    fullBody: `Diogenes founded — by example more than argument — what became Cynicism. The aim was *autarkeia*, self-sufficiency, achieved by stripping away anything you didn't need and refusing the social fictions you didn't believe in. He lived in a large clay jar in the marketplace, owned a single cup until he saw a child drinking from cupped hands and threw the cup away.

The famous encounters are mostly Diogenes Laertius' compilations (*Lives of Eminent Philosophers* VI), and probably composite. When Alexander the Great offered him anything he wanted, Diogenes told him to stand out of the sunlight. When Plato defined man as a featherless biped, Diogenes plucked a chicken and threw it over the Academy wall: "Behold, Plato's man."

The serious thought beneath the theater: most of what we are taught to want is convention masquerading as nature. Cosmopolitanism — the word is his, *kosmopolitēs* — was an answer to the question "where are you from?" Diogenes said: the universe.`,
    sources: [
      { title: "Diogenes Laertius (SEP)", cite: "SEP entry 'Diogenes Laertius'", url: "https://plato.stanford.edu/entries/diogenes-laertius/" },
    ],
  },
  {
    id: "epicurus",
    slug: "epicurus",
    name: "Epicurus",
    birthYear: -341,
    deathYear: -270,
    region: "greek",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Epikouros_BM_1843.jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Epicurus has been slandered by twenty-three centuries of people who never read him. He didn't preach hedonism in the modern sense; he preached tranquility through the absence of pain, the cultivation of friendship, and the cure of religious fear. He was, by his own standards, austere.",
    fullBody: `What survives of Epicurus is fragments and three letters preserved by Diogenes Laertius. The key one — the *Letter to Menoeceus* — sets out the ethics in two pages.

The good life, on Epicurus' account, consists in *ataraxia* (untroubledness) and *aponia* (absence of physical pain). What this calls for is mostly negative: stop fearing death (you won't be there when it happens — *Letter to Menoeceus* 125), stop fearing the gods (they don't intervene), distinguish necessary from unnecessary desires, cultivate friendship. The garden he lived and taught in admitted women and slaves, which was scandalous at the time.

He is *not* recommending a life of indulgence; he thought indulgence produced more pain than it relieved. The Roman attacks on "Epicureans" as gluttons are propaganda, partly from Stoics who were competing for the same students.

His physics is Democritean atomism with one notable addition: the *swerve* (clinamen), a small random deviation in atomic motion that breaks strict determinism and leaves room for free will (Lucretius, *De Rerum Natura* II.216–293). Whether the swerve actually does that work is contested. Whether Epicurus thought it did is not.`,
    sources: [
      { title: "Epicurus (SEP)", cite: "Konstan, D. SEP entry 'Epicurus'", url: "https://plato.stanford.edu/entries/epicurus/" },
      { title: "Lucretius, De Rerum Natura", cite: "trans. M.F. Smith, Hackett 2001" },
    ],
  },
  {
    id: "zeno-of-citium",
    slug: "zeno-of-citium",
    name: "Zeno of Citium",
    birthYear: -334,
    deathYear: -262,
    region: "greek",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Zenon_of_Citium_pushkin.jpg"),
    themes: ["ethics", "logic", "metaphysics"],
    shortSummary:
      "Zeno of Citium founded Stoicism after his cargo ship was wrecked and a stranger handed him a copy of Xenophon. He concluded the loss was a stroke of luck and started teaching on a painted porch.",
    fullBody: `Almost nothing of Zeno's writing survives directly; the system is reconstructed from later sources. He founded Stoicism around 300 BCE, teaching on the *Stoa Poikile* (the Painted Porch) in Athens. The school's name comes from the building.

Zeno's contribution was structural: he organized philosophy into the three divisions Stoics kept for the next five hundred years — logic, physics, ethics — and insisted they were inseparable, "as in the egg the shell is logic, the white physics, the yolk ethics" (Diogenes Laertius VII.40).

The ethics is what survived in popular memory, mediated through Cicero, Seneca, Epictetus, and Marcus Aurelius. The logic — sophisticated propositional reasoning that anticipated some twentieth-century moves — was lost until the modern era and is now finally being reappraised.`,
    sources: [
      { title: "Stoicism (SEP)", cite: "Baltzly, D. SEP entry 'Stoicism'", url: "https://plato.stanford.edu/entries/stoicism/" },
    ],
  },
  {
    id: "epictetus",
    slug: "epictetus",
    name: "Epictetus",
    birthYear: 50,
    deathYear: 135,
    region: "roman",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Epictetus.jpg"),
    themes: ["ethics"],
    shortSummary:
      "Epictetus was born a slave and ended a major Roman philosopher. His Stoicism is the most usable version — no metaphysics to swallow, just a single distinction practiced until it becomes a habit.",
    fullBody: `Epictetus was born enslaved in Phrygia (now Turkey), studied Stoicism under Musonius Rufus, and was freed by his master after Nero's death. He taught in Rome until Domitian banished philosophers in 89 CE, then in Nicopolis on the Adriatic coast for the rest of his life. Like Socrates, he wrote nothing. His student Arrian recorded the *Discourses* and compiled the shorter *Enchiridion* ("Handbook").

The whole system, for Epictetus, hinges on one distinction: some things are in our power, and some are not. Our judgments, intentions, and attitudes are in our power. Our health, reputation, the loyalty of others, what happens tomorrow, are not. The whole of practical wisdom is keeping these distinct and staking our peace on the first column (*Enchiridion* §1).

Marcus Aurelius read the *Discourses* obsessively, and the *Meditations* quote and rework Epictetus on almost every page. The fact that an enslaved Phrygian shaped the inner life of a Roman emperor is one of the more remarkable transmissions in the history of thought.`,
    sources: [
      { title: "Epictetus (SEP)", cite: "Long, A.A. SEP entry 'Epictetus'", url: "https://plato.stanford.edu/entries/epictetus/" },
      { title: "Discourses and Enchiridion", cite: "trans. Robin Hard, Oxford 2014" },
    ],
  },
  {
    id: "seneca",
    slug: "seneca",
    name: "Seneca",
    birthYear: -4,
    deathYear: 65,
    region: "roman",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Pseudo-Seneca_BM_GR1879.jpg"),
    themes: ["ethics"],
    shortSummary:
      "Seneca tutored Nero, made a fortune that the Stoics theoretically forbade, and wrote essays so good that two thousand years later people still quote them at funerals. The contradiction is the interesting part.",
    fullBody: `Seneca was a senator, playwright, essayist, and the most uncomfortable Stoic in the canon. He was tutor to the young Nero and remained at court through the early reign; he amassed enormous wealth, which his critics (then and now) pointed out was hard to square with Stoicism's professed indifference to externals. He was eventually ordered by Nero to commit suicide and did so with what observers called philosophical calm.

His prose — letters to his friend Lucilius (*Epistulae Morales*), essays on anger, on the brevity of life, on providence — is the most readable Stoicism in the canon. The famous moves are mostly his: that "we suffer more often in imagination than in reality" (*Ep.* 13), that time is the only thing we own and yet treat as worthless (*De Brevitate Vitae* 1), that "as long as you live, keep learning how to live" (*Ep.* 76).

The biographical contradiction is real, but so is the philosophy. Read him knowing both.`,
    sources: [
      { title: "Seneca (SEP)", cite: "SEP entry 'Seneca'", url: "https://plato.stanford.edu/entries/seneca/" },
      { title: "Letters from a Stoic", cite: "trans. Robin Campbell, Penguin Classics" },
    ],
  },
  {
    id: "lucretius",
    slug: "lucretius",
    name: "Lucretius",
    birthYear: -99,
    deathYear: -55,
    region: "roman",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Titus_Lucretius_Carus.jpg"),
    themes: ["metaphysics", "ethics"],
    shortSummary:
      "Lucretius wrote one poem, never named in his own time, that explained Epicurean atomism, attacked religion, and described natural selection eighteen hundred years before Darwin. The rediscovery of De Rerum Natura helped detonate the Renaissance.",
    fullBody: `*De Rerum Natura* ("On the Nature of Things") is a 7,400-line Latin poem that presents Epicurean physics, psychology, and ethics with literary precision and unconcealed rhetorical force. It survives in a single Carolingian manuscript that was rediscovered by Poggio Bracciolini in 1417, and the rediscovery — Stephen Greenblatt's *The Swerve* argues — was a significant ingredient in the intellectual climate of the Renaissance.

What Lucretius transmits is striking. Reality is atoms and void. The soul is mortal and material; death is not to be feared because there is no one left to fear it (Book III). Religious terror is the source of much human cruelty (Book I, on the sacrifice of Iphigenia). The universe was not made for us; it contains far more inhospitable space than the bit we live in.

Most strikingly, in Book V he describes a rough mechanism of natural selection: many kinds of organisms came into being, most could not survive or reproduce, only some persisted (V.837–877). This is not Darwin — there's no population genetics, no descent with modification — but the structural insight that fit forms persist because unfit ones don't is unmistakably present.`,
    sources: [
      { title: "Lucretius (SEP)", cite: "Sedley, D. SEP entry 'Lucretius'", url: "https://plato.stanford.edu/entries/lucretius/" },
    ],
  },
  {
    id: "marcus-aurelius",
    slug: "marcus-aurelius",
    name: "Marcus Aurelius",
    birthYear: 121,
    deathYear: 180,
    region: "roman",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 7,
    imageUrl: wikiImage("Marcus_Aurelius_Glyptothek_Munich.jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Marcus Aurelius ran the largest empire in the world by day and wrote private notes to himself by night about how not to be ruined by running it. We have the notes. He never meant us to.",
    fullBody: `## Why Marcus matters

Marcus Aurelius ran the largest empire in the world by day and wrote private notes to himself by night about how not to be ruined by running it. We have the notes. He never meant us to. The *Meditations* are titled, in Greek, simply *Ta eis heauton* — "to himself."

This is the strangest fact about the book. It is the only major work of Stoicism written by someone with absolute power, and it reads as a person trying to talk himself out of becoming what power tends to make. Every entry is an argument with the next twenty-four hours.

## The Stoic core, distilled

Marcus inherited a system from Epictetus (whose *Discourses* he had read closely) with a clean spine: some things are up to us — our judgments, our intentions — and some are not — our reputation, the weather, the loyalty of our subordinates. The whole of practical wisdom, Epictetus says, is keeping these two categories distinct (*Enchiridion* §1). Marcus quotes and reworks this constantly.

The opening of *Meditations* II is the clearest example: "Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil" (II.1). The point is not contempt. The point is to remove surprise as an excuse for bad behavior in oneself.

## Where Marcus is doing something new

Earlier Stoics — Zeno, Chrysippus — built the system. Epictetus made it portable for the unfree. Marcus is the first major Stoic writing from inside the conditions that earlier Stoics had said do not matter: wealth, status, command. The interesting thing about the *Meditations* is how often he has to reconvince himself.

"Even in a palace, life may be lived well" (V.16). That sentence is not bravado. It is the sound of someone making it true by writing it.

## Memento mori, properly read

The famous lines — *thou couldst leave life right now* (II.5), *everything that exists is already a seed of what shall come from it* (IV.36) — are usually quoted as morbid. They are not. They are tools for keeping the present in scale. If today is the last, the trivial irritations get smaller and the genuine obligations get larger. The exercise is meant to redirect attention, not produce despair.

## Where to start

The *Meditations* in any decent translation — Hays is the most readable, Hard the most precise. Read Book II first; it is the most concentrated. Then Books V, IX, and XII. The order does not matter much. Marcus did not write a book.`,
    sources: [
      { title: "Marcus Aurelius (Stanford Encyclopedia of Philosophy)", cite: "Gill, C. SEP entry 'Marcus Aurelius'", url: "https://plato.stanford.edu/entries/marcus-aurelius/" },
      { title: "Meditations", cite: "trans. Robin Hard, Oxford World's Classics 2011" },
      { title: "Epictetus' Enchiridion", cite: "trans. Nicholas White, Hackett 1983" },
    ],
  },
  {
    id: "plotinus",
    slug: "plotinus",
    name: "Plotinus",
    birthYear: 204,
    deathYear: 270,
    region: "roman",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Plotinos.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Plotinus took Plato's Forms and pushed them up one more level — to The One, beyond being and beyond description. Everything that exists, on his account, is an overflow from that source. He is the bridge that carried Greek metaphysics into Christianity, Islam, and Judaism.",
    fullBody: `Plotinus is the founder of what we call Neoplatonism — a label invented in the nineteenth century, but the system is real. His student Porphyry collected his treatises after his death and arranged them in six groups of nine: the *Enneads*.

The architecture has three primary levels. *The One* is beyond being and predication; it is not a being among others but the source from which beings come. From the One emanates *Nous* (Intellect), which contains the Forms — Plato's Forms, kept and intensified. From Nous emanates *Soul*, which is what gives life to the physical world. Everything that exists is, on this picture, an overflow at successive removes from the absolute source.

The philosophical mood is mystical-rationalist. Plotinus thought you could ascend back up the levels by contemplation — a discipline of turning inward and stripping away what was contingent until what remained was what you most fundamentally were. Augustine read him in the 380s and the influence on Christian theology is enormous; Avicenna and Ibn Arabi inherit a parallel line in the Islamic tradition; Maimonides folds elements into Jewish theology. Plotinus is the most influential pagan philosopher in the religions he never knew.`,
    sources: [
      { title: "Plotinus (SEP)", cite: "Gerson, L. SEP entry 'Plotinus'", url: "https://plato.stanford.edu/entries/plotinus/" },
    ],
  },
];
