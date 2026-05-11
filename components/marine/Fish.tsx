"use client";

type FishProps = {
  variant?: "tropical" | "silver" | "deep";
  size?: number;
  color?: string;
};

export default function Fish({
  variant = "tropical",
  size = 40,
  color,
}: FishProps) {
  if (variant === "tropical") {
    const fill = color ?? "#ffb347";
    return (
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 100 60"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="trop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fill} stopOpacity="1" />
            <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M10 30 Q35 5, 70 30 Q35 55, 10 30 Z"
          fill="url(#trop)"
          opacity="0.95"
        />
        <path d="M70 30 L95 15 L95 45 Z" fill={fill} opacity="0.8" />
        <circle cx="25" cy="28" r="2.5" fill="#020812" />
        <path d="M40 18 Q50 22, 55 26" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  if (variant === "silver") {
    return (
      <svg
        width={size}
        height={size * 0.4}
        viewBox="0 0 100 40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="silv" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cce8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5a8fb5" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <ellipse cx="40" cy="20" rx="35" ry="10" fill="url(#silv)" opacity="0.9" />
        <path d="M75 20 L95 8 L95 32 Z" fill="#5a8fb5" opacity="0.7" />
        <circle cx="22" cy="19" r="1.8" fill="#020812" />
      </svg>
    );
  }

  // Deep (bioluminescent fish)
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 100 55"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="bioglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="28" rx="35" ry="11" fill="url(#bioglow)" opacity="0.4" />
      <path
        d="M10 28 Q35 8, 65 28 Q35 48, 10 28 Z"
        fill="#0a3d6b"
        stroke="#00f0ff"
        strokeOpacity="0.7"
        strokeWidth="1"
      />
      <path d="M65 28 L88 16 L88 40 Z" fill="#0a3d6b" stroke="#00f0ff" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="25" cy="26" r="2" fill="#00f0ff" opacity="0.95">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="22" r="1.2" fill="#00f0ff" opacity="0.7">
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="34" r="1.2" fill="#00f0ff" opacity="0.7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
