import type { Philosopher } from "@/lib/types";
import { wikiImage } from "@/lib/wiki";

// Pragmatism, feminist philosophy, postcolonial, Africana, contemporary social/political.
export const CONTEMPORARY: Philosopher[] = [
  {
    id: "dewey",
    slug: "dewey",
    name: "John Dewey",
    birthYear: 1859,
    deathYear: 1952,
    region: "american",
    era: "modern",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("John_Dewey_in_1902.jpg"),
    themes: ["politics", "epistemology", "ethics"],
    shortSummary:
      "Dewey was the most consequential American philosopher of the twentieth century — pragmatist, educational reformer, public intellectual, and the most prolific defender of democracy as a way of life rather than just a political procedure.",
    fullBody: `Dewey shaped American intellectual life across more domains than almost anyone in any tradition. His pragmatist philosophy of inquiry — that knowledge is a form of practical engagement with problems, not the passive correspondence of a mind to a pre-existing reality — runs through his work on logic (*How We Think*, 1910; *Logic: The Theory of Inquiry*, 1938), education (*Democracy and Education*, 1916), ethics, aesthetics, and politics.

The educational program is what he is most remembered for at scale. *Democracy and Education* argues that schools should not be transmission belts for received knowledge but laboratories of inquiry in which students learn by addressing problems that matter to them. The progressive education movement is, broadly, his — and the contemporary critiques of standardized testing and rote learning recapitulate his arguments more often than they cite him.

*The Public and Its Problems* (1927) is his political theory. Democracy is not a procedure for selecting rulers; it is a way of life in which the relevant publics are able to identify the problems that affect them and act collectively to address them. The crisis of modern democracy, he argues, is the structural disorganization of publics in industrial societies — people are affected by decisions made far from them, by mechanisms they cannot trace, and the conditions of effective democratic deliberation are increasingly hard to assemble. This is more current today than when he wrote it.`,
    sources: [
      { title: "John Dewey (SEP)", cite: "Hildebrand, D. SEP entry 'John Dewey'", url: "https://plato.stanford.edu/entries/dewey/" },
    ],
  },
  {
    id: "rorty",
    slug: "rorty",
    name: "Richard Rorty",
    birthYear: 1931,
    deathYear: 2007,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Richard_Rorty_d4.jpg"),
    themes: ["epistemology", "politics"],
    shortSummary:
      "Rorty argued analytic philosophy had given up the founding ambition of philosophy — to be the discipline that adjudicates other disciplines — and should stop pretending otherwise. The reception was, predictably, hostile. The argument has aged better than its reception.",
    fullBody: `*Philosophy and the Mirror of Nature* (1979) is Rorty's case for ending the philosophical tradition that treats the mind as a "mirror" reflecting an external reality and treats philosophy as the discipline that polishes the mirror. The picture, he argues, is a contingent invention of Descartes, Locke, and Kant, not a permanent feature of inquiry, and it has produced more confusion than progress.

What replaces it, on Rorty's view, is something more modest. Philosophy becomes one literary genre among others — useful for redescribing situations, recommending vocabularies, suggesting how communities might solve problems they are already addressing. The grand questions about truth, mind, reality, and so on either get answered in this practical register or get dropped as ill-formed.

This is *neopragmatism* — Dewey, James, and Peirce updated and made to talk with the post-Quinean analytic tradition. Rorty was an outstanding analytic philosopher who decided the analytic project couldn't deliver what its practitioners said it could, and his subsequent excommunication from the field was partly stylistic, partly substantive.

*Contingency, Irony, and Solidarity* (1989) is the more political book. The argument: we can be liberal democrats (committed to reducing cruelty, expanding solidarity) without grounding that commitment in any metaphysical foundation, and the *attempt* to ground it tends to produce confusion and bad faith. The good liberal, on Rorty's account, is an *ironist* — someone who knows her central commitments are contingent and historically situated, and is committed to them anyway because contingency does not subtract their importance.`,
    sources: [
      { title: "Richard Rorty (SEP)", cite: "Ramberg, B. SEP entry 'Richard Rorty'", url: "https://plato.stanford.edu/entries/rorty/" },
    ],
  },
  // ---- Feminist philosophy ----
  {
    id: "butler",
    slug: "butler",
    name: "Judith Butler",
    birthYear: 1956,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Judith_butler_in_2012_(8295328593).jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Butler argued gender is not the cultural overlay on a biological substrate but the performance that produces what we then call the substrate. Gender Trouble (1990) changed the terms of feminist theory and shaped queer theory as a field.",
    fullBody: `*Gender Trouble* (1990) takes a structural argument from speech-act theory and applies it to gender. J.L. Austin had argued that some utterances do not describe a state of affairs but perform an act ("I do" in a wedding doesn't describe a marriage; it constitutes one). Butler argues that gender, too, is *performative* — not in the loose sense of "performing a role" but in the precise sense that the iterated performance is what constitutes the supposed underlying gender.

This is more radical than the standard sex/gender distinction (sex is biological, gender is cultural). On Butler's account, even the apparent "biological substrate" is produced as the kind of object it is through cultural practices of naming, examining, and regulating. The body that "has" a sex is the body we have learned to read in that way. This is the move that distinguishes Butler from earlier feminist theorists who treated sex as the natural ground.

Gender is, on this picture, the *sedimented* effect of countless small reiterations of social norms. This is not a claim that gender is a free choice (the standard misreading); it is, on the contrary, a claim that gender is constituted by extraordinarily constraining repetitions that we did not choose. What it does open is the possibility of *subversive* repetition — performances that expose and disrupt the apparent naturalness of the norm.

*Precarious Life* (2004) and *Frames of War* (2009) extend the analysis to political life. Whose lives count as grievable when they are lost? Whose deaths are recognized as deaths at all? The framework of recognition that structures these answers is itself the political question.`,
    sources: [
      { title: "Judith Butler (SEP)", cite: "Related entries on feminist philosophy", url: "https://plato.stanford.edu/entries/feminism-gender/" },
    ],
  },
  {
    id: "nussbaum",
    slug: "nussbaum",
    name: "Martha Nussbaum",
    birthYear: 1947,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Martha_Nussbaum_wikipedia_10-10.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Nussbaum's capabilities approach — developed with Amartya Sen — is the most influential alternative to GDP-based and utilitarian measures of human well-being. Her work on emotions, classical philosophy, and law has been just as consequential in its own domains.",
    fullBody: `The *capabilities approach*, developed with Amartya Sen and extended in Nussbaum's *Women and Human Development* (2000) and *Creating Capabilities* (2011), asks: what is each person actually able to *do and be*? Not what resources do they have (a Rawlsian primary-goods framing), not how satisfied do they report being (a utilitarian framing), but what real freedoms — to be educated, to be in good health, to participate politically, to play, to form attachments — are available to them?

Nussbaum's list of central capabilities (life, bodily health, bodily integrity, senses and imagination, emotions, practical reason, affiliation, other species, play, control over one's environment) is meant as a minimum that decent societies should secure for everyone. The list is offered as defeasible — corrigible by argument and cross-cultural conversation — but Nussbaum defends it as not arbitrary. Each capability captures something that humans, on plausible accounts of human flourishing, have reason to value.

The approach has shaped UN Human Development reports, public-policy frameworks, and disability rights advocacy. It is also philosophically careful in ways that make it hard to caricature: it is not utilitarianism (capabilities, not subjective states), not Kantianism (substantive content, not just procedure), not communitarianism (universal standards, not cultural particularism), and not classical liberalism (positive freedoms, not just negative).

Her earlier work — *The Fragility of Goodness* (1986), on ancient Greek ethics and the vulnerability of the ethical life to luck — is one of the most beautiful works of philosophy written in English in the late twentieth century.`,
    sources: [
      { title: "The Capability Approach (SEP)", cite: "Robeyns, I. SEP entry 'The Capability Approach'", url: "https://plato.stanford.edu/entries/capability-approach/" },
    ],
  },
  {
    id: "haraway",
    slug: "haraway",
    name: "Donna Haraway",
    birthYear: 1944,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Donna_Haraway_2008.jpg"),
    themes: ["politics", "metaphysics"],
    shortSummary:
      "Haraway's Cyborg Manifesto used the figure of the cyborg — half-human, half-machine — to argue against the boundaries (human/animal, organism/machine, physical/non-physical) that twentieth-century feminism had often taken for granted. The essay's afterlife has been broader than any of its arguments.",
    fullBody: `*A Cyborg Manifesto* (1985) is one of the most cited and most misread essays of late-twentieth-century theory. The cyborg, for Haraway, is a figure that crosses three boundaries the dominant tradition has tried to police: the boundary between human and animal (which evolutionary biology had already eroded), between organism and machine (which late-twentieth-century technology has eroded further), and between the physical and the non-physical (which information and electromagnetic radiation have made ambiguous).

The polemical move: feminism had often grounded itself in a strong opposition between the natural, the embodied, the woman, on one side, and the technological, the disembodied, the masculine, on the other. Haraway argues this concedes too much. The cyborg figure refuses the binary — and that refusal is where genuinely emancipatory feminist politics has to start, not where it has to defend itself against.

Her later work — *When Species Meet* (2008), *Staying with the Trouble* (2016) — develops a sustained attention to the relations between humans and other organisms, with a methodological commitment to *response-ability* (the capacity to respond, and to be implicated in responses) as the basic ethical posture. She wrote one of the major early texts in animal studies (*The Companion Species Manifesto*, 2003), arguing that dogs and their humans co-evolved into the kind of beings they each are.`,
    sources: [
      { title: "Donna Haraway (related)", cite: "SEP entries on feminist philosophy of science", url: "https://plato.stanford.edu/entries/feminist-social-epistemology/" },
    ],
  },
  // ---- Postcolonial / Africana ----
  {
    id: "fanon",
    slug: "fanon",
    name: "Frantz Fanon",
    birthYear: 1925,
    deathYear: 1961,
    region: "african",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 5,
    imageUrl: wikiImage("Frantz_Fanon.jpg"),
    themes: ["politics", "ethics", "mind"],
    shortSummary:
      "Fanon was a psychiatrist who became a revolutionary. His two books — Black Skin, White Masks and The Wretched of the Earth — are the founding works of anti-colonial philosophy and have shaped political thought across three continents.",
    fullBody: `Fanon was born in Martinique, trained as a psychiatrist in Lyon, served in the Free French forces in WWII, and was posted to Algeria during the war of independence. He resigned from his position at the Blida-Joinville Hospital in 1956 to join the FLN. He wrote *The Wretched of the Earth* in the months before his death from leukemia in 1961.

*Black Skin, White Masks* (1952) takes existentialist phenomenology — Sartre's especially — and asks what it looks like under conditions of anti-Black racism. The Black subject, on Fanon's analysis, is constituted not just *as* a self but as a self that has been racially seen and racially named in ways that infiltrate the structure of experience itself. The chapter "The Fact of Blackness" (Ch. 5) describes the structure with a phenomenological precision that the existentialist tradition had not yet applied to race.

*The Wretched of the Earth* (1961) is the political treatise. Colonialism is not just an economic or administrative system; it is a totalizing structure that produces both colonizer and colonized as certain kinds of subjects. Decolonization is not a transfer of administrative authority; it is, Fanon argues, the production of a new humanity from the destruction of the colonial relation. The book's defense of revolutionary violence has been the most controversial element, and the most carefully read.

Sartre's preface is part of the book's reception history; Hannah Arendt criticized both the book and the preface in *On Violence* (1970). The argument is harder to dismiss than dismissals have made it look. Postcolonial theory, Black studies, and political theology have all developed in conversation with Fanon for sixty years.`,
    sources: [
      { title: "Frantz Fanon (SEP)", cite: "Hudis, P. SEP entry 'Frantz Fanon'", url: "https://plato.stanford.edu/entries/frantz-fanon/" },
    ],
  },
  {
    id: "said",
    slug: "said",
    name: "Edward Said",
    birthYear: 1935,
    deathYear: 2003,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Edward_Said.jpg"),
    themes: ["politics", "epistemology"],
    shortSummary:
      "Said's Orientalism (1978) showed that Western academic, literary, and political discourse about 'the East' has been a system of representations that produces the very object it claims to describe — and serves the interests of those producing it. The book founded postcolonial studies as a field.",
    fullBody: `*Orientalism* (1978) takes Foucault's analysis of discourse and applies it to the corpus of Western writing about the Middle East, North Africa, and Asia. The argument is structural: the disciplines that came to be called "Orientalism" — philology, history, literary criticism, anthropology, political analysis — did not neutrally describe the regions they studied. They produced a *discourse* — a system of representations with characteristic figures (the sensual, despotic, mysterious, irrational East), characteristic absences (the perspective of those being represented), and characteristic effects (the legitimation of colonial administration, the framing of contemporary geopolitics).

The argument is not that every individual Orientalist scholar was malicious, or that every claim made was false. It is that the *discursive system* did the work of producing its object in such a way that the imperial projects that depended on it were rendered intellectually respectable.

The book has been criticized for its scope (does the argument apply to *all* Western scholarship on these regions? Said hedges) and for its method (some have argued the chosen archive is selective). The structural point has nevertheless been transformative. Said himself was a literary critic, a Palestinian-American public intellectual, and one of the major voices on the Israel-Palestine question for thirty years.`,
    sources: [
      { title: "Edward Said (related SEP entries)", cite: "SEP entries on postcolonialism and continental philosophy", url: "https://plato.stanford.edu/entries/colonialism/" },
    ],
  },
  {
    id: "spivak",
    slug: "spivak",
    name: "Gayatri Chakravorty Spivak",
    birthYear: 1942,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "advanced",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Gayatri_Chakravorty_Spivak_at_Goldsmiths_College.JPG"),
    themes: ["politics", "ethics"],
    shortSummary:
      "Spivak's 'Can the Subaltern Speak?' is one of the most cited essays in postcolonial theory. The argument is more careful than the slogan: it asks whether the most marginalized — particularly women in colonized societies — can be heard within the discursive frameworks available to record them.",
    fullBody: `Spivak translated Derrida's *Of Grammatology* into English in 1976 (the long translator's preface is itself a major work), and her own writing brings deconstruction into postcolonial theory and feminist theory with a precision that mostly defeats translation into manageable summaries.

*Can the Subaltern Speak?* (1988) examines the conditions under which the speech of the most marginalized — the *subaltern* in Gramsci's sense, particularly the women of colonized societies — can be heard within discursive frameworks dominated by Western scholarship and post-independence elites. Spivak's case study is the practice of *sati* (widow self-immolation) in colonial India and the way both British colonial discourse ("white men saving brown women from brown men") and indigenous nationalist discourse ("women died willingly") foreclosed the actual perspective of the women involved.

The conclusion of the essay — sometimes summarized as "no, the subaltern cannot speak" — is more precise: it is not that the subaltern has no voice but that the discursive conditions for that voice to be recorded as speech (and not as silence, hysteria, deviance, etc.) are systematically absent. The political and ethical question is the work required to produce those conditions.

Spivak's later work continues these themes through readings of literature, education, and the politics of representation in globalized capitalism.`,
    sources: [
      { title: "Gayatri Spivak (related)", cite: "SEP entry on postcolonial feminism", url: "https://plato.stanford.edu/entries/feminism-postcolonial/" },
    ],
  },
  {
    id: "bell-hooks",
    slug: "bell-hooks",
    name: "bell hooks",
    birthYear: 1952,
    deathYear: 2021,
    region: "american",
    era: "contemporary",
    difficulty: "beginner",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Bell_hooks,_October_2014.jpg"),
    themes: ["politics", "ethics"],
    shortSummary:
      "bell hooks wrote that feminism without an account of race and class isn't worth the name, that Black women had been written out of both white feminism and Black liberation movements, and that love — taken seriously as a political and ethical practice — is part of what was missing.",
    fullBody: `Gloria Watkins, writing as bell hooks (lowercase, deliberately), produced more than thirty books across feminist theory, cultural criticism, pedagogy, and what she insisted on calling the *love ethic*. Her early *Ain't I a Woman: Black Women and Feminism* (1981) — written when she was nineteen, published when she was twenty-nine — laid out the structural argument: feminist theory and politics in the United States had been built around the experience of white middle-class women, and Black women had been systematically erased from both that tradition and from the Black liberation movement whose racial analysis stayed centered on Black men.

*Feminist Theory: From Margin to Center* (1984) is the more systematic theoretical work. The argument: a feminist theory that begins from the experience of those most marginalized by intersecting systems of domination produces both a more accurate analysis and a more ambitious politics than one built around the grievances of relatively privileged women.

*Teaching to Transgress* (1994) is her pedagogical work — drawing on Paulo Freire and Buddhist practice — and is one of the most cited books in critical pedagogy. *All About Love* (2000) is the book that brought her to a broader audience: a sustained argument that contemporary culture has so degraded the concept of love that we have lost the political and ethical resources it once carried.`,
    sources: [
      { title: "bell hooks (related)", cite: "SEP entries on feminist philosophy", url: "https://plato.stanford.edu/entries/feminism-class/" },
    ],
  },
  {
    id: "west",
    slug: "cornel-west",
    name: "Cornel West",
    birthYear: 1953,
    deathYear: null,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Cornel_West_2013.jpg"),
    themes: ["politics", "ethics", "religion"],
    shortSummary:
      "West works at the intersection of pragmatism, Black liberation theology, and Marxism. Race Matters made the intersection visible to a wider audience; Democracy Matters and the larger body of writing continue the argument.",
    fullBody: `West's intellectual project — laid out in *The American Evasion of Philosophy* (1989), *Race Matters* (1993), *Democracy Matters* (2004), and many more books — combines several traditions usually kept apart: American pragmatism (especially Dewey and James), the Black prophetic tradition, Marxist political economy, and a particular Kierkegaardian existentialism.

The central diagnostic claim: American democracy is undergoing a crisis of *nihilism* — not the philosophical kind, but the experiential one in which large populations have lost the resources of meaning and hope that make political action possible. Among Black Americans, this manifests in distinctive ways shaped by the specific history of racial subordination; among other Americans, in other ways. The remedy, on West's account, is partly material (the political-economic conditions in which meaningful lives become possible) and partly cultural (the cultivation of the *prophetic* traditions — religious, musical, literary — that have historically sustained democratic energies under conditions of dispossession).

West is a public intellectual and frequent presence in American political and cultural life, with the controversies that brings. The philosophical work underneath the public role is consistent across decades.`,
    sources: [
      { title: "Cornel West (related)", cite: "SEP entries on pragmatism and Africana philosophy", url: "https://plato.stanford.edu/entries/africana/" },
    ],
  },
  {
    id: "appiah",
    slug: "appiah",
    name: "Kwame Anthony Appiah",
    birthYear: 1954,
    deathYear: null,
    region: "african",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 3,
    imageUrl: wikiImage("Kwame_Anthony_Appiah_by_David_Shankbone.jpg"),
    themes: ["ethics", "politics"],
    shortSummary:
      "Appiah works the seam between analytic philosophy and identity politics. His Cosmopolitanism (2006) and The Lies That Bind (2018) argue against the inflation of identity categories — race, religion, nation, culture — that politics keeps demanding we treat as primary.",
    fullBody: `Appiah was born in London, raised in Kumasi, Ghana, and trained at Cambridge. He works in the analytic tradition on questions about identity, race, culture, and ethics, with a touch that doesn't appear in many corners of either analytic philosophy or identity-focused theory.

*In My Father's House* (1992) was the early statement. *Race*, Appiah argues, is not a coherent biological category, but it is a real social phenomenon with real effects, and the philosophical task is to handle that complexity without either reifying race as essence or pretending its effects don't exist.

*Cosmopolitanism: Ethics in a World of Strangers* (2006) defends what he calls *rooted cosmopolitanism* — the view that we owe substantive moral consideration to people far away and culturally different from us, without surrendering the local attachments that give individual lives texture. The position is contrasted both with parochialism (we owe only our neighbors) and with bloodless universalism (we owe everyone the same thing).

*The Lies That Bind* (2018) attacks the way contemporary politics inflates the category of identity — racial, religious, national, cultural — into something more coherent and fixed than the categories really are. Identities are tools we use, often productively; treating them as essences misuses them and produces both bad theory and bad politics.`,
    sources: [
      { title: "Kwame Anthony Appiah (related)", cite: "SEP entries on Africana philosophy and cosmopolitanism", url: "https://plato.stanford.edu/entries/cosmopolitanism/" },
    ],
  },
  // ---- Philosophy of science and one more ----
  {
    id: "popper",
    slug: "popper",
    name: "Karl Popper",
    birthYear: 1902,
    deathYear: 1994,
    region: "european",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Karl_Popper.jpg"),
    themes: ["epistemology", "politics"],
    shortSummary:
      "Popper's central insight was that scientific theories are not confirmed by accumulating positive instances; they are tested by trying to falsify them. The asymmetry between confirmation and falsification has shaped twentieth-century philosophy of science even where Popper's specific proposals are now contested.",
    fullBody: `*The Logic of Scientific Discovery* (1934, English 1959) takes on the central problem of philosophy of science: what distinguishes scientific theories from pseudo-scientific ones? Popper argues the classical answer (induction from observations) fails. No finite set of confirming instances can verify a universal generalization, and there is no way to specify in advance which instances should count.

The asymmetry: while no number of confirming instances proves a theory, a single genuine counterexample can refute it. The *falsifiability* of a theory — the existence of conceivable observations that would, if obtained, refute it — is what makes it scientific. Astrology, Freudian psychoanalysis, and Marxist historical theory, in Popper's view, fail the test because they can be reconciled with any possible observation, making them empirically empty.

This is more nuanced than the slogan suggests. Popper recognized that no single observation cleanly refutes a theory in practice (the *Duhem-Quine* problem), and his later work refines the position considerably. Lakatos developed *research programmes* as a more historically realistic alternative; Kuhn argued for paradigms and revolutions; Feyerabend went further. Popper's reply was always vigorous.

*The Open Society and Its Enemies* (1945) is his political philosophy, written in New Zealand during WWII. The argument: *historicism* — the view that history follows large-scale laws that allow us to predict and engineer its course — has produced totalitarian politics, both Marxist and fascist. The defense of *the open society* (gradual, falsifiable, accountable political reform) is, on Popper's view, the political analog of his philosophy of science.`,
    sources: [
      { title: "Karl Popper (SEP)", cite: "Thornton, S. SEP entry 'Karl Popper'", url: "https://plato.stanford.edu/entries/popper/" },
    ],
  },
  {
    id: "kuhn",
    slug: "kuhn",
    name: "Thomas Kuhn",
    birthYear: 1922,
    deathYear: 1996,
    region: "american",
    era: "contemporary",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Kuhn.jpg"),
    themes: ["epistemology"],
    shortSummary:
      "Kuhn's Structure of Scientific Revolutions (1962) replaced the picture of science as steady accumulation with one of episodic paradigm shifts. The word 'paradigm' was conscripted into a thousand boardrooms; the philosophical argument is more careful than its popularizations.",
    fullBody: `*The Structure of Scientific Revolutions* (1962) is the most cited book in twentieth-century philosophy of science, partly because it gave business consultants a new word to overuse. The actual argument is precise.

Kuhn distinguishes *normal science* from *revolutionary science*. Most scientific work, he argues, is normal science: practitioners working within a shared *paradigm* — a constellation of methods, exemplars, assumptions, and outstanding problems — and solving puzzles that the paradigm has set up as tractable. Newtonian mechanics in the eighteenth and nineteenth centuries is the model.

Paradigms accumulate *anomalies* — observations they cannot explain, problems they cannot solve. For long stretches, anomalies are absorbed or set aside. But under sufficient pressure, the field enters *crisis*, and during crisis, alternative paradigms can take hold. A *revolution* is the transition from one paradigm to another — Ptolemy to Copernicus, Newton to Einstein. The new paradigm is not simply a more accurate version of the old; it organizes the field, defines its problems, and even shapes what counts as data in a way that is *incommensurable* with the old.

The incommensurability thesis has been the most controversial element. Kuhn was widely read as a relativist (because there's no theory-neutral way to compare paradigms), which he denied. The mature position is more careful — incommensurability is partial, comparison is possible, but the kind of comparison that the classical "cumulative progress" picture assumed is not available.`,
    sources: [
      { title: "Thomas Kuhn (SEP)", cite: "Bird, A. SEP entry 'Thomas Kuhn'", url: "https://plato.stanford.edu/entries/thomas-kuhn/" },
    ],
  },
  {
    id: "freud",
    slug: "freud",
    name: "Sigmund Freud",
    birthYear: 1856,
    deathYear: 1939,
    region: "european",
    era: "modern",
    difficulty: "intermediate",
    readingTimeMinutes: 4,
    imageUrl: wikiImage("Sigmund_Freud,_by_Max_Halberstadt_(cropped).jpg"),
    themes: ["mind", "ethics"],
    shortSummary:
      "Freud is not, strictly, a philosopher. But the picture of the human mind he built — partly conscious, partly unconscious, with the unconscious driving things the conscious would prefer to disown — reshaped twentieth-century thought far past psychiatry. Most philosophy of mind after Freud is in dialogue with him.",
    fullBody: `Freud's clinical psychoanalysis as a treatment for mental illness has been on a steady decline for fifty years, replaced by other modalities with better evidentiary support. His broader picture of mental life has been harder to dislodge.

The core claims: the mind is not transparent to itself — there are dynamically unconscious processes (not just unattended-to ones, but actively maintained outside awareness) that shape thought, feeling, and behavior. The mechanisms by which they are kept out of awareness — *repression*, *displacement*, *projection*, *reaction formation*, *sublimation* — are what *The Interpretation of Dreams* (1900) and *The Psychopathology of Everyday Life* (1901) tried to map.

The drive theory (the *id-ego-superego* schema from *The Ego and the Id*, 1923) gave a structural account of how the mind is partly at war with itself: the *id* of unconscious drives, the *superego* of internalized social demands, the *ego* trying to negotiate between them and external reality.

The reception in philosophy has been split. The continental tradition has mostly absorbed Freud through Lacan and used him for various purposes; the analytic tradition has mostly been suspicious of the empirical claims and skeptical of the theoretical apparatus. The intermediate position — that Freud's specific theories are mostly wrong but that the broad picture of an unconscious dimension of mental life is broadly correct, and that contemporary work on implicit cognition, motivated reasoning, and self-deception vindicates much of the broader picture even where it rejects the details — is widely held.`,
    sources: [
      { title: "Sigmund Freud (SEP)", cite: "SEP entry on the unconscious and related topics", url: "https://plato.stanford.edu/entries/unconscious/" },
    ],
  },
];
