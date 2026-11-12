import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { Log, Stack } from "@/components/site/log";
import { Motion } from "@/components/site/motion";
import { Nav } from "@/components/site/nav";
import { Term } from "@/components/site/term";
import { Work } from "@/components/site/work";
import { person, projects } from "@/lib/content";

export default function Page() {
  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Nav />
      <main>
        <Hero />
        <Term />
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
