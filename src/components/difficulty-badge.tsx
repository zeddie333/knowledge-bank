import { Badge } from "@/components/ui/badge";
import type { Difficulty } from "@/lib/types";

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const label =
    level === "beginner" ? "Beginner" : level === "intermediate" ? "Intermediate" : "Advanced";
  return (
    <Badge variant="outline" className="font-sans">
      {label}
    </Badge>
  );
}
