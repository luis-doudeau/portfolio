import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";
import { useLang } from "../i18n/LangProvider";

export function About() {
  const { t, d } = useLang();

  const facts = [
    { value: profile.facts.yearsCode, label: t(d.about.facts.yearsCode) },
    { value: profile.facts.languages, label: t(d.about.facts.languages) },
    { value: profile.facts.projects, label: t(d.about.facts.projects) },
    { value: profile.facts.coffee, label: t(d.about.facts.coffee) },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01 / About"
          label={t(d.about.label)}
          title={
            <>
              {t(d.about.title)}{" "}
              <span className="text-accent">{t(d.about.titleAccent)}</span>
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Left: short bio + stats — much more compact */}
          <div className="md:col-span-5 space-y-8">
            <p className="font-display text-xl sm:text-2xl text-ink leading-snug text-balance">
              {t(d.about.bio)}
            </p>

            <dl className="grid grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="border border-line rounded-2xl p-4 hover:border-accent/40 transition-colors"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-display text-3xl sm:text-4xl font-medium text-ink">
                    {f.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>

          {/* Right: skill groups */}
          <div className="md:col-span-7 space-y-3">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="border border-line rounded-2xl p-5 bg-cream hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {t(group.label)}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((s) => (
                    <TechBadge key={s} name={s} size="sm" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
