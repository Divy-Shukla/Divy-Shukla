"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "FinSaarthi",
      description: "Intelligent Financial Advisor System",
      problem: "Lack of accessible, personalized financial advice.",
      solution: "Developed an AI-driven advisory system using agents.",
      result: "Reduced manual advisory time by 80% while increasing accuracy.",
    },
    {
      title: "PharmaGuard",
      description: "Healthcare Supply Chain Integrity",
      problem: "Counterfeit drugs entering the pharmaceutical supply chain.",
      solution: "Built an immutable tracking system integrating AI detection.",
      result: "Achieved 99% accuracy in identifying fraudulent patterns.",
    },
    {
      title: "Advotech",
      description: "Legal Tech Automation Platform",
      problem: "Lawyers spend 60% of their time on manual case research.",
      solution: "Engineered an AI workflow that parses case files.",
      result: "Cut research time by half for 50+ pilot users.",
    },
    {
      title: "Card Design",
      description: "Generative UI System",
      problem: "Design to code workflow is slow and error-prone.",
      solution: "Created an autonomous agent that translates requirements.",
      result: "Generated 100+ production-ready component variants.",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-b border-white/5" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="text-3xl font-bold font-sans">System Modules</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <TiltCard 
                key={i} 
                tiltAmount={8} 
                glowOpacity={0.6}
                baseZ={isExpanded ? 50 : 0}
                hoverZ={isExpanded ? 80 : 30}
                className={`p-6 md:p-8 cursor-pointer transition-all duration-700 ${isExpanded ? 'lg:col-span-2 shadow-2xl shadow-blue-500/20' : ''}`}
              >
                <div 
                  className="flex flex-col h-full space-y-6"
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <div className="flex justify-between items-start" style={{ transform: "translateZ(20px)" }}>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                      <p className="text-sm font-mono text-accent">{proj.description}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                      <motion.div 
                        animate={{ rotate: isExpanded ? 45 : 0 }} 
                        className="w-3 h-3 border-r-2 border-b-2 border-white/80" 
                        style={{ borderBottomRightRadius: '1px' }} 
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10" style={{ transform: "translateZ(30px)" }}>
                          <div className="bg-[#0A0A0A] p-4 rounded border border-white/5">
                            <span className="text-xs text-text-secondary font-mono block mb-2">Problem</span>
                            <p className="text-sm text-white">{proj.problem}</p>
                          </div>
                          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] p-4 rounded border border-accent/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                            <span className="text-xs text-accent font-mono block mb-2">Solution</span>
                            <p className="text-sm text-white">{proj.solution}</p>
                          </div>
                          <div className="bg-[#0A0A0A] p-4 rounded border border-white/5">
                            <span className="text-xs text-text-secondary font-mono block mb-2">Result</span>
                            <p className="text-sm text-white">{proj.result}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
