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
    }
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
          {[1, 2, 3].map((day) => (
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

        {/* Transport Info */}
        <div className="mt-12 bg-roman-marble rounded-lg p-8">
          <h3 className="font-playfair text-2xl font-bold text-roman-deep mb-6 text-center">
            {t('itinerary.transport.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-roman-deep mb-4">{t('itinerary.transport.options')}</h4>
              <ul className="space-y-2 text-roman-deep/80">
                <li>• <strong>4 persoane:</strong> Tesla Model S (NT-78-VIS)</li>
                <li>• <strong>8 persoane:</strong> Microbuz VAN Opel Vivaro (NT-27-VIS)</li>
                <li>• <strong>1 persoană:</strong> Harley Davidson Fortyeiht 1200 XL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-roman-deep mb-4">{t('itinerary.transport.program')}</h4>
              <ul className="space-y-2 text-roman-deep/80">
                <li>• <strong>Plecare:</strong> ora 9:00 din hotel</li>
                <li>• <strong>Durata:</strong> circa 8 ore pe zi</li>
                <li>• <strong>Întoarcere:</strong> la locul de cazare</li>
                <li>• <strong>Pentru slujitorii altarului:</strong> GRATIS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
