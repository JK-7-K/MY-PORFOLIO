import Navigation from '@/components/Portfolio/Navigation';
import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Education from '@/components/Portfolio/Education';
import Internships from '@/components/Portfolio/Internships';
import Projects from '@/components/Portfolio/Projects';
import Certificates from '@/components/Portfolio/Certificates';
import Gallery from '@/components/Portfolio/Gallery';
import Contact from '@/components/Portfolio/Contact';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Internships />
      <Projects />
      <Certificates />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;