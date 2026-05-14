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
];

export function getThoughtExperiment(slug: string): ThoughtExperiment | undefined {
  return THOUGHT_EXPERIMENTS.find((t) => t.slug === slug);
}
