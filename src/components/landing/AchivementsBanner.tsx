"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "#1",
    label: "SSC Speed Clear",
    sub: "World Record",
    color: "text-gold-300",
  },
  {
    value: "45/45",
    label: "Bosses Cleared",
    sub: "All TBC Content",
    color: "text-emerald-300",
  },
  {
    value: "100+",
    label: "Guild Members",
    sub: "Active Raiders",
    color: "text-gold-300",
  },
  {
    value: "2019",
    label: "Founded",
    sub: "Classic Launch",
    color: "text-emerald-300",
  },
];

export default function AchievementsBanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-500" />
      <div className="absolute inset-0 texture-metal" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <span
                className={`font-[family-name:var(--font-cinzel-decorative)] text-4xl sm:text-5xl lg:text-6xl font-bold ${stat.color} mb-2`}
              >
                {stat.value}
              </span>
              <span className="font-[family-name:var(--font-cinzel)] text-sm sm:text-base text-silver-200 uppercase tracking-[0.15em] mb-1">
                {stat.label}
              </span>
              <span className="text-xs text-silver-500 tracking-wide">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}