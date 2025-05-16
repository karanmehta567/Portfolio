import React, { useState } from "react";
import { cn } from "../utils/util";
const skills = [
  //frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "ReactJS", level: 80, category: "frontend" },
  { name: "Tailwind", level: 80, category: "frontend" },
  //backend
  { name: "NodeJS", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  //Programming
  { name: "Java", level: 85, category: "backend" },
  { name: "Javascript", level: 80, category: "backend" },
  //Tools
  { name: "Git/GitHub", level: 85, category: "tool" },
  { name: "Postman", level: 90, category: "tool" },
  //backend
  { name: "Docker", level: 90, category: "devops" },
  { name: "Kubernetes", level: 85, category: "devops" },
  { name: "Terraform", level: 80, category: "devops" },
  { name: "AWS", level: 85, category: "devops" },
  { name: "GitLab", level: 80, category: "devops" },
];
const categories = ["all", "frontend", "backend", "tool", "devops"];
function SkillSection() {
  const [active, setcategory] = useState("all");
  const filteredCategory = skills.filter(
    (skill) => active === "all" || skill.category === active
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span>skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setcategory(category)}
              className={cn(
                "px-5 py-2 transition-colors duration-300 capitalize rounded-full",
                active === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategory.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
