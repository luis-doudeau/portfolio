export const profile = {
  name: "Luis Doudeau",
  firstName: "Luis",
  lastName: "Doudeau",
  initials: "LD",
  email: "luis.doudeau@gmail.com",
  cvUrl: "/cv-luis-doudeau.pdf",
  photoUrl: "/me.jpg",
  socials: {
    github: "https://github.com/luis-doudeau",
    linkedin: "https://www.linkedin.com/in/luis-doudeau",
    email: "mailto:luis.doudeau@gmail.com",
  },
  facts: {
    yearsCode: "8+",
    languages: "10+",
    projects: "6",
    coffee: "4",
  },
  // What I'm currently up to (used in StatusPanel and "Now" mini section)
  now: {
    workingOn: { fr: "Sphere · plateforme éducative IA", en: "Sphere · AI education platform" },
    learning: { fr: "Microservices avec NestJS", en: "Microservices with NestJS" },
    listening: { fr: "Lo-fi & électro instru", en: "Lo-fi & instrumental electro" },
    reading: { fr: "Designing Data-Intensive Applications", en: "Designing Data-Intensive Applications" },
  },
} as const;
