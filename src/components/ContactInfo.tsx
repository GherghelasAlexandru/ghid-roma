import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, User, GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-roman-stone/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-roman-deep mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-roman-gold mx-auto mb-8"></div>
          <p className="text-lg text-roman-deep/80 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-roman-stone/20 shadow-lg">
              <CardHeader className="bg-roman-gold/10">
                <CardTitle className="font-playfair text-2xl text-roman-deep flex items-center gap-3">
                  <Phone className="h-6 w-6 text-roman-gold" />
                  {t('contact.info')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-roman-deep">Italia:</p>
                    <p className="text-roman-deep/80">+39 347 521 7639</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-roman-deep">România:</p>
                    <p className="text-roman-deep/80">+40 723 010 201</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-roman-deep">Email:</p>
                    <p className="text-roman-deep/80">spascaru@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-roman-deep">Program:</p>
                    <p className="text-roman-deep/80">Luni - Vineri: 9:00 - 19:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-roman-stone/20 shadow-lg">
              <CardHeader className="bg-roman-terracotta/10">
                <CardTitle className="font-playfair text-2xl text-roman-deep flex items-center gap-3">
                  <User className="h-6 w-6 text-roman-gold" />
                  {t('contact.guide')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                    Teolog Pascaru Sorinel
                  </h3>
                  <div className="space-y-3 text-roman-deep/80">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-roman-gold mt-1 flex-shrink-0" />
                      {t('sorin.university')}
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-roman-gold mt-1 flex-shrink-0" />
                       {t('sorin.experience')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg border-0 flex flex-col h-full transition-all">
              <CardContent className="p-8 flex flex-col items-center text-center h-full mt-4">
                <svg className="w-9 h-9 mb-4 text-roman-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {/* Lightbulb/Idea icon, or replace with a Lucide icon if you want */}
                  <path d="M12 2a7 7 0 017 7c0 3.87-3.13 7-7 7s-7-3.13-7-7a7 7 0 017-7zm0 15v4m-3-4h6" />
                </svg>
                <p className="text-base text-roman-deep/80 leading-relaxed">
                  {t('contact.essence')}
                </p>
              </CardContent>
            </Card>
            {/* Card 2 */}
            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg border-0 flex flex-col h-full transition-all">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <svg className="w-9 h-9 mb-4 text-roman-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 17.3l6.18 3.7-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z"/>
                </svg>
                <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                  {t('contact.veni')}
                </h3>
                <p className="text-base text-roman-deep/80 mb-2">
                  {t('contact.pilgrims')}
                </p>
                <div className="space-y-1 text-[15px] text-roman-gold font-playfair italic">
                  <p>Iubi-Te-Voi Doamne!</p>
                  <p>Agapiso Se Kyrie!</p>
                  <p>I Will LOVE Thee O Lord!</p>
                </div>
              </CardContent>
            </Card>
            {/* Card 3 */}
            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg border-0 flex flex-col h-full transition-all">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <svg className="w-9 h-9 mb-4 text-roman-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {/* Example: Heart icon */}
                  <path d="M12 21C12 21 4 13.5 4 8.5C4 5.74 6.24 3.5 9 3.5C10.66 3.5 12 4.84 12 6.5C12 4.84 13.34 3.5 15 3.5C17.76 3.5 20 5.74 20 8.5C20 13.5 12 21 12 21Z"/>
                </svg>
                <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                  {t('contact.spiritual.title')}
                </h3>
                <p className="text-base text-roman-deep/80 leading-relaxed">
                 {t('contact.spiritual.desc')}
                </p>
              </CardContent>
            </Card>
            {/* Card 4 */}
            <Card className="bg-white rounded-2xl shadow-md hover:shadow-lg border-0 flex flex-col h-full transition-all">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <svg className="w-9 h-9 mb-4 text-roman-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {/* Example: Globe icon */}
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
                <h3 className="font-playfair text-xl font-semibold text-roman-deep mb-2">
                 {t('contact.culture.title')}
                </h3>
                <p className="text-base text-roman-deep/80 leading-relaxed">
                  {t('contact.culture.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
