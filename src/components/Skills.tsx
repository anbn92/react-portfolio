import React from "react";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "TypeScript",
        "Vue.js",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
        "Redux",
        "Material-UI",
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Python",
        "Express",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
      ],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Webpack",
        "Vite",
        "Jest",
        "Linux",
      ],
    },
    {
      category: "Soft Skills",
      icon: "💡",
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Client Communication",
        "Agile/Scrum",
        "Code Review",
        "Mentoring",
        "Technical Writing",
        "Project Management",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded-sm">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-3 hover:bg-white/8 hover:border-blue-500/50 hover:shadow-lg animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-blue-500/30">
                <span className="text-4xl grayscale-[0.2]">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-blue-600/15 border border-blue-500/30 rounded-3xl px-5 py-2.5 transition-all duration-300 cursor-default hover:bg-blue-600/25 hover:border-blue-500/50 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  >
                    <span className="text-sm text-gray-200 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
