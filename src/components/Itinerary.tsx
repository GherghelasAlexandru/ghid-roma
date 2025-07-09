import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Itinerary = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const { t, getItineraryDays } = useLanguage();

  // Fetch the itinerary days (translated) from the language context
  const itineraryDays = getItineraryDays();

  return (
    <section id="itinerariu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-roman-deep mb-6">
            {t("itinerary.title")}
          </h2>
          <div className="w-24 h-1 bg-roman-gold mx-auto mb-8"></div>
          <p className="text-lg text-roman-deep/80 max-w-3xl mx-auto">
            {t("itinerary.description")}
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                {t("itinerary.days")}
              </h3>
              <p className="text-roman-deep/70">{t("itinerary.days.desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                {t("itinerary.people")}
              </h3>
              <p className="text-roman-deep/70">{t("itinerary.people.desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                {t("itinerary.hours")}
              </h3>
              <p className="text-roman-deep/70">{t("itinerary.hours.desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-roman-stone/20">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-roman-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                {t("itinerary.basilicas")}
              </h3>
              <p className="text-roman-deep/70">
                {t("itinerary.basilicas.desc")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {itineraryDays.map((day, idx) => (
            <Button
              key={idx + 1}
              variant={selectedDay === idx + 1 ? "default" : "outline"}
              className={`px-6 py-3 ${
                selectedDay === idx + 1
                  ? "bg-roman-gold hover:bg-roman-terracotta text-white"
                  : "border-roman-gold text-roman-gold hover:bg-roman-gold hover:text-white"
              }`}
              onClick={() => setSelectedDay(idx + 1)}
            >
              {t("itinerary.day")} {idx + 1}
            </Button>
          ))}
        </div>

        {/* Selected Day Content */}
        {itineraryDays.map(
          (day, idx) =>
            selectedDay === idx + 1 && (
              <div key={idx} className="animate-fade-in">
                <Card className="border-roman-stone/20 shadow-lg">
                  <CardHeader className="bg-roman-stone/10">
                    <CardTitle className="font-playfair text-2xl text-roman-deep text-center">
                      {day.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {day.highlights.map((highlight, hIdx) => (
                        <Badge
                          key={hIdx}
                          variant="secondary"
                          className="bg-roman-gold/10 text-roman-deep"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {day.locations.map((location, locIdx) => (
                        <div
                          key={locIdx}
                          className="border-l-4 border-roman-gold pl-6"
                        >
                          <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-3">
                            {location.name}
                          </h4>
                          <p className="text-roman-deep/80 mb-4 leading-relaxed">
                            {location.description}
                          </p>
                          {location.relics && location.relics.length > 0 && (
                            <div>
                              <h5 className="font-semibold text-roman-deep mb-2">
                                {t("itinerary.relics") || "Relicve și Moaște:"}
                              </h5>
                              <ul className="list-disc list-inside text-roman-deep/70 space-y-1">
                                {location.relics.map((relic, rIdx) => (
                                  <li key={rIdx}>{relic}</li>
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
        )}
      </div>
    </section>
  );
};
