import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";

const ambitions = [
  {
    title: "Architecture qui dure",
    body:
      "Continuer à monter en compétence sur la conception de SI à grande échelle — au-delà du framework du moment, comprendre ce qui rend un système maintenable cinq ans plus tard.",
  },
  {
    title: "Produits avec impact",
    body:
      "Travailler sur des outils utilisés au quotidien par de vraies personnes. Fresq, Sphere, Webase — chaque projet doit répondre à un besoin concret, pas à une démo.",
  },
  {
    title: "IA souveraine & utile",
    body:
      "Explorer l'IA appliquée — pas pour le buzz, mais pour automatiser intelligemment et augmenter les utilisateurs. Mistral et l'écosystème français m'intéressent particulièrement.",
  },
  {
    title: "Équipes qui livrent",
    body:
      "Continuer à prendre des responsabilités côté tech lead / chef de projet. J'aime autant cadrer un sprint que pousser une pull request.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="py-24 sm:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04 / Ambitions"
          label="La suite"
          title={
            <>
              Ce que je{" "}
              <span className="italic font-serif text-accent">cherche</span>, et où je veux aller.
            </>
          }
          description="Je termine mon master en 2026. D'ici là — et après — voici ce qui me motive."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {ambitions.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="relative p-8 rounded-3xl border border-ink/10 hover:border-ink/30 transition-colors group overflow-hidden"
            >
              <span className="absolute top-6 right-6 font-mono text-xs text-muted">
                0{i + 1}
              </span>
              <span className="absolute -bottom-12 -right-12 size-40 rounded-full bg-accent-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="relative font-serif text-2xl tracking-tight mb-3">
                {a.title}
              </h3>
              <p className="relative text-ink/75 leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
