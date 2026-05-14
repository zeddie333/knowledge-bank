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

// Welcome / login. Email + username + stay-logged-in. No placement quiz.
export default function Welcome() {
  const router = useRouter();
  const hydrated = useHydrated();
  const authed = useStore((s) => s.authed);
  const signIn = useStore((s) => s.signIn);
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [stay, setStay] = React.useState(true);

  // Rotate the quote on each session load.
  const quote = React.useMemo(() => {
    const idx = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[idx];
  }, []);
  const philosopher = quote ? getPhilosopher(quote.philosopherId) : null;

  React.useEffect(() => {
    if (!hydrated) return;
    if (authed) router.replace("/home");
  }, [authed, hydrated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    signIn(email, username, stay);
    router.push("/home");
  };

  return (
    <div className="min-h-screen">
      <header className="absolute right-6 top-6">
        <ThemeToggle />
      </header>

      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6 py-16">
        <h1 className="font-serif text-5xl tracking-tight md:text-6xl">Knowledge Bank</h1>
        <p className="mt-4 max-w-lg font-serif text-lg leading-relaxed text-foreground/85">
          A philosophy app for people who want depth — without the dust of an encyclopedia or the shallowness of a feed.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md space-y-3">
          <div>
            <label className="mb-1 block font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <Input
              type="email"
              inputMode="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@somewhere.com"
            />
          </div>
          <div>
            <label className="mb-1 block font-sans text-xs uppercase tracking-widest text-muted-foreground">
              Username
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="What should we call you?"
              maxLength={32}
            />
            <p className="mt-1 font-sans text-xs text-muted-foreground">
              Optional. If blank, we'll use the part of your email before the @.
            </p>
          </div>
          <label className="flex items-center gap-2 pt-1 font-sans text-sm">
            <input
              type="checkbox"
              checked={stay}
              onChange={(e) => setStay(e.target.checked)}
              className="h-4 w-4 accent-foreground"
            />
            Stay logged in on this device
          </label>
          <Button type="submit" variant="accent" className="w-full">
            Begin
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="font-sans text-xs text-muted-foreground">
            No password required for this preview build. State is stored locally; clear browser data to sign out from this device.
          </p>
        </form>

        {quote && philosopher && (
          <figure className="mt-16 max-w-xl border-l-2 border-foreground pl-5">
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
