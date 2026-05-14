import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// 20th-century continental tradition: phenomenology, existentialism,
// hermeneutics, Frankfurt School, structuralism, post-structuralism, postmodern.
export const CONTINENTAL: Philosopher[] = [
  {
    id: "husserl",
    slug: "husserl",
    name: "Edmund Husserl",
    birthYear: 1859,
    deathYear: 1938,
    region: "european",
    era: "modern",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Edmund_Husserl_1900.jpg"),
    themes: ["mind", "epistemology", "metaphysics"],
    shortSummary:
      "Husserl founded phenomenology — the careful, first-person description of how things appear in experience, with all assumptions about their underlying reality bracketed. The method is what made twentieth-century continental philosophy possible.",
    fullBody: `Husserl began as a mathematician working on the logic of arithmetic and finished as the founder of phenomenology, the most influential European philosophical movement of the twentieth century. The path runs through his discovery that the foundations of mathematics led him into questions about the structure of consciousness — what *intentionality* is, how the mind is "directed at" objects, what an object is *for consciousness* prior to any theory about what it is in itself.

The phenomenological method, developed in *Logical Investigations* (1900–01) and *Ideas* (1913), proceeds by *epoché* — a "bracketing" of our naive assumption that the world exists independently and proceeds to investigate the world *as given*. What appears in experience, with what structure, in what mode of givenness. The point is not solipsism; it is methodological discipline.

What you find when you do this carefully — Husserl spent forty years finding — is that consciousness has elaborate intrinsic structures (temporality, horizon, intersubjectivity) that are missed when we leap immediately to questions about what causally underlies experience. His *Cartesian Meditations* (1931) tried to ground all knowledge in this first-person investigation, and his *Crisis of European Sciences* (1936) traced the consequences of the modern habit of treating mathematized nature as more real than the lived world.

Heidegger was his student and successor at Freiburg. Merleau-Ponty, Levinas, Sartre, and Derrida all formed themselves in relation to Husserl. The Nazis expelled him from the university in 1933 because of his Jewish ancestry, and Heidegger's complicity in this — though contested — is one of the longer shadows in twentieth-century philosophy.`,
    sources: [
      { title: "Edmund Husserl (SEP)", cite: "Smith, D.W. SEP entry 'Edmund Husserl'", url: "https://plato.stanford.edu/entries/husserl/" },
    ],
  },
  {
    id: "heidegger",
    slug: "heidegger",
    name: "Martin Heidegger",
    birthYear: 1889,
    deathYear: 1976,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Heidegger_2_(1960).jpg"),
    themes: ["metaphysics", "mind", "ethics"],
    shortSummary:
      "Heidegger asked the question philosophy had forgotten — what does it mean for anything to be? Being and Time is the most ambitious answer of the twentieth century. His joining of the Nazi party in 1933 is the moral question his interpreters still cannot finish answering.",
    fullBody: `*Being and Time* (1927) opens with the observation that the question of *being* — what it means for anything at all to *be* — has been forgotten by the philosophical tradition. We talk about beings (things, properties, events), but we have lost the question of being itself.

Heidegger's strategy is to start with the being for whom being is a question — the human being, which he calls *Dasein* ("being-there"). The analysis of Dasein occupies the published portion of the book. We are *being-in-the-world*, not minds floating in front of an external nature; we are always already involved in projects, equipment, social practices. We exist *temporally* — projecting forward into possibilities, finding ourselves thrown into circumstances we didn't choose, attending to a present that is structured by both. We are essentially *toward-death*: our finitude is not an external limit but a constitutive feature of who we are.

*Authenticity* (*Eigentlichkeit*) is what happens when Dasein takes ownership of these structures rather than fleeing them into the anonymous "they" — into doing what one does, thinking what one thinks. Being-toward-death is the limit case: the genuine recognition of one's own mortality individualizes Dasein and recovers the question of how to live.

Heidegger's later work turned away from the analysis of Dasein toward what he called the *history of being* — the way being has been disclosed differently in different epochs, with our technological age representing a particularly dangerous mode of disclosure (the world as standing reserve, ready for use).

The political and moral problem is real. Heidegger joined the Nazi Party in May 1933 and served as Rector of Freiburg, giving speeches in support of the regime. He never apologized in the public way that would have allowed easy reconciliation. The Black Notebooks, released starting in 2014, contain antisemitic passages he integrated with his philosophy. The question of how the work and the man relate is among the most strained in modern intellectual life.`,
    sources: [
      { title: "Martin Heidegger (SEP)", cite: "Wheeler, M. SEP entry 'Martin Heidegger'", url: "https://plato.stanford.edu/entries/heidegger/" },
    ],
  },
  {
    id: "sartre",
    slug: "sartre",
    name: "Jean-Paul Sartre",
    birthYear: 1905,
    deathYear: 1980,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Jean-Paul_Sartre_FP.JPG"),
    themes: ["ethics", "mind", "politics"],
    shortSummary:
      "Sartre wrote a 700-page existentialist treatise, novels, plays, and political essays — and declined the Nobel Prize because accepting prizes compromises a writer's freedom. The slogan 'existence precedes essence' is his, and so is a more interesting body of work than the slogan suggests.",
    fullBody: `*Being and Nothingness* (1943) is Sartre's major philosophical work. The framework is Husserlian (intentional consciousness) and Heideggerian (being-in-the-world), but the conclusions are different. Sartre distinguishes two modes of being: *being-in-itself* (the brute, self-identical existence of things) and *being-for-itself* (the mode of consciousness, which is what it is *not* and is not what it is). Consciousness is not a thing but a *nihilating* relation to things, a "nothingness" that allows being to appear.

From this, Sartre's existentialism: humans have no fixed essence given in advance. *Existence precedes essence* — we exist first and define what we are through our choices. This is radical freedom and unbearable responsibility. We are, as he puts it, "condemned to be free."

*Bad faith* (*mauvaise foi*) is what we do to avoid this. The waiter who performs "waiter" so completely he treats his role as his nature; the lover who tells herself she had no choice. Bad faith is a self-deception about freedom that is hard to expose because the self that would do the exposing is the same self doing the deceiving.

*Existentialism is a Humanism* (1946) is the public lecture in which Sartre made existentialism a popular movement and, by his own later admission, oversimplified it. The mature account is in *Being and Nothingness* and, importantly, in the *Critique of Dialectical Reason* (1960), where he tries to reconcile existentialism with Marxism — a long, demanding, never-quite-finished project.

His relationship with Simone de Beauvoir is one of the major partnerships in twentieth-century thought. She was his intellectual equal and, on most observers' reading, his philosophical superior in the development of an existentialist ethics.`,
    sources: [
      { title: "Jean-Paul Sartre (SEP)", cite: "Flynn, T. SEP entry 'Jean-Paul Sartre'", url: "https://plato.stanford.edu/entries/sartre/" },
    ],
  },
  {
    id: "de-beauvoir",
    slug: "de-beauvoir",
    name: "Simone de Beauvoir",
    birthYear: 1908,
    deathYear: 1986,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 9,
    imageUrl: wikiImage("Simone_de_Beauvoir2.png"),
    themes: ["ethics", "politics", "metaphysics"],
    shortSummary:
      "De Beauvoir's question was what it means to be free when half the human race is told from infancy that freedom isn't quite for them. The answer — eight hundred pages of it — is The Second Sex, and it changed what twentieth-century philosophy was allowed to ask about.",
    fullBody: `## Why de Beauvoir matters

De Beauvoir's question was what it means to be free when half the human race is told from infancy that freedom isn't quite for them. The answer — eight hundred pages of it — is *The Second Sex* (1949), and it changed what twentieth-century philosophy was allowed to ask about. Before *The Second Sex*, "philosophy of sex" was a footnote about Plato's gymnasts; after, it was a field.

The slogan everyone knows is from Volume II: "One is not born, but rather becomes, a woman" (*The Second Sex*, II.I.1). This is not a remark about gender roles in the modern sense. It is an existentialist claim: there is no womanly essence that nature hands you. There is a situation — biological, social, historical — that women are made to inhabit, and the central philosophical question is what freedom looks like inside it.

## The ethics of ambiguity

De Beauvoir is often filed under "existentialism" as a footnote to Sartre. This understates her. *The Ethics of Ambiguity* (1947) is the only sustained attempt to build an ethics out of Sartrean premises, and it solves a problem he didn't. If we are radically free, why is anything obligatory?

Her answer: freedom is the kind of thing that requires the freedom of others to be meaningful. A free person whose freedom is bought by enslaving others has not achieved freedom; she has merely arranged the room. The obligation to liberate others is not added to existentialism from outside. It is built into what freedom is.

## The Other

In *The Second Sex*, de Beauvoir takes the Hegelian dialectic of self and other — the structure where I become a self by recognizing, and being recognized by, another consciousness — and asks what happens when the recognition is structurally one-way. Man, she argues, has positioned himself as Subject and woman as Other; her interiority is presumed not to count in the same way (*The Second Sex*, Introduction).

This is the argument with the longest reach. The structure she identifies — one group treating another as a permanent Other against which the first group defines itself — was taken up by anti-colonial writers (Fanon read her closely), by later feminist theorists, and by anyone trying to describe how dominance survives in the absence of explicit force.

## Where she breaks with Sartre

Sartre wrote that "hell is other people" (*No Exit*) and meant it. De Beauvoir thought he was missing the obvious counterpoint: other people are also the only available heaven. The relational ethics of *The Ethics of Ambiguity* is more developed than anything in Sartre, and the political conclusions in *The Second Sex* — that liberation requires solidarity, not just self-clarification — are why her influence on the next generation of thinkers outlasted his.

## Where to start

*The Ethics of Ambiguity* — it is short, and the philosophy is dense in a useful way. Then the introduction and Volume II of *The Second Sex* (the Borde and Malovany-Chevallier translation, 2009; the older Parshley translation cut substantial philosophical material). Her memoirs, especially *The Prime of Life*, are worth it for context.`,
    sources: [
      { title: "Simone de Beauvoir (Stanford Encyclopedia of Philosophy)", cite: "Bergoffen, D. & Burke, M. SEP entry 'Simone de Beauvoir'", url: "https://plato.stanford.edu/entries/beauvoir/" },
      { title: "The Second Sex", cite: "trans. Borde & Malovany-Chevallier, Vintage 2009" },
      { title: "The Ethics of Ambiguity", cite: "trans. Bernard Frechtman, Citadel 1948" },
    ],
  },
  {
    id: "merleau-ponty",
    slug: "merleau-ponty",
    name: "Maurice Merleau-Ponty",
    birthYear: 1908,
    deathYear: 1961,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Maurice_Merleau-Ponty.png"),
    themes: ["mind", "metaphysics"],
    shortSummary:
      "Merleau-Ponty put the body back into phenomenology. We do not perceive the world as disembodied minds receiving sensory data; we perceive as embodied agents already at home in a meaningful world. The implication has slowly transformed philosophy of mind.",
    fullBody: `*Phenomenology of Perception* (1945) is the founding text of *embodied* phenomenology. Husserl had largely treated consciousness in abstraction from the body; Heidegger had treated Dasein as essentially in a world but said relatively little about embodiment as such. Merleau-Ponty argues that the body is not a *thing* the mind has — like an instrument or vehicle — but the very condition of having a perspective at all. We do not perceive objects across an external gap; we perceive *through* a body that already inhabits the world.

This has consequences in every direction. Perception is not a passive reception of sense data but an active engagement; the body already knows how to reach toward a cup before any conscious deliberation occurs. Other people are not first inferred to have minds; we perceive their intentions directly in their gestures. The hand that touches an object is also touched by it — the body is reversibly both perceiver and perceived.

Contemporary work on *embodied cognition* in cognitive science and AI traces directly to Merleau-Ponty (with later mediation by Hubert Dreyfus, who applied his arguments to critique early AI). Phenomenology of perception is now one of the live currents in philosophy of mind, not merely a historical position.

He died of a stroke at fifty-three, mid-sentence, working on what would have been his next major book — *The Visible and the Invisible*, published posthumously.`,
    sources: [
      { title: "Maurice Merleau-Ponty (SEP)", cite: "Toadvine, T. SEP entry 'Maurice Merleau-Ponty'", url: "https://plato.stanford.edu/entries/merleau-ponty/" },
    ],
  },
  {
    id: "camus",
    slug: "camus",
    name: "Albert Camus",
    birthYear: 1913,
    deathYear: 1960,
    region: "european",
    era: "contemporary",
    difficulty: "beginner",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_posé_au_bureau,_faisant_face_à_gauche,_cigarette_de_tabagisme.jpg"),
    themes: ["ethics", "metaphysics"],
    shortSummary:
      "Camus rejected the label of existentialist and wrote, against it, a philosophy of the absurd. The Myth of Sisyphus opens with the only serious philosophical question: whether to commit suicide. His answer — that life is worth living precisely because it has no inherent meaning — is the move.",
    fullBody: `Camus is often grouped with the existentialists, and he rejected the grouping throughout his life. His position is closer in spirit to ancient philosophy: a confrontation with the basic conditions of human existence and a question about how to live in light of them.

*The Myth of Sisyphus* (1942) opens with the line that "there is only one really serious philosophical problem, and that is suicide." Given that life has no transcendent meaning — no God, no providential plan, no built-in purpose — is it worth continuing? Camus' answer is yes, but not for the reasons philosophical tradition usually gives. Sisyphus, condemned to roll a boulder up a hill forever, only to watch it roll back down, is the image of human life. The question is not whether the task is futile (it is) but whether one can find dignity and even joy in the doing. Camus' Sisyphus is happy — not because he is deceived, but because he has refused the alternative of resignation or denial.

*The Rebel* (1951) develops the political consequences. Genuine rebellion — saying no to oppression — is structurally different from revolution that installs new oppressions. The argument was part of his break with Sartre, who was sympathetic to Soviet communism in ways Camus thought betrayed the original rebellious impulse.

His novels — *The Stranger* (1942), *The Plague* (1947), *The Fall* (1956) — are part of the philosophical project, not adjuncts to it. He won the Nobel Prize for Literature in 1957. He died in a car crash at forty-six.`,
    sources: [
      { title: "Albert Camus (SEP)", cite: "Aronson, R. SEP entry 'Albert Camus'", url: "https://plato.stanford.edu/entries/camus/" },
    ],
  },
  {
    id: "arendt",
    slug: "arendt",
    name: "Hannah Arendt",
    birthYear: 1906,
    deathYear: 1975,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Hannah_arendt.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Arendt's three books — The Origins of Totalitarianism, The Human Condition, Eichmann in Jerusalem — produced the most important twentieth-century political theory in a tradition skeptical of both liberal and Marxist orthodoxies. The banality of evil is hers, and it is more careful than the slogan suggests.",
    fullBody: `Arendt fled Nazi Germany in 1933, was interned briefly in France, escaped to New York in 1941. She trained as a phenomenologist under Heidegger and Jaspers; her political theory shows both influences though she was, by her own account, not exactly any of those things.

*The Origins of Totalitarianism* (1951) is the first major analysis of totalitarianism — Nazi and Stalinist — as a *new* form of political organization, not just an intensification of older tyrannies. What distinguishes totalitarianism, on Arendt's reading, is the systematic destruction of the conditions of political life itself: the elimination of the public realm, the atomization of individuals, the use of ideology to render reality irrelevant.

*The Human Condition* (1958) develops her positive political vision. Three modes of activity: *labor* (the cyclical work of biological maintenance), *work* (the production of durable artifacts that outlast the maker), and *action* (the political activity of speaking and acting among equals, which is what makes us specifically human). Modern societies, she argues, have collapsed all three into labor, and political action has been replaced by administration.

*Eichmann in Jerusalem* (1963) is the report on the Eichmann trial that introduced the *banality of evil*. The phrase has been widely misunderstood. Arendt is not saying Eichmann's crimes were banal; she is saying that the man committing them was — that he was not a demonic figure but a cliché-spouting mediocrity who never seriously considered what he was doing. Evil at this scale, she argues, does not require diabolical intent; it requires the absence of *thinking*, in a strong sense she develops elsewhere.`,
    sources: [
      { title: "Hannah Arendt (SEP)", cite: "d'Entreves, M. SEP entry 'Hannah Arendt'", url: "https://plato.stanford.edu/entries/arendt/" },
    ],
  },
  // ---- Frankfurt School ----
  {
    id: "adorno",
    slug: "adorno",
    name: "Theodor W. Adorno",
    birthYear: 1903,
    deathYear: 1969,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Adorno.jpg"),
    themes: ["politics", "aesthetics", "ethics"],
    shortSummary:
      "Adorno was the most acerbic of the Frankfurt School — a Marxist critic of capitalism who was equally unsparing about the cultural industries that, in his view, sold mass entertainment as a substitute for politics. Negative Dialectics is his system, to the extent he allowed himself one.",
    fullBody: `Adorno and Max Horkheimer wrote *Dialectic of Enlightenment* (1944, published 1947) in exile in California. The book's thesis is unsettling: the same Enlightenment rationality that promised liberation from myth has, in modern industrial societies, produced a new myth — that of total administration, in which everything (including culture and the self) is reduced to instrumental calculation. The Holocaust and the culture industry are, on this analysis, products of the same logic.

The *culture industry* essay is the most discussed. Adorno argued that mass culture — Hollywood film, pop music, radio, advertising — is not a democratization of art but a system that produces standardized commodities tailored to maximize consumption while reproducing political docility. He has been accused of elitism, and his judgments of jazz (which he basically did not understand) do not help his case. The structural argument, that profitable entertainment systematically narrows the imagination of what could otherwise be different, has not gone away.

*Negative Dialectics* (1966) is his most sustained philosophical work. The argument: Hegelian dialectics has too often resolved into synthesis, and the work of dialectical thinking is more important when it *resists* premature closure — when it stays with the non-identical, the contradictions that cannot be tidied. The book is hard, deliberately so, and rewards rereading.

*Minima Moralia* (1951), a collection of aphoristic reflections, is the most readable Adorno. "There is no right life in the wrong one" is the most famous line.`,
    sources: [
      { title: "Theodor W. Adorno (SEP)", cite: "Zuidervaart, L. SEP entry 'Theodor W. Adorno'", url: "https://plato.stanford.edu/entries/adorno/" },
    ],
  },
  {
    id: "habermas",
    slug: "habermas",
    name: "Jürgen Habermas",
    birthYear: 1929,
    deathYear: null,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("JuergenHabermas.jpg"),
    themes: ["politics", "ethics", "epistemology"],
    shortSummary:
      "Habermas inherited the Frankfurt School and turned it toward a defense of Enlightenment values via discourse ethics. The conditions of free communication, he argues, are themselves the conditions of legitimate political authority. He has been arguing this for sixty years.",
    fullBody: `Habermas is the most prominent inheritor of the Frankfurt School and the one who turned its trajectory most clearly back toward the defense of Enlightenment commitments his elders had partly indicted.

*The Structural Transformation of the Public Sphere* (1962) traced the historical emergence of a bourgeois public sphere — coffeehouses, journals, salons — in which private citizens could deliberate as equals about public matters, and the subsequent decay of that sphere under commercial mass media. The argument was important well beyond philosophy.

His mature work develops the *theory of communicative action* (*Theory of Communicative Action*, 1981). The starting point: every act of communication oriented toward understanding presupposes certain idealizations — that what we say is true, that we are sincere, that what we say is normatively appropriate, that we are trying to reach agreement. These *validity claims* are built into language use itself.

This gives Habermas the resources for *discourse ethics*: norms are legitimate insofar as they could be agreed to by everyone affected, in conditions of unforced communication. The argument is meant to ground a defense of liberal democracy and human rights without relying on metaphysical foundations the modern condition can no longer support.

The position is constantly criticized — for being too optimistic about communication, too liberal in its biases, too Eurocentric — and constantly refined. *Between Facts and Norms* (1992) is his political-legal theory. He has been Germany's leading public intellectual for decades.`,
    sources: [
      { title: "Jürgen Habermas (SEP)", cite: "Bohman, J. SEP entry 'Jürgen Habermas'", url: "https://plato.stanford.edu/entries/habermas/" },
    ],
  },
  // ---- Structuralism / Post-structuralism / Postmodern ----
  {
    id: "levi-strauss",
    slug: "levi-strauss",
    name: "Claude Lévi-Strauss",
    birthYear: 1908,
    deathYear: 2009,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Levi-strauss_260.jpg"),
    themes: ["politics", "metaphysics"],
    shortSummary:
      "Lévi-Strauss imported Saussure's linguistic structuralism into anthropology and found that myths, kinship systems, and food preparation across cultures share the same underlying combinatorial structure. The move launched structuralism as the dominant Parisian intellectual project of the 1960s.",
    fullBody: `Lévi-Strauss' wager — argued across *The Elementary Structures of Kinship* (1949), *Tristes Tropiques* (1955), *Structural Anthropology* (1958), and the four volumes of *Mythologiques* (1964–71) — is that the surface diversity of human cultures is generated by deep structural patterns shared across them. The patterns are binary oppositions (raw/cooked, nature/culture, life/death) combined and transformed by the unconscious in regular ways.

The method is Saussurean. Saussure had argued that linguistic meaning depends not on the relation between signs and things but on the differential relations among signs. Lévi-Strauss generalized this to all cultural systems. A myth means what it means not because of any particular content but because of its position in a system of contrasts with other myths.

This was the intellectual foundation of *structuralism* — the movement that dominated French thought through the 1960s. Roland Barthes applied it to literature and popular culture; Jacques Lacan to psychoanalysis; Louis Althusser to Marxism; the early Foucault to the history of knowledge. The move that the later *post-*structuralists made was to argue that the structures Lévi-Strauss had described were themselves unstable, historically contingent, and shot through with the power relations they were supposed to neutralize.`,
    sources: [
      { title: "Claude Lévi-Strauss (SEP)", cite: "Doja, A. SEP entry 'Claude Lévi-Strauss'", url: "https://plato.stanford.edu/entries/levi-strauss/" },
    ],
  },
  {
    id: "foucault",
    slug: "foucault",
    name: "Michel Foucault",
    birthYear: 1926,
    deathYear: 1984,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 6,
    imageUrl: wikiImage("Michel_Foucault_1974_Brasil.jpg"),
    themes: ["politics", "ethics", "epistemology"],
    shortSummary:
      "Foucault asked how the categories we use to know ourselves — madness, sexuality, criminality — were produced, and what kinds of power they enable. The answer, across half a dozen historical studies, is more disturbing than the slogan 'knowledge is power' makes it sound.",
    fullBody: `Foucault's project resists summary because he kept changing what he was doing. The early "archaeological" works (*Madness and Civilization*, 1961; *The Order of Things*, 1966) trace how *epistemes* — the underlying frameworks that make certain kinds of knowledge possible — succeed each other across history without anyone deciding to change them. Madness, in different epistemes, has been a kind of religious truth, a moral failure, a medical condition; what counts as the object varies with the framework, which is itself historically situated.

The "genealogical" works of the 1970s — *Discipline and Punish* (1975) and the first volume of *The History of Sexuality* (1976) — turn to power. *Discipline and Punish* traces the historical shift from sovereign power (the visible spectacle of punishment, exercised on the body) to *disciplinary* power (the invisible normalization of behavior through schools, prisons, hospitals, barracks, factories, all converging on the *panopticon* as their ideal type). Bentham's prison design — a circular building with a central watchtower from which a single guard could observe any cell without being observed — is, for Foucault, the diagram of how modern power operates: not by force but by the internalization of surveillance.

*The History of Sexuality* Vol. 1 attacks what Foucault calls the *repressive hypothesis* — the standard story that Western culture has repressed sex and modernity is gradually liberating it. The actual history, he argues, is that modernity has *produced* sexuality as a domain of knowledge and a target of administration. Confession, psychiatry, sexology, marriage manuals, school curricula — all of this has not silenced sex; it has multiplied discourse about it, and in doing so has made the body and its desires into objects of power.

The later volumes (*The Use of Pleasure*, *The Care of the Self*) shift again — toward the ancient practices of ethical self-formation. The question becomes how a person constitutes themselves as an ethical subject through specific practices, and what kinds of resistance to dominant norms might be possible in this register.`,
    sources: [
      { title: "Michel Foucault (SEP)", cite: "Gutting, G. & Oksala, J. SEP entry 'Michel Foucault'", url: "https://plato.stanford.edu/entries/foucault/" },
    ],
  },
  {
    id: "derrida",
    slug: "derrida",
    name: "Jacques Derrida",
    birthYear: 1930,
    deathYear: 2004,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Jacques_Derrida_(1930-2004).jpg"),
    themes: ["epistemology", "metaphysics", "logic"],
    shortSummary:
      "Derrida's deconstruction is a method of reading that finds, in any sufficiently complex text, the points at which its own argument depends on the very things it tries to exclude. The argument is more careful than its detractors usually admit and less hostile to philosophy than its admirers sometimes claim.",
    fullBody: `Derrida's central move can be stated more precisely than the standard caricatures of "deconstruction" allow. Western philosophy, he argues, has been organized around hierarchical oppositions — speech/writing, presence/absence, identity/difference, nature/culture, male/female. In each pair, the first term is treated as primary, fully present, self-identical; the second as derivative, a falling away from the first.

What Derrida shows, through close readings of Plato, Rousseau, Husserl, Saussure, and others, is that the favored term cannot maintain its priority on its own terms. Speech is supposed to be the original, with writing a derivative copy — but every analysis of speech that tries to specify what makes it "live" turns out to depend on features (repeatability, differentiation, distance) that the tradition has assigned to writing. The supposedly secondary term is not opposed to the primary but constitutive of it.

*Différance* is Derrida's neologism for the structure he finds: simultaneously *to differ* (mark off as different) and *to defer* (postpone in time). Meaning is generated by relations of difference, and the full presence the tradition has sought is never available because any sign refers to other signs in an endless chain.

The political and ethical payoff is more careful than the standard story. Deconstruction is not relativism (it does not say "anything goes"); it is a discipline of reading that resists premature closure. It has political force where premature closure is doing harm — in the binary oppositions that have organized colonialism, patriarchy, and other dominations. Late Derrida wrote increasingly directly about justice, hospitality, friendship, mourning.

The reception in Anglo-American philosophy was mostly hostile. Searle's exchange with Derrida is the famous case. Whether deconstruction is incompatible with analytic philosophical practice or could be made to talk with it is an open question that good readers on both sides keep working on.`,
    sources: [
      { title: "Jacques Derrida (SEP)", cite: "Lawlor, L. SEP entry 'Jacques Derrida'", url: "https://plato.stanford.edu/entries/derrida/" },
    ],
  },
  {
    id: "deleuze",
    slug: "deleuze",
    name: "Gilles Deleuze",
    birthYear: 1925,
    deathYear: 1995,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Gilles_Deleuze.jpg"),
    themes: ["metaphysics", "politics", "aesthetics"],
    shortSummary:
      "Deleuze read the history of philosophy as a series of resources for thinking difference, multiplicity, and creation against the dominant tradition's preference for identity, unity, and recognition. With Guattari, he produced a body of work that has remade what counts as philosophy.",
    fullBody: `Deleuze's early work consisted of intensive readings of Hume, Bergson, Nietzsche, Kant, and Spinoza — each book extracting a specifically Deleuzian variant of the philosopher in question. The recurring concern is *difference* itself, as opposed to identity: how to think the new, the singular, the multiple, without reducing them to instances of pre-existing types.

*Difference and Repetition* (1968) is his major systematic work. Standard metaphysics, on Deleuze's reading, has treated difference as derivative — as the difference *between* identities that are themselves primary. Deleuze inverts the order. Difference is primary, and what we call identities are stabilizations of underlying differential flows. The repetition that matters is not the recurrence of the same but the productive repetition that generates the new.

His collaboration with the psychoanalyst Félix Guattari — *Anti-Oedipus* (1972) and *A Thousand Plateaus* (1980), together called *Capitalism and Schizophrenia* — applies this metaphysics to politics, psychiatry, and the analysis of social formations. The famous concepts of the *rhizome* (a non-hierarchical, multiply connected network) and *deterritorialization* (the freeing of flows from their stabilized channels) come from there.

Deleuze's influence outside philosophy — on art theory, film studies, architecture, geography — has been disproportionate. His writing is difficult, and the difficulty is often substantive rather than ornamental.`,
    sources: [
      { title: "Gilles Deleuze (SEP)", cite: "Smith, D. & Protevi, J. SEP entry 'Gilles Deleuze'", url: "https://plato.stanford.edu/entries/deleuze/" },
    ],
  },
  {
    id: "lyotard",
    slug: "lyotard",
    name: "Jean-François Lyotard",
    birthYear: 1924,
    deathYear: 1998,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: null,
    themes: ["politics", "epistemology"],
    shortSummary:
      "Lyotard defined the postmodern condition as 'incredulity toward metanarratives' — the loss of faith in grand stories of progress, emancipation, or universal reason. The slogan has been overused; the underlying argument is sharper than the caricature.",
    fullBody: `*The Postmodern Condition* (1979) was a report commissioned by the Conseil des Universités du Québec on the state of knowledge in advanced societies. It became one of the most influential short books of late-twentieth-century thought, partly because of how badly its central thesis was misappropriated.

Lyotard's claim: the legitimating *metanarratives* of modernity — the Enlightenment story of progress through reason, the Hegelian story of the realization of spirit, the Marxist story of emancipation through class struggle — have lost their credibility. These narratives gave knowledge its meaning and its direction; without them, knowledge is increasingly justified only by its operational efficacy, by *performativity*.

This is not a celebration of relativism. Lyotard is describing a condition, partly with regret. The postmodern, on his account, is what remains when the legitimating stories collapse: a multiplicity of small narratives, local language games, no overarching framework adjudicating among them. Some of this is liberating (the suppressed differences of grand narratives can speak); some is troubling (without shared frameworks, how do we recognize injustice when we see it?).

*The Differend* (1983) is the more rigorous philosophical work. A *differend* is a wrong that cannot be expressed in the language available to the wronged party. The Holocaust survivor whose suffering cannot be expressed within the categories of the legal system that adjudicates restitution; the colonized whose claim cannot be heard in the language of the colonizer. Justice, Lyotard argues, partly consists in finding ways to express what the dominant idioms cannot.`,
    sources: [
      { title: "Jean-François Lyotard (SEP)", cite: "Woodward, A. SEP entry 'Jean-François Lyotard'", url: "https://plato.stanford.edu/entries/lyotard/" },
    ],
  },
  {
    id: "baudrillard",
    slug: "baudrillard",
    name: "Jean Baudrillard",
    birthYear: 1929,
    deathYear: 2007,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Jean_Baudrillard_(cropped).jpg"),
    themes: ["metaphysics", "aesthetics", "politics"],
    shortSummary:
      "Baudrillard argued that contemporary culture has moved past representation into a regime where signs no longer refer to anything outside themselves — the era of the simulacrum. The Matrix borrowed his book and got the philosophy half right.",
    fullBody: `Baudrillard's *Simulacra and Simulation* (1981) traces what he calls the orders of simulacra — successive regimes in which the relation between signs and what they represent shifts. In the first order (the early modern era), signs are *counterfeits* — imitations of real things. In the second order (industrial production), signs are mass-produced *copies* of an original. In the third order (the contemporary moment), signs are *simulacra* — copies without originals, signs that no longer refer to anything outside the system of signs.

A Disney castle is not a copy of a real castle; it is a sign of *castle-ness* that has cut loose from any actual castle. A political campaign image is not a representation of a candidate's actual qualities; it is a simulation that is itself the political reality. The territory has been replaced by the map; or, more precisely, what we now call "the territory" is itself just a level of the map.

*The Gulf War Did Not Take Place* (1991) is the most provocative title and the most easily misread. Baudrillard was not denying that violence occurred; he was arguing that what we experienced as "the war" was a media-saturated simulation that bore little relation to the actuality on the ground — and that this asymmetry was itself the new condition of war.

The Wachowskis put a copy of *Simulacra and Simulation* in *The Matrix*. Baudrillard responded that they had misunderstood his book.`,
    sources: [
      { title: "Jean Baudrillard (SEP)", cite: "SEP entry on postmodernism touches on Baudrillard", url: "https://plato.stanford.edu/entries/postmodernism/" },
    ],
  },
  {
    id: "lacan",
    slug: "lacan",
    name: "Jacques Lacan",
    birthYear: 1901,
    deathYear: 1981,
    region: "european",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Jaques_Lacan.jpg"),
    themes: ["mind", "metaphysics"],
    shortSummary:
      "Lacan rewrote Freudian psychoanalysis through structural linguistics. The unconscious is structured like a language. The self is constituted in the mirror stage by misrecognition. The desire we feel is always the desire of the Other. Whatever you think of psychoanalysis, the conceptual apparatus has shaped continental thought for sixty years.",
    fullBody: `Lacan's *return to Freud* through the lens of Saussurean linguistics produced one of the more demanding bodies of work in twentieth-century thought. His seminars — given annually from 1953 to 1980 to an increasingly fanatical Parisian audience — are the main text, supplemented by the dense *Écrits* (1966).

The *mirror stage* (1949): the infant, between six and eighteen months, recognizes itself in a mirror — but the recognition is also a misrecognition. The unified image in the mirror does not correspond to the infant's actual experience of fragmentation, motor incoordination, dependence. The mirror image is a *promise* of unity that becomes the *ego* — a structure that is, on Lacan's reading, fundamentally based on alienation.

The unconscious is *structured like a language*: it follows the laws Saussure described for signifying systems — relations of difference, displacement, condensation. Freud's dream-work (the operations by which unconscious material gets encoded into the dream's manifest content) maps onto rhetorical operations: metaphor and metonymy.

The *Symbolic*, *Imaginary*, and *Real* are three registers in which the subject is situated. The Symbolic is the order of language, law, and social structure. The Imaginary is the order of mirror images and identifications. The Real is what resists symbolization — what cannot be put into language. The interplay among the three structures both ordinary life and analytic practice.

Lacan's later work — on the *objet petit a* (the impossible object of desire that organizes the subject without being attainable), on the *Big Other* (the structured field of social meaning) — has been picked up by Slavoj Žižek and others to do work in political theory and film studies. Whether psychoanalysis as a clinical practice is justifiable is a separate question on which there is no settled answer.`,
    sources: [
      { title: "Jacques Lacan (SEP)", cite: "Johnston, A. SEP entry 'Jacques Lacan'", url: "https://plato.stanford.edu/entries/lacan/" },
    ],
  },
];
