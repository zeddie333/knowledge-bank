"use client";

// Client-side auth gate. The app uses stubbed sign-in via the zustand store;
// this redirects unauthenticated users to the welcome page. When Supabase
// lands, replace the predicate with a server-side check + middleware.

import { useRouter } from "next/navigation";
import * as React from "react";
import { useStore, useHydrated } from "@/lib/store";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const hydrated = useHydrated();
  const authed = useStore((s) => s.authed);
  const onboardingComplete = useStore((s) => s.onboardingComplete);

  React.useEffect(() => {
    if (!hydrated) return;
    if (!authed) {
      router.replace("/");
      return;
    }
    if (!onboardingComplete) router.replace("/onboarding");
  }, [authed, onboardingComplete, hydrated, router]);

  if (!hydrated) return null;
  if (!authed) return null;
  if (!onboardingComplete) return null;
  return <>{children}</>;
}
