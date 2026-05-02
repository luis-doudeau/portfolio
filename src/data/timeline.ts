export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  location?: string;
  type: "work" | "edu";
  description: string;
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "2026 →",
    title: "Architecte Full-Stack — Fondateur",
    org: "Webase Studio",
    location: "Orléans · Remote",
    type: "work",
    description:
      "Studio freelance pour indépendants, TPE et PME : conception, développement, maintenance et déploiement de sites et applications.",
    tags: ["Freelance", "Full-stack"],
  },
  {
    period: "2024 — 2026",
    title: "MSc Architecture des Systèmes d'Information",
    org: "ETNA",
    location: "Ivry-sur-Seine",
    type: "edu",
    description:
      "Master 2 en alternance — conception d'architectures SI, sécurité, qualité, IA, intégration et développement de solutions logicielles.",
    tags: ["NestJS", "IA", "Microservices", "Kubernetes"],
  },
  {
    period: "2023 →",
    title: "Analyste développeur nouvelles technologies",
    org: "Atos · Alternance",
    location: "Olivet",
    type: "work",
    description:
      "Développement de Fresq, le SI national des formations supérieures pour le Ministère de l'ESR. Front React/TS, back Java/Spring + plugins Python pour Kinto, indicateurs Apache Drill/Superset.",
    tags: ["React", "TypeScript", "Spring Boot", "Python", "PostgreSQL"],
  },
  {
    period: "2021 — 2024",
    title: "BUT Informatique — Réalisation d'applications",
    org: "IUT d'Orléans",
    location: "Orléans",
    type: "edu",
    description:
      "Diplômé en août 2024 (14,41/20). Spécialisation conception, développement, validation. Stage en C#/React puis alternance chez Atos en 3ᵉ année.",
    tags: ["Java", "Python", "Flutter", "SQL"],
  },
  {
    period: "Été 2023",
    title: "Opérateur chaîne de production",
    org: "EURIAL — Agrial",
    location: "Lorris",
    type: "work",
    description:
      "Job d'été — gestion d'un palettiseur, conduite de gerbeur, gestion de stocks. Hors-tech mais formateur sur la rigueur process.",
    tags: ["Job d'été"],
  },
  {
    period: "Avr — Mai 2023",
    title: "Stage 2ᵉ année — Algorithmes & Web",
    org: "JULIEN MIALON",
    location: "Remote",
    type: "work",
    description:
      "Algorithmes de décision en C# pour MagicBot (Guns Of Glory, 50M+ joueurs) et développement du portail web associé en React/TypeScript.",
    tags: ["C#", "React", "TypeScript"],
  },
  {
    period: "2018 — 2021",
    title: "Baccalauréat général · Mention Bien",
    org: "Lycée en Forêt",
    location: "Montargis",
    type: "edu",
    description:
      "Spécialités Mathématiques, NSI, option Mathématiques expertes. Bases solides en algorithmique, BDD, web et réseau.",
    tags: ["NSI", "Maths Expertes"],
  },
];
