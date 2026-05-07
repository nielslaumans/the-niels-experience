"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import ProgressIndicator from "@/components/ProgressIndicator";
import EventFloor from "@/components/sections/EventFloor";
import BackstageMode from "@/components/sections/BackstageMode";
import CreativeLab from "@/components/sections/CreativeLab";
import WhyLivewall from "@/components/sections/WhyLivewall";
import FinalCall from "@/components/sections/FinalCall";
import { LEVELS } from "@/lib/levels";

export default function Page() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleJump = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Track which section is in view for the progress indicator
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = LEVELS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the section with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Trigger when middle of section is in viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observerRef.current?.observe(s));

    // Reset to null when at the very top (hero)
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.4) {
        setActiveId(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative">
      <ProgressIndicator activeId={activeId} onJump={handleJump} />

      <Hero onStart={() => handleJump(LEVELS[0].id)} />

      <EventFloor />
      <BackstageMode />
      <CreativeLab />
      <WhyLivewall />
      <FinalCall />
    </main>
  );
}
