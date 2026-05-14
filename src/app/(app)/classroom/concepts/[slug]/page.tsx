"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { getConcept } from "@/data/concepts";
import { getPhilosopher } from "@/data/philosophers";
import { relatedTo } from "@/data/relationships";
import { renderMarkdown } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { RelatedRail } from "@/components/related-rail";
import { FavouriteButton } from "@/components/favourite-button";
import { ReadLaterButton } from "@/components/read-later-button";
import { FinishButton } from "@/components/finish-button";
import { useStore } from "@/lib/store";

export default function ConceptPage() {
  const params = useParams<{ slug: string }>();
  const concept = getConcept(params.slug);
  const markReading = useStore((s) => s.markReading);

  React.useEffect(() => {
    if (concept) markReading("concept", concept.id, 50);
  }, [concept, markReading]);

  if (!concept) notFound();

  const relationships = relatedTo("concept", concept.id);
  const associated = concept.philosopherIds
    .map((id) => getPhilosopher(id))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <article className="lg:grid lg:grid-cols-[1fr_minmax(0,18rem)] lg:gap-12">
      <div className="min-w-0">
        <header className="mb-8">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Concept
          </p>
          <h1 className="mt-1 font-serif text-4xl tracking-tight md:text-5xl">
            {concept.name}
          </h1>
          <p className="mt-3 max-w-prose font-serif text-lg italic leading-relaxed text-foreground/85">
            {concept.shortSummary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <FinishButton contentType="concept" contentId={concept.id} />
            <FavouriteButton contentType="concept" contentId={concept.id} />
            <ReadLaterButton contentType="concept" contentId={concept.id} />
          </div>
        </header>

        <div className="prose-reading max-w-prose font-serif">
          {renderMarkdown(concept.fullBody)}
        </div>

        <RelatedRail
          relationships={relationships}
          pivotType="concept"
          pivotId={concept.id}
        />

        {concept.sources.length > 0 && (
          <footer className="mt-12 rounded-md border border-border bg-card p-5">
            <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Sources
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {concept.sources.map((s, i) => (
                <li key={i} className="font-sans">
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noreferrer" className="hover:text-accent">
                      {s.title}
                    </a>
                  ) : (
                    s.title
                  )}{" "}
                  <span className="text-muted-foreground">— {s.cite}</span>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>

      <aside className="mt-10 lg:mt-0 lg:sticky lg:top-8 lg:self-start">
        <Card className="p-5">
          <dl className="space-y-3 font-sans text-sm">
            <Row label="Theme">
              <Badge variant="accent" className="capitalize">{concept.theme}</Badge>
            </Row>
            <Row label="Difficulty"><DifficultyBadge level={concept.difficulty} /></Row>
          </dl>

          {associated.length > 0 && (
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Associated
              </p>
              <ul className="mt-2 space-y-1">
                {associated.map((p) => (
                  <li key={p.id} className="font-serif text-sm">
                    <Link
                      href={`/classroom/philosophers/${p.slug}`}
                      className="hover:text-accent"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </aside>
    </article>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}

