"use client";
import React from "react";
import Link from "next/link";
import { Briefcase, Code, Camera, MessageCircle } from "lucide-react";
import { PhysicalIcon } from "@/components/PhysicalIcon";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center justify-between px-6 md:px-12">
      <div className="font-bold text-lg text-white tracking-widest">Divy</div>
      <div className="hidden md:flex items-center gap-6 text-xs text-text-secondary font-mono tracking-wider">
        <Link href="#home" className="hover:text-white transition-colors">Home</Link>
        <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#education" className="hover:text-white transition-colors">Education</Link>
        <Link href="#ai-edge" className="hover:text-white transition-colors">AI Edge</Link>
        <Link href="#certificates" className="hover:text-white transition-colors">Certificates</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex gap-4 text-text-secondary" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
          <PhysicalIcon href="https://linkedin.com/in/" icon={<Briefcase size={16} />} delay={0.1} />
          <PhysicalIcon href="https://github.com/" icon={<Code size={16} />} delay={0.2} />
          <PhysicalIcon href="https://instagram.com/" icon={<Camera size={16} />} delay={0.3} />
          <PhysicalIcon href="https://x.com/" icon={<MessageCircle size={16} />} delay={0.4} />
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-mono border border-white/20 px-4 py-1.5 rounded hover:border-accent hover:text-accent transition-all group">
          <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Resume</span>
        </a>
      </div>
    </nav>
  );
}
