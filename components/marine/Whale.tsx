"use client";

type Props = {
  size?: number;
};

export default function Whale({ size = 380 }: Props) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 400 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="whaleBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a3d6b" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#020812" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M20 90 Q60 50, 160 60 Q260 65, 320 80 Q360 90, 380 90 L380 95 Q360 100, 320 105 Q310 130, 290 130 Q280 130, 275 115 Q220 125, 160 120 Q60 130, 20 100 Z"
        fill="url(#whaleBody)"
        opacity="0.9"
      />
      <path d="M15 90 Q5 80, 0 70 Q5 95, 15 95 Z" fill="#020812" opacity="0.85" />
      {/* Fluke */}
      <path d="M380 92 Q400 70, 395 60 Q380 80, 380 92 Z" fill="#0a3d6b" opacity="0.8" />
      <path d="M380 92 Q400 115, 395 130 Q380 110, 380 92 Z" fill="#0a3d6b" opacity="0.8" />
      {/* Eye */}
      <circle cx="55" cy="85" r="2" fill="#7df9ff" opacity="0.7" />
    </svg>
  );
}
