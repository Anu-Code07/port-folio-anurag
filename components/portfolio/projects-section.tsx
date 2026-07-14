"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink, GitBranch, Radar } from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function HolographicProjectCard({
  project,
  index,
  className,
}: {
  project: (typeof projects)[number];
  index: number;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  // Motion values drive the tilt + glow directly, so moving the mouse no
  // longer triggers a React re-render of the whole card on every frame.
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25, mass: 0.3 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25, mass: 0.3 });

  const transform = useMotionTemplate`perspective(1200px) rotateX(${springX}deg) rotateY(${springY}deg)`;
  const gradientX = useTransform(springY, (value) => 50 + value * 3);
  const gradientY = useTransform(springX, (value) => 50 - value * 3);
  const gradient = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(34,211,238,0.28), rgba(0,0,0,0) 60%)`;

  return (
    <motion.article
      className={cn("reveal-section", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      onMouseMove={(event) => {
        const target = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - target.left;
        const offsetY = event.clientY - target.top;
        rotateX.set(((offsetY / target.height) * 2 - 1) * -8);
        rotateY.set(((offsetX / target.width) * 2 - 1) * 8);
      }}
      onMouseLeave={() => {
        setHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <motion.div className="h-full" style={{ transform, willChange: "transform" }}>
      <Card
        className="group relative h-full overflow-hidden border-cyan-300/25 bg-black/45 p-0"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: gradient }} />
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
            {project.imageUrl ? (
              <motion.div
                className="h-28 rounded-xl bg-cover bg-center shadow-[0_0_35px_rgba(34,211,238,0.14)]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.08), rgba(2,6,23,0.56)), url(${project.imageUrl})`,
                }}
                animate={{ scale: hovered ? 1.03 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ) : (
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
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="muted">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="space-y-2 text-sm text-zinc-300">
            <p className="font-medium text-cyan-100">Impact Highlights</p>
            <ul className="space-y-1">
              {project.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <p className="text-xs text-zinc-400">Built for: {project.solved}</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-100 transition-colors hover:text-cyan-300"
              >
                <GitBranch className="h-4 w-4" /> GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-fuchsia-100 transition-colors hover:text-fuchsia-300"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            ) : null}
          </div>
        </CardContent>
      </Card>
      </motion.div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const isMobileOrTablet = useMediaQuery("(max-width: 1024px)");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  useEffect(() => {
    if (isMobileOrTablet) {
      setScrollDistance(0);
      return;
    }

    const measure = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      const trackWidth = trackRef.current?.scrollWidth ?? 0;
      setScrollDistance(Math.max(trackWidth - viewportWidth, 0));
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
    };
  }, [isMobileOrTablet]);

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title="Frontend products, AI tooling, and mobile experiments"
          description="A focused project deck covering AI context engines, spec-driven development, React Native tooling, commerce, chat, and Flutter apps."
        />

        {isMobileOrTablet ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <HolographicProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div ref={sectionRef} className="relative h-[340vh]">
            <div className="sticky top-24 space-y-4">
              <p className="text-center text-xs tracking-[0.28em] text-cyan-100/80">
                SCROLL TO NAVIGATE PROJECT DECK
              </p>
              <div ref={viewportRef} className="overflow-hidden">
                <motion.div
                  ref={trackRef}
                  className="flex gap-6 pr-10 will-change-transform"
                  style={{ x }}
                >
                  {projects.map((project, index) => (
                    <HolographicProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      className="w-[420px] shrink-0"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
