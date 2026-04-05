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

  // Premium spring physics mapping to 0.4-0.6s easeOut
  const springConfig = { bounce: 0.1, duration: 500 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const smoothHover = useSpring(isHovered, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltAmount, tiltAmount]);
  
  // Parallax Z movement
  const zPosition = useTransform(smoothHover, [0, 1], [baseZ, hoverZ]);
  const scaleEffect = useTransform(smoothHover, [0, 1], [1, 1.02]);
  
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
        scale: scaleEffect,
        transformStyle: "preserve-3d",
      }}
    >
      {/* STATIC AMBIENT LIGHTING SYSTEM (Top White Edge + Right Blue Volume) */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay z-20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_-15px_0_30px_-10px_rgba(59,130,246,0.12)]"
        style={{ 
          background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.05) 0%, transparent 60%)',
          transform: "translateZ(1px)" 
        }} 
      />

      {/* DYNAMIC Front Ambient/Reflection Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] mix-blend-overlay transition-opacity duration-500"
        style={{
          opacity: shadowOpacity,
          background: `radial-gradient(400px circle at calc(${glowX} * 1) calc(${glowY} * 1), rgba(255,255,255,0.15), transparent 50%)`,
          transform: "translateZ(2px)"
        }}
      />
      
      {/* Main Structural Content Box */}
      <div 
        className="relative w-full h-full z-20 rounded-[inherit]" 
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>

      {/* Floating Space Shadow (Directional Offset) detached in Z layout */}
      <motion.div
        className="pointer-events-none absolute -inset-2 -z-20 rounded-[inherit] bg-black blur-[25px] transition-all duration-500 opacity-60"
        style={{
          opacity: useTransform(smoothHover, [0, 1], [0.3, glowOpacity * 1.5]), // Deep shadow based on number prop
          y: useTransform(smoothHover, [0, 1], [5, 15]), // Drops down simulating top light
          z: useTransform(smoothHover, [0, 1], [-10, -40]) // physically distant
        }}
      />
    </motion.div>
  );
}
