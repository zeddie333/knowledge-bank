# Knowledge Bank

A philosophy learning app — built per the V1+V2 brief.

## What's here

- **Editorial content** for 6 seeded philosophers (Plato, Aristotle, Marcus Aurelius, Nāgārjuna, Nietzsche, de Beauvoir), 8 concepts, 3 schools, 6 primary texts, 14 sourced quotes, and 5 thought experiments. Every quote has a `sourceLocation`; nothing was included that couldn't be traced.
- **V1 features**: stubbed auth, onboarding placement quiz, home dashboard, classroom (philosophers/concepts/schools), FSRS-driven flashcards (practice + review), multiple-choice quiz, favourites + collections, profile with XP/streaks/achievements.
- **V2 features**: search, daily reflection journal, concept map (force-directed SVG), Socratic tutor (chat UI + server-side Anthropic API route), thought experiments.

## Run it

```bash
npm install   # already done if you cloned via the build script
npm run dev
# open http://localhost:3000
```

To enable the Socratic tutor, copy `.env.example` to `.env.local` and set:

```bash
ANTHROPIC_API_KEY=sk-ant-...
```

The key is **server-side only** — it's used by `/api/tutor` and never reaches the browser.

## Tech

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind** + a shadcn-style component layer (custom-written, not via CLI) on Radix primitives
- **Framer Motion** for transitions
- **ts-fsrs** for spaced-repetition scheduling
- **zustand + persist** for client state (localStorage). When Supabase wiring lands, replace the persistence layer; the selectors stay the same.

## Data model

The TypeScript types in `src/lib/types.ts` mirror the Supabase schema from the brief. The mock data in `src/data/` is shape-compatible with what the eventual Postgres tables will return, so swapping the data layer is a seam, not a rewrite.

## What's intentionally cut from V1+V2

Per the brief, V3 items are deferred until usage justifies:

- Timed challenge mode
- Reading clubs / primary text mode
- Audio summaries
- Multi-language
- Push notifications
- Offline mode
- Share / social features
- ML-driven recommendations (the home page uses a hand-curated heuristic)

Also cut: the "leaderboard of philosophers by influence" (replaced with the editorial 100-most-influential list per brief); generic share buttons.

## Next steps

1. **Wire Supabase.** Schema migrations are derivable from `src/lib/types.ts`. RLS on every user-state table; content tables read-only for anon.
2. **Expand content.** The current 6 philosophers cover ancient (3), Asian (1), modern (1), and contemporary (1). The brief's full V1 list has 20.
3. **Hand-curate the home recommendations.** The current heuristic is fine for ten users; it won't scale.
4. **Add the two V2 quiz types** (Philosopher Identification, Matching).
