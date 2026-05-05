import { useState } from "react";

type Props = {
  src?: string;
  initials?: string;
  size?: number;
  className?: string;
};

export function Avatar({ src = "/me.jpg", initials = "LD", size = 96, className = "" }: Props) {
  const [errored, setErrored] = useState(false);

  if (!errored && src) {
    return (
      <img
        src={src}
        alt={initials}
        width={size}
        height={size}
        onError={() => setErrored(true)}
        className={`rounded-2xl object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className={`grid place-items-center rounded-2xl font-display font-semibold tracking-tight ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        background:
          "linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%)",
        color: "#fff",
      }}
      aria-label={initials}
    >
      {initials}
    </span>
  );
}
