import { getTechIcon } from "../data/techIcons";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { wrap: string; icon: string; text: string }> = {
  sm: { wrap: "px-2 py-0.5 gap-1.5", icon: "size-3", text: "text-[11px]" },
  md: { wrap: "px-2.5 py-1 gap-2", icon: "size-3.5", text: "text-xs" },
  lg: { wrap: "px-3 py-1.5 gap-2", icon: "size-4", text: "text-sm" },
};

export function TechBadge({
  name,
  size = "md",
  variant = "default",
}: {
  name: string;
  size?: Size;
  variant?: "default" | "ghost" | "dark";
}) {
  const found = getTechIcon(name);
  const Icon = found?.icon;
  const color = found?.color;
  const s = sizes[size];

  const base =
    variant === "dark"
      ? "bg-paper/5 border-paper/10 text-paper/90"
      : variant === "ghost"
        ? "bg-transparent border-ink/10 text-ink/80"
        : "bg-paper border-ink/10 text-ink/80";

  return (
    <span
      className={`inline-flex items-center rounded-md border font-mono ${s.wrap} ${s.text} ${base}`}
    >
      {Icon && (
        <Icon
          className={s.icon}
          style={{ color }}
          aria-hidden
        />
      )}
      {name}
    </span>
  );
}
