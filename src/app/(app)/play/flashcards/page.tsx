"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;
const LENGTHS = [10, 25, 50] as const;

export default function FlashcardsSetup() {
  const [difficulty, setDifficulty] = React.useState<(typeof DIFFICULTIES)[number]>("beginner");
  const [length, setLength] = React.useState<(typeof LENGTHS)[number]>(10);
  const href = `/play/flashcards/play?d=${difficulty}&l=${length}`;

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Let's Play · Flashcards</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Multiple choice</h1>
        <p className="mt-2 max-w-2xl text-foreground/80">
          Questions pulled from content you've touched, with about one in five from somewhere new. End screen shows what you missed.
        </p>
      </header>

      <Card className="p-6">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Difficulty</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => (
            <button key={d} type="button" onClick={() => setDifficulty(d)}>
              <Badge variant={difficulty === d ? "accent" : "outline"} className="qz-chip cursor-pointer capitalize">{d}</Badge>
            </button>
          ))}
        </div>

        <p className="mt-6 font-sans text-xs uppercase tracking-widest text-muted-foreground">Length</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {LENGTHS.map((l) => (
            <button key={l} type="button" onClick={() => setLength(l)}>
              <Badge variant={length === l ? "accent" : "outline"} className="qz-chip cursor-pointer">{l} questions</Badge>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Link href={href}>
            <Button variant="accent">Begin</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
