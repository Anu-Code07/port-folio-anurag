"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/portfolio/animated-counter";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/portfolio-data";

const orbitSkills = skills.slice(0, 8);

const skillGroups = [
  {
    label: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Dart", "React", "Next.js", "React Native", "Flutter"],
  },
  {
    label: "State Management",
    items: ["Recoil", "Zustand", "React Query"],
  },
  {
    label: "Data & Payments",
    items: ["Prisma ORM", "SQL", "Razorpay", "PayU SDKs"],
  },
  {
    label: "AI & Dev Tooling",
    items: ["MCP tooling", "Spec-driven dev", "Figma-to-code", "AI context engines"],
  },
  {
    label: "Testing",
    items: ["Maestro automated regression"],
  },
];

const milestones = [
  { label: "Years in Production", value: 4, suffix: "+" },
  { label: "Monthly Store Volume", display: "INR 1.2Cr" },
  { label: "Payment Gateways Integrated", value: 2, suffix: "+" },
  { label: "Bank Integrations", value: 2, suffix: "" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PROFILE"
          title="Front end developer focused on scalable product experiences"
          description="4+ years across React, React Native, Flutter, and Next.js, with recent focus on AI-assisted developer tooling and server-driven UI systems."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <Card className="reveal-section overflow-hidden border-cyan-300/20 bg-black/40">
            <CardHeader>
              <CardTitle>Frontend Tech Core</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative mx-auto mb-8 h-72 max-w-sm">
                <motion.div
                  className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-cyan-300/10 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY }}
                />
                {orbitSkills.map((skill, index) => {
                  const angle = (index / orbitSkills.length) * Math.PI * 2;
                  const radius = 118;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={skill}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 18 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <span
                        className="inline-flex rounded-full border border-white/20 bg-black/65 px-3 py-1 text-xs text-zinc-100"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="mb-3 text-sm font-medium text-cyan-100">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge key={skill} variant="muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="reveal-section border-fuchsia-300/25 bg-black/35">
              <CardHeader>
                <CardTitle>Career Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 border-l border-cyan-300/25 pl-4">
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Scapia:</span> Built Scapia Store,
                    Scapia Buses, and Spitha server-driven UI for instant merchandising.
                  </p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Niyo:</span> Championed React
                    Native, shipped loyalty rewards, multi-bank integrations, PG SDK,
                    and ops dashboards.
                  </p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Karbon Cards:</span> Built forex,
                    operations, and CA dashboards with TypeScript and Recoil.
                  </p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Juspay:</span> Improved payment
                    page UX and worked on Hypercheckout payment page customization.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="reveal-section grid gap-4 sm:grid-cols-2">
              {milestones.map((milestone) => (
                <Card key={milestone.label} className="bg-black/30">
                  <CardContent className="p-6">
                    <p className="text-3xl font-semibold text-cyan-100">
                      {"display" in milestone ? (
                        milestone.display
                      ) : (
                        <AnimatedCounter to={milestone.value} suffix={milestone.suffix} />
                      )}
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">{milestone.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="reveal-section bg-black/35">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3">
                  <p className="font-medium text-cyan-100">Data Engineering</p>
                  <p className="text-zinc-300">IIT Jodhpur</p>
                  <p className="text-xs text-zinc-500">Apr 2024 - Aug 2025</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3">
                  <p className="font-medium text-cyan-100">BE, Information Science</p>
                  <p className="text-zinc-300">Sir M Visvesvaraya Institute Of Technology</p>
                  <p className="text-xs text-zinc-500">May 2018 - Apr 2022</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
