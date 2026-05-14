import Link from "next/link";
import type { Quote } from "@/lib/types";
import { getPhilosopher } from "@/data/philosophers";

export function QuoteBlock({ quote }: { quote: Quote }) {
  const philosopher = getPhilosopher(quote.philosopherId);
  return (
    <figure className="my-4 border-l-2 border-accent pl-5 italic">
      <blockquote className="font-serif text-[1.05rem] leading-relaxed">
        “{quote.text}”
      </blockquote>
      <figcaption className="mt-2 font-sans text-xs not-italic text-muted-foreground">
        {philosopher ? (
          <Link href={`/classroom/philosophers/${philosopher.slug}`} className="hover:text-accent">
            {philosopher.name}
          </Link>
        ) : null}
        {philosopher ? " — " : null}
        <span>{quote.sourceLocation}</span>
        {quote.context ? <span className="block mt-1 opacity-80">{quote.context}</span> : null}
      </figcaption>
    </figure>
  );
}
