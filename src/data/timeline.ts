import type { LocList, LocStr } from "../i18n/dict";

export type OrgInfo = {
  name: string;
  short: string;
  bg: string;
  text: string;
  gps?: { lat: number; lng: number; label: string };
  website?: string;
};

export const ORGS: Record<string, OrgInfo> = {
  Atos: {
    name: "Atos",
    short: "ATOS",
    bg: "#0066A1",
    text: "#ffffff",
    gps: { lat: 47.86, lng: 1.901, label: "Atos · Olivet" },
    website: "https://atos.net",
  },
  ETNA: {
    name: "ETNA",
    short: "ETNA",
    bg: "#E74C3C",
    text: "#ffffff",
    gps: { lat: 48.815, lng: 2.382, label: "ETNA · Ivry-sur-Seine" },
    website: "https://etna.io",
  },
  "Webase Studio": {
    name: "Webase Studio",
    short: "WB",
    bg: "#6366F1",
    text: "#ffffff",
    gps: { lat: 47.902, lng: 1.909, label: "Webase Studio · Orléans" },
  },
  "IUT d'Orléans": {
    name: "IUT d'Orléans",
    short: "IUT",
    bg: "#1A5490",
    text: "#ffffff",
    gps: { lat: 47.844, lng: 1.943, label: "IUT d'Orléans" },
    website: "https://www.univ-orleans.fr/iut-orleans/",
  },
  "Lycée en Forêt": {
    name: "Lycée en Forêt",
    short: "LF",
    bg: "#5C7A29",
    text: "#ffffff",
    gps: { lat: 47.998, lng: 2.733, label: "Lycée en Forêt · Montargis" },
  },
  "EURIAL — Agrial": {
    name: "EURIAL",
    short: "EU",
    bg: "#003E7E",
    text: "#ffffff",
    gps: { lat: 48.044, lng: 2.512, label: "EURIAL · Lorris" },
  },
  "JULIEN MIALON": {
    name: "JULIEN MIALON",
    short: "JM",
    bg: "#7B2D8E",
    text: "#ffffff",
  },
};

export type TimelineItem = {
  slug: string;
  period: LocStr;
  startYear: number;
  endYear: number | "now";
  title: LocStr;
  org: string;
  location?: LocStr;
  type: "work" | "edu";
  description: LocStr;
  longDescription?: LocList;
  tags?: string[];
  highlights?: LocList;
  links?: { label: LocStr; url: string }[];
};

export const timeline: TimelineItem[] = [
  {
    slug: "webase",
    period: { fr: "Jan 2026 →", en: "Jan 2026 →" },
    startYear: 2026,
    endYear: "now",
    title: { fr: "Architecte Full-Stack — Fondateur", en: "Full-Stack Architect — Founder" },
    org: "Webase Studio",
    location: { fr: "Orléans · Remote", en: "Orléans · Remote" },
    type: "work",
    description: {
      fr: "Studio freelance pour indépendants, TPE et PME : conception, développement, maintenance et déploiement.",
      en: "Freelance studio for freelancers and small businesses: design, development, maintenance and deployment.",
    },
    longDescription: {
      fr: [
        "Webase Studio est ma structure freelance, fondée en janvier 2026. L'idée : proposer aux indépendants, TPE et PME un partenaire technique direct, capable de cadrer un projet, le développer et le maintenir dans la durée.",
        "Stack moderne (Next.js, NestJS, Postgres, Vercel) et process tourné vers la livraison rapide sans rogner sur la qualité.",
      ],
      en: [
        "Webase Studio is my freelance structure, founded in January 2026. The idea: a direct technical partner for freelancers and small businesses — able to scope, build and maintain a project over time.",
        "Modern stack (Next.js, NestJS, Postgres, Vercel) and process focused on fast delivery without cutting corners.",
      ],
    },
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Vercel"],
  },
  {
    slug: "atos",
    period: { fr: "Sept 2023 →", en: "Sept 2023 →" },
    startYear: 2023,
    endYear: "now",
    title: { fr: "Analyste développeur nouvelles technologies", en: "Developer analyst — new technologies" },
    org: "Atos",
    location: { fr: "Olivet, France", en: "Olivet, France" },
    type: "work",
    description: {
      fr: "Développement de Fresq, le SI national des formations supérieures pour le Ministère de l'ESR.",
      en: "Building Fresq — the national IS for French higher education at the Ministry.",
    },
    longDescription: {
      fr: [
        "Alternance débutée en septembre 2023, dans le cadre du BUT 3 puis du MSc à l'ETNA. Je travaille sur Fresq, le SI national des formations supérieures pour le Ministère de l'Enseignement supérieur et de la Recherche.",
        "Front en React/TypeScript, back en Java/Spring Boot, plugins Python pour Kinto, indicateurs de migration via Apache Drill et Apache Superset. Tests unitaires sur l'ensemble de la stack avec JUnit et Vitest.",
      ],
      en: [
        "Apprenticeship started in September 2023, alongside the BUT 3 and then the MSc at ETNA. I work on Fresq, the national IS for higher education at the French Ministry.",
        "React/TypeScript front, Java/Spring Boot back, Python plugins for Kinto, migration indicators via Apache Drill and Apache Superset. Unit tests across the stack with JUnit and Vitest.",
      ],
    },
    tags: ["React", "TypeScript", "Spring Boot", "Python", "PostgreSQL", "Apache Drill"],
    highlights: {
      fr: [
        "Conception et développement d'interfaces React/TypeScript",
        "Implémentation d'APIs et services back-end Java/Spring Boot",
        "Développement de plugins Python pour Kinto",
        "Tests unitaires Java (JUnit) et React (Vitest)",
        "Indicateurs de reporting SQL, Apache Drill et Superset",
      ],
      en: [
        "React/TypeScript interface design and development",
        "Java/Spring Boot back-end APIs and services",
        "Python plugin development for Kinto",
        "Unit testing in Java (JUnit) and React (Vitest)",
        "SQL, Apache Drill and Superset reporting indicators",
      ],
    },
  },
  {
    slug: "stage-mialon",
    period: { fr: "Avr — Mai 2023", en: "Apr — May 2023" },
    startYear: 2023,
    endYear: 2023,
    title: { fr: "Stage — Algorithmes & Web", en: "Internship — Algorithms & Web" },
    org: "JULIEN MIALON",
    location: { fr: "Remote", en: "Remote" },
    type: "work",
    description: {
      fr: "Algorithmes de décision en C# pour MagicBot (Guns Of Glory, 50M+ joueurs) et portail web associé en React/TypeScript.",
      en: "C# decision algorithms for MagicBot (Guns Of Glory, 50M+ players) and a React/TypeScript companion portal.",
    },
    longDescription: {
      fr: [
        "Stage de 8 semaines en 2ᵉ année de BUT, 100% remote. Développement d'algorithmes de décision (IA) en C# pour automatiser des actions dans le jeu mobile Guns Of Glory, et création du portail web associé en React/TypeScript.",
      ],
      en: [
        "8-week BUT 2nd-year internship, fully remote. C# decision algorithms (AI) to automate actions in Guns Of Glory mobile game, plus a React/TypeScript companion portal.",
      ],
    },
    tags: ["C#", "React", "TypeScript"],
  },
  {
    slug: "eurial",
    period: { fr: "Août 2023", en: "Aug 2023" },
    startYear: 2023,
    endYear: 2023,
    title: { fr: "Opérateur chaîne de production", en: "Production line operator" },
    org: "EURIAL — Agrial",
    location: { fr: "Lorris", en: "Lorris" },
    type: "work",
    description: {
      fr: "Job d'été — palettiseur, conduite de gerbeur, gestion de stocks. Hors-tech, mais formateur sur la rigueur process.",
      en: "Summer job — palletiser, forklift, stock management. Non-tech but a good lesson in process discipline.",
    },
    tags: ["Job d'été"],
  },
  {
    slug: "etna",
    period: { fr: "Oct 2024 — Oct 2026", en: "Oct 2024 — Oct 2026" },
    startYear: 2024,
    endYear: 2026,
    title: { fr: "MSc Architecture des Systèmes d'Information", en: "MSc Information Systems Architecture" },
    org: "ETNA",
    location: { fr: "Ivry-sur-Seine", en: "Ivry-sur-Seine" },
    type: "edu",
    description: {
      fr: "Master 2 en alternance — conception d'architectures SI, sécurité, qualité, IA, intégration et développement.",
      en: "Master 2 by apprenticeship — IS architecture design, security, quality, AI, integration and development.",
    },
    longDescription: {
      fr: [
        "Master of Science (MSc) à l'ETNA, école d'alternance en informatique. Formation orientée architecture des SI : analyser les besoins d'un projet, définir les caractéristiques techniques, concevoir l'architecture, mener l'intégration ou le développement, et établir les plans qualité et sécurité.",
        "Compétences travaillées : NestJS, Next.js, Nx, microservices, Kubernetes, RabbitMQ, IA appliquée.",
      ],
      en: [
        "Master of Science at ETNA, apprenticeship-based engineering school. Focus on IS architecture: analysing project needs, defining technical characteristics, designing architecture, running integration or development, and establishing quality and security plans.",
        "Skills covered: NestJS, Next.js, Nx, microservices, Kubernetes, RabbitMQ, applied AI.",
      ],
    },
    tags: ["NestJS", "Next.js", "IA", "Microservices", "Kubernetes"],
    links: [
      {
        label: { fr: "Référentiel France Compétences (RNCP38114)", en: "France Compétences reference (RNCP38114)" },
        url: "https://www.francecompetences.fr/recherche/rncp/38114/",
      },
    ],
  },
  {
    slug: "iut-orleans",
    period: { fr: "Sept 2021 — Août 2024", en: "Sept 2021 — Aug 2024" },
    startYear: 2021,
    endYear: 2024,
    title: { fr: "BUT Informatique — Réalisation d'applications", en: "BUT Computer Science — Application Development" },
    org: "IUT d'Orléans",
    location: { fr: "Orléans", en: "Orléans" },
    type: "edu",
    description: {
      fr: "Diplômé en août 2024 (14,41/20). Spécialisation conception, développement, validation. Stage en C#/React puis alternance chez Atos en 3ᵉ année.",
      en: "Graduated in Aug 2024 (14.41/20). Specialisation in design, development, validation. C#/React internship then Atos apprenticeship in 3rd year.",
    },
    longDescription: {
      fr: [
        "Bachelor Universitaire de Technologie (BUT) en Informatique, parcours Réalisation d'applications : conception, développement, validation. Trois années intensives et axées sur la pratique, avec une dernière année en alternance chez Atos.",
        "Compétences couvertes : Java, Python, Vue.js, Django, PHP/Symfony, Bootstrap, MySQL, Oracle, PL/SQL, JDBC, UML, Object Oriented Design, Flutter.",
      ],
      en: [
        "BUT in Computer Science, Application Development track: design, development, validation. Three intensive practice-focused years, with a final year apprenticeship at Atos.",
        "Skills covered: Java, Python, Vue.js, Django, PHP/Symfony, Bootstrap, MySQL, Oracle, PL/SQL, JDBC, UML, Object Oriented Design, Flutter.",
      ],
    },
    tags: ["Java", "Python", "Vue.js", "Django", "Flutter", "SQL"],
  },
  {
    slug: "lycee",
    period: { fr: "Sept 2018 — Juin 2021", en: "Sept 2018 — Jun 2021" },
    startYear: 2018,
    endYear: 2021,
    title: { fr: "Baccalauréat général · Mention Bien", en: "Baccalauréat général · Honours (Bien)" },
    org: "Lycée en Forêt",
    location: { fr: "Montargis", en: "Montargis" },
    type: "edu",
    description: {
      fr: "Spécialités Mathématiques, NSI, option Mathématiques expertes. Bases solides en algorithmique, BDD, web et réseau.",
      en: "Specialties: Mathematics, Computer Science, Advanced Mathematics. Solid foundations in algorithms, databases, web and networking.",
    },
    longDescription: {
      fr: [
        "Baccalauréat général obtenu avec mention Bien en juin 2021. Spécialités Numérique et Sciences Informatiques (NSI), Mathématiques, et option Mathématiques Expertes.",
        "Bases solides en algorithmique, BDD, développement web et réseau, et en mathématiques (arithmétique, analyse complexe, algèbre, statistiques et probabilités).",
      ],
      en: [
        "French Baccalauréat with Honours (Bien) in June 2021. Specialties: NSI (Computer Science), Mathematics, with Advanced Mathematics option.",
        "Solid foundations in algorithms, databases, web and networking, plus mathematics (arithmetic, complex analysis, algebra, statistics and probability).",
      ],
    },
    tags: ["NSI", "Maths", "Python"],
  },
];

export function getTimelineItem(slug: string) {
  return timeline.find((t) => t.slug === slug);
}

export const workItems = timeline.filter((t) => t.type === "work");
export const eduItems = timeline.filter((t) => t.type === "edu");
