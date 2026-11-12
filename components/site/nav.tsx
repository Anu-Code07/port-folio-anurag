"use client";
import { useEffect, useState } from "react";
import { person } from "@/lib/content";
import { GitHub, LinkedIn } from "./icons";

/** The branch you're "on" follows the section in view: main, work/mobius, log, stack... */
export function Nav() {
  const [branch, setBranch] = useState("main");
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("[data-branch]")];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setBranch((hit.target as HTMLElement).dataset.branch!);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.01] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <header className="nav">
      <div className="nav-in">
        <a className="brand" href="#top" aria-label="Anurag Kumar Singh, back to top">
          <span className="glitch" data-text="Anurag">Anurag</span>
          <span className="branch" aria-live="polite" aria-label={`Current section: ${branch}`}>{branch}</span>
        </a>
        <nav aria-label="Sections">
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#log">Experience</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href={person.github} aria-label="GitHub" title="GitHub" style={{ display: "grid", placeItems: "center", width: 40, height: 40, padding: 0 }}><span style={{ width: 18, height: 18 }}><GitHub /></span></a></li>
            <li><a href={person.linkedin} aria-label="LinkedIn" title="LinkedIn" style={{ display: "grid", placeItems: "center", width: 40, height: 40, padding: 0 }}><span style={{ width: 18, height: 18 }}><LinkedIn /></span></a></li>
          </ul>
        </nav>
        <a className="hello" href="#contact">Say hi</a>
      </div>
    </header>
  );
}
