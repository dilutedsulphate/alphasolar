import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const blogPosts = [
  {
    id: "solar-benefits",
    slug: "solar-benefits",
    title: "Why Solar Power in Kashmir is the Smart Choice: 10 Benefits for Homeowners",
    excerpt:
      "Looking for the best solar in Kashmir? Discover why thousands of Kashmir families are choosing solar energy J&K for energy independence, lower bills, and reliable power during outages. Kashmir solar solutions that pay for themselves.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    category: "Guide",
    author: "Alpha Solar Team",
    date: "2025-12-15",
    readTime: "5 min read",
  },
  {
    id: "installation-guide",
    slug: "installation-guide",
    title: "Solar Panel Installation Kashmir: Complete Step-by-Step Guide",
    excerpt:
      "Planning solar panel installation in Kashmir? Learn exactly what to expect from site assessment to commissioning. Trusted solar companies in Kashmir follow these proven steps for seamless installations.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
    category: "Installation",
    author: "Engineering Team",
    date: "2025-11-20",
    readTime: "8 min read",
  },
  {
    id: "maintenance-tips",
    slug: "maintenance-tips",
    title: "Solar Panel Maintenance in Kashmir: Expert Tips for Snow, Rain & Peak Performance",
    excerpt:
      "Maximize your renewable energy Kashmir investment with proper maintenance. Learn how the best solar in Kashmir performs through harsh winters, heavy snowfall, and ensures year-round efficiency for your solar energy J&K system.",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=600&auto=format&fit=crop",
    category: "Maintenance",
    author: "Technical Team",
    date: "2025-10-25",
    readTime: "6 min read",
  },
  {
    id: "subsidies",
    slug: "subsidies",
    title: "Solar Subsidy Kashmir 2025: Government Benefits & Net Metering Guide",
    excerpt:
      "Claim up to 40% solar subsidy Kashmir offers under PM Surya Ghar scheme. Complete guide to solar energy J&K incentives, tax benefits, and net metering policies that make solar power in Kashmir affordable for every household.",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=600&auto=format&fit=crop",
    category: "Policy",
    author: "Alpha Solar Team",
    date: "2025-10-10",
    readTime: "7 min read",
  },
  {
    id: "hotel-case-study",
    slug: "hotel-case-study",
    title: "Best Solar in Kashmir: How a Pahalgam Hotel Cut Energy Bills by 85%",
    excerpt:
      "See real results from Kashmir solar solutions. This 100kW commercial installation showcases why leading solar companies in Kashmir are transforming hospitality businesses with renewable energy Kashmir expertise.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=600&auto=format&fit=crop",
    category: "Case Study",
    author: "Project Team",
    date: "2025-09-28",
    readTime: "10 min read",
  },
  {
    id: "battery-storage",
    slug: "battery-storage",
    title: "End Power Cuts Forever: Battery Storage for Solar Power in Kashmir",
    excerpt:
      "Tired of load shedding? Kashmir solar solutions with battery backup ensure 24/7 power for your home or business. Explore the best solar in Kashmir storage options that solar companies in Kashmir recommend for uninterrupted electricity.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=600&auto=format&fit=crop",
    category: "Technology",
    author: "Technical Team",
    date: "2025-09-15",
    readTime: "6 min read",
  },
];

interface BlogSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function BlogSection({ limit = 3, showViewAll = true }: BlogSectionProps) {
  const displayedPosts = blogPosts.slice(0, limit);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Solar Blog
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Learn About <span className="text-primary">Solar Energy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with the latest solar news, guides, and tips from our
            expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/90">
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
