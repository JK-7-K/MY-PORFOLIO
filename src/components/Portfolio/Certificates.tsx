import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://aws.amazon.com/certification/",
      description: "Validated expertise in developing and maintaining applications on the AWS platform."
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialUrl: "https://developers.facebook.com/developercircles/",
      description: "Comprehensive certification covering React fundamentals, hooks, and advanced patterns."
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialUrl: "https://freecodecamp.org/certification/",
      description: "Completed 300 hours of coursework covering algorithms, data structures, and problem-solving."
    },
    {
      title: "Full Stack Web Development",
      issuer: "The Odin Project",
      date: "2022",
      credentialUrl: "https://theodinproject.com/",
      description: "Comprehensive full-stack curriculum covering HTML, CSS, JavaScript, Node.js, and databases."
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  <h4 className="text-md font-semibold text-primary mb-3">{cert.issuer}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;