"use client";

import { motion } from "framer-motion";
import { Shield, Lock, ChevronRight, Download } from "lucide-react";
import { useState } from "react";
import { programs as programData } from "@/lib/siteData";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

const programs = programData.map((program, index) => ({
  ...program,
  accent: index === 0 ? "text-neon-cyan" : "text-neon-magenta",
  icon: index === 0 ? Shield : Lock,
}));

export default function Programs() {
  return (
    <SectionAtmosphere id="programs" className="bg-cyber-black py-24 px-6 lg:px-24" variant="magenta">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading label="Our Academic Offerings" align="center" animated={false}>
          Degree <span className="text-neon-cyan">Programs</span>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {programs.map((program, idx) => (
            <ProgramCard key={program.title} program={program} idx={idx} />
          ))}
        </div>
      </div>
    </SectionAtmosphere>
  );
}

type Program = (typeof programs)[number];

function ProgramCard({ program, idx }: { program: Program; idx: number }) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleDownload = (type: string) => {
    setLoading(type);
    setTimeout(() => {
      setLoading(null);
      window.open(type === "program" ? program.programLink : program.courseLink, "_blank");
    }, 1500);
  };

  const Icon = program.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="spotlight-card group relative overflow-hidden rounded-2xl border border-black/8 bg-cyber-panel p-10 transition-all duration-300 hover:-translate-y-[3px] hover:border-black/16"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 mb-8 flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
        {/* Icon badge — #eef1ff chip */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[#eef1ff]">
          <Icon size={32} className={`${program.accent}`} />
        </div>

        <div>
          <h3 className="mb-3 font-orbitron text-2xl font-bold text-text-primary md:text-3xl">
            {program.title}
          </h3>
          <p className="leading-relaxed text-text-muted">{program.description}</p>
        </div>
      </div>

      <div className="relative z-10 mb-10 rounded-xl border border-black/6 bg-cyber-dark p-6">
        <h4 className="mb-4 border-b border-black/6 pb-2 font-mono text-[11px] uppercase tracking-widest text-text-muted">
          Key Areas of Focus
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {program.specs.map((spec: string) => (
            <div key={spec} className="group/item flex items-start gap-3">
              <ChevronRight
                size={16}
                className={`${program.accent} mt-0.5 shrink-0 transition-transform group-hover/item:translate-x-1`}
              />
              <span className="text-sm font-medium text-text-muted transition-colors group-hover/item:text-text-primary">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 sm:flex-row">
        {/* Primary pill button */}
        <button
          type="button"
          onClick={() => handleDownload("program")}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0c1222] px-6 py-3.5 font-orbitron text-sm font-bold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(12,18,34,0.25)]"
        >
          {loading === "program" ? (
            <span className="animate-pulse">Loading Document...</span>
          ) : (
            <><Download size={16} /> Program Details</>
          )}
        </button>

        {/* Secondary pill button */}
        <button
          type="button"
          onClick={() => handleDownload("course")}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3.5 font-orbitron text-sm font-bold tracking-wide text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(12,18,34,0.10)]"
        >
          {loading === "course" ? (
            <span className="animate-pulse text-text-muted">Loading...</span>
          ) : (
            <><Download size={16} className="text-text-muted" /> Course Structure</>
          )}
        </button>
      </div>
    </motion.div>
  );
}
