import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { stackTags } from "../data/skills";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-10 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
            <span className="relative size-2 rounded-full bg-emerald-500" />
          </span>
          Disponible · {profile.location}
          <span className="hidden sm:block flex-1 h-px bg-ink/15" />
          <span className="hidden sm:inline">v2026.05</span>
        </motion.div>

        <h1 className="font-serif text-[12vw] sm:text-[8vw] lg:text-[7.5rem] leading-[0.92] tracking-tight">
          <Word delay={0.05}>Full-stack</Word>
          <span className="inline-flex items-baseline gap-3 sm:gap-5">
            <Word delay={0.15} italic>
              developer
            </Word>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="inline-block size-3 sm:size-5 rounded-full bg-accent translate-y-[-0.4em]"
            />
          </span>
          <br />
          <Word delay={0.25}>qui livre.</Word>
        </h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <p className="text-lg sm:text-xl text-ink/80 leading-relaxed text-balance max-w-xl">
              Je suis <span className="text-ink font-semibold">{profile.name}</span> — étudiant en Master 2 Architecture des SI à
              l'<span className="text-ink font-medium">ETNA</span>, alternant chez <span className="text-ink font-medium">Atos</span>{" "}
              sur le SI national des formations supérieures, et fondateur de Webase Studio.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full font-medium hover:bg-accent transition-colors"
              >
                Travaillons ensemble
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a
                href={profile.cvUrl}
                className="group inline-flex items-center gap-2 border border-ink/20 hover:border-ink px-5 py-3 rounded-full font-medium transition-colors"
              >
                Télécharger CV
                <ArrowDownRight className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease }}
            className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-10"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
              Currently
            </div>
            <p className="text-ink/90">{profile.status}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="6+" label="Projets livrés" />
              <Stat value="3 ans" label="d'alternance" />
              <Stat value="14.4" label="/20 BUT" />
            </dl>
          </motion.aside>
        </div>
      </div>

      <div className="relative mt-20 sm:mt-28 border-y border-ink/10 py-5 overflow-hidden bg-cream/40">
        <div className="flex marquee gap-12 whitespace-nowrap font-mono text-sm text-ink/60">
          {[...stackTags, ...stackTags].map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="size-1 rounded-full bg-accent" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({ children, delay = 0, italic = false }: { children: string; delay?: number; italic?: boolean }) {
  return (
    <motion.span
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block ${italic ? "italic text-accent" : ""}`}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl sm:text-3xl text-ink">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
        {label}
      </div>
    </div>
  );
}
