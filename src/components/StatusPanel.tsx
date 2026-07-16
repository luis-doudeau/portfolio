import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, MapPin, Music4, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LangProvider";
import { Avatar } from "./Avatar";
import { OrgLogo } from "./OrgLogo";

const ease = [0.22, 1, 0.36, 1] as const;

function useLocalTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function format(time: Date) {
  const h = String(time.getHours()).padStart(2, "0");
  const m = String(time.getMinutes()).padStart(2, "0");
  const s = String(time.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export function StatusPanel() {
  const { t, d } = useLang();
  const time = useLocalTime();

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease }}
      className="rounded-3xl border border-line bg-paper shadow-card p-5 sm:p-6 relative overflow-hidden"
    >
      {/* Subtle accent glow */}
      <div
        className="absolute -top-24 -right-24 size-64 rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Header: avatar + availability */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <Avatar src={profile.photoUrl} initials={profile.initials} size={64} />
            <div className="min-w-0">
              <div className="font-display font-semibold text-lg leading-tight">
                {profile.name}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mt-0.5">
                He / Him
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
              <span className="relative size-1.5 rounded-full bg-emerald-500" />
            </span>
            {t(d.hero.available)}
          </span>
        </div>

        <div className="space-y-2">
          {/* Currently at */}
          <Row
            icon={<OrgLogo name="Atos" size={28} className="!rounded-md" />}
            label={t(d.hero.nowAt)}
            value="Atos"
            sub="Sept 2023 →"
          />

          {/* Now coding */}
          <Row
            icon={
              <span className="size-7 rounded-md bg-accent/15 grid place-items-center text-accent">
                <Code2 className="size-3.5" />
              </span>
            }
            label={t(d.hero.nowCoding)}
            value={t(profile.now.workingOn)}
          />

          {/* Learning */}
          <Row
            icon={
              <span className="size-7 rounded-md bg-violet-500/15 grid place-items-center text-violet-500 dark:text-violet-400">
                <Sparkles className="size-3.5" />
              </span>
            }
            label={t(d.hero.learning)}
            value={t(profile.now.learning)}
          />

          {/* Local time + location */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-line">
            <div className="flex items-start gap-2">
              <span className="size-7 rounded-md bg-paper grid place-items-center text-muted">
                <MapPin className="size-3.5" />
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Paris
                </div>
                <div className="text-sm font-medium text-ink/85">FR</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="size-7 rounded-md bg-paper grid place-items-center text-muted">
                <Music4 className="size-3.5" />
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  {t(d.hero.localTime)}
                </div>
                <div className="font-mono text-sm font-medium text-ink/85 tabular-nums">
                  {format(time)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

function Row({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-paper/60 transition-colors">
      <span className="shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          {label}
        </div>
        <div className="text-sm font-medium text-ink/90 truncate">{value}</div>
      </div>
      {sub && (
        <span className="font-mono text-[10px] text-muted shrink-0 mt-1">
          {sub}
        </span>
      )}
    </div>
  );
}
