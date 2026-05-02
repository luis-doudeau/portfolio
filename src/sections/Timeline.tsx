import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "../data/timeline";
import { SectionHeader } from "../components/SectionHeader";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 border-t border-ink/10 bg-cream/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03 / Parcours"
          label="Chronologie"
          title={
            <>
              Cinq ans à apprendre,{" "}
              <span className="italic font-serif text-accent">à construire</span>, à recommencer.
            </>
          }
        />

        <div className="relative">
          <div className="absolute left-[14px] md:left-1/2 top-0 bottom-0 w-px bg-ink/15 -translate-x-1/2" />

          <ol className="space-y-10 md:space-y-12">
            {timeline.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative grid md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-0 md:left-1/2 size-7 -translate-x-1/2 rounded-full border-2 border-ink bg-paper grid place-items-center z-10 ${
                      item.type === "edu" ? "" : ""
                    }`}
                  >
                    {item.type === "edu" ? (
                      <GraduationCap className="size-3.5 text-ink" />
                    ) : (
                      <Briefcase className="size-3.5 text-ink" />
                    )}
                  </span>

                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-1">
                    {item.period}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/70 mt-1">
                    {item.org}
                    {item.location && (
                      <span className="text-muted"> · {item.location}</span>
                    )}
                  </p>
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div
                      className={`mt-3 flex flex-wrap gap-1.5 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md font-mono text-[11px] bg-paper border border-ink/10 text-ink/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
