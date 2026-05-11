"use client";

import { motion } from "framer-motion";
import LightRays from "./LightRays";
import SwimmingFish from "./SwimmingFish";

type Props = {
  onStart: () => void;
};

export default function Hero({ onStart }: Props) {
  return (
    <section
      id="aankomst"
      className="relative isolate min-h-screen w-full overflow-hidden"
    >
      {/* Soft surface gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#a4ddf0]/40 via-[#4fb8d9]/15 to-transparent"
      />

      {/* Surface waves shimmer */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-white/20 via-bio-cyan/15 to-transparent blur-2xl"
      />

      <LightRays count={5} intensity="strong" />
      <SwimmingFish variant="tropical" count={5} direction="mixed" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr,auto,1fr]">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/85 backdrop-blur">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-bio-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-bio-cyan" />
              </span>
              Sollicitatie · Live Experience Captain
            </div>
            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.9] tracking-tight text-white sm:text-7xl">
              Hi, ik ben{" "}
              <span className="block">
                <span className="outline-text">Niels.</span>
              </span>
            </h1>
          </motion.div>

          {/* Center photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              {/* Glow ring */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-bio-cyan/30 blur-2xl animate-glowPulse"
              />
              {/* Outer glass ring */}
              <div className="absolute inset-0 rounded-full border-2 border-bio-cyan/60 shadow-[0_0_60px_rgba(0,240,255,0.5)]" />
              <div className="absolute inset-2 rounded-full border border-white/30" />

              {/* Photo */}
              <div className="absolute inset-4 overflow-hidden rounded-full bg-ocean-deep">
                <img
                  src="/niels-portrait.jpg"
                  alt="Niels Laumans"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-ocean-sunlit to-ocean-deep font-display text-6xl font-bold text-white/30"
                >
                  N
                </div>
              </div>

              {/* Floating mini-bubbles */}
              <motion.span
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bubble absolute -right-2 top-12 h-5 w-5"
              />
              <motion.span
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bubble absolute -left-3 bottom-16 h-3 w-3"
              />
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bio-cyan glow-cyan">
              Eindhoven · 24 jaar
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              Ik bouw werelden waar mensen even in verdwijnen. Met muziek, sfeer,
              en momenten die blijven hangen. Welkom op de oppervlakte.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-bio-cyan px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-ocean-abyss transition-transform hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-bio-cyan focus:ring-offset-2 focus:ring-offset-ocean-abyss"
          >
            <span className="relative z-10">Duik mee</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-bio-cyan via-bio-aqua to-bio-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <svg
              className="relative z-10 ml-3 h-4 w-4 transition-transform group-hover:translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">
            Of scroll. Het water is rustig.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/10 py-3 text-white/40">
        <div className="marquee-track animate-marquee">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12 pr-12">
              {[
                "Zeester",
                "Schrobbelèr",
                "Music Moves",
                "Tomorrowland productie",
                "Defqon.1 ceremonie",
                "Building Bridges",
                "Dream4Kids",
                "Beleving · Verbinding · Sfeer",
              ].map((word, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="font-display text-xs uppercase tracking-[0.4em]"
                >
                  ◆ {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
