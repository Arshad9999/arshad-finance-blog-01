import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-finance.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Master Your
          <span className="block text-accent"> Financial Future</span>
          <span className="block text-lg md:text-xl font-sans font-normal mt-4 opacity-90">
            in India's Growing Markets
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
          From basics to advanced trading – your complete guide to Indian finance, taxes, and investment opportunities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('basics')}
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-4 text-lg"
          >
            Start Learning
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
          >
            Contact Me
          </Button>
        </div>
        
        <blockquote className="italic text-lg md:text-xl max-w-3xl mx-auto opacity-90 border-l-4 border-accent pl-6">
          "The stock market is filled with individuals who know the price of everything, but the value of nothing."
          <footer className="text-accent font-semibold mt-2">— Philip Fisher</footer>
        </blockquote>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;