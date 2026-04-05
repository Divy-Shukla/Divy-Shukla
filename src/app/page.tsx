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
    <div className="flex flex-col min-h-screen bg-background">
      {/* 
        Navbar is decoupled from the main 3D engine layer 
        to ensure 'position: fixed' does not break.
      */}
      <Navbar />
      
      {/* 
        GLOBAL 3D ENVIRONMENT
        perspective: 1200px enforces deep physical layout constraints.
      */}
      <main 
        className="flex-grow flex flex-col relative"
        style={{ perspective: "1200px", transformStyle: "preserve-3d", overflowX: "hidden" }}
      >
        <Hero />
        <ProofStrip />
        <About />
        <Skills />
        <Projects />
        <Education />
        <AIEdge />
        <Certificates />
        <Contact />
        
        <footer className="py-8 text-center text-xs text-text-secondary font-mono border-t border-white/5 relative z-0">
          <p>&copy; {new Date().getFullYear()} Divy Shukla. All Systems Go.</p>
        </footer>
      </main>
    </div>
  );
}
