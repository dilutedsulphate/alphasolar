import { Link } from "react-router-dom";
import { ArrowRight, Hotel, CheckCircle2, Zap, Shield, TrendingDown, Leaf, Users, Star, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

const features = [
  {
    icon: TrendingDown,
    title: "Reduce Operating Costs",
    description: "Cut electricity bills by up to 80% with our large-scale solar installations designed for hotels.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Image",
    description: "Attract eco-conscious travelers and boost your hotel's sustainability credentials.",
  },
  {
    icon: Shield,
    title: "Reliable Power",
    description: "Ensure uninterrupted operations with battery backup systems for critical hotel functions.",
  },
  {
    icon: Users,
    title: "Guest Satisfaction",
    description: "Modern travelers prefer eco-friendly accommodations. Stand out from the competition.",
  },
];

const benefits = [
  "Custom capacity planning based on your hotel's energy consumption",
  "Grid-tied systems with net metering support",
  "Battery backup for essential services",
  "Real-time energy monitoring dashboard",
  "24/7 technical support and maintenance",
  "Attractive ROI within 3-5 years",
  "Government subsidy assistance",
  "25-year performance warranty",
];

const caseStudies = [
  {
    name: "Grand Palace Hotel, Srinagar",
    capacity: "150 kW",
    savings: "75%",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Mountain View Resort, Gulmarg",
    capacity: "80 kW",
    savings: "68%",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Heritage Inn, Pahalgam",
    capacity: "45 kW",
    savings: "72%",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Hotels() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-accent/10 rounded-xl -rotate-12 animate-float-delayed" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Hotel className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Hotel Solar Solutions</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Power Your{" "}
                  <span className="text-primary">Hotel</span> with{" "}
                  <span className="text-accent">Clean Energy</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  Transform your hospitality business with our premium solar installations.
                  Reduce operating costs, enhance guest experience, and showcase your commitment to sustainability.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2 font-semibold">
                    <Link to="/#contact">
                      <Zap className="w-5 h-5" />
                      Get Free Assessment
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

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                    alt="Hotel with solar panels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-xl border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">80%</p>
                      <p className="text-sm text-muted-foreground">Cost Reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Solar for Hotels
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your Hotel with{" "}
                <span className="text-primary">Solar Power</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Hotels have high energy demands. Solar power helps you manage costs while enhancing your brand image.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                  Complete Solution
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  What You Get with Our{" "}
                  <span className="text-primary">Hotel Solar Package</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  We provide end-to-end solar solutions tailored specifically for the hospitality industry.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                    alt="Solar panel installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl animate-float-delayed">
                  <div className="text-center">
                    <p className="text-3xl font-bold">25</p>
                    <p className="text-xs opacity-90">Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Success Stories
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Hotels Powered by{" "}
                <span className="text-primary">Alpha Solar</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                See how hotels across Kashmir are saving with our solar solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src={study.image}
                      alt={study.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-energy text-energy" />
                      ))}
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-3">{study.name}</h3>
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-muted-foreground">Capacity</p>
                        <p className="font-semibold text-primary">{study.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Savings</p>
                        <p className="font-semibold text-accent">{study.savings}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center">
              <Building2 className="w-16 h-16 mx-auto mb-6 text-primary-foreground/80" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Power Your Hotel with Solar?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Get a free site assessment and custom proposal for your hotel.
                Our team will help you understand the potential savings and ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="gap-2 font-semibold">
                  <Link to="/#contact">
                    <Zap className="w-5 h-5" />
                    Get Free Assessment
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:+917006922257">
                    Call Us
                  </a>
                </Button>
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
