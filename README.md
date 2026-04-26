# microCRAFT Website

Marketing site for microCRAFT Renovations & Radon, built with Vite, React, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Cloudflare Pages

This project is ready for Cloudflare Pages static hosting.

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: `Vite`

### Notes

- SPA routing is handled by [`public/_redirects`](./public/_redirects), so deep links like `/about` and `/contact` resolve correctly in production.
- Security headers are set through [`public/_headers`](./public/_headers).
- Cloudflare Pages config is stored in [`wrangler.jsonc`](./wrangler.jsonc).

## Next Launch Steps

1. Push this repository to GitHub.
2. Create a Cloudflare Pages project from the repo.
3. Add your custom domain in Cloudflare Pages.
4. Point the domain or nameservers to Cloudflare.
5. When ready, add a real contact form backend and email provider.
