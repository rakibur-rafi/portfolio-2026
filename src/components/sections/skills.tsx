import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SkillGroupRow } from "@/components/skill-group-row";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <Reveal>
        <SectionHeading label="Skills" lines={["What I work with"]} />

        <ul className="mt-12">
          {skillGroups.map((group) => (
            <SkillGroupRow key={group.id} group={group} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
