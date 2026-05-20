"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="EXPERIENCE JOURNEY"
          title="Vertical mission timeline with animated checkpoints"
          description="A progressive path of impact across fintech, product engineering, and full-stack platform architecture."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[17px] top-3 hidden h-[calc(100%-32px)] w-[2px] bg-gradient-to-b from-cyan-300/50 via-fuchsia-300/45 to-transparent md:block" />
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role}
                className="reveal-section relative md:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
              >
                <span className="absolute left-0 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-400/15 text-cyan-100 md:inline-flex">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <Card className="border-white/20 bg-black/40">
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span>{experience.role}</span>
                      <span className="text-sm font-normal text-cyan-100">{experience.period}</span>
                    </CardTitle>
                    <p className="inline-flex items-center gap-2 text-sm text-zinc-300">
                      <Building2 className="h-4 w-4 text-fuchsia-200" />
                      {experience.company}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-300">{experience.mission}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
