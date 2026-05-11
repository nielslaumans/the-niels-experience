import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          surface: "#7ed4f0",
          sunlit: "#1a7eb8",
          twilight: "#0a3d6b",
          deep: "#051a3a",
          abyss: "#020812",
        },
        bio: {
          cyan: "#00f0ff",
          aqua: "#3eecbf",
          plankton: "#7df9ff",
          coral: "#ff6b9d",
          amber: "#ffb347",
          sand: "#f5e9c9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        bubbleRise: {
          "0%": { transform: "translateY(110vh) translateX(0) scale(0.4)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(-10vh) translateX(20px) scale(1)", opacity: "0" },
        },
        sway: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(8px) rotate(2deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        swimRight: {
          "0%": { transform: "translateX(-15vw)" },
          "100%": { transform: "translateX(115vw)" },
        },
        swimLeft: {
          "0%": { transform: "translateX(115vw) scaleX(-1)" },
          "100%": { transform: "translateX(-15vw) scaleX(-1)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, 10px)" },
          "50%": { transform: "translate(0, 30px)" },
          "75%": { transform: "translate(-20px, 10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        rayShift: {
          "0%, 100%": { opacity: "0.6", transform: "rotate(-2deg)" },
          "50%": { opacity: "0.9", transform: "rotate(2deg)" },
        },
      },
      animation: {
        bubbleRise: "bubbleRise linear infinite",
        sway: "sway 6s ease-in-out infinite",
        glowPulse: "glowPulse 4s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        marquee: "marquee 50s linear infinite",
        ripple: "ripple 2.6s ease-out infinite",
        swimRight: "swimRight linear infinite",
        swimLeft: "swimLeft linear infinite",
        drift: "drift 18s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        rayShift: "rayShift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
