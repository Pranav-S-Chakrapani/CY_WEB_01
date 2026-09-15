"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Terminal } from "lucide-react";

export default function HeroContent() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text-like entrance for department line
      gsap.from(".dept-line span", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });

      // Title entrance
      gsap.from(".hero-title", {
        opacity: 0,
        x: -100,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Typewriter subline
      const sublineText = "Building ethical, industry-ready cybersecurity professionals";
      const sublineEl = document.querySelector(".subline");
      if (sublineEl) {
        let i = 0;
        sublineEl.textContent = "";
        const type = () => {
          if (i < sublineText.length) {
            sublineEl.textContent += sublineText.charAt(i);
            i++;
            setTimeout(type, 50);
          }
        };
        setTimeout(type, 1500);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-24">
      <div className="max-w-6xl flex flex-col items-center text-center">
        {/* KCET Badge — white bg, subtle border, teal pulse dot, font-mono label */}
        <div className="mb-8 px-6 py-2 rounded-full border border-black/10 bg-white shadow-sm flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse shrink-0"></span>
          <span className="font-mono font-medium text-text-primary text-xs md:text-sm tracking-[0.2em] uppercase">B.Tech KCET Code: E303</span>
        </div>

        {/* Top Line — text-muted, font-mono, per-letter stagger preserved */}
        <div className="dept-line mb-6 text-sm md:text-base tracking-[0.34em] text-text-muted flex flex-wrap justify-center gap-2 font-mono font-semibold">
          {"DEPARTMENT OF".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </div>

        {/* Main Title — gradient on first line, solid text-primary on second */}
        <h1 ref={titleRef} className="hero-title text-5xl md:text-7xl xl:text-8xl font-orbitron font-black leading-tight mb-8">
          <span
            className="block bg-clip-text text-transparent animate-gradient-flow pb-2"
            style={{ backgroundImage: "linear-gradient(100deg, #3654ff 0%, #7b3fe4 55%, #00b89c 100%)", backgroundSize: "200% auto" }}
          >
            CYBER SECURITY
          </span>
          <span className="block text-text-primary">
            &amp; INFORMATION SECURITY
          </span>
        </h1>

        {/* Subline — teal accent, font-mono, typewriter + blink-caret untouched */}
        <div className="flex items-center justify-center gap-3 mb-14 max-w-2xl mx-auto">
          <Terminal size={24} className="text-neon-green shrink-0" />
          <p className="subline font-mono text-lg md:text-2xl border-r-2 border-neon-green pr-2 animate-blink-caret text-left" style={{ color: "#00b89c" }}>
            Building ethical, industry-ready cybersecurity professionals
          </p>
        </div>

        {/* CTA Buttons — pill-shaped, lift on hover, no sliding fill */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Primary — ink-navy solid */}
          <a
            href="#programs"
            className="interactive px-10 py-4 rounded-full bg-[#0c1222] text-white font-orbitron font-bold tracking-widest text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(12,18,34,0.25)] focus-visible:outline-offset-4"
          >
            Explore Programs
          </a>

          {/* Secondary — white + border */}
          <a
            href="#faculty"
            className="interactive px-10 py-4 rounded-full bg-white border border-black/15 text-text-primary font-orbitron font-bold tracking-widest text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(12,18,34,0.12)] focus-visible:outline-offset-4"
          >
            Meet Faculty
          </a>
        </div>
      </div>

      {/* Marquee Ticker — white/blur panel, light border, text-muted, font-mono */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden bg-white/80 backdrop-blur-sm border-t border-black/8 py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-mono text-text-muted text-sm tracking-widest px-8">
              Ethical Hacking | Digital Forensics | Network Security | Cryptography | Secure Software | Cyber Defense |
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00b89c; }
        }
        .animate-blink-caret {
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
