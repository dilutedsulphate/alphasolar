import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const services = [
  { name: "Hotel Solar Solutions", href: "/services/hotels" },
  { name: "Commercial Solar", href: "/services/commercial" },
  { name: "Domestic Solar", href: "/services/domestic" },
];

const quickLinks = [
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Accessories", href: "/accessories" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1A2z4VmDmN/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/alpha-solar-power/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCUpz_S2nScAV1S16bDA7tMQ", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/alpha.solar.power?igsh=aHByZTh6dmkxbHcy", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white rounded-xl p-2">
                <img
                  src="/alpha-solar-power-logo--3-.png"
                  alt="Alpha Solar Power"
                  className="h-20 w-auto"
                />
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Kashmir's trusted solar energy partner. We provide premium solar
              solutions for hotels, commercial establishments, and homes across
              Jammu & Kashmir.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Vessu, Anantnag
                  <br />
                  Jammu and Kashmir 192221
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+918491028278"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    +91 84910 28278
                  </a>
                  <a
                    href="tel:+917006922257"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    +91 70069 22257
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:alphasolarpower13@gmail.com"
                  className="text-background/70 hover:text-primary transition-colors text-sm break-all"
                >
                  alphasolarpower13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Alpha Solar Power. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/60 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
