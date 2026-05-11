"use client";

import { motion } from "framer-motion";
import DriftingJellyfish from "@/components/DriftingJellyfish";
import { CHAMBERS } from "@/lib/chambers";
import content from "@/content/sections/bridges.json";

export default function Bridges() {
  const chamber = CHAMBERS[2];
  return (
    <section id={chamber.id} className="relative isolate overflow-hidden py-32">
      <DriftingJellyfish count={4} glow="#7df9ff" />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-15%] top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 rounded-full bg-bio-coral/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9 }}
          className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-end"
        >
          <div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance text-white sm:text-5xl md:text-6xl">
              {content.headlinePrefix}{" "}
              <span className="shimmer-text">{content.headlineHighlight}</span>{" "}
              {content.headlineSuffix}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">{content.intro}</p>
          </div>
          <blockquote className="relative pl-6">
            <span aria-hidden className="absolute left-0 top-0 font-display text-7xl leading-none text-bio-coral/40">&ldquo;</span>
            <p className="font-display text-xl italic leading-snug text-white/85">{content.pullQuote}</p>
          </blockquote>
        </motion.div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {content.stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-bio-cyan/50"
            >
              <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-bio-cyan/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bio-aqua">Verhaal 0{i + 1}</div>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{s.body}</p>
              <p className="mt-4 border-l border-bio-cyan/40 pl-3 text-sm italic leading-relaxed text-white/65">{s.moment}</p>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 border-t border-white/10 pt-8 text-center"
        >
          <p className="font-display text-lg italic text-white/70 sm:text-xl">{content.footerLine}</p>
        </motion.div>
      </div>
    </section>
  );
}
