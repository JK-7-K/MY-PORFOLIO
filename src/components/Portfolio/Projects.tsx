import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Socket.io", "Docker"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/johndoe/taskmanager",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React Native", "TypeScript", "OpenWeather API", "Redux"],
      liveUrl: "https://weather-app-demo.com",
      githubUrl: "https://github.com/johndoe/weather-app",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Angular", "D3.js", "Express.js", "MySQL", "Chart.js"],
      liveUrl: "https://social-dashboard.com",
      githubUrl: "https://github.com/johndoe/social-dashboard",
      featured: false
    },
    {
      title: "AI Code Generator",
      description: "An AI-powered code generation tool that helps developers write boilerplate code faster with intelligent suggestions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
      liveUrl: "https://ai-codegen.com",
      githubUrl: "https://github.com/johndoe/ai-codegen",
      featured: true
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology ensuring immutable and verifiable elections.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      liveUrl: "https://blockchain-voting.com",
      githubUrl: "https://github.com/johndoe/blockchain-voting",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing my technical skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`glass border-primary/20 hover-lift group overflow-hidden
                         ${project.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary rounded text-xs
                                 border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-gradient-primary hover:shadow-lg flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass hover-glow"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass hover-glow group"
            onClick={() => window.open('https://github.com/johndoe', '_blank')}
          >
            <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;