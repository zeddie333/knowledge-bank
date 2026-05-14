"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { useStore, useHydrated } from "@/lib/store";
import { QUOTES } from "@/data/quotes";
import { getPhilosopher } from "@/data/philosophers";

// Welcome page. Name, one-sentence pitch, login. One rotating quote.
// No marketing-page fluff (per brief).

export default function Welcome() {
  const router = useRouter();
  const hydrated = useHydrated();
  const authed = useStore((s) => s.authed);
  const onboardingComplete = useStore((s) => s.onboardingComplete);
  const signIn = useStore((s) => s.signIn);
  const [email, setEmail] = React.useState("");

  // Rotate the quote on each session load.
  const quote = React.useMemo(() => {
    const idx = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[idx];
  }, []);
  const philosopher = quote ? getPhilosopher(quote.philosopherId) : null;

  React.useEffect(() => {
    if (!hydrated) return;
    if (authed && onboardingComplete) router.replace("/home");
    if (authed && !onboardingComplete) router.replace("/onboarding");
  }, [authed, onboardingComplete, hydrated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    signIn(email);
    router.push("/onboarding");
  };

  return (
    <div className="min-h-screen">
      <header className="absolute right-6 top-6">
        <ThemeToggle />
      </header>

      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6 py-16">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">
          Knowledge Bank
        </h1>
        <p className="mt-4 max-w-lg font-serif text-lg leading-relaxed text-foreground/85">
          A philosophy app for people who want depth — without the dust of an
          encyclopedia or the shallowness of a feed.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-md gap-2">
          <Input
            type="email"
            inputMode="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.com"
            aria-label="Email"
          />
          <Button type="submit" variant="accent">
            Begin
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
        <p className="mt-2 font-sans text-xs text-muted-foreground">
          A magic link would arrive in production. For now, any address gets you in.
        </p>

        {quote && philosopher && (
          <figure className="mt-16 max-w-xl border-l-2 border-accent pl-5">
            <blockquote className="font-serif text-lg italic leading-relaxed text-foreground/90">
              “{quote.text}”
            </blockquote>
            <figcaption className="mt-3 font-sans text-xs text-muted-foreground">
              {philosopher.name} — {quote.sourceLocation}
            </figcaption>
          </figure>
        )}
      </main>
    </div>
  );
}
