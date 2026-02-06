import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sun, Zap, Shield, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: 500, suffix: "+", label: "Installations", duration: 2500 },
  { value: 15, suffix: "MW+", label: "Capacity Installed", duration: 2000 },
  { value: 98, suffix: "%", label: "Customer Satisfaction", duration: 2800 },
  { value: 9, suffix: "+", label: "Years Experience", duration: 2200 },
];

const features = [
  "Free Site Assessment",
  "Premium Quality Panels",
  "Expert Installation",
  "24/7 Support",
];

// Animated Counter Component - animates on scroll into view, resets when scrolled away
function AnimatedCounter({ end, suffix, duration = 2500 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolled out of view
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing - slow start, accelerate, slow end
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary font-heading">
      <span>{count}</span>
      <span className="text-primary/80">{suffix}</span>
    </div>
  );
}

// Particle component for solar rays
function SolarParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Solar ray particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-energy/30 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Floating solar cells */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`cell-${i}`}
          className="absolute w-4 h-4 border-2 border-primary/20 rounded animate-float-particle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

// Animated Solar Rays Component
function AnimatedSolarRays() {
  return (
    <div className="absolute -top-40 -right-40 w-[700px] h-[700px]">
      {/* Central sun glow */}
      <div className="absolute inset-0 animate-glow">
        <div className="absolute inset-0 bg-gradient-radial from-energy/30 via-energy/10 to-transparent rounded-full" />
      </div>

      {/* Rotating rays */}
      <div className="absolute inset-0 animate-rotate-slow">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-t from-energy/40 to-transparent origin-bottom"
            style={{
              transform: `rotate(${i * 30}deg) translateX(-50%)`,
            }}
          />
        ))}
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-10 rounded-full border-2 border-energy/20 animate-pulse-ring" />
      <div className="absolute inset-20 rounded-full border border-energy/15 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-32 rounded-full border border-energy/10 animate-pulse-ring" style={{ animationDelay: '1s' }} />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated opacity-30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Solar Rays */}
        <AnimatedSolarRays />

        {/* Solar Particles */}
        <SolarParticles />

        {/* Floating Elements with enhanced animations */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-2xl rotate-12 animate-float-rotate" />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-accent/10 rounded-xl -rotate-12 animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-energy/10 rounded-lg rotate-45 animate-float-bounce" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge with sparkle animation */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fade-in group hover:bg-primary/15 transition-colors cursor-default">
              <Sun className="w-4 h-4 text-energy animate-spin-slow" />
              <span className="text-sm font-medium text-primary">
                Kashmir's Trusted Solar Partner
              </span>
              <Sparkles className="w-4 h-4 text-energy animate-sparkle" />
            </div>

            {/* Headline with enhanced animation */}
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="animate-slide-up inline-block">Power Your Future with</span>{" "}
                <span className="text-primary animate-slide-up inline-block stagger-1 relative">
                  Clean Solar
                  <span className="absolute -inset-1 bg-primary/10 rounded-lg -z-10 animate-pulse-subtle" />
                </span>{" "}
                <span className="text-accent animate-slide-up inline-block stagger-2">Energy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-slide-up stagger-3">
                Transform your hotel, business, or home with premium solar
                solutions. Reduce electricity bills by up to 90% and contribute
                to a sustainable Kashmir.
              </p>
            </div>

            {/* Features with stagger animation */}
            <div className="grid grid-cols-2 gap-3 animate-slide-up stagger-4">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-foreground group hover:text-primary transition-colors"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-5">
              <Button asChild size="lg" className="gap-2 font-semibold text-base group relative overflow-hidden">
                <Link to="/contact">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                  Get Free Quote
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 font-semibold text-base group"
              >
                <Link to="/about">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust Badges with animation */}
            <div className="flex items-center gap-6 pt-4 animate-slide-up stagger-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground group hover:text-primary transition-colors cursor-default">
                <Shield className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <span>25 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group hover:text-energy transition-colors cursor-default">
                <Zap className="w-5 h-5 text-energy group-hover:animate-bounce" />
                <span>Government Approved</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual with enhanced effects */}
          <div className="relative animate-slide-in-right">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-[2rem] animate-pulse-ring" />
              <div className="absolute -inset-8 border border-primary/5 rounded-[2.5rem] animate-pulse-ring" style={{ animationDelay: '0.5s' }} />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop"
                  alt="Solar panels installation on rooftop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border animate-float group hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sun className="w-6 h-6 text-accent animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Energy Savings Card */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl animate-float-delayed group hover:scale-105 transition-transform">
                <div className="text-center">
                  <p className="text-3xl font-bold animate-count-up">90%</p>
                  <p className="text-xs opacity-90">Energy Savings</p>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary rounded-2xl animate-pulse-glow -z-10" />
              </div>

              {/* Additional floating element */}
              <div className="absolute top-1/2 -right-8 bg-accent/90 text-accent-foreground p-3 rounded-xl shadow-lg animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar with animated counters */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border animate-slide-up stagger-7 hover:bg-card/70 transition-colors">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center group cursor-default ${
                index < stats.length - 1
                  ? "md:border-r md:border-border"
                  : ""
              }`}
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={stat.duration} />
              <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
