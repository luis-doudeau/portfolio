import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { eduItems, workItems, type TimelineItem } from "../data/timeline";
import { SectionHeader } from "../components/SectionHeader";
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

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
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
      <div className="flex items-center gap-3 mb-8">
        <span className="size-7 grid place-items-center rounded-lg bg-ink text-paper">
          {icon}
        </span>
        <h3 className="font-display font-semibold text-lg tracking-tight">
          {title}
        </h3>
      </div>

      <div className="space-y-0 border-t border-line">
        {items.map((item, i) => (
          <Card key={item.slug} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

function Card({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const { t, tl, d } = useLang();
  const isCurrent = item.endYear === "now";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
    >
      <Link
        to={`/parcours/${item.slug}`}
        className="block group border-b border-line py-6 transition-colors hover:bg-cream/50"
      >
        {/* Period + current badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-[11px] text-muted tracking-wide">
            {t(item.period)}
          </span>
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              {t(d.timeline.current)}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="font-display font-semibold text-base sm:text-lg tracking-tight leading-snug text-ink group-hover:text-accent transition-colors mb-1">
          {t(item.title)}
        </h4>

        {/* Org + location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-2">
          <span className="font-medium text-ink/80">{item.org}</span>
          {item.location && (
            <span className="inline-flex items-center gap-1 text-muted text-xs">
              <MapPin className="size-3" />
              {t(item.location)}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-ink/65 leading-relaxed mb-3 max-w-lg">
          {t(item.description)}
        </p>

        {/* Tags as plain text */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-1 mb-2">
            {item.tags.map((tag, i) => (
              <span key={tag} className="font-mono text-[11px] text-muted">
                {tag}{i < item.tags!.length - 1 && <span className="mx-1 text-line-strong">·</span>}
              </span>
            ))}
          </div>
        )}

        {/* Highlights — always visible for first item, collapsed for others */}
        {item.highlights && index === 0 && (
          <ul className="mt-3 space-y-1">
            {tl(item.highlights)
              .slice(0, 3)
              .map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs text-ink/60"
                >
                  <span className="font-mono text-accent shrink-0">→</span>
                  <span>{h}</span>
                </li>
              ))}
          </ul>
        )}

        {/* Subtle arrow on hover */}
        <div className="flex items-center mt-3">
          <ArrowRight className="size-3.5 text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}
