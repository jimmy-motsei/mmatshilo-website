# Dr Mmatshilo Motsei — Site Scaffold

Modern Next.js (App Router) scaffold for two creative approaches:

- **Approach A**: Core Brand Site (authoritative, conversion-ready)
- **Approach B**: Future-Forward Ecosystem (community + intelligence)

## Quick Start
```bash
pnpm i    # or npm i / yarn
cp .env.example .env.local
pnpm dev
```

## Structure
- `app/` routes for both approaches
- `components/` reusable UI
- `lib/` integrations (Shopify, Strapi)
- `config/` toggles & route maps
- `content/` sample copy as JSON

## Scripts
- `pnpm generate:sitemap` — builds `public/sitemap.xml` from `config/routes.ts`

## Notes
- Webhook stubs provided for Shopify → LMS enrollment handoff.
- Keep `config/site.config.ts` to set default approach (A | B).
- This scaffold ships with placeholder copy. Replace with final content.
