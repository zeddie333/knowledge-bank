"use client";

// Shared filter chip strip used by Let's Play game-setup screens.
// Mirrors the Study customize UI for consistency.

import * as React from "react";
import { Badge } from "@/components/ui/badge";

export type FilterSet<T extends string> = {
  selected: Set<T>;
  toggle: (v: T) => void;
};

export function useFilterSet<T extends string>(): FilterSet<T> {
  const [selected, setSelected] = React.useState<Set<T>>(new Set());
  const toggle = React.useCallback((v: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });
  }, []);
  return { selected, toggle };
}

export function FilterRow<T extends string>({
  label,
  options,
  filter,
  renderLabel,
}: {
  label: string;
  options: readonly T[];
  filter: FilterSet<T>;
  renderLabel?: (v: T) => string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-20 shrink-0 font-sans text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = filter.selected.has(opt);
          return (
            <button key={opt} onClick={() => filter.toggle(opt)} type="button">
              <Badge
                variant={active ? "accent" : "outline"}
                className="qz-chip cursor-pointer font-sans capitalize"
              >
                {renderLabel ? renderLabel(opt) : opt.replace("-", " ")}
              </Badge>
            </button>
          );
        })}
      </div>
    </div>
  );
}
