"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

import { AnimatedTypewriter } from "@/components/portfolio/animated-typewriter";
import { AstronautScene } from "@/components/portfolio/astronaut-scene";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { heroTypewriterLines } from "@/lib/portfolio-data";

interface HeroSectionProps {
  onNavigate: (selector: string) => void;
}

const snippets = [
  "frontend --stack react,next,react-native,flutter",
  "ship --products scapia-store spitha rewards",
  "test --maestro --ui-regression=covered",
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[98svh] w-full max-w-6xl flex-col justify-center overflow-hidden px-4 pb-20 pt-36 sm:px-6"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          className="reveal-section relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-400/10 px-4 py-2 text-xs tracking-[0.3em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            FRONT END DEVELOPER · BENGALURU, INDIA
          </span>
          <h1 className="max-w-xl bg-gradient-to-r from-white via-cyan-100 to-fuchsia-100 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
            Anurag Kumar Singh
          </h1>
          <div className="mt-5">
            <AnimatedTypewriter lines={heroTypewriterLines} />
          </div>
          <p className="mt-5 max-w-xl text-sm text-zinc-300 sm:text-base">
            Front End Developer with 4+ years of experience across React, React
            Native, Flutter, and Next.js, building scalable consumer products,
            internal platforms, AI-assisted developer tooling, and server-driven UI
            systems.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton size="lg" onClick={() => onNavigate("#projects")}>
              Explore Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              size="lg"
              variant="ghost"
              onClick={() => onNavigate("#about")}
            >
              View Profile
            </MagneticButton>
            <MagneticButton
              size="lg"
              variant="ghost"
              onClick={() => onNavigate("#contact")}
            >
              Contact
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="reveal-section relative h-[360px] overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-black/35 shadow-[0_0_100px_rgba(56,189,248,0.2)] sm:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <AstronautScene />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.28),transparent_60%)]" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden gap-3 sm:grid sm:grid-cols-3">
        {snippets.map((snippet, index) => (
          <motion.div
            key={snippet}
            className="reveal-section rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-zinc-300 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: index * 0.18 }}
          >
            <div className="mb-1 flex items-center gap-2 text-cyan-200">
              <Terminal className="h-3 w-3" />
              Resume Signal
            </div>
            {snippet}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
