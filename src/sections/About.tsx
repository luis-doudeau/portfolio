import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01 / À propos"
          label="Qui je suis"
          title={
            <>
              Un développeur curieux,{" "}
              <span className="italic font-serif text-accent">qui aime livrer</span> autant que comprendre.
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-7 space-y-5 text-base sm:text-lg text-ink/80 leading-relaxed">
            <p className="text-ink text-lg sm:text-xl">{profile.about.intro}</p>
            {profile.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="md:col-span-5 space-y-4">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="border border-ink/10 rounded-2xl p-5 bg-cream/30 hover:bg-cream/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {group.label}
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
