
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Church, Heart, Crown, Scroll } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export const AboutRome = () => {
  const { t } = useLanguage();

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
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          {/* <h3 className="font-playfair text-2xl font-bold text-roman-deep mb-6 text-center">
            {t('about.holy.title')}
          </h3> */}
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
                <li>• Apostolul Petru (+64 dHr Roma)</li>
                <li>• Unde a murit Sf. Petru răstignit pe o Cruce cu capul în jos</li>
                <li>• Apostolul Pavel (+67 dHr Roma) și unde a fost ucis pentru credința sa</li>
                <li>• Unde a scris Apostolul Luca (medic, pictor)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-4">
                {t('about.visit.title')}
              </h4>
              <ul className="space-y-2 text-roman-deep">
                <li>• Catacombele - locul de închinare al primilor creștini</li>
                <li>• Cele 7 BAZILICI ROMANE</li>
                <li>• Peste 900 de Biserici</li>
                <li>• COLOSEUL - locul Sfânt unde au murit mii de creștini</li>
                <li>• PANTEONUL și VATICANUL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg mt-12">
              <CardHeader className="bg-roman-gold text-white">
                <CardTitle className="font-playfair text-3xl text-center">
                  {t('contact.society')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <p className="text-lg text-roman-deep/80 leading-relaxed">
                    {t('contact.offer')}
                  </p>
                </div>

                {/* <div className="mb-8">
                  <p className="text-lg text-roman-deep/80 leading-relaxed">
                    {t('contact.essence')}
                  </p>
                </div> */}
                
                <div className="space-y-6">
                  <div className="bg-roman-marble rounded-lg p-6">
                    <h4 className="font-playfair text-xl font-semibold text-roman-deep mb-4">
                      {t('contact.services')}
                    </h4>
                    <ul className="text-center space-y-2 text-roman-deep/80">
                      <li>• Ghid turistic specializat</li>
                      <li>• Transport de lux (Tesla/Microbuz)</li>
                      <li>• Preluare de la hotel</li>
                      <li>• Program flexibil de 8 ore</li>
                      <li>• Asistență la Aeroport</li>
                      <li>• Rezervări hoteluri la preț bun</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
          </div>
            {/* Transport Info */}
        <div className="bg-white rounded-lg p-8 shadow-lg mt-12">
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
           <p className="text-lg text-roman-deep/80  mx-auto px-4 mt-8 text-center">
              Durata circa 8 ore (depinde mult de cât de voioși sunteți, de câte fotografii veți face, de îmbulzeală, de numărul de pelerini ajunși înaintea noastră, de trafic, de orarul deschiderii obiectivelor turistice etc).
            </p>
          </div>
           
      </div>
    </section>
  );
};
