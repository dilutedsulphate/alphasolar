import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, Zap, Shield, TrendingDown, Leaf, Factory, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

const features = [
  {
    icon: TrendingDown,
    title: "Slash Energy Bills",
    description: "Reduce your commercial electricity costs by up to 85% with our industrial-grade solar systems.",
  },
  {
    icon: BarChart3,
    title: "Tax Benefits",
    description: "Take advantage of accelerated depreciation and government incentives for commercial solar.",
  },
  {
    icon: Leaf,
    title: "Go Green",
    description: "Meet your corporate sustainability goals and reduce your carbon footprint significantly.",
  },
  {
    icon: Clock,
    title: "Quick ROI",
    description: "See returns on your investment within 3-4 years with continued savings for decades.",
  },
];

const industries = [
  {
    name: "Manufacturing & Factories",
    description: "High-capacity systems for industrial operations",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Office Buildings",
    description: "Clean energy for corporate workspaces",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Retail & Shopping",
    description: "Power your stores sustainably",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Warehouses",
    description: "Large rooftop installations for logistics",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=400&auto=format&fit=crop",
  },
];

const benefits = [
  "Industrial-grade monocrystalline panels",
  "Scalable system design for future expansion",
  "Net metering setup and support",
  "Government subsidy documentation",
  "Accelerated depreciation benefits",
  "Professional installation team",
  "Real-time monitoring system",
  "Annual maintenance package",
  "25-year panel warranty",
  "5-year inverter warranty",
];

const stats = [
  { value: "200+", label: "Commercial Installations" },
  { value: "50MW+", label: "Total Capacity" },
  { value: "85%", label: "Average Savings" },
  { value: "3-4 Yrs", label: "Typical ROI" },
];

export default function Commercial() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/10 rounded-xl -rotate-12 animate-float-delayed" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <Building2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Commercial Solar Solutions</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Power Your{" "}
                  <span className="text-accent">Business</span> with{" "}
                  <span className="text-primary">Solar Energy</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  Reduce operating costs, boost your bottom line, and meet sustainability goals
                  with our commercial solar solutions designed for businesses of all sizes.
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
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop"
                    alt="Commercial solar installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-xl border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">85%</p>
                      <p className="text-sm text-muted-foreground">Cost Savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary font-heading">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Commercial Solar
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Smart Investment for{" "}
                <span className="text-primary">Your Business</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Commercial solar is one of the best investments your business can make. Here's why.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Industries We Serve
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Solar Solutions for{" "}
                <span className="text-accent">Every Business</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                From factories to retail stores, we provide customized solar solutions for all commercial sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-40">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading text-lg font-bold mb-1">{industry.name}</h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
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
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                    alt="Commercial solar panels"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-xl animate-float-delayed">
                  <div className="text-center">
                    <p className="text-3xl font-bold">3-4</p>
                    <p className="text-xs opacity-90">Year Payback</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Complete Package
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Everything Your Business Needs for{" "}
                  <span className="text-primary">Solar Success</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our commercial solar package includes everything from planning to maintenance.
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center">
              <Factory className="w-16 h-16 mx-auto mb-6 text-accent-foreground/80" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                Ready to Cut Your Business Energy Costs?
              </h2>
              <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
                Get a free energy audit and custom proposal for your business.
                See how much you can save with commercial solar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="gap-2 font-semibold">
                  <Link to="/#contact">
                    <Zap className="w-5 h-5" />
                    Get Free Energy Audit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
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
