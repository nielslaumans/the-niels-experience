export type Level = {
  id: string;
  index: number;
  label: string;
  title: string;
  tag: string;
  accent: "pink" | "cyan" | "lime" | "violet";
};

export const LEVELS: Level[] = [
  {
    id: "event-floor",
    index: 1,
    label: "Event Floor",
    title: "Where the crowd meets the moment.",
    tag: "Live production · Zeester · Schrobbelèr",
    accent: "pink",
  },
  {
    id: "backstage-mode",
    index: 2,
    label: "Backstage Mode",
    title: "The clockwork behind the show.",
    tag: "Logistics · Build · Calm under pressure",
    accent: "cyan",
  },
  {
    id: "creative-lab",
    index: 3,
    label: "Creative Lab",
    title: "From whiteboard to wow.",
    tag: "Concepting · Storytelling · Beleving",
    accent: "lime",
  },
  {
    id: "why-livewall",
    index: 4,
    label: "Why Livewall",
    title: "Live experiences with a digital heartbeat.",
    tag: "Tech · Activations · Brands that move",
    accent: "violet",
  },
  {
    id: "final-call",
    index: 5,
    label: "Final Call",
    title: "Let's build something live.",
    tag: "Contact · CV · LinkedIn",
    accent: "pink",
  },
];

export const accentClass = {
  pink: {
    text: "text-neon-pink",
    bg: "bg-neon-pink",
    border: "border-neon-pink",
    glow: "shadow-[0_0_40px_rgba(255,45,135,0.45)]",
    ring: "ring-neon-pink/40",
  },
  cyan: {
    text: "text-neon-cyan",
    bg: "bg-neon-cyan",
    border: "border-neon-cyan",
    glow: "shadow-[0_0_40px_rgba(34,232,255,0.45)]",
    ring: "ring-neon-cyan/40",
  },
  lime: {
    text: "text-neon-lime",
    bg: "bg-neon-lime",
    border: "border-neon-lime",
    glow: "shadow-[0_0_40px_rgba(182,255,60,0.45)]",
    ring: "ring-neon-lime/40",
  },
  violet: {
    text: "text-neon-violet",
    bg: "bg-neon-violet",
    border: "border-neon-violet",
    glow: "shadow-[0_0_40px_rgba(157,77,255,0.45)]",
    ring: "ring-neon-violet/40",
  },
} as const;
