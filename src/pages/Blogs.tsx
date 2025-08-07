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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-tech-primary/10 to-tech-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-tech-primary">
            Your Dell Studio 1558: A Comprehensive Analysis & Modern Alternatives
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional assessment to help you make the right tech investment decision
          </p>
          <div className="bg-tech-accent/10 border border-tech-accent/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-tech-accent font-medium italic">
              "Technology is best when it brings people together, but only when it works efficiently."
            </p>
          </div>
          <Button size="lg" className="bg-tech-primary hover:bg-tech-primary/90">
            Get Full Analysis Below
          </Button>
        </div>
      </section>

      {/* Current Device Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            Your Dell Studio 1558 (Model PP39L) - Complete Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-tech-primary" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between border-b border-border/50 pb-2">
                      <span className="font-medium text-foreground">{spec.component}</span>
                      <span className="text-muted-foreground text-sm">{spec.spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-tech-warning" />
                  Software Compatibility Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Supported</Badge>
                  <p className="text-sm text-muted-foreground">Basic office tasks, light web browsing, older offline games</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">Limited Support</Badge>
                  <p className="text-sm text-muted-foreground">Modern browsers (may be slow), most up-to-date security features not available</p>
                </div>
                <div>
                  <Badge variant="destructive" className="mb-2">Not Recommended</Badge>
                  <p className="text-sm text-muted-foreground">Video editing, modern games, heavy multitasking, current productivity suites</p>
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <p className="text-sm text-destructive font-medium">⚠️ Security Concerns: Windows 7 end-of-life, no security updates (high risk)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-muted/50 rounded-lg p-6">
            <p className="text-lg font-medium text-foreground">
              <strong>Summary:</strong> These specs, while fair in 2010, are obsolete in 2025. Most modern software and multitasking will be extremely limited.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages vs Disadvantages */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            2010 vs 2025: The Reality Check
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-tech-secondary">
              <CardHeader>
                <CardTitle className="text-tech-secondary">2010 Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-secondary rounded-full"></div>
                    Multi-touch display option
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-secondary rounded-full"></div>
                    Blu-ray support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-secondary rounded-full"></div>
                    Surround sound speakers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-secondary rounded-full"></div>
                    Customizable colors
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-secondary rounded-full"></div>
                    HDMI output
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">2025 Disadvantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    15-year-old processor, can't handle modern tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Max RAM insufficient for 2025 standards
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Slow, mechanical HDD (vs modern SSDs)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Outdated WiFi and USB standards
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Heavy and bulky design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    No support for new operating systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    Critical security risks
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            How Technology Advanced Since 2010
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Cpu className="w-4 h-4" />
                  Processors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">From dual-core 2.4GHz to octa-core 4.5GHz+ with AI acceleration</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" />
                  RAM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">DDR3 (4GB max) vs DDR5 (32GB+ common)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <HardDrive className="w-4 h-4" />
                  Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Slow HDDs replaced by SSDs (10x faster)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Wifi className="w-4 h-4" />
                  Connectivity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">WiFi 6/6E, USB-C, Thunderbolt 4 support</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-tech-accent/10 border border-tech-accent/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-tech-primary">Market Leaders</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium">Processors & Graphics</p>
                <p className="text-muted-foreground">Intel, AMD, NVIDIA</p>
              </div>
              <div>
                <p className="font-medium">Memory & Storage</p>
                <p className="text-muted-foreground">Samsung, Micron</p>
              </div>
              <div>
                <p className="font-medium">Connectivity</p>
                <p className="text-muted-foreground">Qualcomm</p>
              </div>
              <div>
                <p className="font-medium">Ecosystems</p>
                <p className="text-muted-foreground">Apple, Microsoft, Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Alternatives */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            Best Laptop Recommendations by Budget (India, August 2025)
          </h2>
          
          <div className="space-y-4">
            {priceSegments.map((segment, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <Badge variant="outline" className="text-lg font-bold">
                        {segment.range}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{segment.models}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{segment.specs}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            Expert Buying Guides & Reviews
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoResources.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-sm">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tech-primary hover:text-tech-secondary transition-colors"
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            Key Laptop Elements Guide
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">CPU</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Minimum 4 cores, modern gen (13th+, Ryzen 7000+)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">RAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">8GB minimum, 16GB+ recommended</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">256GB SSD minimum, 512GB better</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Display</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Full HD+ (1920x1080+)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Advice */}
      <section className="py-16 bg-gradient-to-br from-tech-primary/10 to-tech-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-tech-accent/10 border border-tech-accent/20 rounded-lg p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-xl text-tech-accent font-medium italic mb-4">
              "The best investment is in technology that grows with you, not one that holds you back."
            </p>
            <p className="text-lg text-foreground">
              <strong>Recommendation:</strong> Investing in repairing this Dell model offers diminishing returns—your money is better spent on a modern, secure, and future-proof device.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-tech-primary">
            Get Professional Consultation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-tech-primary">arshadid135@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-tech-primary">+91 9044083370</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">Lucknow, Uttar Pradesh, India</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-tech-accent font-medium italic">
              "Making technology decisions easier, one consultation at a time."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;