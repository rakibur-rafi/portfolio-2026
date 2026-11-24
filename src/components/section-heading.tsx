import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Tiny uppercase label */
  label: string;
  /** Section title — one array entry per line */
  lines: string[];
  className?: string;
};

export function SectionHeading({ label, lines, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-end justify-between gap-8", className)}>
      <div className="min-w-0">
        <p className="eyebrow">{label}</p>
        <h2 className="display-section mt-3">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

    </div>
  );
}
