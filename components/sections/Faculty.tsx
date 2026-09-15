"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ExternalLink } from "lucide-react";
import { faculty } from "@/lib/siteData";
import SectionHeading from "@/components/ui/scroll/SectionHeading";
import SectionAtmosphere from "@/components/ui/scroll/SectionAtmosphere";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Faculty() {
  return (
    <SectionAtmosphere id="faculty" className="bg-cyber-black px-6 py-24 lg:px-24" variant="amber">
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading label="Department Team" align="left" animated={false}>
          <span className="flex items-center gap-4">
            <Users size={48} className="text-neon-cyan" />
            <span>
              Faculty <span className="text-neon-cyan">Directory</span>
            </span>
          </span>
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faculty.map((member, index) => (
            <motion.article
              key={member.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              className="spotlight-card group flex flex-col items-center overflow-hidden rounded-2xl border border-black/8 bg-white pb-6 text-center transition-all duration-300 hover:-translate-y-[3px] hover:border-black/16"
            >
              <div className="relative mb-4 mt-8 h-40 w-40 shrink-0 rounded-full bg-[#eef1ff] p-[4px] transition-all duration-500">
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 4}
                  />
                </div>
              </div>

              <div className="flex w-full flex-1 flex-col items-center justify-between px-5">
                <div>
                  <h3 className="mb-1 text-xl font-bold leading-snug text-text-primary">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-neon-cyan">
                    {member.role}
                  </p>
                </div>
                {member.cv && (
                  <a
                    href={member.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0c1222] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-neon-cyan hover:-translate-y-0.5"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionAtmosphere>
  );
}

