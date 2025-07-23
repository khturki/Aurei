import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Lock
} from 'lucide-react';

import checkoutExperience from '@/assets/checkout-experience.jpg';

const CheckoutExperience = () => {
  const checkoutFeatures = [
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Support for Visa, Mastercard, digital wallets, and regional payment methods"
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "PCI DSS compliant checkout with end-to-end encryption"
    },
    {
      icon: Zap,
      title: "Fast Checkout",
      description: "Optimized for speed with one-click payments and guest checkout options"
    },
    {
      icon: Lock,
      title: "Fraud Protection",
      description: "Real-time fraud detection and prevention during checkout"
    }
  ];

  const benefits = [
    "Customizable checkout design to match your brand",
    "Mobile-optimized responsive checkout experience",
    "Multi-language support for MENA markets",
    "Real-time payment validation and error handling",
    "Seamless integration with your existing website"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Seamless <span className="text-primary">Checkout Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Provide your customers with a smooth, secure, and optimized checkout experience 
            that increases conversions and builds trust across all MENA payment methods.
          </p>
        </div>

        {/* Checkout Screenshot Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">
              Professional Checkout Interface
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our checkout solution provides a clean, intuitive interface that customers trust. 
              With support for all major payment methods including Visa, Mastercard, and regional 
              options, customers can pay using their preferred method.
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button variant="hero" className="group">
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={checkoutExperience} 
              alt="Aurei Checkout Experience"
              className="rounded-xl shadow-golden border border-border w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-xl"></div>
            {/* Security Badge */}
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Secure
            </div>
          </div>
        </div>

        {/* Checkout Features Grid */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Why Customers Love Our Checkout
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with customer experience in mind, our checkout reduces abandonment 
              and increases conversion rates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checkoutFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutExperience;