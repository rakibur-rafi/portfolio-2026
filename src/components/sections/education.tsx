import { education } from "@/data/education";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

function FieldValue({
  field,
  label,
}: {
  field: { value: string | null; placeholder: string };
  label: string;
}) {
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-sm leading-6">
        {field.value ? (
          field.value
        ) : (
          <span className="text-muted-foreground">{field.placeholder}</span>
        )}
      </dd>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <Reveal>
        <SectionHeading
          label="Education"
          lines={["Academic background"]}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-12">
          <div className="min-w-0">
            <h3 className="text-lg font-medium tracking-tight">{education.degree}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{education.status}</p>
          </div>

          <dl className="space-y-6 rounded-2xl bg-gradient-to-b from-brand-soft/60 to-transparent p-6 ring-1 ring-border/70">
            <FieldValue field={education.institution} label="Institution" />
            <FieldValue field={education.period} label="Study period" />
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
