import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <CurrentlyBuilding />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
