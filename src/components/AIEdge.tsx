"use client";
import React from "react";
import { TiltCard } from "@/components/TiltCard";

export function AIEdge() {
  const cards = [
    {
      title: "Full-Spectrum AI Engineering",
      desc: "End-to-end ML model deployment."
    },
    {
      title: "AI-Augmented Development",
      desc: "Accelerating workflows via AI code gen."
    },
    {
      title: "Agentic Systems",
      desc: "Autonomous multi-agent architectures."
    },
    {
      title: "Generative AI Integration",
      desc: "Custom LLM integrations for enterprise."
    }
  ];

  return (
    <section id="ai-edge" className="py-24 px-6 md:px-12 border-b border-white/5 relative overflow-hidden" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
      {/* Animated neural/grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold font-sans">The AI Edge</h2>
          <p className="text-sm font-mono text-text-secondary">Core Competencies</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <TiltCard 
              key={i}
              tiltAmount={15}
              glowOpacity={0.8}
              baseZ={10}
              hoverZ={60}
              className="h-48 rounded-xl border border-white/10 group bg-black/40 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              {/* Subtle animated light streak inside the card */}
              <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-accent/5 to-transparent group-hover:animate-[shimmer_2s_infinite] -rotate-45 pointer-events-none" />
              
              <div className="p-8 h-full flex flex-col justify-end pointer-events-none">
                <h3 className="text-xl font-bold text-white mb-2 shadow-black drop-shadow-md" style={{ transform: "translateZ(30px)" }}>{card.title}</h3>
                <p className="text-sm text-text-secondary" style={{ transform: "translateZ(15px)" }}>{card.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
