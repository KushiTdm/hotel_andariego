'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'fr' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.rooms': 'Chambres',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.location': 'Otavalo · Ecuador · Andes',
    'hero.cta.rooms': 'Découvrir nos chambres',
    'hero.cta.whatsapp': 'Réserver par WhatsApp',
    
    // About
    'about.subtitle': 'Notre histoire',
    'about.title': 'Bienvenue à',
    'about.title2': 'Otavalo',
    'about.p1': "Niché au cœur d'Otavalo, capital artisanale des Andes, notre hôtel est le point de départ idéal pour explorer le célèbre marché kichwa, les lagunes andines et les communautés indigènes aux traditions millénaires.",
    'about.p2': 'Avec {rooms} chambres réparties sur {floors} étages, nous accueillons jusqu\'à {capacity} voyageurs dans une atmosphère chaleureuse qui reflète l\'âme andine.',
    'about.feature1.title': 'Emplacement central',
    'about.feature1.sub': 'À 2 min du marché',
    'about.feature2.title': 'Service authentique',
    'about.feature2.sub': 'Équipe locale 24/7',
    'about.feature3.title': 'Vue panoramique',
    'about.feature3.sub': 'Rooftop sur les Andes',
    'about.feature4.title': 'Pour tous',
    'about.feature4.sub': 'Couples à backpackers',
    'about.rooms': 'chambres',
    
    // Quote
    'quote': '"Otavalo, où les fils de coton tissent les légendes des Andes depuis des millénaires"',
    
    // Rooms
    'rooms.title': 'Nos Chambres',
    'rooms.subtitle': 'Du dortoir convivial aux chambres familiales spacieuses, trouvez votre nid andin idéal',
    
    // Services
    'services.title': 'Services & Équipements',
    'services.subtitle': 'Tout pour rendre votre séjour andin inoubliable',
    
    // Activities
    'activities.title': 'À explorer depuis l\'hôtel',
    'activities.subtitle': 'Sucre 10-07 y Colón, Otavalo — tout est à portée de main',
    'activities.walk': 'à pied',
    'activities.car': 'en voiture',
    
    // Places
    'place.plaza.name': 'Plaza de Ponchos',
    'place.plaza.desc': "Le plus grand marché artisanal indigène d'Amérique latine",
    'place.cascada.name': 'Cascada de Peguche',
    'place.cascada.desc': "Chute d'eau sacrée kichwa au cœur de la forêt andine",
    'place.mojanda.name': 'Lagunas de Mojanda',
    'place.mojanda.desc': "Trois lacs de cratère à 3 700 m d'altitude, panorama exceptionnel",
    'place.cuicocha.name': 'Laguna de Cuicocha',
    'place.cuicocha.desc': 'Lac volcanique dans la caldeira du Cotacachi, île centrale mythique',
    'place.condor.name': 'Parque Cóndor',
    'place.condor.desc': "Centre de réhabilitation d'oiseaux rapaces avec vols en liberté",
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.follow': 'Suivez-nous',
    'contact.whatsapp': 'Contacter via WhatsApp',
    
    // Footer
    'footer.info': 'Informations',
    'footer.hours': 'Horaires',
    'footer.reception': 'Réception ouverte 24h/24',
    'footer.checkin': 'Check-in: 14h00',
    'footer.checkout': 'Check-out: 12h00',
    'footer.payment': 'Paiement:',
    'footer.rights': 'Tous droits réservés.',
  },
  es: {
    // Navigation
    'nav.rooms': 'Habitaciones',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.location': 'Otavalo · Ecuador · Andes',
    'hero.cta.rooms': 'Descubrir habitaciones',
    'hero.cta.whatsapp': 'Reservar por WhatsApp',
    
    // About
    'about.subtitle': 'Nuestra historia',
    'about.title': 'Bienvenidos a',
    'about.title2': 'Otavalo',
    'about.p1': 'Situado en el corazón de Otavalo, capital artesanal de los Andes, nuestro hotel es el punto de partida ideal para explorar el famoso mercado kichwa, las lagunas andinas y las comunidades indígenas con tradiciones milenarias.',
    'about.p2': 'Con {rooms} habitaciones distribuidas en {floors} pisos, recibimos hasta {capacity} viajeros en un ambiente cálido que refleja el alma andina.',
    'about.feature1.title': 'Ubicación céntrica',
    'about.feature1.sub': 'A 2 min del mercado',
    'about.feature2.title': 'Servicio auténtico',
    'about.feature2.sub': 'Equipo local 24/7',
    'about.feature3.title': 'Vista panorámica',
    'about.feature3.sub': 'Rooftop sobre los Andes',
    'about.feature4.title': 'Para todos',
    'about.feature4.sub': 'De parejas a mochileros',
    'about.rooms': 'habitaciones',
    
    // Quote
    'quote': '"Otavalo, donde los hilos de algodón tejen las leyendas de los Andes desde hace milenios"',
    
    // Rooms
    'rooms.title': 'Nuestras Habitaciones',
    'rooms.subtitle': 'Desde dormitorios acogedores hasta habitaciones familiares espaciosas, encuentra tu nido andino ideal',
    
    // Services
    'services.title': 'Servicios y Equipamiento',
    'services.subtitle': 'Todo para hacer tu estadía andina inolvidable',
    
    // Activities
    'activities.title': 'Para explorar desde el hotel',
    'activities.subtitle': 'Sucre 10-07 y Colón, Otavalo — todo está al alcance',
    'activities.walk': 'a pie',
    'activities.car': 'en coche',
    
    // Places
    'place.plaza.name': 'Plaza de Ponchos',
    'place.plaza.desc': 'El mercado artesanal indígena más grande de América Latina',
    'place.cascada.name': 'Cascada de Peguche',
    'place.cascada.desc': 'Cascada sagrada kichwa en el corazón del bosque andino',
    'place.mojanda.name': 'Lagunas de Mojanda',
    'place.mojanda.desc': 'Tres lagos de cráter a 3.700 m de altitud, panorama excepcional',
    'place.cuicocha.name': 'Laguna de Cuicocha',
    'place.cuicocha.desc': 'Lago volcánico en la caldera del Cotacachi, isla central mítica',
    'place.condor.name': 'Parque Cóndor',
    'place.condor.desc': 'Centro de rehabilitación de aves rapaces con vuelos en libertad',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.address': 'Dirección',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.follow': 'Síguenos',
    'contact.whatsapp': 'Contactar por WhatsApp',
    
    // Footer
    'footer.info': 'Información',
    'footer.hours': 'Horarios',
    'footer.reception': 'Recepción abierta 24h',
    'footer.checkin': 'Check-in: 14h00',
    'footer.checkout': 'Check-out: 12h00',
    'footer.payment': 'Pago:',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.rooms': 'Rooms',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.location': 'Otavalo · Ecuador · Andes',
    'hero.cta.rooms': 'Discover our rooms',
    'hero.cta.whatsapp': 'Book via WhatsApp',
    
    // About
    'about.subtitle': 'Our story',
    'about.title': 'Welcome to',
    'about.title2': 'Otavalo',
    'about.p1': 'Nestled in the heart of Otavalo, the artisanal capital of the Andes, our hotel is the ideal starting point to explore the famous Kichwa market, Andean lagoons, and indigenous communities with millennia-old traditions.',
    'about.p2': 'With {rooms} rooms across {floors} floors, we welcome up to {capacity} travelers in a warm atmosphere that reflects the Andean soul.',
    'about.feature1.title': 'Central location',
    'about.feature1.sub': '2 min from market',
    'about.feature2.title': 'Authentic service',
    'about.feature2.sub': 'Local team 24/7',
    'about.feature3.title': 'Panoramic view',
    'about.feature3.sub': 'Rooftop over the Andes',
    'about.feature4.title': 'For everyone',
    'about.feature4.sub': 'Couples to backpackers',
    'about.rooms': 'rooms',
    
    // Quote
    'quote': '"Otavalo, where cotton threads weave the legends of the Andes for millennia"',
    
    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'From cozy dorms to spacious family rooms, find your ideal Andean nest',
    
    // Services
    'services.title': 'Services & Amenities',
    'services.subtitle': 'Everything to make your Andean stay unforgettable',
    
    // Activities
    'activities.title': 'To explore from the hotel',
    'activities.subtitle': 'Sucre 10-07 y Colón, Otavalo — everything within reach',
    'activities.walk': 'walking',
    'activities.car': 'by car',
    
    // Places
    'place.plaza.name': 'Plaza de Ponchos',
    'place.plaza.desc': 'The largest indigenous artisan market in Latin America',
    'place.cascada.name': 'Cascada de Peguche',
    'place.cascada.desc': 'Sacred Kichwa waterfall in the heart of the Andean forest',
    'place.mojanda.name': 'Lagunas de Mojanda',
    'place.mojanda.desc': 'Three crater lakes at 3,700 m altitude, exceptional panorama',
    'place.cuicocha.name': 'Laguna de Cuicocha',
    'place.cuicocha.desc': 'Volcanic lake in the Cotacachi caldera, mythical central island',
    'place.condor.name': 'Parque Cóndor',
    'place.condor.desc': 'Bird of prey rehabilitation center with free flights',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.follow': 'Follow us',
    'contact.whatsapp': 'Contact via WhatsApp',
    
    // Footer
    'footer.info': 'Information',
    'footer.hours': 'Hours',
    'footer.reception': 'Reception open 24/7',
    'footer.checkin': 'Check-in: 2:00 PM',
    'footer.checkout': 'Check-out: 12:00 PM',
    'footer.payment': 'Payment:',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_COOKIE_NAME = 'hotel_language';
const LANGUAGE_STORAGE_KEY = 'hotel_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  // Get language from cookie (server-side compatible)
  const getLanguageFromCookie = (): Language | null => {
    if (typeof document === 'undefined') return null;
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === LANGUAGE_COOKIE_NAME) {
        return value as Language;
      }
    }
    return null;
  };

  // Set language cookie
  const setLanguageCookie = (lang: Language) => {
    if (typeof document !== 'undefined') {
      const maxAge = 60 * 60 * 24 * 365; // 1 year
      document.cookie = `${LANGUAGE_COOKIE_NAME}=${lang}; path=/; max-age=${maxAge}; SameSite=Lax`;
    }
  };

  // Set language in localStorage
  const setLanguageStorage = (lang: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  // Set language (updates both cookie and localStorage)
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setLanguageCookie(lang);
    setLanguageStorage(lang);
    
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Initialize language on mount
  useEffect(() => {
    // Priority: localStorage > cookie > browser language > default (fr)
    const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    const cookieLang = getLanguageFromCookie();
    
    let initialLang: Language = 'fr';
    
    if (savedLang && ['fr', 'es', 'en'].includes(savedLang)) {
      initialLang = savedLang;
    } else if (cookieLang && ['fr', 'es', 'en'].includes(cookieLang)) {
      initialLang = cookieLang;
    } else if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') initialLang = 'es';
      else if (browserLang === 'en') initialLang = 'en';
    }
    
    setLanguageState(initialLang);
    setMounted(true);
    
    // Update HTML lang attribute
    document.documentElement.lang = initialLang;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };