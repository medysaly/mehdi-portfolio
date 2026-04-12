import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Skills from "@/components/Skills";
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
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
