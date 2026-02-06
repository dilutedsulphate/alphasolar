import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CheckCircle2, Sun } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    description:
      "Alpha Solar was founded in Anantnag with a vision to bring reliable solar energy to Kashmir.",
  },
  {
    year: "2020",
    title: "First Hotel Project",
    description:
      "Completed our first major hotel installation in Pahalgam, proving large-scale solar viability in Kashmir.",
  },
  {
    year: "2021",
    title: "100 Installations",
    description:
      "Reached milestone of 100 successful installations across residential and commercial sectors.",
  },
  {
    year: "2022",
    title: "Government Partnership",
    description:
      "Became an empaneled vendor for government solar subsidy schemes in J&K.",
  },
  {
    year: "2023",
    title: "500+ Customers",
    description:
      "Celebrated serving 500+ happy customers with a 98% satisfaction rate.",
  },
  {
    year: "2024",
    title: "Regional Leader",
    description:
      "Recognized as Kashmir's leading solar energy company with 15MW+ total installations.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* About Hero */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Sun className="w-4 h-4 text-energy" />
                <span className="text-sm font-medium text-primary">
                  About Alpha Solar
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Powering Kashmir's{" "}
                <span className="text-primary">Sustainable Future</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Since 2019, delivering excellence in solar energy solutions for hotels,
                businesses, and homes across Jammu & Kashmir.
              </p>
            </div>
          </div>
        </section>

        {/* About Section with Details */}
        <AboutSection />

        {/* Our Journey Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Solar Journey</span> Since 2019
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ml-16 md:ml-0 ${
                        index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 mt-2" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-energy/10 text-energy text-sm font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                The Alpha Solar <span className="text-primary">Advantage</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "5+ years of experience in Kashmir",
                "500+ successful installations",
                "Government empaneled vendor",
                "Premium quality components only",
                "24/7 customer support",
                "Free site assessment",
                "Comprehensive warranties",
                "After-sales maintenance",
                "Net metering assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
