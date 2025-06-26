
import { useState } from "react";
import { Menu, X, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-roman-stone/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Church className="h-8 w-8 text-roman-gold" />
            <span className="font-playfair font-bold text-xl text-roman-deep">
              Centro de Pelerinaje Roma
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#despre" className="text-roman-deep hover:text-roman-gold transition-colors">
              {t('nav.about')}
            </a>
            <a href="#itinerariu" className="text-roman-deep hover:text-roman-gold transition-colors">
              {t('nav.itinerary')}
            </a>
            <a href="#contact" className="text-roman-deep hover:text-roman-gold transition-colors">
              {t('nav.contact')}
            </a>
            <LanguageSwitcher />
             <a
              href="#contact"
              className="bg-roman-gold hover:bg-roman-terracotta text-white px-4 py-2 rounded font-medium transition-colors"
            >
              {t('nav.book')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a
                href="#despre"
                className="block px-3 py-2 text-roman-deep hover:text-roman-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#itinerariu"
                className="block px-3 py-2 text-roman-deep hover:text-roman-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.itinerary')}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-roman-deep hover:text-roman-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <Button className="w-full mt-2 bg-roman-gold hover:bg-roman-terracotta text-white">
                {t('nav.book')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
