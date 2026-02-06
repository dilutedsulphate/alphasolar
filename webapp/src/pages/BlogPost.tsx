import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/components/sections/BlogSection";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Extended content for each blog post
  const getPostContent = (slug: string) => {
    const contents: Record<string, string[]> = {
      "solar-benefits": [
        "Kashmir faces unique energy challenges - frequent power cuts, harsh winters, and rising electricity costs. Solar energy offers a reliable solution that addresses all these issues while contributing to environmental sustainability.",
        "Here are the top 10 benefits of switching to solar energy for your Kashmir home:",
        "1. **Energy Independence**: No more planning your day around power cuts. With a solar system and battery backup, your home stays powered 24/7.",
        "2. **Massive Cost Savings**: Reduce your electricity bills by up to 90%. The average Kashmir household can save ₹2-3 lakhs over the system's lifetime.",
        "3. **Government Subsidies**: Avail up to 40% subsidy on residential solar installations under government schemes.",
        "4. **Increased Property Value**: Homes with solar installations typically sell for 3-4% more than comparable homes without solar.",
        "5. **Environmental Impact**: A typical 5kW system prevents 6-7 tonnes of CO2 emissions annually - equivalent to planting 100+ trees.",
        "6. **Low Maintenance**: Modern solar panels require minimal maintenance - just occasional cleaning and annual inspections.",
        "7. **25-Year Warranty**: Quality solar panels come with performance warranties ensuring at least 80% efficiency after 25 years.",
        "8. **Net Metering Benefits**: Export excess power to the grid and earn credits on your electricity bill.",
        "9. **Silent Operation**: Unlike generators, solar systems operate silently with no noise pollution.",
        "10. **Quick Payback**: Most Kashmir households see complete payback within 4-6 years.",
        "At Alpha Solar, we've helped over 500 Kashmir families make the switch to solar. Contact us today for a free assessment of your home's solar potential.",
      ],
      "installation-guide": [
        "Getting solar panels installed might seem daunting, but with Alpha Solar, it's a smooth, hassle-free process. Here's what to expect:",
        "**Phase 1: Initial Consultation (Day 1)**",
        "Our team visits your property to assess roof space, orientation, shading, and structural integrity. We analyze your electricity bills to determine optimal system size.",
        "**Phase 2: Custom Design (Days 2-3)**",
        "Our engineers create a customized system design optimized for your property. You receive a detailed proposal including system specifications, expected generation, savings projections, and pricing.",
        "**Phase 3: Approvals & Procurement (Days 4-7)**",
        "We handle all paperwork - net metering applications, subsidy documentation, and necessary approvals. Equipment is procured from our trusted suppliers.",
        "**Phase 4: Installation (Days 8-10)**",
        "Our certified technicians install the mounting structure, solar panels, inverter, and electrical connections. Most residential installations are completed within 2-3 days.",
        "**Phase 5: Inspection & Commissioning (Day 11-12)**",
        "System undergoes rigorous testing. JKPDD inspection is scheduled for net metering activation. Once approved, your system goes live!",
        "**Phase 6: Monitoring Setup (Day 13)**",
        "We set up remote monitoring so you can track your system's performance from your smartphone. Our team provides comprehensive training on system operation.",
        "**Post-Installation Support**",
        "Alpha Solar provides 24/7 support, regular maintenance visits, and performance monitoring to ensure your system operates at peak efficiency.",
      ],
      "maintenance-tips": [
        "Kashmir's climate presents unique challenges for solar panels - snow, dust, and extreme temperatures. Here's how to keep your system performing optimally:",
        "**Snow Removal**",
        "Kashmir's heavy snowfall can reduce generation significantly. However, most panels are installed at angles that allow snow to slide off naturally. For stubborn accumulation, use a soft-bristled brush or wait for the sun to melt it - never use sharp tools or hot water.",
        "**Regular Cleaning**",
        "Dust and bird droppings can reduce efficiency by 15-25%. Clean panels monthly during dry seasons using water and a soft cloth. Early morning is best when panels are cool.",
        "**Monitoring Performance**",
        "Use your monitoring app to track daily generation. Sudden drops often indicate issues needing attention. Compare monthly generation to previous years to spot trends.",
        "**Inverter Care**",
        "Keep the inverter area dust-free and well-ventilated. Check indicator lights regularly. Most inverters display error codes - familiarize yourself with common ones.",
        "**Cable & Connection Checks**",
        "Visually inspect cables annually for wear, rodent damage, or loose connections. Kashmir's temperature swings can affect connections over time.",
        "**Professional Maintenance**",
        "Schedule annual professional inspections with Alpha Solar. Our technicians check electrical connections, mounting security, and overall system health.",
        "**Seasonal Considerations**",
        "- **Winter**: Clear snow, check for ice damage, ensure no shading from bare trees\n- **Spring**: Deep clean after pollen season\n- **Summer**: Optimal generation period - monitor for peak performance\n- **Autumn**: Clear fallen leaves, prepare for winter",
      ],
      "subsidies": [
        "The government offers substantial support for solar adoption. Here's everything you need to know about subsidies in Jammu & Kashmir:",
        "**Central Government Subsidy (PM-SURYA GHAR)**",
        "Under the PM-SURYA GHAR scheme, residential consumers can avail:\n- 60% subsidy for systems up to 2kW\n- 40% subsidy for systems between 2-3kW\n- 40% on the first 3kW for larger systems",
        "**State Government Support**",
        "J&K provides additional support through:\n- Priority grid connection\n- Simplified net metering process\n- Interest subsidies on solar loans",
        "**Net Metering Benefits**",
        "Under net metering, excess power exported to the grid earns credits at the retail rate. Your meter runs backwards when exporting, effectively storing energy in the grid.",
        "**Tax Benefits**",
        "- 100% accelerated depreciation for commercial installations\n- GST of only 5% on solar equipment (reduced from 18%)\n- No customs duty on solar panels",
        "**How to Apply**",
        "1. Get quotes from empaneled vendors (Alpha Solar is government-empaneled)\n2. Apply online through the national portal\n3. Receive provisional sanction\n4. Complete installation\n5. Submit completion report\n6. Receive subsidy directly in bank account",
        "**Eligibility**",
        "- Must be a residential consumer with valid electricity connection\n- Installation must be by empaneled vendor\n- System must be grid-connected with net metering",
        "Alpha Solar handles the entire subsidy application process for you, ensuring you receive maximum benefits with minimum hassle.",
      ],
      "hotel-case-study": [
        "**Client**: Himalayan Heights Resort, Pahalgam",
        "**Challenge**: The 50-room resort was spending over ₹15 lakhs annually on electricity, with frequent power cuts disrupting guest experience.",
        "**Solution**: Alpha Solar designed and installed a 100kW grid-tied solar system with 50kWh battery backup.",
        "**System Specifications**:\n- 200 x 500W monocrystalline panels\n- 100kW string inverter\n- 50kWh lithium battery storage\n- Advanced monitoring system",
        "**Installation Process**:\nThe project was completed in 15 days during the off-season. Panels were installed on multiple rooftops and a ground-mounted array in unused land behind the resort.",
        "**Results After One Year**:\n- **85% reduction** in electricity bills (₹12.75 lakhs saved)\n- **Zero power disruptions** for guests\n- **Carbon offset**: 140 tonnes CO2 annually\n- **ROI period**: 4.2 years",
        "**Client Testimonial**:\n\"The solar installation has been transformative for our resort. Not only have our costs decreased dramatically, but our guests appreciate our commitment to sustainability. Several eco-conscious travelers specifically chose us because of our solar-powered operations.\" - Mohammad Ashraf, Owner",
        "**Key Success Factors**:\n1. Detailed load analysis ensured optimal system sizing\n2. Battery backup maintained operations during grid failures\n3. Strategic panel placement maximized generation\n4. Net metering export credits during low season\n5. Real-time monitoring enabled quick issue resolution",
        "This project demonstrates how hotels in Kashmir can achieve both financial and environmental goals through solar energy.",
      ],
      "battery-storage": [
        "Kashmir's frequent power outages make battery storage not just useful, but essential. Here's what you need to know:",
        "**Why Battery Storage?**\n\nEven with solar panels, you can't use solar power during outages unless you have battery storage. Batteries store excess daytime generation for use at night or during blackouts.",
        "**Types of Batteries**",
        "**Lithium-ion (LiFePO4)**:\n- 15+ year lifespan\n- 6000+ charge cycles\n- Compact and lightweight\n- Higher upfront cost\n- Best for: Most applications",
        "**Lead-acid (Tubular)**:\n- 5-7 year lifespan\n- 1500+ charge cycles\n- Bulky, requires maintenance\n- Lower upfront cost\n- Best for: Budget-conscious buyers",
        "**Sizing Your Battery**",
        "Calculate your essential loads (lights, fans, refrigerator, internet) and desired backup hours:\n\nBattery Size = (Total Watts × Hours) ÷ 0.8 (for efficiency)\n\nExample: 1000W loads × 4 hours = 5kWh battery needed",
        "**Hybrid Inverter Systems**",
        "Modern hybrid inverters combine solar, grid, and battery seamlessly:\n- Automatic switchover during outages (20ms)\n- Priority charging from solar\n- Grid charging as backup\n- Export excess to grid when battery full",
        "**Cost Considerations**",
        "- 5kWh Lithium system: ₹2.5-3.5 lakhs\n- 5kWh Lead-acid system: ₹1-1.5 lakhs\n- Annual savings from avoided DG use: ₹30,000-50,000",
        "**Our Recommendation**",
        "For Kashmir homes, we recommend lithium batteries despite higher cost due to:\n- Better performance in cold weather\n- No maintenance required\n- Longer warranty and lifespan\n- Smaller footprint",
        "Contact Alpha Solar for a customized battery storage solution that ensures uninterrupted power for your home.",
      ],
    };

    return contents[slug] || [
      "This article provides valuable insights about solar energy in Kashmir.",
      "Contact Alpha Solar for more information and personalized advice.",
    ];
  };

  const content = getPostContent(post.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </section>

        {/* Article Content */}
        <section className="relative -mt-32 pb-24">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto">
              {/* Article Header */}
              <div className="bg-card rounded-2xl shadow-xl border border-border p-8 mb-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <Badge className="mb-4">{post.category}</Badge>

                <h1 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Article Body */}
              <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {post.excerpt}
                  </p>

                  {content.map((paragraph, index) => (
                    <div
                      key={index}
                      className="mb-6 text-foreground/80 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          .replace(/\n/g, '<br />')
                      }}
                    />
                  ))}
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">Found this helpful?</h4>
                      <p className="text-sm text-muted-foreground">
                        Share it with others who might benefit
                      </p>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <h3 className="font-heading text-xl font-bold mb-2">
                  Ready to Go Solar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get a free consultation and customized quote for your property
                </p>
                <Button asChild size="lg">
                  <Link to="/#contact">Get Free Quote</Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
