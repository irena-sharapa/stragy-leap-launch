import { Globe } from "lucide-react";
import { Language, getPathForLanguage } from "@/lib/translations";
import { useLanguage } from "@/hooks/useLanguage";

const languages: { code: Language; flag: string; short: string; name: string }[] = [
  { code: 'en', flag: '🇬🇧', short: 'EN', name: 'English' },
  { code: 'es', flag: '🇪🇸', short: 'ES', name: 'Español' },
  { code: 'ru', flag: '🇷🇺', short: 'RU', name: 'Русский' },
];

export const LanguageSwitcher = () => {
  const { currentLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-0.5 rounded-full border border-stragy-dark-text/10 bg-white/70 p-1 shadow-sm backdrop-blur-sm"
    >
      <Globe className="mx-1 h-3.5 w-3.5 shrink-0 text-stragy-dark-text/40" aria-hidden />
      {languages.map((lang) => {
        const active = lang.code === currentLang;
        return (
          <a
            key={lang.code}
            href={getPathForLanguage(lang.code)}
            hrefLang={lang.code}
            lang={lang.code}
            title={lang.name}
            aria-current={active ? "true" : undefined}
            className={[
              "inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[12px] font-semibold tracking-wide transition-colors",
              active
                ? "bg-stragy-dark-text text-white shadow-sm"
                : "text-stragy-dark-text/55 hover:bg-white hover:text-stragy-dark-text",
            ].join(" ")}
          >
            <span className="text-[15px] leading-none">{lang.flag}</span>
            <span>{lang.short}</span>
          </a>
        );
      })}
    </div>
  );
};
