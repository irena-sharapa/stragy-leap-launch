import { useLocation, useNavigate } from "react-router-dom";
import { Language, getLanguageFromPath, getPathForLanguage, LANGUAGE_STORAGE_KEY } from "@/lib/translations";

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentLang = getLanguageFromPath(location.pathname) || 'ru';
  
  const setLanguage = (lang: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    navigate(getPathForLanguage(lang));
  };
  
  const getSavedLanguage = (): Language | null => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'ru' || saved === 'en' || saved === 'es') {
      return saved;
    }
    return null;
  };
  
  return {
    currentLang,
    setLanguage,
    getSavedLanguage,
  };
};
