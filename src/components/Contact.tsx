import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Copy, Check, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mohamadbakeryehya@gmail.com";
  const phone = "+961 70 034 239";
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-card/20">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="font-mono text-primary text-sm tracking-wider">CONTACT</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Interested in collaborating on intelligent software, machine learning integration, full-stack systems, or consulting? Feel free to reach out directly.
          </p>

          {/* Contact card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 border-glow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Email item */}
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/80">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-sm text-foreground hover:text-primary transition-colors break-all"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Phone item */}
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/80">
                <div className="p-3 rounded-full bg-accent/10 text-accent mb-1">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">Phone / WhatsApp</span>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="font-medium text-sm text-foreground hover:text-accent transition-colors"
                >
                  {phone}
                </a>
                <span className="text-xs text-muted-foreground mt-1">Available on WhatsApp</span>
              </div>

              {/* Location item */}
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/80">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">Location</span>
                <span className="font-medium text-sm text-foreground">Beirut, Lebanon</span>
                <span className="text-xs text-muted-foreground mt-1">Open to Remote Worldwide</span>
              </div>
            </div>

            {/* Direct Message button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="glow-primary font-medium px-8 group bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href={`mailto:${email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send an Email
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleCopyEmail}
                className="border-border hover:border-primary/50 font-medium px-6 gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Email Copied" : "Copy Email Address"}</span>
              </Button>
            </div>

            {/* Social Links inside card */}
            <div className="flex items-center justify-center gap-6 mt-10 pt-6 border-t border-border/80">
              <a
                href="https://github.com/bakeryehyaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/bakeryehyaa</span>
              </a>

              <a
                href="https://linkedin.com/in/bakeryehya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/bakeryehya</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-mono">
              © {currentYear} MohamadBaker Yehya
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span>Beirut, Lebanon</span>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
