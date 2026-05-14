"use client";

import * as React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getThoughtExperiment } from "@/data/thoughtExperiments";
import { getPhilosopher } from "@/data/philosophers";
import { useStore } from "@/lib/store";

export default function ThoughtExperimentPage() {
  const params = useParams<{ slug: string }>();
  const te = getThoughtExperiment(params.slug);
  const unlockAchievement = useStore((s) => s.unlockAchievement);
  const awardXp = useStore((s) => s.awardXp);
  const [picked, setPicked] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (te?.slug === "platos-cave" && picked) {
      unlockAchievement("allegory-approved");
    }
    if (picked) awardXp(10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked]);

  if (!te) notFound();

  return (
    <article className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Thought experiment
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">{te.title}</h1>
      </header>

      <Card className="p-6">
        <p className="font-serif text-lg leading-relaxed">{te.setup}</p>
      </Card>

      <Card className="p-6">
        <p className="font-serif text-xl">{te.question}</p>
        <div className="mt-4 space-y-2">
          {te.options.map((o) => {
            const selected = picked === o.id;
            return (
              <button
                key={o.id}
                disabled={!!picked}
                onClick={() => setPicked(o.id)}
                className={
                  "block w-full rounded-md border px-4 py-3 text-left font-serif transition-colors " +
                  (selected
                    ? "border-accent bg-accent/10"
                    : "border-border bg-card hover:border-accent/50 disabled:opacity-60")
                }
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </Card>

      {picked && (
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-xl tracking-tight">How others have answered</h2>
          {te.reveal.map((r, i) => (
            <Card key={i} className="p-5">
              <p className="font-serif leading-relaxed">{r.position}</p>
            </Card>
          ))}

          {(te.relatedPhilosopherIds.length > 0 || te.relatedConceptIds.length > 0) && (
            <Card className="p-5">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Go deeper
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {te.relatedPhilosopherIds.map((id) => {
                  const p = getPhilosopher(id);
                  return p ? (
                    <Link key={id} href={`/classroom/philosophers/${p.slug}`}>
                      <Badge variant="outline" className="cursor-pointer">{p.name}</Badge>
                    </Link>
                  ) : null;
                })}
                {te.relatedConceptIds.map((id) => (
                  <Link key={id} href={`/classroom/concepts/${id}`}>
                    <Badge variant="accent" className="cursor-pointer capitalize">{id.replace(/-/g, " ")}</Badge>
                  </Link>
                ))}
              </div>
            </Card>
          )}

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setPicked(null)}>Reconsider</Button>
            <Link href="/thought-experiments"><Button variant="accent">Another</Button></Link>
          </div>
        </motion.section>
      )}
    </article>
  );
}
