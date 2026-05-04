import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { eduItems, workItems, type TimelineItem } from "../data/timeline";
import { SectionHeader } from "../components/SectionHeader";
import { TechBadge } from "../components/TechBadge";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32 border-t border-ink/10 bg-cream/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03 / Parcours"
          label="Expériences & formations"
          title={
            <>
              D'un côté{" "}
              <span className="italic font-serif text-accent">le travail</span>, de l'autre{" "}
              <span className="italic font-serif text-accent">l'apprentissage</span>.
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Column
            title="Expérience pro"
            icon={<Briefcase className="size-4" />}
            items={workItems}
          />
          <Column
            title="Formation"
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
      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-ink/15">
        <span className="size-7 grid place-items-center rounded-full bg-ink text-paper">
          {icon}
        </span>
        <h3 className="font-serif text-xl tracking-tight">{title}</h3>
        <span className="ml-auto font-mono text-xs text-muted">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <ol className="relative space-y-3">
        <span className="absolute left-3 top-2 bottom-2 w-px bg-ink/15" aria-hidden />
        {items.map((item, i) => (
          <Card key={item.slug} item={item} index={i} />
        ))}
      </ol>
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
  const isCurrent = item.endYear === "now";
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="relative pl-10"
    >
      <span
        className={`absolute left-0 top-3 size-6 rounded-full border-2 grid place-items-center bg-paper z-10 transition-colors ${
          isCurrent ? "border-accent" : "border-ink/30"
        }`}
      >
        <span
          className={`size-2 rounded-full ${
            isCurrent ? "bg-accent animate-pulse" : "bg-ink/30"
          }`}
        />
      </span>

      <Link
        to={`/parcours/${item.slug}`}
        className="block group rounded-2xl border border-ink/10 bg-paper p-5 hover:border-ink/30 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.15em] ${
              isCurrent ? "text-accent" : "text-muted"
            }`}
          >
            {item.period}
          </span>
          <ArrowUpRight className="size-4 text-muted group-hover:text-ink group-hover:rotate-45 transition-all shrink-0" />
        </div>

        <h4 className="font-serif text-lg sm:text-xl tracking-tight leading-snug group-hover:text-accent transition-colors">
          {item.title}
        </h4>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-medium text-ink/80">{item.org}</span>
          {item.location && (
            <span className="inline-flex items-center gap-1 text-muted text-xs">
              <MapPin className="size-3" />
              {item.location}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-ink/70 leading-relaxed">
          {item.description}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.slice(0, 4).map((t) => (
              <TechBadge key={t} name={t} size="sm" variant="ghost" />
            ))}
          </div>
        )}
      </Link>
    </motion.li>
  );
}
