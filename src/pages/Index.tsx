import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import CheckoutExperience from '@/components/CheckoutExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Features />
      <Dashboard />
      <CheckoutExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
