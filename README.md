# ianjsmith.com

Personal portfolio site for Ian J. Smith, built with Next.js, React, TypeScript, and Tailwind CSS.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) and [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/forms`, `@tailwindcss/typography`) and [`next-themes`](https://github.com/pacocoursey/next-themes)
- `react-hook-form` (contact form via [Web3Forms](https://web3forms.com/)), `react-markdown`, `react-intersection-observer`, `react-parallax-tilt`
- ESLint 9 (`eslint-config-next`)
- Hosted on [Vercel](https://vercel.com/) with `@vercel/analytics` and `@vercel/speed-insights`

## Structure

```text
app/
├── components/         # Page sections, navigation, forms, and layout UI
├── data/projects.json  # Project case study content
├── lib/                # Shared UI primitives, SVG shapes, and icons
├── projects/[handle]/  # Statically generated case study pages
├── utils/              # Constants, metadata, helpers, and types
├── globals.css         # Tailwind v4 theme, utilities, and base styles
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── robots.ts           # robots.txt (allows indexing in production only)
└── sitemap.ts          # sitemap.xml
public/                 # Images and SVG assets
```

## Development

Requires Node.js 24+ (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` - start the local dev server
- `npm run build` - create a production build
- `npm run start` - serve the production build locally
- `npm run lint` - run ESLint

## Deployment

Deployed via Vercel:

- Production (`VERCEL_ENV=production`) sets the canonical origin to `https://ianjsmith.com` and enables search indexing.
- Preview builds use `VERCEL_URL` over HTTPS with indexing disabled.
- Local development defaults to `http://localhost:3000`.

## License

[MIT](./LICENSE)
