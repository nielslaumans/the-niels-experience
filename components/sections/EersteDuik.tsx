"use client";

import { motion } from "framer-motion";
import LightRays from "@/components/LightRays";
import SwimmingFish from "@/components/SwimmingFish";
import { CHAMBERS } from "@/lib/chambers";

export default function EersteDuik() {
  const chamber = CHAMBERS[1];
  return (
    <section
      id={chamber.id}
      className="relative isolate overflow-hidden py-32"
    >
      <LightRays count={3} intensity="soft" />
      <SwimmingFish variant="silver" count={4} direction="mixed" />

      {/* Subtle warm glow behind text */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-15%] top-1/3 h-[60vh] w-[60vh] rounded-full bg-bio-amber/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Whisper / depth marker */}
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
          Het is moeilijk uit te leggen wat een goeie avond{" "}
          <span className="text-bio-aqua glow-aqua">met je doet</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 grid gap-10 lg:grid-cols-[1.4fr,1fr]"
        >
          <div className="space-y-6 text-base leading-relaxed text-white/80 sm:text-lg">
            <p>
              Wanneer een nummer dropt op precies het juiste moment, en je voelt
              iedereen om je heen meegaan. Wanneer je vrienden voor het eerst
              dat ene festival voelen waar je al maanden over praat. Dat zijn
              de momenten waar ik mijn werk voor doe.
            </p>
            <p>
              Met Zeester probeer ik die momenten te ontwerpen. Geen feest,
              maar een wereld. De oceaan als visuele taal. Oceaanbewustzijn als
              verhaal. En een community die zich ergens thuis voelt. Inmiddels
              op clubs en festivals door heel Nederland.
            </p>
            <p>
              Daarnaast draai ik productie en activatie voor Schrobbelèr.
              Eindverantwoordelijk, per event een ander team, een andere
              venue, andere uitdagingen. Dat houdt me scherp en leert me hoe
              je een merk voelbaar maakt op de vloer in plaats van op een
              banner.
            </p>
          </div>

          {/* Side card */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass relative h-fit rounded-3xl p-7"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bio-cyan">
              Wat ik leerde
            </div>
            <p className="mt-3 font-display text-xl leading-snug text-white">
              Het ambacht zit in details. De queue, het licht bij binnenkomst,
              de bartender, de eerste track.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Mensen onthouden geen feature lijstjes. Ze onthouden hoe ze
              zich voelden. Daarom design ik vanuit gevoel terug naar plan,
              en niet andersom.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em]">
              {[
                "Mede oprichter Zeester",
                "Eventproductie",
                "Hospitality",
                "Merkactivaties",
                "Concept",
                "Branding",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/65"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
