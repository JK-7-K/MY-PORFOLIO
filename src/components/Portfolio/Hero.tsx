import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            Passionate about creating innovative solutions and building scalable applications
            that make a difference in the digital world.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            variant="outline"
            size="lg"
            className="glass hover-glow group"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass hover-glow group"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass hover-glow group"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <FileText className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-transform" />
            Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ChevronDown className="h-8 w-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;