import { ORGS } from "../data/timeline";

type Props = {
  name: string;
  size?: number;
  className?: string;
};

export function OrgLogo({ name, size = 44, className = "" }: Props) {
  const cfg = ORGS[name] ?? {
    short: name.slice(0, 2).toUpperCase(),
    bg: "#333",
    text: "#fff",
  };

  return (
    <div
      className={`shrink-0 rounded-xl grid place-items-center font-mono font-bold tracking-tight ${className}`}
      style={{
        width: size,
        height: size,
        background: cfg.bg,
        color: cfg.text,
        fontSize: size * 0.32,
      }}
      aria-label={name}
      title={name}
    >
      {cfg.short}
    </div>
  );
}
