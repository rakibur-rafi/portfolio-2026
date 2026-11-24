import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-muted/40 to-background">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      {/* Top row */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {profile.wordmark}
            <span aria-hidden="true" className="text-brand">
              .
            </span>
          </Link>
          <p className="max-w-[280px] text-sm leading-6 text-muted-foreground">
            {profile.footerTagline}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:gap-16">
          {/* Menu */}
          <nav aria-label="Footer">
            <p className="text-xs text-muted-foreground">Main page</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href === "#home" ? "/" : `/${link.href}`}
                    className="text-sm text-muted-foreground outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs text-muted-foreground">Social</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-muted-foreground">
                {profile.contact.email ? (
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {profile.contact.email}
                  </a>
                ) : (
                  <span>
                    Email — <span className="font-medium">[ add yours in profile.ts ]</span>
                  </span>
                )}
              </li>
            </ul>

            {/* Back to top */}
            <Button
              nativeButton={false}
              variant="outline"
              size="icon"
              render={<Link href="/#home" />}
              aria-label="Back to top"
              className="mt-6"
            >
              <ArrowUp />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-center sm:px-8">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
