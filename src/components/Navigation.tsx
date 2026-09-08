import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl tracking-tight">
            <span className="text-gradient">mohamadbaker</span>
            <span className="text-foreground ml-1">YEHYA</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <a
              href="./MohamadBaker-Yehya-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline px-2.5 py-1.5 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <Button
              size="sm"
              className="font-medium bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
              onClick={() => scrollToSection("#contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/80 space-y-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="./MohamadBaker-Yehya-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2 border-primary/30 text-primary cursor-pointer">
                    <FileText className="w-4 h-4" />
                    View Resume (PDF)
                  </Button>
                </a>

                <Button
                  size="sm"
                  className="w-full bg-primary text-primary-foreground cursor-pointer"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
