const ResourcesSection = () => {
  const resources = [
    {
      title: "NSE/BSE Websites",
      description: "Official Indian stock exchanges with real-time data and investor education",
      category: "Official"
    },
    {
      title: "SEBI Investor Education",
      description: "Government regulatory body's comprehensive investor guides and safety tips",
      category: "Education"
    },
    {
      title: "Tax Calculation Tools",
      description: "Online calculators for capital gains, SIP returns, and tax optimization",
      category: "Tools"
    },
    {
      title: "Brokerage Comparison",
      description: "Compare fees, features, and services of different brokers",
      category: "Comparison"
    },
    {
      title: "Financial News Sources",
      description: "Economic Times, Moneycontrol, Business Standard for market updates",
      category: "News"
    },
    {
      title: "YouTube Learning Channels",
      description: "Curated finance and trading channels for continuous learning",
      category: "Education"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Official": return "bg-blue-100 text-blue-800";
      case "Education": return "bg-green-100 text-green-800";
      case "Tools": return "bg-purple-100 text-purple-800";
      case "Comparison": return "bg-orange-100 text-orange-800";
      case "News": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Essential Resources
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(resource.category)}`}>
                  {resource.category}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;