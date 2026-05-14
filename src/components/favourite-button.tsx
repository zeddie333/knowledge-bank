"use client";

import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore, useHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

export function FavouriteButton({
  contentType,
  contentId,
}: {
  contentType: string;
  contentId: string;
}) {
  const hydrated = useHydrated();
  const isFav = useStore((s) =>
    s.favourites.some((f) => f.contentType === contentType && f.contentId === contentId),
  );
  const toggle = useStore((s) => s.toggleFavourite);
  const active = hydrated && isFav;
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => toggle(contentType, contentId)}
      aria-pressed={active}
    >
      <Bookmark className={cn("h-4 w-4", active && "fill-accent text-accent")} />
      {active ? "Saved" : "Add to favourites"}
    </Button>
  );
}
