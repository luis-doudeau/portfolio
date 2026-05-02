import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Project } from "../data/projects";
import { SectionHeader } from "../components/SectionHeader";

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");

  const filtered = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02 / Projets"
          label="Sélection"
          title={
            <>
              Des projets que j'ai{" "}
              <span className="italic font-serif text-accent">réellement portés</span>, du cadrage au déploiement.
            </>
          }
          description="De Fresq pour le Ministère à Sphere en side-project, voici ce sur quoi je passe mon temps."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === c
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/15 hover:border-ink/40 text-ink/80"
              }`}
            >
              {c}
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-ink rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      className="border border-ink/10 rounded-3xl overflow-hidden bg-paper hover:border-ink/30 transition-colors"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 sm:p-8 flex items-start gap-6 group"
      >
        <span className="font-mono text-xs text-muted pt-2 hidden sm:block">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
            <h3 className="font-serif text-2xl sm:text-3xl tracking-tight">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-muted">{project.year}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full bg-accent-soft text-accent">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-ink/70 mb-3">{project.context}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 rounded-md font-mono text-[11px] bg-ink/5 text-ink/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <span
          className={`shrink-0 size-10 rounded-full border border-ink/15 grid place-items-center transition-transform ${
            open ? "rotate-45" : ""
          } group-hover:bg-ink group-hover:text-paper group-hover:border-ink`}
        >
          <span className="block w-3 h-px bg-current relative before:content-[''] before:absolute before:inset-0 before:rotate-90 before:bg-current" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className={`grid md:grid-cols-12 gap-8 p-6 sm:p-8 pt-0 sm:pt-0 bg-gradient-to-br ${
                project.accent ?? "from-cream/40 to-paper"
              }`}
            >
              <div className="md:col-span-7">
                <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-ink/80">
                      <span className="font-mono text-accent">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper transition-colors px-4 py-2 rounded-full"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl border border-ink/10 bg-paper/70 backdrop-blur-sm p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-3">
                    Stack complète
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md font-mono text-xs bg-ink/5 text-ink/80 border border-ink/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
