import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TaxGuideSection = () => {
  const taxItems = [
    {
      id: "stcg",
      title: "STCG (Short Term Capital Gains)",
      content: "15% tax on equity held less than one year. Applied on profits from stocks sold within 12 months of purchase."
    },
    {
      id: "ltcg",
      title: "LTCG (Long Term Capital Gains)",
      content: "10% tax on gains above ₹1 lakh for equity held over one year. First ₹1 lakh of gains per financial year is tax-free."
    },
    {
      id: "dividend",
      title: "Dividend Tax",
      content: "Dividends are taxed at your income tax slab rate. TDS is deducted at source if dividend exceeds certain thresholds."
    },
    {
      id: "stt",
      title: "STT (Securities Transaction Tax)",
      content: "Applied on buy/sell of securities at the time of transaction. Rates vary based on type of security and transaction."
    },
    {
      id: "gst",
      title: "GST on Brokerage",
      content: "18% GST is charged on brokerage fees and other charges levied by brokers for trading services."
    },
    {
      id: "harvesting",
      title: "Tax Loss Harvesting",
      content: "Strategy to offset capital gains by booking losses. Helps in reducing overall tax liability for the financial year."
    },
    {
      id: "80c",
      title: "Section 80C Deductions",
      content: "Up to ₹1.5 lakh deduction for ELSS mutual funds, PPF, life insurance premiums, and other eligible investments."
    },
    {
      id: "80d",
      title: "Section 80D",
      content: "Deduction for health insurance premiums up to ₹25,000 for self/family, additional ₹50,000 for senior citizen parents."
    }
  ];

  return (
    <section id="tax" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Indian Tax Guide
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {taxItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TaxGuideSection;