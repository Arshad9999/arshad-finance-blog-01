const MarketPerformanceSection = () => {
  const indianCompanies = [
    { sector: "IT", companies: "TCS, Infosys, HCL Tech", color: "bg-blue-500" },
    { sector: "Banking", companies: "HDFC Bank, ICICI Bank, SBI", color: "bg-green-500" },
    { sector: "FMCG", companies: "Hindustan Unilever, ITC, Nestle India", color: "bg-purple-500" },
    { sector: "Auto", companies: "Maruti Suzuki, Tata Motors, Bajaj Auto", color: "bg-orange-500" },
    { sector: "Pharma", companies: "Sun Pharma, Dr. Reddy's, Cipla", color: "bg-pink-500" },
    { sector: "Energy", companies: "Reliance Industries, ONGC, NTPC", color: "bg-yellow-500" }
  ];

  const usCompanies = [
    { category: "Tech Giants", companies: "Apple, Microsoft, NVIDIA, Google" },
    { category: "Finance", companies: "JPMorgan Chase, Bank of America" },
    { category: "Healthcare", companies: "Johnson & Johnson, UnitedHealth" }
  ];

  const chineseCompanies = [
    { category: "Technology", companies: "Alibaba, Tencent, ByteDance" },
    { category: "E-commerce", companies: "JD.com, Pinduoduo" },
    { category: "Manufacturing", companies: "BYD, CATL" }
  ];

  return (
    <section id="market" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          2024 Market Performance
        </h2>
        
        {/* Indian Companies */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Top Performing Indian Companies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indianCompanies.map((item, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`h-1 ${item.color} rounded-full mb-4 group-hover:h-2 transition-all duration-300`}></div>
                <h4 className="font-bold text-lg text-primary mb-2">{item.sector}</h4>
                <p className="text-muted-foreground">{item.companies}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* US Market Leaders */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">US Market Leaders</h3>
            <div className="space-y-4">
              {usCompanies.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">{item.category}</h4>
                  <p className="text-muted-foreground text-sm">{item.companies}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chinese Market Leaders */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Chinese Market Leaders</h3>
            <div className="space-y-4">
              {chineseCompanies.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-semibold text-primary mb-1">{item.category}</h4>
                  <p className="text-muted-foreground text-sm">{item.companies}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPerformanceSection;