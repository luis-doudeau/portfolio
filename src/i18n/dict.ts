export type Lang = "fr" | "en";

export type LocStr = { fr: string; en: string };
export type LocList = { fr: string[]; en: string[] };

export const dict = {
  nav: {
    about: { fr: "À propos", en: "About" },
    projects: { fr: "Projets", en: "Projects" },
    timeline: { fr: "Parcours", en: "Career" },
    vision: { fr: "Ambitions", en: "Ambitions" },
    contact: { fr: "Contact", en: "Contact" },
    contactCta: { fr: "Me contacter", en: "Get in touch" },
  },

  hero: {
    eyebrow: { fr: "Portfolio · 2026", en: "Portfolio · 2026" },
    location: { fr: "Paris, France", en: "Paris, France" },
    role: { fr: "Développeur", en: "Developer" },
    accent: { fr: "full-stack", en: "full-stack" },
    locationSuffix: { fr: ", basé à Paris.", en: ", based in Paris." },
    bio: {
      fr: "Atos × Fresq le jour. Sphere et Webase Studio le reste du temps.",
      en: "Atos × Fresq by day. Sphere and Webase Studio the rest of the time.",
    },
    currently: { fr: "Actuellement", en: "Currently" },
    status: {
      fr: "MSc Architecture des SI · ETNA · alternant chez Atos",
      en: "MSc Information Systems Architecture · ETNA · apprentice at Atos",
    },
    ctaProjects: { fr: "Voir mes projets", en: "See my projects" },
    ctaCV: { fr: "Télécharger CV", en: "Download CV" },
    statProjects: { fr: "Projets", en: "Projects" },
    statYears: { fr: "d'alternance", en: "apprenticeship" },
    statBut: { fr: "/20 BUT", en: "/20 BUT" },
  },

  about: {
    label: { fr: "Qui je suis", en: "Who I am" },
    title: {
      fr: "Développeur curieux,",
      en: "Curious developer,",
    },
    titleAccent: { fr: "qui aime livrer.", en: "who loves to ship." },
    bio: {
      fr: "Étudiant en Master 2 Architecture des SI à l'ETNA, alternant chez Atos. Je code en React, TypeScript, Java/Spring, Python, Go.",
      en: "MSc student in Information Systems Architecture at ETNA, apprentice at Atos. I code in React, TypeScript, Java/Spring, Python, Go.",
    },
    facts: {
      yearsCode: { fr: "ans à coder", en: "years coding" },
      languages: { fr: "langages", en: "languages" },
      projects: { fr: "projets livrés", en: "shipped projects" },
      coffee: { fr: "cafés / jour", en: "coffees / day" },
    },
    skillGroups: {
      front: { fr: "Front-end", en: "Front-end" },
      back: { fr: "Back-end", en: "Back-end" },
      data: { fr: "Data & Infra", en: "Data & Infra" },
      tools: { fr: "Outils & DevOps", en: "Tools & DevOps" },
    },
  },

  projects: {
    label: { fr: "Sélection", en: "Selection" },
    title: {
      fr: "Quelques projets sur lesquels j'ai",
      en: "A few projects I've",
    },
    titleAccent: {
      fr: "vraiment passé du temps.",
      en: "really invested time in.",
    },
    description: {
      fr: "Du SI national avec Atos au side-project IA pédagogique, voici ce qui m'occupe.",
      en: "From a national IS at Atos to an AI-powered education side-project — here's what I work on.",
    },
    filterAll: { fr: "Tous", en: "All" },
    seeDetail: { fr: "Voir le détail", en: "See detail" },
    stack: { fr: "Stack", en: "Stack" },
  },

  categories: {
    Pro: { fr: "Pro", en: "Pro" },
    Freelance: { fr: "Freelance", en: "Freelance" },
    "École": { fr: "École", en: "Academic" },
    Side: { fr: "Side", en: "Side" },
  },

  timeline: {
    label: { fr: "Expériences & formations", en: "Experience & education" },
    title: {
      fr: "D'un côté",
      en: "On one side,",
    },
    titleAccent1: { fr: "le travail", en: "work" },
    titleMid: { fr: ", de l'autre", en: ", on the other,"},
    titleAccent2: { fr: "l'apprentissage", en: "learning" },
    work: { fr: "Expérience pro", en: "Work experience" },
    edu: { fr: "Formation", en: "Education" },
    current: { fr: "En cours", en: "Current" },
  },

  vision: {
    label: { fr: "La suite", en: "What's next" },
    title: { fr: "Ce que je", en: "What I'm" },
    titleAccent: { fr: "cherche", en: "looking for" },
    titleEnd: { fr: ", et où je veux aller.", en: ", and where I want to go." },
    description: {
      fr: "Je termine mon master en 2026. D'ici là — et après — voici ce qui me motive.",
      en: "I'm finishing my master's in 2026. Until then — and after — here's what drives me.",
    },
    items: [
      {
        title: { fr: "Architecture qui dure", en: "Architecture that lasts" },
        body: {
          fr: "Continuer à monter en compétence sur la conception de SI à grande échelle — au-delà du framework du moment, comprendre ce qui rend un système maintenable cinq ans plus tard.",
          en: "Keep growing on large-scale IS design — beyond the framework of the moment, understanding what makes a system maintainable five years later.",
        },
      },
      {
        title: { fr: "Produits avec impact", en: "Products with impact" },
        body: {
          fr: "Travailler sur des outils utilisés au quotidien par de vraies personnes. Fresq, Sphere, Webase — chaque projet doit répondre à un besoin concret, pas à une démo.",
          en: "Build tools used daily by real people. Fresq, Sphere, Webase — every project should answer a concrete need, not just look good on a demo.",
        },
      },
      {
        title: { fr: "IA souveraine & utile", en: "Sovereign, useful AI" },
        body: {
          fr: "Explorer l'IA appliquée — pas pour le buzz, mais pour automatiser intelligemment et augmenter les utilisateurs. Mistral et l'écosystème français m'intéressent particulièrement.",
          en: "Explore applied AI — not for hype, but to automate smartly and augment users. Mistral and the French ecosystem are particularly interesting to me.",
        },
      },
      {
        title: { fr: "Équipes qui livrent", en: "Teams that ship" },
        body: {
          fr: "Continuer à prendre des responsabilités côté tech lead / chef de projet. J'aime autant cadrer un sprint que pousser une pull request.",
          en: "Keep taking responsibilities as tech lead / PM. I enjoy framing a sprint as much as pushing a PR.",
        },
      },
    ],
  },

  contact: {
    label: { fr: "Contact", en: "Contact" },
    title: { fr: "Vous voulez", en: "Want to" },
    titleAccent: { fr: "échanger ?", en: "talk?" },
    titleSecond: {
      fr: "Le plus simple, c'est l'email.",
      en: "Email is the simplest way.",
    },
    description: {
      fr: "Que ce soit pour parler d'un projet, d'une opportunité ou juste discuter tech — j'essaie de répondre sous 48h.",
      en: "Whether it's about a project, an opportunity or just tech talk — I try to reply within 48 hours.",
    },
    location: { fr: "Paris, France", en: "Paris, France" },
    open: {
      fr: "Ouvert au remote · France & Europe",
      en: "Open to remote · France & Europe",
    },
    backToTop: { fr: "↑ retour en haut", en: "↑ back to top" },
    builtWith: {
      fr: "Built with React · Vite · Tailwind · Framer Motion",
      en: "Built with React · Vite · Tailwind · Framer Motion",
    },
  },

  detail: {
    back: { fr: "Retour à l'accueil", en: "Back to home" },
    project: { fr: "Projet", en: "Project" },
    workExp: { fr: "Expérience professionnelle", en: "Work experience" },
    education: { fr: "Formation", en: "Education" },
    role: { fr: "Rôle", en: "Role" },
    stack: { fr: "Stack", en: "Stack" },
    skills: { fr: "Stack & compétences", en: "Stack & skills" },
    links: { fr: "Liens", en: "Links" },
    resources: { fr: "Ressources", en: "Resources" },
    keypoints: { fr: "Points clés", en: "Key points" },
  },
} as const;

export function tx(s: LocStr, lang: Lang): string {
  return s[lang];
}
