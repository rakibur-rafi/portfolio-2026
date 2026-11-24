import Link from "next/link";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { PhotoChip } from "@/components/photo-frame";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  const { about, facts } = profile;

  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow">About</p>

        <p className="display-copy mt-6 max-w-3xl text-balance">
          {about.display.lead} <PhotoChip /> {about.display.continuation}{" "}
          <span className="text-foreground">{about.display.accent}</span>
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col gap-10">
        {about.story.map((block, index) => (
          <Reveal key={block.title} delay={index * 0.06} y={14}>
            <div className="grid gap-2 border-t border-border pt-8 sm:grid-cols-[10rem_1fr] sm:gap-10">
              <p className="label-xs flex items-center gap-2 self-start sm:pt-2 text-muted-foreground">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand/60" />
                {block.title}
              </p>
              <p className="max-w-2xl text-[15px] leading-7 text-muted-foreground">
                {block.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 max-w-2xl">
          <p className="text-base leading-7 text-foreground/90">{about.closing}</p>
          <div className="mt-6">
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="#contact" />}
              aria-label="Get in touch — scroll to contact section"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 h-px bg-gradient-to-r from-border via-border/60 to-transparent" />
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <li key={fact.label}>
              <p className="text-3xl font-semibold tracking-tight text-brand">
                {fact.value}
                <span className="text-muted-foreground">{fact.suffix}</span>
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {fact.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
