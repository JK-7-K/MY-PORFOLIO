import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoomIn, ExternalLink } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Team Collaboration",
      description: "Working with amazing colleagues at TechCorp",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      category: "Team"
    },
    {
      id: 2,
      title: "Hackathon Victory",
      description: "Winning first place at the Annual Hackathon 2023",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae3c6?w=600&h=400&fit=crop",
      category: "Achievement"
    },
    {
      id: 3,
      title: "Conference Speaking",
      description: "Presenting at React Developer Conference",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      category: "Speaking"
    },
    {
      id: 4,
      title: "Code Review Session",
      description: "Collaborative coding and knowledge sharing",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop",
      category: "Work"
    },
    {
      id: 5,
      title: "Mentoring Session",
      description: "Helping junior developers grow their skills",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Mentoring"
    },
    {
      id: 6,
      title: "Award Ceremony",
      description: "Receiving the Outstanding Developer Award",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      category: "Achievement"
    },
    {
      id: 7,
      title: "Workshop Facilitation",
      description: "Leading a workshop on modern web development",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      category: "Teaching"
    },
    {
      id: 8,
      title: "Open Source Contribution",
      description: "Contributing to major open source projects",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      category: "Open Source"
    },
    {
      id: 9,
      title: "Tech Meetup",
      description: "Networking with fellow developers",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      category: "Community"
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Moments from my professional journey
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category 
                ? "bg-gradient-primary" 
                : "glass hover-glow"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="glass border-primary/20 hover-lift group overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary/90 text-primary-foreground rounded text-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-fade-in">
              <img 
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 glass"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;