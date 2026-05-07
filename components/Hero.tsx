"use client";

import { motion } from "framer-motion";

type HeroProps = {
  onStart: () => void;
};

export default function Hero({ onStart }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen w-full overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute inset-0 vignette" />

      {/* Animated spotlight */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,232,255,0.25) 0%, rgba(255,45,135,0.18) 35%, transparent 70%)",
        }}
      />

      {/* Floating glow blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-10%] top-1/4 h-72 w-72 rounded-full bg-neon-pink/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-8%] bottom-1/4 h-80 w-80 rounded-full bg-neon-cyan/20 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-pink" />
          </span>
          Live application · Livewall
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-balance text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          The{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-violet bg-clip-text text-transparent">
              Niels
            </span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-gradient-to-r from-neon-cyan to-neon-pink"
            />
          </span>{" "}
          Experience
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-2xl text-balance text-lg text-white/70 sm:text-xl"
        >
          Event energy. Creative execution. Live moments that stick.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-stage-950 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-stage-950"
          >
            <span className="relative z-10">Start the experience</span>
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-violet opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <svg
              className="relative z-10 ml-3 h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            5 levels · ~3 min read
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-[10px] uppercase tracking-[0.4em]">
              Scroll · or press Start
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 py-3 text-white/30">
        <div className="marquee-track animate-marquee">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12 pr-12">
              {[
                "Live Production",
                "Brand Activation",
                "Concept · Beleving",
                "Zeester",
                "Schrobbelèr",
                "Creative Producer",
                "Eindhoven",
                "Stage · Crowd · Story",
              ].map((word, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="font-display text-xs uppercase tracking-[0.4em]"
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
