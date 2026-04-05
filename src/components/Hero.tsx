"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

export function Hero() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const textRotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const textRotateY = useTransform(smoothX, [0, 1], [-3, 3]);

  return (
    <section 
      id="home" 
      className="min-h-[95vh] flex items-center px-6 md:px-12 pt-16 relative overflow-hidden" 
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" style={{ transform: "translateZ(-200px)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center z-10" style={{ transformStyle: "preserve-3d" }}>
        
        {/* TEXT COLUMN - Stable Authority */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
          style={{ rotateX: textRotateX, rotateY: textRotateY, transformStyle: "preserve-3d" }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight font-sans text-white drop-shadow-xl" style={{ transform: "translateZ(10px)" }}>
            I&apos;m Divy.<br />
            <span className="text-[#a1a1aa] font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight">I build, deploy, and scale intelligent systems.</span>
          </h1>
          <p className="text-xl text-accent font-mono tracking-widest mt-2" style={{ transform: "translateZ(5px)" }}>// AI SYSTEMS BUILDER</p>
          
          <div className="flex gap-4 mt-8" style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}>
            {/* Primary CTA - 3D Hover & Glow */}
            <a 
              href="#projects" 
              className="relative group bg-white text-black px-8 py-4 rounded text-sm font-bold tracking-wider hover:bg-neutral-200 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              style={{ transform: "translateZ(0px)" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateZ(40px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateZ(0px)")}
            >
              <span className="absolute inset-0 rounded-[inherit] bg-white opacity-20 animate-pulse" />
              <span className="relative z-10">Explore Work</span>
            </a>
            
            <a 
              href="#contact" 
              className="border border-white/10 px-8 py-4 rounded text-sm font-medium text-text-secondary hover:text-white hover:border-white/30 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* VISUAL COLUMN - Deep Spotlight Parallax */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[3/4] lg:aspect-square mx-auto w-full max-w-sm lg:max-w-lg"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Spotlight behind face */}
          <div className="absolute inset-0 bg-accent/30 blur-[100px] rounded-full opacity-80" style={{ transform: "translateZ(-80px)" }} />
          
          <TiltCard 
            tiltAmount={12} 
            glowOpacity={0.8} 
            baseZ={60}
            hoverZ={100}
            className="h-full w-full p-0 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              <Image
                src="/photos/Divy.jpg"
                alt="Divy"
                width={600}
                height={600}
                className="object-cover w-full h-full scale-[1.02]"
              />
              
              {/* Soft Rim Light overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0_0_40px_rgba(255,255,255,0.05),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-10px_20px_rgba(59,130,246,0.1)]" />
              
              <div 
                className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-xl px-4 py-2 border border-white/10 rounded shadow-xl" 
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="font-mono text-xs text-accent drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">[ STATUS: BUILDING ]</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
