import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jun 2022 - Aug 2022",
      type: "Full-time",
      description: "Developed responsive web applications using React and Node.js, collaborated with cross-functional teams, and implemented RESTful APIs.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"],
      achievements: [
        "Improved application performance by 40%",
        "Implemented automated testing reducing bugs by 60%",
        "Mentored 2 junior interns"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      period: "Jan 2022 - May 2022",
      type: "Part-time",
      description: "Built user interfaces for e-commerce platforms, optimized website performance, and worked on mobile-responsive designs.",
      technologies: ["Vue.js", "TypeScript", "Sass", "Webpack", "Firebase"],
      achievements: [
        "Increased user engagement by 25%",
        "Delivered 5 major features ahead of schedule",
        "Received 'Outstanding Intern' award"
      ]
    },
    {
      title: "Backend Developer Intern",
      company: "CloudTech Systems",
      location: "Austin, TX",
      period: "Jun 2021 - Aug 2021",
      type: "Full-time",
      description: "Designed and developed scalable backend services, worked with microservices architecture, and optimized database queries.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Redis"],
      achievements: [
        "Reduced API response time by 50%",
        "Implemented caching system saving 30% server costs",
        "Documented APIs for 10+ services"
      ]
    }
  ];

  return (
    <section id="internships" className="section-padding bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Internships</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional experience and growth
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card 
              key={index}
              className="glass border-primary/20 hover-lift group"
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                      <Briefcase className="h-8 w-8 text-background" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {internship.title}
                        </h3>
                        <Badge variant="secondary">{internship.type}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="h-5 w-5 text-primary" />
                        <p className="text-lg text-primary font-semibold">
                          {internship.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{internship.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{internship.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm 
                                     border border-primary/30 hover:bg-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {internship.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;