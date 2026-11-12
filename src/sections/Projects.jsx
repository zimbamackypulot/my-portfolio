import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

// Array ng Categories
const categories = [
  { id: "all", label: "All Projects" },
  { id: "UI/UX", label: "UI / UX Design" },
  { id: "Systems", label: "Systems" },
];

const projects = [
  {
    title: "BLOOM",
    category: "Systems",
    description:
      "A Web and Mobile Based Point of Sales Using Augmented Reality For Bloominous Flowershop.",
    image: "/projects/project1.png",
    tags: ["HTML", "Javascript", "Firebase", "Tailwind", "Flutter", "PayMongo"],
    link: "https://honeydew-duck-132160.hostingersite.com/templates/landing_page.php",
    github: "https://github.com",
  },
  {
    title: "Gora Event Styling Design",
    category: "UI/UX", // Inayos mula "UI/UX" patungong "uiux"
    description: "Gora Event Styling Business",
    image: "/projects/gora.png",
    tags: ["Canva", "Business Design", "Prototyping", "User Research"],
    link: "https://canva.link/egggjwsywgkds3n",
    github: "#", // lalabas pa rin ang Github icon
  },
  {
    title: "USBONG",
    category: "Systems",
    description:
      "Monitoring Student TOR of PDM",
    image: "/projects/usbong.png",
    tags: ["React", "Python", "FastAPI", "PostgreSQL", "Docker"],
    link: "https://usbong.vercel.app/",
    github: "#",
  },

   {
    title: "DENXIO'S BARBERS",
    category: "Systems",
    description:
      "Barbeshop Booking System",
    image: "/projects/denx.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://denxios-barbershop-2tfoqbkze-zimbamackypulots-projects.vercel.app/",
    github: "#",
  },
  {
    title: "BLOOM Logo",
    category: "UI/UX",
    description:
      "UI/UX overhaul focused on improving conversion rates and user onboarding workflows.",
    image: "/projects/BLOOM.png",
    tags: ["Figma", "Wireframing", "Usability Testing"],
    link: "https://www.figma.com/design/ovgdKSRvcNSJiNvWwLnBw0/BLOOM?node-id=0-1&p=f&t=nv5CtEcoV3qWmCec-0",
    github: "#",
  },


   {
    title: "ARPHIS",
    category: "UI/UX",
    description:
      "UI/UX Logo For Gamedev.",
    image: "/projects/ARPHIS.png",
    tags: ["Figma", "Wireframing", "Usability Testing"],
    link: "https://www.canva.com/design/DAHD-N7VyIw/ZqaHTYhNYfuzTtr2GyNsuw/edit",
    github: "#",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // I-filter ang projects batay sa napiling category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work across UI/UX design and complex software systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animation-delay-300">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-surface/50 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Image & Hover Action Overlay */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                  {/* Overlay Links (Lalabas kapag in-hover ang card) */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {/* Live Link Button */}
                    <a
                      href={project.link}
                      target={project.link !== "#" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      title="View Live Project"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>

                    {/* GitHub Link Button (Laging lalabas na) */}
                    <a
                      href={project.github}
                      target={project.github !== "#" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.link}
                        target={project.link !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                      <a
                        href={project.github}
                        target={project.github !== "#" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Section */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};