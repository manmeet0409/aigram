"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

interface HeaderProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } | null;
  } | null;
}

export function Header({ session }: HeaderProps) {
  const pathname = usePathname();

  const isActive = useCallback(
    (path: string) => pathname === path,
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/blog"
          className="flex items-center space-x-2 font-bold text-xl transition-colors hover:text-primary"
          aria-label="Aigram - Home"
        >
          <span className="text-primary">Aigram</span>
        </Link>

        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/blog")
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {session.user?.name}
              </span>
              <Link
                href="/api/auth/signout"
                className="text-sm font-medium text-muted-foreground hover:text-red-600 transition-colors"
              >
                Sign out
              </Link>
            </div>
          ) : (
            <Link
              href="/api/auth/signin"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
