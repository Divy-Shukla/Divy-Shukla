"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 pt-16 relative overflow-hidden" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" style={{ transform: "translateZ(-200px)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] font-sans">
            I&apos;m Divy.<br />
            <span className="text-text-secondary">I build, deploy, and scale intelligent systems.</span>
          </h1>
          <p className="text-lg text-white font-mono">AI Systems Builder</p>
          <p className="max-w-md text-sm text-text-secondary leading-relaxed">
            Dual Degree Data Science (IIT Madras)<br />
            BSc (IGNOU)
          </p>
          
          <div className="flex gap-4 mt-6">
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10">Explore Work</a>
            <a href="#contact" className="border border-white/10 px-6 py-3 rounded text-sm font-medium hover:bg-white/5 transition-colors">Contact</a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[3/4] lg:aspect-square mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full" style={{ transform: "translateZ(-50px)" }} />
          <TiltCard 
            tiltAmount={8} 
            glowOpacity={0.6} 
            baseZ={0}
            hoverZ={60}
            className="h-full w-full p-0 flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden"
          >
            <Image
              src="/photos/Divy.jpg"
              alt="Divy"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              style={{ transform: "translateZ(10px)" }}
            />
            <div 
              className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded shadow-xl" 
              style={{ transform: "translateZ(40px)" }}
            >
              <span className="font-mono text-xs text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">[ STATUS: BUILDING ]</span>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
