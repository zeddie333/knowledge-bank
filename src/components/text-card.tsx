import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Portrait } from "@/components/portrait";
import { Badge } from "@/components/ui/badge";
import { getPhilosopher } from "@/data/philosophers";
import { formatYear } from "@/lib/utils";
import type { Text } from "@/lib/types";

export function TextCard({ t }: { t: Text }) {
  const author = getPhilosopher(t.authorId);
  return (
    <Link
      href={`/classroom/reading/${t.slug}`}
      className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="qz-interactive h-full p-6">
        <div className="flex items-start gap-4">
          <Portrait name={t.title} src={t.imageUrl ?? null} size="md" />
          <div className="min-w-0 flex-1">
            <div className="font-sans text-xs text-muted-foreground">
              {author?.name ?? "—"} · {formatYear(t.yearWritten)}
            </div>
            <h3 className="mt-1 font-serif text-xl leading-tight tracking-tight">{t.title}</h3>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/85">
          {t.shortSummary}
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {t.themes?.slice(0, 3).map((th) => (
            <Badge key={th} variant="outline" className="capitalize">{th}</Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
