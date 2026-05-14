import Link from "next/link";
import type { Relationship } from "@/lib/types";
import { getPhilosopher } from "@/data/philosophers";
import { getConcept } from "@/data/concepts";
import { getSchool } from "@/data/schools";

function resolveLink(type: string, id: string): { href: string; label: string } | null {
  if (type === "philosopher") {
    const p = getPhilosopher(id);
    return p ? { href: `/classroom/philosophers/${p.slug}`, label: p.name } : null;
  }
  if (type === "concept") {
    const c = getConcept(id);
    return c ? { href: `/classroom/concepts/${c.slug}`, label: c.name } : null;
  }
  if (type === "school") {
    const s = getSchool(id);
    return s ? { href: `/classroom/schools/${s.slug}`, label: s.name } : null;
  }
  return null;
}

const relationLabel: Record<Relationship["relation"], string> = {
  influenced: "Influenced",
  critiqued: "Critiqued",
  student_of: "Student of",
  belongs_to: "Belongs to",
  exemplifies: "Exemplifies",
  related_to: "Related",
};

export function RelatedRail({
  relationships,
  pivotType,
  pivotId,
}: {
  relationships: Relationship[];
  pivotType: string;
  pivotId: string;
}) {
  const items = relationships
    .map((r) => {
      const isFrom = r.fromType === pivotType && r.fromId === pivotId;
      const other = isFrom
        ? resolveLink(r.toType, r.toId)
        : resolveLink(r.fromType, r.fromId);
      return other ? { ...other, relation: r.relation } : null;
    })
    .filter((x): x is { href: string; label: string; relation: Relationship["relation"] } => !!x);

  if (items.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
        Related
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="group flex items-baseline justify-between gap-3 rounded-md border border-border bg-card px-4 py-3 transition-colors hover:border-accent/60"
            >
              <span className="font-serif">{item.label}</span>
              <span className="font-sans text-xs text-muted-foreground group-hover:text-accent">
                {relationLabel[item.relation]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
