import { Brain, Code2, Database, Sparkles, Terminal, Smartphone } from "lucide-react";

const skillCards = [
  {
    icon: Code2,
    title: "Full Stack & Web Architecture",
    description:
      "Modern full-stack web applications with React, TypeScript, Node.js, Express, Prisma, and robust RESTful APIs with secure authentication.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Pipelines",
    description:
      "End-to-end ML integration including local LLMs (Ollama 70B, Groq), Retrieval-Augmented Generation (RAG), SentenceTransformers, and computer vision with MobileNetV2.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Hybrid Engineering",
    description:
      "Cross-platform mobile applications using React Native and Dart/Flutter, delivering seamless on-device experiences connected to cloud backends.",
  },
  {
    icon: Database,
    title: "Databases & Vector Search",
    description:
      "Architecting transactional schemas in PostgreSQL, MySQL, SQLite, and powering semantic similarity search with FAISS vector indices.",
  },
];

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Dart", "PHP"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "LLMs (Groq, Ollama)",
      "SentenceTransformers",
      "TensorFlow",
      "ONNX Runtime",
      "Scikit-learn",
      "FAISS",
    ],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "FastAPI", "Express", "Prisma ORM", "REST APIs", "Auth & RBAC"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "React Native", "Tailwind CSS", "Vite", "HTML5/CSS3"],
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Git", "GitHub", "Linux", "VS Code"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">ABOUT ME</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Building Intelligent Systems with <span className="text-gradient">AI & Code</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Based in Beirut, Lebanon, I specialize in architecting full-stack digital products that leverage modern machine learning, local LLMs, and real-time business workflows to solve high-impact challenges.
            </p>
          </div>

          {/* Core Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skillCards.map((skill) => (
              <div
                key={skill.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:glow-primary transition-all duration-300">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categorized Tech Stack */}
          <div className="rounded-2xl bg-card/60 border border-border p-8">
            <div className="text-center mb-8">
              <span className="font-mono text-primary text-xs uppercase tracking-widest">
                Technical Toolkit
              </span>
              <h3 className="font-display font-bold text-2xl mt-1 text-foreground">
                Technologies & Competencies
              </h3>
            </div>

            <div className="space-y-6">
              {skillCategories.map((group) => (
                <div key={group.category} className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="text-xs font-mono font-semibold text-muted-foreground md:w-48 shrink-0">
                    {group.category}:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono hover:bg-primary/15 hover:text-primary transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
