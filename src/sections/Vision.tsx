import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { useLang } from "../i18n/LangProvider";

export function Vision() {
  const { t, d } = useLang();

  return (
    <section id="vision" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04 / Ambitions"
          label={t(d.vision.label)}
          title={
            <>
              {t(d.vision.title)}{" "}
              <span className="text-accent">{t(d.vision.titleAccent)}</span>
              {t(d.vision.titleEnd)}
            </>
          }
          description={t(d.vision.description)}
        />

        <div className="grid md:grid-cols-2 gap-4">
          {d.vision.items.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="relative p-8 rounded-3xl border border-line hover:border-accent/40 transition-colors group overflow-hidden"
            >
              <span className="absolute top-6 right-6 font-mono text-xs text-muted">
                0{i + 1}
              </span>
              <span className="absolute -bottom-12 -right-12 size-40 rounded-full bg-accent-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative font-display font-medium text-2xl tracking-tight mb-3">
                {t(a.title)}
              </h3>
              <p className="relative text-ink/75 leading-relaxed">{t(a.body)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
