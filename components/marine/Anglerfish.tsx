"use client";

type Props = {
  size?: number;
};

export default function Anglerfish({ size = 200 }: Props) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="lure" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#7df9ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7df9ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Lure light + glow */}
      <circle cx="55" cy="20" r="40" fill="url(#lure)" opacity="0.7">
        <animate attributeName="r" values="35;42;35" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="55" cy="20" r="4" fill="#ffffff" />

      {/* Antenna */}
      <path
        d="M80 55 Q70 35, 55 22"
        stroke="#1a1a2e"
        strokeWidth="2"
        fill="none"
      />

      {/* Body */}
      <path
        d="M60 80 Q90 35, 150 60 Q175 70, 175 75 Q175 85, 150 95 Q90 110, 60 80 Z"
        fill="#020812"
        stroke="#0a3d6b"
        strokeWidth="1"
      />

      {/* Eye */}
      <circle cx="95" cy="65" r="3" fill="#7df9ff" opacity="0.8" />
      <circle cx="95" cy="65" r="1.2" fill="#020812" />

      {/* Teeth */}
      <path d="M75 85 L80 92 L83 85" fill="#ffffff" opacity="0.6" />
      <path d="M85 85 L90 95 L93 85" fill="#ffffff" opacity="0.6" />
      <path d="M95 88 L100 95 L103 88" fill="#ffffff" opacity="0.6" />

      {/* Fins */}
      <path d="M120 50 L130 35 L135 55 Z" fill="#020812" stroke="#0a3d6b" strokeWidth="0.5" />

      {/* Tail */}
      <path d="M170 70 L195 55 L195 95 L170 80 Z" fill="#020812" stroke="#0a3d6b" strokeWidth="0.5" />
    </svg>
  );
}
