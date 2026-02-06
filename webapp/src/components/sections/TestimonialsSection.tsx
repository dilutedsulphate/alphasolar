import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Mohammad Ashraf",
    role: "Hotel Owner, Pahalgam",
    content:
      "Alpha Solar transformed our hotel's energy consumption. We've seen a 85% reduction in electricity bills. Their team was professional and the installation was seamless. Highly recommended for all hoteliers in Kashmir!",
    rating: 5,
    image: "",
  },
  {
    name: "Farooq Ahmad",
    role: "Factory Owner, Anantnag",
    content:
      "Best investment we made for our textile factory. The commercial solar system from Alpha Solar pays for itself. Their after-sales support is exceptional. True professionals!",
    rating: 5,
    image: "",
  },
  {
    name: "Shabir Malik",
    role: "Homeowner, Srinagar",
    content:
      "No more power cuts affecting our daily life! The domestic solar system with battery backup keeps our home powered 24/7. Alpha Solar's team explained everything clearly and installed it within days.",
    rating: 5,
    image: "",
  },
  {
    name: "Bilal Ahmed",
    role: "Resort Manager, Gulmarg",
    content:
      "Our guests love knowing they're staying at an eco-friendly resort. Alpha Solar helped us achieve our sustainability goals while cutting costs significantly. Outstanding service!",
    rating: 5,
    image: "",
  },
  {
    name: "Rashid Khan",
    role: "Shop Owner, Anantnag",
    content:
      "My shop no longer suffers during power cuts. The solar system runs everything smoothly - lights, fans, and even refrigeration. Thank you Alpha Solar for reliable power!",
    rating: 5,
    image: "",
  },
  {
    name: "Nazir Ahmad",
    role: "Apple Orchardist, Shopian",
    content:
      "We use solar power for our cold storage facility now. It's been a game-changer for preserving our apple harvest. Alpha Solar understood our unique needs perfectly.",
    rating: 5,
    image: "",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-energy/10 text-energy text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what businesses and
            homeowners across Kashmir say about their experience with Alpha
            Solar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20" />

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-energy text-energy"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary font-heading">
              4.9/5
            </p>
            <p className="text-muted-foreground mt-1">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent font-heading">500+</p>
            <p className="text-muted-foreground mt-1">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-energy font-heading">98%</p>
            <p className="text-muted-foreground mt-1">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary font-heading">100%</p>
            <p className="text-muted-foreground mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
