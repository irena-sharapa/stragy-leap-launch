import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Language, getPathForLanguage, LANGUAGE_STORAGE_KEY } from "@/lib/translations";

const LanguageRedirect = () => {
  const navigate = useNavigate();
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    
    if (savedLang && (savedLang === 'ru' || savedLang === 'en' || savedLang === 'es')) {
      navigate(getPathForLanguage(savedLang), { replace: true });
    } else {
      setShowSelector(true);
    }
  }, [navigate]);

  const handleSelectLanguage = (lang: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    navigate(getPathForLanguage(lang), { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stragy-light-bg to-white flex items-center justify-center">
      <LanguageSelector open={showSelector} onSelectLanguage={handleSelectLanguage} />
    </div>
  );
};

export default LanguageRedirect;
