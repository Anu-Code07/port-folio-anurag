"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { AboutSection } from "@/components/portfolio/about-section";
import { AiAssistantOrb } from "@/components/portfolio/ai-assistant-orb";
import { CommandPalette } from "@/components/portfolio/command-palette";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { GameSection } from "@/components/portfolio/game-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { InteractiveCursor } from "@/components/portfolio/interactive-cursor";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SpaceBackground } from "@/components/portfolio/space-background";
import { TerminalMode } from "@/components/portfolio/terminal-mode";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useKonamiCode } from "@/hooks/use-konami-code";

export function PortfolioExperience() {
  const [loading, setLoading] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [secretGalaxy, setSecretGalaxy] = useState(false);
  const [easterCount, setEasterCount] = useState(0);

  useGsapReveal();

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timeout);
  }, []);

  useKonamiCode(() => setSecretGalaxy(true));

  useEffect(() => {
    if (easterCount >= 5) {
      setSecretGalaxy(true);
    }
  }, [easterCount]);

  useEffect(() => {
    if (!soundOn) {
      return;
    }

    const context = new window.AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();

    oscillator.type = "triangle";
    oscillator.frequency.value = 70;
    filter.type = "lowpass";
    filter.frequency.value = 420;
    gain.gain.value = 0.006;

    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    oscillator.start();

    return () => {
      oscillator.stop();
      oscillator.disconnect();
      filter.disconnect();
      gain.disconnect();
      void context.close();
    };
  }, [soundOn]);

  const onNavigate = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const hour = new Date().getHours();
  const lightingOpacity = useMemo(() => {
    if (hour < 6 || hour > 20) {
      return 0.45;
    }
    if (hour < 12) {
      return 0.25;
    }
    return 0.18;
  }, [hour]);

  return (
    <div className={secretGalaxy ? "galaxy-mode" : ""}>
      <LoadingScreen show={loading} />
      <SmoothScrollProvider />
      <SpaceBackground />
      <InteractiveCursor />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,0.2),transparent_45%)]"
        style={{ opacity: lightingOpacity }}
      />

      <Navbar
        onNavigate={onNavigate}
        onOpenCommand={() => window.dispatchEvent(new Event("open-command-palette"))}
        soundOn={soundOn}
        onToggleSound={() => setSoundOn((value) => !value)}
        onLogoTap={() => setEasterCount((count) => count + 1)}
      />

      <CommandPalette onNavigate={onNavigate} />

      <main className="relative">
        <HeroSection onNavigate={onNavigate} />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <AboutSection />
          <ProjectsSection />
          <GameSection soundOn={soundOn} />
          <ExperienceSection />
          <ContactSection />
        </motion.div>
      </main>

      <AiAssistantOrb />
      <TerminalMode />

      {secretGalaxy ? (
        <div className="pointer-events-none fixed left-1/2 top-24 z-30 -translate-x-1/2 rounded-full border border-fuchsia-200/60 bg-fuchsia-500/20 px-4 py-2 text-xs tracking-[0.25em] text-fuchsia-100">
          SECRET GALAXY MODE UNLOCKED
        </div>
      ) : null}
    </div>
  );
}
