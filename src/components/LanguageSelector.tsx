import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Language } from "@/lib/translations";

interface LanguageSelectorProps {
  open: boolean;
  onSelectLanguage: (lang: Language) => void;
}

export const LanguageSelector = ({ open, onSelectLanguage }: LanguageSelectorProps) => {
  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  ];

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md w-[90vw] max-w-[400px] font-inter p-8 [&>button]:hidden">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-stragy-dark-text">
              Choose your language
            </h2>
            <p className="text-stragy-gray-text">
              Выберите язык / Elige tu idioma
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant="outline"
                onClick={() => onSelectLanguage(lang.code)}
                className="h-14 text-lg font-medium justify-start px-6 hover:bg-primary/10 hover:border-primary transition-all"
              >
                <span className="text-2xl mr-4">{lang.flag}</span>
                {lang.name}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
