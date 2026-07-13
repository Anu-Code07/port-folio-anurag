export const heroTypewriterLines = [
  "Front End Developer",
  "React. React Native. Flutter. Next.js.",
  "Building scalable consumer products and developer tooling.",
];

export const skills = [
  "Flutter",
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "Dart",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Framer Motion",
  "Recoil",
  "Redux Toolkit",
  "Zustand",
  "Responsive UI",
  "Design Systems",
  "Accessibility",
  "Web Performance",
  "Maestro",
  "Node.js",
  "Firebase",
  "AWS",
  "Docker",
  "CI/CD",
  "GraphQL",
  "REST APIs",
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  imageUrl?: string;
  highlights: string[];
  solved: string;
}

export const projects: Project[] = [
  {
    title: "Neuron",
    description:
      "An AI context engine that stores, organizes, and retrieves project memory across tools and sessions.",
    techStack: ["Next.js 15", "Supabase", "Postgres", "pgvector", "MCP"],
    github: "https://github.com/Anu-Code07/neuron",
    demo: "https://neuron-azure.vercel.app",
    highlights: [
      "Structured memory for Cursor, Claude, and MCP clients",
      "31 MCP tools for remembering, retrieving, and managing context",
      "Hybrid retrieval with knowledge graph and Groq-powered AI tools",
    ],
    solved:
      "Gives AI coding tools durable, project-aware memory without exposing backend credentials to clients.",
  },
  {
    title: "SpecDrive",
    description:
      "A spec-driven development framework that turns written specs into structured implementation plans.",
    techStack: ["TypeScript", "CLI", "MCP", "Flutter", "Next.js"],
    github: "https://github.com/Anu-Code07/spec-copilot",
    demo: "https://anu-code07.github.io/spec-copilot/",
    highlights: [
      "Kiro-style requirements, gap analysis, design, and task documents",
      "First-class support for Flutter, Next.js, and React Native",
      "CLI and MCP workflows for frontend implementation review",
    ],
    solved:
      "Creates a structured frontend planning path from feature idea to implementation tasks with AI assistance.",
  },
  {
    title: "DesignToCode MCP",
    description:
      "An MCP server that takes Figma designs and converts them directly into implementation-ready code.",
    techStack: ["MCP", "TypeScript", "Figma", "AI tooling", "Frontend"],
    github: "https://github.com/Anu-Code07/figma-to-code",
    highlights: [
      "Bridges Figma design context into coding assistants",
      "Targets faster handoff from visual design to frontend implementation",
      "Built around AI-assisted developer workflows",
    ],
    solved:
      "Reduces the gap between Figma files and maintainable frontend code in AI-native development loops.",
  },
  {
    title: "react-native-overlay",
    description:
      "An in-app developer tools overlay for React Native that records runtime activity for faster debugging.",
    techStack: ["React Native", "TypeScript", "Dev tools", "Networking", "Debugging"],
    github: "https://github.com/Anu-Code07/rn-debug-overlay",
    highlights: [
      "Captures errors, network requests, and runtime activity",
      "Designed for debugging directly on device",
      "Speeds up feedback loops without leaving the app",
    ],
    solved:
      "Makes React Native debugging faster by keeping critical runtime signals visible inside the app.",
  },
  {
    title: "Chat Application",
    description:
      "A Discord-style chat app supporting text chat, voice chat, video calls, and server-based collaboration.",
    techStack: ["Next.js", "Zustand", "Prisma ORM", "SQL", "Realtime"],
    github: "https://github.com/Anu-Code07/discord",
    demo: "https://discord-nine-tawny.vercel.app/",
    highlights: [
      "Text chat, voice chat, and video call support",
      "Discord-style server and channel experience",
      "State-managed frontend with persistent backend data",
    ],
    solved:
      "Combines realtime collaboration patterns with a polished Next.js frontend experience.",
  },
  {
    title: "The Anurag Store",
    description:
      "An e-commerce site with admin-controlled merchandising, filtering, search, cart, and checkout flows.",
    techStack: ["Next.js", "Prisma ORM", "SQL", "Zustand", "React Query"],
    github: "https://github.com/Anu-Code07/ecom-store",
    demo: "https://ecom-store-sigma.vercel.app/",
    highlights: [
      "Admin dashboard for images, prices, banners, and campaigns",
      "Filtering, search, cart, and checkout experience",
      "React Query and Zustand for server/client state boundaries",
    ],
    solved:
      "Lets admins update storefront content and campaign banners without code changes.",
  },
  {
    title: "Amazon Price Tracker",
    description:
      "A React Native price tracker built after manually monitoring PS5 prices and wanting automatic drop alerts.",
    techStack: ["React Native", "JavaScript", "Mobile UI", "Alerts", "Automation"],
    highlights: [
      "Monitors product prices automatically",
      "Sends alerts when tracked products drop in price",
      "Turns a manual buying workflow into a mobile utility",
    ],
    solved:
      "Automates repetitive price checks so users can act quickly when a product becomes affordable.",
  },
  {
    title: "Orbit Notes",
    description:
      "A local-first Flutter travel journal for trips, daily entries, photos, map pins, and optional cloud sync.",
    techStack: ["Flutter", "Dart", "Maps", "Local-first storage", "Cloud sync"],
    github: "https://github.com/Anu-Code07/orbit-notes",
    imageUrl: "https://raw.githubusercontent.com/Anu-Code07/orbit-notes/main/docs/screenshots/login.png",
    highlights: [
      "Trip, day, and entry structure for travel journals",
      "Entry-linked photos and location pins",
      "AI trip planning that can become a real journal",
    ],
    solved:
      "Keeps travel memories private and available offline while making sync optional when users want it.",
  },
  {
    title: "Pulse Habit Tracker",
    description:
      "A calm habit tracker and focus timer for small daily rituals with private, on-device progress tracking.",
    techStack: ["Flutter", "Dart", "Local storage", "Widgets", "Focus timer"],
    github: "https://github.com/Anu-Code07/habbit-tracker",
    imageUrl: "https://raw.githubusercontent.com/Anu-Code07/habbit-tracker/main/docs/screenshots/today.png",
    highlights: [
      "Daily habits, streaks, and weekly insight views",
      "Pomodoro and free-focus sessions",
      "Home screen widget for habits and focus minutes",
    ],
    solved:
      "Reduces habit-tracking friction with account-free local data and lightweight progress feedback.",
  },
];

export interface Experience {
  period: string;
  role: string;
  company: string;
  mission: string;
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    period: "Aug 2025 - Present",
    role: "SDE 2",
    company: "Scapia",
    mission:
      "Building high-impact travel and commerce experiences across Scapia's app ecosystem.",
    achievements: [
      "Built Scapia Store from scratch, now driving INR 1.2 crore in monthly transaction volume",
      "Built an automated testing framework using Maestro across all Scapia verticals to catch UI regressions before release",
      "Built Scapia Buses to scale the vertical as a new travel offering",
      "Built Spitha, a server-driven UI framework for instant home page and category/vertical landing page merchandising without app releases",
    ],
  },
  {
    period: "Sep 2023 - Aug 2025",
    role: "SDE 1",
    company: "Niyo: Global Cards for Travel",
    mission:
      "Delivered mobile, payments, rewards, and internal tooling across Niyo's travel finance products.",
    achievements: [
      "One of the first developers to champion React Native in a Flutter-dominant environment",
      "Developed CRED-style loyalty rewards with coins for flight booking and visa flows",
      "Worked on multi-bank integrations with Utkarsh Small Finance Bank and SBM for the NiyoX app",
      "Created a payment SDK plugin supporting payments through multiple gateways including Razorpay and PayU",
      "Built a React dashboard for the PG SDK and Rewards to help operations teams manage transactions",
      "Developed a React Native agent onboarding app for INSTA Card KIT management",
    ],
  },
  {
    period: "Jul 2022 - Aug 2023",
    role: "SDE 1, UI",
    company: "Karbon Cards",
    mission:
      "Built TypeScript dashboards and internal workflows for forex, operations, and compliance teams.",
    achievements: [
      "Gained hands-on experience with TypeScript and Recoil for state management",
      "Built a Forex Dashboard for invoice uploads and payment details while internal teams handled processing",
      "Built Operations Dashboard tools for chat, file view/download, transaction tracking, and internal transaction support",
      "Built CA Dashboard flows for 15CA/CB uploads, verification, and CA assignments for document preparation",
    ],
  },
  {
    period: "Jan 2022 - Jun 2022",
    role: "SDE Intern",
    company: "Juspay",
    mission:
      "Improved checkout and payment customization experiences across Juspay payment products.",
    achievements: [
      "Improved the payments page experience",
      "Worked on Hypercheckout, enabling brands to customize payment pages",
    ],
  },
];

export const commandActions = [
  { label: "Jump to Hero", value: "hero", selector: "#hero" },
  { label: "Jump to Profile", value: "profile", selector: "#about" },
  { label: "Jump to Projects", value: "projects", selector: "#projects" },
  { label: "Jump to Experience", value: "experience", selector: "#experience" },
  { label: "Jump to Game Zone", value: "game", selector: "#game-zone" },
  { label: "Open Contact", value: "contact", selector: "#contact" },
];
