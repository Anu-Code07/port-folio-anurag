// Everything on the page, from his resume, his repositories and their real commit history.

export const person = {
  name: "Anurag Kumar Singh",
  role: "SDE 2 at Scapia",
  email: "anurag.kr.singh07@gmail.com",
  github: "https://github.com/Anu-Code07",
  linkedin: "https://www.linkedin.com/in/anurag-kumar-singh-14473718a/",
};

export type Media =
  | { kind: "video"; src: string; poster: string; alt: string }
  | { kind: "browser"; src: string; alt: string; url: string }
  | { kind: "phones"; shots: { src: string; alt: string }[] };

export interface Project {
  slug: string;
  name: string;
  /** Real short hash and date of the repository's latest commit. */
  hash: string;
  date: string;
  line: string;
  built: string;
  hard: string;
  facts: string[];
  stack: string[];
  links: { label: string; href: string }[];
  media: Media;
}

export const projects: Project[] = [
  {
    slug: "mobius",
    name: "Mobius",
    hash: "65cd262",
    date: "2026-11-12",
    line: "Lets AI agents use your real phone, and makes them ask before they pay for anything. Even biryani.",
    built:
      "An MCP server and its own device driver in Rust for Android phones, iPhones and simulators. The agent reads a masked screen and taps through real apps; every action is re-checked against the live screen, gated by policy, verified and written to a signed audit log.",
    hard:
      "Real apps lie: iOS containers repeat their children's labels, Pay buttons hide behind spoofed accessibility text, unlabeled cards only exist as pixels. Mobius reads the pixels with OCR when labels fail, and still stops a payment hidden under any of it.",
    facts: ["87 tools", "44 of 44 attacks stopped", "Approval with Touch ID", "Rust driver"],
    stack: ["TypeScript", "Rust", "MCP", "Android", "iOS", "WebDriverAgent"],
    links: [
      { label: "Website", href: "https://anu-code07.github.io/mobius/" },
      { label: "GitHub", href: "https://github.com/Anu-Code07/mobius" },
    ],
    media: {
      kind: "video",
      src: "/work/mobius-approval.mp4",
      poster: "/work/mobius-poster.png",
      alt: "On a real iPhone, an agent reaches Pay ₹128 on Swiggy and the Mobius approval dialog holds the tap until a human decides",
    },
  },
  {
    slug: "neuron",
    name: "Neuron",
    hash: "7534709",
    date: "2026-07-25",
    line: "Memory for AI coding tools, so you stop re-explaining your architecture every new chat.",
    built:
      "A context engine with a Next.js dashboard, Supabase with Postgres and pgvector behind row-level security, and an MCP server on npm. One API key connects Cursor, Claude or any MCP client; the hosted backend does hybrid retrieval over a knowledge graph.",
    hard:
      "Retrieval has to return the right five memories, not fifty similar ones, and clients must never hold backend credentials. Groq runs server-side for extraction, reranking and duplicate detection, so the client only ever sees one key.",
    facts: ["31 MCP tools", "Hybrid retrieval", "Knowledge graph", "One-key setup"],
    stack: ["Next.js 15", "Supabase", "Postgres", "pgvector", "MCP", "Groq"],
    links: [
      { label: "Website", href: "https://neuron-azure.vercel.app" },
      { label: "GitHub", href: "https://github.com/Anu-Code07/neuron" },
    ],
    media: { kind: "browser", src: "/work/neuron.png", url: "neuron-azure.vercel.app", alt: "Neuron's memory graph: ordered project facts on the left become a knowledge graph the AI can use on the right" },
  },
  {
    slug: "specdrive",
    name: "SpecDrive",
    hash: "83788d0",
    date: "2026-07-20",
    line: "Spec-driven development for frontend teams. From “we need a feature” to tasks, without the vibes.",
    built:
      "A CLI and MCP framework that writes Kiro-style specs (requirements, gap analysis against the existing codebase, a UI design document, then tasks) with first-class Flutter, Next.js and React Native support. It works with Cursor, Claude Code, Codex and others.",
    hard:
      "Backend teams have OpenAPI; frontend teams had nothing that reasons about screens, state, navigation and accessibility. The design step describes the UI itself, and each step waits for approval before the next.",
    facts: ["Flutter, Next.js, React Native", "Gap analysis vs. your code", "CLI and MCP"],
    stack: ["TypeScript", "CLI", "MCP", "Flutter", "Next.js", "React Native"],
    links: [
      { label: "Website", href: "https://anu-code07.github.io/spec-copilot/" },
      { label: "GitHub", href: "https://github.com/Anu-Code07/spec-copilot" },
    ],
    media: { kind: "browser", src: "/work/specdrive.png", url: "anu-code07.github.io/spec-copilot", alt: "The SpecDrive website: frontend spec-driven development for Flutter, Next.js and React Native" },
  },
  {
    slug: "pulse",
    name: "Pulse",
    hash: "2114da7",
    date: "2026-07-14",
    line: "A calm habit tracker and focus timer. No account, no cloud, no guilt trips.",
    built:
      "A Flutter app for iPhone and Android: daily habits with streaks, Pomodoro and free focus sessions, weekly insights and a home-screen widget. On iPhone the timer lives on the Lock Screen and in the Dynamic Island.",
    hard:
      "Feeling light while doing real platform work: Live Activities, widgets and a timer that survives the app being closed, with no account and all data on the device.",
    facts: ["Lock Screen and Dynamic Island", "Home-screen widget", "No account"],
    stack: ["Flutter", "Dart", "Live Activities", "Widgets", "Local storage"],
    links: [{ label: "GitHub", href: "https://github.com/Anu-Code07/habbit-tracker" }],
    media: {
      kind: "phones",
      shots: [
        { src: "/work/pulse-today.png", alt: "Pulse today screen with colourful habits and streaks" },
        { src: "/work/pulse-focus.png", alt: "Pulse focus timer" },
        { src: "/work/pulse-insights.png", alt: "Pulse weekly insights" },
      ],
    },
  },
  {
    slug: "orbit",
    name: "Orbit Notes",
    hash: "804f778",
    date: "2026-07-13",
    line: "A quiet place for trips. Journal by the day, pin the places, sync only if you want to.",
    built:
      "A local-first Flutter travel journal. Trips hold days, days hold entries, entries keep their photos and map pins. AI trip planning becomes a real journal, and cloud sync is optional.",
    hard:
      "Offline first without losing anything: everything works with no network or account, and sign-in only exists for people who want sync.",
    facts: ["Offline first", "Map pins", "AI trip planning"],
    stack: ["Flutter", "Dart", "Maps", "Local-first storage", "Cloud sync"],
    links: [{ label: "GitHub", href: "https://github.com/Anu-Code07/orbit-notes" }],
    media: {
      kind: "phones",
      shots: [
        { src: "/work/orbit-home.png", alt: "Orbit Notes home with trips" },
        { src: "/work/orbit-trip-detail.png", alt: "Orbit Notes trip detail with days and entries" },
        { src: "/work/orbit-login.png", alt: "Orbit Notes welcome screen" },
      ],
    },
  },
];

export interface Role {
  company: string;
  role: string;
  period: string;
  summary: string;
  shipped: string[];
}

export const roles: Role[] = [
  {
    company: "Scapia",
    role: "SDE 2",
    period: "Aug 2025 to now",
    summary: "Travel and commerce across Scapia's apps.",
    shipped: [
      "Built Scapia Store from scratch; it now moves ₹1.2 crore a month.",
      "Built Spitha, a server-driven UI framework that changes the home page and every vertical's landing page without an app release.",
      "Built Scapia Buses to launch a new travel vertical.",
      "Built a Maestro testing framework across every vertical to catch UI regressions before release.",
    ],
  },
  {
    company: "Niyo",
    role: "SDE 1",
    period: "Sep 2023 to Aug 2025",
    summary: "Mobile, payments and rewards for travel finance.",
    shipped: [
      "Brought React Native into a Flutter-first team as one of its first champions.",
      "Built a payment SDK plugin across gateways including Razorpay and PayU.",
      "Built CRED-style loyalty rewards with coins for flight booking and visa flows.",
      "Integrated Utkarsh Small Finance Bank and SBM for the NiyoX app, and built the React dashboard operations uses to manage transactions.",
    ],
  },
  {
    company: "Karbon Card",
    role: "SDE 1, UI",
    period: "Jul 2022 to Aug 2023",
    summary: "TypeScript dashboards for forex, operations and compliance.",
    shipped: [
      "Built the Forex dashboard for invoice uploads and payment details.",
      "Built operations tools for chat, documents and transaction tracking.",
      "Built CA dashboard flows for 15CA/CB uploads, verification and assignment.",
    ],
  },
  {
    company: "Juspay",
    role: "SDE Intern",
    period: "Jan 2022 to Jun 2022",
    summary: "Checkout and payment pages.",
    shipped: ["Improved the payments page.", "Worked on Hypercheckout, which lets brands customise their payment pages."],
  },
];

export const stack = [
  { group: "Mobile", items: ["Flutter", "React Native", "Dart", "Live Activities", "Widgets"] },
  { group: "Web", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { group: "Systems", items: ["Server-driven UI", "Payment SDKs", "Design systems", "State: Zustand, Recoil, React Query"] },
  { group: "AI tooling", items: ["MCP servers", "Agent safety", "Context engines", "Spec-driven development"] },
  { group: "Quality", items: ["Maestro", "Automated regression", "Accessibility", "Web performance"] },
];
