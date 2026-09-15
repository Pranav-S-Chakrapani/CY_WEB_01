"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Info } from "lucide-react";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";
import ScrollReveal from "@/components/ui/scroll/ScrollReveal";

const stats = [
  { label: "EST. 2024", value: "2024", sub: "Pulsing System", type: "pulse" },
  { label: "120 SEATS", value: "120", sub: "Capacity Limit", type: "bar" },
  { label: "2 PROGRAMS", value: "2", sub: "Binary Switch", type: "binary" },
  { label: "100% PRACTICAL", value: "100", sub: "Skill Based", type: "pie" },
];

const binaryColumns = Array.from({ length: 20 }, (_, column) => ({
  delay: `${(column % 7) * 0.27}s`,
  text: Array.from({ length: 50 }, (_, bit) => ((column * 17 + bit * 11) % 3 === 0 ? "1" : "0")).join(""),
}));

const featureTags = [
  "Industry-Ready Curriculum",
  "Established 2024",
  "Practical Applications",
  "Expert Collaboration",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [binaryRain, setBinaryRain] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView) {
      setBinaryRain(true);
      const timer = setTimeout(() => setBinaryRain(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <SectionAtmosphere id="about" variant="neutral" className="py-24 px-6 lg:px-24">
      <div ref={containerRef}>
      {/* Binary Rain Background — color resolves to on-brand indigo via --neon-cyan token */}
      {binaryRain && mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07] flex justify-around overflow-hidden">
          {binaryColumns.map((column, i) => (
            <div
              key={i}
              className="text-neon-cyan font-mono text-xs break-all animate-matrix-fall"
              style={{ animationDelay: column.delay }}
            >
              {column.text}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-center">

        {/* ── Left column: text content ─────────────────────────────────── */}
        <div>
          {/* Eyebrow — font-mono, indigo, sentence case */}
          <p className="font-mono text-xs tracking-[0.22em] text-neon-cyan mb-4 uppercase">
            About the department
          </p>

          <SectionHeading
            align="left"
            animated={false}
            className="!mb-8 text-text-primary"
          >
            <span className="flex items-center gap-4">
              <Info size={36} className="text-neon-cyan shrink-0" />
              About the Department
            </span>
          </SectionHeading>

          <ScrollReveal
            variant="blur"
            className="space-y-5 text-base md:text-lg leading-relaxed text-text-muted"
          >
            <p>
              The Department of CS-Cybersecurity and the Department of CS-Information Security at GM University is at the forefront of network analytics, network security, and topologies, dedicated to advancing the field of cybersecurity through innovative research and quality education. Established in 2024, our department has quickly become a center of excellence for cybersecurity education and research.
            </p>
            <p>
              We offer comprehensive programs that blend theoretical foundations with practical applications, preparing students for careers in the rapidly evolving field of cybersecurity. Our curriculum is designed in collaboration with industry experts to ensure relevance and employability.
            </p>
          </ScrollReveal>

          {/* Feature tags — clean bordered mono pills */}
          <div className="mt-10 flex flex-wrap gap-3" data-stagger>
            {featureTags.map((tag) => (
              <div
                key={tag}
                data-stagger-item
                className="rounded-full border border-black/12 bg-white px-4 py-1.5 font-mono text-[11px] tracking-widest text-text-muted transition-all hover:border-neon-cyan/50 hover:text-neon-cyan md:text-xs"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: scanner-frame stat panel ───────────────────── */}
        <div className="relative border border-black/10 bg-white rounded-2xl p-8">
          {/* L-bracket corner accents — top-left */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-3 left-3 block h-[18px] w-[18px]"
            style={{
              borderTop: "2px solid #3654ff",
              borderLeft: "2px solid #3654ff",
            }}
          />
          {/* L-bracket corner accents — bottom-right */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-3 right-3 block h-[18px] w-[18px]"
            style={{
              borderBottom: "2px solid #3654ff",
              borderRight: "2px solid #3654ff",
            }}
          />

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-orbitron font-bold text-3xl md:text-4xl text-text-primary leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] tracking-widest text-text-muted uppercase">
                  {stat.sub}
                </span>
                <span className="mt-1 h-px w-8 bg-neon-cyan/30" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
      `}</style>
      </div>
    </SectionAtmosphere>
  );
}
