export type TimelineItem = {
  slug: string;
  period: string;
  startYear: number;
  endYear: number | "now";
  title: string;
  org: string;
  location?: string;
  type: "work" | "edu";
  description: string;
  longDescription?: string[];
  tags?: string[];
  highlights?: string[];
  links?: { label: string; url: string }[];
};

export const timeline: TimelineItem[] = [
  {
    slug: "webase",
    period: "Jan 2026 →",
    startYear: 2026,
    endYear: "now",
    title: "Architecte Full-Stack — Fondateur",
    org: "Webase Studio",
    location: "Orléans · Remote",
    type: "work",
    description:
      "Studio freelance pour indépendants, TPE et PME : conception, développement, maintenance et déploiement de sites et applications.",
    longDescription: [
      "Webase Studio est ma structure freelance, fondée en janvier 2026. L'idée : proposer aux indépendants, TPE et PME un partenaire technique direct, capable de cadrer un projet, le développer et le maintenir dans la durée.",
      "Stack moderne (Next.js, NestJS, Postgres, Vercel) et process tourné vers la livraison rapide sans rogner sur la qualité.",
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Vercel"],
  },
  {
    slug: "atos",
    period: "Sept 2023 →",
    startYear: 2023,
    endYear: "now",
    title: "Analyste développeur nouvelles technologies",
    org: "Atos · Alternance",
    location: "Olivet",
    type: "work",
    description:
      "Développement de Fresq, le SI national des formations supérieures pour le Ministère de l'ESR.",
    longDescription: [
      "Alternance débutée en septembre 2023, dans le cadre du BUT 3 puis du MSc à l'ETNA. Je travaille sur Fresq, le SI national des formations supérieures pour le Ministère de l'Enseignement supérieur et de la Recherche.",
      "Front en React/TypeScript, back en Java/Spring Boot, plugins Python pour Kinto, indicateurs de migration via Apache Drill et Apache Superset. Tests unitaires sur l'ensemble de la stack avec JUnit et Vitest.",
    ],
    tags: ["React", "TypeScript", "Spring Boot", "Python", "PostgreSQL", "Apache Drill"],
    highlights: [
      "Conception et développement d'interfaces React/TypeScript",
      "Implémentation d'APIs et services back-end Java/Spring Boot",
      "Développement de plugins Python pour Kinto",
      "Tests unitaires Java (JUnit) et React (Vitest)",
      "Indicateurs de reporting SQL, Apache Drill et Superset",
    ],
  },
  {
    slug: "stage-mialon",
    period: "Avr — Mai 2023",
    startYear: 2023,
    endYear: 2023,
    title: "Stage — Algorithmes & Web",
    org: "JULIEN MIALON",
    location: "Remote",
    type: "work",
    description:
      "Algorithmes de décision en C# pour MagicBot (Guns Of Glory, 50M+ joueurs) et portail web associé en React/TypeScript.",
    longDescription: [
      "Stage de 8 semaines en 2ᵉ année de BUT, 100% remote. Développement d'algorithmes de décision (IA) en C# pour automatiser des actions dans le jeu mobile Guns Of Glory, et création du portail web associé en React/TypeScript.",
    ],
    tags: ["C#", "React", "TypeScript"],
  },
  {
    slug: "eurial",
    period: "Août 2023",
    startYear: 2023,
    endYear: 2023,
    title: "Opérateur chaîne de production",
    org: "EURIAL — Agrial",
    location: "Lorris",
    type: "work",
    description:
      "Job d'été — gestion d'un palettiseur, conduite de gerbeur, gestion de stocks. Hors-tech, mais formateur sur la rigueur process.",
    tags: ["Job d'été"],
  },
  {
    slug: "etna",
    period: "Oct 2024 — Oct 2026",
    startYear: 2024,
    endYear: 2026,
    title: "MSc Architecture des Systèmes d'Information",
    org: "ETNA",
    location: "Ivry-sur-Seine",
    type: "edu",
    description:
      "Master 2 en alternance — conception d'architectures SI, sécurité, qualité, IA, intégration et développement de solutions logicielles.",
    longDescription: [
      "Master of Science (MSc) à l'ETNA, école d'alternance en informatique. Formation orientée architecture des SI : analyser les besoins d'un projet, définir les caractéristiques techniques, concevoir l'architecture, mener l'intégration ou le développement, et établir les plans qualité et sécurité.",
      "Compétences travaillées : NestJS, Next.js, Nx, microservices, Kubernetes, RabbitMQ, IA appliquée.",
    ],
    tags: ["NestJS", "Next.js", "IA", "Microservices", "Kubernetes"],
    links: [
      {
        label: "Référentiel France Compétences (RNCP38114)",
        url: "https://www.francecompetences.fr/recherche/rncp/38114/",
      },
    ],
  },
  {
    slug: "iut-orleans",
    period: "Sept 2021 — Août 2024",
    startYear: 2021,
    endYear: 2024,
    title: "BUT Informatique — Réalisation d'applications",
    org: "IUT d'Orléans",
    location: "Orléans",
    type: "edu",
    description:
      "Diplômé en août 2024 (14,41/20). Spécialisation conception, développement, validation. Stage en C#/React puis alternance chez Atos en 3ᵉ année.",
    longDescription: [
      "Bachelor Universitaire de Technologie (BUT) en Informatique, parcours Réalisation d'applications : conception, développement, validation. Trois années intensives et axées sur la pratique, avec une dernière année en alternance chez Atos.",
      "Compétences couvertes : Java, Python, Vue.js, Django, PHP/Symfony, Bootstrap, MySQL, Oracle, PL/SQL, JDBC, UML, Object Oriented Design, Flutter.",
    ],
    tags: ["Java", "Python", "Vue.js", "Django", "Flutter", "SQL"],
  },
  {
    slug: "lycee",
    period: "Sept 2018 — Juin 2021",
    startYear: 2018,
    endYear: 2021,
    title: "Baccalauréat général · Mention Bien",
    org: "Lycée en Forêt",
    location: "Montargis",
    type: "edu",
    description:
      "Spécialités Mathématiques, NSI, option Mathématiques expertes. Bases solides en algorithmique, BDD, web et réseau.",
    longDescription: [
      "Baccalauréat général obtenu avec mention Bien en juin 2021. Spécialités Numérique et Sciences Informatiques (NSI), Mathématiques, et option Mathématiques Expertes.",
      "Bases solides en algorithmique, BDD, développement web et réseau, et en mathématiques (arithmétique, analyse complexe, algèbre, statistiques et probabilités).",
    ],
    tags: ["NSI", "Maths Expertes", "Python"],
  },
];

export function getTimelineItem(slug: string) {
  return timeline.find((t) => t.slug === slug);
}

export const workItems = timeline.filter((t) => t.type === "work");
export const eduItems = timeline.filter((t) => t.type === "edu");
