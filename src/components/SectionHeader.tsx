import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeader({ index, label, title, description }: Props) {
  return (
    <div className="grid md:grid-cols-12 gap-6 mb-12 md:mb-20">
      <div className="md:col-span-3 flex md:flex-col gap-3 items-start">
        <span className="font-mono text-xs tracking-tight text-muted">
          {index}
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink">
          <span className="size-1.5 rounded-full bg-accent" />
          {label}
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-9"
      >
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted text-balance">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
