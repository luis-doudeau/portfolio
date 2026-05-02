# Portfolio — Luis Doudeau

Site vitrine personnel construit avec React, Vite, TypeScript, Tailwind CSS v4 et Framer Motion.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- Déployé sur **Vercel**

## Démarrage

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build de prod dans /dist
npm run preview  # preview du build
```

## Architecture

```
src/
├── components/      # Nav, SectionHeader (réutilisables)
├── sections/        # Hero, About, Projects, Timeline, Vision, Contact
├── data/            # profile.ts, projects.ts, timeline.ts, skills.ts
├── App.tsx          # composition des sections
├── main.tsx         # entrée React
└── index.css        # Tailwind + theme tokens
```

## Mettre à jour le contenu

Tout le contenu éditorial est centralisé dans `src/data/` :

- `profile.ts` — identité, accroche, liens sociaux, CV
- `projects.ts` — liste des projets (filtrables par catégorie)
- `timeline.ts` — parcours pro & formation
- `skills.ts` — groupes de compétences pour la section À propos

## Déploiement

Push sur la branche connectée à Vercel, ou :

```bash
vercel --prod
```

Le `vercel.json` à la racine configure le framework et les rewrites SPA.
