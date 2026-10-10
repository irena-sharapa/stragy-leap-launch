import { Globe } from "lucide-react";
import { Language, getPathForLanguage } from "@/lib/translations";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

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
      className="flex shrink-0 items-center gap-0.5 rounded-full border border-stragy-dark-text/10 bg-background/70 p-1 shadow-sm backdrop-blur-sm"
    >
      <Globe className="mx-1 h-3.5 w-3.5 shrink-0 text-stragy-dark-text/40" aria-hidden />
      {languages.map((lang) => {
        const active = lang.code === currentLang;
        return (
          <Button asChild variant="ghost"
            key={lang.code}
            className={[
              "h-8 inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[12px] font-semibold tracking-normal transition-colors",
              active
                ? "bg-stragy-dark-text text-primary-foreground hover:bg-stragy-dark-text hover:text-primary-foreground shadow-sm"
                : "text-stragy-dark-text/55 hover:bg-background hover:text-stragy-dark-text",
            ].join(" ")}
          >
            <a href={getPathForLanguage(lang.code)} hrefLang={lang.code} lang={lang.code} title={lang.name} aria-current={active ? "true" : undefined}>
            <span className="text-[15px] leading-none">{lang.flag}</span>
            <span>{lang.short}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
