import React from "react";

const skillCategories = [
  {
    category: "Languages & Frameworks",
    level: "Core Stack",
    description:
      "Core programming languages used for building web, desktop, and mobile application architectures.",
    skills: ["C", "C#", "Java", "Python", "Dart"],
    featured: true,
  },
  {
    category: "Frontend Development",
    level: "User Interface",
    description:
      "Creating modern, responsive user interfaces across mobile and web platforms.",
    skills: ["HTML", "JavaScript", "Tailwind CSS", "React", "Python", "Java", "C#"],
    featured: false,
  },
  {
    category: "Backend & Databases",
    level: "Server & Data",
    description:
      "Building backend services, APIs, and managing relational and non-relational database systems.",
    skills: [
      "PHP",
      "ASP.NET",
      "Node.js",
      "Firebase",
      "SQL",
      "MySQL",
      "MSSQL",
      "Express.js",
    ],
    featured: false,
  },
  {
    category: "Developer Tools & IT Support",
    level: "Tools & Infrastructure",
    description:
      "Development tools, environment management, hardware setup, and networking fundamentals.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Figma",
      "XAMPP",
      "PowerBI",
      "ChatGPT",
      "Claude",
      "PC Setup",
      "Networking",
    ],
    featured: false,
  },
  {
    category: "Core Professional Skills",
    level: "Soft Skills",
    description:
      "Essential non-technical skills facilitating effective team collaboration and project execution.",
    skills: [
      "Technical Documentation Writing",
      "Presentation Skills",
      "Flexible & Adaptable",
      "Organization & Time Management",
    ],
    featured: false,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Technical Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Skills that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              power solutions.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            A breakdown of my technical stack, database management expertise, development tools, and core soft skills.
          </p>
        </div>

        {/* Timeline Layout for Skills */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Skill Category Items */}
          <div className="space-y-12">
            {skillCategories.map((item, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {item.featured && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {item.level}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{item.category}</h3>
                    <p className="text-sm text-muted-foreground mt-3">
                      {item.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-primary/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;