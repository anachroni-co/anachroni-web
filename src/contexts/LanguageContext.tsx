import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  detectedCountry?: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [detectedCountry, setDetectedCountry] = useState<string>();
  
  // Detectar idioma inicial con múltiples estrategias
  const getInitialLanguage = async (): Promise<Language> => {
    if (typeof window === 'undefined') return 'en';

    // 1. Primero verificar localStorage (preferencia del usuario)
    const savedLang = localStorage.getItem('preferred-language') as Language;
    if (savedLang === 'es' || savedLang === 'en') {
      return savedLang;
    }

    // 2. Detectar por geolocalización si está disponible
    try {
      const geoLang = await detectLanguageByLocation();
      if (geoLang) return geoLang;
    } catch (error) {
      console.log('Geolocation detection failed, falling back to browser language');
    }

    // 3. Detectar por idioma del navegador (mejorado)
    const browserLang = navigator.language.toLowerCase();
    const languages = navigator.languages?.map(lang => lang.toLowerCase()) || [browserLang];
    
    // Códigos de países/regiones hispanohablantes
    const spanishCodes = [
      'es', 'es-es', 'es-mx', 'es-ar', 'es-co', 'es-ve', 'es-pe', 
      'es-cl', 'es-ec', 'es-gt', 'es-cu', 'es-bo', 'es-do', 
      'es-hn', 'es-py', 'es-sv', 'es-ni', 'es-cr', 'es-pa', 
      'es-uy', 'es-gq'
    ];

    // Verificar si algún idioma del navegador es español
    const hasSpanish = languages.some(lang => 
      spanishCodes.some(code => lang.startsWith(code))
    );

    return hasSpanish ? 'es' : 'en';
  };

  // Detectar idioma por geolocalización
  const detectLanguageByLocation = (): Promise<Language | null> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      const timeout = setTimeout(() => resolve(null), 5000); // 5 segundos timeout

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          clearTimeout(timeout);
          try {
            // Usar un servicio de geocodificación reversa para obtener el país
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            );
            const data = await response.json();
            const countryCode = data.countryCode?.toLowerCase();
            
            setDetectedCountry(data.country || 'Unknown');

            // Países hispanohablantes
            const spanishCountries = [
              'es', 'mx', 'ar', 'co', 've', 'pe', 'cl', 'ec', 'gt', 
              'cu', 'bo', 'do', 'hn', 'py', 'sv', 'ni', 'cr', 'pa', 
              'uy', 'gq'
            ];

            resolve(spanishCountries.includes(countryCode) ? 'es' : 'en');
          } catch (error) {
            console.error('Error getting location data:', error);
            resolve(null);
          }
        },
        () => {
          clearTimeout(timeout);
          resolve(null);
        },
        { timeout: 5000, enableHighAccuracy: false }
      );
    });
  };

  const [language, setLanguageState] = useState<Language>('en');
  const [isInitialized, setIsInitialized] = useState(false);

  // Inicializar idioma al cargar el componente
  useEffect(() => {
    const initializeLanguage = async () => {
      const initialLang = await getInitialLanguage();
      setLanguageState(initialLang);
      setIsInitialized(true);
    };

    initializeLanguage();
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Guardar en localStorage para persistencia
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'es' : 'en');
  }, [language, setLanguage]);

  const value: LanguageContextType = {
    language: isInitialized ? language : 'en', // Fallback hasta que se inicialice
    setLanguage,
    toggleLanguage,
    detectedCountry
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};