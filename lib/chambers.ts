export type Chamber = {
  id: string;
  index: number;
  label: string;
  whisper: string;
  depth: string;
  zone: "surface" | "sunlit" | "twilight" | "deep" | "abyss";
};

export const CHAMBERS: Chamber[] = [
  {
    id: "aankomst",
    index: 1,
    label: "Aankomst",
    whisper: "Het water is rustig.",
    depth: "0m",
    zone: "surface",
  },
  {
    id: "eerste-duik",
    index: 2,
    label: "De Eerste Duik",
    whisper: "Adem in. Onder de oppervlakte begint het.",
    depth: "30m",
    zone: "sunlit",
  },
  {
    id: "bridges",
    index: 3,
    label: "Bridges",
    whisper: "Hier zwemmen de stromingen samen.",
    depth: "200m",
    zone: "twilight",
  },
  {
    id: "de-diepte",
    index: 4,
    label: "De Diepte",
    whisper: "Wat je voelt zie je niet altijd.",
    depth: "1000m",
    zone: "deep",
  },
  {
    id: "het-zwart",
    index: 5,
    label: "Het Zwart",
    whisper: "Stilte. En één lichtpunt.",
    depth: "∞",
    zone: "abyss",
  },
];
