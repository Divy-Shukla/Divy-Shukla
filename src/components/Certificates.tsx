"use client";
import Image from "next/image";
import { TiltCard } from "@/components/TiltCard";

export function Certificates() {
  const certificates = [
    "/photos/certificate1.jpg",
    "/photos/certificate2.jpg",
    "/photos/certificate3.jpg",
    "/photos/certificate4.jpg",
    "/photos/certificate5.jpg",
  ];

  return (
    <section id="certificates" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#111111]/30" style={{ perspective: "2000px", transformStyle: "preserve-3d" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="text-3xl font-bold font-sans">Certifications</h2>

        <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-8 justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
          {certificates.map((src, index) => {
            const yRotation = index % 3 === 0 ? '5deg' : index % 3 === 2 ? '-5deg' : '0deg';
            const zDepth = index % 2 === 0 ? '0px' : '-20px';
            return (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-full" style={{ transform: `translateZ(${zDepth}) rotateY(${yRotation})`, transformStyle: "preserve-3d" }}>
              <TiltCard 
                tiltAmount={15} 
                glowOpacity={0.7}
                baseZ={0}
                hoverZ={80}
                className="p-1 aspect-video shadow-2xl transition-all duration-700"
              >
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/5 bg-[#0a0a0a]">
                <Image
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]"
                  style={{ transform: "translateZ(10px)" }}
                >
                  <span className="text-white font-mono text-xs tracking-widest uppercase py-2 px-4 border border-white/20 bg-black/50 rounded backdrop-blur-md">Verified</span>
                </div>
              </div>
              </TiltCard>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
