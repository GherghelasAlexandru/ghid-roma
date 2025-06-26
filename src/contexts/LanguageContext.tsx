
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
    'about.explore': 'Patrimoniu Cultural',
    'about.explore.desc': 'Prin explorarea ei ne va îmbogăți nu doar din punct de vedere spiritual, ci și cultural, ajutându-ne să înțelegem profunzimea credinței și a frumuseții artistice care au marcat această cetate eternă.',

    // Holy Places
    'about.holy.title': 'Roma - Orașul Sfânt',
    'about.met.title': 'Orașul Sfânt',
    'about.visit.title': 'Ca buni creștini se vor vizita',
    'about.met.list': [
      'Orașul unde s-a întâlnit Apostolul Petru ( +64 dHr Roma)cu Mântuitorul',
      'Unde a murit Sf. Petru răstignit pe o Cruce cu capul în jos',
      'Locul pe unde a călătorit Apostolul Pavel (+67dHr Roma)și unde a fost ucis pentru credința sa',
      'Unde a scris Apostolul Luca 9 - 93 dHr , medic , pictor ( Evanghelia și Faptele Apostolilor)',
      'La ROMA sunt peste 900 de Biserici',
      'Capitala unde avem Moaște a tuturor Apostolilor și ale miilor de sfinți',
      'Pământ creștin udat cu sângele martirilor',
      'Și nu în ultimul rând cultură și artă ( 80% din patrimoniul mondial este în Italia). Tot ceea ce se va vizita este Patrimoniu al umanității'
    ],
    'about.visit.list': [
      'Catacombele - locul de închinare și cimitirul  primilor creștini. În terenul Romei sunt 60 de Catacombe diverse , peste 170km lungime , cu peste 750.000 de morminte.  Actual sunt deschise publicului doar 5 Catacombe',
      'Cele 7 BAZILICI ROMANE ( Construite imediat după Edictul Sf.Împărat Constantin de la Mediolanum - Milano din anul 313 , dăruind libertatea cultului creștin ) - La ROMA sunt peste 900 de Biserici',
      'COLOSEUL (72dHr-80dHr) locul Sfânt unde au murit mii de creștini , uciși în lupte cu gladiatori sau mâncați de fiare sălbatice',
      'PANTEONUL ( 27 ÎHr) 112-124. Ex: Templu al mai multor zeități , actual Biserică creștină, singura clădire din lume cu o gaură în tavan cu diametrul de 9 metri , care din sediu păgân devine clădire religioasă în anul 312',
      'VATICANUL ( 64 D Hr ) 1506-1626 , cel mai mic stat din lume ... unde este corpul patronului orașului Sfântul Petru',
    ],  
      
    
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
    'itinerary.transport.info': 'Durata circa 8 ore (depinde mult de cât de voioși sunteți, de câte fotografii veți face, de îmbulzeală, de numărul de pelerini ajunși înaintea noastră, de trafic, de orarul deschiderii obiectivelor turistice etc).',
    
    // Contact
    'contact.title': 'Contact și Rezervări',
    'contact.description': 'Pentru informații și rezervări, contactați-ne de Luni - Vineri: 9:00 - 19:00',
    'contact.info': 'Informații de Contact',
    'contact.guide': 'Ghidul Dumneavoastră',
    'contact.offer': 'ÎNSOȚITOR TURISTIC în Capitala Roma și prin împrejmuiri , Teolog Pascaru Sorinel ,absolvent al Facultății de Teologie Ortodoxă Iustinian Patriarhul din București  ,actual masteran al aceeași Facultăți ,  bun cunoscător al Italiei , cu reședința neîntreruptă în orașul Roma de 29 de ani .',
    'contact.society': 'Societatea ora et labora vă oferă',
    'contact.essence': 'Esența Romei: oraș al cărui orice loc spune o poveste și unde orice piatră este un ecou al trecutului! Este un loc unde timpul pare să se oprească!',
    'contact.services': 'Servicii Incluse:',
    'contact.book': 'Rezervă Pelerinajul Acum',
    'contact.veni': 'VENI VIDI VICI!',
    'contact.pilgrims': 'Vă așteptăm să fim împreună pelerini spre mântuire!',

    // Sorin
    'sorin.university': 'Absolvent al Facultății de Teologie Ortodoxă "Iustinian Patriarhul" din București, actual masterand',
    'sorin.experience': 'Bun cunoscător al Italiei, cu reședința neîntreruptă în orașul Roma de 29 de ani',
    
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
    'about.explore': 'Cultural Heritage',
    'about.explore.desc': 'By exploring it, we will enrich ourselves not only spiritually, but also culturally, helping us to understand the depth of faith and artistic beauty that have marked this eternal city.',

    // Holy Places
    'about.holy.title': 'Rome - The Holy City',
    'about.met.title': 'The Holy City',
    'about.visit.title': 'As good Christians, you will visit',
    'about.met.list': [
      'The city where Apostle Peter (+64 AD, Rome) met the Savior',
      'Where Saint Peter died, crucified upside down',
      'The places Apostle Paul (+67 AD, Rome) traveled and where he was killed for his faith',
      'Where Apostle Luke (9–93 AD), physician and painter, wrote the Gospel and Acts of the Apostles',
      'There are over 900 churches in ROME',
      'The capital where we have relics of all the Apostles and thousands of saints',
      'Christian land watered with the blood of martyrs',
      'And not least, culture and art (80% of the world’s heritage is in Italy). Everything you visit is World Heritage'
    ],
    'about.visit.list': [
      'The Catacombs – the place of worship and burial of the first Christians. There are 60 different catacombs in Rome, over 170 km long, with more than 750,000 tombs. Currently, only 5 Catacombs are open to the public.',
      'The 7 ROMAN BASILICAS (built immediately after the Edict of Emperor Constantine from Milan in 313 AD, granting freedom to Christian worship) – there are over 900 churches in ROME.',
      'THE COLOSSEUM (72–80 AD), the holy place where thousands of Christians died, killed in gladiator fights or eaten by wild beasts.',
      'THE PANTHEON (27 BC / 112–124 AD): originally a temple for several deities, now a Christian church, the only building in the world with a 9-meter diameter hole in the ceiling, which became a religious building in 312 AD.',
      'THE VATICAN (64 AD / 1506–1626), the smallest state in the world... where the body of the patron of the city, Saint Peter, is found.'
    ],

    
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
    'itinerary.transport.info': 'Duration about 8 hours (it greatly depends on your energy, how many photos you take, crowds, the number of pilgrims who arrived before us, traffic, opening hours of tourist attractions, etc).',
    
    // Contact
    'contact.title': 'Contact and Reservations',
    'contact.description': 'For information and reservations, contact us Monday - Friday: 9:00 - 19:00',
    'contact.info': 'Contact Information',
    'contact.guide': 'Your Guide',
    'contact.offer': 'TOUR GUIDE in the Capital Rome and surroundings, Theologian Pascaru Sorinel, graduate of the “Justinian the Patriarch” Orthodox Theology Faculty in Bucharest, currently a master’s student at the same Faculty, well acquainted with Italy, with uninterrupted residence in the city of Rome for 29 years.',
    'contact.society': 'ORA ET LABORA SOCIETY',
    'contact.essence': 'The essence of Rome: a city whose every place tells a story and where every stone is an echo of the past! It is a place where time seems to stop!',
    'contact.services': 'Services Included:',
    'contact.book': 'Book Pilgrimage Now',
    'contact.veni': 'VENI VIDI VICI!',
    'contact.pilgrims': 'We await you to be pilgrims together towards salvation!',
    
    // Sorin
    'sorin.university': 'Graduate of the "Justinian the Patriarch" Faculty of Orthodox Theology in Bucharest, currently a master’s student',
    'sorin.experience': 'Well acquainted with Italy, with uninterrupted residence in the city of Rome for 29 years',


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
    'about.explore': 'Patrimonio Culturale',
    'about.explore.desc': 'Esplorandola, ci arricchiremo non solo spiritualmente, ma anche culturalmente, aiutandoci a comprendere la profondità della fede e della bellezza artistica che hanno segnato questa città eterna.',

    // Holy Places
    'about.holy.title': 'Roma - La Città Santa',
    'about.met.title': 'La Città Santa',
    'about.visit.title': 'Come buoni cristiani si visiterà',
    'about.met.list': [
      'La città dove l\'Apostolo Pietro (+64 d.C., Roma) ha incontrato il Salvatore',
      'Dove San Pietro è morto, crocifisso a testa in giù',
      'I luoghi dove l\'Apostolo Paolo (+67 d.C., Roma) ha viaggiato e dove è stato ucciso per la sua fede',
      'Dove l\'Apostolo Luca (9–93 d.C.), medico e pittore, ha scritto il Vangelo e gli Atti degli Apostoli',
      'A ROMA ci sono oltre 900 chiese',
      'La capitale dove abbiamo reliquie di tutti gli Apostoli e di migliaia di santi',
      'Terra cristiana bagnata dal sangue dei martiri',
      'E infine cultura e arte (l\'80% del patrimonio mondiale si trova in Italia). Tutto ciò che visiterai è Patrimonio dell\'Umanità'
    ],
    'about.visit.list': [
      'Le Catacombe – luogo di culto e cimitero dei primi cristiani. A Roma ci sono 60 Catacombe diverse, per oltre 170 km di lunghezza, con più di 750.000 tombe. Attualmente solo 5 Catacombe sono aperte al pubblico.',
      'Le 7 BASILICHE ROMANE (costruite subito dopo l\'Editto dell\'Imperatore Costantino a Milano nel 313 d.C., che concedeva la libertà di culto cristiano) – a ROMA ci sono oltre 900 chiese.',
      'IL COLOSSEO (72–80 d.C.), il luogo santo dove sono morti migliaia di cristiani, uccisi nei combattimenti tra gladiatori o sbranati dalle belve.',
      'IL PANTHEON (27 a.C. / 112–124 d.C.): tempio di varie divinità, ora chiesa cristiana, unico edificio al mondo con un foro di 9 metri di diametro nel soffitto, che da edificio pagano divenne luogo di culto nel 312 d.C.',
      'IL VATICANO (64 d.C. / 1506–1626), il più piccolo stato del mondo... dove si trova il corpo del patrono della città, San Pietro.'
    ],

    
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
    'itinerary.transport.info': 'Duration about 8 hours (it greatly depends on your energy, how many photos you take, crowds, the number of pilgrims who arrived before us, traffic, opening hours of tourist attractions, etc).',

    // Contact
    'contact.title': 'Contatto e Prenotazioni',
    'contact.description': 'Per informazioni e prenotazioni, contattaci Lunedì - Venerdì: 9:00 - 19:00',
    'contact.info': 'Informazioni di Contatto',
    'contact.guide': 'La Tua Guida',
    'contact.offer': 'ACCOMPAGNATORE TURISTICO nella Capitale Roma e dintorni, Teologo Pascaru Sorinel, laureato presso la Facoltà di Teologia Ortodossa “Giustiniano il Patriarca” di Bucarest, attualmente studente magistrale presso la stessa Facoltà, profondo conoscitore dell’Italia, residente ininterrottamente nella città di Roma da 29 anni.',
    'contact.society': 'SOCIETÀ ORA ET LABORA',
    'contact.essence': 'L\'essenza di Roma: una città in cui ogni luogo racconta una storia e dove ogni pietra è un\'eco del passato! È un luogo dove il tempo sembra fermarsi!',
    'contact.services': 'Servizi Inclusi:',
    'contact.book': 'Prenota Pellegrinaggio Ora',
    'contact.veni': 'VENI VIDI VICI!',
    'contact.pilgrims': 'Vi aspettiamo per essere pellegrini insieme verso la salvezza!',
    
    'sorin.university': 'Laureato presso la Facoltà di Teologia Ortodossa "Giustiniano il Patriarca" di Bucarest, attualmente studente magistrale',
    'sorin.experience': 'Ottima conoscenza dell’Italia, con residenza ininterrotta nella città di Roma da 29 anni',


    // Footer
    'footer.pilgrimage': 'Pellegrinaggio spirituale e culturale a Roma, la Capitale Eterna.',
    'footer.experience': 'Con 29 anni di esperienza nell\'organizzazione di viaggi spirituali.',
    'footer.quick': 'Contatto Rapido',
    'footer.holy': 'Luoghi Santi',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.quote': '"Roma = Amore"'
  }
};
