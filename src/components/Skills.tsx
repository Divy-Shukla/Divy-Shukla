import { TiltCard } from "@/components/TiltCard";

export function Skills() {
  const categories = [
    {
      title: "Core",
      skills: "Python, C++, TypeScript, JavaScript, SQL",
      className: "md:col-span-2 md:row-span-1 border-t-2 border-t-accent/50",
      depth: 0,
    },
    {
      title: "AI",
      skills: "n8n, LangChain, OpenAI API, Hugging Face",
      className: "md:col-span-1 md:row-span-2 border-t-2 border-t-purple-500/50",
      depth: 20,
    },
    {
      title: "Web",
      skills: "React, Node.js, Tailwind CSS, Framer Motion",
      className: "md:col-span-1 md:row-span-1 border-t-2 border-t-emerald-500/50",
      depth: -20,
    },
    {
      title: "Data",
      skills: "Pandas, NumPy, AWS, Firebase, Git",
      className: "md:col-span-1 md:row-span-1 border-t-2 border-t-amber-500/50",
      depth: 10,
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-b border-white/5" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12" style={{ transformStyle: "preserve-3d" }}>
        <div className="flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
          <h2 className="text-3xl font-bold font-sans">Technical Arsenal</h2>
          <span className="font-mono text-xs text-accent">[ SYSTEM LOG : OK ]</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[120px]" style={{ transformStyle: "preserve-3d" }}>
          {categories.map((cat, i) => (
            <TiltCard 
              key={i} 
              baseZ={cat.depth}
              hoverZ={60}
              tiltAmount={5}
              glowOpacity={0.3}
              className={`p-6 flex flex-col justify-between group bg-surface/80 backdrop-blur-md ${cat.className}`}
            >
              <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider group-hover:text-white transition-colors" style={{ transform: "translateZ(20px)" }}>
                {cat.title}
              </h3>
              <p className="text-base font-medium leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                {cat.skills}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
