
import { Card, CardContent } from "@/components/ui/card";
import { Church, Heart, Crown, Scroll } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
          <h3 className="font-playfair text-2xl font-bold text-roman-deep mb-6 text-center">
            {t('about.holy.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};
