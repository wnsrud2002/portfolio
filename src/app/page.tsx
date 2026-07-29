import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
