"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glowOpacity?: number;
  baseZ?: number;
  hoverZ?: number;
}

export function TiltCard({
  children,
  className,
  tiltAmount = 8,
  glowOpacity = 0.5,
  baseZ = 0,
  hoverZ = 50,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const isHovered = useMotionValue(0);

  // Slow in, smooth out physics (premium feel)
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const smoothHover = useSpring(isHovered, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltAmount, tiltAmount]);
  
  // Parallax Z movement
  const zPosition = useTransform(smoothHover, [0, 1], [baseZ, hoverZ]);
  
  // Responsive shadow extending when tilting and moving towards user
  const shadowOpacity = useTransform(smoothHover, [0, 1], [0, glowOpacity]);
  
  // Complex ambient light calculation
  const glowX = useTransform(smoothX, [0, 1], ["-20%", "120%"]);
  const glowY = useTransform(smoothY, [0, 1], ["-20%", "120%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => isHovered.set(1);
  const handleMouseLeave = () => {
    isHovered.set(0);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl border border-white/5 bg-surface transition-colors duration-500 will-change-transform group",
        className
      )}
      style={{
        rotateX,
        rotateY,
        z: zPosition,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Front Ambient/Reflection Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] mix-blend-overlay transition-opacity duration-500"
        style={{
          opacity: shadowOpacity,
          background: `radial-gradient(400px circle at calc(${glowX} * 1) calc(${glowY} * 1), rgba(255,255,255,0.15), transparent 50%)`,
          transform: "translateZ(1px)"
        }}
      />
      
      {/* Dynamic Edge Lighting (Accent) */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[inherit] bg-gradient-to-br from-accent/0 via-accent/20 to-accent/0 transition-opacity duration-700"
        style={{ opacity: shadowOpacity, transform: "translateZ(-1px)" }}
      />
      
      {/* Main Structural Content Box */}
      <div 
        className="relative w-full h-full z-20 rounded-[inherit]" 
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>

      {/* Floating Space Shadow (Drop Shadow) detached in Z layout */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-20 rounded-[inherit] bg-accent/10 blur-[40px] transition-opacity duration-500"
        style={{
          opacity: shadowOpacity,
          transform: "translateZ(-20px)"
        }}
      />
    </motion.div>
  );
}
