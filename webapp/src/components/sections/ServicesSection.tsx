import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, Hotel, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  bgColor: string;
  iconColor: string;
}

const services: Service[] = [
  {
    icon: Hotel,
    title: "Hotel Solar Solutions",
    description:
      "Large-scale solar installations designed for hotels and resorts. Reduce operational costs, attract eco-conscious travelers, and showcase your commitment to sustainability.",
    features: [
      "Custom capacity planning",
      "Grid-tied systems",
      "Battery backup options",
      "Real-time monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
    href: "/services/hotels",
    bgColor: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Power your business with clean energy. Our commercial solar solutions help factories, offices, and shops significantly reduce electricity costs while meeting sustainability goals.",
    features: [
      "Industrial-grade panels",
      "Scalable systems",
      "Net metering support",
      "Tax benefits guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=600&auto=format&fit=crop",
    href: "/services/commercial",
    bgColor: "bg-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Home,
    title: "Domestic Solar",
    description:
      "Make your home energy-independent with our residential solar systems. Perfect for Kashmiri homes dealing with power cuts and rising electricity bills.",
    features: [
      "Rooftop installations",
      "Hybrid inverters",
      "Battery storage",
      "Smart home integration",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    href: "/services/domestic",
    bgColor: "bg-energy/20",
    iconColor: "text-energy",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solar Solutions for{" "}
            <span className="text-primary">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From large hotels to cozy homes, we provide tailored solar
            installations that maximize your energy savings and minimize your
            carbon footprint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.bgColor} backdrop-blur-sm flex items-center justify-center`}
                >
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between mt-4 group/btn"
                >
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which solution is right for you?
          </p>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link to="/contact">
              Get Expert Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
