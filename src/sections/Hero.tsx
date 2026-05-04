import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { stackTags } from "../data/skills";
import { TechBadge } from "../components/TechBadge";

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
          <span className="size-1.5 rounded-full bg-accent" />
          Portfolio · 2026
          <span className="hidden sm:block flex-1 h-px bg-ink/15" />
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <MapPin className="size-3" />
            {profile.location}
          </span>
        </motion.div>

        <h1 className="font-serif text-[14vw] sm:text-[10vw] lg:text-[9rem] leading-[0.92] tracking-tight">
          <Word delay={0.05}>Luis</Word>
          <span className="inline-flex items-baseline gap-3 sm:gap-5 ml-3 sm:ml-5">
            <Word delay={0.15} italic>
              Doudeau
            </Word>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease }}
              className="inline-block size-3 sm:size-5 rounded-full bg-accent translate-y-[-0.4em]"
            />
          </span>
        </h1>

        <div className="mt-6 sm:mt-8 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-ink/90 text-balance"
          >
            Développeur <span className="italic text-accent">full-stack</span>, étudiant en Master 2 Architecture des Systèmes d'Information à l'ETNA et alternant chez Atos.
          </motion.p>
        </div>

        <div className="mt-10 sm:mt-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed text-balance max-w-2xl">
              Je travaille sur <span className="text-ink font-medium">Fresq</span>, le SI national des formations supérieures pour le Ministère de l'ESR. À côté, je développe <span className="text-ink font-medium">Sphere</span>, une plateforme éducative française avec IA souveraine, et j'ai fondé <span className="text-ink font-medium">Webase Studio</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full font-medium hover:bg-accent transition-colors"
              >
                Voir mes projets
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
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
            transition={{ delay: 0.6, duration: 0.7, ease }}
            className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-10"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
              Actuellement
            </div>
            <p className="text-ink/90 leading-relaxed">{profile.status}</p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="6" label="Projets" />
              <Stat value="3 ans" label="d'alternance" />
              <Stat value="14.4" label="/20 BUT" />
            </dl>
          </motion.aside>
        </div>
      </div>

      <div className="relative mt-20 sm:mt-28 border-y border-ink/10 py-5 overflow-hidden bg-cream/40">
        <div className="flex marquee gap-3 whitespace-nowrap">
          {[...stackTags, ...stackTags, ...stackTags].map((tag, i) => (
            <TechBadge key={i} name={tag} size="md" variant="ghost" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({ children, delay = 0, italic = false }: { children: string; delay?: number; italic?: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${italic ? "italic text-accent" : ""}`}
      >
        {children}
      </motion.span>
    </span>
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
