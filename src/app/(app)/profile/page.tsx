"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { XpBar } from "@/components/xp-bar";
import { useStore, useHydrated } from "@/lib/store";
import { Award, Flame } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/achievements";
import { PHILOSOPHERS } from "@/data/philosophers";
import type { Theme } from "@/lib/types";

const THEMES: Theme[] = [
  "metaphysics",
  "ethics",
  "epistemology",
  "mind",
  "politics",
  "aesthetics",
  "religion",
  "logic",
];

export default function ProfilePage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const username = useStore((s) => s.username);
  const email = useStore((s) => s.email);
  const xp = useStore((s) => s.xp);
  const streakDays = useStore((s) => s.streakDays);
  const progress = useStore((s) => s.progress);
  const reviews = useStore((s) => s.reviews);
  const achievements = useStore((s) => s.achievements);
  const signOut = useStore((s) => s.signOut);

  const philosophersRead = React.useMemo(
    () =>
      Object.values(progress).filter(
        (p) => p.contentType === "philosopher" && p.status === "finished",
      ).length,
    [progress],
  );

  const flashcardsMastered = React.useMemo(
    () => Object.values(reviews).filter((r) => r.state === "review" && r.reps >= 2).length,
    [reviews],
  );

  // Per-theme completion %: of all philosophers whose themes include T,
  // how many has the user marked finished?
  const themePct: Record<Theme, { finished: number; total: number; pct: number }> = React.useMemo(() => {
    const out = {} as Record<Theme, { finished: number; total: number; pct: number }>;
    const finishedIds = new Set(
      Object.values(progress)
        .filter((p) => p.contentType === "philosopher" && p.status === "finished")
        .map((p) => p.contentId),
    );
    for (const t of THEMES) {
      const themePhilosophers = PHILOSOPHERS.filter((p) => p.themes.includes(t));
      const total = themePhilosophers.length;
      const finished = themePhilosophers.filter((p) => finishedIds.has(p.id)).length;
      out[t] = {
        finished,
        total,
        pct: total === 0 ? 0 : Math.round((finished / total) * 100),
      };
    }
    return out;
  }, [progress]);

  if (!hydrated) return null;

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center font-serif text-2xl">
          {username?.[0]?.toUpperCase() ?? "·"}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-serif text-3xl tracking-tight">{username ?? "Anonymous"}</h1>
          {email && <p className="font-sans text-sm text-muted-foreground">{email}</p>}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            signOut();
            router.replace("/");
          }}
        >
          Sign out
        </Button>
      </header>

      <Card className="p-5"><XpBar xp={xp} /></Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Streak</p>
          <p className="mt-2 flex items-baseline gap-2">
            <Flame className="h-5 w-5" />
            <span className="font-serif text-3xl">{streakDays}</span>
            <span className="text-sm text-muted-foreground">days</span>
          </p>
        </Card>
        <Card className="p-5">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Philosophers read</p>
          <p className="mt-2 font-serif text-3xl">{philosophersRead}</p>
        </Card>
        <Card className="p-5">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Flashcards mastered</p>
          <p className="mt-2 font-serif text-3xl">{flashcardsMastered}</p>
        </Card>
      </div>

      <section>
        <h2 className="font-serif text-xl tracking-tight">Theme completion</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Percentage of philosophers in each theme you've marked as finished.
        </p>
        <Card className="mt-3 p-5 space-y-4">
          {THEMES.map((theme) => {
            const { finished, total, pct } = themePct[theme];
            return (
              <div key={theme}>
                <div className="mb-1 flex items-baseline justify-between font-sans text-xs">
                  <span className="uppercase tracking-widest text-muted-foreground capitalize">{theme}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {finished}/{total} · {pct}%
                  </span>
                </div>
                <Progress value={pct} />
              </div>
            );
          })}
        </Card>
      </section>

      <section>
        <h2 className="font-serif text-xl tracking-tight">Achievements</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a) => {
            const unlocked = achievements.find((u) => u.key === a.key);
            return (
              <li key={a.key}>
                <Card className={"flex items-start gap-3 p-4 " + (unlocked ? "" : "opacity-50")}>
                  <Award className="h-5 w-5 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-serif">{a.title}</p>
                    <p className="font-sans text-xs text-muted-foreground">{a.description}</p>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
