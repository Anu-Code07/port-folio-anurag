"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Radar } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";

interface TiltState {
  rotateX: number;
  rotateY: number;
}

function HolographicProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0 });
  const [hovered, setHovered] = useState(false);

  const gradient = useMemo(
    () =>
      `radial-gradient(circle at ${50 + tilt.rotateY * 3}% ${50 - tilt.rotateX * 3}%, rgba(34,211,238,0.28), rgba(0,0,0,0) 60%)`,
    [tilt.rotateX, tilt.rotateY],
  );

  return (
    <motion.article
      className="reveal-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      onMouseMove={(event) => {
        const target = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - target.left;
        const offsetY = event.clientY - target.top;
        setTilt({
          rotateX: ((offsetY / target.height) * 2 - 1) * -8,
          rotateY: ((offsetX / target.width) * 2 - 1) * 8,
        });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <Card
        className="group relative h-full overflow-hidden border-cyan-300/25 bg-black/45 p-0 transition-all duration-500"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={{ background: gradient }} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.07),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center justify-between text-xl">
            {project.title}
            <Radar className="h-5 w-5 text-cyan-200" />
          </CardTitle>
          <p className="text-sm text-zinc-300">{project.description}</p>
        </CardHeader>

        <CardContent className="relative z-10 space-y-5">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-4">
            <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
              <span>Preview Stream</span>
              <span className={hovered ? "text-emerald-300" : "text-zinc-500"}>
                {hovered ? "PLAYING" : "IDLE"}
              </span>
            </div>
            <motion.div
              className="h-28 rounded-xl bg-[linear-gradient(120deg,rgba(59,130,246,0.22),rgba(192,38,211,0.2),rgba(14,165,233,0.24))]"
              animate={{
                backgroundPosition: hovered ? ["0% 50%", "100% 50%"] : ["0% 50%", "40% 50%"],
              }}
              transition={{
                duration: hovered ? 2.3 : 4.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="muted">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="space-y-2 text-sm text-zinc-300">
            <p className="font-medium text-cyan-100">Architecture Highlights</p>
            <ul className="space-y-1">
              {project.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <p className="text-xs text-zinc-400">Challenge solved: {project.solved}</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cyan-100 transition-colors hover:text-cyan-300"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-fuchsia-100 transition-colors hover:text-fuchsia-300"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PROJECT STATIONS"
          title="Floating holographic systems in active orbit"
          description="Every mission card is built as a cinematic control panel with motion layers, architecture insights, and production outcomes."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <HolographicProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
