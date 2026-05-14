"use client";

// Live-suggestion search bar for the Home page. Submits to /search?q=...
// on Enter; click any suggestion to navigate directly to its page.

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Portrait } from "@/components/portrait";
import { Badge } from "@/components/ui/badge";
import { PHILOSOPHERS } from "@/data/philosophers";
import { CONCEPTS } from "@/data/concepts";
import { SCHOOLS } from "@/data/schools";
import { TEXTS } from "@/data/texts";
import { conceptImage, schoolImage } from "@/data/imagery";

type Suggestion =
  | { kind: "philosopher"; id: string; href: string; title: string; subtitle: string; image: string | null }
  | { kind: "concept"; id: string; href: string; title: string; subtitle: string; image: string | null }
  | { kind: "school"; id: string; href: string; title: string; subtitle: string; image: string | null }
  | { kind: "text"; id: string; href: string; title: string; subtitle: string; image: string | null };

function matches(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

function getSuggestions(q: string, limit = 6): Suggestion[] {
  if (q.trim().length < 2) return [];
  const out: Suggestion[] = [];
  for (const p of PHILOSOPHERS) {
    if (matches(p.name, q)) {
      out.push({
        kind: "philosopher",
        id: p.id,
        href: `/classroom/philosophers/${p.slug}`,
        title: p.name,
        subtitle: p.shortSummary.split(".")[0],
        image: p.imageUrl,
      });
    }
  }
  for (const c of CONCEPTS) {
    if (matches(c.name, q)) {
      out.push({
        kind: "concept",
        id: c.id,
        href: `/classroom/concepts/${c.slug}`,
        title: c.name,
        subtitle: c.shortSummary.split(".")[0],
        image: c.imageUrl ?? conceptImage(c.slug),
      });
    }
  }
  for (const s of SCHOOLS) {
    if (matches(s.name, q)) {
      out.push({
        kind: "school",
        id: s.id,
        href: `/classroom/schools/${s.slug}`,
        title: s.name,
        subtitle: s.shortSummary.split(".")[0],
        image: s.imageUrl ?? schoolImage(s.slug),
      });
    }
  }
  for (const t of TEXTS) {
    if (matches(t.title, q)) {
      out.push({
        kind: "text",
        id: t.id,
        href: `/classroom/reading/${t.slug}`,
        title: t.title,
        subtitle: t.shortSummary.split(".")[0],
        image: t.imageUrl ?? null,
      });
    }
  }
  return out.slice(0, limit);
}

export function HomeSearch() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const suggestions = React.useMemo(() => getSuggestions(query), [query]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    else router.push("/search");
  };

  const showDropdown = focused && suggestions.length > 0;

  return (
    <form
      onSubmit={submitSearch}
      className="sticky top-0 z-10 -mx-5 -mt-6 bg-background/95 backdrop-blur px-5 py-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
    >
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          // Delay so click on a suggestion fires before blur removes it.
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search philosophers, concepts, schools, quotes…"
          className="h-11 pl-10"
        />
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12 }}
              className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-md border border-border bg-card shadow-lg"
            >
              <ul>
                {suggestions.map((s) => (
                  <li key={`${s.kind}-${s.id}`}>
                    <Link
                      href={s.href}
                      onMouseDown={(e) => e.preventDefault()}
                      className="qz-interactive flex items-center gap-3 border-b border-border px-3 py-2 last:border-b-0 hover:bg-muted"
                    >
                      <Portrait name={s.title} src={s.image} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-serif">{s.title}</p>
                        <p className="line-clamp-1 font-sans text-xs text-muted-foreground">{s.subtitle}</p>
                      </div>
                      <Badge variant="outline" className="capitalize">{s.kind}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
