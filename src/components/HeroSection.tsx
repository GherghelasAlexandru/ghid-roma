
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Background from "../assets/background.jpg";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:Background ? `url(${Background})` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient block">{t('hero.title')}</span>
            <span className="text-roman-gold">ROMA</span>
          </h1>
          
          <div className="font-playfair text-xl md:text-2xl mb-8 space-y-2">
            <p className="text-roman-gold">{t('hero.subtitle')}</p>
            <p className="text-white">{t('hero.caput')}</p>
            <p className="text-roman-stone">{t('hero.eternal')}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-roman-gold" />
              <span>IT: +39 347 521 7639</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-roman-gold" />
              <span>RO: +40 723 010 201</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-roman-gold" />
              <span>spascaru@gmail.com</span>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-roman-gold hover:bg-roman-terracotta text-white font-semibold px-8 py-3 text-lg"
            >
              {t('hero.start')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-roman-deep px-8 py-3 text-lg"
            >
              {t('hero.learn')}
            </Button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
