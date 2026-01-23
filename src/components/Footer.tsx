import { Github, Linkedin, Mail, Heart, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-16 bg-navy-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shadow-glow">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold gradient-text mb-2">
            ITSM Predictive Automation & Risk Mitigation
          </h3>
          <p className="text-sm text-teal-100/50 mb-2">
            ABC TECH — ITSM Incident Analysis & Prediction
          </p>
          <p className="text-sm text-teal-100/40 mb-8">
            A data science portfolio project by{" "}
            <span className="text-primary font-medium">Vinod Bavage</span>
          </p>

          {/* Blinking Portfolio Button */}
          <div className="mb-10">
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
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://github.com/vinodbavage31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinodbavage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 hover:scale-110 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="mailto:vinodbavage@example.com"
              className="w-12 h-12 rounded-xl bg-teal-100/5 border border-teal-100/10 flex items-center justify-center hover:bg-teal-100/10 hover:border-teal-100/20 hover:scale-110 transition-all duration-300 group"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-teal-100/60" />
            </a>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          
          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-xs text-teal-100/40">
            <span>© {new Date().getFullYear()} Vinod Bavage. Made with</span>
            <Heart className="w-3 h-3 text-primary animate-pulse" />
            <span>and data science</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
