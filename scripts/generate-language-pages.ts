import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { LANDING_SEO, SITE_URL } from "../src/lib/seo.ts";

const output = resolve(process.argv[2] || "dist");
const template = readFileSync(resolve(output, "index.html"), "utf8");
const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const [lang, seo] of Object.entries(LANDING_SEO)) {
  const canonical = `${SITE_URL}${seo.path}`;
  const tags = [
    `<title data-rh="true">${escape(seo.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escape(seo.description)}" />`,
    `<link data-rh="true" rel="canonical" href="${canonical}" />`,
    ...Object.entries(LANDING_SEO).map(([code, page]) => `<link data-rh="true" rel="alternate" hreflang="${code}" href="${SITE_URL}${page.path}" />`),
    `<link data-rh="true" rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
    `<meta data-rh="true" property="og:title" content="${escape(seo.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${escape(seo.description)}" />`,
    `<meta data-rh="true" property="og:url" content="${canonical}" />`,
    `<meta data-rh="true" property="og:type" content="website" />`,
    `<meta data-rh="true" property="og:locale" content="${lang === "en" ? "en_US" : lang === "ru" ? "ru_RU" : "es_ES"}" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${escape(seo.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${escape(seo.description)}" />`,
  ].join("\n    ");
  const html = template
    .replace(/<html\b[^>]*>/i, `<html lang="${lang}">`)
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name=["'](?:description|twitter:(?:card|title|description))["']|property=["']og:(?:title|description|url|type|locale)["'])[^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["'](?:canonical|alternate)["'][^>]*>/gi, "")
    .replace(/<\/head>/i, `    ${tags}\n  </head>`);
  const directory = lang === "en" ? output : resolve(output, lang);
  mkdirSync(directory, { recursive: true });
  writeFileSync(resolve(directory, "index.html"), html);
}

console.log("Localized HTML generated for /, /ru and /es.");