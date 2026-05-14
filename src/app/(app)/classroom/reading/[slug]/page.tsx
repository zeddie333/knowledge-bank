"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { TEXTS, getText } from "@/data/texts";
import { getPhilosopher } from "@/data/philosophers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Portrait } from "@/components/portrait";
import { FavouriteButton } from "@/components/favourite-button";
import { ReadLaterButton } from "@/components/read-later-button";
import { FinishButton } from "@/components/finish-button";
import { useStore } from "@/lib/store";
import { formatYear } from "@/lib/utils";

export default function TextPage() {
  const params = useParams<{ slug: string }>();
  const text = getText(params.slug);
  const markReading = useStore((s) => s.markReading);

  React.useEffect(() => {
    if (text) markReading("text", text.id, 50);
  }, [text, markReading]);

  if (!text) notFound();

  const author = getPhilosopher(text.authorId);

  return (
    <article className="lg:grid lg:grid-cols-[1fr_minmax(0,18rem)] lg:gap-12">
      <div className="min-w-0">
        <header className="mb-8">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Text</p>
          <h1 className="mt-1 font-serif text-4xl tracking-tight leading-tight md:text-5xl">
            {text.title}
          </h1>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            {author?.name ?? "—"} · {formatYear(text.yearWritten)} · {text.languageOriginal}
          </p>
          <p className="mt-4 max-w-prose font-serif text-lg italic leading-relaxed text-foreground/85">
            {text.shortSummary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <FinishButton contentType="text" contentId={text.id} />
            <FavouriteButton contentType="text" contentId={text.id} />
            <ReadLaterButton contentType="text" contentId={text.id} />
          </div>
        </header>

        {text.keyPassages.length > 0 && (
          <section>
            <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Key passages
            </h2>
            <ul className="mt-4 space-y-4">
              {text.keyPassages.map((p, i) => (
                <li key={i}>
                  <Card className="p-5">
                    <p className="font-sans text-xs text-muted-foreground">{p.location}</p>
                    <p className="mt-2 font-serif italic leading-relaxed">{p.text}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </section>
        )}

        {author && (
          <section className="mt-10">
            <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Author
            </h2>
            <Link href={`/classroom/philosophers/${author.slug}`}>
              <Card className="qz-interactive mt-3 flex items-center gap-4 p-5">
                <Portrait name={author.name} src={author.imageUrl} size="md" />
                <div className="min-w-0">
                  <p className="font-serif text-lg">{author.name}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-foreground/80">{author.shortSummary}</p>
                </div>
              </Card>
            </Link>
          </section>
        )}
      </div>

      <aside className="mt-10 lg:mt-0 lg:sticky lg:top-8 lg:self-start">
        <Card className="overflow-hidden p-0">
          <Portrait name={text.title} src={text.imageUrl ?? null} size="xl" className="!rounded-none !w-full !max-w-none aspect-[3/4] h-auto" />
          <dl className="space-y-3 p-5 font-sans text-sm">
            {text.era && (
              <Row label="Era">
                <Badge variant="outline" className="capitalize">{text.era.replace("-", " ")}</Badge>
              </Row>
            )}
            {text.region && (
              <Row label="Region">
                <Badge variant="outline" className="capitalize">{text.region.replace("-", " ")}</Badge>
              </Row>
            )}
            {text.themes && text.themes.length > 0 && (
              <Row label="Themes">
                <div className="flex flex-wrap justify-end gap-1">
                  {text.themes.map((th) => (
                    <Badge key={th} variant="outline" className="capitalize">{th}</Badge>
                  ))}
                </div>
              </Row>
            )}
            <Row label="Language">{text.languageOriginal}</Row>
          </dl>
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
