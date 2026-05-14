"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore, useHydrated } from "@/lib/store";

export function FinishButton({
  contentType,
  contentId,
}: {
  contentType: string;
  contentId: string;
}) {
  const hydrated = useHydrated();
  const status = useStore(
    (s) => s.progress[`${contentType}:${contentId}`]?.status,
  );
  const markFinished = useStore((s) => s.markFinished);
  const finished = hydrated && status === "finished";
  return (
    <Button
      variant={finished ? "outline" : "accent"}
      size="sm"
      onClick={() => markFinished(contentType, contentId)}
    >
      <Check className="h-4 w-4" />
      {finished ? "Finished" : "Mark as finished"}
    </Button>
  );
}
