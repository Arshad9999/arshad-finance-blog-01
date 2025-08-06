const CareersSection = () => {
  const careers = [
    { title: "Stock Broker", salary: "₹3–8 LPA", description: "Facilitate buying and selling of securities" },
    { title: "Investment Banker", salary: "₹8–25 LPA", description: "Provide financial advisory and capital raising services" },
    { title: "Portfolio Manager", salary: "₹10–30 LPA", description: "Manage investment portfolios for clients" },
    { title: "Research Analyst", salary: "₹5–15 LPA", description: "Analyze securities and provide investment recommendations" },
    { title: "Risk Manager", salary: "₹8–20 LPA", description: "Identify and mitigate financial risks" },
    { title: "Mutual Fund Manager", salary: "₹15–50 LPA", description: "Manage mutual fund schemes and investments" },
    { title: "Chartered Accountant", salary: "₹6–25 LPA", description: "Provide accounting, auditing, and taxation services" },
    { title: "Financial Planner", salary: "₹4–12 LPA", description: "Help individuals plan their financial goals" },
    { title: "Derivatives Trader", salary: "₹5–20 LPA", description: "Trade in futures and options markets" },
    { title: "Compliance Officer", salary: "₹6–15 LPA", description: "Ensure regulatory compliance in financial institutions" }
  ];

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Finance Careers in India
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:border-secondary/50 group"
            >
              <div className="h-2 bg-gradient-to-r from-secondary to-finance-success rounded-full mb-4"></div>
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                {career.title}
              </h3>
              <p className="text-2xl font-bold text-finance-success mb-3">{career.salary}</p>
              <p className="text-muted-foreground text-sm">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;