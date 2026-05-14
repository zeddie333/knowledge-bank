import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Portrait } from "@/components/portrait";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { Badge } from "@/components/ui/badge";
import { conceptImage } from "@/data/imagery";
import type { Concept } from "@/lib/types";

export function ConceptCard({ c }: { c: Concept }) {
  const img = c.imageUrl ?? conceptImage(c.slug);
  return (
    <Link
      href={`/classroom/concepts/${c.slug}`}
      className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="qz-interactive h-full p-6">
        <div className="flex items-start gap-4">
          <Portrait name={c.name} src={img} size="md" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="accent" className="font-sans capitalize">{c.theme}</Badge>
              <DifficultyBadge level={c.difficulty} />
            </div>
            <h3 className="mt-2 font-serif text-xl tracking-tight leading-tight">{c.name}</h3>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/85">
          {c.shortSummary}
        </p>
      </Card>
    </Link>
  );
}
