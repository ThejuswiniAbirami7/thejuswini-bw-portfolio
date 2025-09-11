import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Award, Globe } from "lucide-react";

const Skills = () => {
  const skillsData = {
    hardSkills: {
      icon: Code,
      title: "Technical Skills",
      skills: ["Python", "C", "Java", "Data Structures", "Algorithms"]
    },
    softSkills: {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Critical Thinking", "Adaptability", "Time Management"]
    },
    certifications: {
      icon: Award,
      title: "Certifications",
      skills: ["Cyber Security (May 2025)"]
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, soft skills, and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Card key={key} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm py-2 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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