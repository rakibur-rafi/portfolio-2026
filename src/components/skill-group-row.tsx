"use client";

import { PreviewCard } from "@base-ui/react/preview-card";
import { Badge } from "@/components/ui/badge";
import type { SkillGroup } from "@/data/skills";
import { techIcons, type TechIcon } from "@/data/tech-icons";

const popupClass =
  "z-50 origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-lg shadow-foreground/5 transition-[opacity,transform] duration-150 ease-out data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0";

/** White brand marks need a dark ink so they stay visible on the light tile. */
function iconColor(hex: string) {
  return hex.toUpperCase() === "FFFFFF" ? "#111111" : `#${hex}`;
}

function Glyph({ icon, className }: { icon?: TechIcon; className?: string }) {
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}

/**
 * One row of the skills list. The whole row is the hover target: moving over
 * the index, title, description or tags opens a card listing every skill in
 * the group with its icon and name.
 */
export function SkillGroupRow({ group }: { group: SkillGroup }) {
  const leadIcon = techIcons[group.tags[0]];

  return (
    <li className="border-t border-border/70 transition-colors hover:border-brand/30">
      <PreviewCard.Root>
        <PreviewCard.Trigger
          delay={150}
          closeDelay={120}
          render={
            <div className="grid gap-4 py-7 sm:grid-cols-[2.5rem_minmax(12rem,1fr)_minmax(0,44%)] sm:items-start sm:gap-6" />
          }
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-brand-soft font-mono text-[11px] font-medium text-brand"
          >
            {group.index}
          </span>

          <div className="min-w-0">
            <h3 className="text-lg font-medium tracking-tight">{group.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
          </div>

          <ul
            className="flex flex-wrap gap-1.5 sm:justify-end"
            aria-label={`${group.title} technologies`}
          >
            {group.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary">{tag}</Badge>
              </li>
            ))}
          </ul>
        </PreviewCard.Trigger>

        <PreviewCard.Portal>
          <PreviewCard.Positioner side="bottom" align="start" sideOffset={12}>
            <PreviewCard.Popup className={popupClass}>
              <div className="w-[22rem] max-w-[calc(100vw-2rem)] p-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft"
                    style={leadIcon ? { color: iconColor(leadIcon.hex) } : undefined}
                  >
                    <Glyph icon={leadIcon} className="size-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium tracking-tight">
                      {group.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-tight text-muted-foreground">
                      {group.tags.length} {group.tags.length === 1 ? "skill" : "skills"}
                    </span>
                  </span>
                </div>

                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-border/70 pt-3">
                  {group.tags.map((tag) => {
                    const icon = techIcons[tag];

                    return (
                      <li key={tag} className="flex min-w-0 items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="grid size-6 shrink-0 place-items-center rounded-md bg-white ring-1 ring-border/80"
                          style={icon ? { color: iconColor(icon.hex) } : undefined}
                        >
                          {icon ? (
                            <Glyph icon={icon} className="size-3.5" />
                          ) : (
                            <span className="font-mono text-[9px] font-medium text-foreground">
                              {tag.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </span>
                        <span className="truncate text-[13px] text-foreground/90">
                          {tag}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </PreviewCard.Popup>
          </PreviewCard.Positioner>
        </PreviewCard.Portal>
      </PreviewCard.Root>
    </li>
  );
}
