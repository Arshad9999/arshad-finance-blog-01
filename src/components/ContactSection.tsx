import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "arshadid135@gmail.com",
      href: "mailto:arshadid135@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+91 9044083370",
      href: "https://wa.me/919044083370"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Mohd Arshad Siddiqui",
      href: "https://www.linkedin.com/in/mohd-arshad-siddiqui-284048225/"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Arshad9999",
      href: "https://github.com/Arshad9999"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@arshad_official_1303",
      href: "https://www.instagram.com/arshad_official_1303/"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Lucknow, Uttar Pradesh, India",
      href: null
    }
  ];

  const services = [
    "Financial consultations and advisory",
    "Website development and design",
    "Investment guidance and planning",
    "Trading strategy development",
    "Tax optimization planning",
    "Portfolio analysis and review"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Available */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Services Available</h3>
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-finance-success rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-foreground/80">{service}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-finance-accent/10 rounded-lg border border-finance-accent/20">
                <p className="text-sm text-foreground/70 italic">
                  "Ready to help you navigate the financial markets and build your wealth systematically. 
                  Whether you're a beginner or experienced investor, let's discuss your financial goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;