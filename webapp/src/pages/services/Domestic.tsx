import { Link } from "react-router-dom";
import { ArrowRight, Home, CheckCircle2, Zap, Shield, TrendingDown, Leaf, Battery, Wifi, Sun, BatteryCharging } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

const features = [
  {
    icon: TrendingDown,
    title: "Lower Electricity Bills",
    description: "Save up to 90% on your monthly electricity bills with rooftop solar installation.",
  },
  {
    icon: BatteryCharging,
    title: "Power Backup",
    description: "Say goodbye to power cuts with battery storage systems that keep your home running.",
  },
  {
    icon: Leaf,
    title: "Green Living",
    description: "Reduce your carbon footprint and contribute to a cleaner Kashmir environment.",
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Generate your own electricity and reduce dependence on the unreliable grid.",
  },
];

const packages = [
  {
    name: "Basic",
    capacity: "2 kW",
    ideal: "Small homes, 2-3 rooms",
    features: ["6 Solar Panels", "2kW Inverter", "Basic Monitoring", "5-Year Warranty"],
    popular: false,
  },
  {
    name: "Standard",
    capacity: "3 kW",
    ideal: "Medium homes, 3-4 rooms",
    features: ["9 Solar Panels", "3kW Hybrid Inverter", "Battery Backup", "App Monitoring", "10-Year Warranty"],
    popular: true,
  },
  {
    name: "Premium",
    capacity: "5 kW",
    ideal: "Large homes, 5+ rooms",
    features: ["15 Solar Panels", "5kW Hybrid Inverter", "Extended Battery", "Smart Home Ready", "25-Year Warranty"],
    popular: false,
  },
];

const benefits = [
  "Free home energy assessment",
  "Custom system design",
  "Premium quality panels",
  "Hybrid inverter options",
  "Battery storage available",
  "Net metering setup",
  "Government subsidy help",
  "Professional installation",
  "Post-installation support",
  "Annual maintenance",
];

const process = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We visit your home, assess your roof, and understand your energy needs.",
  },
  {
    step: "2",
    title: "Custom Design",
    description: "Our engineers design the optimal system for your home and budget.",
  },
  {
    step: "3",
    title: "Quick Installation",
    description: "Professional installation completed in 1-2 days with minimal disruption.",
  },
  {
    step: "4",
    title: "Start Saving",
    description: "System activated, monitoring setup done, and you start saving immediately.",
  },
];

export default function Domestic() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-energy/5 via-transparent to-transparent" />

          {/* Animated Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-energy/10 rounded-2xl rotate-12 animate-float" />
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/10 rounded-xl -rotate-12 animate-float-delayed" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy/10 rounded-full border border-energy/20">
                  <Home className="w-4 h-4 text-energy" />
                  <span className="text-sm font-medium text-energy">Domestic Solar Solutions</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Power Your{" "}
                  <span className="text-energy">Home</span> with{" "}
                  <span className="text-primary">Sunshine</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  Make your home energy-independent with our residential solar systems.
                  Perfect for Kashmiri homes dealing with power cuts and rising electricity bills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2 font-semibold">
                    <Link to="/#contact">
                      <Zap className="w-5 h-5" />
                      Get Free Quote
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href="https://wa.me/916005860151" target="_blank" rel="noopener noreferrer">
                      WhatsApp Us
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-8 pt-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">90%</p>
                    <p className="text-sm text-muted-foreground">Bill Savings</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-energy">24/7</p>
                    <p className="text-sm text-muted-foreground">Power Backup</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent">25 Yrs</p>
                    <p className="text-sm text-muted-foreground">Warranty</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
                    alt="Home solar installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-xl border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-energy/20 flex items-center justify-center">
                      <Sun className="w-6 h-6 text-energy" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-sm text-muted-foreground">Happy Homes</p>
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
              <span className="inline-block px-4 py-1.5 bg-energy/10 text-energy text-sm font-medium rounded-full mb-4">
                Why Home Solar
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Benefits of Going{" "}
                <span className="text-energy">Solar at Home</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Transform your home into a mini power plant and enjoy these benefits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:border-energy/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-energy/10 flex items-center justify-center mb-4 group-hover:bg-energy/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-energy" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Solar Packages
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Choose Your Perfect{" "}
                <span className="text-primary">Home Solar Package</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We have packages for every home size and budget. All include professional installation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    pkg.popular ? "border-primary border-2 scale-105" : "hover:border-primary/30"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="font-heading text-xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-4xl font-bold text-primary mb-1">{pkg.capacity}</p>
                      <p className="text-sm text-muted-foreground">{pkg.ideal}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link to="/#contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Need a custom solution? <Link to="/#contact" className="text-primary hover:underline">Contact us</Link> for personalized packages.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                How It Works
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Your Journey to{" "}
                <span className="text-accent">Solar Power</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Going solar is simple. Here's how we make it happen.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits List */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-energy/10 text-energy text-sm font-medium rounded-full mb-4">
                  Complete Package
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Everything Included in Our{" "}
                  <span className="text-energy">Home Solar Solution</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  From consultation to installation and beyond, we take care of everything.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-energy flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                    alt="Solar panels on home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-energy text-energy-foreground p-4 rounded-2xl shadow-xl animate-float-delayed">
                  <div className="text-center">
                    <Battery className="w-8 h-8 mx-auto mb-1" />
                    <p className="text-xs font-semibold">Battery Backup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-energy to-energy/80 rounded-3xl p-8 md:p-12 text-center">
              <Home className="w-16 h-16 mx-auto mb-6 text-energy-foreground/80" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-energy-foreground mb-4">
                Ready to Power Your Home with Solar?
              </h2>
              <p className="text-energy-foreground/80 max-w-2xl mx-auto mb-8">
                Get a free home assessment and see how much you can save.
                Our team will design the perfect system for your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="gap-2 font-semibold">
                  <Link to="/#contact">
                    <Zap className="w-5 h-5" />
                    Get Free Home Assessment
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-energy-foreground/30 text-energy-foreground hover:bg-energy-foreground/10">
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
