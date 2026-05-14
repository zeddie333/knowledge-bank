"use client";

// "Known for" panel — surfaces, for a given philosopher, the schools they
// belong to and the concepts they advanced. Builds from the existing
// CONCEPTS.philosopherIds, SCHOOLS.philosopherIds, and RELATIONSHIPS data.

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Portrait } from "@/components/portrait";
import { CONCEPTS } from "@/data/concepts";
import { SCHOOLS } from "@/data/schools";
import { RELATIONSHIPS } from "@/data/relationships";
import { conceptImage, schoolImage } from "@/data/imagery";

export function KnownFor({ philosopherId }: { philosopherId: string }) {
  // Schools: direct membership OR a belongs_to relationship.
  const schoolMemberships = SCHOOLS.filter((s) => s.philosopherIds.includes(philosopherId));
  const schoolRels = RELATIONSHIPS.filter(
    (r) =>
      r.fromType === "philosopher" &&
      r.fromId === philosopherId &&
      r.toType === "school" &&
      r.relation === "belongs_to",
  );
  const schoolIds = new Set([
    ...schoolMemberships.map((s) => s.id),
    ...schoolRels.map((r) => r.toId),
  ]);
  const schools = SCHOOLS.filter((s) => schoolIds.has(s.id));

  // Concepts: explicit philosopherIds OR exemplifies relationship.
  const conceptByList = CONCEPTS.filter((c) => c.philosopherIds.includes(philosopherId));
  const conceptByExemplifies = RELATIONSHIPS.filter(
    (r) =>
      r.fromType === "philosopher" &&
      r.fromId === philosopherId &&
      r.toType === "concept" &&
      r.relation === "exemplifies",
  );
  const conceptIds = new Set([
    ...conceptByList.map((c) => c.id),
    ...conceptByExemplifies.map((r) => r.toId),
  ]);
  const concepts = CONCEPTS.filter((c) => conceptIds.has(c.id));

  if (schools.length === 0 && concepts.length === 0) return null;

  return (
    <section className="mt-12 space-y-6 border-t border-border pt-8">
      <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
        Known for
      </h2>

      {schools.length > 0 && (
        <div>
          <p className="font-serif text-sm text-foreground/70">Schools of thought</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {schools.map((s) => {
              const img = s.imageUrl ?? schoolImage(s.slug);
              return (
                <li key={s.id}>
                  <Link href={`/classroom/schools/${s.slug}`}>
                    <Card className="qz-interactive flex items-center gap-3 p-4">
                      <Portrait name={s.name} src={img} size="sm" />
                      <div className="min-w-0">
                        <p className="font-serif text-base leading-tight">{s.name}</p>
                        <p className="line-clamp-1 font-sans text-xs text-muted-foreground">
                          {s.shortSummary}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {concepts.length > 0 && (
        <div>
          <p className="font-serif text-sm text-foreground/70">Concepts they advanced</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((c) => {
              const img = c.imageUrl ?? conceptImage(c.slug);
              return (
                <li key={c.id}>
                  <Link href={`/classroom/concepts/${c.slug}`}>
                    <Card className="qz-interactive flex items-center gap-3 p-3">
                      <Portrait name={c.name} src={img} size="sm" />
                      <div className="min-w-0">
                        <p className="font-serif text-sm leading-tight">{c.name}</p>
                        <Badge variant="outline" className="mt-1 capitalize">{c.theme}</Badge>
                      </div>
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
