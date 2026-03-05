# mattwawiorka.com

Personal portfolio site built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- ESLint 9 + `typescript-eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`

## Patterns Used

- Component-first architecture with section-based composition (`About`, `Engineering`, `Music`, `Contact`).
- Barrel exports for cleaner imports (for example `src/components/index.ts` and `src/icons/index.ts`).
- Reusable `Section` wrapper to enforce consistent section spacing, sizing, and anchor behavior.
- Scroll-aware navigation using `IntersectionObserver` to highlight the active section.
- Strict TypeScript settings (`strict`, `noUnusedLocals`, `noUnusedParameters`) to keep code quality high.

## Local Development

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # start Vite dev server
npm run build    # type-check + production build
npm run lint     # run ESLint
npm run preview  # preview production build
```
