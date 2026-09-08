import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500 pointer-events-none" />

      <div className="container relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-mono text-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities & Projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up opacity-0 delay-100">
            MohamadBaker
            <br />
            <span className="text-gradient">Yehya</span>
          </h1>

          {/* Subheading / Bio from CV */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 delay-200">
            <span className="text-foreground font-medium">AI & Software Engineer</span> passionate about building intelligent automation tools. Specializes in integrating local large language models, computer vision, and machine learning pipelines into scalable modern web and mobile applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-fade-up opacity-0 delay-300">
            <Button
              size="lg"
              className="glow-primary font-medium px-7 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>

            <a
              href="./MohamadBaker-Yehya-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 hover:border-primary hover:bg-primary/10 font-medium px-6 gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>View Resume</span>
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="font-medium px-7 hover:border-accent/50 cursor-pointer"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
              aria-label="GitHub Profile"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/bakeryehya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mohamadbakeryehya@gmail.com"
              aria-label="Send Email"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground animate-fade-in opacity-0 delay-500">
          <span className="text-xs font-mono">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
