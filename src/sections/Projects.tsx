import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, projects, type Project } from "../data/projects";
import { SectionHeader } from "../components/SectionHeader";
import { useLang } from "../i18n/LangProvider";

export function Projects() {
  const { t, d } = useLang();
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");

  const filtered = useMemo(
    () =>
      filter === "Tous"
        ? projects
        : projects.filter((p) =>
            p.categories.includes(filter as Project["categories"][number])
          ),
    [filter]
  );

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02 / Projects"
          label={t(d.projects.label)}
          title={
            <>
              {t(d.projects.title)}{" "}
              <span className="text-accent">{t(d.projects.titleAccent)}</span>
            </>
          }
          description={t(d.projects.description)}
        />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                filter === c
                  ? "bg-ink text-paper"
                  : "text-muted hover:text-ink"
              }`}
            >
              {c === "Tous" ? t(d.projects.filterAll) : c}
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

        {/* Project list — clean vertical stack */}
        <div className="space-y-0 border-t border-line">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang();

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block border-b border-line py-8 sm:py-10 transition-colors hover:bg-cream/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
          {/* Left: number + year */}
          <div className="md:col-span-1 flex md:flex-col gap-3 md:gap-1">
            <span className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-muted md:hidden">
              {project.year}
            </span>
          </div>

          {/* Center: main content */}
          <div className="md:col-span-8">
            {/* Title row */}
            <div className="flex items-center gap-3 mb-2">
              <span
                className="size-2 rounded-full shrink-0"
                style={{ background: project.accent.color }}
              />
              <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-tight text-ink group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <span className="hidden md:inline font-mono text-xs text-muted ml-1">
                {project.year}
              </span>
            </div>

            {/* Context */}
            <p className="text-sm text-muted mb-3 pl-5">
              {t(project.context)}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-ink/75 leading-relaxed pl-5 max-w-2xl">
              {t(project.description)}
            </p>

            {/* Stack — plain text, no badges */}
            <div className="mt-4 pl-5 flex flex-wrap gap-x-1 gap-y-0">
              {project.stack.map((s, i) => (
                <span key={s} className="font-mono text-[11px] text-muted">
                  {s}{i < project.stack.length - 1 && <span className="mx-1 text-line-strong">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Right: arrow */}
          <div className="hidden md:flex md:col-span-3 items-center justify-end pt-1">
            <span className="inline-flex items-center gap-2 text-sm text-muted group-hover:text-accent group-hover:gap-3 transition-all">
              {project.categories[0]}
              <ArrowRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
