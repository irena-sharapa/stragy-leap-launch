# Architecture rules

- Use URL-based landing language selection with native navigation links so crawlers and direct visits reach the same language without browser-state redirects.
- Keep landing metadata in src/lib/seo.ts and reuse it in translations and the post-build HTML generator so static crawler metadata and client-rendered metadata stay consistent.
- Preserve the static public/sitemap.xml mechanism; section URLs are aliases of landing content, while canonical language URLs and legal pages are listed for discovery.
- Run scripts/generate-language-pages.ts after production and development builds to emit localized static HTML entry files without adding a persistent server.
- Keep the hero report carousel data localized inside SignalCard and stack all slides in one grid cell so mobile height stays stable without changing the surrounding hero layout.