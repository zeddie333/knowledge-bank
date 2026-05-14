import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Layers, BookOpen, Workflow } from "lucide-react";

const GAMES = [
  {
    href: "/play/flashcards",
    title: "Flashcards",
    description: "Multiple-choice quiz drawing on quotes, philosopher → idea, and concept → philosopher. Difficulty and length up to you.",
    icon: Layers,
  },
  {
    href: "/play/identification",
    title: "Philosopher Identification",
    description: "Read a passage; name the philosopher. Four choices per round. Tests recognition of voice and content.",
    icon: BookOpen,
  },
  {
    href: "/play/matching",
    title: "Matching",
    description: "Drag philosophers to their core concepts under a timer. Click to pair on mobile.",
    icon: Workflow,
  },
];

export default function PlayHome() {
  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Let's Play</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Pick a game</h1>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Three formats. Pick whichever matches your mood — careful recognition, fast pairing, or open-ended multiple choice.
        </p>
      </header>

      <ul className="grid gap-4 md:grid-cols-3">
        {GAMES.map((g) => {
          const Icon = g.icon;
          return (
            <li key={g.href}>
              <Link href={g.href}>
                <Card className="qz-interactive h-full p-6">
                  <Icon className="h-6 w-6" />
                  <p className="mt-3 font-serif text-xl tracking-tight">{g.title}</p>
                  <p className="mt-2 text-sm text-foreground/80">{g.description}</p>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
