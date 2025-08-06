const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Basics", id: "basics" },
    { label: "Tax Guide", id: "tax" },
    { label: "Careers", id: "careers" },
    { label: "Resources", id: "resources" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold mb-4">WealthWise India</h3>
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/80 hover:text-accent transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm mb-4">
            © 2024 WealthWise India · For educational purposes only · Investment in securities is subject to market risks.
          </p>
          <p className="text-accent font-semibold">
            Made with ❤️ in Lucknow, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;