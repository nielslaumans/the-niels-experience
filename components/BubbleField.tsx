"use client";

import { useEffect, useState } from "react";

type Bubble = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

type Props = {
  density?: number;
};

export default function BubbleField({ density = 36 }: Props) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: density }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 3 + Math.random() * 16,
      duration: 14 + Math.random() * 22,
      delay: Math.random() * 30,
    }));
    setBubbles(generated);
  }, [density]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble animate-bubbleRise"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `-${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
