import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-CSA-2023-001",
      level: "Professional",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      verifyUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "January 2023",
      credentialId: "GCP-PD-2023-002",
      level: "Professional",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      verifyUrl: "https://googlecloud.com/verification",
      skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"]
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "November 2022",
      credentialId: "CKA-2022-003",
      level: "Professional",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      verifyUrl: "https://cncf.io/verification",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Monitoring"]
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta",
      date: "September 2022",
      credentialId: "META-FE-2022-004",
      level: "Professional",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
      verifyUrl: "https://meta.com/verification",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"]
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "July 2022",
      credentialId: "MDB-DEV-2022-005",
      level: "Associate",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      verifyUrl: "https://university.mongodb.com/verification",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"]
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "May 2022",
      credentialId: "DCA-2022-006",
      level: "Associate",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
      verifyUrl: "https://docker.com/verification",
      skills: ["Docker", "Containerization", "DevOps", "CI/CD"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional':
        return 'bg-primary text-primary-foreground';
      case 'Associate':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="certificates" className="section-padding bg-gradient-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="glass border-primary/20 hover-lift group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>

                  {/* Level Badge */}
                  <Badge className={`absolute top-4 left-4 ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </Badge>
                </div>

                {/* Certificate Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-medium">ID:</span>
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/20 text-primary rounded text-xs
                                   border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full glass hover-glow group"
                    onClick={() => window.open(cert.verifyUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Verify Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;