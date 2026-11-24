import { ArrowUpRight, Plus } from "lucide-react";
import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  label: string;
  value: string;
  href?: string | null;
  dashed?: boolean;
  /** Note for placeholder cards */
  note?: string;
};

function ContactCard({ label, value, href, dashed, note }: ContactCardProps) {
  const isPlaceholder = dashed || !href;

  const body = (
    <Card
      className={cn(
        "gap-0 py-0 transition-all",
        isPlaceholder
          ? "border-dashed shadow-none ring-foreground/10"
          : "hover:shadow-md hover:ring-brand/25"
      )}
    >
      <CardContent className="flex-row items-center justify-between gap-4 py-5">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p
            className={cn(
              "mt-1.5 truncate text-sm font-medium",
              isPlaceholder && "font-normal text-muted-foreground"
            )}
          >
            {value}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            "grid size-8 shrink-0 place-items-center rounded-full",
            isPlaceholder
              ? "border border-dashed text-muted-foreground"
              : "bg-primary text-primary-foreground"
          )}
        >
          {isPlaceholder ? <Plus className="size-3.5" /> : <ArrowUpRight className="size-3.5" />}
        </span>
      </CardContent>
    </Card>
  );

  if (!href) {
    return (
      <div title={note ?? "Placeholder — set this value in src/data/profile.ts"}>
        {body}
      </div>
    );
  }

  const external = /^https?:\/\//.test(href) || href.startsWith("https://wa.me/");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${label}: ${value}`}
      className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {body}
    </a>
  );
}

export function Contact() {
  const { contact } = profile;
  const hasPlaceholders = !contact.email;

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-brand-soft/80 via-background to-brand-2/10 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
          />
          <div className="relative flex flex-col items-center">
            <p className="eyebrow justify-center">Contact</p>
            <h2 className="display-section mt-4">
              <span className="block">Have an idea in mind?</span>
              <span className="text-gradient-brand block">Let&apos;s work together</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Open to full-stack opportunities and interesting collaborations - reach out
              through any channel below.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
          {contact.email ? (
            <ContactCard label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          ) : (
            <ContactCard
              label="Email"
              value="[ add your email in profile.ts ]"
              dashed
              note="Email placeholder — add your address in src/data/profile.ts to enable a real mailto link."
            />
          )}
          <ContactCard
            label="GitHub"
            value="@rakibur-rafi"
            href={contact.github}
          />
          <ContactCard
            label="LinkedIn"
            value="in/rakibur-rahaman"
            href={contact.linkedin}
          />
        </div>

        {hasPlaceholders ? (
          <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-muted-foreground">
            Bracketed values are placeholders — once real details are added in
            <code className="mx-1 font-mono text-[11px]">src/data/profile.ts</code>
            they become working links automatically.
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
