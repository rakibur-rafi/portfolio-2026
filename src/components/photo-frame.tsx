import Image from "next/image";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * Professional photo area. Renders the real photo when an optional
 * `photo` path is set in src/data/profile.ts — it never fabricates a photo.
 */
export function PhotoFrame({ context = "tile", className }: { context?: "tile" | "chip"; className?: string }) {
  // `photo` is optional content: absent means the placeholder is shown.
  const photo = (profile as { photo?: string | null }).photo;

  if (photo) {
    return (
      <Image
        src={photo}
        alt={`Portrait of ${profile.name}`}
        fill
        sizes={context === "chip" ? "48px" : "(max-width: 1024px) 60vw, 340px"}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <span className={cn("grid size-full place-items-center bg-muted", className)}>
      <span
        className={cn(
          "font-medium text-muted-foreground/40",
          context === "chip" ? "text-[0.42em]" : "text-6xl"
        )}
      >
        {profile.about.display.chipFallbackInitials}
      </span>
      {context === "tile" ? (
        <span className="absolute bottom-5 text-xs text-muted-foreground/60">
          photo — /public/images
        </span>
      ) : null}
    </span>
  );
}

export function PhotoChip() {
  return (
    <span
      aria-hidden="true"
      className="relative mx-1 inline-block size-[1.15em] overflow-hidden rounded-full align-[-0.18em] text-[1em] ring-1 ring-foreground/10"
    >
      <Image 
        src="/hero.png" alt={`Portrait of ${profile.name}`} fill sizes="48px" className="object-cover" />
    </span>
  );
}