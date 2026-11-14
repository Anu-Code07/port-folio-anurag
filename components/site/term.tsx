"use client";
import { useEffect, useRef, useState } from "react";
import { person, projects } from "@/lib/content";

/** A tiny terminal you can type into. Answers come from the real content; a few are jokes. */
type Out = { cmd: string; lines: string[] };
const CHIPS = ["whoami", "ls", "fortune", "sudo hire-anurag", "open mobius", "git blame", "chai", "rm -rf /", "help"];
const BANNER = [
  " __ _ _ __  _   _ _ __ __ _  __ _ ",
  "/ _` | '_ \\| | | | '__/ _` |/ _` |",
  "| (_| | | | | |_| | | | (_| | (_| |",
  " \\__,_|_| |_|\\__,_|_|  \\__,_|\\__, |",
  "                              |___/ ",
];
const FORTUNES = [
  "It works on my machine. Ship the machine.",
  "There are 2 hard problems: cache invalidation, naming things, and off-by-one errors.",
  "A good commit message is a love letter to future you.",
  "The bug is never where you're looking. Look somewhere else. No, not there.",
  "Today's forecast: 90% chance of 'quick fix', 100% chance it isn't.",
  "Weeks of coding can save you hours of planning.",
  "Deleted code is debugged code.",
];

function go(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
}

function answer(raw: string): string[] | "clear" {
  const c = raw.trim().replace(/\s+/g, " ");
  const [cmd, ...rest] = c.split(" ");
  const arg = rest.join(" ").toLowerCase();
  switch (cmd?.toLowerCase()) {
    case "": return [];
    case "help": return ["whoami          who is this", "ls              list projects", "open <project>  jump to one", "cat package.json  the stack", "sudo hire-anurag  you know what this does", "git blame | chai | rm -rf / | exit | clear"];
    case "whoami": return [`${person.name}, ${person.role}.`, "Ships React, React Native, Flutter and Next.js. Builds tools for AI agents after hours."];
    case "ls": return [projects.map((p) => p.slug + "/").join("   ")];
    case "open": case "cd": {
      const p = projects.find((x) => x.slug === arg.replace(/\/$/, "") || x.name.toLowerCase() === arg);
      if (!p) return [`no such project: ${arg || "(nothing)"}. Try: ls`];
      setTimeout(() => go(`#${p.slug}`), 350);
      return [`opening ${p.slug}… ${p.line}`];
    }
    case "cat":
      if (arg === "package.json") { setTimeout(() => go("#stack"), 350); return ["scrolling to package.json…"]; }
      return [`cat: ${arg || "(nothing)"}: No such file. Try: cat package.json`];
    case "sudo":
      if (/hire/.test(arg)) { setTimeout(() => { location.href = `mailto:${person.email}?subject=Let%E2%80%99s%20work%20together`; }, 900); return ["[sudo] password for recruiter: ********", "Access granted. Opening your mail app…"]; }
      return ["Nice try. Only `sudo hire-anurag` works here."];
    case "git": return arg.startsWith("blame") ? ["It was me. It’s always me."] : arg.startsWith("push") ? ["Everything up-to-date. Unlike my sleep schedule."] : [`git: '${arg}' is not a git command. But 'git blame' is.`];
    case "chai": case "coffee": return ["brewing chai… done.", "productivity +12%, typos −0%"];
    case "rm": return ["Nice try. This site is protected by Mobius.", "rm: approval required (rejected by human)"];
    case "exit": return ["There is no exit. Only main."];
    case "clear": return "clear";
    case "ping": return ["pong. Inbox latency: usually under a day."];
    case "fortune": return [FORTUNES[Math.floor(Math.random() * FORTUNES.length)]!];
    default: return [`zsh: command not found: ${cmd}. Try 'help'.`];
  }
}

export function Term() {
  const [hist, setHist] = useState<Out[]>([]);
  const [val, setVal] = useState("");
  const [typing, setTyping] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const sec = useRef<HTMLElement>(null);

  const run = (c: string) => {
    const a = answer(c);
    if (a === "clear") { setHist([]); return; }
    setHist((h) => [...h.slice(-6), { cmd: c, lines: a }]);
  };

  // Types `whoami` once when the terminal first scrolls into view.
  useEffect(() => {
    const el = sec.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) { run("whoami"); return; }
      setTyping(true);
      const word = "whoami";
      let i = 0;
      const t = setInterval(() => {
        i++; setVal(word.slice(0, i));
        if (i === word.length) { clearInterval(t); setTimeout(() => { run(word); setVal(""); setTyping(false); }, 260); }
      }, 110);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Keep the prompt in view while an answer types itself out (it grows after the first render).
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const toEnd = () => el.scrollTo({ top: el.scrollHeight });
    toEnd();
    const ro = new ResizeObserver(toEnd);
    [...el.children].forEach((c) => ro.observe(c));
    const t = setTimeout(() => ro.disconnect(), 4000);
    return () => { ro.disconnect(); clearTimeout(t); };
  }, [hist]);

  return (
    <section ref={sec} className="term-sec" aria-labelledby="h-term">
      <div className="wrap term-grid">
        <div>
          <h2 id="h-term">Talk to my terminal.</h2>
          <p>It knows my projects, my stack and one very important command. Type <code>help</code> or tap a command.</p>
        </div>
        <div className="term" onClick={() => input.current?.focus()}>
          <div className="term-bar mono" aria-hidden="true"><span className="dots lights"><i /><i /><i /></span><span className="title">anurag@portfolio: ~</span><span className="zsh">zsh</span></div>
          <div className="term-body mono" ref={box} aria-live="polite" data-lenis-prevent>
            <pre className="banner" aria-label="anurag">{BANNER.join("\n")}</pre>
            <p className="hello-line">welcome to anurag’s portfolio shell. type <b>help</b>, or tap a key below.</p>
            {hist.map((h, i) => (
              <div key={i} className="blk">
                <p><span className="ps">anurag@portfolio ~ %</span> {h.cmd}</p>
                {h.lines.map((l, j) => <p key={j} className="out" style={{ ["--n" as string]: l.length, ["--d" as string]: `${j * 0.18}s` }}>{l}</p>)}
              </div>
            ))}
            <form className="line" onSubmit={(e) => { e.preventDefault(); if (!val.trim()) return; run(val); setVal(""); }}>
              <label htmlFor="term-in" className="ps">anurag@portfolio ~ %</label>
              <input id="term-in" ref={input} value={val} onChange={(e) => setVal(e.target.value)} readOnly={typing}
                autoComplete="off" autoCapitalize="off" spellCheck={false} enterKeyHint="go" aria-label="Type a command" />
            </form>
          </div>
          <div className="chips" data-lenis-prevent>
            {CHIPS.map((c) => <button key={c} type="button" className="mono" onClick={(e) => { e.stopPropagation(); run(c); }}>{c}</button>)}
          </div>
        </div>
      </div>
    </section>
  );
}
