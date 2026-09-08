import { GraduationCap, Calendar, MapPin, BookOpen, Languages, Award, Sparkles } from "lucide-react";

const educationDetails = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Lebanese International University",
  location: "Beirut, Lebanon",
  period: "2022 – 2026",
  description:
    "Rigorous curriculum focused on software engineering principles, algorithm design, artificial intelligence systems, modern database architecture, and full-stack development.",
  courses: [
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithms",
    "Database Management & SQL Systems",
    "Software Engineering Methodologies",
    "Computer Networks & Distributed Systems",
    "Object-Oriented Programming (Java, Python)",
  ],
};

const languages = [
  { name: "Arabic", level: "Native", code: "ar", badge: "Native" },
  { name: "English", level: "Full Professional Proficiency", code: "en", badge: "Fluent" },
  { name: "French", level: "Basic / Elementary Proficiency", code: "fr", badge: "Basic" },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">BACKGROUND</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Education & <span className="text-gradient">Languages</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              My academic foundation in Computer Science, specialized coursework, and multilingual communication abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Education Main Card - 2 Columns on large screens */}
            <div className="lg:col-span-2 group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24 text-primary" />
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Undergraduate Degree
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationDetails.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  {educationDetails.location}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground">
                {educationDetails.degree}
              </h3>
              <p className="text-primary font-medium text-lg mt-1">
                {educationDetails.institution}
              </p>

              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {educationDetails.description}
              </p>

              {/* Coursework pills */}
              <div className="mt-8 pt-6 border-t border-border/70">
                <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-foreground">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>Key Coursework & Competencies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {educationDetails.courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-lg bg-background border border-border text-xs font-mono text-muted-foreground hover:border-primary/30 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages & Strengths Card - 1 Column */}
            <div className="flex flex-col gap-6">
              {/* Spoken Languages */}
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      Spoken Languages
                    </h3>
                    <p className="text-xs text-muted-foreground">Communication capabilities</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-3.5 rounded-xl bg-background border border-border/80 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium text-sm text-foreground">{lang.name}</div>
                        <div className="text-xs text-muted-foreground">{lang.level}</div>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary font-semibold">
                        {lang.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="p-6 rounded-2xl bg-card border border-border flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">Academic Focus</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deeply engaged in integrating modern Machine Learning, RAG architectures, and scalable full-stack software into applied real-world industry solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
