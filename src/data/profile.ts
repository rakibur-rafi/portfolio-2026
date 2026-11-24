
export type Fact = { value: string; suffix?: string; label: string };

export const profile = {
  name: "Mohammad Rakibur Rahaman",

  wordmark: "RAKIBUR",

  role: "Full Stack Web Developer",

  headline: ["Full Stack", "Web Developer"],

  heroIntro:
    "I build complete web products - crafting clean, responsive interfaces with React, Next.js and TypeScript, alongside server-side development with Node.js.",

  rail: {
    left: "",
    center: "",
    right: "Chattogram, Bangladesh",
  },

  contact: {
    email: "rakibur8408@gmail.com" as string | null,

    github: "https://github.com/rakibur-rafi",
    linkedin: "https://linkedin.com/in/rakibur-rahaman/",
  },

  resume: '/resume/Rakibur-Resume.pdf',
  about: {

    display: {
      lead: "Hi, I'm",
      chipFallbackInitials: "MR",
      continuation:
        "Rakibur - a full-stack developer who enjoys turning ideas into intuitive, well-crafted digital experiences.",
      accent:
        "I care about the details: interfaces that solve real problems and feel considered down to the last pixel.",
    },

    story: [
      {
        title: "The journey",
        body: "My route in began with a CSE degree and no prior knowledge, but building for the web is what really pulled me in. Watching an interface change the moment I hit save still feels a little magical, and it's what made me commit to web development",
      },
      {
        title: "The work I enjoy",
        body: "I enjoy making clean, considered UI. Give me a rough idea and I'll happily spend hours on spacing, type and interaction states until it feels right - then wire up the components, data and APIs behind it so the polish holds up in production.",
      },
      {
        title: "Beyond the screen",
        body: "Outside the editor I'm a hobbyist photographer and an enthusiastic traveller. Photography sharpened my eye for framing and light, and travelling keeps me curious.",
      },
    ] as { title: string; body: string }[],

    closing:
      "Curious by default and calm under a deadline, I take feedback well and believe restraint is a feature, not a limitation. Right now I'm looking for opportunities to keep deepening my understanding of the web platform, and ship things people genuinely find useful.",
  },

  footerTagline:
    "Building complete web products - from polished interfaces to the APIs behind them.",

  facts: [
    { value: "CSE", label: "Undergraduate" },
    { value: "E-commerce", suffix: "", label: "Domain Expertise" },
    { value: "20", suffix: "+", label: "Technologies across my work" },
  ] as Fact[],
} as const;

export type Profile = typeof profile;
