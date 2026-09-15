"use client";

import { motion } from "framer-motion";
import { FileText, Users } from "lucide-react";

const internalMembers = [
  { name: "Dr. S R Shankapal", role: "Vice Chancellor", sub: "GM University", image: "/cyberweb/shankpal.jpg" },
  { name: "Dr. Venu Gopala Rao", role: "Pro Vice Chancellor", sub: "GM University", image: "/cyberweb/Venu Gopala Rao.jpg" },
  { name: "Dr. Praveen J", role: "Director", sub: "GM University", image: "/cyberweb/praveen.png" },
  { name: "Mrs. Nayana K", role: "HOD", sub: "Dept. of CY & IY, GM University", image: "/cyberweb/nayana.png" },
];

const externalMembers = [
  { name: "Dr. Pavan Kumar C.", role: "Assistant Professor", sub: "IIIT, Dharwad", image: "/cyberweb/pavan_kumar_c.png" },
  { name: "Dr. Girish G N", role: "Assistant Professor", sub: "IIIT, Dharwad", image: "/cyberweb/girish_gn.png" },
  { name: "R. Murthy Naik", role: "Senior Technical Manager", sub: "HCL Technologies, Bengaluru", image: "/cyberweb/murthy_naik.png" },
  { name: "Dr. Gururaj H. L.", role: "Associate Professor & Head", sub: "Dept. of Cyber Security, MIT, Bengaluru", image: "/cyberweb/gururaj_hl.png" },
];

function MemberCard({ member, delay }: { member: { name: string; role: string; sub: string; image: string }, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="spotlight-card p-6 bg-white border border-black/8 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-[3px] hover:border-black/16 flex flex-col items-center text-center"
    >
      <div className="relative w-32 h-32 rounded-full p-[4px] bg-[#eef1ff] shrink-0 mb-4 transition-all duration-500">
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
          <img src={member.image} alt={member.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>
      </div>
      <h4 className="font-orbitron font-bold text-text-primary text-lg mb-1">{member.name}</h4>
      <p className="text-sm font-bold text-neon-cyan tracking-wider uppercase leading-snug">{member.role}</p>
      <p className="text-xs text-text-muted mt-1 leading-snug">{member.sub}</p>
    </motion.div>
  );
}

export default function BoardOfStudies() {
  return (
    <section id="board-of-studies" className="py-24 px-6 lg:px-24 bg-cyber-black overflow-hidden border-t border-black/6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-text-muted">Academic Governance</p>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-text-primary flex items-center justify-center gap-4">
            <Users size={48} className="text-neon-cyan" />
            Board of <span className="text-neon-cyan">Studies</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted max-w-3xl mx-auto">
            The Board of Studies guides curriculum relevance, academic quality, and industry alignment for the department. Access the details and decisions of our most recent BOS meeting below.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold font-orbitron text-text-primary mb-8 border-b border-black/6 pb-4 text-center md:text-left">Internal Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {internalMembers.map((member, idx) => (
              <MemberCard key={member.name} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold font-orbitron text-text-primary mb-8 border-b border-black/6 pb-4 text-center md:text-left">External Members</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {externalMembers.map((member, idx) => (
              <MemberCard key={member.name} member={member} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.a
            href="/cyberweb/bos.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0c1222] text-white font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-neon-cyan hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(54,84,255,0.18)]"
          >
            <FileText size={24} />
            <span>View BOS Meeting PDF</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

