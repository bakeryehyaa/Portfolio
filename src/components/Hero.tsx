import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-mono text-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for projects
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up opacity-0 delay-100">
            Mohamad Baker
            <br />
            <span className="text-gradient">Yehya</span>
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0 delay-200">
            Full Stack Developer building end-to-end web and mobile applications integrated with machine learning and AI-driven features. Skilled in scalable backends, modern frontends, and deploying AI models.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up opacity-0 delay-300">
            <Button 
              size="lg" 
              className="glow-primary font-medium px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-medium px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-up opacity-0 delay-400">
            <a 
              href="https://github.com/bakeryehyaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/bakeryehya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mohamadbakeryehya@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-500">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
