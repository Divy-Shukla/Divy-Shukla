export function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0A0A0A]/50">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="text-3xl font-bold font-sans">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="font-mono text-6xl font-bold">01</span>
            </div>
            <p className="font-mono text-xs text-accent mb-4 block tracking-widest uppercase">Dual Degree</p>
            <h3 className="text-2xl font-bold mb-2">Data Science</h3>
            <p className="text-text-secondary">IIT Madras</p>
          </div>

          <div className="glass-card p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="font-mono text-6xl font-bold">02</span>
            </div>
            <p className="font-mono text-xs text-accent mb-4 block tracking-widest uppercase">Bachelor's Degree</p>
            <h3 className="text-2xl font-bold mb-2">BSc</h3>
            <p className="text-text-secondary">IGNOU</p>
          </div>
        </div>
      </div>
    </section>
  );
}
