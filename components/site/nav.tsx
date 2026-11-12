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
          <svg className="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#121a2b" /><path d="M22 20v24" stroke="#ff9a76" strokeWidth="4.5" strokeLinecap="round" /><path d="M42 24c0 12-20 8-20 18" fill="none" stroke="#ffd7bf" strokeWidth="4.5" strokeLinecap="round" /><circle cx="22" cy="16" r="6" fill="#121a2b" stroke="#ff9a76" strokeWidth="4.5" /><circle cx="42" cy="19" r="6" fill="#121a2b" stroke="#ffd7bf" strokeWidth="4.5" /><circle cx="22" cy="47" r="7.5" fill="#ff9a76" /></svg>
          <span>Anurag<span className="surname"> Kumar Singh</span></span>
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
