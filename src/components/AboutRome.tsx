
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Church, Crown, Landmark,   UserRoundSearch, Car, Hotel, Clock, Plane, MapPin, BadgePercent } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const servicesCards = [
  {
    icon: UserRoundSearch,
    key: 0, 
    color: "text-roman-gold",
  },
  {
    icon: Car,
    key: 1,
    color: "text-roman-gold",
  },
  {
    icon: Hotel,
    key: 2,
    color: "text-roman-gold",
  },
  {
    icon: Clock,
    key: 3,
    color: "text-roman-gold",
  },
  {
    icon: Plane,
    key: 4,
    color: "text-roman-gold",
  },
  {
    icon: BadgePercent,
    key: 5,
    color: "text-roman-gold",
  },
];

export const AboutRome = () => {
  const { t, ta } = useLanguage();

  const optionsRaw = ta('itinerary.transport.options.list');
  const programRaw = ta('itinerary.transport.program.list');
  const servicesRaw = ta('contact.services.list');

  // Only use map if it's actually an array
  const options = Array.isArray(optionsRaw) ? optionsRaw : [];
  const program = Array.isArray(programRaw) ? programRaw : [];
  const services = Array.isArray(servicesRaw) ? servicesRaw : [];

  return (
    <section id="despre" className="py-20 bg-roman-marble">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-roman-deep mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-roman-gold mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-roman-deep">
              {t('about.description1')}
            </p>
            <p className="text-lg leading-relaxed text-roman-deep">
              {t('about.description2')}
            </p>
            <p className="text-lg leading-relaxed text-roman-deep">
              {t('about.description3')}
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-roman-stone/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Church className="h-8 w-8 text-roman-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                      {t('about.pilgrimage')}
                    </h3>
                    <p className="text-roman-deep/80">
                      {t('about.pilgrimage.desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-roman-stone/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Crown className="h-8 w-8 text-roman-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                      {t('about.heritage')}
                    </h3>
                    <p className="text-roman-deep/80">
                      {t('about.heritage.desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-roman-stone/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Landmark className="h-8 w-8 text-roman-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                      {t('about.explore')}
                    </h3>
                    <p className="text-roman-deep/80">
                      {t('about.explore.desc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <CardHeader className="bg-roman-gold text-white">
                <CardTitle className="font-playfair text-3xl text-center">
                  {t('about.holy.title')}
                </CardTitle>
              </CardHeader>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-4">
                {t('about.met.title')}
              </h4>
              <ul className="space-y-2 text-roman-deep">
              {Array.isArray(ta('about.met.list')) &&
                (ta('about.met.list') as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
            </ul>
            </div>

            <div>
              <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-4">
                {t('about.visit.title')}
              </h4>
              <ul className="space-y-2 text-roman-deep">
                  {Array.isArray(ta('about.visit.list')) &&
                    (ta('about.visit.list') as string[]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg mt-12">
          <CardContent className="p-8">
        <div className="mx-auto bg-roman-marble/70 rounded-xl border border-roman-gold/20 px-6 py-6 shadow text-roman-deep/90 mb-8 relative">
          <UserRoundSearch className="w-8 h-8 text-roman-gold absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 shadow" />
          <p className="italic font-playfair text-lg md:text-xl leading-relaxed text-center">
            {t('contact.offer')}
          </p>
        </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {servicesCards.map(({ icon: Icon, key, color }, idx) => (
                <Card
                  key={idx}
                  className="w-full h-full rounded-2xl bg-roman-marble shadow-md hover:shadow-xl border-0 flex flex-col items-center p-6 transition-all duration-200 hover:scale-105"
                >
                  <div className="mb-4 flex justify-center">
                    <Icon className={`w-10 h-10 ${color}`} strokeWidth={2} />
                  </div>
                  <div className="text-lg font-semibold text-roman-deep text-center leading-snug">
                    {services[key]}
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </div>

        {/* Transport Info */}
        <div className="bg-white rounded-xl p-8 shadow-lg mt-12">
          <div className="flex flex-col items-center mb-8">
            <Car className="w-10 h-10 text-roman-gold mb-2" />
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-roman-deep text-center">
              {t('itinerary.transport.title')}
            </h3>
            <div className="w-24 h-1 bg-roman-gold/70 rounded-full mt-2 mb-0"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transport Options as Cards */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-roman-deep mb-2">{t('itinerary.transport.options')}</h4>
              {options.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-roman-marble/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                  <span className="text-base text-roman-deep/90 leading-snug" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>

            {/* Program as Cards */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-roman-deep mb-2">{t('itinerary.transport.program')}</h4>
              {program.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-roman-marble/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                  <span className="text-base text-roman-deep/90 leading-snug" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-roman-marble/60 rounded-lg px-6 py-4 shadow-sm text-center">
              <span className="text-base md:text-lg text-roman-deep/80">
                {t('itinerary.transport.info')}
              </span>
            </div>
          </div>
        </div>
           
      </div>
    </section>
  );
};
