"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PhysicalIconProps {
  href: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

export function PhysicalIcon({ href, icon, className, delay = 0 }: PhysicalIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  // Custom cursor mapping
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const isHovered = useMotionValue(0);
  
  // Spring settings mapping strictly to duration ~0.4s and easeOut feel
  const springConfig = { stiffness: 200, damping: 20, mass: 0.8 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const hoverSpring = useSpring(isHovered, springConfig);

  // Aggressive 3D rot values for tiny objects
  const rotateX = useTransform(smoothY, [0, 1], [30, -30]);
  const rotateY = useTransform(smoothX, [0, 1], [-30, 30]);
  
  // Forward pull (z index push)
  const translateZ = useTransform(hoverSpring, [0, 1], [0, 60]);
  const glowOpacity = useTransform(hoverSpring, [0, 1], [0.3, 1]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    isHovered.set(0);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Link href={href} target="_blank" passHref legacyBehavior>
      <motion.a
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => isHovered.set(1)}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        whileTap={{ scale: 0.92, translateZ: 10, transition: { duration: 0.1 } }}
        className={cn(
          "relative flex items-center justify-center w-10 h-10 rounded-xl cursor-alias group will-change-transform",
          className
        )}
        style={{
          rotateX,
          rotateY,
          z: translateZ,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Core Glass Body */}
        <div 
          className="absolute inset-0 rounded-[inherit] bg-black/50 backdrop-blur-md border border-white/10 transition-colors duration-500 overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Internal blue glow */}
          <motion.div 
            className="absolute inset-0 bg-accent/20 blur-md transition-opacity duration-300 pointer-events-none"
            style={{ opacity: glowOpacity }}
          />
        </div>

        {/* Drop shadow expanding natively on Z */}
        <motion.div 
          className="absolute -inset-2 bg-accent/30 rounded-full blur-[20px] -z-10 pointer-events-none"
          style={{ opacity: hoverSpring, transform: "translateZ(-40px)" }}
        />

        {/* Floating Icon Surface */}
        <div 
          className="relative text-white/70 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          style={{ transform: "translateZ(25px)" }}
        >
          {icon}
        </div>
      </motion.a>
    </Link>
  );
}
