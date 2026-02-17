"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Roster", href: "/roster" },
  { label: "Achievements", href: "/achievements" },
  { label: "Schedule", href: "/schedule" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-dark-600/95 backdrop-blur-md border-b border-gold-300/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.png"
                  alt="CRUSADE Guild"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
                  priority
                />
              </div>
              <span className="hidden sm:block font-[family-name:var(--font-cinzel-decorative)] text-xl font-bold text-gold-gradient tracking-wider">
                CRUSADE
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-silver-300 uppercase tracking-widest transition-colors duration-300 hover:text-gold-300 font-[family-name:var(--font-cinzel)]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gold-300 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://twitch.tv/esfandtv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-silver-400 hover:text-purple-400 transition-colors duration-300"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                </svg>
                <span className="hidden lg:inline font-[family-name:var(--font-cinzel)] tracking-wide">
                  Watch Live
                </span>
              </a>

              <Link
                href="/apply"
                className="relative overflow-hidden rounded-sm bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 px-5 py-2 text-sm font-bold text-dark-700 uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] font-[family-name:var(--font-cinzel)]"
              >
                <span className="relative z-10">Apply</span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
              aria-label="Toggle navigation menu"
            >
              <span
                className={cn(
                  "block h-0.5 w-6 bg-gold-300 transition-all duration-300",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-gold-300 transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-gold-300 transition-all duration-300",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-600/98 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-[family-name:var(--font-cinzel)] font-semibold text-silver-200 uppercase tracking-[0.2em] hover:text-gold-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/apply"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 px-8 py-3 text-lg font-bold text-dark-700 uppercase tracking-widest font-[family-name:var(--font-cinzel)]"
                >
                  Join the Crusade
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}