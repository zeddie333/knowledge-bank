import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Portrait } from "@/components/portrait";
import { Badge } from "@/components/ui/badge";
import { schoolImage } from "@/data/imagery";
import type { School } from "@/lib/types";

export function SchoolCard({ s }: { s: School }) {
  const img = s.imageUrl ?? schoolImage(s.slug);
  return (
    <Link
      href={`/classroom/schools/${s.slug}`}
      className="group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="qz-interactive h-full p-6">
        <div className="flex items-start gap-4">
          <Portrait name={s.name} src={img} size="md" />
          <div className="min-w-0 flex-1">
            <div className="font-sans text-xs text-muted-foreground capitalize">
              {s.region.replace("-", " ")}
            </div>
            <h3 className="mt-1 font-serif text-xl leading-tight tracking-tight">{s.name}</h3>
          </div>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/85">
          {s.shortSummary}
        </p>
        <div className="mt-3">
          <Badge variant="outline">
            {s.eraStart < 0 ? `${Math.abs(s.eraStart)} BCE` : `${s.eraStart} CE`}
            {s.eraEnd ? ` – ${s.eraEnd < 0 ? Math.abs(s.eraEnd) + " BCE" : s.eraEnd + " CE"}` : " – present"}
          </Badge>
        </div>
      </Card>
    </Link>
  );
}
