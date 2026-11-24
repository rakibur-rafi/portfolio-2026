

export type ProjectLinks = {
  live: string | null;
  github: string | null;
  unverifiedNote?: string;
};

export type Project = {
  slug: string;
  name: string;
  index: string;
  category: string;
  meta: string[];
  summary: string;
  tagline: string;
  tech: string[];
  overview: string;
  objectives: string[];
  features: string[];
  role: string;
  implementation: string[];
  challenges: string[];
  links: ProjectLinks;
  thumb: string | null;
  gallery: string[];
  futurePlans: string[];
};

export const projects: Project[] = [
  
  {
    slug: "rental-space",
    name: "RentalSpace",
    index: "01",
    category: "Equipment Rental Store",
    meta: ["Equipment Rental", "Full Stack", "Next.js"],
    summary: "An equipment rental platform - browse available equipment, explore categories, list items for rent, and manage rental requests through a streamlined experience.",

    tagline: "The right equipment, whenever you need it.",

    tech: ["Next.js", "Tailwind CSS", "shadcn", "Recharts", "Framer-Motion", "MongoDB", "Better Auth", "Node.js", "Express.js", "Stripe", "JWT"],

    overview:
      "RentalSpace is an equipment rental platform designed to connect equipment owners with people who need tools and machinery. Users can explore available listings, browse by category, view equipment details, and rent equipment through a convenient online experience.",

    objectives: [
      "Build a user-friendly marketplace for renting and listing equipment.",
      "Simplify equipment discovery through categories and featured listings.",
      "Implement secure authentication and role-based access for platform users.",
      "Create a reliable rental workflow for managing equipment availability and rental requests.",
    ],

    features: [
      "Browse and explore equipment listings",
      "Category-based equipment filtering",
      "Equipment details and rental information",
      "Create and manage equipment listings",
      "Rental request management",
      "Dedicated dashboards for equipment owners and renters.",
      "Rental history and booking status tracking.",
      "User authentication and protected routes",
      "Advanced search, filtering, and sorting options.",
      "Interactive analytics for equipment owners and admin.",
    ],

    role: "Personal project - designed and developed end to end, covering frontend development, backend integration, and database management.",

    implementation: [
      "React and TypeScript for building the user interface.",
      "Tailwind CSS and shadcn/ui for responsive UI components.",
      "Node.js and Express.js for backend development.",
      "MongoDB for storing users, equipment listings, and rental information.",
      "JWT and RBAC authentication for securing protected resources.",
    ],

    challenges: [
      "Managing equipment availability and rental quantities.",
      "Designing a rental workflow that connects equipment owners and renters.",
      "Handling authentication and protected API endpoints.",
      "Maintaining consistent data between equipment listings and rental requests.",
    ],

    links: {
      live: "https://rentalspace-web.vercel.app/",
      github: "https://github.com/rakibur-rafi/rentalspace-client",
    },
    thumb: '/images/projects/rentalSpace.png',
    gallery: [],
    futurePlans: [
    "Online rental booking with date-based availability selection.",
    "Equipment reviews and rating system.",
    "Automated booking confirmations and rental notifications.",
    "Improved payment and refund management.",
],
  },

  {
    slug: "social-circle",
    name: "Social Circle",
    index: "02",
    category: "Social Development Events",
    meta: ["Social Events", "Full Stack", "Next.js"],
    summary:
      "A community-driven platform connecting people through social initiatives, volunteer opportunities and meaningful events.",
    tagline: "Connecting Communities, Inspiring Change.",
    tech: ["Next.js", "Tailwind CSS", "shadcn", "MongoDB", "Better Auth", "Node.js", "Express.js", "JWT"],
    overview:
      "Social Circle is a community-driven event platform built with Next.js - a place to discover upcoming social initiatives, create events, and connect with people who want to make a difference.",
    objectives: [
      "Create a platform where users can discover and participate in community-driven events.",
      "Build event creation and management features with a clean, responsive interface.",
      "Implement authentication and user-specific interactions.",
    ],
    features: [
      "Upcoming events discovery",
      "Event creation and management",
      "User authentication and profiles",
      "Join and participate in community events",
      "Responsive event cards and details",
    ],
    role: "Personal project - designed and developed end to end, from interface design to backend integration.",
    implementation: [
      "Built with Next.js, React, and TypeScript.",
      "Tailwind CSS and shadcn/ui for responsive interface components.",
      "MongoDB for event and user data storage.",
      "Better Auth for authentication and session management.",
    ],
    challenges: [
      "Handling authentication and protected routes.",
      "Displaying only upcoming events based on event dates.",
    ],

    links: {
      live: 'https://social-circle-client.vercel.app/',
      github: "https://github.com/rakibur-rafi/social-circle-client",
    },
    thumb: '/images/projects/social-circle.png',
    gallery: [],
    futurePlans: [
  "User profiles with volunteering and participation history.",
  "Automated event reminders and notifications.",
  "Event reviews and participant feedback.",
  "Organizer dashboards with event statistics.",
  "Map-based event discovery.",
  "Community discussions and volunteer networking.",
],
  },
  
  {
    slug: "ardent-clothing",
    name: "Ardent Clothing",
    index: "03",
    category: "E-commerce Platform",
    meta: ["E-commerce", "Full Stack", "MERN"],
    summary:
      "A full-stack clothing store — browse collections, manage shopping carts, authenticate securely, and complete purchases through integrated online payments.",
    tagline: "A complete storefront, from first browse to a paid order.",
    tech: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "Redis / Upstash",
      "Cloudinary",
      "Recharts"
    ],
    overview:
      "Ardent Clothing is a full-stack e-commerce application designed to deliver a complete online shopping experience. Customers can explore clothing collections, manage their shopping carts, authenticate their accounts, and complete purchases through Stripe payment integration.",
    objectives: [
      "Build a complete shopping experience covering product discovery, authentication, cart management, and checkout.",
      "Develop a realistic, stateful application using React, Express.js, and MongoDB.",
      "Integrate third-party services for payment processing, caching, and cloud-based media management.",
      "Implement secure authentication and improve backend performance.",
    ],
    features: [
      "Product catalog and browsing",
      "User authentication and authorization",
      "Shopping cart management",
      "Stripe payment integration",
      "Cloudinary product image hosting",
      "Redis-based caching and rate limiting",
      "Sales and order data visualization",
    ],
    role: "Personal project — designed and developed end to end, covering frontend development, backend implementation, database integration, and third-party service integration.",
    implementation: [
      "React for building the interactive storefront and shopping experience.",
      "Express.js and MongoDB for backend functionality and data management.",
      "JWT-based authentication for securing protected API endpoints.",
      "Stripe integration for payment processing and checkout.",
      "Upstash Redis for API caching and rate limiting.",
      "Cloudinary for product image storage and delivery.",
      "Recharts for dashboard data visualization.",
    ],
    challenges: [
      "Managing shopping cart state throughout the shopping experience.",
      "Integrating Stripe payments into the checkout workflow.",
      "Implementing secure authentication and protected API endpoints.",
      "Improving API performance through caching and rate limiting.",
      "Managing product and order data consistently across the application.",
    ],
    links: {
      live: "https://ardent-clothing.onrender.com/",
      github: "https://github.com/rakibur-rafi/ecommerce-store",
    },
    thumb: '/images/projects/ardent.png',
    gallery: [],
    futurePlans: [
  "Wishlist functionality for saving favorite products.",
  "Product reviews and customer rating system.",
  "Advanced product search, filtering, and sorting.",
  "Discount coupons and promotional campaigns.",
  "Inventory management with low-stock notifications.",
  "Personalized product recommendations.",
],
  },

  {
    slug: "bazardor",
    name: "BazarDor",
    index: "04",
    category: "Market information",
    meta: ["Bengali Market Prices", "Full Stack", "Web Application"],
    summary:
      "A Bengali market-price platform that helps people explore everyday commodity prices through a simple, accessible, and easy-to-navigate interface.",
    tagline: "Know your market. Make informed choices.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB"],
    overview:
      "BazarDor is a Bengali market-price information platform designed to make everyday commodity prices easier to access and understand. It provides a focused browsing experience with Bengali-language content and user authentication.",
    objectives: [
      "Make everyday commodity price information accessible through a clean Bengali-language interface.",
      "Create a responsive experience that works smoothly across mobile and desktop devices.",
      "Build a structured application with TypeScript and modern Next.js features.",
      "Implement a reliable authentication system using Better Auth.",
    ],
    features: [
      "Bengali-language market price information",
      "Commodity price browsing",
      "Responsive and accessible interface",
      "User authentication with Better Auth",
    ],
    role: "Personal project — designed and developed end to end, from interface design to application functionality.",
    implementation: [
      "Next.js App Router with React and TypeScript.",
      "Tailwind CSS and DaisyUI for interface styling and components.",
      "MongoDB for application data storage.",
      "Better Auth for authentication and session management.",
    ],
    challenges: [
      "Presenting market information clearly in Bengali.",
      "Maintaining readable layouts across different screen sizes.",
      "Integrating authentication into the Next.js application.",
    ],
    links: {
      live: "https://bazar-dor-red-theta.vercel.app/",
      github: "https://github.com/rakibur-rafi/bazar-dor",
    },
    thumb: '/images/projects/bazar-dor.png',
    gallery: [],
    futurePlans: [
  "Historical price tracking with interactive charts.",
  "Search and filtering by commodity and category.",
  "User-submitted market prices with verification.",
  "Price change notifications for selected commodities.",
  "Market trend analysis and price insights.",
  "Location-based market price discovery.",
],
  }
];


export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

