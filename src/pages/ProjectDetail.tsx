import { ArrowUpRight, Calendar, Hash, MapPin, Users } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject, projects } from "../data/projects";
import { DetailLayout } from "../components/DetailLayout";
import { TechBadge } from "../components/TechBadge";
import { ProjectLogo } from "../components/ProjectLogo";
import { useLang } from "../i18n/LangProvider";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const { t, tl, d } = useLang();

  if (!project) return <Navigate to="/" replace />;

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <DetailLayout
      eyebrow={`${t(d.detail.project)} · ${project.categories.join(" / ")}`}
      title={project.title}
      titleFont={project.accent.titleFont}
      titleColor={project.accent.color}
      meta={
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span className="font-mono">{project.year}</span>
          <span className="size-1 rounded-full bg-muted/40" />
          <span>{t(project.context)}</span>
        </div>
      }
    >
      {/* Hero strip with project logo + tagline */}
      <div
        className="rounded-3xl border border-line p-8 mb-10 relative overflow-hidden"
        style={{ background: hexToRgba(project.accent.color, 0.08) }}
      >
        <div
          className="absolute -top-12 -right-12 size-48 rounded-full opacity-20 blur-3xl"
          style={{ background: project.accent.color }}
        />
        <div className="relative flex items-start gap-6">
          <ProjectLogo slug={project.slug} color={project.accent.color} size={88} />
          <div>
            <p
              className="text-xl sm:text-2xl font-semibold leading-snug max-w-2xl"
              style={{ fontFamily: project.accent.titleFont, color: "var(--ink)" }}
            >
              {t(project.description)}
            </p>
          </div>
        </div>
      </div>

      {/* Stats banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <Stat
          icon={<Calendar className="size-4" />}
          label={t(d.detail.duration)}
          value={project.year}
        />
        {project.role && (
          <Stat
            icon={<Users className="size-4" />}
            label={t(d.detail.role)}
            value={t(project.role)}
          />
        )}
        <Stat
          icon={<Hash className="size-4" />}
          label={t(d.detail.technologies)}
          value={`${project.stack.length}`}
        />
        {project.team && (
          <Stat
            icon={<MapPin className="size-4" />}
            label="Team"
            value={t(project.team)}
          />
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-ink/85 text-base sm:text-lg leading-relaxed">
          {project.longDescription &&
            tl(project.longDescription).map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <aside className="space-y-5">
          <Block label={t(d.detail.stack)}>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.stack.map((s) => (
                <TechBadge key={s} name={s} size="sm" />
              ))}
            </div>
          </Block>
          {project.links && project.links.length > 0 && (
            <Block label={t(d.detail.links)}>
              <div className="flex flex-col gap-2 mt-2">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-2 text-sm font-medium border border-line hover:border-accent/40 hover:bg-paper transition-colors px-3 py-2 rounded-xl group"
                  >
                    {t(l.label)}
                    <ArrowUpRight className="size-3.5 group-hover:rotate-45 transition-transform" />
                  </a>
                ))}
              </div>
            </Block>
          )}
        </aside>
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-5">
          {t(d.detail.keypoints)}
        </h2>
        <ul className="space-y-3">
          {tl(project.highlights).map((h, i) => (
            <li key={i} className="flex gap-3 text-ink/85">
              <span
                className="font-mono shrink-0"
                style={{ color: project.accent.color }}
              >
                →
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Related projects */}
      {related.length > 0 && (
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display font-semibold text-2xl tracking-tight mb-5">
            {t(d.detail.relatedProjects)}
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group block p-4 rounded-2xl border border-line hover:border-accent/40 transition-colors"
                style={{ background: hexToRgba(p.accent.color, 0.04) }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <ProjectLogo slug={p.slug} color={p.accent.color} size={32} />
                  <span
                    className="font-semibold text-sm group-hover:text-accent transition-colors"
                    style={{ fontFamily: p.accent.titleFont }}
                  >
                    {p.title}
                  </span>
                </div>
                <p className="text-xs text-ink/65 line-clamp-2">{t(p.context)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </DetailLayout>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-cream p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-2">
        {label}
      </div>
      <div className="text-sm text-ink/85">{children}</div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-line p-4 bg-cream">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-1.5">
        <span className="text-accent">{icon}</span>
        {label}
      </div>
      <div className="font-display font-semibold text-base text-ink truncate">
        {value}
      </div>
    </div>
  );
}

function hexToRgba(hex: string, alpha: number) {
  const m = hex.replace("#", "");
  const r = parseInt(m.slice(0, 2), 16);
  const g = parseInt(m.slice(2, 4), 16);
  const b = parseInt(m.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
