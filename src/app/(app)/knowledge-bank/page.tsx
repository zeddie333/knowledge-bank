"use client";

// Combined personal library — Favourites + Read Later + Journal.

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bookmark, Clock, PenLine, Plus, Trash2 } from "lucide-react";
import { useStore, useHydrated } from "@/lib/store";
import { getPhilosopher } from "@/data/philosophers";
import { getConcept } from "@/data/concepts";
import { getSchool } from "@/data/schools";
import { getText } from "@/data/texts";
import { promptForDate } from "@/data/journalPrompts";
import type { ContentType, JournalEntry } from "@/lib/types";

function resolve(t: ContentType, id: string) {
  if (t === "philosopher") {
    const p = getPhilosopher(id);
    return p && { href: `/classroom/philosophers/${p.slug}`, name: p.name, summary: p.shortSummary };
  }
  if (t === "concept") {
    const c = getConcept(id);
    return c && { href: `/classroom/concepts/${c.slug}`, name: c.name, summary: c.shortSummary };
  }
  if (t === "school") {
    const s = getSchool(id);
    return s && { href: `/classroom/schools/${s.slug}`, name: s.name, summary: s.shortSummary };
  }
  if (t === "text") {
    const txt = getText(id);
    return txt && { href: `/classroom/reading/${txt.slug}`, name: txt.title, summary: txt.shortSummary };
  }
  return null;
}

export default function KnowledgeBankPage() {
  const hydrated = useHydrated();
  const favourites = useStore((s) => s.favourites);
  const toggleFavourite = useStore((s) => s.toggleFavourite);
  const toggleReadLater = useStore((s) => s.toggleReadLater);

  if (!hydrated) return null;

  const favs = favourites.filter((f) => (f.kind ?? "favourite") === "favourite");
  const readLater = favourites.filter((f) => f.kind === "read-later");

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Your library
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Knowledge Bank</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Your saved pages, your read-later queue, and your daily reflections — all in one place.
        </p>
      </header>

      <Tabs defaultValue="favourites">
        <TabsList className="flex flex-wrap h-auto">
          <TabsTrigger value="favourites">
            <Bookmark className="mr-1.5 h-3.5 w-3.5" />
            Favourites
            <span className="ml-1.5 font-sans text-xs text-muted-foreground">({favs.length})</span>
          </TabsTrigger>
          <TabsTrigger value="read-later">
            <Clock className="mr-1.5 h-3.5 w-3.5" />
            Read later
            <span className="ml-1.5 font-sans text-xs text-muted-foreground">({readLater.length})</span>
          </TabsTrigger>
          <TabsTrigger value="journal">
            <PenLine className="mr-1.5 h-3.5 w-3.5" />
            Journal
          </TabsTrigger>
        </TabsList>

        <TabsContent value="favourites">
          <SaveList
            items={favs}
            kind="favourite"
            empty="Nothing saved yet. Tap the bookmark on any page to keep it here."
            onRemove={(t, i) => toggleFavourite(t, i)}
          />
        </TabsContent>
        <TabsContent value="read-later">
          <SaveList
            items={readLater}
            kind="read-later"
            empty="Your reading queue is empty. Add pages from the Read later button on any reading."
            onRemove={(t, i) => toggleReadLater(t, i)}
          />
        </TabsContent>
        <TabsContent value="journal">
          <JournalSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SaveList({
  items,
  kind,
  empty,
  onRemove,
}: {
  items: Array<{ contentType: ContentType; contentId: string; createdAt: string }>;
  kind: "favourite" | "read-later";
  empty: string;
  onRemove: (contentType: ContentType, contentId: string) => void;
}) {
  if (items.length === 0) {
    return (
      <div className="mt-6 rounded-md border border-dashed border-border p-8 text-center">
        <p className="font-serif text-lg">{empty}</p>
        <div className="mt-3">
          <Link href="/classroom"><Button variant="outline" size="sm">Browse the canon</Button></Link>
        </div>
      </div>
    );
  }
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((f) => {
        const data = resolve(f.contentType, f.contentId);
        if (!data) return null;
        return (
          <li key={`${f.contentType}:${f.contentId}`}>
            <Card className="qz-interactive h-full p-5">
              <div className="flex items-start justify-between gap-3">
                <Link href={data.href} className="block min-w-0">
                  <p className="font-serif text-lg leading-tight">{data.name}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-foreground/80">{data.summary}</p>
                  <Badge variant="outline" className="mt-2 capitalize">{f.contentType}</Badge>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(f.contentType, f.contentId)}
                  aria-label={kind === "favourite" ? "Remove favourite" : "Remove from read later"}
                >
                  {kind === "favourite" ? (
                    <Bookmark className="h-4 w-4 fill-foreground" />
                  ) : (
                    <Clock className="h-4 w-4 fill-foreground" />
                  )}
                </Button>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

function JournalSection() {
  const journal = useStore((s) => s.journal);
  const addJournal = useStore((s) => s.addJournal);
  const deleteJournal = useStore((s) => s.deleteJournal);
  const awardXp = useStore((s) => s.awardXp);
  const unlockAchievement = useStore((s) => s.unlockAchievement);

  const todayPrompt = React.useMemo(() => promptForDate(new Date()), []);

  return (
    <section className="space-y-6 mt-4">
      <Card className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Today's prompt</p>
            <p className="mt-2 font-serif text-lg leading-relaxed">{todayPrompt.prompt}</p>
            <p className="mt-1 font-sans text-xs text-muted-foreground">{todayPrompt.attribution}</p>
          </div>
          <NewEntryDialog
            initialPrompt={todayPrompt.prompt}
            onCreate={(entry) => {
              addJournal(entry);
              awardXp(5);
              // 7-day streak achievement
              const dates = new Set([...journal.map((j) => j.date), entry.date]);
              let streak = 1;
              const d = new Date();
              for (let i = 1; i < 7; i++) {
                d.setDate(d.getDate() - 1);
                if (dates.has(d.toISOString().slice(0, 10))) streak++;
                else break;
              }
              if (streak >= 7) unlockAchievement("daily-examination");
            }}
          />
        </div>
      </Card>

      <div>
        <h2 className="font-serif text-xl tracking-tight">All entries</h2>
        {journal.length === 0 ? (
          <p className="mt-2 text-muted-foreground">No entries yet. Write something honest.</p>
        ) : (
          <ul className="mt-3 space-y-3">
            {journal.map((e) => (
              <li key={e.id}>
                <Card className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-serif text-xl leading-tight">{e.title || "Untitled"}</p>
                      <p className="mt-1 font-sans text-xs text-muted-foreground">
                        {formatStamp(e.createdAt)}
                        {e.updatedAt && e.updatedAt !== e.createdAt && (
                          <> · edited {formatStamp(e.updatedAt)}</>
                        )}
                      </p>
                      {e.prompt && (
                        <p className="mt-3 font-serif text-sm italic text-foreground/80">{e.prompt}</p>
                      )}
                      <p className="mt-3 whitespace-pre-wrap font-serif leading-relaxed">{e.body}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteJournal(e.id)}
                      aria-label="Delete entry"
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function NewEntryDialog({
  initialPrompt,
  onCreate,
}: {
  initialPrompt: string;
  onCreate: (entry: JournalEntry) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [usePrompt, setUsePrompt] = React.useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="accent" size="sm">
          <Plus className="h-4 w-4" /> New entry
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>New journal entry</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const trimmedBody = body.trim();
            if (!trimmedBody) return;
            const now = new Date().toISOString();
            onCreate({
              id: `j-${Date.now()}`,
              date: now.slice(0, 10),
              createdAt: now,
              updatedAt: now,
              title: title.trim() || "Untitled",
              prompt: usePrompt ? initialPrompt : "",
              body: trimmedBody,
            });
            setTitle("");
            setBody("");
            setUsePrompt(true);
            setOpen(false);
          }}
          className="space-y-3"
        >
          <div>
            <p className="mb-1 font-sans text-xs uppercase tracking-widest text-muted-foreground">Title</p>
            <Input
              placeholder="Today's reflection"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
          <button type="button" onClick={() => setUsePrompt(!usePrompt)}>
            <Badge variant={usePrompt ? "accent" : "outline"} className="qz-chip cursor-pointer">
              {usePrompt ? "Anchored to today's prompt" : "Free entry (no prompt)"}
            </Badge>
          </button>
          {usePrompt && (
            <p className="rounded-md border border-border bg-muted p-3 font-serif text-sm italic">
              {initialPrompt}
            </p>
          )}
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Two sentences. Three. Whatever's honest."
            className="min-h-[180px] font-serif text-base"
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="accent" disabled={!body.trim()}>Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function formatStamp(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
