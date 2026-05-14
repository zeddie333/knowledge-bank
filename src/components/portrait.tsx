"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Portrait component: renders a Wikimedia Commons image if a URL is provided,
// otherwise falls back to a monogram of the philosopher's initials.
// Uses next/image; if the remote image 404s, falls back at render-time.

export function Portrait({
  name,
  src,
  size = "md",
  className,
}: {
  name: string;
  src: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const dims = {
    sm: { px: 40, cls: "h-10 w-10 text-sm" },
    md: { px: 64, cls: "h-16 w-16 text-lg" },
    lg: { px: 128, cls: "h-32 w-32 text-3xl" },
    xl: { px: 240, cls: "h-60 w-full max-w-[240px] text-5xl" },
  }[size];

  const [errored, setErrored] = React.useState(false);
  const initials = name
    .replace(/[^a-zA-Z\sÀ-ſ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const showImage = src && !errored;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted flex items-center justify-center shrink-0",
        dims.cls,
        className,
      )}
      aria-label={`Portrait of ${name}`}
    >
      {showImage ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${dims.px}px`}
          className="object-cover grayscale"
          onError={() => setErrored(true)}
          unoptimized
        />
      ) : (
        <span className="font-serif text-muted-foreground">{initials || "·"}</span>
      )}
    </div>
  );
}
