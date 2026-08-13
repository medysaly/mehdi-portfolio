import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Coursework from "@/components/Coursework";
import Contact from "@/components/Contact";
import SocialRail from "@/components/SocialRail";
import ChatWidget from "@/components/ChatWidget";

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

        {/* The reference washes its final stretch blue-to-peach rather than
            tinting one section. Gradient goes first in DOM order, because a negative
            z-index would drop it behind the page background and vanish. */}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fd_22%,#eef2fb_44%,#fdeadb_72%,#fdf5ee_88%,#ffffff_100%)]"
          />
          <div className="relative">
            <Contact />
          </div>
        </div>
      </main>

      <ChatWidget />
    </>
  );
}
