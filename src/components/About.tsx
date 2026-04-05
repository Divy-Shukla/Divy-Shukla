"use client";
import React from "react";
import { motion } from "framer-motion";

export function About() {
  const previewSkills = [
    "Machine Learning Models",
    "Agentic AI",
    "Workflow Automation",
    "Full-Stack Development",
    "Data Pipelines",
    "Vector Databases",
    "Scalable Architecture"
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold font-sans">Execution.</h2>
          <div className="w-12 h-[1px] bg-accent"></div>
        </div>
        
        <div className="flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl">
            I don&apos;t just write code; I architect intelligent systems. From autonomous agents to scalable data processing, I focus on real-world impact over theoretical perfection.
          </p>
          
          <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-4 w-max py-2"
            >
              {[...previewSkills, ...previewSkills].map((skill, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-surface text-xs font-mono text-text-secondary whitespace-nowrap hover:text-white hover:border-white/30 transition-colors">
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
