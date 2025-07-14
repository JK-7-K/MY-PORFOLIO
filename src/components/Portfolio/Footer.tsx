import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">John Doe</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover-glow p-3"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover-glow p-3"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover-glow p-3"
              onClick={() => window.open('mailto:john.doe@email.com', '_blank')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-primary animate-pulse" /> 
              © {currentYear} John Doe
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8 pt-8 border-t border-primary/20">
          <Button
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="glass hover-glow"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;