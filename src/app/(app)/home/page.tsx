"use client";

import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Shuffle, Search, Flame, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { XpBar } from "@/components/xp-bar";
import { PhilosopherCard } from "@/components/philosopher-card";
import { useStore, useHydrated } from "@/lib/store";
import { dueCount } from "@/lib/fsrs";
import { PHILOSOPHERS } from "@/data/philosophers";
import { QUOTES } from "@/data/quotes";
import { getPhilosopher } from "@/data/philosophers";
import { promptForDate } from "@/data/journalPrompts";

function pickRecommendations(known: string[], themes: string[]) {
  const unknown = PHILOSOPHERS.filter((p) => !known.includes(p.id));
  const byTheme = unknown.filter((p) => p.themes.some((t) => themes.includes(t)));
  const seed = byTheme.length >= 3 ? byTheme : unknown;
  return seed.slice(0, 3);
}

export default function HomePage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const username = useStore((s) => s.username);
  const xp = useStore((s) => s.xp);
  const streakDays = useStore((s) => s.streakDays);
  const themesOfInterest = useStore((s) => s.themesOfInterest);
  const reviews = useStore((s) => s.reviews);
  const progress = useStore((s) => s.progress);
  const [query, setQuery] = React.useState("");

  const due = React.useMemo(() => dueCount(Object.values(reviews)), [reviews]);

  const continueEntry = React.useMemo(() => {
    const entries = Object.values(progress)
      .filter((p) => p.status === "reading")
      .sort((a, b) => b.lastReadAt.localeCompare(a.lastReadAt));
    return entries[0];
  }, [progress]);
  const continuePhilosopher =
    continueEntry?.contentType === "philosopher"
      ? getPhilosopher(continueEntry.contentId)
      : undefined;

  const todayPrompt = React.useMemo(() => promptForDate(new Date()), []);
  const todayQuote = React.useMemo(() => {
    const day = Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24));
    return QUOTES[day % QUOTES.length];
  }, []);
  const todayQuoteAuthor = getPhilosopher(todayQuote.philosopherId);

  const knownIds = React.useMemo(
    () => Object.values(progress).map((p) => p.contentId),
    [progress],
  );
  const recommendations = pickRecommendations(knownIds, themesOfInterest as string[]);

  const surpriseMe = () => {
    const p = PHILOSOPHERS[Math.floor(Math.random() * PHILOSOPHERS.length)];
    router.push(`/classroom/philosophers/${p.slug}`);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    else router.push("/search");
  };

  return (
    <div className="space-y-8">
      {/* Search bar — first thing on the page now, sticky on scroll. */}
      <form
        onSubmit={submitSearch}
        className="sticky top-0 z-10 -mx-5 -mt-6 bg-background/95 backdrop-blur px-5 py-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search philosophers, concepts, schools, quotes…"
            className="h-11 pl-10"
          />
        </div>
      </form>

      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Today</p>
          <h1 className="mt-1 font-serif text-3xl tracking-tight">
            {hydrated && username ? `Welcome back, ${username}.` : "Welcome back."}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant={streakDays > 0 ? "accent" : "outline"} className="font-sans">
            <Flame className="mr-1 h-3 w-3" />
            {streakDays} day streak
          </Badge>
        </div>
      </header>

      <Card className="p-5">
        <XpBar xp={xp} />
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href={
            continuePhilosopher
              ? `/classroom/philosophers/${continuePhilosopher.slug}`
              : "/classroom"
          }
          className="md:col-span-2"
        >
          <Card className="qz-interactive h-full p-6">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Continue reading
            </p>
            {continuePhilosopher ? (
              <>
                <h2 className="mt-2 font-serif text-2xl tracking-tight">{continuePhilosopher.name}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/80">{continuePhilosopher.shortSummary}</p>
              </>
            ) : (
              <>
                <h2 className="mt-2 font-serif text-2xl tracking-tight">Start with the Classroom</h2>
                <p className="mt-2 text-sm text-foreground/80">
                  Pick a philosopher whose name you've seen but never sat with. Read for ten minutes. Come back tomorrow.
                </p>
              </>
            )}
          </Card>
        </Link>

        <Link href="/study/review">
          <Card className="qz-interactive h-full p-6">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Due for review</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-serif text-4xl tracking-tight">{hydrated ? due : "—"}</span>
              <span className="font-sans text-sm text-muted-foreground">cards</span>
            </div>
            <p className="mt-2 text-sm text-foreground/75">
              {due === 0
                ? "Nothing due. Make some flashcards from a page you've read."
                : "Run through them — four minutes well spent."}
            </p>
          </Card>
        </Link>
      </div>

      <Link href="/knowledge-bank">
        <Card className="qz-interactive p-6">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Today's reflection</p>
          <p className="mt-2 font-serif text-lg leading-relaxed">{todayPrompt.prompt}</p>
          <p className="mt-2 font-sans text-xs text-muted-foreground">{todayPrompt.attribution}</p>
        </Card>
      </Link>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-xl tracking-tight">Where to go next</h2>
          <Button variant="ghost" size="sm" onClick={surpriseMe}>
            <Shuffle className="h-4 w-4" /> Surprise me
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {recommendations.map((p) => (
            <PhilosopherCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/profile/personality" className="md:col-span-1">
          <Card className="qz-interactive h-full p-6">
            <Sparkles className="h-5 w-5" />
            <h3 className="mt-3 font-serif text-lg">Personality profile</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Twelve questions. Where you sit, philosophically, in percentages.
            </p>
          </Card>
        </Link>
        <Card className="md:col-span-2 p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 mt-0.5" />
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Quote of the day</p>
              <blockquote className="mt-2 font-serif italic">“{todayQuote.text}”</blockquote>
              <p className="mt-2 font-sans text-xs text-muted-foreground">
                {todayQuoteAuthor?.name} — {todayQuote.sourceLocation}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-start gap-3">
          <BookOpen className="h-5 w-5 mt-0.5" />
          <div className="flex-1">
            <p className="font-serif text-lg">Try a Thought Experiment</p>
            <p className="mt-1 text-sm text-muted-foreground">
              The trolley, the cave, the ship of Theseus. Five minutes each — the experience of doing philosophy, not just reading about it.
            </p>
          </div>
          <Link href="/thought-experiments">
            <Button variant="outline" size="sm">Browse</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
