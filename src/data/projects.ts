export type ProjectCategory = "Pro" | "Freelance" | "École" | "Side";

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string;
  categories: ProjectCategory[];
  context: string;
  description: string;
  longDescription?: string[];
  highlights: string[];
  stack: string[];
  role?: string;
  team?: string;
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "sphere",
    slug: "sphere",
    title: "Sphere",
    year: "2025 →",
    categories: ["Side", "École"],
    context: "Plateforme éducative SaaS — souveraine, IA pédagogique",
    description:
      "Sphere complète les ENT actuels avec une couche purement pédagogique : tuteur IA basé sur Mistral, génération de quiz et flashcards depuis un cours, correction assistée, et un drive souverain hébergé en France.",
    longDescription: [
      "Sphere est né d'un constat simple : les ENT actuels (Pronote & co) gèrent l'administratif — emplois du temps, notes, absences, communication descendante — mais laissent un vide énorme côté pédagogie pure. Quand un élève dit « je n'ai pas compris le chapitre », l'ENT n'aide pas. Sphere s'occupe de ça.",
      "Côté élève : un tuteur IA disponible 24/7 (Aristote, basé sur Mistral AI) qui guide, explique, reformule sans jamais donner la réponse brute. Quiz interactifs, flashcards générées depuis un cours scanné ou un audio, gamification bienveillante avec badges et challenges entre classes.",
      "Côté enseignant : génération assistée d'exercices différenciés (3 niveaux en un clic), pré-correction automatique avec indice de confiance que le prof valide, et tableaux de bord montrant les points mal acquis par la classe.",
      "Tout est hébergé en France (OVHcloud), conforme RGPD, et l'IA passe par Mistral pour rester dans une logique souveraine. L'architecture est en monorepo Nx avec un back NestJS, un front Next.js et une base PostgreSQL.",
    ],
    highlights: [
      "Architecture monorepo Nx · NestJS + Next.js + PostgreSQL",
      "Intégration Mistral AI avec garde-fous pédagogiques",
      "Hébergement souverain (OVHcloud) · conforme RGPD",
      "Modules collège, lycée général, lycée pro & BTS",
      "Drive souverain chiffré bout-en-bout",
      "Correction assistée avec validation humaine systématique",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Mistral AI", "Tailwind", "Docker", "OVHcloud"],
    role: "Conception & développement full-stack",
    team: "Projet d'école porté en side-project",
    links: [
      { label: "Voir le site", url: "https://sphere-education.com/" },
    ],
  },
  {
    id: "fresq",
    slug: "fresq",
    title: "Fresq",
    year: "2023 →",
    categories: ["Pro"],
    context: "Atos × Ministère de l'Enseignement supérieur et de la Recherche",
    description:
      "SI national des formations supérieures et de la recherche — l'agrégateur de toutes les formations reconnues par l'État post-bac.",
    longDescription: [
      "Fresq est le système d'information national qui agrège toutes les formations reconnues par l'État à tous les niveaux d'étude post-bac. Il fait dialoguer un écosystème complet : établissements, HCERES, CTI, CEFDG, AMUe, ONISEP, France Compétences.",
      "Au quotidien, je travaille sur les workflows d'accréditation côté front en React/TypeScript, les APIs back en Java/Spring Boot, et des plugins Python pour Kinto qui gère le stockage JSON. La donnée est ensuite analysée via Apache Drill et restituée dans Apache Superset pour les indicateurs de migration.",
      "C'est mon projet d'alternance depuis septembre 2023 — une mission longue qui m'a permis de toucher à toute la stack et de comprendre comment un SI à enjeu national se construit, se sécurise et se maintient.",
    ],
    highlights: [
      "Conception d'interfaces React/TypeScript pour les workflows d'accréditation",
      "APIs Java/Spring Boot et plugins Python pour Kinto",
      "Indicateurs de migration via Apache Drill + Apache Superset",
      "Tests unitaires (JUnit, Vitest) sur l'ensemble de la stack",
      "Travail dans une équipe Agile multi-acteurs (Atos, MESR, partenaires)",
    ],
    stack: ["React", "TypeScript", "Java", "Spring Boot", "Python", "Kinto", "PostgreSQL", "Apache Drill", "Apache Superset", "JUnit", "Vitest"],
    role: "Analyste développeur — alternance",
    team: "Atos · équipe projet Fresq",
  },
  {
    id: "webase",
    slug: "webase",
    title: "Webase Studio",
    year: "2026 →",
    categories: ["Freelance"],
    context: "Studio freelance fondé en 2026 — Orléans",
    description:
      "Studio freelance qui conçoit des sites web et des applications pour indépendants, TPE et PME. Cadrage clair, exécution rapide, livraison de qualité.",
    longDescription: [
      "Webase Studio est ma structure freelance. L'idée : proposer aux indépendants, TPE et PME une approche directe — un cadrage clair en amont, une exécution rapide, et une livraison vraiment finie (pas un MVP qu'on traîne pendant 6 mois).",
      "On intervient sur le développement de sites et applications (web et mobile), la maintenance corrective et évolutive, et l'intégration / déploiement. La stack est moderne et choisie pour la maintenabilité long-terme : Next.js, NestJS, Postgres, déploiement Vercel ou OVH selon les besoins.",
    ],
    highlights: [
      "Architecture full-stack sur-mesure par client",
      "Process de cadrage → livraison en 4 à 8 semaines",
      "Stack moderne : Next.js, NestJS, Postgres, Vercel",
      "Maintenance évolutive incluse",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Vercel", "Docker"],
    role: "Fondateur & architecte full-stack",
  },
  {
    id: "proximeet",
    slug: "proximeet",
    title: "ProxiMeet",
    year: "2023 — 2024",
    categories: ["École"],
    context: "Projet BUT 3 — IUT d'Orléans",
    description:
      "Application mobile qui ré-injecte du physique dans les interactions sociales : géolocalisation pour connecter les utilisateurs proches géographiquement, hors de leur réseau habituel.",
    longDescription: [
      "ProxiMeet est née d'un constat : les interactions sociales numériques dominent, mais on perd le réflexe de rencontrer physiquement les gens autour de nous. L'application utilise la géolocalisation pour connecter les utilisateurs proches géographiquement, en dehors de leur réseau social habituel.",
      "Application Flutter cross-platform avec un back-end Firebase et des WebSockets pour la temps-réel. J'ai conçu 18+ écrans en amont sur Figma avant le développement, et travaillé en équipe avec deux autres étudiants en méthodologie agile.",
    ],
    highlights: [
      "Application Flutter cross-platform (iOS + Android)",
      "Backend Firebase + WebSockets pour la temps-réel",
      "Conception UI Figma · 18+ écrans",
      "Géolocalisation et matching de proximité",
    ],
    stack: ["Flutter", "Firebase", "WebSocket", "Docker", "Figma"],
    role: "Développeur full-stack",
    team: "Projet d'équipe — 3 développeurs",
  },
  {
    id: "bdboum",
    slug: "bd-boum",
    title: "bd BOUM — Maison de la BD",
    year: "2022 — 2023",
    categories: ["École"],
    context: "Festival de bande dessinée (22 000 visiteurs/an)",
    description:
      "Application web de gestion interne du festival : inscription des participants et back-office secrétariat avec automatisation logement, transport, repas et génération de feuilles de route PDF.",
    longDescription: [
      "Application web complète développée pour le festival bd BOUM, qui accueille des milliers de visiteurs chaque année (22 000 en 2024). Deux gros modules : un côté participant (auteurs, exposants, invités, presse, staff) avec inscription en ligne, et un côté secrétariat avec administration complète.",
      "La partie qui m'a le plus intéressé : l'automatisation. Affectation automatique des hôtels en fonction des horaires d'arrivée, attribution des navettes, gestion des créneaux de repas, et génération automatique des feuilles de route PDF.",
      "J'étais chef de projet sur cette mission : conception UML, gestion full-stack de l'application, et relation client direct avec la Maison de la BD. L'équipe : 3 développeurs, 5 mois en méthodologie Scrum.",
    ],
    highlights: [
      "Chef de projet · équipe de 3 dev · 5 mois en Scrum",
      "Conception UML complète + relation client",
      "Automatisation des affectations hôtel/navette/repas",
      "Génération PDF des feuilles de route",
    ],
    stack: ["Flask", "Python", "SQLAlchemy", "Bootstrap", "JavaScript", "MySQL", "HTML5", "CSS"],
    role: "Chef de projet & développeur full-stack",
    team: "Équipe de 3 développeurs",
  },
  {
    id: "magicbot",
    slug: "magicbot",
    title: "MagicBot",
    year: "2023",
    categories: ["Pro"],
    context: "Stage 2ᵉ année BUT — JULIEN MIALON",
    description:
      "Bot d'automatisation pour le jeu mobile Guns Of Glory (50M+ joueurs) : algorithmes de décision (IA) en C# et portail web associé en React/TypeScript.",
    longDescription: [
      "Stage de 8 semaines en 2ᵉ année de BUT, 100% remote chez JULIEN MIALON. Mission : développement d'un bot d'automatisation pour le jeu mobile Guns Of Glory (50M+ joueurs) — création d'algorithmes de décision en C# et développement du portail web compagnon en React/TypeScript.",
      "Le portail web permettait aux utilisateurs de configurer leur bot, suivre les actions automatisées et consulter les statistiques de jeu.",
    ],
    highlights: [
      "Algorithmes de décision (IA) en C#",
      "Portail web compagnon React + TypeScript",
      "Stage 100% remote · 8 semaines",
    ],
    stack: ["C#", "React", "TypeScript", "HTML"],
    role: "Stagiaire développeur",
  },
];

export const categories = ["Tous", "Pro", "Freelance", "École", "Side"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
