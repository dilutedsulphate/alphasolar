import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Legal
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: February 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Alpha Solar Power ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our solar energy services in Jammu & Kashmir.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information about you in various ways, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and address when you request a quote or contact us.</li>
                    <li><strong>Property Information:</strong> Details about your property for solar assessment, including roof size, electricity consumption, and location.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
                    <li><strong>Communication Data:</strong> Records of your correspondence with us via phone, email, or WhatsApp.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide solar installation quotes and services</li>
                    <li>Conduct site assessments and system design</li>
                    <li>Process your orders and installations</li>
                    <li>Communicate with you about our services and updates</li>
                    <li>Provide after-sales support and maintenance services</li>
                    <li>Assist with government subsidy applications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Service Partners:</strong> Equipment suppliers and installation teams working on your project.</li>
                    <li><strong>Government Agencies:</strong> For processing solar subsidies and net metering applications with your consent.</li>
                    <li><strong>Electricity Providers:</strong> For net metering setup and grid connection.</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We strive to use commercially acceptable means to protect your data but cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">7. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">8. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                    <p className="text-foreground font-semibold">Alpha Solar Power</p>
                    <p className="text-muted-foreground">Vessu, Anantnag</p>
                    <p className="text-muted-foreground">Jammu and Kashmir 192221</p>
                    <p className="text-muted-foreground mt-2">
                      Email: <a href="mailto:alphasolarpower13@gmail.com" className="text-primary hover:underline">alphasolarpower13@gmail.com</a>
                    </p>
                    <p className="text-muted-foreground">
                      Phone: <a href="tel:+918491028278" className="text-primary hover:underline">+91 84910 28278</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
