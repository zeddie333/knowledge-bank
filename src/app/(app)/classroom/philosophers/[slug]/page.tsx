"use client";

import { notFound, useParams } from "next/navigation";
import * as React from "react";
import { getPhilosopher } from "@/data/philosophers";
import { quotesByPhilosopher } from "@/data/quotes";
import { relatedTo } from "@/data/relationships";
import { renderMarkdown } from "@/lib/markdown";
import { rangeYears } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { QuoteBlock } from "@/components/quote-block";
import { RelatedRail } from "@/components/related-rail";
import { FavouriteButton } from "@/components/favourite-button";
import { ReadLaterButton } from "@/components/read-later-button";
import { FinishButton } from "@/components/finish-button";
import { MakeFlashcardsButton } from "@/components/make-flashcards-button";
import { Portrait } from "@/components/portrait";
import { KnownFor } from "@/components/known-for";
import { useStore } from "@/lib/store";

export default function PhilosopherPage() {
  const params = useParams<{ slug: string }>();
  const philosopher = getPhilosopher(params.slug);
  const markReading = useStore((s) => s.markReading);

  React.useEffect(() => {
    if (philosopher) markReading("philosopher", philosopher.id, 50);
  }, [philosopher, markReading]);

  if (!philosopher) {
    notFound();
  }

  const quotes = quotesByPhilosopher(philosopher.id);
  const relationships = relatedTo("philosopher", philosopher.id);
  const deckId = `deck-${philosopher.id}`;

  return (
    <article className="lg:grid lg:grid-cols-[1fr_minmax(0,18rem)] lg:gap-12">
      <div className="min-w-0">
        <header className="mb-8">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Philosopher
          </p>
          <h1 className="mt-1 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            {philosopher.name}
          </h1>
          <p className="mt-3 max-w-prose font-serif text-lg italic leading-relaxed text-foreground/85">
            {philosopher.shortSummary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <FinishButton contentType="philosopher" contentId={philosopher.id} />
            <FavouriteButton contentType="philosopher" contentId={philosopher.id} />
            <ReadLaterButton contentType="philosopher" contentId={philosopher.id} />
            <MakeFlashcardsButton deckId={deckId} />
          </div>
        </header>

        <div className="prose-reading max-w-prose font-serif">
          {renderMarkdown(philosopher.fullBody)}
        </div>

        <KnownFor philosopherId={philosopher.id} />

        {quotes.length > 0 && (
          <section className="mt-12">
            <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Quotes
            </h2>
            <div className="mt-4">
              {quotes.map((q) => (
                <QuoteBlock key={q.id} quote={q} />
              ))}
            </div>
          </section>
        )}

        <RelatedRail
          relationships={relationships}
          pivotType="philosopher"
          pivotId={philosopher.id}
        />

        {philosopher.sources.length > 0 && (
          <footer className="mt-12 rounded-md border border-border bg-card p-5">
            <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Sources
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {philosopher.sources.map((s, i) => (
                <li key={i} className="font-sans">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground hover:text-accent"
                    >
                      {s.title}
                    </a>
                  ) : (
                    <span>{s.title}</span>
                  )}
                  <span className="text-muted-foreground"> — {s.cite}</span>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>

      {/* Sidebar metadata — Wikipedia-style infobox on desktop. */}
      <aside className="mt-10 lg:mt-0 lg:sticky lg:top-8 lg:self-start">
        <Card className="overflow-hidden p-0">
          <Portrait name={philosopher.name} src={philosopher.imageUrl} size="xl" className="!rounded-none !w-full !max-w-none aspect-[3/4] h-auto" />
          <dl className="space-y-3 p-5 font-sans text-sm">
            <Meta label="Years">{rangeYears(philosopher.birthYear, philosopher.deathYear)}</Meta>
            <Meta label="Era" className="capitalize">{philosopher.era.replace("-", " ")}</Meta>
            <Meta label="Region" className="capitalize">{philosopher.region.replace("-", " ")}</Meta>
            <Meta label="Difficulty"><DifficultyBadge level={philosopher.difficulty} /></Meta>
            <Meta label="Reading time">{philosopher.readingTimeMinutes} min</Meta>
            <Meta label="Themes">
              <div className="flex flex-wrap gap-1">
                {philosopher.themes.map((t) => (
                  <Badge key={t} variant="outline" className="capitalize">{t}</Badge>
                ))}
              </div>
            </Meta>
          </dl>
        </Card>
      </aside>
    </article>
  );
}

function Meta({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="shrink-0 text-muted-foreground">{label}</dt>
      <dd className={"text-right " + (className ?? "")}>{children}</dd>
    </div>
  );
}

