import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">John Doe</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and building exceptional user experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Education', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a
                href="mailto:john.doe@email.com"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 John Doe. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;