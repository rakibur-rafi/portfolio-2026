import { ArrowRight, Code2, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedInIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  const { contact, rail } = profile;

  const railItems = [
    { text: rail.left, dot: "bg-brand" },
    { text: rail.center, dot: "bg-brand-2" },
    { text: rail.right, dot: "bg-brand-3" },
  ].filter((item) => item.text.trim().length > 0);

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-5xl px-5 pt-16 pb-14 sm:px-8 lg:pt-24">
        <Reveal
          mode="mount"
          className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand-soft/70 px-3 py-1.5 text-xs font-medium text-accent-foreground">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/50 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              Open to Opportunities
            </span>

            <h1 className="display-hero">
              <span className="block">Full Stack</span>
              <span className="text-gradient-brand block">Web Developer</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {profile.heroIntro}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                nativeButton={false}
                render={<Link href="#projects" />}
                aria-label="View projects — scroll to projects section"
                className="shadow-sm shadow-brand/25"
              >
                View projects
                <ArrowRight data-icon="inline-end" />
              </Button>
              {profile.resume ? (
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={
                    <a
                      href={profile.resume}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Download Resume
                </Button>
              ) : (
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={<Link href="#contact" />}
                  aria-label="Resume not yet available — get in touch instead"
                  title="Resume placeholder — drop your PDF in /public/resume and set profile.resume in src/data/profile.ts"
                >
                  Download Resume
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Button
                nativeButton={false}
                variant="outline"
                size="icon"
                className="rounded-full text-muted-foreground hover:border-brand/30 hover:text-brand"
                render={
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" />
                }
                aria-label="GitHub profile"
              >
                <GithubIcon className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="icon"
                className="rounded-full text-muted-foreground hover:border-brand/30 hover:text-brand"
                render={
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" />
                }
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="icon"
                render={
                  contact.email ? <a href={`mailto:${contact.email}`} /> : <span />
                }
                aria-label={
                  contact.email ? "Email" : "Email (placeholder, not yet configured)"
                }
                title={
                  contact.email
                    ? "Email"
                    : "Email not configured yet — add it in src/data/profile.ts"
                }
                className={
                  contact.email
                    ? "rounded-full text-muted-foreground hover:border-brand/30 hover:text-brand"
                    : "rounded-full opacity-40"
                }
              >
                <Mail className="size-4" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.75rem] bg-gradient-to-br from-brand/25 via-brand-2/15 to-brand-3/20 blur-2xl"
            />
              <div className="relative z-1 mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] p-1.5 shadow-xl shadow-brand/10 ring-1 ring-foreground/10 sm:max-w-[320px] lg:mx-0 lg:max-w-[380px] dark:from-[oklch(0.58_0.06_265)] dark:via-[oklch(0.5_0.05_250)] dark:to-[oklch(0.45_0.04_225)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/hero1.png"
                    alt={`Portrait of ${profile.name}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                    className="object-cover mix-blend-multiply"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent"
                  />
                </div>
              </div>

            <div className="absolute -bottom-5 left-3 z-2 flex items-center gap-2.5 rounded-2xl border border-border/80 bg-background/90 px-3.5 py-2.5 shadow-lg shadow-foreground/5 backdrop-blur sm:-left-2">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-xl bg-brand-soft text-brand"
              >
                <Code2 className="size-4" />
              </span>
              <div>
                <p className="text-[10px] font-medium  text-muted-foreground uppercase">
                  Full stack
                </p>
                <p className="text-sm font-medium">React · Node · TypeScript</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal mode="mount" delay={0.15} className="max-sm:hidden">
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="mt-5 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            {railItems.map((item) => (
              <p key={item.text} className="flex items-center gap-2">
                <span aria-hidden="true" className={`size-1.5 rounded-full ${item.dot}`} />
                {item.text}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
