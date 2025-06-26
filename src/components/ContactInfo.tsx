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
                      <p>Absolvent al Facultății de Teologie Ortodoxă "Iustinian Patriarhul" din București, actual masterand</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-roman-gold mt-1 flex-shrink-0" />
                      <p>Bun cunoscător al Italiei, cu reședința neîntreruptă în orașul Roma de 29 de ani</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Society Info and CTA */}
          <div className="space-y-8">
            <Card className="border-roman-stone/20 shadow-lg">
              <CardHeader className="bg-roman-gold text-white">
                <CardTitle className="font-playfair text-2xl text-center">
                  {t('contact.society')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-roman-deep mb-4">
                    ROMA = AMOR
                  </h3>
                  <p className="text-lg text-roman-deep/80 leading-relaxed">
                    {t('contact.essence')}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-roman-marble rounded-lg p-6">
                    <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-4">
                      {t('contact.services')}
                    </h4>
                    <ul className="text-left space-y-2 text-roman-deep/80">
                      <li>• Ghid turistic specializat</li>
                      <li>• Transport de lux (Tesla/Microbuz)</li>
                      <li>• Preluare de la hotel</li>
                      <li>• Program flexibil de 8 ore</li>
                      <li>• Asistență la Aeroport</li>
                      <li>• Rezervări hoteluri la preț bun</li>
                    </ul>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-roman-gold hover:bg-roman-terracotta text-white font-semibold py-4 text-lg"
                  >
                    {t('contact.book')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-roman-stone/20 shadow-lg bg-roman-deep text-white">
              <CardContent className="p-8 text-center">
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  {t('contact.veni')}
                </h3>
                <p className="text-lg mb-6">
                  🙏 {t('contact.pilgrims')}
                </p>
                <div className="space-y-2 text-roman-stone">
                  <p>Iubi-Te-Voi Doamne!</p>
                  <p>Agapiso Se Kyrie!</p>
                  <p>I Will LOVE Thee O Lord!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
