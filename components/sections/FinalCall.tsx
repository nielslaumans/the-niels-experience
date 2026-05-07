"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import { LEVELS } from "@/lib/levels";

export default function FinalCall() {
  const level = LEVELS[4];
  return (
    <SectionShell level={level}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
        {/* Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">
            Closing pitch
          </p>
          <h3 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            If this experience earned a second meeting,{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
              I'm in.
            </span>
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
            I'm Niels Laumans — event coordinator and creative producer from
            Eindhoven. I work on events, brand activations and music concepts
            like Zeester. My strength is combining sharp creative thinking
            with hands-on execution: I can sketch the concept, plan the build,
            and run the floor.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Livewall is the kind of place I'd run hard for. If you'd like to
            talk, I'd love to come by — for coffee, a tour of the studio, or a
            walk-through of one of my events.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.aside
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-neon-pink/30 blur-3xl"
          />
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-pink" />
            </span>
            Available · Eindhoven, NL
          </div>

          <h4 className="mt-5 font-display text-2xl font-bold">Niels Laumans</h4>
          <p className="text-sm text-white/60">
            Event coordinator · Creative producer
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a
              href="mailto:niels.laumans@gmail.com"
              className="group flex items-center justify-between rounded-xl border border-white/10 p-3 transition-colors hover:border-neon-pink/60"
            >
              <span className="text-white/70">Email</span>
              <span className="font-mono text-white group-hover:text-neon-pink">
                niels.laumans@gmail.com
              </span>
            </a>
          </div>

          <div className="mt-6 grid gap-3">
            <a
              href="/cv-niels-laumans.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stage-950 transition-transform hover:scale-[1.02]"
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
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-neon-cyan hover:text-neon-cyan"
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

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
            End of experience · Thanks for playing
          </p>
        </motion.aside>
      </div>

      {/* Footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-white/30"
      >
        <span>The Niels Experience · 2026</span>
        <span>Built for Livewall · with respect</span>
      </motion.div>
    </SectionShell>
  );
}
