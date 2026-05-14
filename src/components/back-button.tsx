"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Global "back" — uses router.back() when available, falls back to /home.
export function BackButton({ fallbackHref = "/home" }: { fallbackHref?: string }) {
  const router = useRouter();
  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };
  return (
    <Button variant="ghost" size="sm" onClick={handleClick} aria-label="Go back">
      <ChevronLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
