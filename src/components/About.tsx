import { Brain, Code2, Database, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "React, React Native, Node.js (TypeScript), REST APIs, and scalable web & mobile applications.",
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    description:
      "LLMs, Retrieval-Augmented Generation (RAG), computer vision, classification, and prediction models.",
  },
  {
    icon: Database,
    title: "Databases & Search",
    description:
      "PostgreSQL, MySQL, SQLite, FAISS vector search, and efficient data modeling.",
  },
  {
    icon: Sparkles,
    title: "AI Systems & Integration",
    description:
      "Integrating AI models into real products using FastAPI, TensorFlow, ONNX, and local LLMs.",
  },
];


const techStack = [
  "React","React Native","TypeScript","Python",
  "Node.js","FastAPI","PostgreSQL","TensorFlow",
  "PyTorch","FAISS","LLMs","Retrieval-Augmented Generation (RAG)",
  "Git","Linux",
];


const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">ABOUT</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Crafting the Future with
              <span className="text-gradient"> AI</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Passionate about building products that leverage artificial intelligence to solve real-world problems. From concept to deployment, I bring ideas to life.
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:glow-primary transition-all duration-300">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{skill.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech stack */}
          <div className="text-center">
            <span className="font-mono text-muted-foreground text-sm">Tech Stack</span>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
