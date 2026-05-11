"use client";

import { motion } from "framer-motion";
import Whale from "@/components/marine/Whale";
import { CHAMBERS } from "@/lib/chambers";

export default function HetZwart() {
  const chamber = CHAMBERS[4];
  return (
    <section
      id={chamber.id}
      className="relative isolate overflow-hidden bg-black py-40"
    >
      {/* Pure dark, single point of light */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-bio-cyan/15 via-transparent to-transparent"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Distant whale silhouette */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 0.35, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-[15%]"
      >
        <Whale size={420} />
      </motion.div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        {/* Depth marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-bio-cyan/40" />
          <span className="font-mono text-xs uppercase tracking-[0.5em] text-bio-cyan/80">
            {chamber.depth} · {chamber.label}
          </span>
          <span className="h-px w-12 bg-bio-cyan/40" />
        </motion.div>

        {/* The closing line */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="font-display text-3xl font-bold leading-[1.15] text-balance text-white sm:text-5xl md:text-6xl"
        >
          Some people organize events.
          <span className="mt-2 block shimmer-text">
            I want to create worlds people remember.
          </span>
        </motion.h2>

        {/* Long pause */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 2.2, delay: 1 }}
          className="mt-24 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-bio-cyan/70">
            Tot zover
          </span>
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-bio-cyan/60 to-transparent" />
        </motion.div>

        {/* Final invite */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.4, delay: 1.6 }}
          className="mt-16 font-display text-2xl font-semibold leading-snug text-balance text-white sm:text-4xl"
        >
          Let&apos;s build experiences{" "}
          <span className="text-bio-aqua glow-aqua">together</span>.
        </motion.p>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-14 w-full max-w-xl"
        >
          <div className="rounded-3xl border border-bio-cyan/30 bg-black/60 p-8 backdrop-blur sm:p-10">
            <div className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-bio-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-bio-cyan" />
              </span>
              Bereikbaar · Eindhoven, NL
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold text-white">
              Niels Laumans
            </h3>
            <p className="text-sm text-white/55">
              Event coordinator · Creative producer · Mede oprichter Zeester
            </p>

            <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
              <a
                href="mailto:niels.laumans@gmail.com"
                className="group rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-bio-cyan/60 hover:bg-bio-cyan/5"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Mail
                </div>
                <div className="mt-1 font-mono text-white group-hover:text-bio-cyan">
                  niels.laumans@gmail.com
                </div>
              </a>
              <a
                href="tel:+31619065199"
                className="group rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-bio-cyan/60 hover:bg-bio-cyan/5"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                  Bel
                </div>
                <div className="mt-1 font-mono text-white group-hover:text-bio-cyan">
                  +31 6 19 06 51 99
                </div>
              </a>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href="/cv-niels-laumans.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-bio-cyan px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ocean-abyss transition-transform hover:scale-[1.02]"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/niels-laumans/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-bio-cyan hover:text-bio-cyan"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
            Einde van de duik · dank dat je meeging
          </p>
        </motion.div>
      </div>
    </section>
  );
}
