import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "SRM TRP Engineering College",
      degree: "Bachelor's Degree in Computer Science",
      year: "2024",
      focus: "Focusing on software development, algorithms and emerging technologies",
      type: "Higher Education"
    },
    {
      institution: "St. Joseph Matric Higher Secondary School",
      degree: "Higher Secondary Education",
      year: "Completed",
      focus: "Specialized in Computer Science and Mathematics",
      type: "Schooling"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover-scale cursor-default transition-all duration-300">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover-scale cursor-default transition-all duration-300">
            Academic journey shaping my foundation in computer science and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 hover-scale hover:-rotate-1 animate-fade-in cursor-default">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <GraduationCap className="h-6 w-6 text-primary transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{edu.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-3">{edu.degree}</h3>
                <p className="text-muted-foreground leading-relaxed">{edu.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;