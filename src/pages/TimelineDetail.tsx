import { ArrowUpRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { getTimelineItem } from "../data/timeline";
import { DetailLayout } from "../components/DetailLayout";
import { TechBadge } from "../components/TechBadge";
import { OrgLogo } from "../components/OrgLogo";
import { useLang } from "../i18n/LangProvider";

export function TimelineDetail() {
  const { slug } = useParams();
  const item = slug ? getTimelineItem(slug) : undefined;
  const { t, tl, d } = useLang();

  if (!item) return <Navigate to="/" replace />;

  const isWork = item.type === "work";

  return (
    <DetailLayout
      eyebrow={isWork ? t(d.detail.workExp) : t(d.detail.education)}
      title={t(item.title)}
      meta={
        <div className="flex items-center gap-4 mt-4">
          <OrgLogo name={item.org} size={56} />
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2 font-mono text-accent">
              {isWork ? <Briefcase className="size-3.5" /> : <GraduationCap className="size-3.5" />}
              {t(item.period)}
            </span>
            <span className="size-1 rounded-full bg-muted/40" />
            <span className="font-medium text-ink/85">{item.org}</span>
            {item.location && (
              <>
                <span className="size-1 rounded-full bg-muted/40" />
                <span className="inline-flex items-center gap-1 text-muted">
                  <MapPin className="size-3.5" />
                  {t(item.location)}
                </span>
              </>
            )}
          </div>
        </div>
      }
    >
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-5 text-ink/85 text-base sm:text-lg leading-relaxed">
          <p className="font-display text-xl text-ink">{t(item.description)}</p>
          {item.longDescription &&
            tl(item.longDescription).map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <aside className="space-y-5">
          {item.tags && item.tags.length > 0 && (
            <Block label={t(d.detail.skills)}>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.map((s) => (
                  <TechBadge key={s} name={s} size="sm" />
                ))}
              </div>
            </Block>
          )}
          {item.links && item.links.length > 0 && (
            <Block label={t(d.detail.resources)}>
              <div className="flex flex-col gap-2 mt-2">
                {item.links.map((l) => (
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

      {item.highlights && (
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-display font-medium text-2xl tracking-tight mb-5">
            {t(d.detail.keypoints)}
          </h2>
          <ul className="space-y-3">
            {tl(item.highlights).map((h, i) => (
              <li key={i} className="flex gap-3 text-ink/85">
                <span className="font-mono text-accent shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>
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
