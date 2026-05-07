"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionShell from "@/components/SectionShell";
import { LEVELS } from "@/lib/levels";

const pillars = [
  {
    key: "concept",
    title: "Concept",
    headline: "Start with a feeling, not a logo.",
    body: "Every idea I work on starts with the moment we want people to remember. The drink in their hand, the song that drops, the friend they bumped into. From there we build outwards: visuals, location, tone, partners.",
    bullets: ["Audience-first thinking", "Story arc", "Tangible moments"],
  },
  {
    key: "beleving",
    title: "Beleving",
    headline: "Design for the senses, not the slide.",
    body: "An event is light, sound, smell, queue length, the bartender's energy. I work the small details because that's what people actually feel — and post about — afterwards.",
    bullets: ["Sensory layers", "Pacing & flow", "Photo-worthy beats"],
  },
  {
    key: "story",
    title: "Storytelling",
    headline: "Pre, during, after — one thread.",
    body: "Social content, on-site signage, recap videos: I treat them as one story, not three deliverables. So the hype before doors lines up with the memory after.",
    bullets: ["Content calendar", "On-brand voice", "Recap that travels"],
  },
];

export default function CreativeLab() {
  const level = LEVELS[2];
  const [active, setActive] = useState(pillars[0].key);
  const current = pillars.find((p) => p.key === active) ?? pillars[0];

  return (
    <SectionShell level={level}>
      <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr]">
        {/* Tab list */}
        <div className="space-y-3">
          {pillars.map((p) => {
            const isActive = p.key === active;
            return (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                  isActive
                    ? "border-neon-lime/60 bg-white/[0.04]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-2xl font-bold transition-colors ${
                      isActive ? "text-neon-lime" : "text-white"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <motion.span
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-2xl transition-colors ${
                      isActive ? "text-neon-lime" : "text-white/40"
                    }`}
                  >
                    →
                  </motion.span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="lab-underline"
                    className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-neon-lime to-transparent"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-neon-lime/30 blur-3xl"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-neon-lime">
            {current.title}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            {current.headline}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            {current.body}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {current.bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/80"
              >
                <span className="mr-2 text-neon-lime">▍</span>
                {b}
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
            <span>Marketing</span>
            <span>·</span>
            <span>Social content</span>
            <span>·</span>
            <span>Activation</span>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
