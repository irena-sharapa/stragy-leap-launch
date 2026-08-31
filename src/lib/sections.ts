import { Language } from "@/lib/translations";

/** Order matters: used to pick the active section while scrolling. */
export const SECTION_IDS = ["how", "diff", "who", "pricing", "cta"] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** URL slug for every section, per language. */
export const SECTION_SLUGS: Record<Language, Record<SectionId, string>> = {
  ru: {
    how: "kak-rabotaet",
    diff: "preimushchestva",
    who: "dlya-kogo",
    pricing: "tarify",
    cta: "kontakty",
  },
  en: {
    how: "how-it-works",
    diff: "advantages",
    who: "for-whom",
    pricing: "pricing",
    cta: "contact",
  },
  es: {
    how: "como-funciona",
    diff: "ventajas",
    who: "para-quien",
    pricing: "precios",
    cta: "contacto",
  },
};

export const getSlug = (lang: Language, id: SectionId) => SECTION_SLUGS[lang][id];

export const getSectionIdFromSlug = (lang: Language, slug?: string): SectionId | null => {
  if (!slug) return null;
  const entries = Object.entries(SECTION_SLUGS[lang]) as [SectionId, string][];
  const found = entries.find(([, value]) => value === slug);
  return found ? found[0] : null;
};
