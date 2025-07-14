import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"></div>
            <Card className="glass border-primary/20 relative overflow-hidden hover-lift">
              <CardContent className="p-0">
                <img 
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with over 3 years of experience 
                in creating dynamic and user-friendly web applications. My journey in 
                technology began with a curiosity about how things work behind the scenes.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Node.js, Python, 
                and cloud platforms. I love solving complex problems and turning ideas 
                into reality through clean, efficient code.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 
                  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm 
                             border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;