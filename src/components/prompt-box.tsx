import { cn } from "@/lib/utils";

/**
 * Clearly-identified draft state. Rendered whenever real content was not
 * supplied (challenges, tech lists, …) instead of inventing facts.
 */
export function PromptBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed bg-muted/40 p-4 text-xs leading-5 text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
