export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-end",
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Sass"],
  },
  {
    label: "Back-end",
    items: ["NestJS", "Spring Boot", "Java", "Go", "Python", "Flask", "Django", "PHP", "Symfony"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "Oracle", "Kinto", "Apache Drill", "Apache Superset", "RabbitMQ"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Docker", "Kubernetes", "Linux", "Git", "GitLab", "Nx", "Vitest", "JUnit", "Figma"],
  },
];

export const stackTags = [
  "React", "TypeScript", "NestJS", "Spring Boot", "Go", "Python",
  "PostgreSQL", "Docker", "Kubernetes", "Tailwind", "Next.js", "Vitest",
];
