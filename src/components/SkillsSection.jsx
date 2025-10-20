import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Kotlin", level: 80, category: "android" },
  { name: "Java", level: 80, category: "android" },
  { name: "XML Layouts", level: 80, category: "android" },
  { name: "Jetpack Compose", level: 70, category: "android" },
  { name: "MVVM Architecture", level: 80, category: "android" },
  { name: "Retrofit / OkHttp", level: 80, category: "android" },
  { name: "Coroutines & Flow", level: 80, category: "android" },
  { name: "DataStore / SharedPreferences", level: 70, category: "android" },
  { name: "Hilt", level: 70, category: "android" },

  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "Express.js", level: 50, category: "backend" },
  { name: "MongoDB / MongoDB Atlas", level: 50, category: "backend" },
  { name: "Firebase Auth & Realtime DB", level: 70, category: "backend" },
  { name: "RESTful API Integration", level: 80, category: "backend" },

  // Tools
   { name: "Android Studio", level: 95, category: "tools" },
  { name: "Git / GitHub", level: 80, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Figma / Adobe XD", level: 65, category: "tools" },
  { name: "Agile & Solo Development", level: 75, category: "tools" },
];

const categories = ["all", "android", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
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
};
