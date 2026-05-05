import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
        <h3 className="font-display font-semibold text-xl tracking-tight">
          {title}
        </h3>
        <span className="ml-auto font-mono text-xs text-muted">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <ol className="relative space-y-3">
        {/* Vertical connector line */}
        <span
          className="absolute left-6 top-3 bottom-3 w-px bg-line pointer-events-none"
          aria-hidden
        />
        {items.map((item, i) => (
          <Card
            key={item.slug}
            item={item}
            index={i}
            featured={i === 0 /* most recent first in each column */}
          />
        ))}
      </ol>
    </div>
  );
}

function Card({
  item,
  index,
  featured,
}: {
  item: TimelineItem;
  index: number;
  featured: boolean;
}) {
  const { t, tl, d } = useLang();
  const [hovered, setHovered] = useState(false);
  const isCurrent = item.endYear === "now";

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="relative"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        to={`/parcours/${item.slug}`}
        className={`relative block group rounded-2xl border bg-cream hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all ${
          featured ? "border-accent/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "border-line"
        }`}
      >
        {/* Connector dot on the line */}
        <span
          className={`absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full border-2 border-paper z-10 ${
            isCurrent ? "bg-accent" : "bg-ink/30"
          }`}
          aria-hidden
        />

        <div className={featured ? "p-5" : "p-4"}>
          <div className="flex items-start gap-4 pl-3">
            <OrgLogo name={item.org} size={featured ? 52 : 44} />

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

              <h4
                className={`font-display font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors ${
                  featured ? "text-xl sm:text-2xl" : "text-lg"
                }`}
              >
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

              <p
                className={`mt-3 text-sm text-ink/70 leading-relaxed ${
                  featured ? "" : "line-clamp-2"
                }`}
              >
                {t(item.description)}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, featured ? 5 : 3).map((tag) => (
                    <TechBadge key={tag} name={tag} size="sm" variant="ghost" />
                  ))}
                </div>
              )}

              {/* Hover-revealed highlights */}
              <AnimatePresence initial={false}>
                {hovered && item.highlights && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 pt-3 border-t border-line space-y-1.5">
                      {tl(item.highlights)
                        .slice(0, 3)
                        .map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs text-ink/75"
                          >
                            <span className="font-mono text-accent">→</span>
                            <span className="line-clamp-1">{h}</span>
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
