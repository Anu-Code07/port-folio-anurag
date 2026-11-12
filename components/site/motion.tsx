"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * One motion system for the page. Load: the intro rises and the hero's git graph draws its lanes.
 * Scroll (the signature): the branch rail draws down the work, each commit lands as it reaches the reading line
 * (node fills, hash types in), screenshots unroll, and career branches draw their merge into main.
 * Everything is scrubbed or reversible, so scrolling back un-writes the history. Reduced motion: shown, not moved.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector("main");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const commits = [...document.querySelectorAll<HTMLElement>("[data-commit]")];

    if (reduce) {
      main?.classList.add("ready");
      commits.forEach((c) => c.classList.add("landed"));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true, anchors: { offset: -80 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Load: let the rise transitions run, then draw the hero graph top to bottom.
      requestAnimationFrame(() => main?.classList.add("ready"));
      gsap.fromTo("[data-lane]", { "--draw": 0 }, { "--draw": 1, duration: 0.5, ease: "power2.out", stagger: 0.12, delay: 0.45 });
      gsap.from(".graph .dot", { scale: 0, duration: 0.6, ease: "back.out(2.4)", stagger: 0.12, delay: 0.55 });

      // The rail draws as the work scrolls by.
      gsap.to("[data-rail]", { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".commits", start: "top 55%", end: "bottom 55%", scrub: 0.6 } });

      // Each commit lands at the reading line; its hash types in.
      commits.forEach((c) => {
        const h = c.querySelector<HTMLElement>(".meta .h");
        const full = h?.textContent ?? "";
        const type = () => {
          if (!h) return;
          const o = { n: 0 };
          gsap.to(o, { n: full.length, duration: 0.6, ease: "none", onUpdate: () => { h.textContent = full.slice(0, Math.round(o.n)) || " "; } });
        };
        ScrollTrigger.create({
          trigger: c, start: "top 62%",
          onEnter: () => { c.classList.add("landed"); type(); },
          onLeaveBack: () => c.classList.remove("landed"),
        });
      });

      // Screenshots unroll into view, phones one after another; media drifts slightly against the text.
      gsap.utils.toArray<HTMLElement>(".media").forEach((m) => {
        const frames = m.querySelectorAll(".frame.reveal");
        gsap.fromTo(frames, { clipPath: "inset(0% 0% 100% 0% round 22px)" }, {
          clipPath: "inset(0% 0% 0% 0% round 22px)", duration: 1.6, ease: "expo.out", stagger: 0.16,
          scrollTrigger: { trigger: m, start: "top 82%", toggleActions: "play none none reverse" },
        });
      });

      // Career branches draw their merge into main.
      gsap.utils.toArray<SVGPathElement>("[data-draw]").forEach((p) => {
        gsap.fromTo(p, { strokeDasharray: 1, strokeDashoffset: 1 }, {
          strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: p.closest("[data-merge]"), start: "top 85%", end: "top 45%", scrub: 0.5 },
        });
      });

      // Section openers and the rest of the content rise once.
      gsap.utils.toArray<HTMLElement>(".opener, .term-grid > div:first-child, .branch > div, .pkg, .contact > *").forEach((el) => {
        gsap.from(el, { y: 34, opacity: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
    });

    return () => { ctx.revert(); gsap.ticker.remove(tick); lenis.destroy(); root.classList.remove("lenis", "lenis-smooth"); };
  }, []);
  return null;
}
