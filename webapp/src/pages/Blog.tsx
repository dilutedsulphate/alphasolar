import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogSection, blogPosts } from "@/components/sections/BlogSection";
import { Sun } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Blog Hero */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Sun className="w-4 h-4 text-energy" />
                <span className="text-sm font-medium text-primary">
                  Alpha Solar Blog
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solar Energy <span className="text-primary">Insights</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert guides, tips, and news about solar energy in Kashmir.
                Learn how to maximize your solar investment.
              </p>
            </div>
          </div>
        </section>

        {/* All Blog Posts */}
        <BlogSection limit={blogPosts.length} showViewAll={false} />
      </main>
      <Footer />
    </div>
  );
}
