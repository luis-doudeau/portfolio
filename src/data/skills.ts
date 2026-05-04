import type { LocStr } from "../i18n/dict";

export type SkillGroup = {
  label: LocStr;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: { fr: "Front-end", en: "Front-end" },
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Sass"],
  },
  {
    label: { fr: "Back-end", en: "Back-end" },
    items: ["NestJS", "Spring Boot", "Java", "Go", "Python", "Flask", "Django", "PHP"],
  },
  {
    label: { fr: "Data & Infra", en: "Data & Infra" },
    items: ["PostgreSQL", "MySQL", "Oracle", "Kinto", "Apache Drill", "Apache Superset", "RabbitMQ"],
  },
  {
    label: { fr: "Outils & DevOps", en: "Tools & DevOps" },
    items: ["Docker", "Kubernetes", "Linux", "Git", "GitLab", "Nx", "Vitest", "JUnit", "Figma"],
  },
];

export const stackTags = [
  "React", "TypeScript", "NestJS", "Spring Boot", "Go", "Python",
  "PostgreSQL", "Docker", "Kubernetes", "Tailwind", "Next.js", "Vitest",
];
