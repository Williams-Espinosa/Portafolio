import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const titles: Record<Language, string> = {
  ES: 'Williams-Espinosa - Portafolio',
  EN: 'Williams-Espinosa - Portfolio',
};

const descriptions: Record<Language, string> = {
  ES: 'Portafolio profesional de Williams Espinosa. Desarrollador FullStack, Android y DevOps. Estudiante en la Universidad Politécnica de Chiapas.',
  EN: 'Professional portfolio of Williams Espinosa. FullStack, Android and DevOps developer. Student at the Polytechnic University of Chiapas.',
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('ES');

  useEffect(() => {
    document.title = titles[lang];
    document.documentElement.lang = lang.toLowerCase(); 

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[lang]);
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};