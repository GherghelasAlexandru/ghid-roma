import { HeroSection } from "@/components/HeroSection";
import { AboutRome } from "@/components/AboutRome";
import { Itinerary } from "@/components/Itinerary";
import { ContactInfo } from "@/components/ContactInfo";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutRome />
        <Itinerary />
        <ContactInfo />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
