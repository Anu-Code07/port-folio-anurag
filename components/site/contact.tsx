"use client";
import { useState } from "react";
import { person } from "@/lib/content";
import { GitHub, LinkedIn, Mail } from "./icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(person.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* the address stays selectable */ }
  };
  return (
    <section id="contact" className="wrap contact" aria-labelledby="h-contact" data-branch="contact">
      <h2 id="h-contact">Let’s <em>pair.</em></h2>
      <p className="contact-sub">Hiring, building something wild, or just want to argue about Flutter vs React Native? My inbox has better uptime than most APIs.</p>
      <div className="mail">
        <a className="addr" href={`mailto:${person.email}`}>{person.email}</a>
        <button className="copy" type="button" onClick={copy} aria-live="polite">{copied ? "Copied to clipboard" : "Copy email"}</button>
      </div>
      <div className="elsewhere">
        <a className="btn ghost" href={`mailto:${person.email}`}><Mail /> Email</a>
        <a className="btn ghost" href={person.linkedin} target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn</a>
        <a className="btn ghost" href={person.github} target="_blank" rel="noreferrer"><GitHub /> GitHub</a>
      </div>
    </section>
  );
}
