"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { useStore, useHydrated } from "@/lib/store";

// Simple auth gate: only requires `authed`. Onboarding has been removed in
// favor of sensible defaults set at sign-in (see store.signIn).
export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const hydrated = useHydrated();
  const authed = useStore((s) => s.authed);

  React.useEffect(() => {
    if (!hydrated) return;
    if (!authed) router.replace("/");
  }, [authed, hydrated, router]);

  if (!hydrated) return null;
  if (!authed) return null;
  return <>{children}</>;
}
