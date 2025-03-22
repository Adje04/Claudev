import Image from "next/image";
import Hero from "./components/Hero";
import Works from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skill";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="">
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>

      </main>
    </div>
  );
}
