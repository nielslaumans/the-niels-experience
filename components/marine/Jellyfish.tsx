"use client";

type Props = { size?: number; glow?: string };

export default function Jellyfish({ size = 80, glow = "#7df9ff" }: Props) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id="bell" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.9" />
          <stop offset="60%" stopColor={glow} stopOpacity="0.4" />
          <stop offset="100%" stopColor={glow} stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="tentacles" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.7" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M15 50 Q15 15, 50 15 Q85 15, 85 50 Q85 60, 80 65 L20 65 Q15 60, 15 50 Z" fill="url(#bell)" stroke={glow} strokeOpacity="0.6" strokeWidth="1" />
      <ellipse cx="50" cy="40" rx="20" ry="10" fill={glow} opacity="0.25" />
      <g stroke="url(#tentacles)" strokeWidth="1" fill="none">
        <path d="M25 65 Q30 90, 22 130">
          <animate attributeName="d" values="M25 65 Q30 90, 22 130; M25 65 Q20 90, 28 130; M25 65 Q30 90, 22 130" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M40 65 Q40 95, 35 135">
          <animate attributeName="d" values="M40 65 Q40 95, 35 135; M40 65 Q44 95, 38 135; M40 65 Q40 95, 35 135" dur="7s" repeatCount="indefinite" />
        </path>
        <path d="M55 65 Q55 95, 60 135">
          <animate attributeName="d" values="M55 65 Q55 95, 60 135; M55 65 Q52 95, 58 135; M55 65 Q55 95, 60 135" dur="6.5s" repeatCount="indefinite" />
        </path>
        <path d="M70 65 Q72 90, 78 130">
          <animate attributeName="d" values="M70 65 Q72 90, 78 130; M70 65 Q68 90, 72 130; M70 65 Q72 90, 78 130" dur="7.5s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}
