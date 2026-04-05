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
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {/* GLOBAL BACKGROUND LAYER (DEEP ATMOSPHERE) */}
        <div 
          className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_80%)] mix-blend-screen opacity-75"
          style={{ transform: "translateZ(-200px) scale(0.92)", transformStyle: "preserve-3d" }}
        />

        {/* Sections sit at Z: 0px natively */}
        <div className="relative z-10 w-full" style={{ transformStyle: "preserve-3d" }}>
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
        </div>
      </main>
    </div>
  );
}
