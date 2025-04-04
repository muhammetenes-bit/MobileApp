import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'tr';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    welcome: 'Welcome to MindGuard',
    settings: 'Settings',
    darkMode: 'Dark Mode',
    language: 'Language',
    notifications: 'Notifications',
    security: 'Security',
    privacy: 'Privacy',
    logout: 'Log Out',
    login: 'Log In',
    email: 'Email',
    password: 'Password',
    howAreYouFeeling: 'How are you feeling today?',
    happy: 'Happy',
    okay: 'Okay',
    sad: 'Sad',
    anxious: 'Anxious',
    startSession: 'Start AI Therapy Session',
    dailyActivities: 'Daily Activities',
    meditation: 'Meditation',
    breathing: 'Breathing',
    journaling: 'Journaling',
    exercise: 'Exercise',
  },
  tr: {
    welcome: 'MindGuard\'a Hoşgeldiniz',
    settings: 'Ayarlar',
    darkMode: 'Karanlık Mod',
    language: 'Dil',
    notifications: 'Bildirimler',
    security: 'Güvenlik',
    privacy: 'Gizlilik',
    logout: 'Çıkış Yap',
    login: 'Giriş Yap',
    email: 'E-posta',
    password: 'Şifre',
    howAreYouFeeling: 'Bugün nasıl hissediyorsun?',
    happy: 'Mutlu',
    okay: 'İyi',
    sad: 'Üzgün',
    anxious: 'Endişeli',
    startSession: 'AI Terapi Seansını Başlat',
    dailyActivities: 'Günlük Aktiviteler',
    meditation: 'Meditasyon',
    breathing: 'Nefes',
    journaling: 'Günlük',
    exercise: 'Egzersiz',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);