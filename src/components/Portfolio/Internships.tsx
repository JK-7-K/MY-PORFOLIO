import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "Software Engineering Intern",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "Summer 2023",
      description: "Developed web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes. Participated in code reviews and Agile development processes.",
      technologies: ["React", "Node.js", "MongoDB", "Git"]
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      period: "Summer 2022",
      description: "Built responsive user interfaces and improved website performance. Worked closely with the design team to implement pixel-perfect designs. Contributed to the company's design system.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"]
    }
  ];

  return (
    <section id="internships" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Internships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{internship.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {internship.period}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{internship.company}</h4>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {internship.location}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{internship.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;