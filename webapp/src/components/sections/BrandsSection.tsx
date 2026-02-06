// Major Indian solar panel manufacturers that Alpha Solar works with
const brands = [
  { name: "Adani Solar" },
  { name: "Vikram Solar" },
  { name: "Tata Power" },
  { name: "Waaree" },
  { name: "Luminous" },
  { name: "Havells" },
  { name: "Daewoo" },
  { name: "Exide" },
];

export function BrandsSection() {
  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Our Partners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            Brands We Work With
          </h2>
          <p className="text-muted-foreground mt-2">
            Partnering with India's leading solar manufacturers
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* First Row - Moving Left */}
        <div className="flex animate-marquee mb-8">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="w-48 h-24 bg-white rounded-xl border border-border flex items-center justify-center p-6 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
                <span className="text-xl font-bold text-gray-700 group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex animate-marquee-reverse">
          {[...duplicatedBrands].reverse().map((brand, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="w-48 h-24 bg-white rounded-xl border border-border flex items-center justify-center p-6 transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg">
                <span className="text-xl font-bold text-gray-700 group-hover:text-accent transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
