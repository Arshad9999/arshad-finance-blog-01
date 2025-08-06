const QuotesSection = () => {
  const quotes = [
    {
      text: "Someone's sitting in the shade today because someone planted a tree a long time ago.",
      author: "Warren Buffett"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-finance-success">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <blockquote 
              key={index}
              className="text-center text-white"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-medium italic leading-relaxed mb-4 max-w-4xl mx-auto">
                "{quote.text}"
              </p>
              <footer className="text-accent font-semibold text-lg">
                — {quote.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;