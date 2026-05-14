"use client";

// Influence Web: pick a philosopher, see who influenced them, who they
// influenced, who critiqued them, and their teacher/student lines.

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Portrait } from "@/components/portrait";
import { PHILOSOPHERS, getPhilosopher } from "@/data/philosophers";
import { RELATIONSHIPS } from "@/data/relationships";
import { Search as SearchIcon, ArrowRight, ArrowLeft, X as XIcon, Users } from "lucide-react";

type Relation = "influenced" | "critiqued" | "student_of" | "related_to";

interface Edge {
  philosopherId: string;
  relation: Relation;
  notes?: string;
}

function relationsFor(philosopherId: string) {
  const influencedBy: Edge[] = []; // people who influenced this philosopher
  const influenced: Edge[] = []; // people this philosopher influenced
  const teachers: Edge[] = []; // student_of edges going outward
  const students: Edge[] = []; // student_of edges coming in
  const critiqued: Edge[] = []; // people this philosopher critiqued
  const critiquedBy: Edge[] = []; // people who critiqued this philosopher
  const relatedTo: Edge[] = [];

  for (const r of RELATIONSHIPS) {
    if (r.fromType !== "philosopher" || r.toType !== "philosopher") continue;
    if (r.relation === "influenced") {
      if (r.fromId === philosopherId) {
        influenced.push({ philosopherId: r.toId, relation: "influenced", notes: r.notes });
      } else if (r.toId === philosopherId) {
        influencedBy.push({ philosopherId: r.fromId, relation: "influenced", notes: r.notes });
      }
    } else if (r.relation === "student_of") {
      if (r.fromId === philosopherId) {
        teachers.push({ philosopherId: r.toId, relation: "student_of", notes: r.notes });
      } else if (r.toId === philosopherId) {
        students.push({ philosopherId: r.fromId, relation: "student_of", notes: r.notes });
      }
    } else if (r.relation === "critiqued") {
      if (r.fromId === philosopherId) {
        critiqued.push({ philosopherId: r.toId, relation: "critiqued", notes: r.notes });
      } else if (r.toId === philosopherId) {
        critiquedBy.push({ philosopherId: r.fromId, relation: "critiqued", notes: r.notes });
      }
    } else if (r.relation === "related_to") {
      if (r.fromId === philosopherId) {
        relatedTo.push({ philosopherId: r.toId, relation: "related_to", notes: r.notes });
      } else if (r.toId === philosopherId) {
        relatedTo.push({ philosopherId: r.fromId, relation: "related_to", notes: r.notes });
      }
    }
  }
  return { influencedBy, influenced, teachers, students, critiqued, critiquedBy, relatedTo };
}

export default function InfluenceWebPage() {
  const [query, setQuery] = React.useState("");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const match = query.trim().toLowerCase();
  const suggestions = match.length === 0
    ? []
    : PHILOSOPHERS.filter((p) => p.name.toLowerCase().includes(match)).slice(0, 8);

  const selected = selectedId ? getPhilosopher(selectedId) : null;
  const rels = selected ? relationsFor(selected.id) : null;

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Knowledge Web · Influence
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">Influence Web</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Pick a philosopher. See who influenced them, who they influenced, who
          taught them, who they critiqued, and the figures who rejected them.
        </p>
      </header>

      <Card className="p-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pick any philosopher — type a name"
            className="h-11 pl-10"
          />
        </div>
        {suggestions.length > 0 && (
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => {
                    setSelectedId(p.id);
                    setQuery("");
                  }}
                  className="qz-interactive flex w-full items-center gap-3 rounded-md border border-border bg-card px-3 py-2 text-left hover:border-foreground/40"
                >
                  <Portrait name={p.name} src={p.imageUrl} size="sm" />
                  <span className="min-w-0 flex-1 font-serif">{p.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>

      {!selected ? (
        <Card className="p-8 text-center">
          <Users className="mx-auto h-6 w-6 text-muted-foreground" />
          <p className="mt-3 font-serif text-lg">Pick a philosopher to see their influence web.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Or start with a familiar name — Plato, Nietzsche, Foucault.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["plato", "nietzsche", "foucault", "marx", "kant", "wittgenstein"].map((slug) => {
              const p = PHILOSOPHERS.find((x) => x.slug === slug);
              return p ? (
                <button key={slug} onClick={() => setSelectedId(p.id)}>
                  <Badge variant="outline" className="qz-chip cursor-pointer">{p.name}</Badge>
                </button>
              ) : null;
            })}
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Center: the selected philosopher */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Portrait name={selected.name} src={selected.imageUrl} size="lg" />
              <div className="min-w-0 flex-1">
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  Selected
                </p>
                <h2 className="font-serif text-3xl tracking-tight">{selected.name}</h2>
                <p className="mt-2 text-foreground/85">{selected.shortSummary}</p>
                <div className="mt-3 flex gap-2">
                  <Link href={`/classroom/philosophers/${selected.slug}`}>
                    <Badge variant="accent" className="qz-chip cursor-pointer">Open page</Badge>
                  </Link>
                  <button onClick={() => setSelectedId(null)}>
                    <Badge variant="outline" className="qz-chip cursor-pointer">
                      <XIcon className="mr-1 h-3 w-3" /> Clear
                    </Badge>
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Two columns: incoming and outgoing influence */}
          <div className="grid gap-4 lg:grid-cols-2">
            <InfluenceColumn
              title="Influenced by"
              icon={<ArrowLeft className="h-4 w-4" />}
              edges={rels!.influencedBy.concat(rels!.teachers)}
              onPick={(id) => setSelectedId(id)}
              emptyMessage="No incoming influence edges in our graph yet."
            />
            <InfluenceColumn
              title="Influenced"
              icon={<ArrowRight className="h-4 w-4" />}
              edges={rels!.influenced.concat(rels!.students)}
              onPick={(id) => setSelectedId(id)}
              emptyMessage="No outgoing influence edges in our graph yet."
            />
          </div>

          {/* Two columns: critiqued, critiqued by */}
          <div className="grid gap-4 lg:grid-cols-2">
            <InfluenceColumn
              title={`${selected.name} critiqued`}
              icon={<ArrowRight className="h-4 w-4" />}
              edges={rels!.critiqued}
              onPick={(id) => setSelectedId(id)}
              emptyMessage="No outgoing critique edges yet."
            />
            <InfluenceColumn
              title={`Critiqued by`}
              icon={<ArrowLeft className="h-4 w-4" />}
              edges={rels!.critiquedBy}
              onPick={(id) => setSelectedId(id)}
              emptyMessage="No incoming critique edges yet."
            />
          </div>

          {rels!.relatedTo.length > 0 && (
            <InfluenceColumn
              title="Other relationships"
              icon={<Users className="h-4 w-4" />}
              edges={rels!.relatedTo}
              onPick={(id) => setSelectedId(id)}
              emptyMessage="—"
            />
          )}
        </div>
      )}
    </div>
  );
}

function InfluenceColumn({
  title,
  icon,
  edges,
  onPick,
  emptyMessage,
}: {
  title: string;
  icon: React.ReactNode;
  edges: Edge[];
  onPick: (id: string) => void;
  emptyMessage: string;
}) {
  return (
    <Card className="p-5">
      <h3 className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground">
        {icon} {title} <span className="text-foreground/40">({edges.length})</span>
      </h3>
      {edges.length === 0 ? (
        <p className="mt-3 font-sans text-sm text-muted-foreground">{emptyMessage}</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {edges.map((e, i) => {
            const p = getPhilosopher(e.philosopherId) ?? PHILOSOPHERS.find((x) => x.id === e.philosopherId);
            if (!p) return null;
            return (
              <li key={`${e.philosopherId}-${i}`}>
                <button
                  onClick={() => onPick(p.id)}
                  className="qz-interactive flex w-full items-center gap-3 rounded-md border border-border bg-card px-3 py-2 text-left hover:border-foreground/40"
                >
                  <Portrait name={p.name} src={p.imageUrl} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-base leading-tight">{p.name}</p>
                    {e.notes && (
                      <p className="mt-0.5 line-clamp-1 font-sans text-xs text-muted-foreground">
                        {e.notes}
                      </p>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}
