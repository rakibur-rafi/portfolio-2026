import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <Reveal mode="mount" className="flex flex-col items-center">
        <p className="label-xs text-muted-foreground">Error 404</p>
        <h1 className="display-section mt-4">Page not found</h1>
        <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
          The page you&apos;re after doesn&apos;t exist — it may have moved or the
          address may be off.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button nativeButton={false} render={<Link href="/" />}>Back home</Button>
          <Button nativeButton={false} variant="outline" render={<Link href="/#projects" />}>
            View projects
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
