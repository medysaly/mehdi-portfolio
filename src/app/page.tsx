import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";
import SocialRail from "@/components/SocialRail";
import MarineWash from "@/components/MarineWash";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <SocialRail />

      <main id="main-content">
        <Hero />
        <About />

        {/* Work before employment history. The shipped projects are the
            strongest evidence here, and a single externship read first
            undersells what follows it. */}
        <Projects />
        <Experience />

        {/* Credentials and the coursework that belongs to the same degree
            stay adjacent and on the same white, so they read as one block
            about education rather than two unrelated lists. */}
        <Certifications />
        <Coursework />

        {/* Closes on the same blue the hero opens with, mirrored so the
            colour rises from the bottom. This used to run blue into peach,
            which meant the page ended on a hue that appeared nowhere else.
            The wash goes first in DOM order, because a negative z-index would
            drop it behind the page background and vanish. */}
        <div className="relative">
          <MarineWash anchor="bottom" />
          <div className="relative">
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
