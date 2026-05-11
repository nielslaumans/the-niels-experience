"use client";

import { useEffect, useState } from "react";
import Jellyfish from "./marine/Jellyfish";

type Props = {
  count?: number;
  glow?: string;
};

type Config = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

export default function DriftingJellyfish({ count = 3, glow = "#7df9ff" }: Props) {
  const [jellies, setJellies] = useState<Config[]>([]);

  useEffect(() => {
    const generated: Config[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      top: 10 + Math.random() * 70,
      size: 60 + Math.random() * 70,
      duration: 14 + Math.random() * 10,
      delay: -Math.random() * 20,
    }));
    setJellies(generated);
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {jellies.map((j) => (
        <div
          key={j.id}
          className="absolute animate-drift"
          style={{
            left: `${j.left}%`,
            top: `${j.top}%`,
            animationDuration: `${j.duration}s`,
            animationDelay: `${j.delay}s`,
            opacity: 0.7,
            filter: `drop-shadow(0 0 20px ${glow}55)`,
          }}
        >
          <Jellyfish size={j.size} glow={glow} />
        </div>
      ))}
    </div>
  );
}
