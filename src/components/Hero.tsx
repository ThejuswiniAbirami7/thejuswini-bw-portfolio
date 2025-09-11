import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Thejuswini Abirami K
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Computer Science Student
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Aspiring engineer, passionate about crafting solutions for tomorrow
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">thejuswiniabirami786@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 6384477773</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Tiruppur, Tamil Nadu</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <Button asChild variant="default" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="https://www.linkedin.com/in/thejuswini-k-453434329" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="https://github.com/ThejuswiniAbirami7" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="https://leetcode.com/u/Thejuswini_K/" target="_blank" rel="noopener noreferrer">
              <span className="h-5 w-5 mr-2 font-bold text-xs flex items-center justify-center">LC</span>
              LeetCode
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;