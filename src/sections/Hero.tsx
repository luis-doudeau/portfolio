import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { stackTags } from "../data/skills";
import { TechBadge } from "../components/TechBadge";
import { useLang } from "../i18n/LangProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t, d } = useLang();

  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Decorative tech grid background */}
      <div className="absolute inset-0 grid-bg opacity-[0.4] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        className="absolute -top-40 -right-40 size-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          {t(d.hero.eyebrow)}
          <span className="hidden sm:block flex-1 h-px bg-line" />
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <MapPin className="size-3" />
            {t(d.hero.location)}
          </span>
        </motion.div>

        {/* Name — both lines left-aligned, more reasonable sizes */}
        <h1 className="font-display font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-[-0.04em]">
          <Word delay={0.05}>{profile.firstName}</Word>
          <br />
          <span className="inline-flex items-baseline">
            <Word delay={0.18}>{profile.lastName}</Word>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease }}
              className="inline-block size-2.5 sm:size-3.5 rounded-full bg-accent ml-2 translate-y-[-0.05em]"
            />
          </span>
        </h1>

        <div className="mt-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7, ease }}
            className="text-xl sm:text-2xl md:text-[1.75rem] leading-snug text-ink/85 text-balance"
          >
            {t(d.hero.role)}{" "}
            <span className="text-accent font-medium">{t(d.hero.accent)}</span>
            {t(d.hero.locationSuffix)}
          </motion.p>
        </div>

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed text-balance max-w-2xl">
              {t(d.hero.bio)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full font-medium hover:bg-accent transition-colors"
              >
                {t(d.hero.ctaProjects)}
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={profile.cvUrl}
                className="group inline-flex items-center gap-2 border border-line hover:border-ink/50 px-5 py-3 rounded-full font-medium transition-colors text-ink"
              >
                {t(d.hero.ctaCV)}
                <ArrowDownRight className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease }}
            className="lg:col-span-5 lg:border-l lg:border-line lg:pl-10"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
              {t(d.hero.currently)}
            </div>
            <p className="text-ink/90 leading-relaxed">{t(d.hero.status)}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="6" label={t(d.hero.statProjects)} />
              <Stat value="3 ans" label={t(d.hero.statYears)} />
              <Stat value="14.4" label={t(d.hero.statBut)} />
            </dl>
          </motion.aside>
        </div>
      </div>

      <div className="relative mt-20 sm:mt-28 border-y border-line py-5 overflow-hidden bg-cream">
        <div className="flex marquee gap-3 whitespace-nowrap">
          {[...stackTags, ...stackTags, ...stackTags].map((tag, i) => (
            <TechBadge key={i} name={tag} size="md" variant="ghost" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-medium text-2xl sm:text-3xl text-ink">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
        {label}
      </div>
    </div>
  );
}
