const TradingBasicsSection = () => {
  const basicTerms = [
    { term: "Equity/Shares", definition: "Ownership in a company" },
    { term: "Bull Market", definition: "Rising market prices" },
    { term: "Bear Market", definition: "Falling market prices" },
    { term: "IPO", definition: "Initial Public Offering" },
    { term: "Market Cap", definition: "Company's total share value" },
    { term: "P/E Ratio", definition: "Price to Earnings ratio" },
    { term: "Dividend", definition: "Profits shared with shareholders" },
    { term: "Demat Account", definition: "Holds your shares digitally" },
    { term: "Trading Account", definition: "Buy/Sell securities" },
    { term: "Portfolio", definition: "Investment collection" },
    { term: "Volatility", definition: "How much prices move" },
    { term: "Liquidity", definition: "How easily you can trade" }
  ];

  const advancedTerms = [
    { term: "Futures & Options", definition: "Derivative instruments" },
    { term: "Short Selling", definition: "Selling borrowed shares" },
    { term: "Margin Trading", definition: "Trading with borrowed money" },
    { term: "Stop Loss", definition: "Sell at preset loss limit" },
    { term: "Support & Resistance", definition: "Analysis price levels" },
    { term: "Moving Averages", definition: "Trend tracking tools" },
    { term: "RSI", definition: "Relative Strength Index momentum" },
    { term: "MACD", definition: "Moving Average Convergence Divergence" },
    { term: "Beta", definition: "Stock's volatility vs market" },
    { term: "Alpha", definition: "Return above market" },
    { term: "Hedging", definition: "Strategies for risk reduction" },
    { term: "Arbitrage", definition: "Profit between market differences" }
  ];

  const TermCard = ({ term, definition }: { term: string; definition: string }) => (
    <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
      <h4 className="font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
        {term}
      </h4>
      <p className="text-muted-foreground text-sm">{definition}</p>
    </div>
  );

  return (
    <section id="basics" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Trading & Stock Market Basics
        </h2>
        
        {/* Basic Terms */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Basic Terms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {basicTerms.map((item, index) => (
              <TermCard key={index} term={item.term} definition={item.definition} />
            ))}
          </div>
        </div>

        {/* Advanced Terms */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Advanced Terms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advancedTerms.map((item, index) => (
              <TermCard key={index} term={item.term} definition={item.definition} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingBasicsSection;