import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Unlock <span className="text-primary">MENA Payments</span> for Your E-commerce
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Aurei provides seamless payment orchestration and aggregation solutions, 
            giving your business access to the entire MENA region payment ecosystem through a single, powerful integration.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Advanced Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">15+ MENA Countries</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white hover:text-foreground">
              Request Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;