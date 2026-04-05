"use client";
import React from "react";
import Link from "next/link";
import { Briefcase, Code, Camera, MessageCircle } from "lucide-react";

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
        <div className="hidden lg:flex gap-4 text-text-secondary">
          <Link href="https://linkedin.com/in/" target="_blank"><Briefcase size={18} className="hover:text-white hover-glow" /></Link>
          <Link href="https://github.com/" target="_blank"><Code size={18} className="hover:text-white hover-glow" /></Link>
          <Link href="https://instagram.com/" target="_blank"><Camera size={18} className="hover:text-white hover-glow" /></Link>
          <Link href="https://x.com/" target="_blank"><MessageCircle size={18} className="hover:text-white hover-glow" /></Link>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-mono border border-white/20 px-4 py-1.5 rounded hover:border-accent hover:text-accent transition-all group">
          <span className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Resume</span>
        </a>
      </div>
    </nav>
  );
}
