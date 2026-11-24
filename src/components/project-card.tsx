import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function cardInitials(name: string) {
  return name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || name.slice(0, 2).toUpperCase();
}

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { slug, name, meta, summary, links } = project;
  const detailHref = `/projects/${slug}`;

  return (
    <Card
      className={cn(
        "gap-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/5 hover:ring-brand/25",
        className
      )}
    >
      <Link
        href={detailHref}
        aria-label={`View details of ${name}`}
        className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-soft via-muted to-brand-2/10 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {project.thumb ? (
          <Image
            src={project.thumb}
            alt={`${name} — screenshot`}
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-[1.02] motion-reduce:transition-none"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center">
            <span
              aria-hidden="true"
              className="text-5xl font-semibold text-muted-foreground/30"
            >
              {cardInitials(name)}
            </span>
            <span className="absolute bottom-4 text-xs text-muted-foreground/70">
              Screenshot coming soon
            </span>
          </span>
        )}
      </Link>

      <CardContent className="gap-4 pt-5">
        {/* Title + GitHub shortcut */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="min-w-0">
            <Link
              href={detailHref}
              className="text-base font-medium tracking-tight outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
            >
              {name}
            </Link>
          </h3>
          {links.github ? (
            <Button
              nativeButton={false}
              variant="ghost"
              size="icon-sm"
              render={
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                />
              }
              aria-label={`${name} on GitHub (temporary link to profile)`}
              title={links.unverifiedNote}
            >
              <GithubIcon className="size-4" />
            </Button>
          ) : null}
        </div>

        {/* Meta row */}
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          {meta.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">·</span> : null}
              {item}
            </span>
          ))}
        </p>

        <p className="text-sm leading-6 text-muted-foreground">{summary}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            nativeButton={false}
            variant="outline"
            size="sm"
            render={<Link href={detailHref} />}
            aria-label={`View details of ${name}`}
          >
            View details
          </Button>
          {links.live ? (
            <Button
              nativeButton={false}
              variant="ghost"
              size="sm"
              render={
                <a href={links.live} target="_blank" rel="noopener noreferrer" />
              }
            >
              Live project
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
