"use client";

import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore, useHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ReadLaterButton({
  contentType,
  contentId,
}: {
  contentType: string;
  contentId: string;
}) {
  const hydrated = useHydrated();
  const saved = useStore((s) =>
    s.favourites.some(
      (f) =>
        f.contentType === contentType &&
        f.contentId === contentId &&
        f.kind === "read-later",
    ),
  );
  const toggle = useStore((s) => s.toggleReadLater);
  const active = hydrated && saved;
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => toggle(contentType, contentId)}
      aria-pressed={active}
    >
      <Clock className={cn("h-4 w-4", active && "fill-foreground")} />
      {active ? "Saved for later" : "Read later"}
    </Button>
  );
}
