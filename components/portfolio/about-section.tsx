"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/portfolio/animated-counter";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/portfolio-data";

const orbitSkills = skills.slice(0, 8);

const milestones = [
  { label: "Years in Production", value: 8, suffix: "+" },
  { label: "Systems Shipped", value: 42, suffix: "+" },
  { label: "Apps in Market", value: 30, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="MISSION PROFILE"
          title="A futuristic engineer profile tuned for impact"
          description="Architecture-first problem solving with immersive interfaces, scalable systems, and a shipping mindset from day one."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <Card className="reveal-section overflow-hidden border-cyan-300/20 bg-black/40">
            <CardHeader>
              <CardTitle>Holographic Tech Core</CardTitle>
            </CardHeader>
            <CardContent>
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
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="muted">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="reveal-section border-fuchsia-300/25 bg-black/35">
              <CardHeader>
                <CardTitle>Mission Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4 border-l border-cyan-300/25 pl-4">
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Launch:</span> Built resilient
                    Flutter ecosystems for finance and mobility.
                  </p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Orbit:</span> Scaled Next.js
                    platforms with design systems and high-fidelity interactions.
                  </p>
                  <p className="text-sm text-zinc-300">
                    <span className="text-cyan-100">Warp:</span> Led full-stack teams
                    shipping critical product systems with clean architecture.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="reveal-section grid gap-4 sm:grid-cols-2">
              {milestones.map((milestone) => (
                <Card key={milestone.label} className="bg-black/30">
                  <CardContent className="p-6">
                    <p className="text-3xl font-semibold text-cyan-100">
                      <AnimatedCounter to={milestone.value} suffix={milestone.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">{milestone.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
