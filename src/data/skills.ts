export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-end",
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Sass", "React Query"],
  },
  {
    label: "Back-end",
    items: ["NestJS", "Java / Spring Boot", "Go", "Python / Flask / Django", "PHP / Symfony", "REST APIs", "Microservices"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "MySQL", "Oracle", "Kinto", "Apache Drill", "Apache Superset", "RabbitMQ"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Docker", "Kubernetes", "Linux", "Git / GitLab", "Nx Monorepo", "Vitest / JUnit", "Figma"],
  },
];

export const stackTags = [
  "React", "TypeScript", "NestJS", "Spring Boot", "Go", "Python",
  "PostgreSQL", "Docker", "Kubernetes", "Tailwind", "Next.js", "Vitest",
];
