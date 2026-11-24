import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <Reveal>
        <SectionHeading label="Projects" lines={["Featured projects"]} />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            className="h-full"
            delay={index * 0.07}
            y={16}
          >
            <ProjectCard project={project} className="h-full" />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-14 flex flex-col items-center gap-4">
        <Button
          nativeButton={false}
          variant="outline"
          render={
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" />
          }
          aria-label="More on GitHub (temporary link to profile)"
        >
          More on GitHub
        </Button>
      </Reveal>
    </section>
  );
}
