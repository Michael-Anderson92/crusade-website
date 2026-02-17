"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function GoldenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.floor(window.innerWidth / 15);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

        // Reset particle when it goes off screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Gold glow
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 215, 0, ${currentOpacity})`);
        gradient.addColorStop(0.4, `rgba(255, 215, 0, ${currentOpacity * 0.4})`);
        gradient.addColorStop(1, "rgba(255, 215, 0, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 200, ${currentOpacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-700" />

      {/* Radial gradient accents */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-300/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold-300/[0.04] blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-crusade-300/[0.03] blur-[80px]" />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,6,10,0.7)_100%)]" />

      {/* Particles */}
      <GoldenParticles />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-48 sm:w-80 sm:h-60 md:w-[420px] md:h-[320px] mb-2"
        >
          <Image
            src="/images/logo.png"
            alt="CRUSADE Guild Logo"
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-cinzel)] text-lg sm:text-xl md:text-2xl text-silver-300 tracking-[0.15em] uppercase mb-3"
        >
          For Glory. For Azeroth. For Crusade.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-silver-400 max-w-2xl mb-10 leading-relaxed"
        >
          Led by{" "}
          <a
            href="https://twitch.tv/esfandtv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-300 hover:text-gold-100 transition-colors duration-300"
          >
            EsfandTV
          </a>{" "}
          — Home of the{" "}
          <span className="text-emerald-300 font-semibold">
            #1 SSC Speed Clear
          </span>{" "}
          in the World
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/apply"
            className="group relative overflow-hidden rounded-sm bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 px-8 py-3.5 text-base font-bold text-dark-700 uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.35)] font-[family-name:var(--font-cinzel)]"
          >
            <span className="relative z-10">Join the Crusade</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-100 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          <Link
            href="/roster"
            className="rounded-sm border border-gold-300/30 px-8 py-3.5 text-base font-semibold text-gold-300 uppercase tracking-[0.2em] transition-all duration-300 hover:border-gold-300/60 hover:bg-gold-300/5 hover:shadow-[0_0_15px_rgba(255,215,0,0.1)] font-[family-name:var(--font-cinzel)]"
          >
            View Roster
          </Link>

          <a
            href="https://twitch.tv/esfandtv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-sm border border-purple-500/30 px-8 py-3.5 text-base font-semibold text-purple-300 uppercase tracking-[0.15em] transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-500/5 font-[family-name:var(--font-cinzel)]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
            </svg>
            Watch Live
          </a>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-dark-600 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-silver-500 uppercase tracking-[0.3em] font-[family-name:var(--font-cinzel)]">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-gold-300/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}