import { useLocation } from "react-router-dom";
import { getLanguageFromPath } from "@/lib/translations";

export const useLanguage = () => {
  const location = useLocation();
  
  const currentLang = getLanguageFromPath(location.pathname) || 'en';
  
  return {
    currentLang,
  };
};
