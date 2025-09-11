import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thejuswiniabirami786@gmail.com",
      href: "mailto:thejuswiniabirami786@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6384477773",
      href: "tel:+916384477773"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tiruppur, Tamil Nadu",
      href: null
    }
  ];

  const professionalLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/thejuswini-k-453434329"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ThejuswiniAbirami7"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/Thejuswini_K/"
    },
    {
      icon: ExternalLink,
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/thejuswiniabira2"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </div>
                );

                return contact.href ? (
                  <a key={index} href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </CardContent>
          </Card>

          {/* Professional Links */}
          <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {professionalLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full justify-start gap-3 h-16 text-left hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{link.label}</p>
                        <p className="text-sm opacity-70">View Profile</p>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="py-8">
              <p className="text-lg font-medium mb-4">Ready to start something amazing together?</p>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="mailto:thejuswiniabirami786@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;