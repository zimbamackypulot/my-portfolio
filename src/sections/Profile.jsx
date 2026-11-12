import React from "react";
import {
  UserPlus,
  Send,
  X,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

export const Profile = () => {
  const techCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C", "C#", "Java", "Python", "Dart", "PHP"],
    },
    {
      title: "Frontend & Mobile",
      icon: Layout,
      skills: ["HTML", "JavaScript", "Tailwind CSS", "React", "Next.js", "Flutter"],
    },
    {
      title: "Backend & Web Frameworks",
      icon: Server,
      skills: ["Node.js", "Express.js", "Laravel", "ASP.NET"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["SQL", "MySQL", "PostgreSQL", "MSSQL", "SQLite", "MongoDB", "Firebase"],
    },
    {
      title: "Developer Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "XAMPP", "PowerBI"],
    },
    {
      title: "AI & Hardware / Systems",
      icon: Cpu,
      skills: ["ChatGPT", "Claude", "PC Setup", "Networking"],
    },
  ];

  const certifications = [
    {
      title: "COMPANY PROPOSAL AND SYSTEM SHOWCASE",
      institution: "Saint Jude College Manila",
      period: "2023 - 2024",
    },
    {
      title: "Single Dimensional Theatre",
      institution: "Saint Jude College Manila",
      period: "2024 - 2025",
    },
  ];

  return (
    <section id="profile" className="py-20 relative overflow-hidden bg-[#0d090a]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation / Header badge */}
        <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
          <div className="px-4 py-1.5 rounded-full border border-red-900/60 bg-red-950/20 text-red-500 font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            SEAN_REVILLA
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#profile" className="text-red-500 hover:text-red-400 transition-colors">
              Profile
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-5 bg-[#120a0c] border border-red-900/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl h-fit">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-red-900/50 p-1 bg-[#1a0f12]">
                  <img
                    src="/profile-photo.jpg"
                    alt="AJ"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#120a0c] rounded-full" />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-wide text-white">
                  Axel John Antiojo
                </h1>
                <div className="flex gap-2 mt-2">
                  <span className="bg-yellow-400 text-black text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase">
                    WEB DEVELOPER
                  </span>
                  <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded tracking-wider uppercase">
                    2 AWARDS
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-[#180e11] border border-red-950/60 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-red-500">0</div>
                <div className="text-[10px] text-gray-500 font-semibold uppercase mt-1">
                  FOLLOWERS
                </div>
              </div>
              <div className="bg-[#180e11] border border-red-950/60 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-red-500">6</div>
                <div className="text-[10px] text-gray-500 font-semibold uppercase mt-1">
                  PROJECTS
                </div>
              </div>
              <div className="bg-[#180e11] border border-red-950/60 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-red-500">5.0</div>
                <div className="text-[10px] text-gray-500 font-semibold uppercase mt-1">
                  RATING
                </div>
                <div className="text-yellow-400 text-[8px] mt-0.5">★★★★★</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
                <UserPlus size={14} />
                FOLLOW
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#1f1518] hover:bg-[#281c20] text-gray-200 font-bold text-xs uppercase px-4 py-2.5 rounded-lg border border-red-900/30 transition-colors cursor-pointer">
                <Send size={14} />
                MESSAGE
              </button>
            </div>
          </div>

          {/* Right Column - Bio, Tech Stack & Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#120a0c] border border-red-900/30 rounded-2xl p-6 text-gray-400 font-mono text-sm leading-relaxed">
              Hey! I'm <span className="text-red-500 font-semibold">Axel John Antiojo</span>, a fourth-year IT student at Pambayang Dalubhasaan ng Marilao. A technology enthusiast driven by curiosity and a hands-on approach to problem-solving. Passionate about experimenting with new tools, exploring novel ideas, and delivering impactful results.
            </div>

            <div className="bg-[#120a0c] border border-red-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-red-500 font-bold tracking-wider text-sm mb-6">
                <X size={16} className="rotate-45" />
                <span>TECH_STACK</span>
              </div>

              <div className="space-y-4">
                {techCategories.map((cat, idx) => {
                  const CategoryIcon = cat.icon;
                  return (
                    <div key={idx} className="bg-[#180e11] border border-red-950/60 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CategoryIcon size={14} className="text-red-500" />
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {cat.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-[#221317] text-gray-200 border border-red-900/30 text-xs font-mono px-3 py-1.5 rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#120a0c] border border-red-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-red-500 font-bold tracking-wider text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
                <span>CERTIFICATIONS</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#180e11] border-l-4 border-l-red-600 border border-y-red-950/60 border-r-red-950/60 rounded-r-xl p-4"
                  >
                    <h3 className="font-bold text-white text-sm uppercase tracking-wide">
                      {cert.title}
                    </h3>
                    <p className="text-red-500 text-xs font-medium mt-1">
                      {cert.institution}
                    </p>
                    <p className="text-gray-500 text-[11px] mt-2 font-mono">
                      {cert.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};