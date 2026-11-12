/*
THESIS      The portfolio is his commit history; it refuses the space-theme hero, skill-chip cloud and project card grid.
OWN-WORLD   Verdigris ground, copper for hashes and HEAD, mint for what is live; Fraunces headlines, Geist body,
            Geist Mono for git data; one branch rail runs the whole page.
STORY       Who: frontend and mobile engineer, SDE 2 at Scapia. Proof: Scapia Store at INR 1.2 crore a month, server-driven
            UI, payments SDKs. Work: Mobius, Neuron, SpecDrive, Pulse, Orbit Notes. How: four companies merged into main.
            Ask: email him.
FIRST-VIEW  Two-line H1 left, "See the work" under the lede; right, a live git log --graph of the five repos with real hashes.
FORM+SEED   Spine 3 (changelog), roll bc469b66, anchor b4df3eb1 (verdigris copper).
SIGNATURE   Verb commit; medium the branch rail and commit nodes; trigger scroll (scrubbed); replay: scroll back un-writes
            the rail and re-lands each commit.
*/
import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({ variable: "--font-display", subsets: ["latin"], axes: ["opsz", "SOFT"], display: "swap" });
const sans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://port-folio-anurag.vercel.app"),
  title: "Anurag Kumar Singh: mobile and frontend engineer",
  description:
    "Anurag Kumar Singh ships mobile apps and the tools that build them: Scapia Store at ₹1.2 crore a month, server-driven UI, payments SDKs, and Mobius, Neuron and SpecDrive for AI-native development.",
  openGraph: {
    title: "Anurag Kumar Singh: I ship the apps, and the tools that ship them",
    description: "SDE 2 at Scapia. React, React Native, Flutter, Next.js, and AI developer tooling.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#121a2b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Mark JS before paint so the intro can rise without a flash; without JS everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
