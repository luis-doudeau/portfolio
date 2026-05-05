import { useState } from "react";

type Props = {
  slug: string;
  color: string;
  size?: number;
  className?: string;
};

/**
 * Tries to load /public/logos/{slug}.svg first.
 * Falls back to a per-slug inline SVG mark if the file is missing.
 */
export function ProjectLogo({ slug, color, size = 56, className = "" }: Props) {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <img
        src={`/logos/${slug}.svg`}
        alt=""
        width={size}
        height={size}
        onError={() => setErrored(true)}
        className={className}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
    );
  }

  return (
    <span
      className={`grid place-items-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Fallback slug={slug} color={color} size={size} />
    </span>
  );
}

function Fallback({ slug, color, size }: { slug: string; color: string; size: number }) {
  switch (slug) {
    case "sphere":
      return <SphereMark color={color} size={size} />;
    case "fresq":
      return <FresqMark color={color} size={size} />;
    case "webase":
      return <WebaseMark color={color} size={size} />;
    case "proximeet":
      return <ProxiMeetMark color={color} size={size} />;
    case "bd-boum":
      return <BdBoumMark color={color} size={size} />;
    case "magicbot":
      return <MagicBotMark color={color} size={size} />;
    default:
      return <DefaultMark color={color} size={size} />;
  }
}

/* ───── Per-project marks ─────────────────────────────────────────────── */

function SphereMark({ color, size }: { color: string; size: number }) {
  // Six interlocking circles in a ring
  const r = 18;
  const ring = 28;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + ring * Math.cos(rad);
        const cy = 50 + ring * Math.sin(rad);
        return (
          <circle key={i} cx={cx} cy={cy} r={r} stroke={color} strokeWidth="3.5" fill="none" />
        );
      })}
    </svg>
  );
}

function FresqMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill={color} />
      <Hex cx={50} cy={28} r={11} />
      <Hex cx={31} cy={50} r={11} />
      <Hex cx={69} cy={50} r={11} />
      <Hex cx={50} cy={72} r={11} />
    </svg>
  );
}

function Hex({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
  return <polygon points={pts} fill="#000" />;
}

function WebaseMark({ color, size }: { color: string; size: number }) {
  // 6 connected loops swirling — references the Webase identity
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill={color} />
      <g stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 50 + 16 * Math.cos(rad);
          const cy = 50 + 16 * Math.sin(rad);
          return <circle key={i} cx={cx} cy={cy} r="13" />;
        })}
      </g>
    </svg>
  );
}

function ProxiMeetMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill={color} />
      {/* radar pulse rings */}
      <circle cx="50" cy="50" r="30" stroke="#fff" strokeWidth="3" opacity="0.4" />
      <circle cx="50" cy="50" r="20" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <circle cx="50" cy="50" r="8" fill="#fff" />
    </svg>
  );
}

function BdBoumMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="14" fill={color} />
      <text
        x="50"
        y="45"
        textAnchor="middle"
        fontFamily="Oxygen, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill="#000"
      >
        bd
      </text>
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontFamily="Oxygen, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#000"
        letterSpacing="2"
      >
        BOUM
      </text>
    </svg>
  );
}

function MagicBotMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill={color} />
      {/* antennae */}
      <line x1="35" y1="20" x2="35" y2="32" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="65" y1="20" x2="65" y2="32" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="35" cy="18" r="4" fill="#fff" />
      <circle cx="65" cy="18" r="4" fill="#fff" />
      {/* head */}
      <rect x="22" y="32" width="56" height="42" rx="12" fill="#fff" />
      {/* eyes */}
      <circle cx="38" cy="50" r="4" fill={color} />
      <circle cx="62" cy="50" r="4" fill={color} />
      {/* mouth */}
      <rect x="38" y="62" width="24" height="3" rx="1.5" fill={color} />
    </svg>
  );
}

function DefaultMark({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill={color} />
    </svg>
  );
}
