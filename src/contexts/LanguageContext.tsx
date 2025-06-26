
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ro' | 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  ro: {
    // Navigation
    'nav.about': 'Despre Roma',
    'nav.itinerary': 'Itinerariu',
    'nav.contact': 'Contact',
    'nav.book': 'Rezervă Acum',
    
    // Hero Section
    'hero.title': 'CENTRUL DE PELERINAJE',
    'hero.subtitle': 'ÎNSOȚITOR TURISTIC ROMA',
    'hero.caput': 'CAPUT MUNDI • CITTÀ ETERNA',
    'hero.eternal': 'CETATEA ETERNĂ',
    'hero.start': 'Începe Pelerinajul',
    'hero.learn': 'Află Mai Mult',
    
    // About Rome
    'about.title': 'Roma - Capitala Eternă',
    'about.description1': 'Roma - Capitala Italiei din anul 1870. Orașul situat în partea central-vestică a Peninsulei Italice, pe malul fluviului Tibru (Tevere), cu o istorie veche, fiind de-a lungul secolelor capitala Republicii Romane, a Imperiului Roman, a Bisericii Romano-Catolice și a Italiei moderne.',
    'about.description2': 'Centrul mondial al Renașterii, Roma este una dintre cele mai vizitate capitale ale lumii. Este un muzeu în aer liber, un oraș plin de istorie.',
    'about.description3': 'Roma - numită și Capitala lumii, Orașul etern, Orașul celor șapte coline - este unul dintre cele mai populare destinații unde cultura și credința se întâlnesc.',
    'about.pilgrimage': 'Pelerinaj Spiritual',
    'about.pilgrimage.desc': 'Un pelerinaj spiritual și cultural aici este mai mult decât o simplă călătorie; este o incursiune în inima istoriei, artei și spiritualității umane.',
    'about.heritage': 'Moștenire Străveche',
    'about.heritage.desc': 'Cu moștenirea sa străveche, este locul unde fiecare stradă, biserică și piață amintește de măreția civilizației care a influențat lumea întreagă.',
    'about.holy.title': 'Roma - Orașul Sfânt',
    'about.met.title': 'Orașul unde s-au întâlnit cu Mântuitorul:',
    'about.visit.title': 'Locuri Sfinte de vizitat:',
    
    // Itinerary
    'itinerary.title': 'Itinerarul Pelerinajului',
    'itinerary.description': 'Un program complet de 6 zile prin cele mai importante locuri sfinte din Roma, cu ghid specializat și transport inclus.',
    'itinerary.days': '6 Zile',
    'itinerary.days.desc': 'Program complet',
    'itinerary.people': '4-8 Persoane',
    'itinerary.people.desc': 'Grup mic',
    'itinerary.hours': '8 Ore/Zi',
    'itinerary.hours.desc': 'Program zilnic',
    'itinerary.basilicas': '7 Bazilici',
    'itinerary.basilicas.desc': 'Locuri sfinte',
    'itinerary.day': 'Ziua',
    'itinerary.transport.title': 'Transport și Organizare',
    'itinerary.transport.options': 'Opțiuni de Transport:',
    'itinerary.transport.program': 'Program:',
    
    // Contact
    'contact.title': 'Contact și Rezervări',
    'contact.description': 'Pentru informații și rezervări, contactați-ne de Luni - Vineri: 9:00 - 19:00',
    'contact.info': 'Informații de Contact',
    'contact.guide': 'Ghidul Dumneavoastră',
    'contact.society': 'SOCIETATEA ORA ET LABORA',
    'contact.essence': 'Esența Romei: oraș al cărui orice loc spune o poveste și unde orice piatră este un ecou al trecutului! Este un loc unde timpul pare să se oprească!',
    'contact.services': 'Servicii Incluse:',
    'contact.book': 'Rezervă Pelerinajul Acum',
    'contact.veni': 'VENI VIDI VICI!',
    'contact.pilgrims': 'Vă așteptăm să fim împreună pelerini spre mântuire!',
    
    // Footer
    'footer.pilgrimage': 'Pelerinaj spiritual și cultural în Roma, Capitala Eternă.',
    'footer.experience': 'Cu 29 de ani experiență în organizarea de călătorii spirituale.',
    'footer.quick': 'Contact Rapid',
    'footer.holy': 'Locuri Sfinte',
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.quote': '"Roma = Amor"'
  },
  
  en: {
    // Navigation
    'nav.about': 'About Rome',
    'nav.itinerary': 'Itinerary',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    
    // Hero Section
    'hero.title': 'ROME PILGRIMAGE CENTER',
    'hero.subtitle': 'ROME TOURIST GUIDE',
    'hero.caput': 'CAPUT MUNDI • CITTÀ ETERNA',
    'hero.eternal': 'THE ETERNAL CITY',
    'hero.start': 'Start Pilgrimage',
    'hero.learn': 'Learn More',
    
    // About Rome
    'about.title': 'Rome - The Eternal Capital',
    'about.description1': 'Rome - Capital of Italy since 1870. The city located in the central-western part of the Italian Peninsula, on the banks of the Tiber River (Tevere), with an ancient history, being throughout the centuries the capital of the Roman Republic, the Roman Empire, the Roman Catholic Church and modern Italy.',
    'about.description2': 'The world center of the Renaissance, Rome is one of the most visited capitals in the world. It is an open-air museum, a city full of history.',
    'about.description3': 'Rome - also called the Capital of the world, the Eternal City, the City of seven hills - is one of the most popular destinations where culture and faith meet.',
    'about.pilgrimage': 'Spiritual Pilgrimage',
    'about.pilgrimage.desc': 'A spiritual and cultural pilgrimage here is more than a simple journey; it is an incursion into the heart of human history, art and spirituality.',
    'about.heritage': 'Ancient Heritage',
    'about.heritage.desc': 'With its ancient heritage, it is the place where every street, church and square reminds of the greatness of the civilization that influenced the whole world.',
    'about.holy.title': 'Rome - The Holy City',
    'about.met.title': 'The city where they met the Savior:',
    'about.visit.title': 'Holy Places to visit:',
    
    // Itinerary
    'itinerary.title': 'Pilgrimage Itinerary',
    'itinerary.description': 'A complete 6-day program through the most important holy places in Rome, with specialized guide and transport included.',
    'itinerary.days': '6 Days',
    'itinerary.days.desc': 'Complete program',
    'itinerary.people': '4-8 People',
    'itinerary.people.desc': 'Small group',
    'itinerary.hours': '8 Hours/Day',
    'itinerary.hours.desc': 'Daily program',
    'itinerary.basilicas': '7 Basilicas',
    'itinerary.basilicas.desc': 'Holy places',
    'itinerary.day': 'Day',
    'itinerary.transport.title': 'Transport and Organization',
    'itinerary.transport.options': 'Transport Options:',
    'itinerary.transport.program': 'Program:',
    
    // Contact
    'contact.title': 'Contact and Reservations',
    'contact.description': 'For information and reservations, contact us Monday - Friday: 9:00 - 19:00',
    'contact.info': 'Contact Information',
    'contact.guide': 'Your Guide',
    'contact.society': 'ORA ET LABORA SOCIETY',
    'contact.essence': 'The essence of Rome: a city whose every place tells a story and where every stone is an echo of the past! It is a place where time seems to stop!',
    'contact.services': 'Services Included:',
    'contact.book': 'Book Pilgrimage Now',
    'contact.veni': 'VENI VIDI VICI!',
    'contact.pilgrims': 'We await you to be pilgrims together towards salvation!',
    
    // Footer
    'footer.pilgrimage': 'Spiritual and cultural pilgrimage in Rome, the Eternal Capital.',
    'footer.experience': 'With 29 years of experience in organizing spiritual journeys.',
    'footer.quick': 'Quick Contact',
    'footer.holy': 'Holy Places',
    'footer.rights': 'All rights reserved.',
    'footer.quote': '"Rome = Love"'
  },
  
  it: {
    // Navigation
    'nav.about': 'Su Roma',
    'nav.itinerary': 'Itinerario',
    'nav.contact': 'Contatto',
    'nav.book': 'Prenota Ora',
    
    // Hero Section
    'hero.title': 'CENTRO PELLEGRINAGGI ROMA',
    'hero.subtitle': 'GUIDA TURISTICA ROMA',
    'hero.caput': 'CAPUT MUNDI • CITTÀ ETERNA',
    'hero.eternal': 'LA CITTÀ ETERNA',
    'hero.start': 'Inizia Pellegrinaggio',
    'hero.learn': 'Scopri di Più',
    
    // About Rome
    'about.title': 'Roma - La Capitale Eterna',
    'about.description1': 'Roma - Capitale d\'Italia dal 1870. La città situata nella parte centro-occidentale della Penisola Italiana, sulle rive del fiume Tevere, con una storia antica, essendo attraverso i secoli la capitale della Repubblica Romana, dell\'Impero Romano, della Chiesa Cattolica Romana e dell\'Italia moderna.',
    'about.description2': 'Il centro mondiale del Rinascimento, Roma è una delle capitali più visitate al mondo. È un museo a cielo aperto, una città ricca di storia.',
    'about.description3': 'Roma - chiamata anche la Capitale del mondo, la Città eterna, la Città dei sette colli - è una delle destinazioni più popolari dove cultura e fede si incontrano.',
    'about.pilgrimage': 'Pellegrinaggio Spirituale',
    'about.pilgrimage.desc': 'Un pellegrinaggio spirituale e culturale qui è più di un semplice viaggio; è un\'incursione nel cuore della storia, dell\'arte e della spiritualità umana.',
    'about.heritage': 'Eredità Antica',
    'about.heritage.desc': 'Con la sua antica eredità, è il luogo dove ogni strada, chiesa e piazza ricorda la grandezza della civiltà che ha influenzato il mondo intero.',
    'about.holy.title': 'Roma - La Città Santa',
    'about.met.title': 'La città dove hanno incontrato il Salvatore:',
    'about.visit.title': 'Luoghi Santi da visitare:',
    
    // Itinerary
    'itinerary.title': 'Itinerario del Pellegrinaggio',
    'itinerary.description': 'Un programma completo di 6 giorni attraverso i luoghi santi più importanti di Roma, con guida specializzata e trasporto incluso.',
    'itinerary.days': '6 Giorni',
    'itinerary.days.desc': 'Programma completo',
    'itinerary.people': '4-8 Persone',
    'itinerary.people.desc': 'Piccolo gruppo',
    'itinerary.hours': '8 Ore/Giorno',
    'itinerary.hours.desc': 'Programma giornaliero',
    'itinerary.basilicas': '7 Basiliche',
    'itinerary.basilicas.desc': 'Luoghi santi',
    'itinerary.day': 'Giorno',
    'itinerary.transport.title': 'Trasporto e Organizzazione',
    'itinerary.transport.options': 'Opzioni di Trasporto:',
    'itinerary.transport.program': 'Programma:',
    
    // Contact
    'contact.title': 'Contatto e Prenotazioni',
    'contact.description': 'Per informazioni e prenotazioni, contattaci Lunedì - Venerdì: 9:00 - 19:00',
    'contact.info': 'Informazioni di Contatto',
    'contact.guide': 'La Tua Guida',
    'contact.society': 'SOCIETÀ ORA ET LABORA',
    'contact.essence': 'L\'essenza di Roma: una città in cui ogni luogo racconta una storia e dove ogni pietra è un\'eco del passato! È un luogo dove il tempo sembra fermarsi!',
    'contact.services': 'Servizi Inclusi:',
    'contact.book': 'Prenota Pellegrinaggio Ora',
    'contact.veni': 'VENI VIDI VICI!',
    'contact.pilgrims': 'Vi aspettiamo per essere pellegrini insieme verso la salvezza!',
    
    // Footer
    'footer.pilgrimage': 'Pellegrinaggio spirituale e culturale a Roma, la Capitale Eterna.',
    'footer.experience': 'Con 29 anni di esperienza nell\'organizzazione di viaggi spirituali.',
    'footer.quick': 'Contatto Rapido',
    'footer.holy': 'Luoghi Santi',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.quote': '"Roma = Amore"'
  }
};
