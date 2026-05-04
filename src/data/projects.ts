import type { LocList, LocStr } from "../i18n/dict";

export type ProjectCategory = "Pro" | "Freelance" | "École" | "Side";

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string;
  categories: ProjectCategory[];
  context: LocStr;
  description: LocStr;
  longDescription?: LocList;
  highlights: LocList;
  stack: string[];
  role?: LocStr;
  team?: LocStr;
  links?: { label: LocStr; url: string }[];
  /** Featured projects render larger in the bento grid */
  featured?: boolean;
  /** Visual identity */
  accent: {
    /** Tailwind-friendly hex */
    color: string;
    /** Optional secondary for gradients */
    secondary?: string;
    /** CSS gradient string used as card background */
    gradient: string;
    /** Letter mark / monogram */
    mark: string;
    /** Pattern style */
    pattern?: "dots" | "grid" | "lines" | "blob";
  };
};

export const projects: Project[] = [
  {
    id: "sphere",
    slug: "sphere",
    title: "Sphere",
    year: "2025 →",
    categories: ["Side", "École"],
    featured: true,
    accent: {
      color: "#fb923c",
      secondary: "#f43f5e",
      gradient: "linear-gradient(135deg, rgba(251,146,60,0.18) 0%, rgba(244,63,94,0.12) 100%)",
      mark: "S",
      pattern: "blob",
    },
    context: {
      fr: "Plateforme éducative SaaS — souveraine, IA pédagogique",
      en: "SaaS education platform — sovereign, pedagogical AI",
    },
    description: {
      fr: "Sphere complète les ENT actuels avec une couche purement pédagogique : tuteur IA basé sur Mistral, génération de quiz et flashcards depuis un cours, correction assistée, drive souverain hébergé en France.",
      en: "Sphere extends today's school portals with a purely pedagogical layer: Mistral-based AI tutor, quiz and flashcard generation from a course, assisted grading, and a sovereign drive hosted in France.",
    },
    longDescription: {
      fr: [
        "Sphere est né d'un constat simple : les ENT actuels (Pronote & co) gèrent l'administratif — emplois du temps, notes, absences, communication descendante — mais laissent un vide énorme côté pédagogie pure. Quand un élève dit « je n'ai pas compris le chapitre », l'ENT n'aide pas. Sphere s'occupe de ça.",
        "Côté élève : un tuteur IA disponible 24/7 (Aristote, basé sur Mistral AI) qui guide, explique, reformule sans jamais donner la réponse brute. Quiz interactifs, flashcards générées depuis un cours scanné ou un audio, gamification bienveillante avec badges et challenges entre classes.",
        "Côté enseignant : génération assistée d'exercices différenciés (3 niveaux en un clic), pré-correction automatique avec indice de confiance que le prof valide, et tableaux de bord montrant les points mal acquis par la classe.",
        "Tout est hébergé en France (OVHcloud), conforme RGPD, et l'IA passe par Mistral pour rester dans une logique souveraine. L'architecture est en monorepo Nx avec un back NestJS, un front Next.js et une base PostgreSQL.",
      ],
      en: [
        "Sphere came from a simple observation: today's school portals (Pronote & co) handle admin — schedules, grades, absences, top-down communication — but leave a huge gap on pure pedagogy. When a student says \"I didn't understand the chapter\", the portal doesn't help. Sphere does.",
        "For students: a 24/7 AI tutor (Aristote, based on Mistral AI) that guides, explains, rephrases without giving away the raw answer. Interactive quizzes, flashcards generated from scanned course materials or audio, gentle gamification with badges and class challenges.",
        "For teachers: assisted generation of differentiated exercises (3 levels in one click), automatic pre-grading with a confidence score the teacher validates, and dashboards showing what the class struggled with.",
        "Everything is hosted in France (OVHcloud), GDPR compliant, with Mistral AI for a sovereign approach. The architecture is an Nx monorepo with a NestJS backend, Next.js frontend, and PostgreSQL.",
      ],
    },
    highlights: {
      fr: [
        "Architecture monorepo Nx · NestJS + Next.js + PostgreSQL",
        "Intégration Mistral AI avec garde-fous pédagogiques",
        "Hébergement souverain (OVHcloud) · conforme RGPD",
        "Modules collège, lycée général, lycée pro & BTS",
        "Drive souverain chiffré bout-en-bout",
        "Correction assistée avec validation humaine systématique",
      ],
      en: [
        "Nx monorepo architecture · NestJS + Next.js + PostgreSQL",
        "Mistral AI integration with pedagogical guardrails",
        "Sovereign hosting (OVHcloud) · GDPR compliant",
        "Modules for middle school, high school, vocational & BTS",
        "Sovereign drive with end-to-end encryption",
        "Assisted grading with systematic human validation",
      ],
    },
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Mistral AI", "Tailwind", "Docker", "OVHcloud"],
    role: { fr: "Conception & développement full-stack", en: "Design & full-stack development" },
    team: { fr: "Projet d'école porté en side-project", en: "Academic project run as a side-project" },
    links: [{ label: { fr: "Voir le site", en: "Visit website" }, url: "https://sphere-education.com/" }],
  },

  {
    id: "fresq",
    slug: "fresq",
    title: "Fresq",
    year: "2023 →",
    categories: ["Pro"],
    featured: true,
    accent: {
      color: "#10b981",
      secondary: "#059669",
      gradient: "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(5,150,105,0.10) 100%)",
      mark: "F",
      pattern: "grid",
    },
    context: {
      fr: "Atos × Ministère de l'Enseignement supérieur et de la Recherche",
      en: "Atos × French Ministry of Higher Education and Research",
    },
    description: {
      fr: "SI national des formations supérieures et de la recherche — l'agrégateur de toutes les formations reconnues par l'État post-bac.",
      en: "National information system for higher education and research — the aggregator of every state-accredited post-secondary program.",
    },
    longDescription: {
      fr: [
        "Fresq est le système d'information national qui agrège toutes les formations reconnues par l'État à tous les niveaux d'étude post-bac. Il fait dialoguer un écosystème complet : établissements, HCERES, CTI, CEFDG, AMUe, ONISEP, France Compétences.",
        "Au quotidien, je travaille sur les workflows d'accréditation côté front en React/TypeScript, les APIs back en Java/Spring Boot, et des plugins Python pour Kinto qui gère le stockage JSON. La donnée est ensuite analysée via Apache Drill et restituée dans Apache Superset pour les indicateurs de migration.",
        "C'est mon projet d'alternance depuis septembre 2023 — une mission longue qui m'a permis de toucher à toute la stack et de comprendre comment un SI à enjeu national se construit, se sécurise et se maintient.",
      ],
      en: [
        "Fresq is the national IS that aggregates all state-recognised post-secondary programs. It connects a full ecosystem: institutions, HCERES, CTI, CEFDG, AMUe, ONISEP, France Compétences.",
        "Day to day, I work on accreditation workflows on the React/TypeScript front-end, the Java/Spring Boot APIs, and Python plugins for Kinto (JSON storage). Data is then analysed via Apache Drill and visualised in Apache Superset for migration indicators.",
        "This has been my apprenticeship project since September 2023 — a long mission that lets me touch the full stack and understand how a critical national IS is built, secured and maintained.",
      ],
    },
    highlights: {
      fr: [
        "Conception d'interfaces React/TypeScript pour les workflows d'accréditation",
        "APIs Java/Spring Boot et plugins Python pour Kinto",
        "Indicateurs de migration via Apache Drill + Apache Superset",
        "Tests unitaires (JUnit, Vitest) sur l'ensemble de la stack",
      ],
      en: [
        "React/TypeScript interface design for accreditation workflows",
        "Java/Spring Boot APIs and Python plugins for Kinto",
        "Migration indicators via Apache Drill + Apache Superset",
        "Unit testing (JUnit, Vitest) across the stack",
      ],
    },
    stack: ["React", "TypeScript", "Java", "Spring Boot", "Python", "Kinto", "PostgreSQL", "Apache Drill", "Apache Superset", "JUnit", "Vitest"],
    role: { fr: "Analyste développeur — alternance", en: "Developer analyst — apprenticeship" },
    team: { fr: "Atos · équipe projet Fresq", en: "Atos · Fresq project team" },
  },

  {
    id: "webase",
    slug: "webase",
    title: "Webase Studio",
    year: "2026 →",
    categories: ["Freelance"],
    accent: {
      color: "#6366f1",
      secondary: "#8b5cf6",
      gradient: "linear-gradient(135deg, rgba(99,102,241,0.16) 0%, rgba(139,92,246,0.10) 100%)",
      mark: "W",
      pattern: "lines",
    },
    context: {
      fr: "Studio freelance fondé en 2026 — Orléans",
      en: "Freelance studio founded in 2026 — Orléans",
    },
    description: {
      fr: "Studio freelance qui conçoit des sites web et des applications pour indépendants, TPE et PME. Cadrage clair, exécution rapide.",
      en: "Freelance studio building websites and apps for freelancers and small businesses. Clear scoping, fast execution.",
    },
    longDescription: {
      fr: [
        "Webase Studio est ma structure freelance. L'idée : proposer aux indépendants, TPE et PME une approche directe — un cadrage clair en amont, une exécution rapide, et une livraison vraiment finie (pas un MVP qu'on traîne pendant 6 mois).",
        "On intervient sur le développement de sites et applications (web et mobile), la maintenance corrective et évolutive, et l'intégration / déploiement. La stack est moderne et choisie pour la maintenabilité long-terme : Next.js, NestJS, Postgres, déploiement Vercel ou OVH selon les besoins.",
      ],
      en: [
        "Webase Studio is my freelance structure. The idea: give freelancers and small businesses a direct approach — clear up-front scoping, fast execution, and a truly finished delivery (not an MVP dragging on for six months).",
        "We work on web and mobile sites and apps, corrective and evolutive maintenance, integration and deployment. The stack is modern and chosen for long-term maintainability: Next.js, NestJS, Postgres, deployed on Vercel or OVH depending on needs.",
      ],
    },
    highlights: {
      fr: [
        "Architecture full-stack sur-mesure par client",
        "Process de cadrage → livraison en 4 à 8 semaines",
        "Stack moderne : Next.js, NestJS, Postgres, Vercel",
        "Maintenance évolutive incluse",
      ],
      en: [
        "Custom full-stack architecture per client",
        "Scoping → delivery in 4 to 8 weeks",
        "Modern stack: Next.js, NestJS, Postgres, Vercel",
        "Evolutive maintenance included",
      ],
    },
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Vercel", "Docker"],
    role: { fr: "Fondateur & architecte full-stack", en: "Founder & full-stack architect" },
  },

  {
    id: "proximeet",
    slug: "proximeet",
    title: "ProxiMeet",
    year: "2023 — 2024",
    categories: ["École"],
    accent: {
      color: "#a855f7",
      secondary: "#ec4899",
      gradient: "linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(236,72,153,0.10) 100%)",
      mark: "P",
      pattern: "dots",
    },
    context: { fr: "Projet BUT 3 — IUT d'Orléans", en: "BUT 3 project — IUT d'Orléans" },
    description: {
      fr: "Application mobile qui ré-injecte du physique dans les interactions sociales : géolocalisation pour connecter les utilisateurs proches.",
      en: "Mobile app reintroducing physical interaction: geolocation to connect users in proximity, outside of their usual social network.",
    },
    longDescription: {
      fr: [
        "ProxiMeet est née d'un constat : les interactions sociales numériques dominent, mais on perd le réflexe de rencontrer physiquement les gens autour de nous. L'application utilise la géolocalisation pour connecter les utilisateurs proches géographiquement, en dehors de leur réseau social habituel.",
        "Application Flutter cross-platform avec un back-end Firebase et des WebSockets pour la temps-réel. J'ai conçu 18+ écrans en amont sur Figma avant le développement, et travaillé en équipe avec deux autres étudiants en méthodologie agile.",
      ],
      en: [
        "ProxiMeet started from an observation: digital interactions dominate but we've lost the habit of meeting people physically around us. The app uses geolocation to connect nearby users outside their usual social network.",
        "Cross-platform Flutter app with a Firebase backend and WebSockets for real-time. I designed 18+ screens upfront on Figma before development, and worked in a team of three under agile methodology.",
      ],
    },
    highlights: {
      fr: [
        "Application Flutter cross-platform (iOS + Android)",
        "Backend Firebase + WebSockets pour la temps-réel",
        "Conception UI Figma · 18+ écrans",
        "Géolocalisation et matching de proximité",
      ],
      en: [
        "Cross-platform Flutter app (iOS + Android)",
        "Firebase backend + WebSockets for real-time",
        "Figma UI design · 18+ screens",
        "Geolocation and proximity matching",
      ],
    },
    stack: ["Flutter", "Firebase", "WebSocket", "Docker", "Figma"],
    role: { fr: "Développeur full-stack", en: "Full-stack developer" },
    team: { fr: "Projet d'équipe — 3 développeurs", en: "Team project — 3 developers" },
  },

  {
    id: "bdboum",
    slug: "bd-boum",
    title: "bd BOUM",
    year: "2022 — 2023",
    categories: ["École"],
    accent: {
      color: "#eab308",
      secondary: "#f59e0b",
      gradient: "linear-gradient(135deg, rgba(234,179,8,0.18) 0%, rgba(245,158,11,0.10) 100%)",
      mark: "B",
      pattern: "dots",
    },
    context: {
      fr: "Festival de bande dessinée (22 000 visiteurs/an)",
      en: "Comic-book festival (22,000 visitors/year)",
    },
    description: {
      fr: "Application web de gestion interne du festival : inscription des participants et back-office secrétariat avec automatisation logement, transport, repas.",
      en: "Internal management web app for the festival: participant registration and back-office with automated lodging, transport and meal allocation.",
    },
    longDescription: {
      fr: [
        "Application web complète développée pour le festival bd BOUM, qui accueille des milliers de visiteurs chaque année (22 000 en 2024). Deux gros modules : un côté participant (auteurs, exposants, invités, presse, staff) avec inscription en ligne, et un côté secrétariat avec administration complète.",
        "La partie qui m'a le plus intéressé : l'automatisation. Affectation automatique des hôtels en fonction des horaires d'arrivée, attribution des navettes, gestion des créneaux de repas, et génération automatique des feuilles de route PDF.",
        "J'étais chef de projet sur cette mission : conception UML, gestion full-stack de l'application, et relation client direct avec la Maison de la BD. L'équipe : 3 développeurs, 5 mois en méthodologie Scrum.",
      ],
      en: [
        "Complete web app for the bd BOUM festival, hosting thousands of visitors yearly (22,000 in 2024). Two main modules: a participant side (authors, exhibitors, guests, press, staff) with online registration, and a secretariat side with full back-office.",
        "What interested me most: automation. Automatic hotel assignment based on arrival times, shuttle allocation, meal slot management, and automatic PDF roadmap generation.",
        "I was project manager: UML design, full-stack development, and direct client relationship with the Maison de la BD. Team of 3 devs, 5 months under Scrum.",
      ],
    },
    highlights: {
      fr: [
        "Chef de projet · équipe de 3 dev · 5 mois en Scrum",
        "Conception UML complète + relation client",
        "Automatisation des affectations hôtel/navette/repas",
        "Génération PDF des feuilles de route",
      ],
      en: [
        "Project lead · team of 3 devs · 5 months under Scrum",
        "Full UML design + client relationship",
        "Automated hotel / shuttle / meal allocation",
        "PDF roadmap generation",
      ],
    },
    stack: ["Flask", "Python", "SQLAlchemy", "Bootstrap", "JavaScript", "MySQL", "HTML5", "CSS"],
    role: { fr: "Chef de projet & développeur full-stack", en: "Project lead & full-stack developer" },
    team: { fr: "Équipe de 3 développeurs", en: "Team of 3 developers" },
  },

  {
    id: "magicbot",
    slug: "magicbot",
    title: "MagicBot",
    year: "2023",
    categories: ["Pro"],
    accent: {
      color: "#64748b",
      secondary: "#475569",
      gradient: "linear-gradient(135deg, rgba(100,116,139,0.18) 0%, rgba(71,85,105,0.10) 100%)",
      mark: "M",
      pattern: "lines",
    },
    context: {
      fr: "Stage 2ᵉ année BUT — JULIEN MIALON",
      en: "BUT 2nd-year internship — JULIEN MIALON",
    },
    description: {
      fr: "Bot d'automatisation pour Guns Of Glory (50M+ joueurs) : algorithmes de décision en C# et portail web associé en React/TypeScript.",
      en: "Automation bot for Guns Of Glory (50M+ players): C# decision algorithms and a React/TypeScript companion web portal.",
    },
    longDescription: {
      fr: [
        "Stage de 8 semaines en 2ᵉ année de BUT, 100% remote chez JULIEN MIALON. Mission : développement d'un bot d'automatisation pour le jeu mobile Guns Of Glory (50M+ joueurs) — création d'algorithmes de décision en C# et développement du portail web compagnon en React/TypeScript.",
        "Le portail web permettait aux utilisateurs de configurer leur bot, suivre les actions automatisées et consulter les statistiques de jeu.",
      ],
      en: [
        "8-week BUT 2nd-year internship, fully remote at JULIEN MIALON. Mission: build an automation bot for the mobile game Guns Of Glory (50M+ players) — decision algorithms in C# and a React/TypeScript companion portal.",
        "The portal let users configure their bot, follow automated actions and check game stats.",
      ],
    },
    highlights: {
      fr: [
        "Algorithmes de décision (IA) en C#",
        "Portail web compagnon React + TypeScript",
        "Stage 100% remote · 8 semaines",
      ],
      en: [
        "Decision algorithms (AI) in C#",
        "React + TypeScript companion web portal",
        "100% remote internship · 8 weeks",
      ],
    },
    stack: ["C#", "React", "TypeScript", "HTML"],
    role: { fr: "Stagiaire développeur", en: "Developer intern" },
  },
];

export const categories = ["Tous", "Pro", "Freelance", "École", "Side"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const CATEGORY_STYLE: Record<ProjectCategory, { bg: string; text: string; border: string }> = {
  Pro: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500 dark:text-emerald-400",
    border: "border-emerald-500/30",
  },
  Freelance: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-500 dark:text-indigo-400",
    border: "border-indigo-500/30",
  },
  "École": {
    bg: "bg-violet-500/10",
    text: "text-violet-500 dark:text-violet-400",
    border: "border-violet-500/30",
  },
  Side: {
    bg: "bg-amber-500/10",
    text: "text-amber-500 dark:text-amber-400",
    border: "border-amber-500/30",
  },
};

// Avoid unused import warning — these are exposed for future helpers.
export type { LocStr, LocList };
