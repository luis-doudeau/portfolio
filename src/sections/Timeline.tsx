import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { eduItems, workItems, type TimelineItem } from "../data/timeline";
import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";
import { OrgLogo } from "../components/OrgLogo";
import { useLang } from "../i18n/LangProvider";

export function Timeline() {
  const { t, d } = useLang();

  return (
    <section id="timeline" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03 / Career"
          label={t(d.timeline.label)}
          title={
            <>
              {t(d.timeline.title)}{" "}
              <span className="text-accent">{t(d.timeline.titleAccent1)}</span>
              {t(d.timeline.titleMid)}{" "}
              <span className="text-accent">{t(d.timeline.titleAccent2)}</span>.
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Column
            title={t(d.timeline.work)}
            icon={<Briefcase className="size-4" />}
            items={workItems}
          />
          <Column
            title={t(d.timeline.edu)}
            icon={<GraduationCap className="size-4" />}
            items={eduItems}
          />
        </div>
      </div>
    </section>
  );
}

function Column({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: TimelineItem[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-line">
        <span className="size-8 grid place-items-center rounded-full bg-ink text-paper">
          {icon}
        </span>
        <h3 className="font-display font-medium text-xl tracking-tight">{title}</h3>
        <span className="ml-auto font-mono text-xs text-muted">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <ol className="space-y-3">
        {items.map((item, i) => (
          <Card key={item.slug} item={item} index={i} />
        ))}
      </ol>
    </div>
  );
}

function Card({ item, index }: { item: TimelineItem; index: number }) {
  const { t, d } = useLang();
  const isCurrent = item.endYear === "now";

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <Link
        to={`/parcours/${item.slug}`}
        className="block group rounded-2xl border border-line bg-cream p-5 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all"
      >
        <div className="flex items-start gap-4">
          <OrgLogo name={item.org} size={48} />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <span
                className={`font-mono text-[11px] uppercase tracking-[0.15em] ${
                  isCurrent ? "text-accent" : "text-muted"
                }`}
              >
                {t(item.period)}
                {isCurrent && (
                  <span className="ml-2 inline-flex items-center gap-1 normal-case tracking-normal">
                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px]">{t(d.timeline.current)}</span>
                  </span>
                )}
              </span>
              <ArrowUpRight className="size-4 text-muted group-hover:text-accent group-hover:rotate-45 transition-all shrink-0" />
            </div>

            <h4 className="font-display font-medium text-lg sm:text-xl tracking-tight leading-snug group-hover:text-accent transition-colors">
              {t(item.title)}
            </h4>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="font-medium text-ink/85">{item.org}</span>
              {item.location && (
                <span className="inline-flex items-center gap-1 text-muted text-xs">
                  <MapPin className="size-3" />
                  {t(item.location)}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-ink/70 leading-relaxed">
              {t(item.description)}
            </p>

            {item.tags && item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.slice(0, 4).map((tag) => (
                  <TechBadge key={tag} name={tag} size="sm" variant="ghost" />
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
