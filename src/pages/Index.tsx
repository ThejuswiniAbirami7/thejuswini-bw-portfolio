import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Education />
      <Skills />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
