"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<string | undefined>(
    isHome ? "home" : undefined
  );
  const [open, setOpen] = useState(false);

  // Active-section tracking (home page only). activeId is only read while
  // isHome is true, so no reset effect is needed on route change.
  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .map((link) => link.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      // A horizontal band around the viewport center decides the active link
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Wordmark */}
        <Link
          href={isHome ? "#home" : "/"}
          className="text-sm font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {profile.wordmark}
          <span aria-hidden="true" className="text-brand">
            .
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = isHome && activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={hrefFor(link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "font-medium text-brand"
                        : "text-muted-foreground hover:text-brand"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<Link href={hrefFor("#contact")} />}
            className="hidden border-brand/30 bg-brand-soft/50 text-accent-foreground hover:border-brand/40 hover:bg-brand-soft sm:inline-flex"
            aria-label="Hire me — go to contact section"
          >
            Hire me
          </Button>

          <ThemeToggle />

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-sm font-semibold tracking-tight">
                  {profile.wordmark}
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col px-4">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={hrefFor(link.href)}
                        aria-current={
                          isHome && activeId === link.href.slice(1)
                            ? "true"
                            : undefined
                        }
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-md py-2.5 text-sm text-muted-foreground outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring aria-[current=true]:font-medium aria-[current=true]:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
