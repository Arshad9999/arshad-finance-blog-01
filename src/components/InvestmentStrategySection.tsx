const InvestmentStrategySection = () => {
  const benefits = [
    {
      title: "Diversification",
      description: "Reduce country and sector-specific risks by spreading investments across different markets",
      icon: "🌐"
    },
    {
      title: "Currency Hedging",
      description: "Protect against INR depreciation by holding assets in stronger currencies",
      icon: "💱"
    },
    {
      title: "Growth Opportunities",
      description: "Access to global market leaders and emerging sectors not available in India",
      icon: "📈"
    },
    {
      title: "24-Hour Trading",
      description: "Benefit from different market time zones for round-the-clock opportunities",
      icon: "🕐"
    },
    {
      title: "Sector Exposure",
      description: "Gain exposure to sectors and technologies not present in Indian markets",
      icon: "🏭"
    }
  ];

  const bestPractices = [
    "Set clear financial goals and timelines",
    "Create a disciplined investment schedule (SIP approach)",
    "Review your portfolio quarterly, not daily",
    "Continuously educate yourself about markets",
    "Make emotion-free investment decisions",
    "Maintain emergency fund before investing",
    "Diversify across asset classes and geographies"
  ];

  return (
    <section id="strategy" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Investment Strategy
        </h2>
        
        {/* Benefits of Multi-Market Investment */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
            Benefits of Multi-Market Investment
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-lg text-primary mb-3 group-hover:text-secondary transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
            Investment Best Practices
          </h3>
          <div className="bg-card p-8 rounded-xl border border-border/50">
            <div className="grid md:grid-cols-2 gap-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-finance-success rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground/80">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentStrategySection;