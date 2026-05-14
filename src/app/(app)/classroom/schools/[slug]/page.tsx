"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { getSchool } from "@/data/schools";
import { getPhilosopher } from "@/data/philosophers";
import { renderMarkdown } from "@/lib/markdown";
import { Card } from "@/components/ui/card";
import { FavouriteButton } from "@/components/favourite-button";
import { ReadLaterButton } from "@/components/read-later-button";

export default function SchoolPage() {
  const params = useParams<{ slug: string }>();
  const school = getSchool(params.slug);
  if (!school) notFound();

  const members = school.philosopherIds
    .map((id) => getPhilosopher(id))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <article className="lg:grid lg:grid-cols-[1fr_minmax(0,18rem)] lg:gap-12">
      <div className="min-w-0">
        <header className="mb-8">
          <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">School</p>
          <h1 className="mt-1 font-serif text-4xl tracking-tight md:text-5xl">{school.name}</h1>
          <p className="mt-3 max-w-prose font-serif text-lg italic leading-relaxed text-foreground/85">
            {school.shortSummary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <FavouriteButton contentType="school" contentId={school.id} />
            <ReadLaterButton contentType="school" contentId={school.id} />
          </div>
        </header>
        <div className="prose-reading max-w-prose font-serif">
          {renderMarkdown(school.fullBody)}
        </div>
      </div>
      <aside className="mt-10 lg:mt-0 lg:sticky lg:top-8 lg:self-start">
        <Card className="p-5">
          <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
            Key figures
          </h2>
          <ul className="mt-3 space-y-1.5">
            {members.map((p) => (
              <li key={p.id} className="font-serif text-sm">
                <Link href={`/classroom/philosophers/${p.slug}`} className="hover:text-accent">
                  {p.name}
                </Link>
              </li>
            ))}
            {members.length === 0 && (
              <li className="font-sans text-xs text-muted-foreground">
                More figures will appear as content is expanded.
              </li>
            )}
          </ul>
        </Card>
      </aside>
    </article>
  );
}

