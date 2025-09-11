import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users } from "lucide-react";

const Activities = () => {
  return (
    <section id="activities" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Extracurricular Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond academics, I actively engage in competitions and collaborative projects
          </p>
        </div>

        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2">Technical Competitions & Projects</CardTitle>
                <p className="text-muted-foreground">Active participation and collaboration</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-start gap-4">
              <Users className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
              <p className="text-foreground/80 leading-relaxed">
                Active participation in technical competitions and collaborative projects, 
                demonstrating problem-solving skills and teamwork abilities while staying 
                current with industry trends and emerging technologies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Activities;