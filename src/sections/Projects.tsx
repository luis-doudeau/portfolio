import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CATEGORY_STYLE, categories, projects, type Project } from "../data/projects";
import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";
import { ProjectLogo } from "../components/ProjectLogo";
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(320px,auto)]">
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

  // Subtle tinted background using the project's accent color
  const tint = hexToRgba(project.accent.color, 0.06);
  const tintHover = hexToRgba(project.accent.color, 0.10);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`relative group ${span}`}
      style={{
        // CSS var that the card uses; hover bumps via group-hover
        ["--card-tint" as string]: tint,
        ["--card-tint-hover" as string]: tintHover,
      }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative block h-full rounded-3xl border border-line overflow-hidden hover:-translate-y-1 transition-all duration-300 group-hover:border-[color:var(--card-color)]"
        style={{
          background: "var(--card-tint)",
          ["--card-color" as string]: project.accent.color,
        }}
      >
        {/* Top stripe with project's accent color */}
        <div
          className="absolute top-0 inset-x-0 h-1"
          style={{ background: project.accent.color }}
        />

        <div className="relative h-full p-6 sm:p-8 flex flex-col">
          {/* Top row: logo + categories */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <ProjectLogo
              slug={project.slug}
              color={project.accent.color}
              size={project.featured ? 56 : 44}
            />

            <div className="flex flex-wrap gap-1 justify-end">
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
            </div>
          </div>

          {/* Title in project's font */}
          <h3
            className={`font-semibold tracking-tight mb-2 ${
              project.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
            }`}
            style={{ fontFamily: project.accent.titleFont }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-ink/65 mb-4 font-mono">
            <span className="text-muted">{project.year}</span>
            <span className="mx-2 text-muted/40">·</span>
            {t(project.context)}
          </p>

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
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
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

function hexToRgba(hex: string, alpha: number) {
  const m = hex.replace("#", "");
  const r = parseInt(m.slice(0, 2), 16);
  const g = parseInt(m.slice(2, 4), 16);
  const b = parseInt(m.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
