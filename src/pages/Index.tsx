import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Features />
      <Pricing />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
