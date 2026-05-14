import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Network, History, GitBranch } from "lucide-react";

export default function KnowledgeWebHome() {
  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          Knowledge Web
        </p>
        <h1 className="mt-1 font-serif text-3xl tracking-tight">See the connections</h1>
        <p className="mt-2 max-w-prose text-foreground/80">
          Three views of the same data. Influence traces who shaped whom. The map shows the structural network. The timeline shows what came when, region by region.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/knowledge-web/influence">
          <Card className="qz-interactive h-full p-6">
            <GitBranch className="h-6 w-6" />
            <h2 className="mt-3 font-serif text-xl tracking-tight">Influence Web</h2>
            <p className="mt-2 text-sm text-foreground/80">
              Pick a philosopher. See who influenced them, who they influenced, who taught them, who they critiqued.
            </p>
          </Card>
        </Link>
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
              Region by region. Inline portraits, era bands, zoom, click-to-inspect.
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
