"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { accentClass, type Level } from "@/lib/levels";

type Props = {
  level: Level;
  children: ReactNode;
};

export default function SectionShell({ level, children }: Props) {
  const accent = accentClass[level.accent];
  const indexLabel = String(level.index).padStart(2, "0");

  return (
    <section
      id={level.id}
      className="relative isolate overflow-hidden border-b border-white/5 py-24 sm:py-32"
    >
      {/* Background tint per accent */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-1/3 right-[-15%] h-[80vh] w-[80vh] rounded-full blur-3xl opacity-30 ${accent.bg}`}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0 vignette opacity-80" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-4">
              <span
                className={`font-display text-sm uppercase tracking-[0.4em] ${accent.text}`}
              >
                Level {indexLabel}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {level.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.25em] text-white/50">
              {level.tag}
            </p>
          </div>

          <div
            className={`glass inline-flex shrink-0 items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] ${accent.text} ${accent.border}`}
          >
            {level.label}
          </div>
        </motion.div>

        {children}
      </div>
    </section>
  );
}
