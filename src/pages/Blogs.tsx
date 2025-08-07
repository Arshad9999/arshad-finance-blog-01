import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Laptop, Shield, TrendingUp, Zap, HardDrive, Cpu, Monitor, Wifi } from "lucide-react";
import Navigation from "@/components/Navigation";

const Blogs = () => {
  const specifications = [
    { component: "Processor", spec: "Intel Core i3-370M, 2.4GHz, 2 cores" },
    { component: "RAM", spec: "4GB DDR3-1333MHz (2x2GB)" },
    { component: "Storage", spec: "500GB HDD (5400 rpm)" },
    { component: "Graphics", spec: "AMD Radeon HD 5470 + Intel HD Graphics" },
    { component: "Display", spec: "15.6\" WXGA (1366x768) LED" },
    { component: "Weight", spec: "2.5kg" },
    { component: "Battery", spec: "56W capacity" },
    { component: "Connectivity", spec: "802.11b/g WiFi, Bluetooth, 3x USB 2.0" },
    { component: "OS", spec: "Windows 7 Home Premium (64-bit)" },
    { component: "Color", spec: "Blue" },
    { component: "Optical Drive", spec: "DVD Super Multi" }
  ];

  const priceSegments = [
    {
      range: "₹20k–30k",
      models: "Acer Aspire 3, HP 255 G10, Asus Vivobook Go 15",
      specs: "8GB RAM, SSD, Windows 11"
    },
    {
      range: "₹30k–40k", 
      models: "Infinix ZEROBOOK ZL513, Asus VivoBook Go 14, Lenovo IdeaPad",
      specs: "i5/Ryzen 5, 16GB RAM"
    },
    {
      range: "₹40k–50k",
      models: "ASUS ZenBook, HP Envy, Dell Inspiron 15", 
      specs: "i5/Ryzen 5, 16GB RAM, SSD"
    },
    {
      range: "₹50k–60k",
      models: "Lenovo ThinkPad, HP EliteBook, ASUS ExpertBook",
      specs: "i7/Ryzen 7, SSD, premium build"
    },
    {
      range: "₹60k+",
      models: "MacBook Air, Dell XPS, ThinkPad X1 Carbon",
      specs: "Apple M3/Intel i7+, high-end display"
    }
  ];

  const videoResources = [
    {
      title: "Best Laptop under ₹30,000",
      url: "https://youtu.be/OgnTBh27Njg?si=QUbJRnFcgoGBWtpn"
    },
    {
      title: "Best Laptop under ₹40,000", 
      url: "https://youtu.be/tJOhYNOcmHk?si=jalfcRiOqBRLJyaf"
    },
    {
      title: "Best Laptop under ₹60,000",
      url: "https://youtu.be/UpzzBVNxJ1k?si=xmjE2mx8rlyl5yvN"
    },
    {
      title: "Laptop Buying Guide",
      url: "https://youtu.be/8ge_hxtvG3E?si=14SfOV1gij1owTn6"
    },
    {
      title: "Asus ExpertBook Series",
      url: "https://youtu.be/0GHBDlJ2_Qg?si=O1jpKJ2siCfQL_ia"
    },
    {
      title: "iPad or Laptop",
      url: "https://youtu.be/Xc9_OrFULfY?si=YGFZikVRTaF5p-kO"
    },
    {
      title: "Mac or Windows",
      url: "https://youtu.be/l2RnABCi5kg?si=YgfzovahBZ5pvlDf"
    },
    {
      title: "Stop Buying Wrong Laptop",
      url: "https://youtu.be/65Tslj5gOO4?si=AX0Eigq5UnGFsqpK"
    }
  ];

  const faqs = [
    {
      question: "Should I repair my 2010 laptop?",
      answer: "Generally not recommended. Repair costs often exceed the value, and you'll still have outdated, slow, and insecure hardware."
    },
    {
      question: "What's the minimum specification I need in 2025?",
      answer: "Minimum 4-core modern processor, 8GB RAM, 256GB SSD, Full HD display, and current OS support."
    },
    {
      question: "Is upgrading old hardware worthwhile?",
      answer: "For 15-year-old laptops, upgrades are limited and expensive. Better to invest in a new device."
    },
    {
      question: "How to transfer data to a new laptop?",
      answer: "Use cloud storage, external drives, or migration tools like Windows Easy Transfer or similar utilities."
    },
    {
      question: "What is the average lifespan of a new laptop?",
      answer: "Modern laptops typically last 5-7 years with proper care and can handle software updates throughout this period."
    }
  ];

  return (
    <div className="min-h-screen bg-tech-background text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-primary/20 to-tech-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Laptop className="w-16 h-16 text-tech-accent animate-pulse" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tech-accent to-tech-secondary bg-clip-text text-transparent">
            Your Dell Studio 1558: A Comprehensive Analysis & Modern Alternatives
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Professional assessment to help you make the right tech investment decision
          </p>
          <div className="bg-tech-surface/80 backdrop-blur-sm border border-tech-accent/30 rounded-xl p-6 mb-8 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-tech-accent" />
              <span className="text-tech-accent font-semibold">Expert Quote</span>
            </div>
            <p className="text-tech-accent font-medium italic text-lg">
              "Technology is best when it brings people together, but only when it works efficiently."
            </p>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-tech-primary to-tech-secondary hover:scale-105 transition-transform font-semibold text-white border-0 shadow-lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            Get Full Analysis Below
          </Button>
        </div>
      </section>

      {/* Current Device Analysis */}
      <section className="py-16 bg-tech-surface/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              Your Dell Studio 1558 (Model PP39L) - Complete Overview
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            A comprehensive breakdown of your laptop's current capabilities and limitations
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-tech-surface border-tech-muted/30 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-tech-primary/20 to-tech-secondary/20">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Cpu className="w-6 h-6 text-tech-accent" />
                  <span className="font-bold text-xl">Technical Specifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-tech-muted/30 pb-3">
                      <span className="font-semibold text-white">{spec.component}</span>
                      <span className="text-gray-300 text-sm font-medium bg-tech-muted/20 px-3 py-1 rounded-full">
                        {spec.spec}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-tech-surface border-tech-muted/30 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-tech-warning/20 to-destructive/20">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Shield className="w-6 h-6 text-tech-warning" />
                  <span className="font-bold text-xl">Software Compatibility Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="bg-tech-secondary/10 border border-tech-secondary/30 rounded-lg p-4">
                  <Badge variant="secondary" className="mb-3 bg-tech-secondary text-white font-semibold">✓ Supported</Badge>
                  <p className="text-gray-300 font-medium">Basic office tasks, light web browsing, older offline games</p>
                </div>
                <div className="bg-tech-accent/10 border border-tech-accent/30 rounded-lg p-4">
                  <Badge variant="outline" className="mb-3 border-tech-accent text-tech-accent font-semibold">⚠ Limited Support</Badge>
                  <p className="text-gray-300 font-medium">Modern browsers (may be slow), most up-to-date security features not available</p>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <Badge variant="destructive" className="mb-3 font-semibold">✗ Not Recommended</Badge>
                  <p className="text-gray-300 font-medium">Video editing, modern games, heavy multitasking, current productivity suites</p>
                </div>
                <div className="bg-tech-warning/10 border border-tech-warning/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-tech-warning" />
                    <span className="text-tech-warning font-bold">Critical Security Alert</span>
                  </div>
                  <p className="text-white font-medium">Windows 7 end-of-life, no security updates (high risk)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-tech-warning/20 to-destructive/20 border border-tech-warning/30 rounded-xl p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-tech-warning" />
              <span className="text-tech-warning font-bold text-xl">Expert Summary</span>
            </div>
            <p className="text-lg font-semibold text-white">
              <strong>Bottom Line:</strong> These specs, while fair in 2010, are <em className="text-tech-warning">obsolete in 2025</em>. Most modern software and multitasking will be extremely limited.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages vs Disadvantages */}
      <section className="py-16 bg-tech-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              2010 vs 2025: The Reality Check
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Understanding how technology has evolved and why your laptop is now limited
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-tech-surface border-tech-secondary/30 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-tech-secondary/20 to-tech-secondary/10">
                <CardTitle className="text-tech-secondary text-xl font-bold flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  2010 Advantages
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "Multi-touch display option",
                    "Blu-ray support",
                    "Surround sound speakers", 
                    "Customizable colors",
                    "HDMI output"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-tech-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-tech-surface border-destructive/30 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-destructive/20 to-tech-warning/20">
                <CardTitle className="text-destructive text-xl font-bold flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  2025 Disadvantages
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "15-year-old processor, can't handle modern tasks",
                    "Max RAM insufficient for 2025 standards",
                    "Slow, mechanical HDD (vs modern SSDs)",
                    "Outdated WiFi and USB standards",
                    "Heavy and bulky design",
                    "No support for new operating systems",
                    "Critical security risks"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-16 bg-tech-surface/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cpu className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              How Technology Advanced Since 2010
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            A decade and a half of revolutionary improvements in computing technology
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-tech-surface border-tech-muted/30 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-sm text-white">
                  <Cpu className="w-5 h-5 text-tech-accent" />
                  <span className="font-bold">Processors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300 font-medium">From dual-core 2.4GHz to octa-core 4.5GHz+ with AI acceleration</p>
              </CardContent>
            </Card>
            
            <Card className="bg-tech-surface border-tech-muted/30 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-sm text-white">
                  <Zap className="w-5 h-5 text-tech-secondary" />
                  <span className="font-bold">RAM</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300 font-medium">DDR3 (4GB max) vs DDR5 (32GB+ common)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-tech-surface border-tech-muted/30 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-sm text-white">
                  <HardDrive className="w-5 h-5 text-tech-warning" />
                  <span className="font-bold">Storage</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300 font-medium">Slow HDDs replaced by SSDs (10x faster)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-tech-surface border-tech-muted/30 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-sm text-white">
                  <Wifi className="w-5 h-5 text-tech-primary" />
                  <span className="font-bold">Connectivity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300 font-medium">WiFi 6/6E, USB-C, Thunderbolt 4 support</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-tech-accent/10 border border-tech-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-tech-accent font-display">Market Leaders</h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div className="bg-tech-surface/50 rounded-lg p-4">
                <p className="font-bold text-white mb-2">Processors & Graphics</p>
                <p className="text-gray-300">Intel, AMD, NVIDIA</p>
              </div>
              <div className="bg-tech-surface/50 rounded-lg p-4">
                <p className="font-bold text-white mb-2">Memory & Storage</p>
                <p className="text-gray-300">Samsung, Micron</p>
              </div>
              <div className="bg-tech-surface/50 rounded-lg p-4">
                <p className="font-bold text-white mb-2">Connectivity</p>
                <p className="text-gray-300">Qualcomm</p>
              </div>
              <div className="bg-tech-surface/50 rounded-lg p-4">
                <p className="font-bold text-white mb-2">Ecosystems</p>
                <p className="text-gray-300">Apple, Microsoft, Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Alternatives */}
      <section className="py-16 bg-tech-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Laptop className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              Best Laptop Recommendations by Budget (India, August 2025)
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Curated recommendations across all price segments for Indian consumers
          </p>
          
          <div className="space-y-4">
            {priceSegments.map((segment, index) => (
              <Card key={index} className="bg-tech-surface border-tech-muted/30 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <Badge variant="outline" className="text-lg font-bold border-tech-accent text-tech-accent px-4 py-2">
                        {segment.range}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{segment.models}</p>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">{segment.specs}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16 bg-tech-surface/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ExternalLink className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              Expert Buying Guides & Reviews
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Handpicked video resources to help you make informed decisions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoResources.map((video, index) => (
              <Card key={index} className="bg-tech-surface border-tech-muted/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white font-bold">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tech-accent hover:text-tech-secondary transition-colors font-semibold bg-tech-accent/10 px-4 py-2 rounded-lg hover:bg-tech-accent/20"
                  >
                    Watch Video <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Laptop Elements */}
      <section className="py-16 bg-tech-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              Key Laptop Elements Guide
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Essential specifications to look for in your next laptop purchase
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "CPU", desc: "Minimum 4 cores, modern gen (13th+, Ryzen 7000+)" },
              { icon: Zap, title: "RAM", desc: "8GB minimum, 16GB+ recommended" },
              { icon: HardDrive, title: "Storage", desc: "256GB SSD minimum, 512GB better" },
              { icon: Monitor, title: "Display", desc: "Full HD+ (1920x1080+)" }
            ].map((item, index) => (
              <Card key={index} className="bg-tech-surface border-tech-muted/30 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-white font-bold flex items-center justify-center gap-2">
                    <item.icon className="w-6 h-6 text-tech-accent" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-tech-surface/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Common questions and expert answers about laptop upgrades and purchases
          </p>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-tech-surface border-tech-muted/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg text-white font-bold">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-medium">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Advice */}
      <section className="py-16 bg-gradient-to-br from-tech-primary/20 to-tech-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-tech-surface/80 backdrop-blur-sm border border-tech-accent/30 rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-tech-accent" />
              <span className="text-tech-accent font-bold text-xl">Expert Recommendation</span>
            </div>
            <p className="text-xl text-tech-accent font-medium italic mb-4">
              "The best investment is in technology that grows with you, not one that holds you back."
            </p>
            <p className="text-lg text-white font-semibold">
              <strong>Final Verdict:</strong> Investing in repairing this Dell model offers diminishing returns—your money is better spent on a modern, secure, and future-proof device.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-tech-background" id="contact">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-tech-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-display">
              Get Professional Consultation
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
            Need personalized advice? Reach out for expert guidance on your tech decisions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Email", value: "arshadid135@gmail.com", icon: "📧" },
              { label: "WhatsApp", value: "+91 9044083370", icon: "📱" },
              { label: "Location", value: "Lucknow, Uttar Pradesh, India", icon: "📍" }
            ].map((contact, index) => (
              <Card key={index} className="bg-tech-surface border-tech-muted/30 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{contact.icon}</div>
                  <h3 className="font-bold mb-2 text-white text-lg">{contact.label}</h3>
                  <p className="text-tech-accent font-semibold">{contact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-tech-accent font-medium italic text-lg">
              "Making technology decisions easier, one consultation at a time."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;