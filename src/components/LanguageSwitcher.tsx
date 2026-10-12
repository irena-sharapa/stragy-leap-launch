import { Globe, ChevronDown, Check } from "lucide-react";
import { Language, getPathForLanguage } from "@/lib/translations";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const languages: { code: Language; short: string; name: string }[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'es', short: 'ES', name: 'Español' },
  { code: 'ru', short: 'RU', name: 'Русский' },
];

export const LanguageSwitcher = () => {
  const { currentLang } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label="Language" className="shrink-0 h-9 gap-2 rounded-full bg-background/70 shadow-sm backdrop-blur-sm">
          <Globe className="h-3.5 w-3.5" aria-hidden />
          {currentLang.toUpperCase()}
          <ChevronDown className="h-3.5 w-3.5" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
      {languages.map((lang) => {
        const active = lang.code === currentLang;
        return (
          <DropdownMenuItem asChild key={lang.code}>
            <a href={getPathForLanguage(lang.code)} hrefLang={lang.code} lang={lang.code} title={lang.name} aria-current={active ? "true" : undefined}>
            <span>{lang.name}</span>
            {active && <Check className="ml-auto h-4 w-4" aria-hidden />}
            </a>
          </DropdownMenuItem>
        );
      })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
