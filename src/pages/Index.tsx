import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TradingBasicsSection from "@/components/TradingBasicsSection";
import TaxGuideSection from "@/components/TaxGuideSection";
import CareersSection from "@/components/CareersSection";
import MarketPerformanceSection from "@/components/MarketPerformanceSection";
import InvestmentStrategySection from "@/components/InvestmentStrategySection";
import QuotesSection from "@/components/QuotesSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TradingBasicsSection />
      <TaxGuideSection />
      <CareersSection />
      <MarketPerformanceSection />
      <InvestmentStrategySection />
      <QuotesSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
