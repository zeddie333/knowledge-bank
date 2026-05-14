import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Portrait } from "@/components/portrait";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { rangeYears } from "@/lib/utils";
import type { Philosopher } from "@/lib/types";

export function PhilosopherCard({ p }: { p: Philosopher }) {
  return (
    <Link
      href={`/classroom/philosophers/${p.slug}`}
      className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
    >
      <Card className="qz-interactive h-full p-6">
        <div className="flex items-start gap-4">
          <Portrait name={p.name} src={p.imageUrl} size="md" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
              <span>{rangeYears(p.birthYear, p.deathYear)}</span>
              <span>·</span>
              <span className="capitalize">{p.region.replace("-", " ")}</span>
            </div>
            <h3 className="mt-1 font-serif text-2xl tracking-tight leading-tight">{p.name}</h3>
          </div>
        </div>
        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-foreground/85">
          {p.shortSummary}
        </p>
        <div className="mt-4 flex items-center justify-between font-sans text-xs text-muted-foreground">
          <DifficultyBadge level={p.difficulty} />
          <span>{p.readingTimeMinutes} min read</span>
        </div>
      </Card>
    </Link>
  );
}
