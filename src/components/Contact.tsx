import { Mail, Briefcase, Code, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black relative">
      <div className="absolute inset-0 bg-accent/5" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight">
          Got an idea? <br />
          <span className="text-text-secondary">Let&apos;s turn it into a system.</span>
        </h2>
        
        <p className="text-text-secondary max-w-lg mt-4">
          Open for specialized system building, automation workflows, and AI integration projects.
        </p>

        <a 
          href="mailto:divy@example.com" 
          className="mt-8 bg-white text-black px-8 py-4 rounded font-bold text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3"
        >
          <Mail size={18} />
          Initialize Contact
        </a>

        <div className="flex items-center gap-8 mt-16 text-text-secondary">
          <a href="https://linkedin.com/in/" className="hover:text-white transition-colors" aria-label="LinkedIn"><Briefcase /></a>
          <a href="https://github.com/" className="hover:text-white transition-colors" aria-label="GitHub"><Code /></a>
          <a href="https://x.com/" className="hover:text-white transition-colors" aria-label="Twitter"><MessageCircle /></a>
        </div>
      </div>
    </section>
  );
}
