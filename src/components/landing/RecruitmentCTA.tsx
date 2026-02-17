"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const recruitingClasses = [
  { name: "Warrior", color: "bg-class-warrior" },
  { name: "Paladin", color: "bg-class-paladin" },
  { name: "Warlock", color: "bg-class-warlock" },
  { name: "Shaman", color: "bg-class-shaman" },
  { name: "Priest", color: "bg-class-priest" },
];

export default function RecruitmentCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-500" />
      <div className="absolute inset-0 texture-metal" />

      {/* Glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-300/[0.04] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-300/[0.03] blur-[80px]" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-cinzel)] text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4"
        >
          Recruitment Open
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-6"
        >
          Answer the Call
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-silver-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We&apos;re looking for dedicated raiders who are ready to push
          content at the highest level. If you bring the skill and the
          attitude, we&apos;ll bring the community. Exceptional players of all
          classes are always considered.
        </motion.p>

        {/* Currently Recruiting Classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <p className="text-sm text-silver-500 uppercase tracking-[0.2em] mb-4 font-[family-name:var(--font-cinzel)]">
            High Priority
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {recruitingClasses.map((c) => (
              <span
                key={c.name}
                className="flex items-center gap-2 rounded-sm border border-gold-300/15 bg-dark-400/50 px-4 py-2 text-sm text-silver-200"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${c.color}`} />
                <span className="font-[family-name:var(--font-cinzel)] tracking-wide">
                  {c.name}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/apply"
            className="group relative overflow-hidden rounded-sm bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 px-10 py-4 text-base font-bold text-dark-700 uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.35)] font-[family-name:var(--font-cinzel)]"
          >
            <span className="relative z-10">Submit Application</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-100 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-[#5865F2]/40 px-8 py-4 text-base font-semibold text-[#5865F2] uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#5865F2]/70 hover:bg-[#5865F2]/5 font-[family-name:var(--font-cinzel)]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Join Discord
          </a>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}