"use client";

import { motion } from "framer-motion";
import DriftingJellyfish from "@/components/DriftingJellyfish";
import Anglerfish from "@/components/marine/Anglerfish";
import { CHAMBERS } from "@/lib/chambers";

export default function DeDiepte() {
  const chamber = CHAMBERS[3];
  return (
    <section
      id={chamber.id}
      className="relative isolate overflow-hidden py-40"
    >
      {/* Deeper, more intense */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"
      />

      <DriftingJellyfish count={3} glow="#00f0ff" />

      {/* Distant anglerfish */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.55, x: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="pointer-events-none absolute left-[5%] top-[20%]"
      >
        <Anglerfish size={180} />
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 5, delay: 0.4, ease: "easeOut" }}
        className="pointer-events-none absolute right-[8%] bottom-[15%] scale-x-[-1]"
      >
        <Anglerfish size={130} />
      </motion.div>

      {/* Bioluminescent glow */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bio-cyan/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Depth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-bio-cyan/60" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-bio-cyan glow-cyan">
            {chamber.depth} · {chamber.label}
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-bio-cyan/60" />
        </motion.div>

        {/* Big philosophy line */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-3xl font-bold leading-[1.1] text-balance text-white sm:text-5xl md:text-6xl"
        >
          Ergens tussen de derde en vierde productie kwam ik erachter dat ik
          geen events wilde maken,{" "}
          <span className="shimmer-text">maar werelden.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 space-y-6 text-left text-base leading-relaxed text-white/80 sm:text-lg"
        >
          <p>
            Het verschil zit in hoe je naar de bezoeker kijkt. Een event heeft
            een line up en een tijdschema. Een experience heeft een gevoel,
            een verhaal, en een einde dat anders aanvoelt dan het begin.
          </p>
          <p>
            Daar past Livewall in voor mij. De manier waarop jullie
            technologie en fysieke ruimte combineren, is precies de richting
            waarin ik wil groeien. Ik kom uit de productie en de hands on
            kant. Ik wil leren hoe je dat samenvoegt met de digitale laag die
            jullie eroverheen leggen.
          </p>
        </motion.div>

        {/* Big quote */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="relative mx-auto mt-20 max-w-3xl"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl bg-bio-cyan/8 blur-3xl"
          />
          <blockquote className="relative rounded-3xl border border-bio-cyan/30 bg-black/40 px-8 py-12 backdrop-blur sm:px-14 sm:py-16">
            <p className="font-display text-2xl font-semibold leading-snug text-balance text-white sm:text-4xl">
              <span className="shimmer-text">
                People rarely remember information.
              </span>{" "}
              They remember how something made them feel.
            </p>
            <figcaption className="mt-8 font-mono text-[10px] uppercase tracking-[0.4em] text-bio-cyan/80">
              De zin die ik al jaren volg
            </figcaption>
          </blockquote>
        </motion.figure>

        {/* The build statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-left"
        >
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Daarom heb ik geen pitch deck gemaakt. Geen mooie PDF. Geen
            standaard sollicitatie.
          </p>
          <p className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            Ik wilde niet vertellen waarom ik bij Livewall pas.{" "}
            <span className="text-bio-aqua glow-aqua">
              Ik wilde het laten ervaren.
            </span>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Vandaar deze website. Vandaar de duik. Als jullie hier zijn,
            heb ik mijn punt al gemaakt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
