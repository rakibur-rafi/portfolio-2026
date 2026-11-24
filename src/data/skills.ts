export type SkillGroup = {
  id: string;
  /** Row number used by the numbered-list design ("01", "02", …) */
  index: string;
  title: string;
  description: string;
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    title: "Frontend & Core",
    description: "The languages, the library and the framework I build with.",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    id: "styling",
    index: "02",
    title: "Styling & UI Systems",
    description: "Utility CSS, component libraries and responsive design systems.",
    tags: ["Tailwind CSS", "shadcn/ui", "DaisyUI", "HeroUI"],
  },
  {
    id: "backend",
    index: "03",
    title: "Backend",
    description: "Server-side code and the APIs behind my interfaces.",
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "database",
    index: "04",
    title: "Database and Auth",
    description: "Databases, sessions and the auth layer that protect user data.",
    tags: ["MongoDB", "MySQL", "PostgreSQL", "JWT", "Better Auth"],
  },
  {
    id: "payment",
    index: "05",
    title: "Payment",
    description: "Checkout, subscriptions and payment integration.",
    tags: ["Stripe"],
  },
  {
    id: "tooling",
    index: "06",
    title: "Deployment and Other Tools",
    description: "The tools I use to design, ship and deploy.",
    tags: ["Git & GitHub", "Vercel", "Render", "Figma"],
  },
];
