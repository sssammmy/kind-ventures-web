
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Approach from '@/components/Approach';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    document.title = 'Kind Ventures - Business Acquisition & Growth';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <ContactSection />
      <Footer />
      <ScrollReveal />
    </div>
  );
};

export default Index;
