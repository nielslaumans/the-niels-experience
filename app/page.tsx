"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import DepthMeter from "@/components/DepthMeter";
import BubbleField from "@/components/BubbleField";
import EersteDuik from "@/components/sections/EersteDuik";
import Bridges from "@/components/sections/Bridges";
import DeDiepte from "@/components/sections/DeDiepte";
import HetZwart from "@/components/sections/HetZwart";
import { CHAMBERS } from "@/lib/chambers";

export default function Page() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleJump = useCallback((id: string) => {
    const targetId = id === "hero" ? "aankomst" : id;
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = CHAMBERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((s) => observerRef.current?.observe(s));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main className="relative">
      <BubbleField density={32} />
      <DepthMeter activeId={activeId} onJump={handleJump} />

      <div className="relative z-10">
        <Hero onStart={() => handleJump("eerste-duik")} />
        <EersteDuik />
        <Bridges />
        <DeDiepte />
        <HetZwart />
      </div>
    </main>
  );
}
