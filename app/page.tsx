import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="md:pr-[var(--content-padding)] md:pl-[var(--content-padding)] pr-[calc(var(--content-padding)*0.5)] pl-[calc(var(--content-padding)*0.5)]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
