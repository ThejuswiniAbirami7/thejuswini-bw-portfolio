import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Award, Globe } from "lucide-react";

const Skills = () => {
  const skillsData = {
    hardSkills: {
      icon: Code,
      title: "Technical Skills",
      skills: ["Python", "C", "Java", "Data Structures Basics", "SQL Basics"]
    },
    softSkills: {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Critical Thinking", "Adaptability", "Time Management"]
    },
    certifications: {
      icon: Award,
      title: "Certifications",
      skills: [
        "Cyber Security (May 2025)",
        "IBM SkillsBuild - Data Fundamentals",
        "Simplilearn - Data Structures in C",
        "Simplilearn - Data Science",
        "NPTEL - Programming in Java"
      ]
    },
    languages: {
      icon: Globe,
      title: "Languages",
      skills: [
        "Tamil (Native proficiency)",
        "Kannada (Elementary proficiency)",
        "English (Professional proficiency)"
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover-scale cursor-default transition-all duration-300">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover-scale cursor-default transition-all duration-300">
            A comprehensive overview of my technical abilities, soft skills, and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, category], index) => {
            const IconComponent = category.icon;
            return (
              <Card key={key} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover-scale animate-fade-in cursor-default" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <IconComponent className="h-6 w-6 text-primary transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm py-2 px-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale cursor-default hover:shadow-lg"
                        style={{animationDelay: `${(index * 100) + (skillIndex * 50)}ms`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;