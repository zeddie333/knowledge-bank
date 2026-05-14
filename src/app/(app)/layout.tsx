// Authenticated app shell. Routes under /home, /classroom, /flashcards, etc.
// share the sidebar + mobile nav and require auth + completed onboarding.

import type { ReactNode } from "react";
import { AuthGate } from "@/components/auth-gate";
import { Nav, MobileNav } from "@/components/nav";
import { BackButton } from "@/components/back-button";
import { PageTransition } from "@/components/page-transition";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGate>
      <div className="min-h-screen">
        <Nav />
        <main className="lg:pl-64">
          <div className="mx-auto max-w-5xl px-5 pt-6 pb-24 sm:px-8 lg:px-10">
            <div className="mb-4 -ml-2">
              <BackButton />
            </div>
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
        <MobileNav />
      </div>
    </AuthGate>
  );
}
