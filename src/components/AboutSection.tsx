const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            About Me & My Mission
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
              I'm passionate about empowering Indians with the knowledge and tools to succeed in finance. 
              After navigating the complexities of Indian markets, I realized the power of education and 
              strategy in building wealth. My mission: to make financial literacy accessible, practical, 
              and inspiring for everyone, whether you're a beginner or a pro trader.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-finance-success rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Learn foundational and advanced trading concepts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-finance-success rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Understand Indian tax laws and optimize returns</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-finance-success rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-foreground/80">Discover lucrative financial careers and market insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;