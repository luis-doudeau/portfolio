import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CATEGORY_STYLE, categories, projects, type Project } from "../data/projects";
import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";
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

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === c
                  ? "bg-ink text-paper border-ink"
                  : "border-line hover:border-ink/40 text-ink/80"
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(280px,auto)]">
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
  // Featured projects span 7/5 cols on first row, others are 4 cols (3 per row)
  const span = project.featured
    ? index === 0
      ? "md:col-span-7"
      : "md:col-span-5"
    : "md:col-span-4";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`relative group ${span}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative block h-full rounded-3xl border border-line overflow-hidden hover:-translate-y-1 transition-transform duration-300"
        style={{ background: project.accent.gradient }}
      >
        {/* Pattern background */}
        <Pattern accent={project.accent} />

        {/* Top stripe with project's accent color */}
        <div
          className="absolute top-0 inset-x-0 h-1"
          style={{ background: project.accent.color }}
        />

        {/* Monogram in corner */}
        <div
          className="absolute top-6 right-6 size-12 rounded-2xl grid place-items-center font-display font-medium text-2xl"
          style={{
            background: project.accent.color,
            color: "#fff",
          }}
        >
          {project.accent.mark}
        </div>

        <div className="relative h-full p-6 sm:p-8 flex flex-col">
          {/* Header */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.categories.map((c) => {
              const s = CATEGORY_STYLE[c];
              return (
                <span
                  key={c}
                  className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border ${s.bg} ${s.text} ${s.border}`}
                >
                  {c}
                </span>
              );
            })}
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border border-line text-muted">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-display font-medium text-3xl sm:text-4xl tracking-tight mb-2"
            style={{ color: "var(--ink)" }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-ink/70 mb-5">{t(project.context)}</p>

          {/* Description */}
          <p className="text-sm sm:text-base text-ink/80 leading-relaxed mb-5 flex-1">
            {t(project.description)}
          </p>

          {/* Stack */}
          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, project.featured ? 6 : 4).map((s) => (
                <TechBadge key={s} name={s} size="sm" variant="ghost" />
              ))}
              {project.stack.length > (project.featured ? 6 : 4) && (
                <span className="font-mono text-[11px] text-muted px-2 py-0.5">
                  +{project.stack.length - (project.featured ? 6 : 4)}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-line">
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:gap-3 transition-all"
                style={{ color: project.accent.color }}
              >
                Voir
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function Pattern({ accent }: { accent: Project["accent"] }) {
  if (accent.pattern === "dots") {
    return (
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${accent.color} 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />
    );
  }
  if (accent.pattern === "grid") {
    return (
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${accent.color} 1px, transparent 1px), linear-gradient(to right, ${accent.color} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    );
  }
  if (accent.pattern === "lines") {
    return (
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${accent.color} 0 1px, transparent 1px 12px)`,
        }}
      />
    );
  }
  // blob
  return (
    <div
      className="absolute -bottom-24 -left-24 size-72 rounded-full opacity-[0.20] blur-3xl pointer-events-none"
      style={{ background: accent.color }}
    />
  );
}
