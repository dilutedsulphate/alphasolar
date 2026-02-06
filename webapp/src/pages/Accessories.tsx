import { Link } from "react-router-dom";
import { ArrowRight, Cable, Plug, Package, Box, Ruler, Zap, Battery, Gauge, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

interface Accessory {
  icon: React.ReactNode;
  name: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

const accessories: Accessory[] = [
  {
    icon: <Cable className="w-6 h-6" />,
    name: "Solar Cables",
    description: "High-quality UV-resistant solar cables designed for outdoor installations. Available in various gauges for different system sizes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    features: ["UV-resistant coating", "Double insulated", "10+ year lifespan", "Multiple gauge options"],
    category: "Wiring",
  },
  {
    icon: <Plug className="w-6 h-6" />,
    name: "MC4 Connectors",
    description: "Industry-standard waterproof connectors for secure solar panel connections. Easy to install and highly reliable.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
    features: ["IP67 waterproof", "TUV certified", "1000V DC rated", "Easy tool-free assembly"],
    category: "Connectors",
  },
  {
    icon: <Package className="w-6 h-6" />,
    name: "Cable Ties",
    description: "Heavy-duty UV-resistant cable ties for secure wire management in solar installations. Built to withstand harsh outdoor conditions.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600&auto=format&fit=crop",
    features: ["UV stabilized", "Weather resistant", "High tensile strength", "Multiple sizes"],
    category: "Organization",
  },
  {
    icon: <Box className="w-6 h-6" />,
    name: "Junction Boxes",
    description: "Weatherproof junction boxes for safe electrical connections. Essential for protecting your solar system's wiring.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=600&auto=format&fit=crop",
    features: ["IP65 rated", "Fire resistant", "Easy wire entry", "Multiple connection points"],
    category: "Protection",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    name: "Mounting Rails",
    description: "Durable aluminum mounting rails for rooftop and ground-mount solar installations. Engineered for maximum strength and corrosion resistance.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    features: ["Anodized aluminum", "Adjustable positioning", "Wind load tested", "25-year warranty"],
    category: "Mounting",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: "Earthing Kits",
    description: "Complete earthing/grounding solutions for solar installations. Essential for safety and protecting equipment from lightning and surges.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
    features: ["Copper components", "Low resistance", "Complete kit", "IEC compliant"],
    category: "Safety",
  },
  {
    icon: <Battery className="w-6 h-6" />,
    name: "Battery Cables",
    description: "Heavy-duty battery cables for connecting batteries in solar storage systems. Designed for high current applications.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=600&auto=format&fit=crop",
    features: ["High current capacity", "Flexible design", "Crimped terminals", "Multiple lengths"],
    category: "Storage",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    name: "Charge Controllers",
    description: "MPPT and PWM charge controllers for efficient battery charging. Maximize your solar system's performance and battery life.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=600&auto=format&fit=crop",
    features: ["MPPT technology", "LCD display", "Multiple protection", "Remote monitoring"],
    category: "Control",
  },
];

export default function Accessories() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-accent/10 rounded-xl -rotate-12 animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-energy/10 rounded-lg rotate-45 animate-float" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 animate-fade-in">
                Solar Accessories
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                Premium Solar{" "}
                <span className="text-primary">Accessories</span> &{" "}
                <span className="text-accent">Components</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up stagger-2">
                Complete your solar installation with our high-quality accessories.
                From cables to controllers, we have everything you need for a professional setup.
              </p>
            </div>
          </div>
        </section>

        {/* Accessories Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Everything You Need for{" "}
                <span className="text-primary">Complete Installation</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Browse our comprehensive range of solar accessories designed for reliability and performance.
              </p>
            </div>

            {/* Accessories Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {accessories.map((accessory, index) => (
                <Card
                  key={accessory.name}
                  className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary">
                      {accessory.icon}
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                      {accessory.category}
                    </span>
                  </div>

                  <CardContent className="p-5 space-y-3">
                    <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                      {accessory.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {accessory.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 pt-2">
                      {accessory.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border/50 shadow-lg">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Need Help Choosing the Right Accessories?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experts can help you select the perfect components for your solar installation.
                Contact us for personalized recommendations and bulk pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/#contact">
                    <Zap className="w-5 h-5" />
                    Get Expert Advice
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href="https://wa.me/916005860151" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Accessories */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                  Quality Assurance
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our{" "}
                  <span className="text-primary">Solar Accessories</span>?
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Premium Quality", desc: "All our accessories are sourced from certified manufacturers and meet international quality standards." },
                    { title: "Warranty Backed", desc: "Every product comes with manufacturer warranty for your peace of mind." },
                    { title: "Expert Support", desc: "Our technical team is available to help you choose the right components." },
                    { title: "Competitive Pricing", desc: "Get the best value with our competitive prices and bulk discounts." },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                    alt="Solar installation accessories"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Package className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">100+</p>
                      <p className="text-sm text-muted-foreground">Products Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
