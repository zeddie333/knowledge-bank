import type { ThoughtExperiment } from "@/lib/types";
import { teImage } from "./imagery";

// Each thought experiment: setup → user picks → reveal of how different
// philosophers/schools have answered. Images are looked up by slug.

function te(args: Omit<ThoughtExperiment, "imageUrl">): ThoughtExperiment {
  return { ...args, imageUrl: teImage(args.slug) };
}

export const THOUGHT_EXPERIMENTS: ThoughtExperiment[] = [
  te({
    id: "trolley",
    slug: "the-trolley-problem",
    title: "The Trolley Problem",
    setup:
      "A runaway trolley is heading toward five people tied to the main track. You are standing at a switch. If you pull it, the trolley diverts to a side track where one person is tied down. They will die instead of the five. You did not put either group there.",
    question: "Do you pull the switch?",
    options: [
      { id: "pull", label: "Pull the switch. One death is better than five." },
      { id: "no-pull", label: "Don't pull. I am not the one killing anyone if I do nothing." },
      { id: "depends", label: "It depends on who they are." },
    ],
    reveal: [
      { position: "Classical utilitarianism — associated with Bentham and Mill — would pull the switch without hesitation. The math is cleaner than the intuitions." },
      { position: "Kantian deontology refuses to treat the one person on the side track as a means to saving the five. Pulling the switch instrumentalizes their life — uses their death as a tool." },
      { position: "Philippa Foot, who introduced the case in 1967, used it to distinguish doing harm from allowing harm. Many people accept pulling the switch but reject the 'fat man on the bridge' variant." },
      { position: "Bernard Williams' response: utilitarianism's confident verdict here misses that you would be a different person afterward. Moral integrity is part of what is at stake, not just outcomes." },
    ],
    relatedPhilosopherIds: ["foot", "williams", "singer"],
    relatedConceptIds: ["categorical-imperative"],
  }),
  te({
    id: "ship-of-theseus",
    slug: "ship-of-theseus",
    title: "The Ship of Theseus",
    setup:
      "Theseus' ship is preserved in the harbor at Athens. Over decades, every plank rots and is replaced with a new one. After a hundred years, no original wood remains. Meanwhile, a curator has been saving each rotten plank in a warehouse. She now assembles the originals into a second ship.",
    question: "Which ship is the Ship of Theseus?",
    options: [
      { id: "harbor", label: "The one in the harbor. Identity follows continuity, not material." },
      { id: "warehouse", label: "The one in the warehouse. Identity follows the original parts." },
      { id: "neither", label: "Neither. There is no fact of the matter." },
      { id: "both", label: "Both, in different senses." },
    ],
    reveal: [
      { position: "The puzzle is reported by Plutarch (Life of Theseus 23). Hobbes added the warehouse version in De Corpore to sharpen the contradiction." },
      { position: "Aristotelian readings distinguish form from matter. The form of the ship — its function, its arrangement — persists through material change; the matter does not." },
      { position: "Nāgārjuna would point at the disagreement itself. The puzzle assumes the ship has own-being; strip that assumption and the puzzle dissolves rather than resolves." },
      { position: "Derek Parfit's response: 'is it the same ship?' is the wrong question. The right one is what we care about — and the answer is rarely identity in the strict sense." },
    ],
    relatedPhilosopherIds: ["aristotle", "nagarjuna", "parfit"],
    relatedConceptIds: ["sunyata"],
  }),
  te({
    id: "marys-room",
    slug: "marys-room",
    title: "Mary's Room",
    setup:
      "Mary is a brilliant neuroscientist who has spent her entire life in a black-and-white room, learning everything physical there is to know about color vision — every wavelength, every neuron, every brain state. She has never actually seen red. One day, she is let out of the room and sees a tomato.",
    question: "Does Mary learn something new when she sees red for the first time?",
    options: [
      { id: "yes", label: "Yes — there is something it is like to see red that the physics didn't capture." },
      { id: "no", label: "No — she already knew everything; the experience is just the same knowledge instantiated." },
      { id: "kind-of", label: "She gains an ability, not a new fact." },
    ],
    reveal: [
      { position: "Frank Jackson introduced the case in 1982 as an argument against physicalism." },
      { position: "Daniel Dennett argues Mary learns nothing — we just have not properly imagined a being who really did know all the physical facts." },
      { position: "David Lewis and Laurence Nemirow offer the 'ability hypothesis': Mary gains a new ability but no new propositional knowledge." },
      { position: "Jackson himself later changed his mind and rejected the argument. The case is now better known than the conclusion he originally drew from it." },
    ],
    relatedPhilosopherIds: ["dennett"],
    relatedConceptIds: ["qualia", "mind-body"],
  }),
  te({
    id: "veil-of-ignorance",
    slug: "veil-of-ignorance",
    title: "The Veil of Ignorance",
    setup:
      "You and a few others are designing the basic structure of a society — its laws, its distribution of resources, its rights. But you do not know who you will be in that society. You don't know your race, class, gender, intelligence, or natural talents. You will only learn them after the rules are set.",
    question: "What principles do you choose?",
    options: [
      { id: "maximin", label: "Maximize the position of the worst-off person — if I might be them, I want them protected." },
      { id: "utilitarian", label: "Maximize average welfare — best expected outcome for whoever I turn out to be." },
      { id: "libertarian", label: "Strong individual rights, limited redistribution — fair process, whatever the outcome." },
    ],
    reveal: [
      { position: "John Rawls (A Theory of Justice, 1971) argues that rational people behind the veil would choose his two principles: equal basic liberties + the difference principle." },
      { position: "John Harsanyi got there first (1953) with a more utilitarian reading: behind a veil, you should maximize expected welfare." },
      { position: "Robert Nozick: the veil illegitimately ignores entitlement. A just distribution arises from just transactions, not from a design exercise." },
      { position: "Feminist critics (Susan Moller Okin) argued Rawls' veil failed to make the family visible — gender was the most obvious natural lottery and his original argument hardly touched it." },
    ],
    relatedPhilosopherIds: ["rawls", "nozick"],
    relatedConceptIds: ["veil-of-ignorance", "social-contract"],
  }),
  te({
    id: "platos-cave",
    slug: "platos-cave",
    title: "Plato's Cave",
    setup:
      "Prisoners have been chained in a cave since birth, facing a wall. Behind them, a fire casts shadows of objects onto the wall. They see only the shadows; they have never turned their heads. To them, the shadows are reality. One prisoner is freed and dragged up to the surface. After the painful adjustment, he sees the sun.",
    question: "What does he do?",
    options: [
      { id: "return", label: "Return to the cave to tell the others." },
      { id: "stay", label: "Stay above. The cave was a lie." },
      { id: "depends", label: "He may try to return — but they will not believe him." },
    ],
    reveal: [
      { position: "In Plato's account (Republic 514a–520a), the freed prisoner returns, and the others mock him and would kill him if they could." },
      { position: "The shadows are appearance; the objects casting them are mathematical truths; the sun is the Form of the Good. Education is the turning of the soul (Republic 518c) — not a transfer of information." },
      { position: "Plato uses the cave to argue that those who have done the climb should rule. Most readers find this conclusion harder to defend than the cave itself." },
    ],
    relatedPhilosopherIds: ["plato"],
    relatedConceptIds: ["theory-of-forms"],
  }),
  te({
    id: "chinese-room",
    slug: "chinese-room",
    title: "The Chinese Room",
    setup:
      "You are locked in a room with a rulebook for manipulating Chinese characters. Chinese speakers outside slip questions in Chinese under the door; following the rulebook mechanically, you slip back answers indistinguishable from those of a fluent speaker. You pass the Turing Test for Chinese. You understand no Chinese.",
    question: "Does the room, or anything in it, understand Chinese?",
    options: [
      { id: "no", label: "No. Syntactic manipulation is not understanding." },
      { id: "system", label: "Yes — the system as a whole understands, even if the person in it doesn't." },
      { id: "robot", label: "Only if the system is embodied and interacting with the world." },
    ],
    reveal: [
      { position: "John Searle (1980) introduced the case as an attack on 'strong AI' — the view that a suitably programmed computer would, in virtue of running the program, genuinely understand." },
      { position: "The 'systems reply' grants that the person in the room doesn't understand, but argues the whole system does. Searle's reply: imagine the person memorizes the rulebook and operates outdoors — still no understanding." },
      { position: "Functionalists like Dennett argue Searle's intuition is misled by our inability to imagine a system at the relevant scale. We're asked to introspect about a being our intuition cannot really model." },
    ],
    relatedPhilosopherIds: ["searle", "dennett"],
    relatedConceptIds: ["intentionality", "mind-body"],
  }),
  te({
    id: "experience-machine",
    slug: "experience-machine",
    title: "The Experience Machine",
    setup:
      "Neuroscientists have built a machine that will give you any experiences you want — indistinguishable from real ones. While you float in a tank, you'll think you're living a life full of meaning, accomplishment, and love. You can program it. After plugging in, you won't remember you chose this.",
    question: "Do you plug in for life?",
    options: [
      { id: "no", label: "No — I want my life to be actually mine." },
      { id: "yes", label: "Yes — the experience is what matters." },
      { id: "limited", label: "Plug in for a while, but not for life." },
    ],
    reveal: [
      { position: "Robert Nozick (Anarchy, State, and Utopia, ch. 3) introduced the case against hedonism. If pleasure were all that mattered, plugging in should be obvious." },
      { position: "Most people refuse — suggesting we value doing things and being a certain kind of person, not just having the corresponding experiences." },
      { position: "Modern defenders of hedonism argue the case smuggles in framing effects: 'fake' experiences feel diminished only because we know they're fake from outside." },
      { position: "Aristotle would say the case shows eudaimonia is an activity, not a feeling. The plugged-in life is not flourishing because nothing in it is genuinely being done." },
    ],
    relatedPhilosopherIds: ["nozick", "aristotle"],
    relatedConceptIds: ["eudaimonia"],
  }),
  te({
    id: "zhuangzi",
    slug: "zhuangzi-butterfly",
    title: "Zhuangzi's Butterfly",
    setup:
      "Zhuangzi dreamed he was a butterfly, fluttering happily, with no idea he was Zhuangzi. He woke up and was solidly Zhuangzi. But now he doesn't know whether he is Zhuangzi who dreamed he was a butterfly, or a butterfly now dreaming he is Zhuangzi.",
    question: "How do you know which side of the dream you're on?",
    options: [
      { id: "obvious", label: "The waking life feels more real — that settles it." },
      { id: "cant", label: "You can't, strictly — and the assumption that you need to is the mistake." },
      { id: "memory", label: "Continuity of memory marks the waking self." },
    ],
    reveal: [
      { position: "The point of the parable (Zhuangzi, ch. 2) is not skepticism for its own sake but to loosen the certainty with which we treat 'self / other' and 'waking / sleeping' as fixed categories." },
      { position: "Descartes asks a structurally similar question in Meditation I and uses it to motivate the cogito. The Daoist response is closer to dissolving the question than to grounding the doubt." },
      { position: "Buddhist no-self traditions (Vasubandhu, Nāgārjuna) read the same kind of vertigo as instructive: the self that wonders whether it is a butterfly was always less solid than it assumed." },
    ],
    relatedPhilosopherIds: ["zhuangzi", "descartes", "nagarjuna"],
    relatedConceptIds: ["tao", "sunyata"],
  }),
  te({
    id: "twin-earth",
    slug: "twin-earth",
    title: "Twin Earth",
    setup:
      "Imagine a planet just like Earth in every respect except one: the substance that looks, tastes, and behaves exactly like water there has a different chemical structure — XYZ rather than H₂O. Speakers on each planet use the word 'water' in the same way. They have no idea their planets differ.",
    question: "Do speakers on Earth and Twin Earth mean the same thing by 'water'?",
    options: [
      { id: "same", label: "Yes — the inside of their heads is identical." },
      { id: "different", label: "No — meaning depends on what's actually in the world." },
    ],
    reveal: [
      { position: "Hilary Putnam (1975) used this case to argue 'meanings ain't in the head' — semantic externalism. What 'water' refers to on each planet differs because the substances differ." },
      { position: "The case is one of the founding moments of analytic philosophy of language. It shapes everything from natural-kind terms to debates about narrow vs. broad content in philosophy of mind." },
    ],
    relatedPhilosopherIds: ["putnam"],
    relatedConceptIds: ["intentionality"],
  }),
  te({
    id: "the-violinist",
    slug: "the-violinist",
    title: "The Famous Violinist",
    setup:
      "You wake up in a hospital bed connected by tubes to a famous unconscious violinist. The Society of Music Lovers has hooked you up to use your kidneys as a filter — without you, he will die. He has a right to life. The doctors say you must remain connected for nine months.",
    question: "Are you morally required to stay?",
    options: [
      { id: "yes", label: "Yes. He has a right to life that outweighs my inconvenience." },
      { id: "no", label: "No. A right to life is not a right to use someone else's body." },
      { id: "depends", label: "It depends on cost and circumstance." },
    ],
    reveal: [
      { position: "Judith Jarvis Thomson introduced the case in 'A Defense of Abortion' (1971) to disentangle two claims usually fused: that a fetus has a right to life and that this right requires the mother's body to sustain it." },
      { position: "The case has been hugely influential on abortion debates and on the more general question of what rights to life *entitle* one to demand from others." },
    ],
    relatedPhilosopherIds: [],
    relatedConceptIds: ["natural-law"],
  }),
  te({
    id: "lottery",
    slug: "the-lottery",
    title: "The Lottery of Birth",
    setup:
      "You learn that almost everything materially significant about your life — where you were born, your native language, your access to medical care, your education, your safety — was decided before you could possibly have done anything to deserve it. You did not earn any of it.",
    question: "Does this generate any obligations toward those who lost the same lottery?",
    options: [
      { id: "strong", label: "Yes — strong redistributive obligations toward the unlucky." },
      { id: "weak", label: "Some — but limited by what we can practically achieve." },
      { id: "none", label: "Nothing follows from the bare fact of moral luck." },
    ],
    reveal: [
      { position: "Rawls' veil of ignorance formalizes this intuition: principles of justice should not depend on facts about ourselves that are morally arbitrary." },
      { position: "Nozick replies that just transactions can produce just outcomes regardless of starting points — but the assumption that the starting points were just is doing the work, and rarely defended." },
      { position: "Bernard Williams' work on moral luck argues that some luck reaches all the way into our agency — even the virtues we develop depend partly on circumstances we did not choose." },
      { position: "Peter Singer takes the case in the most demanding direction: if the unequal global lottery is morally arbitrary, the affluent owe substantial transfers to the global poor." },
    ],
    relatedPhilosopherIds: ["rawls", "nozick", "williams", "singer"],
    relatedConceptIds: ["veil-of-ignorance"],
  }),
  te({
    id: "the-runaway-tram",
    slug: "the-runaway-tram",
    title: "The Fat Man on the Bridge",
    setup:
      "Same trolley, five workers about to die. This time there's no switch. You're standing on a bridge over the tracks next to a large stranger. If you push him off the bridge, his body will stop the trolley. Five lives saved, one lost. You did not put any of them there.",
    question: "Do you push?",
    options: [
      { id: "push", label: "Push. The math is the same as the original trolley case." },
      { id: "no-push", label: "Don't push. Using him as a tool is morally different." },
      { id: "depends", label: "Depends on details I'd need to know." },
    ],
    reveal: [
      { position: "Most people will pull the switch in the original trolley case but not push the fat man. Foot, Thomson, and the trolleyology industry have spent decades trying to articulate why." },
      { position: "The most-defended distinction: in the original case, the side track death is a foreseen side effect of saving the five. In the bridge case, the man's death is the *means* to saving the five. The Doctrine of Double Effect makes this morally relevant." },
      { position: "Utilitarians push back: if outcomes are the same, the distinction is artifice. The intuitive asymmetry, they argue, is a psychological fact about us, not a moral fact about the world." },
    ],
    relatedPhilosopherIds: ["foot", "singer"],
    relatedConceptIds: ["categorical-imperative", "natural-law"],
  }),

  te({
    id: "brain-in-vat",
    slug: "brain-in-a-vat",
    title: "Brain in a Vat",
    setup:
      "Imagine a mad scientist has removed your brain and is keeping it alive in a vat of nutrients, feeding it electrical impulses that simulate a perfectly normal life. From the inside, the experience is indistinguishable from the real thing. There is no test you could conduct to tell.",
    question: "Could you know that you're not a brain in a vat right now?",
    options: [
      { id: "no", label: "No — by hypothesis, nothing in experience would distinguish the two." },
      { id: "yes", label: "Yes — there are arguments (semantic externalism, transcendental conditions) that rule it out." },
      { id: "wrong-q", label: "The question itself is malformed." },
    ],
    reveal: [
      { position: "The case is the modern descendant of Descartes' evil-demon hypothesis in Meditation I. It motivates Cartesian-style skepticism without requiring any theological apparatus." },
      { position: "Hilary Putnam (Reason, Truth, and History, 1981) gave the most discussed reply: if you were a brain in a vat, the term 'brain in a vat' as you used it would refer to features of your simulated world, not to actual brains in actual vats. So the sentence 'I am a brain in a vat' would, on this analysis, be self-defeating — semantically incapable of expressing the truth it would have to express. The reply is itself contested." },
      { position: "Contemporary epistemology has largely abandoned the project of refuting the scenario in favor of asking what it shows about the structure of knowledge claims — particularly whether knowledge is closed under entailment, and what role context plays in determining what counts as knowing." },
    ],
    relatedPhilosopherIds: ["descartes", "putnam"],
    relatedConceptIds: ["cogito", "mind-body"],
  }),
  te({
    id: "ring-of-gyges",
    slug: "ring-of-gyges",
    title: "The Ring of Gyges",
    setup:
      "Glaucon's challenge to Socrates in Republic II. A shepherd named Gyges finds a ring that makes the wearer invisible. He uses it to seduce the queen, kill the king, and take the throne. Glaucon asks: would any of us — given the ring — behave differently? Or is what we call 'just' behavior really just the behavior we adopt because we lack the power to act otherwise without consequence?",
    question: "Would the just person behave differently if they could become invisible?",
    options: [
      { id: "yes", label: "Yes — the just person values justice for its own sake, not for the consequences." },
      { id: "no", label: "No — what we call 'justice' is just the prudent management of social consequences." },
      { id: "complicated", label: "Most of us would behave worse than we admit — but that doesn't make justice mere appearance." },
    ],
    reveal: [
      { position: "Plato spends the rest of the Republic answering: the truly just person, whose soul is in proper order, would not use the ring badly, because the disordered soul produced by tyranny is itself the worst harm. Acting unjustly damages the agent more than any external consequence." },
      { position: "Glaucon's challenge survives Plato's answer because it points at something real: most ordinary 'morality' may be conditioned by social mechanisms of accountability that the ring removes. Hobbes treats this as a feature of his political theory; the Stoics dispute it; the Christian tradition reframes it as the question of why one would be moral if God did not see." },
      { position: "Contemporary moral psychology has empirical analogs — anonymity effects in cheating studies, online disinhibition. The Gyges challenge is still being argued with." },
    ],
    relatedPhilosopherIds: ["plato"],
    relatedConceptIds: ["eudaimonia"],
  }),
  te({
    id: "heinz-dilemma",
    slug: "heinz-dilemma",
    title: "The Heinz Dilemma",
    setup:
      "Heinz's wife is dying of a rare cancer. There is one drug that can save her, but the pharmacist who developed it charges ten times what it cost to make. Heinz can only raise half the money; the pharmacist refuses to lower the price or let Heinz pay over time. That night, Heinz breaks into the pharmacy and steals the drug.",
    question: "Was Heinz right to steal the drug?",
    options: [
      { id: "yes", label: "Yes — a human life outweighs property." },
      { id: "no", label: "No — stealing is wrong regardless of the cause." },
      { id: "complicated", label: "The case shows the limits of any rule-based answer." },
    ],
    reveal: [
      { position: "The case is from Lawrence Kohlberg's research on moral development. Kohlberg argued that responses fall into six stages of moral reasoning, from purely consequentialist self-interest at the bottom to principled justice at the top." },
      { position: "Carol Gilligan's critique (In a Different Voice, 1982) argued that Kohlberg's framework systematically devalued an alternative pattern of moral reasoning — an 'ethics of care' that focuses on relationships and responsibilities rather than abstract principles. Gilligan's data: women interviewees were more likely to ask about Heinz's wife as a particular person, the pharmacist's situation, what could be negotiated. Kohlberg coded these answers as lower-stage reasoning. Gilligan argued they expressed a different but equally sophisticated moral orientation." },
      { position: "The case is now a fixture of moral psychology and care-ethics literature, and a useful illustration of how the framing of a moral dilemma encodes assumptions about what counts as moral reasoning." },
    ],
    relatedPhilosopherIds: [],
    relatedConceptIds: ["categorical-imperative", "natural-law"],
  }),
  te({
    id: "experience-of-color",
    slug: "experience-of-color",
    title: "Inverted Spectrum",
    setup:
      "Imagine someone whose color experiences are systematically inverted relative to yours — when they look at what you call red, they have the experience you would call seeing green, and vice versa. From birth they have learned to call the inverted-red color 'red' and so on. Their behavior is identical to yours; their reports are identical. They drive on the same red light.",
    question: "Could there be such a person, undetectable from outside?",
    options: [
      { id: "yes", label: "Yes — qualia are intrinsic features of experience that can vary independently of function." },
      { id: "no", label: "No — if everything functional is identical, the experience is identical." },
      { id: "depends", label: "Depends on whether color experiences are exhaustively functional." },
    ],
    reveal: [
      { position: "The case goes back to Locke's Essay (II.32). Its philosophical importance was revived in the contemporary qualia debates. If inverted spectra are possible while functional behavior is identical, then functionalism is incomplete — there is something about experience that the functional description leaves out." },
      { position: "Functionalists deny the possibility. The argument: what makes a color experience the kind it is, is its functional role in cognition and behavior. If two systems are functionally identical, their color experiences are identical." },
      { position: "Contemporary defenders of qualia (Chalmers, Block) treat the inverted spectrum as a serious live possibility. The empirical question whether there are actual humans whose color experiences differ in this kind of way — across the cone-cell variation, color-blindness types, etc. — connects philosophy of mind to perception science." },
    ],
    relatedPhilosopherIds: ["dennett"],
    relatedConceptIds: ["qualia", "consciousness", "mind-body"],
  }),
  te({
    id: "teletransporter",
    slug: "teletransporter",
    title: "Parfit's Teletransporter",
    setup:
      "A teletransporter scans your body atom by atom, transmits the information to a receiver on another planet, and reconstructs you there from local matter. The original you is destroyed in the scanning. The reconstructed you wakes up on the other planet with all your memories, personality, plans, and projects intact. You step into the scanner.",
    question: "Does the same person walk out?",
    options: [
      { id: "yes", label: "Yes — the reconstruction is functionally identical." },
      { id: "no", label: "No — the original is dead. Something else is on the other planet with my memories." },
      { id: "doesnt-matter", label: "It doesn't matter — identity isn't what matters." },
    ],
    reveal: [
      { position: "Derek Parfit (Reasons and Persons, 1984) used the case to argue that personal identity is not what we ordinarily think. What matters in survival is psychological continuity and connectedness, not strict identity. The reconstructed person is connected to you in all the ways that matter; whether they are 'identical' to you is a separate, and probably less important, question." },
      { position: "Branch-line cases push the intuition harder. Imagine the scanner malfunctions: the original is not destroyed, and the copy is created. Now there are two of you. Which one is the 'real' you? Parfit's answer: the question has no fact-of-the-matter answer; what matters is that both are continuous with the pre-scan person." },
      { position: "Animalist theories of personal identity (Eric Olson) reject Parfit's framework: you are an animal, the animal is in the scanner, the animal is destroyed, and what comes out the other end is a different animal with someone else's memories." },
    ],
    relatedPhilosopherIds: ["parfit"],
    relatedConceptIds: ["sunyata"],
  }),
  te({
    id: "molyneux",
    slug: "molyneuxs-question",
    title: "Molyneux's Question",
    setup:
      "A man born blind has learned to distinguish a cube from a sphere by touch. One day, his vision is restored. Looking at a cube and a sphere on a table in front of him, without touching them, can he tell which is which?",
    question: "Could the newly-sighted man identify the shapes by sight alone?",
    options: [
      { id: "yes", label: "Yes — geometric properties are shared across senses." },
      { id: "no", label: "No — the senses are originally distinct; integration is learned." },
      { id: "empirical", label: "It's an empirical question, not one to settle from the armchair." },
    ],
    reveal: [
      { position: "William Molyneux asked Locke this question in 1688. Locke (Essay II.9), Berkeley (New Theory of Vision), and Leibniz disagreed about the answer. Locke and Berkeley said no — vision and touch produce distinct ideas that must be learned to correlate. Leibniz said yes — geometric facts are accessible to reason regardless of how the senses present them." },
      { position: "The case became important in the empiricist/rationalist debate. If sensory ideas come from experience alone (the empiricist position), the newly-sighted person has no basis for identification. If geometric concepts are accessible to reason itself (the rationalist position), they should be." },
      { position: "Modern surgical restoration of sight has now allowed empirical testing of the question. The results — initially confused identification followed by rapid learning — are not what either Locke or Leibniz exactly predicted. The case is one of the rare philosophical thought experiments that turned out to admit of empirical resolution." },
    ],
    relatedPhilosopherIds: ["locke", "berkeley", "leibniz"],
    relatedConceptIds: ["cogito"],
  }),
  te({
    id: "demon-of-eternal-recurrence",
    slug: "demon-of-eternal-recurrence",
    title: "The Demon of Eternal Recurrence",
    setup:
      "A demon comes to you in your loneliest hour and tells you: this life as you live it now and have lived it, you will have to live once more and innumerable times more; and there will be nothing new in it, but every pain and every joy and every thought and sigh and everything unspeakably small or great in your life will return to you, all in the same succession and sequence.",
    question: "How would you respond to the demon?",
    options: [
      { id: "gnash", label: "Curse the demon. The thought of this is intolerable." },
      { id: "affirm", label: "Praise the demon. There is nothing I would change." },
      { id: "neither", label: "Some mix — I would gnash, then perhaps come to affirm." },
    ],
    reveal: [
      { position: "Nietzsche puts this in the mouth of a demon at Gay Science §341. The thought experiment is not a metaphysical claim about the universe. It is a test of your relation to your own life." },
      { position: "Most of us, Nietzsche thinks, could not affirm the recurrence. We hold parts of our lives at arm's length — humiliations, decisions, betrayals — and the inability to integrate them is what resentment, weakness, and bad faith feed on." },
      { position: "The capacity to affirm the recurrence — to will it — is what Nietzsche calls saying yes to existence, and what he names amor fati. It is presented as an aspiration, not an easy result." },
      { position: "The thought experiment was important enough to Nietzsche that he treated it, in some of his unpublished notes, as the central thought of his philosophy." },
    ],
    relatedPhilosopherIds: ["nietzsche"],
    relatedConceptIds: ["eternal-recurrence", "amor-fati"],
  }),

  te({
    id: "sorites",
    slug: "sorites-paradox",
    title: "The Sorites Paradox",
    setup:
      "A heap of sand on the ground. Remove one grain — still a heap. Remove another — still a heap. Continue grain by grain. At some point, by hypothesis, you have one grain left, which is not a heap. Where did the heap stop being a heap?",
    question: "What's the right response to the apparent contradiction?",
    options: [
      { id: "epistemic", label: "There's a sharp cutoff; we just don't know where." },
      { id: "vagueness", label: "Heap-ness is genuinely vague; the question of the exact cutoff is malformed." },
      { id: "context", label: "What counts as a heap depends on context; no single line exists." },
    ],
    reveal: [
      { position: "The paradox is from Eubulides (4th c. BCE), a member of the Megarian school and a contemporary critic of Aristotle. Versions of it have been around as long as Western philosophy." },
      { position: "Epistemicism (Williamson) holds there is a sharp cutoff — at, say, exactly N grains the heap becomes a non-heap — but we cannot know where it is. This preserves classical logic at the cost of an apparently unknowable fact." },
      { position: "Many-valued and fuzzy logics treat vague predicates as having truth values between 0 and 1; '5 grains is a heap' might have truth value 0.04. Critics argue this just relocates the sharp cutoff." },
      { position: "Supervaluationism: 'this is a heap' is super-true if it's true on every legitimate way of making the predicate precise, super-false if it's false on every such way, and indeterminate in the borderline range. The logic stays classical at the cost of a new metavalue." },
      { position: "The paradox matters far beyond word games. Philosophical anthropology (when does a fetus become a person?), criminal law (when is someone drunk enough to be impaired?), and contemporary debates about diagnostic categories all hit Sorites-shaped problems." },
    ],
    relatedPhilosopherIds: [],
    relatedConceptIds: [],
  }),
  te({
    id: "newcomb",
    slug: "newcombs-problem",
    title: "Newcomb's Problem",
    setup:
      "A reliable predictor (perhaps a superintelligent AI) has placed two boxes in front of you. Box A is transparent and contains $1,000. Box B is opaque. The predictor has already predicted your choice. If they predicted you would take only Box B, they put $1,000,000 in it. If they predicted you would take both boxes, they put nothing in B. You know all this. The boxes are sealed. You choose now: take only Box B, or take both?",
    question: "What do you do?",
    options: [
      { id: "one-box", label: "Take only Box B. The predictor's track record is what matters." },
      { id: "two-box", label: "Take both. Whatever's in B is already there; the extra $1,000 is free." },
      { id: "depends", label: "It depends on how accurate the predictor really is, and on what 'accurate' means." },
    ],
    reveal: [
      { position: "The case was introduced by William Newcomb and popularized by Robert Nozick in 1969. It pits two principles of rational decision-making against each other." },
      { position: "Evidential decision theory: the expected utility of an act is calculated using the conditional probability of outcomes given the act. Taking only Box B has very high expected utility because the act is strong evidence that the predictor predicted you'd one-box, meaning Box B has the million." },
      { position: "Causal decision theory: the expected utility of an act is calculated using the causal effects of the act. Your choice now cannot causally affect what's already in Box B. Two-boxing causally dominates: whatever's in B, you get $1,000 more by taking both." },
      { position: "The disagreement between these two frameworks — both serious candidates for what 'rational' decision-making is — has produced an enormous literature. Newcomb's problem is the test case." },
      { position: "More recent variants (Parfit's hitchhiker, the Smoking Lesion problem, transparent Newcomb cases) and the development of functional/timeless decision theories have refined the positions further. The problem has practical relevance for the design of artificial agents whose decisions might be predicted by other agents." },
    ],
    relatedPhilosopherIds: ["nozick"],
    relatedConceptIds: ["free-will-determinism"],
  }),
  te({
    id: "drowning-child",
    slug: "the-drowning-child",
    title: "The Drowning Child",
    setup:
      "You are walking past a shallow pond on your way to work. You notice a small child face-down in the pond, drowning. You can easily wade in and pull her out; the only cost would be that your shoes will be ruined and your suit will be muddy, and you will be late for an unimportant meeting. There is no one else around.",
    question: "Are you morally required to save the child?",
    options: [
      { id: "obviously", label: "Obviously. The cost is trivial, the benefit enormous." },
      { id: "no", label: "Not in the strict sense. It would be admirable to save her, but not required." },
      { id: "complicated", label: "Yes — and the implications of why are uncomfortable." },
    ],
    reveal: [
      { position: "Peter Singer introduced this case in 'Famine, Affluence, and Morality' (1972). The intuition almost everyone shares: of course you have to wade in. The cost is trivial; the benefit is a child's life." },
      { position: "Singer's argument: there is no morally relevant difference between this case and our actual relation to children dying of preventable causes far away. The cost of a donation that would save a distant child's life is comparable to the cost of muddy shoes. If the pond case obligates you, the distance case does too." },
      { position: "The argument has resisted decades of attempted refutation. The standard moves — distance dilutes obligation, individual donations don't reliably reach the intended beneficiaries, you can't be obligated to give endlessly — turn out to be harder to defend than they look once you start examining them." },
      { position: "Singer's conclusion: the affluent are morally required to give substantially more to effective global poverty reduction than we currently do, and 'charity' as a category that floats above strict obligation is mostly a self-serving fiction. The effective altruism movement is downstream of this argument." },
      { position: "Critics (Bernard Williams, Susan Wolf) argue that the argument's demandingness is itself evidence it has gone wrong — a moral theory that requires constant self-sacrifice misses what makes individual lives worth living. The dispute is real and unresolved." },
    ],
    relatedPhilosopherIds: ["singer", "williams"],
    relatedConceptIds: ["natural-law"],
  }),
  te({
    id: "lottery-paradox",
    slug: "the-lottery-paradox",
    title: "The Lottery Paradox",
    setup:
      "A fair lottery has been held with one million tickets. Exactly one will be drawn as the winner. You hold no tickets. For each ticket separately, you are clearly justified in believing it will lose — the odds of any specific ticket winning are 1 in 1,000,000.",
    question: "Are you justified in believing 'no ticket will win'?",
    options: [
      { id: "yes", label: "Yes — I have strong evidence against each individual ticket." },
      { id: "no", label: "No — I know with certainty that some ticket will win." },
      { id: "knowledge-fails", label: "The case shows that we should distinguish justified belief from knowledge." },
    ],
    reveal: [
      { position: "Henry Kyburg introduced the paradox in 1961. The structure: I have very high-probability evidence for each separate claim ('ticket #1 will lose,' 'ticket #2 will lose,' etc.), and I know they cannot all be true together." },
      { position: "If justification is closed under conjunction — if I am justified in believing P and justified in believing Q, then I am justified in believing P-and-Q — the paradox produces a contradiction: I am justified in believing that no ticket wins, but I know one does." },
      { position: "Several major responses. *Reject closure*: justification doesn't transmit across conjunction in the way the principle assumes. *Threshold accounts*: there is some probability threshold below which I should not believe a proposition, and individual lottery propositions fall below that threshold even though their evidence is high. *Knowledge accounts*: even if I have justified belief about each ticket, I do not have *knowledge* of any of them, and the principles that fail for justified belief still hold for knowledge." },
      { position: "The paradox has been one of the engines of contemporary epistemology, particularly in the development of safety-based and sensitivity-based theories of knowledge, contextualist accounts of knowledge claims, and recent work on the relation between probability and rational belief." },
    ],
    relatedPhilosopherIds: [],
    relatedConceptIds: [],
  }),
  te({
    id: "sleeping-beauty",
    slug: "sleeping-beauty-problem",
    title: "The Sleeping Beauty Problem",
    setup:
      "Sleeping Beauty volunteers for an experiment. On Sunday evening she goes to sleep. A fair coin will be flipped. If heads, she is awakened once (on Monday) and the experiment ends. If tails, she is awakened twice (Monday and Tuesday) — and after the Monday awakening her memory is wiped so that on Tuesday she has no memory of having been woken. When she wakes up, she is asked: 'What credence do you assign to the coin having landed heads?'",
    question: "What's the right answer?",
    options: [
      { id: "half", label: "1/2 — the coin was fair, and waking up gives no new information about it." },
      { id: "third", label: "1/3 — among the possible awakenings, one out of three is the heads-Monday awakening." },
      { id: "neither", label: "Neither — the question is malformed; credence about temporal location can't be calculated this way." },
    ],
    reveal: [
      { position: "The problem was introduced by Adam Elga in 2000 and has been intensely debated since. The two main positions — 'halfers' and 'thirders' — both have prominent defenders." },
      { position: "Halfers reason: Beauty knew the coin's probability was 1/2 before the experiment. Waking up tells her nothing she didn't already know (she knew she'd be awakened in any case). So her credence should stay at 1/2." },
      { position: "Thirders reason: if the experiment were repeated many times, two-thirds of Beauty's awakenings would be tails-awakenings. Self-locating credence — credence about which of several possible awakenings she's currently in — should track that ratio. 1/3." },
      { position: "The disagreement bears on contemporary debates about anthropic reasoning (the Doomsday argument, the Simulation argument), self-locating belief in general (including in the philosophy of physics and cosmology), and the structure of conditional probability across temporal stages of an agent." },
    ],
    relatedPhilosopherIds: [],
    relatedConceptIds: [],
  }),
  te({
    id: "last-man",
    slug: "the-last-man",
    title: "The Last Man on Earth",
    setup:
      "Suppose, by some catastrophe, you are the last conscious being on Earth — the last human, the last animal capable of experiencing anything. There are no more sentient beings; there will not be any again. Before you fall asleep for the last time, you walk over to a beautiful, ancient tree and, without good reason, set fire to it.",
    question: "Have you done something wrong?",
    options: [
      { id: "yes", label: "Yes — the tree had value independent of any conscious experience of it." },
      { id: "no", label: "No — without any sentient being to be harmed or to value the tree, no moral wrong occurs." },
      { id: "complicated", label: "Something has been lost, but I'm not sure 'wrong' is the right word." },
    ],
    reveal: [
      { position: "Richard Sylvan (then Richard Routley) introduced this case in 'Is There a Need for a New, an Environmental Ethic?' (1973). It was meant to test whether our actual moral intuitions extend to attribute value to the natural world independent of human or sentient interests." },
      { position: "Many readers find the burning wrong even by stipulation. Standard anthropocentric ethics — utilitarianism, Kantianism, even most virtue ethics — has trouble accounting for the intuition. There is no one to be harmed; the agent's character matters little if no one is left to be affected by it; the universalizability test doesn't bite in a depopulated world." },
      { position: "The argument is one of the founding moves of environmental ethics as a field. Holmes Rolston III, Arne Naess, and others have developed positions on which the natural world has *intrinsic value* — value not reducible to its instrumental relation to sentient beings — and this case is a touchstone." },
      { position: "Critics argue the intuition is a residue of anthropocentric thinking projected onto a depopulated world; properly extinguish the anthropocentric residue and the intuition goes with it. The disagreement has substantive ethical and policy stakes." },
    ],
    relatedPhilosopherIds: [],
    relatedConceptIds: [],
  }),
];

export function getThoughtExperiment(slug: string): ThoughtExperiment | undefined {
  return THOUGHT_EXPERIMENTS.find((t) => t.slug === slug);
}
