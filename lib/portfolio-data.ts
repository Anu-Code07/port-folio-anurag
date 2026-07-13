export const heroTypewriterLines = [
  "Building Digital Universes",
  "Flutter Engineer. Web Architect. Experience Creator.",
  "Crafting futuristic digital experiences.",
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
  github: string;
  demo?: string;
  imageUrl?: string;
  highlights: string[];
  solved: string;
}

export const projects: Project[] = [
  {
    title: "NebulaPay Fintech Core",
    description:
      "A cross-platform Flutter + Next.js fintech suite with real-time risk scoring and fraud prevention controls.",
    techStack: ["Flutter", "Dart", "Node.js", "GraphQL", "AWS"],
    github: "https://github.com",
    demo: "https://vercel.com",
    highlights: [
      "Event-driven architecture with domain boundaries",
      "Offline-first wallet synchronization",
      "Latency reduced by 41% through cache strategy",
    ],
    solved:
      "Solved payment concurrency and reconciliation drift by introducing deterministic transaction snapshots.",
  },
  {
    title: "OrbitOps Dev Platform",
    description:
      "A command center dashboard for multi-region deployments, feature flags, and CI telemetry with cinematic UX.",
    techStack: ["Next.js", "TypeScript", "Docker", "CI/CD", "REST APIs"],
    github: "https://github.com",
    demo: "https://vercel.com",
    highlights: [
      "Live pipeline observability and release gates",
      "Progressive hydration for high-performance metrics panels",
      "Adaptive alerting with smart noise suppression",
    ],
    solved:
      "Reduced incident response time using integrated runbook actions and contextual trace links.",
  },
  {
    title: "Astra SDK Suite",
    description:
      "A developer-first SDK and docs portal powering AI automation features for enterprise workflow products.",
    techStack: ["TypeScript", "Node.js", "Firebase", "GraphQL", "Docker"],
    github: "https://github.com",
    demo: "https://vercel.com",
    highlights: [
      "Typed APIs with resilient retry policies",
      "Versioned SDK release channels",
      "Telemetry instrumentation with privacy controls",
    ],
    solved:
      "Fixed breaking contract changes by implementing schema diff checks in CI and compatibility adapters.",
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
      "Kept travel memories private and available offline while making sync optional when users want it.",
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
      "Reduced habit-tracking friction with account-free local data and lightweight progress feedback.",
  },
  {
    title: "Neuron",
    description:
      "A context operating system for AI clients with structured project memory, retrieval, and MCP tooling.",
    techStack: ["Next.js 15", "Supabase", "Postgres", "pgvector", "MCP"],
    github: "https://github.com/Anu-Code07/neuron",
    demo: "https://neuron-azure.vercel.app",
    highlights: [
      "Hosted dashboard with project memory setup",
      "31 MCP tools for remembering, retrieving, and managing context",
      "Hybrid retrieval with knowledge graph and Groq-powered AI tools",
    ],
    solved:
      "Gave AI coding tools durable, project-aware memory without exposing backend credentials to clients.",
  },
  {
    title: "SpecDrive",
    description:
      "An AI-agnostic frontend spec-driven development framework for Flutter, Next.js, and React Native.",
    techStack: ["TypeScript", "CLI", "MCP", "Flutter", "Next.js"],
    github: "https://github.com/Anu-Code07/spec-copilot",
    demo: "https://anu-code07.github.io/spec-copilot/",
    highlights: [
      "Kiro-style requirements, gap analysis, design, and task documents",
      "First-class support for Flutter, Next.js, and React Native",
      "CLI and MCP workflows for frontend implementation review",
    ],
    solved:
      "Created a structured frontend planning path from feature idea to implementation tasks with AI assistance.",
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
  { label: "Jump to Projects", value: "projects", selector: "#projects" },
  { label: "Jump to Experience", value: "experience", selector: "#experience" },
  { label: "Jump to Game Zone", value: "game", selector: "#game-zone" },
  { label: "Open Mission Control", value: "contact", selector: "#contact" },
];
