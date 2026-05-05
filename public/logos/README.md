# Project logos

Drop SVG (or PNG) logos here to override the inline fallback marks.

Filename convention: `{slug}.svg` — must match the `slug` field in
`src/data/projects.ts`.

## Expected files

- `sphere.svg`
- `fresq.svg`
- `webase.svg`
- `proximeet.svg`
- `bd-boum.svg`
- `magicbot.svg`

If a file is missing, the `<ProjectLogo>` component automatically falls back
to a generated SVG mark in the project's brand colour.

## Recommended sizing

- Square viewBox (e.g. `0 0 100 100`)
- Logo should fill ~80% of the canvas with some padding
- SVG preferred for crispness, but PNG @ 256×256 also works
