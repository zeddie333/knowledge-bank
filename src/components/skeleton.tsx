import * as React from "react";
import { cn } from "@/lib/utils";

// Generic shimmer skeleton block. Use for loading placeholders rather than
// blank space; gives the interface visible structure while data resolves.
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("qz-skeleton", className)} {...props} />;
}
