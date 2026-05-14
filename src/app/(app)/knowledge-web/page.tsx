import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Network, History } from "lucide-react";

export default function KnowledgeWebHome() {
  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Knowledge Web
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">See the connections</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Two views of the same data. The map is structural — who influenced whom, what belongs to what school. The timeline is historical — what came when, in what region.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/knowledge-web/map">
          <Card className="qz-interactive h-full p-6">
            <Network className="h-6 w-6" />
            <h2 className="mt-3 font-serif text-xl tracking-tight">Concept map</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Force-directed graph of philosophers, concepts, and schools. Click anything to open it.
            </p>
          </Card>
        </Link>
        <Link href="/knowledge-web/timeline">
          <Card className="qz-interactive h-full p-6">
            <History className="h-6 w-6" />
            <h2 className="mt-3 font-serif text-xl tracking-tight">Historical timelines</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Region by region. Zoom and click on any philosopher, concept, or school to read its summary.
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
