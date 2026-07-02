import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <Sidebar />

        <main id="main-content" className="pt-16 lg:py-24">
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />

          <footer className="mt-24 border-t border-white/[0.06] py-8">
            <p className="font-mono text-xs text-neutral-600">
              Built with Next.js, Tailwind, and Framer Motion. Deployed on
              Vercel. &copy; {new Date().getFullYear()} Mehdi Salhi.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
