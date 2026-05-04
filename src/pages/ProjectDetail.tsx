import { ArrowUpRight, MapPin } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import { DetailLayout } from "../components/DetailLayout";
import { TechBadge } from "../components/TechBadge";
import { useLang } from "../i18n/LangProvider";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const { t, tl, d } = useLang();

  if (!project) return <Navigate to="/" replace />;

  return (
    <DetailLayout
      eyebrow={`${t(d.detail.project)} · ${project.categories.join(" / ")}`}
      title={project.title}
      meta={
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span className="font-mono">{project.year}</span>
          <span className="size-1 rounded-full bg-muted/40" />
          <span>{t(project.context)}</span>
          {project.team && (
            <>
              <span className="size-1 rounded-full bg-muted/40" />
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" />
                {t(project.team)}
              </span>
            </>
          )}
        </div>
      }
    >
      {/* Hero strip with project's accent */}
      <div
        className="rounded-3xl border border-line p-8 mb-10 relative overflow-hidden"
        style={{ background: project.accent.gradient }}
      >
        <div
          className="absolute -top-12 -right-12 size-48 rounded-full opacity-30 blur-3xl"
          style={{ background: project.accent.color }}
        />
        <div
          className="relative font-display text-7xl sm:text-8xl font-medium"
          style={{ color: project.accent.color }}
        >
          {project.accent.mark}
        </div>
        <p className="relative mt-4 font-display text-xl sm:text-2xl text-ink/90 max-w-2xl">
          {t(project.description)}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-ink/85 text-base sm:text-lg leading-relaxed">
          {project.longDescription &&
            tl(project.longDescription).map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <aside className="space-y-5">
          {project.role && <Block label={t(d.detail.role)}>{t(project.role)}</Block>}
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
                    className="inline-flex items-center justify-between gap-2 text-sm font-medium border border-line hover:border-accent/40 hover:bg-cream transition-colors px-3 py-2 rounded-xl group"
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
        <h2 className="font-display font-medium text-2xl tracking-tight mb-5">
          {t(d.detail.keypoints)}
        </h2>
        <ul className="space-y-3">
          {tl(project.highlights).map((h, i) => (
            <li key={i} className="flex gap-3 text-ink/85">
              <span className="font-mono text-accent shrink-0">→</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
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
