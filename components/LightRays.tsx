"use client";

import { motion } from "framer-motion";

type Props = { count?: number; intensity?: "soft" | "strong" };

export default function LightRays({ count = 4, intensity = "soft" }: Props) {
  const opacity = intensity === "strong" ? 0.55 : 0.3;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i / count) * 100 + Math.random() * 10;
        const duration = 12 + i * 2;
        const delay = -i * 1.5;
        const tilt = -5 + Math.random() * 10;
        return (
          <motion.div
            key={i}
            className="light-ray animate-rayShift"
            style={{
              left: `${left}%`,
              opacity,
              transform: `rotate(${tilt}deg)`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
