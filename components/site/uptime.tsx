"use client";
import { useEffect, useState } from "react";

/** `$ uptime` for a career: live since the first day job (Juspay, January 2022). */
const START = new Date("2022-01-03T10:00:00+05:30").getTime();
const pad = (n: number) => String(n).padStart(2, "0");

function since(now: number) {
  const s = Math.max(0, Math.floor((now - START) / 1000));
  const days = Math.floor(s / 86400);
  return { days, clock: `${pad(Math.floor((s % 86400) / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}` };
}

export function Uptime() {
  // Server and first paint render the day count only; the clock starts ticking after hydration.
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const { days, clock } = since(now ?? Date.UTC(2026, 10, 12));
  const chai = Math.round(days * 2 / 50) * 50;
  return (
    <section className="uptime" aria-label="Career uptime">
      <div className="wrap">
        <p className="cmd mono">$ uptime</p>
        <p className="up">
          <span className="d">{days.toLocaleString("en-IN")} days</span>
          <span className="c mono" aria-hidden={now === null}>{now === null ? "" : clock}</span>
        </p>
        <p className="since mono">of shipping, since my first day job in January 2022. Still running, never rebooted.</p>
        <ul className="load mono">
          <li><span>load average</span>1 day job, 5 side projects, 0 sleep</li>
          <li><span>chai consumed</span>≈ {chai.toLocaleString("en-IN")} cups (estimated, 2 a day)</li>
          <li><span>companies</span>4, merged with 0 force-pushes</li>
          <li><span>bugs in prod</span>0 (that you know of)</li>
        </ul>
      </div>
    </section>
  );
}
