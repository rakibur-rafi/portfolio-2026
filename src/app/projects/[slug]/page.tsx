import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileQuestion } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PromptBox } from "@/components/prompt-box";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const description = project.summary;

  return {
    title: project.name,
    description,
    openGraph: {
      title: `${project.name} · Rakibur Rahaman`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.name} · Rakibur Rahaman`,
      description,
    },
  };
}

function DetailBlock({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("border-t border-border pt-8", className)}>
      <h2 className="text-xs font-medium text-muted-foreground">{label}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4">
          <span aria-hidden="true" className="shrink-0 pt-1 font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm leading-6 text-muted-foreground">{item}</p>
        </li>
      ))}
    </ul>
  );
}

function MarkerList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
          <span className="text-sm leading-6 text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-2xl text-[15px] leading-7 text-muted-foreground">{children}</p>
  );
}

function HeroTile({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-brand-soft via-muted to-brand-2/10 ring-1 ring-foreground/10">
      {project.thumb ? (
        <Image
          src={project.thumb}
          alt={`${project.name} — main screenshot`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <FileQuestion aria-hidden="true" className="size-6 text-muted-foreground/50" />
            <span
              aria-hidden="true"
              className="text-5xl font-semibold text-muted-foreground/30"
            >
              {project.name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
            </span>
            <span className="text-xs text-muted-foreground/60">
              Screenshot coming soon — add it in src/data/projects.ts
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <article className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
      <Reveal mode="mount" y={12}>
        <Button
          nativeButton={false}
          variant="ghost"
          size="sm"
          render={<Link href="/#projects" />}
          className="-ml-2 text-muted-foreground"
        >
          <ArrowLeft />
          All projects
        </Button>

        <header className="mt-8">
          <p className="eyebrow">Project · {project.index}</p>
          <h1 className="display-section mt-3">{project.name}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-2 border-y border-border py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>{project.category}</p>
            <p>
              {project.tech.length > 0
                ? `${project.tech.length} technologies`
                : "Stack to be verified"}
            </p>
            <p>Personal project</p>
          </div>
        </header>
      </Reveal>

      {/* Hero image */}
      <Reveal mode="mount" delay={0.08} y={16}>
        <div className="mt-10">
          <HeroTile project={project} />
        </div>
      </Reveal>

      {/* Content grid */}
      <Reveal y={16}>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
        {/* Main column */}
        <div className="flex flex-col gap-10">
          <DetailBlock label="Overview">
            <BodyText>{project.overview}</BodyText>
          </DetailBlock>

          <DetailBlock label="Objectives">
            <NumberedList items={project.objectives} />
          </DetailBlock>

          <DetailBlock label="Key features">
            <MarkerList items={project.features} />
          </DetailBlock>

          <DetailBlock label="My role">
            <BodyText>{project.role}</BodyText>
          </DetailBlock>

          <DetailBlock label="How it's built">
            {project.implementation.length > 0 ? (
              <MarkerList items={project.implementation} />
            ) : (
              <PromptBox>[ Draft — add real implementation notes in src/data/projects.ts ]</PromptBox>
            )}
          </DetailBlock>

          <DetailBlock label="Challenges & solutions">
            <NumberedList items={project.challenges} />
          </DetailBlock>

           <DetailBlock label="Future Plans">
            <NumberedList items={project.futurePlans} />
          </DetailBlock>

        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card>
            <CardContent className="gap-8">
              <div>
                <h2 className="text-xs font-medium text-muted-foreground">Tech stack</h2>
                {project.tech.length > 0 ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <PromptBox className="mt-3">
                    [ Draft — add the verified stack in src/data/projects.ts ]
                  </PromptBox>
                )}
              </div>

              <div>
                <h2 className="text-xs font-medium text-muted-foreground">Links</h2>
                <div className="mt-3 flex flex-col items-stretch gap-2">
                  {project.links.live ? (
                    <Button
                      nativeButton={false}
                      variant="outline"
                      size="sm"
                      render={
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        />
                      }
                    >
                      Live project
                      <ExternalLink data-icon="inline-end" />
                    </Button>
                  ) : (
                    <PromptBox>
                      Live link — to be published once verified
                    </PromptBox>
                  )}

                  {project.links.github ? (
                    <Button
                      nativeButton={false}
                      variant="outline"
                      size="sm"
                      render={
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        />
                      }
                      title={project.links.unverifiedNote}
                    >
                      GitHub repository
                    </Button>
                  ) : null}
                </div>
       
              </div>

            
            </CardContent>
          </Card>
        </aside>
        </div>
      </Reveal>

      <Reveal>
        <nav
          aria-label="Project pagination"
          className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-2"
        >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="text-xs text-muted-foreground">Previous</p>
            <p className="mt-1.5 text-base font-medium tracking-tight transition-colors group-hover:text-foreground/80">
              {previous.name}
            </p>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group outline-none sm:text-right focus-visible:ring-2 focus-visible:ring-ring"
          >
            <p className="text-xs text-muted-foreground">Next</p>
            <p className="mt-1.5 text-base font-medium tracking-tight transition-colors group-hover:text-foreground/80">
              {next.name}
            </p>
          </Link>
        ) : null}
        </nav>
      </Reveal>
    </article>
  );
}
