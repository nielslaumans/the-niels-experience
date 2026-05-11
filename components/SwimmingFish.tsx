"use client";

import { useEffect, useState } from "react";
import Fish from "./marine/Fish";

type Props = { variant?: "tropical" | "silver" | "deep"; count?: number; direction?: "right" | "left" | "mixed" };
type FishConfig = { id: number; top: number; size: number; duration: number; delay: number; dir: "right" | "left"; color?: string };

const TROPICAL_COLORS = ["#ffb347", "#ff6b9d", "#ffd966", "#ff8c5a", "#fc7196"];

export default function SwimmingFish({ variant = "tropical", count = 6, direction = "mixed" }: Props) {
  const [fish, setFish] = useState<FishConfig[]>([]);
  useEffect(() => {
    setFish(
      Array.from({ length: count }, (_, i) => {
        const dir = direction === "mixed" ? (Math.random() > 0.5 ? "right" : "left") : direction;
        return {
          id: i,
          top: 10 + Math.random() * 80,
          size: variant === "tropical" ? 25 + Math.random() * 25 : 35 + Math.random() * 40,
          duration: 30 + Math.random() * 40,
          delay: -Math.random() * 50,
          dir,
          color: variant === "tropical" ? TROPICAL_COLORS[Math.floor(Math.random() * TROPICAL_COLORS.length)] : undefined,
        };
      }),
    );
  }, [count, direction, variant]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {fish.map((f) => (
        <div
          key={f.id}
          className={`fish-lane ${f.dir === "right" ? "animate-swimRight" : "animate-swimLeft"}`}
          style={{ top: `${f.top}%`, animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s`, opacity: 0.55 }}
        >
          <Fish variant={variant} size={f.size} color={f.color} />
        </div>
      ))}
    </div>
  );
}
