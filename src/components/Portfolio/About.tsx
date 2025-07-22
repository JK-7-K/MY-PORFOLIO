import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
              My journey in software development began during my computer science studies, where I discovered
              my love for creating innovative solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React, Node.js, TypeScript, and cloud technologies. I enjoy working on both
              frontend and backend development, always striving to write clean, efficient, and maintainable code.
              My goal is to create user-friendly applications that make a positive impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Tools</h4>
                <p className="text-sm text-muted-foreground">Git, Docker, AWS</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-primary mb-2">Databases</h4>
                <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-2xl opacity-30"></div>
              <img
                src={profilePhoto}
                alt="About Me"
                className="relative w-80 h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;