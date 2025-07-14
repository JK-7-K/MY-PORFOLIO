import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      location: "New York, USA",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "President of Computer Science Society",
        "Winner of Annual Hackathon 2021"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Central High School",
      location: "California, USA",
      period: "2016 - 2018",
      gpa: "3.9/4.0",
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "Math Olympiad Gold Medal"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="glass border-primary/20 hover-lift group"
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                      <GraduationCap className="h-8 w-8 text-background" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
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

export default Education;