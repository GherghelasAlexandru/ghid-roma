import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ro" | "en" | "it";

export interface ItineraryLocation {
  name: string;
  description: string;
  relics: string[];
}

export interface ItineraryDay {
  title: string;
  highlights: string[];
  locations: ItineraryLocation[];
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  ta: (key: string) => string | string[];
  t: (key: string) => string;
  getItineraryDays: () => ItineraryDay[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ro");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const getItineraryDays = () => {
    return translations[language]["itinerary.daysData"] || [];
  };

  // Helper for string or array (useful for lists)
  const ta = (key: string): string | string[] => {
    return translations[language][key] || [];
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, ta, getItineraryDays }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  ro: {
    // Navigation
    "nav.about": "Despre Roma",
    "nav.itinerary": "Itinerariu",
    "nav.contact": "Contact",
    "nav.book": "Rezervă Acum",

    // Hero Section
    "hero.title": "CENTRUL DE PELERINAJE",
    "hero.subtitle": "ÎNSOȚITOR TURISTIC ROMA",
    "hero.caput": "CAPUT MUNDI • CITTÀ ETERNA",
    "hero.eternal": "CETATEA ETERNĂ",
    "hero.start": "Începe Pelerinajul",
    "hero.learn": "Află Mai Mult",

    // About Rome
    "about.title": "Roma - Capitala Eternă",
    "about.description1":
      "Roma - Capitala Italiei din anul 1870. Orașul situat în partea central-vestică a Peninsulei Italice, pe malul fluviului Tibru (Tevere), cu o istorie veche, fiind de-a lungul secolelor capitala Republicii Romane, a Imperiului Roman, a Bisericii Romano-Catolice și a Italiei moderne.",
    "about.description2":
      "Centrul mondial al Renașterii, Roma este una dintre cele mai vizitate capitale ale lumii. Este un muzeu în aer liber, un oraș plin de istorie.",
    "about.description3":
      "Roma - numită și Capitala lumii, Orașul etern, Orașul celor șapte coline - este unul dintre cele mai populare destinații unde cultura și credința se întâlnesc.",
    "about.pilgrimage": "Pelerinaj Spiritual",
    "about.pilgrimage.desc":
      "Un pelerinaj spiritual și cultural aici este mai mult decât o simplă călătorie; este o incursiune în inima istoriei, artei și spiritualității umane.",
    "about.heritage": "Moștenire Străveche",
    "about.heritage.desc":
      "Cu moștenirea sa străveche, este locul unde fiecare stradă, biserică și piață amintește de măreția civilizației care a influențat lumea întreagă.",
    "about.explore": "Patrimoniu Cultural",
    "about.explore.desc":
      "Prin explorarea ei ne va îmbogăți nu doar din punct de vedere spiritual, ci și cultural, ajutându-ne să înțelegem profunzimea credinței și a frumuseții artistice care au marcat această cetate eternă.",

    // Holy Places
    "about.holy.title": "Roma - Orașul Sfânt",
    "about.met.title": "Orașul Sfânt",
    "about.visit.title": "Ca buni creștini se vor vizita",
    "about.met.list": [
      "Apostolul Petru (+64 dHr Roma)",
      "Unde a murit Sf. Petru răstignit pe o Cruce cu capul în jos",
      "Apostolul Pavel (+67 dHr Roma) și unde a fost ucis pentru credința sa",
      "Unde a scris Apostolul Luca (medic, pictor)",
      "La ROMA sunt peste 900 de Biserici",
      "Capitala unde avem Moaște a tuturor Apostolilor și ale miilor de sfinți",
      "Pământ creștin udat cu sângele martirilor",
      "Și nu în ultimul rând cultură și artă (80% din patrimoniul mondial este în Italia). Tot ceea ce se va vizita este Patrimoniu al umanității",
    ],
    "about.visit.list": [
      "Catacombele - locul de închinare și cimitirul  primilor creștini. În terenul Romei sunt 60 de Catacombe diverse , peste 170km lungime , cu peste 750.000 de morminte.  Actual sunt deschise publicului doar 5 Catacombe",
      "Cele 7 BAZILICI ROMANE ( Construite imediat după Edictul Sf.Împărat Constantin de la Mediolanum - Milano din anul 313 , dăruind libertatea cultului creștin ) - La ROMA sunt peste 900 de Biserici",
      "COLOSEUL (72dHr-80dHr) locul Sfânt unde au murit mii de creștini , uciși în lupte cu gladiatori sau mâncați de fiare sălbatice",
      "PANTEONUL ( 27 ÎHr) 112-124. Ex: Templu al mai multor zeități , actual Biserică creștină, singura clădire din lume cu o gaură în tavan cu diametrul de 9 metri , care din sediu păgân devine clădire religioasă în anul 312",
      "VATICANUL ( 64 D Hr ) 1506-1626 , cel mai mic stat din lume ... unde este corpul patronului orașului Sfântul Petru",
    ],

    // Itinerary
    "itinerary.title": "Itinerarul Pelerinajului",
    "itinerary.description":
      "Un program complet de 6 zile prin cele mai importante locuri sfinte din Roma, cu ghid specializat și transport inclus.",
    "itinerary.days": "6 Zile",
    "itinerary.days.desc": "Program complet",
    "itinerary.people": "4-8 Persoane",
    "itinerary.people.desc": "Grup mic",
    "itinerary.hours": "8 Ore/Zi",
    "itinerary.hours.desc": "Program zilnic",
    "itinerary.basilicas": "7 Bazilici",
    "itinerary.basilicas.desc": "Locuri sfinte",
    "itinerary.day": "Ziua",
    "itinerary.transport.title": "Transport și Organizare",
    "itinerary.transport.options": "Opțiuni de Transport:",
    "itinerary.transport.program": "Program:",
    "itinerary.transport.info":
      "Durata circa 8 ore (depinde mult de cât de voioși sunteți, de câte fotografii veți face, de îmbulzeală, de numărul de pelerini ajunși înaintea noastră, de trafic, de orarul deschiderii obiectivelor turistice etc).",
    "itinerary.relics": "Relicve și Moaște",

    "itinerary.transport.options.list": [
      "<strong>4 persoane:</strong> Tesla Model S (NT-78-VIS)",
      "<strong>8 persoane:</strong> Microbuz VAN Opel Vivaro (NT-27-VIS)",
      "<strong>1 persoană:</strong> Harley Davidson Fortyeiht 1200 XL",
    ],
    "itinerary.transport.program.list": [
      "<strong>Plecare:</strong> ora 9:00 din hotel",
      "<strong>Durata:</strong> circa 8 ore pe zi",
      "<strong>Întoarcere:</strong> la locul de cazare",
      "<strong>Pentru slujitorii altarului:</strong> GRATIS",
    ],

    "itinerary.daysData": [
      {
        title: "Prima Zi prin Roma",
        highlights: [
          "Santa Croce in Gerusaleme",
          "Basilica San Giovanni",
          "Scala Santa",
          "Santa Maria Maggiore",
        ],
        locations: [
          {
            name: "Chiesa Santa Croce in Gerusaleme",
            description:
              "Prima din cele 7 Bazilici. Construită lângă reședință Sfintei Împărătesei Elena. Relicvele Pătimirii Domnului.",
            relics: [
              "Bucată din Crucea Mântuitorului",
              "Un cui care a străpuns pe Hristos",
              "Degetul Apostolului Toma",
            ],
          },
          {
            name: "Basilica San Giovanni",
            description:
              "A doua din cele 7 importante. Cea mai veche din Roma (318), Catedrala Romei.",
            relics: ["Botezătorul și Evanghelistul Ioan"],
          },
          {
            name: "Scala Santa",
            description:
              "Scara (28 de trepte) pe care Mântuitorul a urcat în Pretoriu la Pilat.",
            relics: ["Adusă prin poruncă Sfintei Împărătese Elena în anul 326"],
          },
        ],
      },
      {
        title: "A Doua Zi prin Roma",
        highlights: [
          "Basilica San Paolo",
          "Santa Maria degli Angeli",
          "Santa Prassede",
          "Coloseul",
        ],
        locations: [
          {
            name: "Basilica San Paolo Fuori le Mura",
            description:
              "Mormântul Apostolului Pavel. A patra din cele 7 Bazilici importante.",
            relics: ["Apostolul Pavel - cel mai influent misionar creștin"],
          },
          {
            name: "Chiesa Santa Prassede",
            description: "Locul martirelor surorile Pudenziana și Prassede.",
            relics: [
              "Moaște ale 2300 de mucenici (13 Papi)",
              "Coloana de care a fost legat Mântuitorul",
            ],
          },
          {
            name: "Colosseo",
            description:
              "Amfiteatru Flavio, locul Sfânt unde au murit mii de creștini.",
            relics: ["Construcție antică cea mai bine conservată (72-80 dHr)"],
          },
        ],
      },
      {
        title: "A Treia Zi prin Roma",
        highlights: [
          "Via Appia Antica",
          "Chiesa San Sebastiano",
          "Catacombe",
          "Isola Tiberina",
        ],
        locations: [
          {
            name: "Chiesa San Sebastiano",
            description:
              "A cincea din cele 7 importante. Biserică Constantiniană din sec. IV.",
            relics: [
              "Moaște de la Sf. Ap. Petru și Pavel",
              "Piatra cu amprenta picioarelor Mântuitorului",
            ],
          },
          {
            name: "Catacombe San Sebastiano",
            description:
              "Locul unde au fost înmormântați primii papi. La Roma sunt peste 60 de km de Catacombe.",
            relics: ["Primii episcopi creștini"],
          },
        ],
      },
      {
        title: "A Patra Zi prin Roma",
        highlights: [
          "San Lorenzo fuori le Mura",
          "Biserica Sacro Cuore di Gesù",
          "Sinagoga Evreiască",
          "Santa Maria in Trastevere",
          "San Francesco a Ripa",
          "Colina Aventino",
        ],
        locations: [
          {
            name: "Chiesa San Lorenzo fuori le Mura",
            description:
              "A șasea din cele 7 Bazilici. Trupul Arhidiaconului Laurențiu și Ștefan Protomartir, mormintele a 5 papi.",
            relics: [
              "Moaștele Sfântului Laurențiu",
              "Moaștele Sfântului Ștefan Protomartir",
              "Morminte ale papilor",
            ],
          },
          {
            name: "Biserica Sacro Cuore di Gesù",
            description: "Biserică gotică dedicată Inimii Sacre a lui Iisus.",
            relics: [],
          },
          {
            name: "Sinagoga Evreiască (exterior)",
            description: "Sinagoga impresionantă a Romei, construită în 1900.",
            relics: [],
          },
          {
            name: "Basilica Santa Maria in Trastevere",
            description:
              "Prima biserică dedicată Maicii Domnului, sec. IV, mozaic bizantin.",
            relics: [],
          },
          {
            name: "Chiesa San Francesco a Ripa (Trastevere)",
            description: "Biserică franciscană fondată în 1209.",
            relics: [],
          },
          {
            name: "Colina Aventino",
            description:
              "Panoramă asupra Romei, bisericile Sant'Alessio și Santa Sabina.",
            relics: [],
          },
        ],
      },
      {
        title: "A Cincea Zi prin Roma",
        highlights: [
          "Vaticanul",
          "Castel Sant'Angelo",
          "Colina Pincio",
          "Catacombe Santa Priscilla",
          "EUR Laghetto",
        ],
        locations: [
          {
            name: "Vatican - Basilica San Pietro",
            description:
              "A șaptea Bazilică. Adăpostește moaștele Sf. Petru și ale altor sfinți. Cupola proiectată de Michelangelo.",
            relics: [
              "Moaștele Sfântului Petru",
              "Moaștele apostolilor Simon și Iuda",
              "Moaștele Sf. Grigorie de Nazianz",
            ],
          },
          {
            name: "Castel Sant'Angelo",
            description:
              "Fost mausoleu imperial, astăzi muzeu. Legat de Vatican prin Passetto.",
            relics: [],
          },
          {
            name: "Colina Pincio și Gianicolo",
            description: "Vedere panoramică asupra Romei.",
            relics: [],
          },
          {
            name: "Catacombe Santa Priscilla",
            description:
              "Catacombe din sec. II-V, cu cea mai veche icoană a Maicii Domnului.",
            relics: ["Icoana Maicii Domnului (sec. II)"],
          },
          {
            name: "EUR Laghetto",
            description: "Zonă modernă, lac artificial.",
            relics: [],
          },
        ],
      },
      {
        title: "A Șasea Zi prin Roma",
        highlights: [
          "Columna lui Traian",
          "Forul Roman",
          "Monumentul Victorian",
          "Santa Maria Aracoeli",
          "Piazza Navona",
          "Piazza di Spagna",
          "Fontana di Trevi",
          "Pantheon",
          "Piazza del Popolo",
        ],
        locations: [
          {
            name: "Colonna di Traiano",
            description:
              "Coloana lui Traian, 113 dHr, descrie cucerirea Daciei.",
            relics: [],
          },
          {
            name: "Forul Roman",
            description:
              "Centrul vieții politice și religioase din Roma antică.",
            relics: [],
          },
          {
            name: "Monumento Vittoriano (Altarul Patriei)",
            description: "Monument impunător, construit între 1885–1935.",
            relics: [],
          },
          {
            name: "Chiesa Santa Maria in Aracoeli",
            description: "Biserică medievală, Altarul Cerului.",
            relics: [],
          },
          {
            name: "Piazza Navona",
            description:
              "Celebră pentru cele trei fântâni baroce și atmosfera vibrantă.",
            relics: [],
          },
          {
            name: "Piazza di Spagna",
            description: "Scările Trinità dei Monti, vedere panoramică.",
            relics: [],
          },
          {
            name: "Fontana di Trevi",
            description: "Cea mai celebră fântână barocă din lume.",
            relics: [],
          },
          {
            name: "Pantheon",
            description:
              "Templu antic, azi biserică; cea mai veche clădire în uz continuu.",
            relics: [],
          },
          {
            name: "Piazza del Popolo",
            description: "Piață renumită, poarta nordică a Romei.",
            relics: [],
          },
        ],
      },
    ],

    // Contact
    "contact.title": "Contact și Rezervări",
    "contact.description":
      "Pentru informații și rezervări, contactați-ne de Luni - Vineri: 9:00 - 19:00",
    "contact.info": "Informații de Contact",
    "contact.guide": "Ghidul Dumneavoastră",
    "contact.offer":
      "ÎNSOȚITOR TURISTIC în Capitala Roma și prin împrejmuiri , Teolog Pascaru Sorinel ,absolvent al Facultății de Teologie Ortodoxă Iustinian Patriarhul din București  ,actual masteran al aceeași Facultăți ,  bun cunoscător al Italiei , cu reședința neîntreruptă în orașul Roma de 29 de ani .",
    "contact.society": "Societatea ora et labora vă oferă",
    "contact.essence":
      "Esența Romei: oraș al cărui orice loc spune o poveste și unde orice piatră este un ecou al trecutului! Este un loc unde timpul pare să se oprească!",
    "contact.services": "Servicii Incluse:",
    "contact.book": "Rezervă Pelerinajul Acum",
    "contact.veni": "VENI VIDI VICI!",
    "contact.pilgrims": "Vă așteptăm să fim împreună pelerini spre mântuire!",

    "contact.spiritual.title": "Moștenire Spirituală",
    "contact.spiritual.desc":
      "Descoperă moștenirea spirituală și culturală care te așteaptă la Roma.",
    "contact.culture.title": "Întâlniri Culturale",
    "contact.culture.desc":
      "Experimentează punctul de întâlnire dintre artă, credință și istorie.",

    "contact.services.list": [
      "Ghid turistic specializat",
      "Transport de lux (Tesla/Microbuz)",
      "Preluare de la hotel",
      "Program flexibil de 8 ore",
      "Asistență la Aeroport",
      "Rezervări hoteluri la preț bun",
    ],

    // Sorin
    "sorin.university":
      'Absolvent al Facultății de Teologie Ortodoxă "Iustinian Patriarhul" din București, actual masterand',
    "sorin.experience":
      "Bun cunoscător al Italiei, cu reședința neîntreruptă în orașul Roma de 29 de ani",

    // Footer
    "footer.pilgrimage":
      "Pelerinaj spiritual și cultural în Roma, Capitala Eternă.",
    "footer.experience":
      "Cu 29 de ani experiență în organizarea de călătorii spirituale.",
    "footer.quick": "Contact Rapid",
    "footer.holy": "Locuri Sfinte",
    "footer.rights": "Toate drepturile rezervate.",
    "footer.quote": '"Roma = Amor"',
  },

  en: {
    // Navigation
    "nav.about": "About Rome",
    "nav.itinerary": "Itinerary",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero Section
    "hero.title": "ROME PILGRIMAGE CENTER",
    "hero.subtitle": "ROME TOURIST GUIDE",
    "hero.caput": "CAPUT MUNDI • CITTÀ ETERNA",
    "hero.eternal": "THE ETERNAL CITY",
    "hero.start": "Start Pilgrimage",
    "hero.learn": "Learn More",

    // About Rome
    "about.title": "Rome - The Eternal Capital",
    "about.description1":
      "Rome - Capital of Italy since 1870. The city located in the central-western part of the Italian Peninsula, on the banks of the Tiber River (Tevere), with an ancient history, being throughout the centuries the capital of the Roman Republic, the Roman Empire, the Roman Catholic Church and modern Italy.",
    "about.description2":
      "The world center of the Renaissance, Rome is one of the most visited capitals in the world. It is an open-air museum, a city full of history.",
    "about.description3":
      "Rome - also called the Capital of the world, the Eternal City, the City of seven hills - is one of the most popular destinations where culture and faith meet.",
    "about.pilgrimage": "Spiritual Pilgrimage",
    "about.pilgrimage.desc":
      "A spiritual and cultural pilgrimage here is more than a simple journey; it is an incursion into the heart of human history, art and spirituality.",
    "about.heritage": "Ancient Heritage",
    "about.heritage.desc":
      "With its ancient heritage, it is the place where every street, church and square reminds of the greatness of the civilization that influenced the whole world.",
    "about.explore": "Cultural Heritage",
    "about.explore.desc":
      "By exploring it, we will enrich ourselves not only spiritually, but also culturally, helping us to understand the depth of faith and artistic beauty that have marked this eternal city.",

    // Holy Places
    "about.holy.title": "Rome - The Holy City",
    "about.met.title": "The Holy City",
    "about.visit.title": "As good Christians, you will visit",
    "about.met.list": [
      "Apostle Peter (+64 AD, Rome)",
      "Where St. Peter died, crucified upside down",
      "Apostle Paul (+67 AD, Rome) and where he was killed for his faith",
      "Where Apostle Luke wrote (physician, painter)",
      "In ROME there are over 900 churches",
      "The capital where we have relics of all the Apostles and thousands of saints",
      "Christian land watered with the blood of martyrs",
      "And last but not least, culture and art (80% of the world’s heritage is in Italy). Everything visited is World Heritage",
    ],
    "about.visit.list": [
      "The Catacombs – the place of worship and burial of the first Christians. There are 60 different Catacombs in Rome, over 170km long, with over 750,000 tombs. Currently, only 5 Catacombs are open to the public.",
      "The 7 ROMAN BASILICAS (Built immediately after the Edict of Constantine from Milan in 313, granting freedom to Christian worship) – in ROME there are over 900 churches.",
      "THE COLOSSEUM (72–80 AD) – the holy place where thousands of Christians died, killed in gladiator fights or eaten by wild beasts.",
      "THE PANTHEON (27 BC / 112–124 AD): a temple of several deities, now a Christian church, the only building in the world with a 9-meter diameter hole in the ceiling, which from a pagan site became a religious building in 312.",
      "THE VATICAN (64 AD / 1506–1626), the smallest state in the world... where the body of the city’s patron, Saint Peter, is kept.",
    ],

    // Itinerary
    "itinerary.title": "Pilgrimage Itinerary",
    "itinerary.description":
      "A complete 6-day program through the most important holy places in Rome, with specialized guide and transport included.",
    "itinerary.days": "6 Days",
    "itinerary.days.desc": "Complete program",
    "itinerary.people": "4-8 People",
    "itinerary.people.desc": "Small group",
    "itinerary.hours": "8 Hours/Day",
    "itinerary.hours.desc": "Daily program",
    "itinerary.basilicas": "7 Basilicas",
    "itinerary.basilicas.desc": "Holy places",
    "itinerary.day": "Day",
    "itinerary.transport.title": "Transport and Organization",
    "itinerary.transport.options": "Transport Options:",
    "itinerary.transport.program": "Program:",
    "itinerary.transport.info":
      "Duration about 8 hours (it greatly depends on your energy, how many photos you take, crowds, the number of pilgrims who arrived before us, traffic, opening hours of tourist attractions, etc).",
    "itinerary.relics": "Relics",

    "itinerary.transport.options.list": [
      "<strong>4 people:</strong> Tesla Model S (NT-78-VIS)",
      "<strong>8 people:</strong> Opel Vivaro VAN Minibus (NT-27-VIS)",
      "<strong>1 person:</strong> Harley Davidson Fortyeight 1200 XL",
    ],
    "itinerary.transport.program.list": [
      "<strong>Departure:</strong> 9:00 AM from hotel",
      "<strong>Duration:</strong> about 8 hours per day",
      "<strong>Return:</strong> back to accommodation",
      "<strong>For altar servers:</strong> FREE",
    ],

    "itinerary.daysData": [
      {
        title: "First Day in Rome",
        highlights: [
          "Santa Croce in Gerusaleme",
          "Basilica San Giovanni",
          "Scala Santa",
          "Santa Maria Maggiore",
        ],
        locations: [
          {
            name: "Chiesa Santa Croce in Gerusaleme",
            description:
              "The first of the 7 Basilicas. Built near the residence of Saint Empress Helena. Relics of the Passion of the Lord.",
            relics: [
              "A piece of the Savior’s Cross",
              "A nail that pierced Christ",
              "The finger of Apostle Thomas",
            ],
          },
          {
            name: "Basilica San Giovanni",
            description:
              "The second of the 7 major basilicas. The oldest in Rome (318), Cathedral of Rome.",
            relics: ["John the Baptist and the Evangelist"],
          },
          {
            name: "Scala Santa",
            description:
              "The staircase (28 steps) that the Savior climbed in the Praetorium before Pilate.",
            relics: [
              "Brought at the command of Saint Empress Helena in the year 326",
            ],
          },
        ],
      },
      {
        title: "Second Day in Rome",
        highlights: [
          "Basilica San Paolo",
          "Santa Maria degli Angeli",
          "Santa Prassede",
          "Colosseum",
        ],
        locations: [
          {
            name: "Basilica San Paolo Fuori le Mura",
            description:
              "The tomb of Apostle Paul. The fourth of the 7 major basilicas.",
            relics: [
              "Apostle Paul - the most influential Christian missionary",
            ],
          },
          {
            name: "Chiesa Santa Prassede",
            description:
              "The place of martyrdom of sisters Pudenziana and Prassede.",
            relics: [
              "Relics of 2,300 martyrs (13 Popes)",
              "The column to which the Savior was bound",
            ],
          },
          {
            name: "Colosseum",
            description:
              "The Flavian Amphitheater, the holy place where thousands of Christians died.",
            relics: ["The best preserved ancient construction (72–80 AD)"],
          },
        ],
      },
      {
        title: "Third Day in Rome",
        highlights: [
          "Via Appia Antica",
          "Chiesa San Sebastiano",
          "Catacombs",
          "Isola Tiberina",
        ],
        locations: [
          {
            name: "Chiesa San Sebastiano",
            description:
              "The fifth of the 7 major basilicas. Constantinian church from the 4th century.",
            relics: [
              "Relics of Sts. Peter and Paul",
              "Stone with the imprint of the Savior’s feet",
            ],
          },
          {
            name: "Catacombe San Sebastiano",
            description:
              "The place where the first popes were buried. In Rome there are over 60 km of catacombs.",
            relics: ["The first Christian bishops"],
          },
        ],
      },
      {
        title: "Fourth Day in Rome",
        highlights: [
          "San Lorenzo fuori le Mura",
          "Sacro Cuore di Gesù Church",
          "Jewish Synagogue",
          "Santa Maria in Trastevere",
          "San Francesco a Ripa",
          "Aventine Hill",
        ],
        locations: [
          {
            name: "Chiesa San Lorenzo fuori le Mura",
            description:
              "The sixth of the 7 Basilicas. The body of Archdeacon Lawrence and Stephen the Protomartyr, tombs of 5 popes.",
            relics: [
              "Relics of St. Lawrence",
              "Relics of St. Stephen the Protomartyr",
              "Tombs of popes",
            ],
          },
          {
            name: "Sacro Cuore di Gesù Church",
            description:
              "Gothic church dedicated to the Sacred Heart of Jesus.",
            relics: [],
          },
          {
            name: "Jewish Synagogue (exterior)",
            description: "Rome’s impressive synagogue, built in 1900.",
            relics: [],
          },
          {
            name: "Basilica Santa Maria in Trastevere",
            description:
              "The first church dedicated to the Mother of God, 4th century, Byzantine mosaic.",
            relics: [],
          },
          {
            name: "Chiesa San Francesco a Ripa (Trastevere)",
            description: "Franciscan church founded in 1209.",
            relics: [],
          },
          {
            name: "Aventine Hill",
            description:
              "Panorama over Rome, churches of Sant'Alessio and Santa Sabina.",
            relics: [],
          },
        ],
      },
      {
        title: "Fifth Day in Rome",
        highlights: [
          "The Vatican",
          "Castel Sant'Angelo",
          "Pincio Hill",
          "Catacombs of Santa Priscilla",
          "EUR Lake",
        ],
        locations: [
          {
            name: "Vatican - Basilica San Pietro",
            description:
              "The seventh Basilica. Houses the relics of St. Peter and other saints. Dome designed by Michelangelo.",
            relics: [
              "Relics of St. Peter",
              "Relics of Apostles Simon and Jude",
              "Relics of St. Gregory of Nazianzus",
            ],
          },
          {
            name: "Castel Sant'Angelo",
            description:
              "Former imperial mausoleum, now a museum. Connected to the Vatican by the Passetto.",
            relics: [],
          },
          {
            name: "Pincio and Gianicolo Hill",
            description: "Panoramic view over Rome.",
            relics: [],
          },
          {
            name: "Catacombs of Santa Priscilla",
            description:
              "Catacombs from the 2nd–5th centuries, with the oldest icon of the Mother of God.",
            relics: ["Icon of the Mother of God (2nd century)"],
          },
          {
            name: "EUR Lake",
            description: "Modern area, artificial lake.",
            relics: [],
          },
        ],
      },
      {
        title: "Sixth Day in Rome",
        highlights: [
          "Trajan’s Column",
          "Roman Forum",
          "Vittoriano Monument",
          "Santa Maria Aracoeli",
          "Piazza Navona",
          "Piazza di Spagna",
          "Trevi Fountain",
          "Pantheon",
          "Piazza del Popolo",
        ],
        locations: [
          {
            name: "Trajan’s Column",
            description:
              "Trajan’s Column, 113 AD, depicts the conquest of Dacia.",
            relics: [],
          },
          {
            name: "Roman Forum",
            description:
              "The center of political and religious life in ancient Rome.",
            relics: [],
          },
          {
            name: "Vittoriano Monument (Altar of the Fatherland)",
            description: "Imposing monument, built between 1885–1935.",
            relics: [],
          },
          {
            name: "Chiesa Santa Maria in Aracoeli",
            description: "Medieval church, Altar of Heaven.",
            relics: [],
          },
          {
            name: "Piazza Navona",
            description:
              "Famous for its three baroque fountains and vibrant atmosphere.",
            relics: [],
          },
          {
            name: "Piazza di Spagna",
            description:
              "The Spanish Steps (Trinità dei Monti), panoramic view.",
            relics: [],
          },
          {
            name: "Trevi Fountain",
            description: "The most famous baroque fountain in the world.",
            relics: [],
          },
          {
            name: "Pantheon",
            description:
              "Ancient temple, now a church; the oldest continuously used building.",
            relics: [],
          },
          {
            name: "Piazza del Popolo",
            description: "Famous square, the northern gate of Rome.",
            relics: [],
          },
        ],
      },
    ],

    // Contact
    "contact.title": "Contact and Reservations",
    "contact.description":
      "For information and reservations, contact us Monday - Friday: 9:00 - 19:00",
    "contact.info": "Contact Information",
    "contact.guide": "Your Guide",
    "contact.offer":
      "TOUR GUIDE in the Capital Rome and surroundings, Theologian Pascaru Sorinel, graduate of the “Justinian the Patriarch” Orthodox Theology Faculty in Bucharest, currently a master’s student at the same Faculty, well acquainted with Italy, with uninterrupted residence in the city of Rome for 29 years.",
    "contact.society": "ORA ET LABORA SOCIETY",
    "contact.essence":
      "The essence of Rome: a city whose every place tells a story and where every stone is an echo of the past! It is a place where time seems to stop!",
    "contact.services": "Services Included:",
    "contact.book": "Book Pilgrimage Now",
    "contact.veni": "VENI VIDI VICI!",
    "contact.pilgrims":
      "We await you to be pilgrims together towards salvation!",

    "contact.spiritual.title": "Spiritual Heritage",
    "contact.spiritual.desc":
      "Discover the spiritual and cultural legacy that awaits in Rome.",
    "contact.culture.title": "Cultural Encounters",
    "contact.culture.desc":
      "Experience the meeting point of art, faith, and history.",

    "contact.services.list": [
      "Specialized tourist guide",
      "Luxury transport (Tesla/Minivan)",
      "Hotel pickup",
      "Flexible 8-hour schedule",
      "Airport assistance",
      "Good price hotel bookings",
    ],

    // Sorin
    "sorin.university":
      'Graduate of the "Justinian the Patriarch" Faculty of Orthodox Theology in Bucharest, currently a master’s student',
    "sorin.experience":
      "Well acquainted with Italy, with uninterrupted residence in the city of Rome for 29 years",

    // Footer
    "footer.pilgrimage":
      "Spiritual and cultural pilgrimage in Rome, the Eternal Capital.",
    "footer.experience":
      "With 29 years of experience in organizing spiritual journeys.",
    "footer.quick": "Quick Contact",
    "footer.holy": "Holy Places",
    "footer.rights": "All rights reserved.",
    "footer.quote": '"Rome = Love"',
  },

  it: {
    // Navigation
    "nav.about": "Su Roma",
    "nav.itinerary": "Itinerario",
    "nav.contact": "Contatto",
    "nav.book": "Prenota Ora",

    // Hero Section
    "hero.title": "CENTRO PELLEGRINAGGI ROMA",
    "hero.subtitle": "GUIDA TURISTICA ROMA",
    "hero.caput": "CAPUT MUNDI • CITTÀ ETERNA",
    "hero.eternal": "LA CITTÀ ETERNA",
    "hero.start": "Inizia Pellegrinaggio",
    "hero.learn": "Scopri di Più",

    // About Rome
    "about.title": "Roma - La Capitale Eterna",
    "about.description1":
      "Roma - Capitale d'Italia dal 1870. La città situata nella parte centro-occidentale della Penisola Italiana, sulle rive del fiume Tevere, con una storia antica, essendo attraverso i secoli la capitale della Repubblica Romana, dell'Impero Romano, della Chiesa Cattolica Romana e dell'Italia moderna.",
    "about.description2":
      "Il centro mondiale del Rinascimento, Roma è una delle capitali più visitate al mondo. È un museo a cielo aperto, una città ricca di storia.",
    "about.description3":
      "Roma - chiamata anche la Capitale del mondo, la Città eterna, la Città dei sette colli - è una delle destinazioni più popolari dove cultura e fede si incontrano.",
    "about.pilgrimage": "Pellegrinaggio Spirituale",
    "about.pilgrimage.desc":
      "Un pellegrinaggio spirituale e culturale qui è più di un semplice viaggio; è un'incursione nel cuore della storia, dell'arte e della spiritualità umana.",
    "about.heritage": "Eredità Antica",
    "about.heritage.desc":
      "Con la sua antica eredità, è il luogo dove ogni strada, chiesa e piazza ricorda la grandezza della civiltà che ha influenzato il mondo intero.",
    "about.explore": "Patrimonio Culturale",
    "about.explore.desc":
      "Esplorandola, ci arricchiremo non solo spiritualmente, ma anche culturalmente, aiutandoci a comprendere la profondità della fede e della bellezza artistica che hanno segnato questa città eterna.",

    // Holy Places
    "about.holy.title": "Roma - La Città Santa",
    "about.met.title": "La Città Santa",
    "about.visit.title": "Come buoni cristiani si visiterà",
    "about.met.list": [
      "La città dove l'Apostolo Pietro (+64 d.C., Roma) ha incontrato il Salvatore",
      "Dove San Pietro è morto, crocifisso a testa in giù",
      "I luoghi dove l'Apostolo Paolo (+67 d.C., Roma) ha viaggiato e dove è stato ucciso per la sua fede",
      "Dove l'Apostolo Luca (9–93 d.C.), medico e pittore, ha scritto il Vangelo e gli Atti degli Apostoli",
      "A ROMA ci sono oltre 900 chiese",
      "La capitale dove abbiamo reliquie di tutti gli Apostoli e di migliaia di santi",
      "Terra cristiana bagnata dal sangue dei martiri",
      "E infine cultura e arte (l'80% del patrimonio mondiale si trova in Italia). Tutto ciò che visiterai è Patrimonio dell'Umanità",
    ],
    "about.visit.list": [
      "Le Catacombe – luogo di culto e cimitero dei primi cristiani. A Roma ci sono 60 Catacombe diverse, per oltre 170 km di lunghezza, con più di 750.000 tombe. Attualmente solo 5 Catacombe sono aperte al pubblico.",
      "Le 7 BASILICHE ROMANE (costruite subito dopo l'Editto dell'Imperatore Costantino a Milano nel 313 d.C., che concedeva la libertà di culto cristiano) – a ROMA ci sono oltre 900 chiese.",
      "IL COLOSSEO (72–80 d.C.), il luogo santo dove sono morti migliaia di cristiani, uccisi nei combattimenti tra gladiatori o sbranati dalle belve.",
      "IL PANTHEON (27 a.C. / 112–124 d.C.): tempio di varie divinità, ora chiesa cristiana, unico edificio al mondo con un foro di 9 metri di diametro nel soffitto, che da edificio pagano divenne luogo di culto nel 312 d.C.",
      "IL VATICANO (64 d.C. / 1506–1626), il più piccolo stato del mondo... dove si trova il corpo del patrono della città, San Pietro.",
    ],

    // Itinerary
    "itinerary.title": "Itinerario del Pellegrinaggio",
    "itinerary.description":
      "Un programma completo di 6 giorni attraverso i luoghi santi più importanti di Roma, con guida specializzata e trasporto incluso.",
    "itinerary.days": "6 Giorni",
    "itinerary.days.desc": "Programma completo",
    "itinerary.people": "4-8 Persone",
    "itinerary.people.desc": "Piccolo gruppo",
    "itinerary.hours": "8 Ore/Giorno",
    "itinerary.hours.desc": "Programma giornaliero",
    "itinerary.basilicas": "7 Basiliche",
    "itinerary.basilicas.desc": "Luoghi santi",
    "itinerary.day": "Giorno",
    "itinerary.transport.title": "Trasporto e Organizzazione",
    "itinerary.transport.options": "Opzioni di Trasporto:",
    "itinerary.transport.program": "Programma:",
    "itinerary.transport.info":
      "Duration about 8 hours (it greatly depends on your energy, how many photos you take, crowds, the number of pilgrims who arrived before us, traffic, opening hours of tourist attractions, etc).",
    "itinerary.relics": "Reliquie",

    "itinerary.transport.options.list": [
      "<strong>4 persone:</strong> Tesla Model S (NT-78-VIS)",
      "<strong>8 persone:</strong> Minibus VAN Opel Vivaro (NT-27-VIS)",
      "<strong>1 persona:</strong> Harley Davidson Fortyeight 1200 XL",
    ],
    "itinerary.transport.program.list": [
      "<strong>Partenza:</strong> ore 9:00 dall’hotel",
      "<strong>Durata:</strong> circa 8 ore al giorno",
      "<strong>Rientro:</strong> presso l’alloggio",
      "<strong>Per i servitori dell’altare:</strong> GRATIS",
    ],

    "itinerary.daysData": [
      {
        title: "Primo Giorno a Roma",
        highlights: [
          "Santa Croce in Gerusalemme",
          "Basilica San Giovanni",
          "Scala Santa",
          "Santa Maria Maggiore",
        ],
        locations: [
          {
            name: "Chiesa Santa Croce in Gerusalemme",
            description:
              "La prima delle 7 Basiliche. Costruita vicino alla residenza di Sant’Elena. Reliquie della Passione del Signore.",
            relics: [
              "Un pezzo della Croce del Salvatore",
              "Un chiodo che ha trafitto Cristo",
              "Il dito dell’Apostolo Tommaso",
            ],
          },
          {
            name: "Basilica San Giovanni",
            description:
              "La seconda delle 7 più importanti. La più antica di Roma (318), cattedrale di Roma.",
            relics: ["Giovanni Battista e l’Evangelista"],
          },
          {
            name: "Scala Santa",
            description:
              "La scala (28 gradini) che il Salvatore salì nel Pretorio davanti a Pilato.",
            relics: ["Portata per ordine di Sant’Elena nell’anno 326"],
          },
        ],
      },
      {
        title: "Secondo Giorno a Roma",
        highlights: [
          "Basilica San Paolo",
          "Santa Maria degli Angeli",
          "Santa Prassede",
          "Colosseo",
        ],
        locations: [
          {
            name: "Basilica San Paolo Fuori le Mura",
            description:
              "Tomba dell’Apostolo Paolo. La quarta delle 7 Basiliche più importanti.",
            relics: ["Apostolo Paolo – il più influente missionario cristiano"],
          },
          {
            name: "Chiesa Santa Prassede",
            description:
              "Luogo del martirio delle sorelle Pudenziana e Prassede.",
            relics: [
              "Reliquie di 2300 martiri (13 Papi)",
              "La colonna a cui fu legato il Salvatore",
            ],
          },
          {
            name: "Colosseo",
            description:
              "Anfiteatro Flavio, luogo santo dove morirono migliaia di cristiani.",
            relics: ["Costruzione antica meglio conservata (72–80 d.C.)"],
          },
        ],
      },
      {
        title: "Terzo Giorno a Roma",
        highlights: [
          "Via Appia Antica",
          "Chiesa San Sebastiano",
          "Catacombe",
          "Isola Tiberina",
        ],
        locations: [
          {
            name: "Chiesa San Sebastiano",
            description:
              "La quinta delle 7 principali. Chiesa costantiniana del IV secolo.",
            relics: [
              "Reliquie dei Santi Pietro e Paolo",
              "Pietra con l’impronta dei piedi del Salvatore",
            ],
          },
          {
            name: "Catacombe San Sebastiano",
            description:
              "Luogo dove furono sepolti i primi papi. A Roma ci sono oltre 60 km di catacombe.",
            relics: ["I primi vescovi cristiani"],
          },
        ],
      },
      {
        title: "Quarto Giorno a Roma",
        highlights: [
          "San Lorenzo fuori le Mura",
          "Chiesa Sacro Cuore di Gesù",
          "Sinagoga Ebraica",
          "Santa Maria in Trastevere",
          "San Francesco a Ripa",
          "Colle Aventino",
        ],
        locations: [
          {
            name: "Chiesa San Lorenzo fuori le Mura",
            description:
              "La sesta delle 7 Basiliche. Corpo dell’Arcidiacono Lorenzo e di Stefano il Protomartire, tombe di 5 papi.",
            relics: [
              "Reliquie di San Lorenzo",
              "Reliquie di Santo Stefano Protomartire",
              "Tombe dei papi",
            ],
          },
          {
            name: "Chiesa Sacro Cuore di Gesù",
            description: "Chiesa gotica dedicata al Sacro Cuore di Gesù.",
            relics: [],
          },
          {
            name: "Sinagoga Ebraica (esterno)",
            description: "Impressionante sinagoga di Roma, costruita nel 1900.",
            relics: [],
          },
          {
            name: "Basilica Santa Maria in Trastevere",
            description:
              "La prima chiesa dedicata alla Madonna, IV secolo, mosaico bizantino.",
            relics: [],
          },
          {
            name: "Chiesa San Francesco a Ripa (Trastevere)",
            description: "Chiesa francescana fondata nel 1209.",
            relics: [],
          },
          {
            name: "Colle Aventino",
            description:
              "Panorama su Roma, chiese di Sant’Alessio e Santa Sabina.",
            relics: [],
          },
        ],
      },
      {
        title: "Quinto Giorno a Roma",
        highlights: [
          "Vaticano",
          "Castel Sant'Angelo",
          "Colle Pincio",
          "Catacombe Santa Priscilla",
          "Laghetto EUR",
        ],
        locations: [
          {
            name: "Vaticano – Basilica San Pietro",
            description:
              "La settima Basilica. Custodisce le reliquie di San Pietro e altri santi. Cupola progettata da Michelangelo.",
            relics: [
              "Reliquie di San Pietro",
              "Reliquie degli Apostoli Simone e Giuda",
              "Reliquie di San Gregorio di Nazianzo",
            ],
          },
          {
            name: "Castel Sant'Angelo",
            description:
              "Ex mausoleo imperiale, oggi museo. Collegato al Vaticano tramite il Passetto.",
            relics: [],
          },
          {
            name: "Colle Pincio e Gianicolo",
            description: "Vista panoramica su Roma.",
            relics: [],
          },
          {
            name: "Catacombe Santa Priscilla",
            description:
              "Catacombe del II–V secolo, con l’icona più antica della Madonna.",
            relics: ["Icona della Madonna (II secolo)"],
          },
          {
            name: "Laghetto EUR",
            description: "Zona moderna, lago artificiale.",
            relics: [],
          },
        ],
      },
      {
        title: "Sesto Giorno a Roma",
        highlights: [
          "Colonna di Traiano",
          "Foro Romano",
          "Monumento Vittoriano",
          "Santa Maria Aracoeli",
          "Piazza Navona",
          "Piazza di Spagna",
          "Fontana di Trevi",
          "Pantheon",
          "Piazza del Popolo",
        ],
        locations: [
          {
            name: "Colonna di Traiano",
            description:
              "Colonna di Traiano, 113 d.C., descrive la conquista della Dacia.",
            relics: [],
          },
          {
            name: "Foro Romano",
            description:
              "Centro della vita politica e religiosa dell’antica Roma.",
            relics: [],
          },
          {
            name: "Monumento Vittoriano (Altare della Patria)",
            description:
              "Imponente monumento, costruito tra il 1885 e il 1935.",
            relics: [],
          },
          {
            name: "Chiesa Santa Maria in Aracoeli",
            description: "Chiesa medievale, Altare del Cielo.",
            relics: [],
          },
          {
            name: "Piazza Navona",
            description:
              "Celebre per le tre fontane barocche e l’atmosfera vivace.",
            relics: [],
          },
          {
            name: "Piazza di Spagna",
            description: "La scalinata di Trinità dei Monti, vista panoramica.",
            relics: [],
          },
          {
            name: "Fontana di Trevi",
            description: "La più famosa fontana barocca del mondo.",
            relics: [],
          },
          {
            name: "Pantheon",
            description:
              "Tempio antico, oggi chiesa; l’edificio più antico ancora in uso continuo.",
            relics: [],
          },
          {
            name: "Piazza del Popolo",
            description: "Piazza famosa, la porta nord di Roma.",
            relics: [],
          },
        ],
      },
    ],

    // Contact
    "contact.title": "Contatto e Prenotazioni",
    "contact.description":
      "Per informazioni e prenotazioni, contattaci Lunedì - Venerdì: 9:00 - 19:00",
    "contact.info": "Informazioni di Contatto",
    "contact.guide": "La Tua Guida",
    "contact.offer":
      "ACCOMPAGNATORE TURISTICO nella Capitale Roma e dintorni, Teologo Pascaru Sorinel, laureato presso la Facoltà di Teologia Ortodossa “Giustiniano il Patriarca” di Bucarest, attualmente studente magistrale presso la stessa Facoltà, profondo conoscitore dell’Italia, residente ininterrottamente nella città di Roma da 29 anni.",
    "contact.society": "SOCIETÀ ORA ET LABORA",
    "contact.essence":
      "L'essenza di Roma: una città in cui ogni luogo racconta una storia e dove ogni pietra è un'eco del passato! È un luogo dove il tempo sembra fermarsi!",
    "contact.services": "Servizi Inclusi:",
    "contact.book": "Prenota Pellegrinaggio Ora",
    "contact.veni": "VENI VIDI VICI!",
    "contact.pilgrims":
      "Vi aspettiamo per essere pellegrini insieme verso la salvezza!",

    "contact.spiritual.title": "Eredità Spirituale",
    "contact.spiritual.desc":
      "Scopri l’eredità spirituale e culturale che ti aspetta a Roma.",
    "contact.culture.title": "Incontri Culturali",
    "contact.culture.desc": "Vivi il punto d’incontro tra arte, fede e storia.",

    "contact.services.list": [
      "Guida turistica specializzata",
      "Trasporto di lusso (Tesla/Minivan)",
      "Prelievo dall’hotel",
      "Programma flessibile di 8 ore",
      "Assistenza in aeroporto",
      "Prenotazioni hotel a buon prezzo",
    ],

    // Sorin
    "sorin.university":
      'Laureato presso la Facoltà di Teologia Ortodossa "Giustiniano il Patriarca" di Bucarest, attualmente studente magistrale',
    "sorin.experience":
      "Ottima conoscenza dell’Italia, con residenza ininterrotta nella città di Roma da 29 anni",

    // Footer
    "footer.pilgrimage":
      "Pellegrinaggio spirituale e culturale a Roma, la Capitale Eterna.",
    "footer.experience":
      "Con 29 anni di esperienza nell'organizzazione di viaggi spirituali.",
    "footer.quick": "Contatto Rapido",
    "footer.holy": "Luoghi Santi",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.quote": '"Roma = Amore"',
  },
};
