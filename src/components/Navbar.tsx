import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, Linkedin, Sparkles, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#solutions", label: "Solutions" },
    { href: "#architecture", label: "Architecture" },
    { href: "#performance", label: "Performance" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-glow group-hover:shadow-[0_0_40px_hsl(175_80%_45%/0.4)] transition-all duration-300">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground hidden sm:block group-hover:text-primary transition-colors">
              Vinod Bavage
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social & CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/vinodbavage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl hover:bg-primary/10 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            {/* Blinking Portfolio Button in Navbar */}
            <Button 
              size="sm" 
              className="portfolio-btn gradient-hero text-primary-foreground font-medium"
              asChild
            >
              <a href="https://vinod-portfolio.pages.dev/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Portfolio
              </a>
            </Button>
            
            <Button 
              size="sm" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/vinodbavage31" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-navy-900/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 px-4">
                <a
                  href="https://vinod-portfolio.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full portfolio-btn gradient-hero text-primary-foreground">
                    <ExternalLink className="w-4 h-4" />
                    View Full Portfolio
                  </Button>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/vinodbavage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                  </a>
                  <a
                    href="https://github.com/vinodbavage31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10">
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
