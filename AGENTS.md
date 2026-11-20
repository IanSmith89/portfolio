# AGENTS.md

## Commands

Requires Node.js `>=24` (`.nvmrc`). Run `nvm use` if your shell is on an older version.

- `npm run dev` - start dev server (`http://localhost:3000`)
- `npm run lint` - ESLint (`eslint .`)
- `npx tsc --noEmit` - TypeScript check
- `npm run build` - production build

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before finishing non-trivial changes.

## Constraints & Gotchas

- **Custom Tailwind palette only:** `app/globals.css` resets default Tailwind colors (`--color-*: initial;`). Do not use default color names like `gray-*` or `slate-*` unless added to `@theme`.
- **Safelisted classes:** Dynamically built `delay-[...]` classes must be included in `@source inline(...)` in `app/globals.css`.
- **Keep routes static:** Preserve static prerendering for `/` and `/projects/[handle]` (`generateStaticParams`). For browser-time values (e.g. `app/components/CurrentYear.tsx`), use a small client component instead of opting routes into dynamic rendering.
- **ESLint version:** Keep `eslint` on `^9` until `eslint-plugin-react` inside `eslint-config-next` supports ESLint 10.
- **Copy & docs:** Keep text direct and natural; avoid em dashes and generic AI boilerplate.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
