export type Project = {
  id: string;
  title: string;
  year: string;
  category: "Pro" | "Freelance" | "École" | "Side";
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; url: string }[];
  cover?: string;
  accent?: string;
};

export const projects: Project[] = [
  {
    id: "sphere",
    title: "Sphere",
    year: "2025 →",
    category: "Side",
    context: "Plateforme éducative SaaS — souveraine, IA pédagogique",
    description:
      "Sphere complète les ENT actuels avec une couche purement pédagogique : tuteur IA basé sur Mistral, génération de quiz et flashcards depuis un cours, correction assistée, et un drive souverain hébergé en France. L'IA augmente l'enseignant, ne le remplace pas.",
    highlights: [
      "Architecture monorepo Nx · NestJS + Next.js + PostgreSQL",
      "Intégration Mistral AI avec garde-fous pédagogiques",
      "Hébergement souverain (OVHcloud) · conforme RGPD",
      "Modules collège, lycée général, lycée pro & BTS",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Mistral AI", "Tailwind", "Docker"],
    links: [
      { label: "sphere-education.com", url: "https://sphere-education.com/" },
    ],
    accent: "from-orange-500/20 to-rose-500/10",
  },
  {
    id: "fresq",
    title: "Fresq",
    year: "2023 →",
    category: "Pro",
    context: "Atos × Ministère de l'Enseignement supérieur et de la Recherche",
    description:
      "SI national des formations supérieures et de la recherche — l'agrégateur de toutes les formations reconnues par l'État post-bac. Fresq fait dialoguer établissements, HCERES, CTI, CEFDG, AMUe, ONISEP et France Compétences autour d'un référentiel partagé.",
    highlights: [
      "Conception d'interfaces React/TypeScript pour les workflows d'accréditation",
      "APIs Java/Spring Boot et plugins Python pour Kinto",
      "Indicateurs de migration via Apache Drill + Apache Superset",
      "Tests unitaires (JUnit, Vitest) sur l'ensemble de la stack",
    ],
    stack: ["React", "TypeScript", "Spring Boot", "Python", "Kinto", "PostgreSQL", "Apache Drill"],
    accent: "from-blue-500/15 to-indigo-500/10",
  },
  {
    id: "webase",
    title: "Webase Studio",
    year: "2026 →",
    category: "Freelance",
    context: "Studio freelance fondé en 2026 — Orléans",
    description:
      "Conception de sites web et d'applications pour indépendants, TPE et PME. Cadrage clair, exécution rapide, livraison de qualité. Développement, maintenance corrective et évolutive, intégration et déploiement.",
    highlights: [
      "Architecture full-stack sur-mesure par client",
      "Process de cadrage → livraison en 4 à 8 semaines",
      "Stack moderne : Next.js, NestJS, Postgres, Vercel",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Vercel"],
    accent: "from-emerald-500/15 to-teal-500/10",
  },
  {
    id: "proximeet",
    title: "ProxiMeet",
    year: "2023 — 2024",
    category: "École",
    context: "Projet BUT 3 — IUT d'Orléans",
    description:
      "Application mobile qui ré-injecte du physique dans les interactions sociales : géolocalisation pour connecter les utilisateurs proches géographiquement, hors de leur réseau habituel.",
    highlights: [
      "Application Flutter cross-platform",
      "Backend Firebase + WebSockets pour la temps-réel",
      "Conception UI Figma · 18+ écrans",
    ],
    stack: ["Flutter", "Firebase", "WebSocket", "Docker", "Figma"],
    accent: "from-purple-500/15 to-pink-500/10",
  },
  {
    id: "bdboum",
    title: "bd BOUM — Maison de la BD",
    year: "2022 — 2023",
    category: "École",
    context: "Festival de bande dessinée (22 000 visiteurs/an)",
    description:
      "Application web de gestion interne du festival : inscription des participants (auteurs, exposants, presse, staff) et back-office secrétariat avec automatisation logement, transport, repas et génération de feuilles de route PDF.",
    highlights: [
      "Chef de projet · équipe de 3 dev · 5 mois en Scrum",
      "Conception UML complète + relation client",
      "Automatisation des affectations hôtel/navette/repas",
    ],
    stack: ["Flask", "SQLAlchemy", "Bootstrap 5", "JavaScript", "MySQL"],
    accent: "from-amber-500/20 to-yellow-500/10",
  },
  {
    id: "magicbot",
    title: "MagicBot",
    year: "2023",
    category: "École",
    context: "Stage 2ᵉ année BUT — JULIEN MIALON",
    description:
      "Bot d'automatisation pour le jeu mobile Guns Of Glory (50M+ joueurs) : algorithmes de décision (IA) en C# et portail web associé en React/TypeScript.",
    highlights: [
      "Algorithmes de décision en C#",
      "Portail web compagnon React + TypeScript",
      "Stage 100% remote · 8 semaines",
    ],
    stack: ["C#", "React", "TypeScript", "HTML"],
    accent: "from-slate-500/15 to-zinc-500/10",
  },
];

export const categories = ["Tous", "Pro", "Freelance", "École", "Side"] as const;
