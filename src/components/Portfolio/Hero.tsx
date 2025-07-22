import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-background/80">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-2xl shadow-primary/25"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          John Doe
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full Stack Developer & Software Engineer
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions and building exceptional user experiences
          with modern technologies.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <FileText className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
          </a>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary hover:text-accent transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;