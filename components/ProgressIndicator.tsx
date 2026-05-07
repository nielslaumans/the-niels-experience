"use client";

import { motion } from "framer-motion";
import { LEVELS, accentClass } from "@/lib/levels";

type Props = {
  activeId: string | null;
  onJump: (id: string) => void;
};

export default function ProgressIndicator({ activeId, onJump }: Props) {
  const activeIndex =
    LEVELS.findIndex((l) => l.id === activeId) === -1
      ? -1
      : LEVELS.findIndex((l) => l.id === activeId);

  const progress =
    activeIndex < 0 ? 0 : ((activeIndex + 1) / LEVELS.length) * 100;

  return (
    <>
      {/* Top bar (mobile + desktop) */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="glass border-b border-white/5">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <button
              onClick={() => onJump("hero")}
              className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white hover:text-neon-cyan transition-colors"
            >
              Niels<span className="text-neon-pink">.</span>Experience
            </button>
            <div className="hidden items-center gap-1 md:flex">
              {LEVELS.map((level) => {
                const accent = accentClass[level.accent];
                const isActive = level.id === activeId;
                return (
                  <button
                    key={level.id}
                    onClick={() => onJump(level.id)}
                    className={`group relative rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] transition-colors ${
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{level.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className={`absolute inset-0 -z-0 rounded-full border ${accent.border} bg-white/5`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              {activeIndex < 0
                ? "Intro"
                : `${String(activeIndex + 1).padStart(2, "0")} / ${String(
                    LEVELS.length,
                  ).padStart(2, "0")}`}
            </div>
          </div>
          {/* Progress bar */}
          <div className="relative h-px w-full bg-white/5">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="absolute left-0 top-0 h-px bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-violet"
            />
          </div>
        </div>
      </div>

      {/* Side dot navigation (desktop) */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <ul className="flex flex-col items-center gap-4">
          {LEVELS.map((level) => {
            const accent = accentClass[level.accent];
            const isActive = level.id === activeId;
            return (
              <li key={level.id}>
                <button
                  onClick={() => onJump(level.id)}
                  aria-label={`Jump to ${level.label}`}
                  className="group relative flex items-center gap-3"
                >
                  <span
                    className={`absolute right-6 whitespace-nowrap rounded-full bg-stage-900/90 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white opacity-0 transition-opacity group-hover:opacity-100 ${
                      isActive ? "opacity-100" : ""
                    }`}
                  >
                    {level.label}
                  </span>
                  <span
                    className={`block h-2 w-2 rounded-full transition-all ${
                      isActive
                        ? `${accent.bg} ${accent.glow} scale-150`
                        : "bg-white/30 hover:bg-white"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
