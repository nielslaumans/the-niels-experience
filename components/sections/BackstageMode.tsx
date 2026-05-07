"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import { LEVELS } from "@/lib/levels";

const timeline = [
  {
    time: "T-30 days",
    title: "Plan",
    body: "Run-of-show, supplier list, permits, crew planning, contingency budgets. Boring on paper, gold on event day.",
  },
  {
    time: "T-3 days",
    title: "Build",
    body: "Truck arrivals, stage build, sound check. I'm the person checking the schedule against reality every two hours.",
  },
  {
    time: "T-0 doors",
    title: "Run",
    body: "Calm headset, eyes on the floor. If the artist is late, the bar runs out, or the rain hits — I find option B before option A fails.",
  },
  {
    time: "T+1",
    title: "Wrap",
    body: "Teardown, debrief, suppliers paid, learnings written down. The next event starts the day after this one ends.",
  },
];

const skills = [
  { label: "Logistics", level: 92 },
  { label: "Build coordination", level: 88 },
  { label: "Stress under pressure", level: 95 },
  { label: "Stakeholder comms", level: 90 },
  { label: "Problem solving", level: 94 },
];

export default function BackstageMode() {
  const level = LEVELS[1];
  return (
    <SectionShell level={level}>
      <div className="grid gap-12 lg:grid-cols-[1fr,1fr]">
        {/* Timeline */}
        <div>
          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
            Every event is a system. I like the kind of calm that comes from
            knowing exactly who does what, when, and what we do if it doesn't
            work.
          </p>
          <ol className="relative space-y-6 border-l border-neon-cyan/30 pl-6">
            {timeline.map((step, i) => (
              <motion.li
                key={step.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-30" />
                  <span className="relative h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(34,232,255,0.7)]" />
                </span>
                <div className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
                  {step.time}
                </div>
                <h3 className="mt-1 font-display text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Skill bars */}
        <div>
          <div className="glass rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.2em]">
                Console
              </h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
                · Live
              </span>
            </div>
            <div className="space-y-4">
              {skills.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-white/80">{s.label}</span>
                    <span className="font-mono text-neon-cyan">
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + i * 0.08,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              {[
                "Run-of-show",
                "Supplier comms",
                "Crew briefings",
                "Risk plans",
                "Permits",
                "Budget tracking",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-center text-white/60 transition-colors hover:border-neon-cyan/60 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
