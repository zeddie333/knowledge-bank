import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Indian, Chinese, Japanese — ancient through early modern.
// Eras here are mapped roughly: "ancient" through Han / Gupta, "medieval" after.
export const ASIAN: Philosopher[] = [
  // ---- Indian ----
  {
    id: "buddha",
    slug: "buddha",
    name: "Siddhārtha Gautama (the Buddha)",
    birthYear: -563,
    deathYear: -483,
    region: "south-asian",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Buddha_in_Sarnath_Museum_(Dhammajak_Mutra).jpg"),
    themes: ["ethics", "metaphysics", "religion"],
    shortSummary:
      "The Buddha's claim was that suffering has a structure, that the structure has a cause, and that the cause can be removed. The whole of Buddhism is the working out of those three sentences.",
    fullBody: `The historical Siddhārtha Gautama left no writings; the earliest layer of teachings is the Pali Canon, compiled centuries after his death. What survives as the founding insight is the *Four Noble Truths*: there is suffering (*duḥkha*); it has a cause (craving and clinging); the cause can be ended; there is a path that ends it.

The metaphysical move underneath is *anātman* — no-self. What you call "you" is a temporary aggregation of physical and mental processes; there is no unchanging core beneath the changes. Clinging — to pleasures, to permanence, to a fixed self — is what generates suffering, and seeing through the cling is what releases it.

This is not despair. The Buddha rejected both ascetic self-torture and indulgent satisfaction as paths; the *Middle Way* between them is the Eightfold Path: right view, intention, speech, action, livelihood, effort, mindfulness, concentration.

Buddhism splits early into multiple traditions — Theravāda in Sri Lanka and Southeast Asia, Mahāyāna in East Asia, Vajrayāna in Tibet — each developing the original framework in different directions. Nāgārjuna's Madhyamaka is the most philosophically rigorous of the Mahāyāna developments.`,
    sources: [
      { title: "The Buddha (SEP)", cite: "Siderits, M. SEP entry 'Buddha'", url: "https://plato.stanford.edu/entries/buddha/" },
    ],
  },
  {
    id: "nagarjuna",
    slug: "nagarjuna",
    name: "Nāgārjuna",
    birthYear: 150,
    deathYear: 250,
    region: "south-asian",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 11,
    imageUrl: wikiImage("Nagarjuna_with_Mahasiddhas.JPG"),
    themes: ["metaphysics", "logic", "religion"],
    shortSummary:
      "Nāgārjuna's question was whether anything has an essence of its own — and his answer, defended in a hundred-page sequence of dilemmas, was no. Nothing whatsoever stands on its own. Everything is what it is only in relation to everything else. This is harder than it sounds.",
    fullBody: `## Why Nāgārjuna matters

Nāgārjuna's question was whether anything has an essence of its own — *svabhāva*, "own-being." His answer, defended in a hundred-page sequence of dilemmas called the *Mūlamadhyamakakārikā*, is no. Nothing whatsoever stands on its own. Everything is what it is only in relation to everything else. This is harder than it sounds, and it is the single most important move in Mahāyāna Buddhist philosophy.

If you have heard of the doctrine of *śūnyatā* — "emptiness" — Nāgārjuna is the reason. It does not mean nothing exists. It means nothing exists *independently*. A chair exists, but it exists by depending on wood, on a carpenter, on the concept of sitting, on the room around it, on the eyes seeing it. Take any of these away and there is no chair. There is no chair-in-itself underneath the dependencies that would still be a chair if all of them vanished.

## The structure of the argument

Nāgārjuna's method is relentlessly negative. He does not propose a competing theory. He takes whatever theory you bring — that there is a soul, that there is causation, that there is motion, that there is suffering — and shows that it produces contradiction when pushed. The *Mūlamadhyamakakārikā* opens with the famous "eight negations": no arising, no ceasing, no permanence, no annihilation, no coming, no going, no unity, no plurality (*MMK* dedicatory verses).

A representative move: in Chapter 2, Nāgārjuna asks whether motion happens on the path already traversed, the path not yet traversed, or the path currently being traversed. Each option turns out to be incoherent. The conclusion is not that nothing moves. The conclusion is that "motion" has no own-being — it is a useful designation that breaks down under analysis.

## The two truths

To avoid the obvious objection — *so are you saying there is no table?* — Nāgārjuna deploys the *two truths* doctrine. Conventional truth (*saṃvṛti-satya*): yes, there is a table; please use it. Ultimate truth (*paramārtha-satya*): the table has no essence; it is empty. The two truths do not contradict each other because they are answering different questions (*MMK* 24.8–10). Confusing the levels is what produces both nihilism and metaphysical inflation, and Nāgārjuna rejects both.

## Why this matters outside Buddhism

The argument is structurally close to moves you find in much later Western philosophy. The claim that no concept is fully self-contained — that meaning is always relational — is recognizable in Saussure, in Wittgenstein's later work on rules, in some readings of Hegel. Nāgārjuna got there in the second century, and developed it with a logical precision that took the West a long time to match.

## Where to start

Jay Garfield's *The Fundamental Wisdom of the Middle Way* gives the *MMK* with line-by-line commentary; do not try the *MMK* without one. Then Mark Siderits and Shōryū Katsura's translation if you want a more philosophical reading. SEP entry on Nāgārjuna is a serious essay, not a summary.`,
    sources: [
      { title: "Nāgārjuna (Stanford Encyclopedia of Philosophy)", cite: "Westerhoff, J. SEP entry 'Nāgārjuna'", url: "https://plato.stanford.edu/entries/nagarjuna/" },
      { title: "The Fundamental Wisdom of the Middle Way", cite: "trans. & commentary Jay L. Garfield, Oxford 1995" },
      { title: "Nāgārjuna's Middle Way", cite: "trans. Siderits & Katsura, Wisdom Publications 2013" },
    ],
  },
  {
    id: "vasubandhu",
    slug: "vasubandhu",
    name: "Vasubandhu",
    birthYear: 316,
    deathYear: 396,
    region: "south-asian",
    era: "ancient",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: null,
    themes: ["mind", "metaphysics", "religion"],
    shortSummary:
      "Vasubandhu is the major figure of the Yogācāra school, which argued that what we take to be a world of objects is, on careful analysis, a structured field of consciousness. The argument is more sophisticated than the idealism caricature that followed it.",
    fullBody: `Vasubandhu wrote across two phases. The earlier *Abhidharmakośa* (*Treasury of Higher Doctrine*) is a comprehensive presentation of the Abhidharma analysis of experience into momentary mental and physical events. He then converted to Mahāyāna under his brother Asaṅga and wrote the *Triṃśikā* and *Viṃśatikā* — twenty and thirty verses defending what became Yogācāra Buddhism.

The Yogācāra claim is often summarized as "consciousness-only" (*cittamātra*). What we naively take to be a world of independent objects is, on Vasubandhu's analysis, a structured pattern of consciousness — like a dream, but a shared and intricately rule-governed one. Crucially, this is not the claim that "everything is in my mind"; it is the claim that the subject/object split we project onto experience is a confused way of carving it up.

The Yogācāra tradition develops the *ālaya-vijñāna* — a "storehouse consciousness" that carries the karmic seeds of past actions and shapes future experience. The structural similarity to a deep cognitive substrate is what made twentieth-century interpreters interested in the parallel with phenomenology and cognitive science.`,
    sources: [
      { title: "Vasubandhu (SEP)", cite: "Gold, J. SEP entry 'Vasubandhu'", url: "https://plato.stanford.edu/entries/vasubandhu/" },
    ],
  },
  {
    id: "adi-shankara",
    slug: "adi-shankara",
    name: "Ādi Śaṅkara",
    birthYear: 788,
    deathYear: 820,
    region: "south-asian",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Raja_Ravi_Varma_-_Sankaracharya.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Śaṅkara is the major systematizer of Advaita Vedānta — the school whose central thesis is that the deepest self (Ātman) and the ultimate reality (Brahman) are not similar, not connected, but identical. Everything else is a kind of mistake.",
    fullBody: `Śaṅkara consolidated Advaita ("non-dual") Vedānta into the form that dominated South Indian philosophical theology and remains the default Hindu intellectual position for many to this day. His commentaries on the *Brahma Sūtras*, the principal Upaniṣads, and the *Bhagavad Gītā* are the textual core.

The central claim: *Brahman* — ultimate reality — is identical with *Ātman* — the deepest self. The plurality of things and selves we ordinarily experience is *māyā*, a kind of cognitive misprision that mistakes the appearance for the real. *Tat tvam asi* — "you are that" — is the Upaniṣadic formula at the center.

This is not theism in the standard Abrahamic sense, and not pantheism either. Brahman is not a being with properties; it is what is *real* when all the false distinctions — including the distinction between knower and known — are seen through. The path involves disciplined inquiry (*vicāra*) and the recognition that the self that thought it had to attain liberation was the projection that needed seeing through.

Rāmānuja and Madhva would later challenge Śaṅkara from within Vedānta, arguing for various qualifications and pluralities. The three together form the major debate of medieval Indian philosophical theology.`,
    sources: [
      { title: "Adi Shankara (SEP)", cite: "Ram-Prasad, C. SEP entry 'Sankara'", url: "https://plato.stanford.edu/entries/shankara/" },
    ],
  },
  // ---- Chinese ----
  {
    id: "confucius",
    slug: "confucius",
    name: "Confucius (Kǒngzǐ)",
    birthYear: -551,
    deathYear: -479,
    region: "east-asian",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Confucius_Tang_Dynasty.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Confucius didn't claim originality; he claimed to be transmitting an ancient order. The order — built around ritual, family, government as moral cultivation — has shaped East Asian political life for two and a half millennia.",
    fullBody: `What we have from Confucius is the *Analects* (*Lúnyǔ*), a collection of sayings and short dialogues compiled by his students after his death. He himself claimed only to be transmitting, not creating — though by any measure he created.

The central concepts are *rén* (humaneness, the disposition toward genuine concern for others), *lǐ* (ritual propriety, the patterned forms in which human relationships should be conducted), and *xiào* (filial piety). These hang together: humans become humane through participation in the rituals that structure family and political life, and the family is the school in which the dispositions needed for politics are formed.

Confucius is sometimes read as a conservative defender of hierarchy; this misses what he is actually doing. He is arguing that the right kind of hierarchy — one in which authority comes from moral cultivation rather than birth — is the only kind that can hold a society together without coercion. The famous claim that "the gentleman is not a vessel" (*Analects* 2.12) is the move: a real person is not reducible to a function.

Mencius (Mèngzǐ) developed Confucius' optimistic strand into a doctrine of innate moral sentiments; Xunzi developed the harder strand, arguing that human nature is bad and ritual is what civilizes it. Both are recognizably continuing the same project.`,
    sources: [
      { title: "Confucius (SEP)", cite: "Riegel, J. SEP entry 'Confucius'", url: "https://plato.stanford.edu/entries/confucius/" },
    ],
  },
  {
    id: "mencius",
    slug: "mencius",
    name: "Mencius (Mèngzǐ)",
    birthYear: -372,
    deathYear: -289,
    region: "east-asian",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Mengzi_pic.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Mencius argued that human nature is fundamentally good — the seeds of compassion, shame, deference, and right judgment are there from the start. Education is cultivation, not imposition. His most famous thought experiment: the child about to fall into a well.",
    fullBody: `Mencius developed and defended what became the dominant Confucian view of human nature: that we are born with the *seeds* (*duān*) of four virtues — compassion, shame, deference, and discernment of right and wrong. Education is the cultivation of seeds already present, not the imposition of values onto raw material.

The argument's most famous moment is *Mencius* 2A.6. Imagine, he says, a small child about to fall into a well. Anyone who sees it will feel a sudden surge of alarm and compassion — not from calculation of reputation, not from desire for reward, simply because seeing the child triggers something prior to deliberation. That spontaneous response is the *seed* of *rén*. The argument is empirical, not metaphysical, and it is meant to settle the debate against those who think morality is purely imposed by training.

Mencius also developed a theory of legitimate political authority: the *Mandate of Heaven* belongs to the ruler who governs for the people's flourishing. Tyrants forfeit it. This is closer to a justification of revolution than Confucius would have endorsed, and it gave imperial China a built-in conceptual mechanism for legitimating regime change.`,
    sources: [
      { title: "Mencius (SEP)", cite: "Shun, K. SEP entry 'Mencius'", url: "https://plato.stanford.edu/entries/mencius/" },
    ],
  },
  {
    id: "xunzi",
    slug: "xunzi",
    name: "Xunzi (Xún Kuàng)",
    birthYear: -310,
    deathYear: -235,
    region: "east-asian",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["ethics", "politics"],
    shortSummary:
      "Xunzi is the third pillar of classical Confucianism — and the one who said, against Mencius, that human nature is bad and ritual is what saves us from it. The disagreement is more productive than either side will admit.",
    fullBody: `Xunzi's claim — "human nature is bad; goodness comes from deliberate effort" (*xìng è*) — sounds like a flat rejection of Mencius. Read carefully, it is a different framing of the same data: humans are born with appetites and aversions that, left untended, produce conflict; the moral life requires shaping by ritual, music, and study; the resulting goodness is real but cultivated.

His chapter on *Discourse on Heaven* is bracingly naturalistic for the period. Heaven is not a moral agent that rewards and punishes; it is the pattern of nature, indifferent to human virtue. Drought and famine come whether the king is good or bad. What does respond to government is human society, which is why good government is a serious matter.

Xunzi's most famous students went on to formalize Legalism — Han Feizi and Li Si — whose harsh statecraft helped the Qin unify China and was then blamed for its rapid collapse. Xunzi himself remained a Confucian; the appropriation by his students was something he probably would have resisted.`,
    sources: [
      { title: "Xunzi (SEP)", cite: "Hutton, E. SEP entry 'Xunzi'", url: "https://plato.stanford.edu/entries/xunzi/" },
    ],
  },
  {
    id: "laozi",
    slug: "laozi",
    name: "Laozi",
    birthYear: -600,
    deathYear: -500,
    region: "east-asian",
    era: "ancient",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Lao_Tzu_-_Project_Gutenberg_eText_15250.jpg"),
    themes: ["metaphysics", "ethics", "politics"],
    shortSummary:
      "Whether Laozi was a person, several people, or no one at all is a question. The Daodejing — the book that bears his name — is real, and it is the most translated Chinese text. Its central word, dao, names what philosophy cannot say.",
    fullBody: `The *Daodejing* (or *Tao Te Ching*) is a short, terse, often paradoxical text of about 5,000 characters, traditionally attributed to a sixth-century BCE figure named Laozi ("old master"). Modern scholarship dates the text to roughly the fourth or third century BCE and treats the traditional biography as legend. What matters philosophically is the book.

The *dao* is what cannot be fully named — the underlying pattern from which the world emerges and to which it returns. The first line states the difficulty: "The dao that can be told is not the eternal dao" (*Daodejing* 1). Most of what follows is an attempt to gesture at it without claiming to capture it.

The political and ethical doctrine that follows is *wú wéi* — "non-action," better rendered as "non-coercive action." Govern by not micromanaging; act by aligning with the grain of things rather than forcing against it. The strongest political claim: "Govern a great state as you would cook a small fish" (*Daodejing* 60) — do not poke it constantly or it falls apart.

Daoism's later religious tradition develops this into a full cosmology and practice; the *Daodejing* itself is closer to a philosophical poem.`,
    sources: [
      { title: "Laozi (SEP)", cite: "Chan, A. SEP entry 'Laozi'", url: "https://plato.stanford.edu/entries/laozi/" },
    ],
  },
  {
    id: "zhuangzi",
    slug: "zhuangzi",
    name: "Zhuangzi",
    birthYear: -369,
    deathYear: -286,
    region: "east-asian",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Zhuangzi-Butterfly-Dream.jpg"),
    themes: ["metaphysics", "ethics"],
    shortSummary:
      "Zhuangzi is the funniest of the great Daoist philosophers, and the deepest. His stories — the butterfly dream, the cook who carves an ox in pure flow, the useless tree that survives because no one wants it — argue against the seriousness of categories.",
    fullBody: `The book bearing his name is part argument, part anecdote, part parable. The "inner chapters" (1–7) are widely thought to be by Zhuangzi himself; the rest is added by later hands in the school.

The famous moment is the butterfly dream (*Zhuangzi* 2). Zhuangzi dreamed he was a butterfly, fluttering happily, with no idea he was Zhuangzi. He woke up and was solidly Zhuangzi. But now — he says — he doesn't know whether he is Zhuangzi who dreamed he was a butterfly, or a butterfly now dreaming he is Zhuangzi. The point is not skepticism for its own sake; it is that the boundaries we treat as fixed (self/other, sleeping/waking, useful/useless, life/death) are perspectival in a way that ordinary language conceals.

The cook in chapter 3 carves an ox so skillfully that his blade never touches bone; he has stopped seeing the ox and feels the spaces between the joints. The cook is doing what *wú wéi* looks like in practice — not effortlessness in the sense of laziness, but the kind of fluency that comes from no longer fighting the material.

Zhuangzi is the more literary, less political wing of classical Daoism, and the influence on Chan/Zen Buddhism is direct.`,
    sources: [
      { title: "Zhuangzi (SEP)", cite: "Hansen, C. SEP entry 'Zhuangzi'", url: "https://plato.stanford.edu/entries/zhuangzi/" },
    ],
  },
  {
    id: "han-feizi",
    slug: "han-feizi",
    name: "Han Feizi",
    birthYear: -280,
    deathYear: -233,
    region: "east-asian",
    era: "ancient",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["politics", "ethics"],
    shortSummary:
      "Han Feizi systematized Legalism: law clear, severe, and impartial; rulers ruling by technique rather than charisma; humans not moralized but managed. The Qin dynasty took his advice. It did not end well, but the techniques outlived the regime.",
    fullBody: `Han Feizi was a noble of the state of Han, a student of Xunzi, and the most rigorous theorist of what is now called Chinese Legalism (*Fǎjiā*). His book *Hán Fēizǐ* synthesizes earlier Legalist writers (Shang Yang on law, Shen Buhai on bureaucratic technique, Shen Dao on positional power) into a single program for rulers.

The program assumes a hard view of human nature — people respond to incentives, not exhortations — and concludes that government should not rely on the moral cultivation of rulers or subjects. It should rely on *fǎ* (clear public law with predictable rewards and punishments), *shù* (administrative technique for managing officials), and *shì* (the positional authority of the throne, independent of who occupies it).

The Qin used the program to unify China and then collapsed within fifteen years of its founder's death — partly because the cruelty the doctrine licensed produced unsustainable resistance. The Han dynasty rebranded itself as Confucian and treated Legalism as the villain. But the bureaucratic machinery, the impersonal law, the surveillance state — those Legalist inventions kept running under Confucian rhetoric for the next two thousand years.`,
    sources: [
      { title: "Han Fei (SEP)", cite: "Pines, Y. SEP entry 'Han Fei'", url: "https://plato.stanford.edu/entries/han-fei/" },
    ],
  },
  {
    id: "zhu-xi",
    slug: "zhu-xi",
    name: "Zhu Xi",
    birthYear: 1130,
    deathYear: 1200,
    region: "east-asian",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Zhu_Xi_at_court_event.jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Zhu Xi is the central figure of Neo-Confucianism — the synthesis of Confucian ethics with metaphysical sophistication borrowed from Buddhism and Daoism. From the fourteenth century to 1905, his commentaries were what Chinese civil service candidates memorized.",
    fullBody: `Zhu Xi's project was to give Confucianism the metaphysical depth it lacked compared to Buddhism, while keeping the ethical and political commitments that distinguished it. The result is *lǐxué* — "the learning of principle" — built around two key concepts.

*Lǐ* is *principle* or *pattern* — the rational structure that makes anything what it is. *Qì* is the material energy through which principle is realized. Everything that exists is *lǐ* and *qì* together: principle gives form, *qì* gives instantiation. Human nature contains principle in its pure form; what muddies our access to it is the unevenness of our *qì*. Moral cultivation is the clarification of *qì* so that principle can shine through.

Zhu Xi also edited the *Four Books* — the *Analects*, *Mencius*, *Great Learning*, and *Doctrine of the Mean* — into the configuration that became the basis of the Chinese civil service examinations from 1313 to 1905. Whoever wanted to serve the state had to know Zhu Xi's commentaries by heart. Whatever you think of him, the influence is among the largest in any tradition.

Wang Yangming, three centuries later, would challenge Zhu Xi from within Neo-Confucianism, arguing that knowledge and action are one and that moral truth is found not in external study but in the *liángzhī* — innate moral knowing — of the heart-mind.`,
    sources: [
      { title: "Zhu Xi (SEP)", cite: "Gardner, D. SEP entry 'Zhu Xi'", url: "https://plato.stanford.edu/entries/zhu-xi/" },
    ],
  },
  {
    id: "wang-yangming",
    slug: "wang-yangming",
    name: "Wang Yangming",
    birthYear: 1472,
    deathYear: 1529,
    region: "east-asian",
    era: "early-modern",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Wang_Shouren.jpg"),
    themes: ["ethics", "mind"],
    shortSummary:
      "Wang Yangming challenged Zhu Xi's Neo-Confucianism from within. Moral knowing is not the conclusion of long study of external principle, he argued, but the immediate function of the heart-mind. The unity of knowledge and action is his most famous slogan.",
    fullBody: `Wang Yangming was a Ming dynasty general, official, and philosopher whose insights — by his own account — came partly from a long period of exile in a remote outpost where he had little to do but reflect. He rejected Zhu Xi's program of patiently investigating external things to extract principle; principle, he argued, was already present in the heart-mind (*xīn*).

The doctrine of *liángzhī* — innate moral knowing — claims that we already know, prereflectively, what is right; the moral task is to extend that knowing into action rather than to acquire new theoretical content. His other famous thesis — the *unity of knowledge and action* (*zhī xíng hé yī*) — argues that what you genuinely know is what you actually do; if your conduct doesn't follow, you don't really know.

The school he founded was politically influential in late Ming China and shaped Japanese Confucian thought (Ōyōmei-gaku) — where it became, paradoxically, associated with both samurai self-discipline and modernizing reformism in the nineteenth century.`,
    sources: [
      { title: "Wang Yangming (SEP)", cite: "Tien, D. SEP entry 'Wang Yangming'", url: "https://plato.stanford.edu/entries/wang-yangming/" },
    ],
  },
  // ---- Japanese ----
  {
    id: "dogen",
    slug: "dogen",
    name: "Dōgen",
    birthYear: 1200,
    deathYear: 1253,
    region: "east-asian",
    era: "medieval",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Dogen.jpg"),
    themes: ["metaphysics", "religion"],
    shortSummary:
      "Dōgen founded Sōtō Zen in Japan and wrote one of the most philosophically sophisticated bodies of Buddhist literature anywhere. His central insight: practice and enlightenment are not means and end. They are the same thing seen twice.",
    fullBody: `Dōgen traveled from Japan to China in 1223 looking for an authentic transmission of Chan and found it under the Caodong (Sōtō) master Tiantong Rujing. He returned to Japan in 1227 and wrote, over the next twenty-six years, the *Shōbōgenzō* — "Treasury of the True Dharma Eye" — a collection of philosophical essays that pushed Zen prose to a level it had not previously reached.

His central move is against the assumption that *zazen* (sitting meditation) is a method for *attaining* enlightenment. Practice does not produce realization; practice *is* realization. The fully awakened buddha and the person sitting in the zendo are not separated by a sequence of cause and effect. They are not, in the most rigorous sense, two.

This sounds paradoxical, and Dōgen leans into the difficulty. His writing on time (*Uji* — "being-time") argues that time is not a container that beings move through but the very mode of their being. Each moment is total; "being" and "time" are not separate words.

Heidegger reportedly read Dōgen with attention. The structural resonance between *Sein und Zeit* and *Uji* is real, though not derivative; both are doing serious work on the same problem.`,
    sources: [
      { title: "Dōgen (SEP)", cite: "Heine, S. SEP entry 'Dōgen'", url: "https://plato.stanford.edu/entries/dogen/" },
    ],
  },
];
