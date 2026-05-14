import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Portrait } from "@/components/portrait";
import { THOUGHT_EXPERIMENTS } from "@/data/thoughtExperiments";

export default function ThoughtExperimentsIndex() {
  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Thought experiments
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">The experience of doing philosophy</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Each one is a short scripted interactive. Read the setup, answer, then see how different schools and philosophers would respond. Five to seven minutes each.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {THOUGHT_EXPERIMENTS.map((t) => (
          <li key={t.id}>
            <Link href={`/thought-experiments/${t.slug}`}>
              <Card className="qz-interactive h-full p-6">
                <div className="flex items-start gap-3">
                  <Portrait name={t.title} src={t.imageUrl ?? null} size="md" />
                  <h2 className="font-serif text-xl tracking-tight leading-tight">{t.title}</h2>
                </div>
                <p className="mt-3 line-clamp-3 text-sm text-foreground/80">{t.setup}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
