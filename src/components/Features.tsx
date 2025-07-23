import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  Shield, 
  BarChart3, 
  Globe, 
  Zap, 
  Users,
  Lock,
  TrendingUp,
  Settings
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Unified Payment Gateway",
      description: "Single API integration to access 50+ payment methods across MENA region, including local banks, digital wallets, and mobile payments."
    },
    {
      icon: Shield,
      title: "Advanced Fraud Protection",
      description: "AI-powered fraud detection with machine learning algorithms specifically trained on MENA payment patterns and behaviors."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboard with transaction analytics, success rates, and regional payment insights to optimize your conversion."
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Seamless currency conversion and settlement in 15+ MENA currencies with competitive exchange rates and transparent fees."
    },
    {
      icon: Zap,
      title: "Instant Settlement",
      description: "Fast settlement cycles with T+1 or instant payouts available for most payment methods across the region."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Dedicated MENA payment specialists providing 24/7 support and regulatory compliance guidance."
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "PCI DSS Level 1 certified infrastructure with end-to-end encryption and tokenization for maximum security."
    },
    {
      icon: TrendingUp,
      title: "Smart Routing",
      description: "Intelligent payment routing to maximize approval rates and minimize costs based on real-time performance data."
    },
    {
      icon: Settings,
      title: "Easy Integration",
      description: "RESTful APIs, SDKs for popular platforms, and comprehensive documentation for quick implementation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Everything You Need for <span className="text-primary">MENA Payments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive payment orchestration platform designed specifically for businesses 
            looking to expand into Middle East and North Africa markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-golden transition-all duration-300 border-border hover:border-primary/30">
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;