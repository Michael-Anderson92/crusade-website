"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "Competitive Excellence",
    description:
      "We don't just clear content — we dominate it. The #1 SSC Speed Clear in the world wasn't luck. It was preparation, execution, and a team that refuses to settle.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Genuine Community",
    description:
      "When Esfand met 20+ guild members at BlizzCon, he broke down in tears. This isn't just a guild — it's a family built on shared victories, late-night wipes, and real human connection.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Holy Purpose",
    description:
      "Led by the Ret Bull himself, CRUSADE carries the spirit of the Retribution Paladin — relentless, underestimated, and always proving the doubters wrong.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-300/[0.02] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-300/[0.02] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-cinzel)] text-sm uppercase tracking-[0.3em] text-gold-300 mb-4"
          >
            Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-cinzel-decorative)] text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient mb-6"
          >
            Forged in Battle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-silver-400 max-w-2xl mx-auto leading-relaxed"
          >
            CRUSADE was founded during the launch of WoW Classic and has grown
            into one of the most recognized guilds in the Classic community.
            Under{" "}
            <a
              href="https://twitch.tv/esfandtv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-gold-100 transition-colors duration-300"
            >
              Esfand&apos;s
            </a>{" "}
            leadership, we&apos;ve achieved world-record speed clears, built a
            thriving community across multiple raid teams, and proven that the
            bonds you forge in Azeroth are as real as it gets.
          </motion.p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="card-surface p-8 group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gold-300/10 text-gold-300 mb-6 transition-all duration-300 group-hover:bg-gold-300/20 group-hover:shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                {v.icon}
              </div>
              <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-semibold text-silver-100 mb-3">
                {v.title}
              </h3>
              <p className="text-silver-400 leading-relaxed text-[15px]">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}