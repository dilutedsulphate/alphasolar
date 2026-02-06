import { Award, Users, Target, Leaf } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make clean, renewable solar energy accessible to every home, hotel, and business in Kashmir, reducing dependence on unreliable grid power.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We use only premium-grade solar panels and equipment from trusted manufacturers, backed by industry-leading warranties.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "As a Kashmiri company, we understand local weather patterns, power challenges, and customer needs better than anyone.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Every installation reduces carbon emissions and helps preserve Kashmir's pristine environment for future generations.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Powering Kashmir's{" "}
                <span className="text-primary">Solar Revolution</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Alpha Solar Power</strong>{" "}
                is Kashmir's leading solar energy company, headquartered in
                Vessu, Anantnag. Since 2019, we've helped hundreds of hotels,
                businesses, and homes transition to clean, reliable solar power.
              </p>
              <p className="leading-relaxed">
                Founded with a vision to reduce Kashmir's dependence on
                unpredictable grid power, we've grown to become the region's
                most trusted name in solar installations. Our team of certified
                engineers and technicians delivers world-class solutions
                tailored to the unique climatic conditions of Jammu & Kashmir.
              </p>
              <p className="leading-relaxed">
                From the snow-capped mountains of Gulmarg to the bustling
                markets of Srinagar, our solar installations are powering a
                greener, more sustainable Kashmir. We take pride in our 100%
                customer satisfaction rate and our commitment to after-sales
                service.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <p className="text-3xl font-bold text-primary font-heading">
                  5+
                </p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <p className="text-3xl font-bold text-accent font-heading">
                  50+
                </p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <p className="text-3xl font-bold text-energy font-heading">
                  15MW+
                </p>
                <p className="text-sm text-muted-foreground">Installed</p>
              </div>
            </div>
          </div>

          {/* Image + Values */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=800&auto=format&fit=crop"
                  alt="Alpha Solar team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-3xl -z-10" />
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
