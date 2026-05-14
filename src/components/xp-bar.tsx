"use client";

import { Progress } from "@/components/ui/progress";
import { levelFromXp, nextLevel, progressInLevel } from "@/lib/levels";

export function XpBar({ xp }: { xp: number }) {
  const lvl = levelFromXp(xp);
  const next = nextLevel(xp);
  const pct = Math.round(progressInLevel(xp) * 100);
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-serif text-sm">
          {lvl.name}
          <span className="ml-2 font-sans text-xs text-muted-foreground">{xp.toLocaleString()} XP</span>
        </span>
        {next ? (
          <span className="font-sans text-xs text-muted-foreground">
            {next.min.toLocaleString()} → {next.name}
          </span>
        ) : (
          <span className="font-sans text-xs text-muted-foreground">Highest band reached</span>
        )}
      </div>
      <Progress value={pct} />
    </div>
  );
}
