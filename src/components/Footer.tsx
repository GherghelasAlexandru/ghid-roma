import { Church, Clock, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-roman-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-roman-gold" />
              <span className="font-playfair font-bold text-xl">
                Centro de Pelerinaje Roma
              </span>
            </div>
            <p className="text-roman-stone leading-relaxed">
              {t('footer.pilgrimage')} {t('footer.experience')}
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-roman-gold">
              {t('footer.quick')}
            </h3>
            <div className="space-y-2 text-roman-stone">
              <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p>IT: +39 347 521 7639</p>
                  </div>
              </div>
               <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p>RO: +40 723 010 201</p>
                  </div>
              </div>
              <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p>spascaru@gmail.com</p>
                  </div>
              </div>
              <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-roman-gold flex-shrink-0" />
                  <div>
                    <p>Luni-Vineri: 9:00-19:00</p>
                  </div>
              </div>
             
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-roman-gold">
              {t('footer.holy')}
            </h3>
            <div className="space-y-2 text-roman-stone">
              <p>• 7 Bazilici Romane</p>
              <p>• Catacombele</p>
              <p>• Coloseul</p>
              <p>• Vaticanul</p>
              <p>• Via Appia Antica</p>
            </div>
          </div>
        </div>

        <div className="border-t border-roman-stone/20 mt-8 pt-8 text-center">
          <p className="text-roman-stone">
            © 2024 Centro de Pelerinaje Roma - Societatea Ora et Labora. 
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
