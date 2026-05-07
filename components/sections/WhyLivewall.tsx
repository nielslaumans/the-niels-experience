"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import { LEVELS } from "@/lib/levels";

const reasons = [
  {
    title: "Where tech meets the floor",
    body: "Livewall builds activations that are both digital and physical. That's exactly the space I want to be in — the moment when an LED wall, a sensor, or a phone turns into a real-life reaction.",
  },
  {
    title: "Brands that move people",
    body: "I'm drawn to the kind of work where the brand isn't a logo on a banner, but a feeling people carry home. That's the standard I try to hold every project to.",
  },
  {
    title: "Live, not just digital",
    body: "I love digital, but I'm at my best on-site. Livewall's combination of concept, tech and live execution is the rare studio where all three count equally.",
  },
  {
    title: "Built to scale",
    body: "I think in formats that can run once and then repeat — at another venue, another city, another brand. That's how live work becomes more than a one-off.",
  },
];

export default function WhyLivewall() {
  const level = LEVELS[3];
  return (
    <SectionShell level={level}>
      <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neon-violet">
            The pitch
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            Live experience is having a moment. Audiences are tired of
            scrolling and want to be{" "}
            <span className="text-white">in the room</span>. Livewall already
            sits at the intersection of brand, tech and live — that's where I
            want to put my hours.
          </p>
          <p className="text-lg leading-relaxed text-white/80">
            As Live Experience Captain, I'd bring the operational rigor of
            event production, the storytelling of brand activation, and the
            obsessive love for the small details that turn a "nice event" into
            something people talk about for a year.
          </p>

          <div className="glass mt-8 rounded-2xl border border-neon-violet/30 p-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neon-violet">
              In one line
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug">
              I want to ship live experiences that are as well-crafted as your
              best digital work.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-colors hover:border-neon-violet/60"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-neon-violet/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="text-[10px] uppercase tracking-[0.3em] text-neon-violet">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
