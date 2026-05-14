import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYear(year: number | null): string {
  if (year === null) return "—";
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;
}

export function rangeYears(birth: number | null, death: number | null): string {
  return `${formatYear(birth)} – ${formatYear(death)}`;
}
