import { Language } from "@/lib/translations";
import { useLanguage } from "@/hooks/useLanguage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages: { code: Language; flag: string; name: string }[] = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
];

export const LanguageSwitcher = () => {
  const { currentLang, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(l => l.code === currentLang) || languages[2];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-10 px-3 gap-2">
          <span className="text-xl">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-stragy-dark-text">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${lang.code === currentLang ? 'bg-primary/10' : ''}`}
          >
            <span className="text-xl mr-3">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
