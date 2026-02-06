import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Legal
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Terms of Service
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
                  <h2 className="font-heading text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing our website or engaging Alpha Solar Power for solar installation services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">2. Services Offered</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Alpha Solar Power provides the following services in Jammu & Kashmir:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Solar panel installation for residential, commercial, and hotel properties</li>
                    <li>Free site assessment and solar system design</li>
                    <li>Supply of solar panels, inverters, batteries, and accessories</li>
                    <li>Net metering setup and grid connection assistance</li>
                    <li>Government subsidy application support</li>
                    <li>After-sales maintenance and support services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">3. Quotations and Pricing</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>All quotations are valid for 30 days from the date of issue unless otherwise specified.</li>
                    <li>Prices are subject to change based on market conditions and equipment availability.</li>
                    <li>Final pricing will be confirmed after site assessment and system design approval.</li>
                    <li>Government subsidies are subject to approval and availability from respective authorities.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">4. Installation Terms</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Installation timelines are estimates and may vary based on weather conditions, permit approvals, and site conditions.</li>
                    <li>Customer must ensure clear access to the installation site and provide necessary permissions.</li>
                    <li>Structural modifications required for installation are subject to additional charges.</li>
                    <li>We are not responsible for delays caused by government agencies, electricity providers, or force majeure events.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">5. Payment Terms</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>A booking advance (typically 30-50%) is required to confirm the order.</li>
                    <li>Balance payment is due before or upon completion of installation.</li>
                    <li>Payment can be made via bank transfer, cheque, or other approved methods.</li>
                    <li>Subsidy amounts will be adjusted as per government disbursement timelines.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">6. Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Alpha Solar Power provides the following warranties:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Solar Panels:</strong> 25-year performance warranty as per manufacturer terms.</li>
                    <li><strong>Inverters:</strong> 5-10 year warranty as per manufacturer specifications.</li>
                    <li><strong>Batteries:</strong> Warranty as per manufacturer terms (typically 2-5 years).</li>
                    <li><strong>Installation Workmanship:</strong> 2-year warranty on installation work.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Warranties are void if the system is tampered with, improperly maintained, or damaged due to external factors beyond normal use.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">7. Maintenance and Support</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Basic maintenance guidance is provided upon installation completion.</li>
                    <li>Annual Maintenance Contracts (AMC) are available at additional cost.</li>
                    <li>Emergency support is available during working hours (Mon-Sat, 9 AM - 6 PM).</li>
                    <li>Service charges may apply for issues not covered under warranty.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">8. Customer Responsibilities</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide accurate information about property and electricity consumption.</li>
                    <li>Obtain necessary approvals from housing societies or local authorities if required.</li>
                    <li>Ensure safe access to the installation site for our team.</li>
                    <li>Follow recommended maintenance practices for optimal system performance.</li>
                    <li>Report any issues or defects promptly within the warranty period.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Alpha Solar Power shall not be liable for indirect, incidental, or consequential damages arising from the use of our products or services. Our liability is limited to the value of the products and services provided. We are not responsible for power generation shortfalls due to weather conditions, shading, or factors beyond our control.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">10. Cancellation and Refunds</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Cancellation before equipment procurement: Full refund minus processing charges.</li>
                    <li>Cancellation after equipment procurement: Refund subject to restocking fees.</li>
                    <li>Cancellation after installation commencement: No refund applicable.</li>
                    <li>Refunds will be processed within 30 working days of cancellation approval.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">11. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, images, logos, and designs, is the property of Alpha Solar Power and is protected by intellectual property laws. Unauthorized use or reproduction is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms or our services shall be resolved through mutual discussion first. If unresolved, disputes shall be subject to arbitration under Indian Arbitration and Conciliation Act, with Anantnag, Jammu & Kashmir as the jurisdiction.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">13. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of updated terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">14. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us:
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
