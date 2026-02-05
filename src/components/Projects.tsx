import { ArrowUpRight, Bot, FileSearch, MessageSquare, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Bot,
    title: "AI-Powered Hybrid Resale Platform",
    description:
      "End-to-end hybrid resale platform with a React Native mobile app and React admin dashboard, featuring AI-based product category classification and price prediction.",
    tags: ["React Native", "React", "Node.js", "PostgreSQL", "TensorFlow", "ONNX"],
    link: null,
    private: true,
    color: "primary" as const,
  },
  {
    icon: ShoppingCart,
    title: "Modern POS & Inventory System",
    description:
      "A comprehensive Point of Sale system with inventory tracking, sales analytics, multi-vendor support, and hardware integration (receipt printers & barcode scanners).",
    tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    link: null,
    private: true,
    color: "accent" as const,
  },
  {
    icon: FileSearch,
    title: "PDF-RAG-FastAPI",
    description:
      "Retrieval-Augmented Generation (RAG) system for semantic search and question answering over PDF documents using vector embeddings and large language models.",
    tags: ["Python", "FastAPI", "FAISS", "LLMs", "RAG"],
    link: "https://github.com/bakeryehyaa/pdf-rag-fastapi",
    color: "accent" as const,
  },

];



const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-card/50">
      <div className="absolute inset-0 bg-noise" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">WORK</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Featured
              <span className="text-gradient"> Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in building intelligent, scalable applications.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group relative p-6 rounded-2xl bg-background border border-border hover:border-${project.color}/30 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-${project.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-${project.color}/10 flex items-center justify-center mb-4`}
                  >
                    <project.icon className={`w-6 h-6 text-${project.color}`} />
                  </div>

                  {/* Private badge */}
                  {project.private && (
                    <span className="inline-block mb-2 text-xs font-mono text-muted-foreground">
                      🔒 Private project
                    </span>
                  )}

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link / Private notice */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn p-0 h-auto hover:bg-transparent"
                      >
                        <span className="font-medium text-sm">View Project</span>
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-muted-foreground">
                      Demo available on request
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
