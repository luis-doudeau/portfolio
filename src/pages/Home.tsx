import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Timeline } from "../sections/Timeline";
import { Vision } from "../sections/Vision";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Vision />
      <Contact />
    </>
  );
}
