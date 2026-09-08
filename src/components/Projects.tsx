import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  FileSearch,
  ShoppingCart,
  UtensilsCrossed,
  Server,
  Github,
  Lock,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCategory = "All" | "Full Stack & SaaS" | "Systems & POS" | "AI & Machine Learning";

interface ProjectItem {
  title: string;
  badge: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  colorTheme: "primary" | "accent";
  icon: typeof UtensilsCrossed;
}

const projects: ProjectItem[] = [
  {
    title: "Qaima — QR Code Digital Menus for Restaurants",
    badge: "Live Production SaaS",
    category: "Full Stack & SaaS",
    icon: UtensilsCrossed,
    colorTheme: "primary",
    description:
      "A mobile-first digital menu platform enabling restaurants to provide interactive, multilingual QR code menus to diners. Features a private real-time management dashboard for categories, dishes, dynamic pricing, and table-ready availability.",
    tags: ["React", "TypeScript", "Tailwind CSS", "QR Codes", "SaaS", "Mobile-First"],
    liveUrl: "https://qaima.info",
    isPrivate: false,
  },
  {
    title: "Restaurant POS Pro (Multi-Terminal LAN System)",
    badge: "Desktop & Local LAN",
    category: "Systems & POS",
    icon: Server,
    colorTheme: "accent",
    description:
      "Multi-terminal restaurant Point of Sale and management platform engineered with an Electron desktop wrapper and local LAN architecture. Features Master Server & Client terminal modes, live kitchen order dispatch, table floor management, dual-currency billing (USD/LBP), and receipt printer integration.",
    tags: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "LAN Network",
      "Hardware Integration",
    ],
    isPrivate: true,
  },
  {
    title: "AI-Enhanced Retail POS & Inventory Management System",
    badge: "AI-Powered Retail POS",
    category: "Systems & POS",
    icon: ShoppingCart,
    colorTheme: "primary",
    description:
      "Comprehensive Point of Sale system with real-time sales processing, stock tracking, cost management, multi-vendor support, barcode scanners, and thermal receipt printers. Integrates an AI inventory agent (Groq + Ollama 70B) for restocking recommendations and predictive trend analytics.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Groq AI",
      "Ollama 70B",
    ],
    isPrivate: true,
  },
  {
    title: "AI-Powered Hybrid Resale Platform (Final Year Project)",
    badge: "Final Year Project",
    category: "AI & Machine Learning",
    icon: Bot,
    colorTheme: "accent",
    description:
      "End-to-end hybrid resale platform integrating a React Native cross-platform mobile app, React administrative dashboard, and physical store workflows. Employs TensorFlow, MobileNetV2, and ONNX models for automated item classification and price prediction.",
    tags: [
      "React Native",
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "TensorFlow",
      "MobileNetV2",
      "ONNX",
    ],
    isPrivate: true,
  },
  {
    title: "PDF-RAG-FastAPI — Retrieval-Augmented Generation",
    badge: "Open Source",
    category: "AI & Machine Learning",
    icon: FileSearch,
    colorTheme: "primary",
    description:
      "Retrieval-Augmented Generation (RAG) system for semantic search and context-aware question answering over PDF documents. Uses SentenceTransformers for dense vector embeddings, FAISS for fast similarity search, local Ollama LLMs, and high-throughput FastAPI endpoints.",
    tags: ["Python", "FastAPI", "FAISS", "SentenceTransformers", "Ollama LLM", "RAG"],
    githubUrl: "https://github.com/bakeryehyaa/pdf-rag-fastapi",
    isPrivate: false,
  },
];

const categories: ProjectCategory[] = [
  "All",
  "Full Stack & SaaS",
  "Systems & POS",
  "AI & Machine Learning",
];

const colorStyles = {
  primary: {
    borderHover: "hover:border-primary/50",
    bgGlow: "group-hover:bg-primary/5",
    iconBg: "bg-primary/10 text-primary",
    badge: "bg-primary/10 text-primary border-primary/30",
    accentText: "text-primary",
  },
  accent: {
    borderHover: "hover:border-accent/50",
    bgGlow: "group-hover:bg-accent/5",
    iconBg: "bg-accent/10 text-accent",
    badge: "bg-accent/10 text-accent border-accent/30",
    accentText: "text-accent",
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-card/50">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="font-mono text-primary text-sm tracking-wider">PORTFOLIO</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Real-world systems spanning production SaaS, multi-terminal desktop & LAN POS architectures, and applied AI/ML pipelines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const theme = colorStyles[project.colorTheme];
              const IconComponent = project.icon;

              return (
                <div
                  key={project.title}
                  className={`group relative p-7 rounded-2xl bg-card border border-border ${theme.borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
                >
                  {/* Hover subtle glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-colors duration-300 pointer-events-none ${theme.bgGlow}`}
                  />

                  <div className="relative z-10">
                    {/* Header: Icon + Badges */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme.iconBg} transition-transform group-hover:scale-110 duration-300`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium border ${theme.badge}`}
                        >
                          <Sparkles className="w-3 h-3" />
                          {project.badge}
                        </span>

                        {project.isPrivate && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/80 text-muted-foreground text-xs font-mono">
                            <Lock className="w-3 h-3" />
                            Private
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-background border border-border/80 text-xs font-mono text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="relative z-10 pt-4 border-t border-border/70 flex items-center justify-between gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-xs px-4"
                        >
                          <span>Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-border hover:border-primary/50 text-xs font-medium px-4"
                        >
                          <Github className="w-3.5 h-3.5 mr-1" />
                          <span>View Code</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </a>
                    )}

                    {project.isPrivate && (
                      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                        <Lock className="w-3.5 h-3.5 text-muted-foreground/70" />
                        <span>Production / Enterprise (Demo upon request)</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
