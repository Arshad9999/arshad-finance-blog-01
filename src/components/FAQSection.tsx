import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "demat",
      question: "How to open a Demat account in India?",
      answer: "Approach a SEBI-approved Depository Participant (bank or broker), submit KYC documents including PAN card, Aadhaar, bank statements, and proof of address. Complete in-person or video verification. The account typically opens within 3-7 business days."
    },
    {
      id: "minimum",
      question: "What's the minimum amount to start investing?",
      answer: "You can start investing with as little as ₹100 through mutual funds (SIP) or ₹500-1000 for direct stocks. Many brokers have zero minimum balance requirements, making investing accessible to everyone."
    },
    {
      id: "dividend-tax",
      question: "How are dividends taxed in India?",
      answer: "Dividends are taxed at your income tax slab rate. TDS of 10% is deducted if dividend exceeds ₹5,000 in a financial year. You can claim credit for TDS while filing returns."
    },
    {
      id: "us-stocks",
      question: "Can I invest in US stocks from India?",
      answer: "Yes, you can invest up to $250,000 per year under the Liberalised Remittance Scheme (LRS). Use platforms like Vested, INDmoney, or international brokerages that serve Indian residents."
    },
    {
      id: "delivery-vs-intraday",
      question: "What's the difference between delivery and intraday trading?",
      answer: "Delivery trading means buying stocks and holding them for more than one day - you take actual ownership. Intraday means buying and selling the same stock within market hours on the same day."
    },
    {
      id: "itr-filing",
      question: "How to file ITR with capital gains?",
      answer: "Report all stock transactions under 'Capital Gains' section in ITR-2 or ITR-3. Attach broker statements, maintain transaction records, and calculate STCG (15%) and LTCG (10% above ₹1 lakh) separately."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;