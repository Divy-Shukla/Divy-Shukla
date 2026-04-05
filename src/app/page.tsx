import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { AIEdge } from "@/components/AIEdge";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ProofStrip />
      <About />
      <Skills />
      <Projects />
      <Education />
      <AIEdge />
      <Certificates />
      <Contact />
      
      <footer className="py-8 text-center text-xs text-text-secondary font-mono border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Divy Shukla. All Systems Go.</p>
      </footer>
    </main>
  );
}
