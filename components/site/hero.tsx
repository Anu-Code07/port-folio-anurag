import { person, projects } from "@/lib/content";
import { Arrow, GitHub, LinkedIn } from "./icons";

export function Hero() {
  return (
    <section id="top" className="wrap hero" data-branch="main" aria-labelledby="h1">
      <div className="hero-head">
        <p className="prompt rise" style={{ ["--i" as string]: 0 }}>
          <span>$ whoami</span><b>anurag</b><i>● online, probably shipping</i>
        </p>
        <h1 id="h1" className="rise" style={{ ["--i" as string]: 1 }}>
          <span>My code compiles</span>
          <span>on the first try. <em>Mostly.</em></span>
        </h1>
      </div>
      <div>
        <p className="lede rise" style={{ ["--i" as string]: 2 }}>
          I’m <strong>Anurag</strong>, SDE 2 at <strong>Scapia</strong>, where I build the travel app you tap and a store
          that clears <strong>₹1.2 crore a month</strong>. Off the clock I write tools for AI agents:{" "}
          <a href="#mobius">Mobius</a> gives them a phone, <a href="#neuron">Neuron</a> gives them a memory,{" "}
          <a href="#specdrive">SpecDrive</a> gives them a plan.
        </p>
        <div className="ctas rise" style={{ ["--i" as string]: 3 }}>
          <a className="btn primary" href="#work">git log my work <Arrow /></a>
          <span className="social">
            <a className="btn ghost" href={person.github}><GitHub /> GitHub</a>
            <a className="btn ghost" href={person.linkedin}><LinkedIn /> LinkedIn</a>
          </span>
        </div>
      </div>

      <figure className="graph rise" style={{ ["--i" as string]: 2 }} aria-label="Recent projects as a git log">
        <div className="graph-head">
          <span className="cmd">$ git log <b>--graph</b> --oneline</span>
          <span>5 repos, 0 tutorials</span>
        </div>
        <ol>
          {projects.map((p, i) => (
            <li key={p.slug} className={i === 0 ? "head" : undefined}>
              <a href={`#${p.slug}`} aria-label={`${p.name}: ${p.line}`}>
                <span className="lane" data-lane><span className="dot" /></span>
                <span className="h">{p.hash}</span>
                <span className="msg">{i === 0 && <span className="ref">(HEAD → main) </span>}<b>{p.name}</b> {p.line}</span>
              </a>
            </li>
          ))}
        </ol>
        <figcaption className="graph-foot">
          <span><b>Scapia</b>, <b>Niyo</b>, <b>Karbon</b> and <b>Juspay</b> already merged into main</span>
          <span>real hashes, go check</span>
        </figcaption>
      </figure>
    </section>
  );
}
