import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Language, getPathForLanguage } from "@/lib/translations";
import { SECTION_IDS, SectionId, getSlug, getSectionIdFromSlug } from "@/lib/sections";

/**
 * Keeps the address bar in sync with the section currently in view
 * (e.g. /ru/tarify) and scrolls to the section when the page is opened
 * with a section URL directly.
 */
export const useSectionUrl = (lang: Language) => {
  const { section } = useParams<{ section?: string }>();

  // Scroll to the section from the initial URL.
  useEffect(() => {
    const id = getSectionIdFromSlug(lang, section);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const timer = window.setTimeout(
      () => el.scrollIntoView({ behavior: "auto", block: "start" }),
      80,
    );
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // Update the URL while scrolling.
  useEffect(() => {
    const base = getPathForLanguage(lang);
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.35;
      let active: SectionId | null = null;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker) {
          active = id;
          break;
        }
      }

      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) active = SECTION_IDS[SECTION_IDS.length - 1];

      const nextPath = active ? `${base}/${getSlug(lang, active)}` : base;
      if (window.location.pathname !== nextPath) {
        window.history.replaceState(null, "", nextPath + window.location.search);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [lang]);
};
