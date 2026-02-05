import { ArrowRight, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="font-mono text-primary text-sm tracking-wider">CONTACT</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something
            <span className="text-gradient"> Amazing</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
          </p>
          
          {/* Contact card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 border-glow">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>mohamadbakeryehya@gmail.com</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-border" />
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Beirut, Lebanon</span>
              </div>
            </div>
            
            <Button size="lg" className="glow-primary font-medium px-8 group" asChild>
              <a href="mailto:mohamadbakeryehya@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send a Message
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Footer */}
          <div className="mt-24 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 All rights reserved. Built with passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
