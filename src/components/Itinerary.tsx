import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Itinerary = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const { t } = useLanguage();

  const itineraryDays = [
    {
      day: 1,
      title: "Prima Zi prin Roma",
      highlights: ["Santa Croce in Gerusaleme", "Basilica San Giovanni", "Scala Santa", "Santa Maria Maggiore"],
      locations: [
        {
          name: "Chiesa Santa Croce in Gerusaleme",
          description: "Prima din cele 7 Bazilici. Construită lângă reședință Sfintei Împărătesei Elena. Relicvele Pătimirii Domnului.",
          relics: ["Bucată din Crucea Mântuitorului", "Un cui care a străpuns pe Hristos", "Degetul Apostolului Toma"]
        },
        {
          name: "Basilica San Giovanni",
          description: "A doua din cele 7 importante. Cea mai veche din Roma (318), Catedrala Romei.",
          relics: ["Botezătorul și Evanghelistul Ioan"]
        },
        {
          name: "Scala Santa",
          description: "Scara (28 de trepte) pe care Mântuitorul a urcat în Pretoriu la Pilat.",
          relics: ["Adusă prin poruncă Sfintei Împărătese Elena în anul 326"]
        }
      ]
    },
    {
      day: 2,
      title: "A Doua Zi prin Roma",
      highlights: ["Basilica San Paolo", "Santa Maria degli Angeli", "Santa Prassede", "Coloseul"],
      locations: [
        {
          name: "Basilica San Paolo Fuori le Mura",
          description: "Mormântul Apostolului Pavel. A patra din cele 7 Bazilici importante.",
          relics: ["Apostolul Pavel - cel mai influent misionar creștin"]
        },
        {
          name: "Chiesa Santa Prassede",
          description: "Locul martirelor surorile Pudenziana și Prassede.",
          relics: ["Moaște ale 2300 de mucenici (13 Papi)", "Coloana de care a fost legat Mântuitorul"]
        },
        {
          name: "Colosseo",
          description: "Amfiteatru Flavio, locul Sfânt unde au murit mii de creștini.",
          relics: ["Construcție antică cea mai bine conservată (72-80 dHr)"]
        }
      ]
    },
    {
      day: 3,
      title: "A Treia Zi prin Roma",
      highlights: ["Via Appia Antica", "Chiesa San Sebastiano", "Catacombe", "Isola Tiberina"],
      locations: [
        {
          name: "Chiesa San Sebastiano",
          description: "A cincea din cele 7 importante. Biserică Constantiniană din sec. IV.",
          relics: ["Moaște de la Sf. Ap. Petru și Pavel", "Piatra cu amprenta picioarelor Mântuitorului"]
        },
        {
          name: "Catacombe San Sebastiano",
          description: "Locul unde au fost înmormântați primii papi. La Roma sunt peste 60 de km de Catacombe.",
          relics: ["Primii episcopi creștini"]
        }
      ]
    },
    {
      day: 4,
      title: "A Patra Zi prin Roma",
      highlights: [
        "San Lorenzo fuori le Mura", "Biserica Sacro Cuore di Gesù", "Sinagoga Evreiască",
        "Santa Maria in Trastevere", "San Francesco a Ripa", "Colina Aventino"
      ],
      locations: [
        {
          name: "Chiesa San Lorenzo fuori le Mura",
          description: "A șasea din cele 7 Bazilici. Trupul Arhidiaconului Laurențiu și Ștefan Protomartir, mormintele a 5 papi.",
          relics: ["Moaștele Sfântului Laurențiu", "Moaștele Sfântului Ștefan Protomartir", "Morminte ale papilor"]
        },
        {
          name: "Biserica Sacro Cuore di Gesù",
          description: "Biserică gotică dedicată Inimii Sacre a lui Iisus.",
          relics: []
        },
        {
          name: "Sinagoga Evreiască (exterior)",
          description: "Sinagoga impresionantă a Romei, construită în 1900.",
          relics: []
        },
        {
          name: "Basilica Santa Maria in Trastevere",
          description: "Prima biserică dedicată Maicii Domnului, sec. IV, mozaic bizantin.",
          relics: []
        },
        {
          name: "Chiesa San Francesco a Ripa (Trastevere)",
          description: "Biserică franciscană fondată în 1209.",
          relics: []
        },
        {
          name: "Colina Aventino",
          description: "Panoramă asupra Romei, bisericile Sant'Alessio și Santa Sabina.",
          relics: []
        }
      ]
    },
    {
      day: 5,
      title: "A Cincea Zi prin Roma",
      highlights: [
        "Vaticanul", "Castel Sant'Angelo", "Colina Pincio", "Catacombe Santa Priscilla", "EUR Laghetto"
      ],
      locations: [
        {
          name: "Vatican - Basilica San Pietro",
          description: "A șaptea Bazilică. Adăpostește moaștele Sf. Petru și ale altor sfinți. Cupola proiectată de Michelangelo.",
          relics: ["Moaștele Sfântului Petru", "Moaștele apostolilor Simon și Iuda", "Moaștele Sf. Grigorie de Nazianz"]
        },
        {
          name: "Castel Sant'Angelo",
          description: "Fost mausoleu imperial, astăzi muzeu. Legat de Vatican prin Passetto.",
          relics: []
        },
        {
          name: "Colina Pincio și Gianicolo",
          description: "Vedere panoramică asupra Romei.",
          relics: []
        },
        {
          name: "Catacombe Santa Priscilla",
          description: "Catacombe din sec. II-V, cu cea mai veche icoană a Maicii Domnului.",
          relics: ["Icoana Maicii Domnului (sec. II)"]
        },
        {
          name: "EUR Laghetto",
          description: "Zonă modernă, lac artificial.",
          relics: []
        }
      ]
    },
    {
      day: 6,
      title: "A Șasea Zi prin Roma",
      highlights: [
        "Columna lui Traian", "Forul Roman", "Monumentul Victorian", "Santa Maria Aracoeli", "Piazza Navona", "Piazza di Spagna", "Fontana di Trevi", "Pantheon", "Piazza del Popolo"
      ],
      locations: [
        {
          name: "Colonna di Traiano",
          description: "Coloana lui Traian, 113 dHr, descrie cucerirea Daciei.",
          relics: []
        },
        {
          name: "Forul Roman",
          description: "Centrul vieții politice și religioase din Roma antică.",
          relics: []
        },
        {
          name: "Monumento Vittoriano (Altarul Patriei)",
          description: "Monument impunător, construit între 1885–1935.",
          relics: []
        },
        {
          name: "Chiesa Santa Maria in Aracoeli",
          description: "Biserică medievală, Altarul Cerului.",
          relics: []
        },
        {
          name: "Piazza Navona",
          description: "Celebră pentru cele trei fântâni baroce și atmosfera vibrantă.",
          relics: []
        },
        {
          name: "Piazza di Spagna",
          description: "Scările Trinità dei Monti, vedere panoramică.",
          relics: []
        },
        {
          name: "Fontana di Trevi",
          description: "Cea mai celebră fântână barocă din lume.",
          relics: []
        },
        {
          name: "Pantheon",
          description: "Templu antic, azi biserică; cea mai veche clădire în uz continuu.",
          relics: []
        },
        {
          name: "Piazza del Popolo",
          description: "Piață renumită, poarta nordică a Romei.",
          relics: []
        }
      ]
    },
  ];

  return (
    <section id="itinerariu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-roman-deep mb-6">
            {t('itinerary.title')}
          </h2>
          <div className="w-24 h-1 bg-roman-gold mx-auto mb-8"></div>
          <p className="text-lg text-roman-deep/80 max-w-3xl mx-auto">
            {t('itinerary.description')}
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">{t('itinerary.days')}</h3>
              <p className="text-roman-deep/70">{t('itinerary.days.desc')}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">{t('itinerary.people')}</h3>
              <p className="text-roman-deep/70">{t('itinerary.people.desc')}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">{t('itinerary.hours')}</h3>
              <p className="text-roman-deep/70">{t('itinerary.hours.desc')}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">{t('itinerary.basilicas')}</h3>
              <p className="text-roman-deep/70">{t('itinerary.basilicas.desc')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map((day) => (
            <Button
              key={day}
              variant={selectedDay === day ? "default" : "outline"}
              className={`px-6 py-3 ${
                selectedDay === day 
                  ? "bg-roman-gold hover:bg-roman-terracotta text-white" 
                  : "border-roman-gold text-roman-gold hover:bg-roman-gold hover:text-white"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {t('itinerary.day')} {day}
            </Button>
          ))}
        </div>

        {/* Selected Day Content */}
        {itineraryDays.map((day) => (
          selectedDay === day.day && (
            <div key={day.day} className="animate-fade-in">
              <Card className="border-roman-stone/20 shadow-lg">
                <CardHeader className="bg-roman-stone/10">
                  <CardTitle className="font-playfair text-2xl text-roman-deep text-center">
                    {day.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {day.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="bg-roman-gold/10 text-roman-deep">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {day.locations.map((location, index) => (
                      <div key={index} className="border-l-4 border-roman-gold pl-6">
                        <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-3">
                          {location.name}
                        </h4>
                        <p className="text-roman-deep/80 mb-4 leading-relaxed">
                          {location.description}
                        </p>
                        {location.relics && (
                          <div>
                            <h5 className="font-semibold text-roman-deep mb-2">Relicve și Moaște:</h5>
                            <ul className="list-disc list-inside text-roman-deep/70 space-y-1">
                              {location.relics.map((relic, relicIndex) => (
                                <li key={relicIndex}>{relic}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        ))}

    
      </div>
    </section>
  );
};
