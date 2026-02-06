import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Cable, Plug, Package, Box, Ruler, Battery, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const services = [
  { name: "Hotel Solar Solutions", href: "/services/hotels", description: "Large-scale installations for hospitality" },
  { name: "Commercial Solar", href: "/services/commercial", description: "Power your business sustainably" },
  { name: "Domestic Solar", href: "/services/domestic", description: "Home solar panel systems" },
];

const accessories = [
  { name: "Solar Cables", href: "/accessories", icon: Cable },
  { name: "MC4 Connectors", href: "/accessories", icon: Plug },
  { name: "Junction Boxes", href: "/accessories", icon: Box },
  { name: "Mounting Rails", href: "/accessories", icon: Ruler },
  { name: "Charge Controllers", href: "/accessories", icon: Gauge },
  { name: "Battery Cables", href: "/accessories", icon: Battery },
];

// WhatsApp Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-28">
          {/* Logo - No white background, bigger size */}
          <Link to="/" className="flex items-center group">
            <img
              src="/alpha-solar-power-logo--3-.png"
              alt="Alpha Solar Power"
              className="h-32 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      to={service.href}
                      className="flex flex-col items-start gap-1 p-3"
                    >
                      <span className="font-medium">{service.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {service.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog Link (direct, no dropdown) */}
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/blog")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Blog
            </Link>

            {/* Accessories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/accessories")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}>
                  Accessories
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {accessories.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className="flex items-center gap-3 p-3">
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    to="/accessories"
                    className="p-3 text-primary font-medium border-t"
                  >
                    View All Accessories
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors"
            >
              <a
                href="https://wa.me/916005860151"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild className="gap-2 font-semibold">
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Get Expert Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border">
                  <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img
                      src="/alpha-solar-power-logo--3-.png"
                      alt="Alpha Solar Power"
                      className="h-16 w-auto object-contain"
                    />
                  </Link>
                </div>

                <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                  <Link
                    to="/"
                    className="block px-4 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="pt-2">
                    <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Services
                    </span>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{service.name}</span>
                        <span className="block text-sm text-muted-foreground">
                          {service.description}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/blog"
                    className="block px-4 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>

                  <div className="pt-2">
                    <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Accessories
                    </span>
                    {accessories.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/about"
                    className="block px-4 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  <Link
                    to="/contact"
                    className="block px-4 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="p-6 border-t border-border space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 font-semibold border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a
                      href="https://wa.me/916005860151"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full gap-2 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/contact">
                      <Phone className="w-4 h-4" />
                      Get Expert Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
