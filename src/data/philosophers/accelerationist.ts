import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// CCRU lineage, accelerationism, speculative realism, and other still-living
// (or recently-deceased) contemporary figures.

export const ACCELERATIONIST: Philosopher[] = [
  {
    id: "land",
    slug: "nick-land",
    name: "Nick Land",
    birthYear: 1962,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 7,
    imageUrl: null,
    themes: ["politics", "metaphysics", "aesthetics"],
    shortSummary:
      "Land founded the Cybernetic Culture Research Unit at Warwick in the 1990s, fused Deleuze with cybernetics and horror fiction into the style now called theory-fiction, and produced the body of writing — collected as Fanged Noumena — that the contemporary accelerationist debate is mostly arguing with.",
    fullBody: `Nick Land was a philosophy lecturer at the University of Warwick from 1987 to 1998. With Sadie Plant and a rotating group of graduate students, he founded the *Cybernetic Culture Research Unit* (CCRU) — formally unauthorized, institutionally precarious, methodologically unlike anything else in British academic philosophy. The CCRU's output across the 1990s — collaboratively written, often unsigned, blending philosophy with cyberpunk fiction, occultism, and emerging internet culture — produced the conceptual vocabulary that the next thirty years of accelerationist, hauntological, and speculative-realist writing has mostly worked from.

Land's own writings from this period — the major essays collected in *Fanged Noumena: Collected Writings 1987–2007* (2011) — develop a position derived from Deleuze and Guattari but pushed in a direction his teachers would have rejected. *Capitalism* is read not as a contingent economic system to be reformed or overthrown but as a self-augmenting cybernetic process — the actual deterritorialization that earlier critical theorists had only theorized. Land treats this as a fact rather than a value; what to *do* about it is exactly the question he refuses to answer in the standard left-critical register.

After 1998 — following a personal crisis that produced his departure from Warwick — Land moved to Shanghai, drifted out of academic philosophy, and developed political positions in the late 2000s and 2010s ("Dark Enlightenment," neoreaction) that most of his former students and admirers have explicitly rejected. The earlier work, however, remains the load-bearing reference for everything from Mark Fisher's *Capitalist Realism* to Reza Negarestani's *Cyclonopedia* to the contemporary left-accelerationist tradition that emerged in the 2010s in opposition to Land's own later trajectory.

His central concept — *hyperstition*, a fiction that makes itself real through its propagation — is the most reusable. Hyperstitions are not merely beliefs that turn out to be true; they are fictions whose currency in the social imagination produces the conditions of their own realization. Land's writings treat capital itself as a hyperstition that has, by now, mostly written itself into reality.`,
    sources: [
      { title: "Nick Land, Fanged Noumena: Collected Writings 1987–2007", cite: "ed. Robin Mackay & Ray Brassier, Urbanomic 2011" },
      { title: "Robin Mackay & Armen Avanessian (eds.), #Accelerate: The Accelerationist Reader", cite: "Urbanomic/MIT 2014" },
    ],
  },
  {
    id: "plant",
    slug: "sadie-plant",
    name: "Sadie Plant",
    birthYear: 1964,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: null,
    themes: ["politics", "aesthetics", "mind"],
    shortSummary:
      "Plant was the original director of the CCRU at Warwick and the cyberfeminist whose Zeros and Ones (1997) read the history of computing as a structurally feminine domain that the standard history had erased. The book remains one of the more original contributions of 1990s philosophy of technology.",
    fullBody: `Sadie Plant was hired at Warwick in the early 1990s and founded the Cybernetic Culture Research Unit in 1995 before moving to Birmingham and then leaving academic philosophy. Her work belongs to the same moment as Nick Land's but has a distinctively different temperament — closer to feminist theory and the history of technology than to the apocalyptic-cybernetic register Land developed.

*The Most Radical Gesture: The Situationist International in a Postmodern Age* (1992), her first book, is a serious reassessment of Debord and the Situationists at a moment when most theory had moved past them.

*Zeros and Ones: Digital Women and the New Technoculture* (1997) is the book she is remembered for. The argument: the history of computing has been a history of women's labor — Ada Lovelace, the WAAC and ENIAC programmers, the keypunch operators, the early software industry — which the standard history of computing has systematically minimized. The book is part archaeology of this hidden labor and part theoretical reflection on what it means that the digital is, in Plant's reading, structurally feminine in ways that the masculinist narrative of "great inventors" has obscured.

The book belongs to the brief and intense moment of *cyberfeminism* — a current that emerged in the mid-1990s around the work of Donna Haraway, the VNS Matrix collective, Plant herself, and others, and that influenced the broader theoretical reception of the early internet. The position is not the same as later "techno-utopianism"; Plant is careful about what the digital does and does not deliver. But the underlying conviction — that the cybernetic age contains liberatory possibilities the previous order foreclosed — runs throughout.

*Writing on Drugs* (1999), her last major book, is a cultural history of the literary and intellectual relationship to psychoactive substances. Plant left the academy not long after.`,
    sources: [
      { title: "Sadie Plant, Zeros and Ones: Digital Women and the New Technoculture", cite: "Doubleday 1997" },
      { title: "The Most Radical Gesture", cite: "Routledge 1992" },
    ],
  },
  {
    id: "fisher",
    slug: "mark-fisher",
    name: "Mark Fisher",
    birthYear: 1968,
    deathYear: 2017,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 7,
    imageUrl: null,
    themes: ["politics", "aesthetics", "ethics"],
    shortSummary:
      "Fisher's Capitalist Realism (2009) named a condition the left had been describing for years without quite saying: that it has become easier to imagine the end of the world than the end of capitalism. The book has shaped how a generation thinks about contemporary political possibility.",
    fullBody: `Mark Fisher was a PhD student in the CCRU at Warwick in the late 1990s, wrote the blog *k-punk* from 2003 onward, and produced — across a too-short career — the most influential body of left-wing cultural criticism of the post-2008 period in the English-speaking world.

*Capitalist Realism: Is There No Alternative?* (2009) is the title that travels. Its central claim — adapting Fredric Jameson and Slavoj Žižek — is that the cultural condition of the early twenty-first century is one in which capitalism has been so naturalized that even imagining a coherent alternative has become difficult. The slogan: it is easier to imagine the end of the world than the end of capitalism. Fisher traces the consequences across mental health (the *privatization of stress*), education (corporatization), and the texture of contemporary cultural production (pastiche, repetition, "the slow cancellation of the future").

*Ghosts of My Life* (2014) develops the cultural diagnosis under the heading of *hauntology* — a term Derrida coined and Fisher made operational. Hauntological art is haunted not by the past but by *futures that did not arrive*. The British post-punk and electronic music of the late twentieth century, Fisher argues, was animated by an anticipation of a different social order that subsequent decades canceled; what remains is a music of mourning for the future that capitalism foreclosed.

*The Weird and the Eerie* (2016) is his short and elegant final completed book — a contribution to philosophical aesthetics organized around two modes (the *weird*: the wrongness of something that shouldn't be there; the *eerie*: the absence of an agency that should be there) that he traces through Lovecraft, Daphne du Maurier, M.R. James, M. John Harrison, Christopher Priest, and others. The book reads as a recovery of the cultural resources that mainstream criticism had ignored.

Fisher took his own life in January 2017. His unfinished introduction to a book he was calling *Acid Communism* — a recuperation of the lost emancipatory currents of 1960s and 70s counterculture — has been published in *k-punk: The Collected and Unpublished Writings* (2018).

His political position, much misread, was neither Land's nor that of the conventional academic left. He took Land's analysis of capital seriously while explicitly rejecting Land's later conclusions, and his late work was an attempt to find what real emancipatory politics could look like after capitalist realism had been named.`,
    sources: [
      { title: "Mark Fisher, Capitalist Realism: Is There No Alternative?", cite: "Zero Books 2009" },
      { title: "Mark Fisher, Ghosts of My Life", cite: "Zero Books 2014" },
      { title: "Mark Fisher, The Weird and the Eerie", cite: "Repeater Books 2016" },
      { title: "k-punk: The Collected and Unpublished Writings", cite: "ed. Darren Ambrose, Repeater 2018" },
    ],
  },
  {
    id: "meillassoux",
    slug: "quentin-meillassoux",
    name: "Quentin Meillassoux",
    birthYear: 1967,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 7,
    imageUrl: wikiImage("Quentin_Meillassoux_au_marathon_du_savoir_du_Festival_d'Avignon_2016.jpg"),
    themes: ["metaphysics", "epistemology"],
    shortSummary:
      "Meillassoux's After Finitude (2006) launched speculative realism with a sustained argument against what he calls 'correlationism' — the post-Kantian assumption that we can only think the relation between thought and being, never being itself. The argument is the most discussed metaphysical thesis of the early twenty-first century.",
    fullBody: `Quentin Meillassoux is a French philosopher, a student of Alain Badiou, and the author of *Après la finitude* (2006; English: *After Finitude: An Essay on the Necessity of Contingency*, trans. Ray Brassier, 2008). The book is short — under 150 pages — and its argument has been the proximate cause of the contemporary debate about whether philosophy can recover access to a reality independent of thought.

Meillassoux's term *correlationism* names what he takes to be the dominant move of post-Kantian philosophy: the assumption that we can only think the *correlation* between thought and being, never being independent of thought. Kant's phenomena/noumena distinction, Husserl's intentional correlation, Heidegger's being-in-the-world, Derrida's différance — all are versions of this. The correlationist will say there is no contradiction in claiming a world existed before consciousness, but cannot say so as a *speculative* claim about that world; only as a claim about how thought now configures the situation.

Meillassoux argues this is incompatible with what he calls the *arche-fossil* — empirical data about a world that demonstrably preceded any conscious being to think it (the radioactive decay rates that date the universe, the fossil record of pre-conscious life). The correlationist position, taken seriously, cannot affirm these data as data about a real prior world; it can only affirm them as features of the current correlation. This is, on Meillassoux's view, a reductio.

The positive proposal is more demanding. Meillassoux argues that what we can know speculatively — without falling back into pre-critical metaphysics — is precisely the *absolute contingency* of all things. There is no necessary being; the laws of nature themselves are radically contingent; the only necessity is the necessity of contingency itself. This he calls *principle of factiality* (*facticité*).

This is meant to be both metaphysically realist (a claim about how being itself is) and consistent with the post-Kantian critique of pre-critical metaphysics. Whether the move actually achieves both is the contested question. Graham Harman's object-oriented ontology, Ray Brassier's transcendental nihilism, and Iain Hamilton Grant's Schellingian philosophy of nature all emerged in conversation with Meillassoux but reach different conclusions; the four positions together constituted the original speculative realist constellation announced at the 2007 Goldsmiths conference.

Meillassoux's subsequent work — particularly *The Number and the Siren* (2011), a book-length reading of Mallarmé's *Un coup de dés* — has not received the same attention as *After Finitude*. His proposed book *The Divine Inexistence*, repeatedly delayed, is rumored to develop a more positive metaphysics that involves a real and entirely contingent future emergence of a virtual God; readers have had to work largely from extracts.`,
    sources: [
      { title: "Quentin Meillassoux, After Finitude: An Essay on the Necessity of Contingency", cite: "trans. Ray Brassier, Continuum 2008 (orig. 2006)" },
      { title: "Quentin Meillassoux (SEP)", cite: "Related SEP entries on speculative realism", url: "https://plato.stanford.edu/entries/postmodernism/" },
      { title: "Harman, Quentin Meillassoux: Philosophy in the Making", cite: "Edinburgh UP 2011" },
    ],
  },
  {
    id: "harman",
    slug: "graham-harman",
    name: "Graham Harman",
    birthYear: 1968,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: null,
    themes: ["metaphysics"],
    shortSummary:
      "Harman developed object-oriented ontology — a metaphysics in which objects of every kind, at every scale, are the basic units of reality, with their depths irreducible to either their components or their relations. OOO is the most institutionally successful strand of speculative realism.",
    fullBody: `Graham Harman is an American philosopher (American University of Beirut, Southern California Institute of Architecture), trained originally on Heidegger, who developed the position he calls *Object-Oriented Ontology* (OOO) over a series of books beginning with *Tool-Being: Heidegger and the Metaphysics of Objects* (2002) and *Guerrilla Metaphysics* (2005).

The core claim, developed most accessibly in *The Quadruple Object* (2011): the basic units of reality are *objects* — not just middle-sized dry goods but objects of every scale, from quarks to galaxies, including artificial objects (a hammer, a corporation, a fictional character). Every object has a *withdrawn* depth that is never exhausted by either its constituent parts (the eliminative move: it's "really just" the parts) or its external relations (the relational move: it's "really just" what it does to other things). The object exceeds both, and this excess is what makes it the kind of thing it is.

This is meant to be a recovery of metaphysical realism that does not require either eliminative reduction or a return to substance metaphysics in the classical sense. Critics — particularly more orthodox speculative realists like Brassier — have argued that OOO smuggles in a kind of pan-objectism that is hard to distinguish from pre-critical metaphysics. Defenders argue that the move is exactly what is needed to recover philosophy from the post-Kantian fixation on the human-world relation.

OOO's reach outside philosophy has been disproportionate. The framework has been picked up by architectural theory (Patrik Schumacher), art criticism, environmental humanities (Timothy Morton's *Hyperobjects* is an OOO book), and contemporary speculative fiction. Whether this is a feature or a bug — Harman has been criticized for the framework's portability to domains beyond what its metaphysical arguments warrant — is itself contested.`,
    sources: [
      { title: "Graham Harman, The Quadruple Object", cite: "Zero Books 2011" },
      { title: "Tool-Being: Heidegger and the Metaphysics of Objects", cite: "Open Court 2002" },
    ],
  },
  {
    id: "brassier",
    slug: "ray-brassier",
    name: "Ray Brassier",
    birthYear: 1965,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: null,
    themes: ["metaphysics", "epistemology"],
    shortSummary:
      "Brassier was the original translator of After Finitude and one of the four philosophers who launched speculative realism in 2007. His Nihil Unbound (2007) is the most demanding statement of what he calls a 'transcendental nihilism' — speculative realism with the consolations stripped out.",
    fullBody: `Ray Brassier teaches at the American University of Beirut. He translated Meillassoux's *After Finitude*, was one of the four original participants in the 2007 Goldsmiths speculative realism conference (with Meillassoux, Harman, and Iain Hamilton Grant), and has since distanced himself from the speculative realism label — partly because the movement's subsequent trajectory took it in directions he finds insufficiently rigorous.

*Nihil Unbound: Enlightenment and Extinction* (2007) is his major work. The book develops a position Brassier calls "transcendental nihilism": full acceptance of the scientific image of nature, including the eventual heat death of the universe and the extinction of human consciousness, as a *speculative* fact about reality rather than a merely empirical prediction. Philosophy, on Brassier's account, is obliged to think this fact — to think it without flinching, without reaching for any of the consolations (humanist, religious, even Heideggerian) that would soften it — and to develop a metaphysics consistent with it.

The book is in conversation with Sellars (the scientific image / manifest image distinction), Adorno and Horkheimer (the dialectic of enlightenment), the speculative materialism of Meillassoux, and the eliminativist tradition in philosophy of mind (Paul Churchland especially). The aim is not pessimism in any psychological sense but the recovery of philosophy's capacity to think the fact of extinction — the universe's, eventually, and consciousness's locally — without producing yet another disguised version of consolation.

Brassier has produced relatively few books since *Nihil Unbound* and has been an unusually public critic of what he calls the "speculative realist" brand's drift into less rigorous registers. His current work engages German Idealism, Sellars' philosophy of language, and the question of how nominal rationality is possible.`,
    sources: [
      { title: "Ray Brassier, Nihil Unbound: Enlightenment and Extinction", cite: "Palgrave Macmillan 2007" },
    ],
  },
  {
    id: "negarestani",
    slug: "negarestani",
    name: "Reza Negarestani",
    birthYear: 1977,
    deathYear: null,
    region: "islamic",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: null,
    themes: ["metaphysics", "politics", "aesthetics"],
    shortSummary:
      "Negarestani's Cyclonopedia (2008) is theory-fiction in the CCRU lineage — a novel that is also a philosophical treatise about oil as the underlying intelligence of contemporary geopolitics. His later Intelligence and Spirit (2018) is a more conventionally argued thesis on what it would mean for general intelligence to be artificial.",
    fullBody: `Reza Negarestani is an Iranian philosopher who came to attention through *Cyclonopedia: Complicity with Anonymous Materials* (2008), a book published by re.press that defies conventional genre — a novel about a missing scholar's archive, which is also a sustained philosophical argument about oil ("petroleum") as the underlying intelligence shaping twenty-first century geopolitics. The book is the most successful piece of *theory-fiction* in the CCRU lineage to date, and its influence on contemporary art, weird fiction, and a younger generation of theorists has been substantial.

His more recent work, *Intelligence and Spirit* (2018), is a more conventionally argued (and very long) book on the conditions of possibility for general intelligence — drawing on Hegel, Sellars, Kant, and contemporary philosophy of mind — and on what it would mean for such intelligence to be genuinely *artificial*. The argument is roughly: intelligence is not a substance but a kind of self-determining process governed by the giving and asking for reasons, and what we call artificial general intelligence will be intelligent only insofar as it is capable of participating in that process on its own terms. The book is the most ambitious attempt by anyone in the contemporary continental tradition to address AI as a philosophical (rather than technological or political) question.

Negarestani's work crosses the line between philosophy and contemporary art so thoroughly that institutional positioning is hard — he has been variously a philosopher, an artist, a theorist for art institutions, and a curriculum designer for the philosophy program at The New Centre for Research and Practice.`,
    sources: [
      { title: "Reza Negarestani, Cyclonopedia: Complicity with Anonymous Materials", cite: "re.press 2008" },
      { title: "Reza Negarestani, Intelligence and Spirit", cite: "Urbanomic 2018" },
    ],
  },
  {
    id: "zizek",
    slug: "zizek",
    name: "Slavoj Žižek",
    birthYear: 1949,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Slavoj_Žižek_in_Liverpool.jpg"),
    themes: ["politics", "mind", "aesthetics"],
    shortSummary:
      "Žižek is the most visible Marxist-Lacanian philosopher of the last three decades — and one of the most divisive. The combination of Hegel, Lacan, and pop culture in his books has reached a much wider audience than philosophy normally does; whether that's been a gift or a problem is the central question of his reception.",
    fullBody: `Slovenian, born in Ljubljana, trained in psychoanalysis at Paris VIII under Jacques-Alain Miller (Lacan's son-in-law and successor), Slavoj Žižek emerged as a major theoretical voice with *The Sublime Object of Ideology* (1989) and has since produced something in the range of seventy books, hundreds of essays, and a public profile unusual for any contemporary philosopher.

The intellectual core: a fusion of Lacanian psychoanalysis and the Hegelian dialectic, applied across an extraordinary range of cultural material. Žižek's signature move is to take what looks like a small detail — a Hitchcock plot point, a joke from communist Yugoslavia, a moment in *They Live* — and unpack it as a structural example of how ideology actually operates. Ideology, on his account, is not a set of beliefs people consciously hold but the structure that organizes what they unconsciously *do* even when they explicitly disagree with it.

His major theoretical works — *The Parallax View* (2006), *Less Than Nothing* (2012), the trilogy on the *Hegelian dialectic*, *Christian Atheism* (2024) — have made the case that what is needed in contemporary politics is not less Hegel but more, and that the Hegelian-Christian-Marxist lineage contains intellectual resources that contemporary critical theory has wrongly abandoned.

The political positions have been more contentious. Žižek is one of the few major continental thinkers willing to defend the project of revolutionary politics in something like a classical Marxist register, while also being unsparing in his critiques of identity politics, multiculturalist liberalism, and what he calls "the politically correct establishment." His various interventions in concrete debates — on refugees, on Ukraine, on the COVID-19 pandemic — have alienated supporters across the political spectrum, which Žižek himself seems to regard as a feature rather than a bug.

His public visibility — through documentaries (*The Pervert's Guide to Cinema*, *The Pervert's Guide to Ideology*), countless interviews, and a remarkable production rate — has made him better known than any academic philosopher should reasonably expect to be. Critics argue this comes at the cost of the careful argumentation philosophy requires; defenders argue that the willingness to think out loud in public, on a wide range of subjects, is itself a model of what philosophy could be.`,
    sources: [
      { title: "Slavoj Žižek, The Sublime Object of Ideology", cite: "Verso 1989" },
      { title: "Slavoj Žižek, Less Than Nothing: Hegel and the Shadow of Dialectical Materialism", cite: "Verso 2012" },
    ],
  },
  {
    id: "badiou",
    slug: "badiou",
    name: "Alain Badiou",
    birthYear: 1937,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Alain_Badiou_in_2007.jpg"),
    themes: ["metaphysics", "politics"],
    shortSummary:
      "Badiou is the major living French philosopher and the teacher who shaped a generation that includes Meillassoux. His mathematical reformulation of ontology — Being and Event (1988) — is one of the most ambitious works of late-twentieth-century continental philosophy.",
    fullBody: `Alain Badiou taught at the École Normale Supérieure and is one of the most decorated philosophers of the contemporary French tradition. His project, developed across four major works — *Being and Event* (1988), *Logics of Worlds* (2006), *Theory of the Subject* (1982), and *The Immanence of Truths* (2018) — is the most ambitious attempt by a contemporary continental philosopher to produce a positive, systematic, large-scale metaphysics.

The central claim of *Being and Event*: ontology *is* mathematics. Specifically, set theory — Zermelo-Fraenkel with Choice, in its post-Cohen form — provides the discourse in which being qua being can be thought. Multiplicity is the fundamental category; the One is always an operation performed on multiplicities, not a primary feature of reality.

What lets Badiou's project escape mere axiomatic mathematics is his theory of the *event*. Events are ruptures in the existing situation — moments that cannot be accounted for in the terms of the situation they interrupt. The French Revolution, the discovery of the irrationals, falling in love, the resurrection (Badiou is an atheist but treats it as a paradigm event for Pauline subjectivity): these are not gradual developments but discontinuous emergences that retroactively reorganize what came before. Truth, on Badiou's account, is what is produced by fidelity to such events — the patient working out, over years or centuries, of what an event has made newly thinkable.

He distinguishes four "truth procedures": politics, science, art, and love. Each is a domain in which events occur, fidelities are organized, and truths are produced. The framework gives Badiou room to defend the importance of, e.g., revolutionary politics or genuinely innovative art without grounding the defense in either pragmatic consequences or appeals to consensus.

Politically, Badiou has been one of the most consistent contemporary defenders of communism — not as an empirical economic program but as what he calls the "communist hypothesis," the idea that a community organized around the equality of speakers (as opposed to the inequalities of capital) remains a genuinely thinkable political possibility. His positions have made him a controversial figure across the political spectrum.

The reception is mixed. Mathematicians have been variously charmed and dismayed by the use of set theory; analytic philosophers have largely ignored the project; the continental tradition has treated him as one of its central living figures.`,
    sources: [
      { title: "Alain Badiou, Being and Event", cite: "trans. Oliver Feltham, Continuum 2005 (orig. 1988)" },
      { title: "Alain Badiou (SEP)", cite: "Pluth, E. SEP entry 'Alain Badiou'", url: "https://plato.stanford.edu/entries/badiou/" },
    ],
  },
  {
    id: "malabou",
    slug: "malabou",
    name: "Catherine Malabou",
    birthYear: 1959,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: null,
    themes: ["mind", "metaphysics"],
    shortSummary:
      "Malabou developed the concept of plasticity — the capacity of a form to give shape and to receive shape — into a philosophical framework that crosses Hegel, neuroscience, and trauma theory. The result is one of the most original recent contributions to philosophy of mind from the continental tradition.",
    fullBody: `Catherine Malabou is a French philosopher trained under Derrida, currently at the European Graduate School and the Centre for Modern European Philosophy at Kingston. Her body of work develops the concept of *plasticity* — taken first from Hegel, where she traced it through *The Future of Hegel: Plasticity, Temporality, and Dialectic* (1996), and then extended into a much broader philosophical and neuroscientific register.

*What Should We Do with Our Brain?* (2004) is the most accessible entry. The argument: contemporary neuroscience's central discovery — that the brain is plastic, that it can be shaped by experience and reshaped throughout life — is also a philosophical and political discovery. The plastic brain is neither the rigid neural substrate of older neuroscience nor the flexible-to-the-point-of-formlessness self of contemporary capitalism's gig-economy ideal. It is a *form* that gives shape while being shaped, that creates while being created. Malabou's wager is that this is also the structure of the human person and the structure of political emancipation properly conceived.

*The New Wounded* (2007) extends the project to the question of trauma. Severe brain trauma — strokes, lesions, dementia — produces what Malabou calls "destructive plasticity": a transformation so profound that the patient becomes, in some sense, a different person, with no available path back. Her argument is that contemporary philosophy of mind has not yet found adequate concepts for thinking this kind of transformation, which neither psychoanalysis (with its emphasis on continuity through repression) nor classical philosophy of personal identity (with its emphasis on psychological continuity) can quite accommodate.

Subsequent work — *Plasticity at the Dusk of Writing* (2009), *Before Tomorrow* (2014), *Morphing Intelligence* (2017) — has extended the project across questions of writing, biology, gender, and artificial intelligence.`,
    sources: [
      { title: "Catherine Malabou, What Should We Do with Our Brain?", cite: "Fordham UP 2008 (orig. 2004)" },
      { title: "Catherine Malabou (SEP)", cite: "Related SEP entries on contemporary continental philosophy", url: "https://plato.stanford.edu/entries/postmodernism/" },
    ],
  },
  {
    id: "mbembe",
    slug: "mbembe",
    name: "Achille Mbembe",
    birthYear: 1957,
    deathYear: null,
    region: "african",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Achille_Mbembe_par_Claude_Truong-Ngoc_novembre_2015.jpg"),
    themes: ["politics", "ethics", "metaphysics"],
    shortSummary:
      "Mbembe is the major living philosopher of postcolonial Africa. His concept of necropolitics — the politics of who is permitted to live and who is sentenced to die — has reshaped political theory's account of contemporary sovereignty and is now standard reference well outside African studies.",
    fullBody: `Achille Mbembe is a Cameroonian philosopher and historian, professor at the Wits Institute for Social and Economic Research in Johannesburg, and one of the most influential living writers on the philosophical legacies of colonialism, race, and contemporary African political life.

*On the Postcolony* (2000) is his major early work — a philosophical analysis of the texture of postcolonial sovereignty in sub-Saharan Africa, with an attention to the grotesque, the bodily, and the obscene as registers of political power that the standard tradition of political philosophy had largely missed. The argument has been generative across African studies, postcolonial theory, and contemporary political theory more broadly.

*Necropolitics* — first developed as an essay in *Public Culture* in 2003, expanded into the book *Necropolitique* (2016; English 2019) — is his most cited contribution. Foucault had developed *biopolitics* as a modality of power oriented toward making populations live; Mbembe argues that what colonial and postcolonial modernity have actually produced, alongside biopolitics, is a parallel *necropolitical* regime: the politics of who is permitted to live and who is sentenced to a slow or fast death, who counts as a grievable life and whose death barely registers. Slavery, colonial occupation, contemporary border regimes, the plantation, the camp: these are the institutional forms of necropolitics, and Mbembe argues that they have shaped global modernity from its beginnings, not as exceptional cases but as constitutive structures.

*Critique of Black Reason* (2013; English 2017) extends the analysis backward through the history of the concept of race, treating "Black" as a category produced by the operations of capitalism and colonialism — produced, that is, as a category to be exploited, not discovered as a pre-existing fact. The book is one of the major contemporary contributions to philosophy of race.

His more recent *Out of the Dark Night* (2021) and *Brutalism* (2024) extend the project toward questions of planetary politics, ecological collapse, and what Mbembe argues is the contemporary state's drift toward an architecturally brutal mode of governance.`,
    sources: [
      { title: "Achille Mbembe, On the Postcolony", cite: "University of California Press 2001" },
      { title: "Achille Mbembe, Necropolitics", cite: "Duke UP 2019" },
      { title: "Critique of Black Reason", cite: "Duke UP 2017" },
    ],
  },
  {
    id: "taylor",
    slug: "charles-taylor",
    name: "Charles Taylor",
    birthYear: 1931,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Charles_Taylor_at_TEDxBoston_2010.jpg"),
    themes: ["politics", "ethics", "religion"],
    shortSummary:
      "Taylor's Sources of the Self (1989) and A Secular Age (2007) traced how modern Western identity and secularism came to be what they are — not as triumphs of reason over superstition but as contingent historical formations whose tensions still organize how we live.",
    fullBody: `Charles Taylor is a Canadian philosopher (Montreal, Oxford), one of the major living philosophers in the broadly hermeneutical tradition. His project across decades has been to do for the modern Western self what Hegel did for spirit — to reconstruct, through patient historical narrative, how we came to be the kind of selves we are, and what tensions remain unresolved in our self-understanding.

*Sources of the Self: The Making of the Modern Identity* (1989) is the founding work — a 600-page philosophical and historical reconstruction of how the modern Western conception of the self (interior, expressive, oriented to authentic self-realization) was assembled out of multiple sources: the Christian inward turn (Augustine), the affirmation of ordinary life (Reformation), the Romantic emphasis on expression, the Enlightenment emphasis on autonomous reason. The argument is *not* that the modern self is illusory, but that it is *constituted by* substantive moral sources that contemporary secular self-understanding tends to disavow.

*The Ethics of Authenticity* (1991, the short popular version of *Sources*) is the more accessible entry.

*A Secular Age* (2007) is Taylor's major late work — an 800-page argument that secularism is not what the standard story (the steady disenchantment thesis) takes it to be. Modern secularism, on Taylor's account, is not the absence of religion but a specific historical formation: an *immanent frame* in which transcendence has become one option among others, in which religious belief has had to learn to operate as a position rather than as a background, and which contains its own particular spiritual tensions. The book has been hugely influential in philosophy of religion, sociology of religion, and political theory.

Taylor is also a central figure in the *communitarian* critique of Rawlsian liberalism (alongside Sandel, MacIntyre, Walzer), arguing that the abstract individual of the liberal tradition is too thin to do the moral work liberal theory asks of it.`,
    sources: [
      { title: "Charles Taylor, Sources of the Self", cite: "Harvard UP 1989" },
      { title: "Charles Taylor, A Secular Age", cite: "Harvard UP 2007" },
      { title: "Charles Taylor (SEP)", cite: "Smith, N. SEP entry 'Charles Taylor'", url: "https://plato.stanford.edu/entries/taylor-charles/" },
    ],
  },
];
