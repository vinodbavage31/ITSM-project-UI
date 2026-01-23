import { Button } from "@/components/ui/button";
import { Github, ArrowDown, Linkedin, Sparkles, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg-enhanced.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900/95" />
      
      {/* Animated Orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-border bg-navy-800/80 backdrop-blur-sm mb-10 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-primary">Data Science Portfolio Project</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-100">
            <span className="gradient-text">ITSM Predictive</span>
            <br />
            <span className="gradient-text">Automation & Risk</span>
            <br />
            <span className="text-white">Mitigation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-teal-100/90 mb-4 animate-fade-up animation-delay-200">
            ABC TECH — ITSM Incident Analysis & Prediction
          </p>

          {/* Tagline */}
          <p className="text-lg text-teal-100/60 max-w-2xl mx-auto mb-12 animate-fade-up animation-delay-200">
            Transforming IT operations from reactive firefighting to proactive management 
            using machine learning and predictive analytics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            {/* Blinking Portfolio Button */}
            <Button 
              size="lg" 
              className="portfolio-btn gradient-hero text-primary-foreground font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="https://vinod-portfolio.pages.dev/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                View Full Portfolio
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="gradient-hero text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-[0_0_80px_hsl(175_80%_45%/0.4)] transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/vinodbavage31" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg backdrop-blur-sm"
              asChild
            >
              <a href="#overview">
                Explore Project
                <ArrowDown className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-10 animate-fade-up animation-delay-400">
            <a
              href="https://www.linkedin.com/in/vinodbavage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-teal-100/50 hover:text-primary transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Stats Preview */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up animation-delay-500">
            {[
              { value: "45K+", label: "Incidents Analyzed", color: "from-teal-500 to-teal-600" },
              { value: "96%", label: "Prediction Accuracy", color: "from-purple-400 to-purple-600" },
              { value: "4", label: "ML Models", color: "from-teal-500 to-purple-500" },
              { value: "98%", label: "F1-Score (RFC)", color: "from-purple-500 to-teal-500" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-2xl bg-navy-800/50 backdrop-blur-sm border border-primary/20 group hover:border-primary/40 transition-all duration-300"
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-teal-100/50 mt-2">{stat.label}</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-7 h-12 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full gradient-hero animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
