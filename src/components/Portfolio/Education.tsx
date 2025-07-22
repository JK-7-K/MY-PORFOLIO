import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Completed projects in web development, mobile applications, and machine learning."
    },
    {
      degree: "High School Diploma",
      school: "Tech High School",
      period: "2016 - 2020",
      gpa: "3.9/4.0",
      description: "Graduated with honors. Participated in programming competitions and robotics club."
    }
  ];

  return (
    <section id="education" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.period}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{item.school}</h4>
                  <p className="text-sm text-accent font-medium mb-3">GPA: {item.gpa}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;