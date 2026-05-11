"use client";

import { motion } from "framer-motion";
import LightRays from "@/components/LightRays";
import SwimmingFish from "@/components/SwimmingFish";
import { CHAMBERS } from "@/lib/chambers";
import content from "@/content/sections/eerste-duik.json";

export default function EersteDuik() {
  const chamber = CHAMBERS[1];
  return (
    <section id={chamber.id} className="relative isolate overflow-hidden py-32">
      <LightRays count={3} intensity="soft" />
      <SwimmingFish variant="silver" count={4} direction="mixed" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-15%] top-1/3 h-[60vh] w-[60vh] rounded-full bg-bio-amber/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-bio-cyan glow-cyan">
            {chamber.depth} · {chamber.label}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-bio-cyan/40 to-transparent" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-3xl font-bold leading-[1.1] text-balance text-white sm:text-5xl md:text-6xl"
        >
          {content.headlinePrefix}{" "}
          <span className="text-bio-aqua glow-aqua">{content.headlineHighlight}</span>
          {content.headlineSuffix}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 grid gap-10 lg:grid-cols-[1.4fr,1fr]"
        >
          <div className="space-y-6 text-base leading-relaxed text-white/80 sm:text-lg">
            {content.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass relative h-fit rounded-3xl p-7"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bio-cyan">
              {content.sideCard.label}
            </div>
            <p className="mt-3 font-display text-xl leading-snug text-white">{content.sideCard.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{content.sideCard.body}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em]">
              {content.sideCard.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/65">{t}</span>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
