import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Log, Stack } from "@/components/site/log";
import { Motion } from "@/components/site/motion";
import { Nav } from "@/components/site/nav";
import { Work } from "@/components/site/work";
import { person, projects } from "@/lib/content";

const proof = [
  { v: "₹1.2 Cr", k: "a month through Scapia Store. It started as git init." },
  { v: "0 releases", k: "to change Scapia’s home screen. Spitha, my server-driven UI, does it live." },
  { v: "44 / 44", k: "attacks Mobius blocked in its own benchmark. The 45th is your move." },
  { v: "4 years", k: "in production with React, React Native, Flutter and Next.js. Yes, all four." },
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Nav />
      <main>
        <Hero />
        <section className="proof" aria-label="Proof">
          <ul className="wrap">{proof.map((p) => <li key={p.v}><span className="v">{p.v}</span><span className="k">{p.k}</span></li>)}</ul>
        </section>
        <Work />
        <Log />
        <Stack />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <span>© 2026 {person.name}. Built with Next.js, GSAP and too much chai. HEAD is at <b>{projects[0].hash}</b>.</span>
          <span><a href={person.github}>GitHub</a> · <a href={person.linkedin}>LinkedIn</a> · <a href={`mailto:${person.email}`}>Email</a></span>
        </div>
      </footer>
      <Motion />
    </>
  );
}
