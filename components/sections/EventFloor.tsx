"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import { LEVELS } from "@/lib/levels";

const cards = [
  {
    title: "Zeester",
    role: "Co-creator · Live producer",
    body: "A music & beach concept I help shape from the ground up — programming, vibe, and on-site execution. The kind of event where the lineup matters as much as the sand under your feet.",
    tag: "Music · Beach · Brand",
  },
  {
    title: "Schrobbelèr",
    role: "Brand activations on the floor",
    body: "Bringing a Brabants icon to life at festivals and bars. Building the corner where people stop, taste, and remember. From idea to truss to last bottle out.",
    tag: "Activation · Hospitality · Crowd",
  },
  {
    title: "Live Production",
    role: "Hands-on, headset-in",
    body: "I've run shifts where the schedule changed three times before doors opened. I love that. Real events live in the gap between plan and reality.",
    tag: "Run-of-show · Crew · Adapt",
  },
];

export default function EventFloor() {
  const level = LEVELS[0];
  return (
    <SectionShell level={level}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-lg leading-relaxed text-white/80"
        >
          <p>
            I grew up around events — the smell of fresh-cut wood on build day,
            the buzz right before doors, the silence after teardown. That's the
            world I work in.
          </p>
          <p>
            With <span className="text-neon-pink font-semibold">Zeester</span>{" "}
            and{" "}
            <span className="text-neon-pink font-semibold">Schrobbelèr</span>,
            I've worked on everything from the first creative spark to the
            person handing out the last drink at 2AM. Beleving, verbinding,
            gezelligheid — not buzzwords for me, just what we're trying to
            build every time.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { kpi: "50+", label: "Event days on-site" },
              { kpi: "2", label: "Brand concepts shaped" },
              { kpi: "0", label: "Cancellations on my watch" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center transition-transform hover:-translate-y-1"
              >
                <div className="font-display text-3xl font-bold text-neon-pink neon-pink">
                  {s.kpi}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-colors hover:border-neon-pink/60"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neon-pink">
                    {card.role}
                  </p>
                </div>
                <span className="text-xs text-white/30">0{i + 1}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {card.body}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
                {card.tag}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
