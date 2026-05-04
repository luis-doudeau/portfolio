import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useLang } from "../i18n/LangProvider";

type Props = {
  eyebrow: string;
  title: string;
  meta?: ReactNode;
  children: ReactNode;
};

export function DetailLayout({ eyebrow, title, meta, children }: Props) {
  const { t, d } = useLang();

  return (
    <article className="pt-32 sm:pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft className="size-3.5" />
          {t(d.detail.back)}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-6xl leading-[1.02] tracking-tight text-balance">
            {title}
          </h1>

          {meta && <div className="mt-6">{meta}</div>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          {children}
        </motion.div>
      </div>
    </article>
  );
}
