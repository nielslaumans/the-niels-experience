"use client";

import { motion } from "framer-motion";
import { CHAMBERS } from "@/lib/chambers";

type Props = {
  activeId: string | null;
  onJump: (id: string) => void;
};

export default function DepthMeter({ activeId, onJump }: Props) {
  const activeIndex = CHAMBERS.findIndex((c) => c.id === activeId);
  const progress =
    activeIndex < 0 ? 0 : ((activeIndex + 1) / CHAMBERS.length) * 100;
  const currentDepth = activeIndex < 0 ? "0m" : CHAMBERS[activeIndex].depth;

  return (
    <>
      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="glass border-b border-white/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <button
              onClick={() => onJump("hero")}
              className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:text-bio-cyan"
            >
              Niels<span className="text-bio-cyan">.</span>Laumans
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {CHAMBERS.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => onJump(c.id)}
                    className={`group relative rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] transition-colors ${
                      isActive ? "text-white" : "text-white/45 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{c.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 -z-0 rounded-full border border-bio-cyan/60 bg-bio-cyan/10"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-bio-cyan">
              <span className="hidden sm:inline">Diepte</span>
              <span className="text-white">{currentDepth}</span>
            </div>
          </div>

          <div className="relative h-px w-full bg-white/5">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="absolute left-0 top-0 h-px bg-gradient-to-r from-bio-cyan via-bio-aqua to-bio-cyan"
            />
          </div>
        </div>
      </div>

      {/* Side depth gauge */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <div className="relative flex flex-col items-center gap-3 rounded-full border border-white/15 bg-black/30 px-3 py-5 backdrop-blur">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bio-cyan">
            DPT
          </span>
          <ul className="flex flex-col items-center gap-3">
            {CHAMBERS.map((c, i) => {
              const isActive = c.id === activeId;
              const isPassed = activeIndex >= 0 && i < activeIndex;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => onJump(c.id)}
                    aria-label={`Spring naar ${c.label}`}
                    className="group relative flex items-center gap-3"
                  >
                    <span
                      className={`absolute right-6 whitespace-nowrap rounded-full bg-black/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white opacity-0 transition-opacity group-hover:opacity-100 ${
                        isActive ? "opacity-100" : ""
                      }`}
                    >
                      {c.depth} · {c.label}
                    </span>
                    <span className="relative flex h-2.5 w-2.5">
                      {isActive && (
                        <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-bio-cyan" />
                      )}
                      <span
                        className={`relative inline-flex h-2.5 w-2.5 rounded-full transition-all ${
                          isActive
                            ? "scale-125 bg-bio-cyan shadow-[0_0_14px_rgba(0,240,255,0.85)]"
                            : isPassed
                              ? "bg-bio-aqua/70"
                              : "bg-white/25 hover:bg-white"
                        }`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
            ∞
          </span>
        </div>
      </div>
    </>
  );
}
