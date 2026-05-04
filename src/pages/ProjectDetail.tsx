import { ArrowUpRight, MapPin } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import { DetailLayout } from "../components/DetailLayout";
import { TechBadge } from "../components/TechBadge";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/" replace />;

  return (
    <DetailLayout
      eyebrow={`Projet · ${project.categories.join(" / ")}`}
      title={project.title}
      meta={
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span className="font-mono">{project.year}</span>
          <span className="size-1 rounded-full bg-muted/40" />
          <span>{project.context}</span>
          {project.team && (
            <>
              <span className="size-1 rounded-full bg-muted/40" />
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" />
                {project.team}
              </span>
            </>
          )}
        </div>
      }
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-ink/85 text-base sm:text-lg leading-relaxed">
          <p className="text-xl font-serif text-ink">{project.description}</p>
          {(project.longDescription ?? []).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="space-y-5">
          {project.role && (
            <Block label="Rôle">{project.role}</Block>
          )}
          <Block label="Stack">
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.stack.map((s) => (
                <TechBadge key={s} name={s} size="sm" />
              ))}
            </div>
          </Block>
          {project.links && project.links.length > 0 && (
            <Block label="Liens">
              <div className="flex flex-col gap-2 mt-2">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-2 text-sm font-medium border border-ink/15 hover:border-ink hover:bg-ink hover:text-paper transition-colors px-3 py-2 rounded-xl group"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3.5 group-hover:rotate-45 transition-transform" />
                  </a>
                ))}
              </div>
            </Block>
          )}
        </aside>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-10">
        <h2 className="font-serif text-2xl tracking-tight mb-5">Points clés</h2>
        <ul className="space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-ink/85">
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
    <div className="rounded-2xl border border-ink/10 bg-cream/30 p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-2">
        {label}
      </div>
      <div className="text-sm text-ink/85">{children}</div>
    </div>
  );
}
