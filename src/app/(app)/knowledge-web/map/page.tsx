"use client";

// A lightweight force-directed concept map drawn in raw SVG.
// d3-force / react-flow would be heavier; for the size of the seed
// graph (≈30 nodes) a tiny pure-JS simulation is enough.

import * as React from "react";
import Link from "next/link";
import { PHILOSOPHERS } from "@/data/philosophers";
import { CONCEPTS } from "@/data/concepts";
import { SCHOOLS } from "@/data/schools";
import { RELATIONSHIPS } from "@/data/relationships";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Node {
  id: string;
  label: string;
  kind: "philosopher" | "concept" | "school";
  href: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Edge {
  from: string;
  to: string;
  relation: string;
}

function buildGraph(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const seenIds = new Set<string>();
  const push = (id: string, label: string, kind: Node["kind"], href: string) => {
    const key = `${kind}:${id}`;
    if (seenIds.has(key)) return;
    seenIds.add(key);
    nodes.push({
      id: key,
      label,
      kind,
      href,
      x: Math.random() * 800,
      y: Math.random() * 500,
      vx: 0,
      vy: 0,
    });
  };
  for (const p of PHILOSOPHERS) push(p.id, p.name, "philosopher", `/classroom/philosophers/${p.slug}`);
  for (const c of CONCEPTS) push(c.id, c.name, "concept", `/classroom/concepts/${c.slug}`);
  for (const s of SCHOOLS) push(s.id, s.name, "school", `/classroom/schools/${s.slug}`);

  const edges: Edge[] = RELATIONSHIPS.map((r) => ({
    from: `${r.fromType}:${r.fromId}`,
    to: `${r.toType}:${r.toId}`,
    relation: r.relation,
  }));
  return { nodes, edges };
}

const WIDTH = 900;
const HEIGHT = 560;
const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };

function simulate(nodes: Node[], edges: Edge[], iters = 200) {
  // Toy force model: spring along edges, repulsion between all nodes, gravity to center.
  for (let it = 0; it < iters; it++) {
    // repulsion
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d2 = dx * dx + dy * dy + 0.01;
        const force = 1800 / d2;
        const d = Math.sqrt(d2);
        const fx = (dx / d) * force;
        const fy = (dy / d) * force;
        a.vx -= fx;
        a.vy -= fy;
        b.vx += fx;
        b.vy += fy;
      }
    }
    // springs
    for (const e of edges) {
      const a = nodes.find((n) => n.id === e.from);
      const b = nodes.find((n) => n.id === e.to);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const target = 140;
      const f = (d - target) * 0.04;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      a.vx += fx;
      a.vy += fy;
      b.vx -= fx;
      b.vy -= fy;
    }
    // gravity
    for (const n of nodes) {
      n.vx += (CENTER.x - n.x) * 0.005;
      n.vy += (CENTER.y - n.y) * 0.005;
      n.vx *= 0.85;
      n.vy *= 0.85;
      n.x += n.vx;
      n.y += n.vy;
    }
  }
}

const KIND_COLOR: Record<Node["kind"], string> = {
  philosopher: "hsl(var(--accent))",
  concept: "hsl(var(--foreground))",
  school: "hsl(var(--due))",
};

export default function ConceptMap() {
  const [filter, setFilter] = React.useState<"all" | "philosopher" | "concept" | "school">("all");
  const [selected, setSelected] = React.useState<Node | null>(null);

  const { nodes, edges } = React.useMemo(() => {
    const g = buildGraph();
    simulate(g.nodes, g.edges, 240);
    return g;
  }, []);

  const visibleNodes = nodes.filter((n) => filter === "all" || n.kind === filter);
  const visibleIds = new Set(visibleNodes.map((n) => n.id));
  const visibleEdges = edges.filter((e) => visibleIds.has(e.from) && visibleIds.has(e.to));

  return (
    <div className="space-y-6">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">Concept map</p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">The web</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Nodes are philosophers, concepts, and schools. Edges are influence, critique, membership. Click anything to open the page; this is meant to be wandered through.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        {(["all", "philosopher", "concept", "school"] as const).map((k) => (
          <button key={k} onClick={() => setFilter(k)}>
            <Badge variant={filter === k ? "accent" : "outline"} className="cursor-pointer capitalize">{k}</Badge>
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
        <Card className="overflow-hidden">
          <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="block w-full h-[560px] bg-card">
            {visibleEdges.map((e, i) => {
              const a = nodes.find((n) => n.id === e.from)!;
              const b = nodes.find((n) => n.id === e.to)!;
              return (
                <line
                  key={i}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="hsl(var(--border))"
                  strokeWidth={1}
                />
              );
            })}
            {visibleNodes.map((n) => (
              <g
                key={n.id}
                transform={`translate(${n.x},${n.y})`}
                onClick={() => setSelected(n)}
                className="cursor-pointer"
              >
                <circle
                  r={n.kind === "philosopher" ? 9 : 7}
                  fill={KIND_COLOR[n.kind]}
                  opacity={selected && selected.id !== n.id ? 0.4 : 1}
                />
                <text
                  x={12}
                  y={4}
                  fontFamily="var(--font-sans)"
                  fontSize={11}
                  fill="hsl(var(--foreground))"
                  opacity={selected && selected.id !== n.id ? 0.5 : 1}
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </Card>

        <Card className="p-5">
          {selected ? (
            <>
              <Badge variant="outline" className="capitalize">{selected.kind}</Badge>
              <h2 className="mt-2 font-serif text-xl tracking-tight">{selected.label}</h2>
              <Link href={selected.href}>
                <span className="mt-3 inline-block font-sans text-sm text-accent hover:underline">
                  Open page →
                </span>
              </Link>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Click a node to inspect. Edges are not bidirectional by default — influence runs in the direction declared.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
