import Image from "next/image";
import type { Project } from "@/lib/content";
import { projects } from "@/lib/content";
import { Out } from "./icons";

function Media({ p }: { p: Project }) {
  const m = p.media;
  if (m.kind === "video")
    return (
      <figure className="media">
        <div className="frame reveal">
          <video src={m.src} poster={m.poster} autoPlay muted loop playsInline preload="metadata" aria-label={m.alt} />
        </div>
        <figcaption className="caption">Recorded on a real iPhone: the agent reaches Pay ₹128 on Swiggy and Mobius holds the tap until a human decides.</figcaption>
      </figure>
    );
  if (m.kind === "browser")
    return (
      <figure className="media">
        <div className="frame reveal">
          <div className="browser-bar" aria-hidden="true"><span className="dots"><i /><i /><i /></span><span>{m.url}</span></div>
          <Image src={m.src} alt={m.alt} width={1440} height={900} sizes="(max-width: 1000px) 100vw, 640px" />
        </div>
      </figure>
    );
  return (
    <figure className="media">
      <div className="phones">
        {m.shots.map((s) => (
          <div className="phone frame reveal" key={s.src} style={{ border: 0, background: undefined }}>
            <Image src={s.src} alt={s.alt} width={458} height={1024} sizes="(max-width: 640px) 30vw, 200px" />
          </div>
        ))}
      </div>
    </figure>
  );
}

export function Work() {
  return (
    <section id="work" className="work wrap" aria-labelledby="h-work" data-branch="work">
      <div className="opener">
        <h2 id="h-work">Things I built for fun. Some got serious.</h2>
        <p>Five repos I designed, built and shipped myself, newest first. No forked tutorials, no final_v2_FINAL. Each hash is the repo’s real latest commit.</p>
      </div>
      <div className="commits">
      <div className="rail" aria-hidden="true"><i data-rail /></div>
      {projects.map((p) => (
        <article className="commit" id={p.slug} key={p.slug} data-commit data-branch={`work/${p.slug}`} aria-labelledby={`t-${p.slug}`}>
          <span className="node" aria-hidden="true" />
          <div className="meta">
            <span className="h">commit {p.hash}</span>
            <span>{p.date}</span>
            <span className="tag">{p.stack.slice(0, 3).join(", ")}</span>
          </div>
          <div className="commit-grid">
            <div>
              <h3 id={`t-${p.slug}`}>{p.name}</h3>
              <p className="line">{p.line}</p>
              <dl className="notes">
                <div><dt>{"// what it does"}</dt><dd>{p.built}</dd></div>
                <div><dt>{"// where it fought back"}</dt><dd>{p.hard}</dd></div>
              </dl>
              <ul className="facts" aria-label="Highlights">{p.facts.map((f) => <li key={f}>{f}</li>)}</ul>
              <p className="stackline">{p.stack.join("  /  ")}</p>
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} <Out /><span className="sr"> (opens in a new tab)</span></a>
                ))}
              </div>
            </div>
            <Media p={p} />
          </div>
        </article>
      ))}
      </div>
    </section>
  );
}
