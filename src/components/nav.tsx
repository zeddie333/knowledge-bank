"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Home,
  Layers,
  Library,
  Gamepad2,
  Search,
  Network,
  MessageCircle,
  Beaker,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { TempleLogo } from "@/components/logo";
import { useStore, useHydrated } from "@/lib/store";
import { cn } from "@/lib/utils";

const PRIMARY = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/classroom", label: "Classroom", icon: BookOpen },
  { href: "/study", label: "Study", icon: Layers },
  { href: "/play", label: "Let's Play", icon: Gamepad2 },
  { href: "/knowledge-bank", label: "Knowledge Bank", icon: Library },
];

const SECONDARY = [
  { href: "/search", label: "Search", icon: Search },
  { href: "/tutor", label: "Tutor", icon: MessageCircle },
  { href: "/knowledge-web", label: "Knowledge Web", icon: Network },
  { href: "/thought-experiments", label: "Thought Experiments", icon: Beaker },
];

function NavLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: typeof Home;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "qz-chip flex items-center gap-3 rounded-md px-3 py-2 text-sm font-sans transition-colors",
        active
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const username = useStore((s) => s.username);
  const xp = useStore((s) => s.xp);

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:border-r lg:border-border lg:bg-card/40">
      <div className="flex h-16 items-center gap-3 px-6 border-b border-border">
        <Link href="/home" className="flex items-center gap-2.5 text-foreground">
          <TempleLogo className="h-7 w-auto shrink-0" strokeWidth={2.5} />
          <span className="font-serif text-lg leading-none tracking-tight">Knowledge Bank</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {PRIMARY.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={pathname === item.href || pathname.startsWith(item.href + "/")}
            />
          ))}
        </div>
        <div className="mt-6 mb-2 px-3 font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
          More
        </div>
        <div className="space-y-1">
          {SECONDARY.map((item) => (
            <NavLink
              key={item.href}
              {...item}
              active={pathname === item.href || pathname.startsWith(item.href + "/")}
            />
          ))}
        </div>
      </nav>
      <div className="border-t border-border p-4">
        <Link
          href="/profile"
          className="qz-chip flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted"
        >
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center font-serif">
            {hydrated && username ? username[0]?.toUpperCase() : "·"}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate font-sans text-sm">
              {hydrated && username ? username : "Sign in"}
            </div>
            <div className="font-sans text-xs text-muted-foreground">
              {hydrated ? `${xp.toLocaleString()} XP` : "—"}
            </div>
          </div>
        </Link>
        <div className="mt-2 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}

// Mobile bottom-bar — primary routes only.
export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5">
        {PRIMARY.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 py-2 font-sans text-[10px]",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="truncate max-w-[5rem]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
