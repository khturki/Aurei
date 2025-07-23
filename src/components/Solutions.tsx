import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  CreditCard, 
  Building, 
  Wallet,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Mobile Wallets",
      description: "Connect to popular MENA mobile payment platforms",
      features: ["STC Pay", "Careem Pay", "Vodafone Cash", "Orange Money", "Fawry"],
      countries: "KSA, UAE, Egypt, Jordan"
    },
    {
      icon: CreditCard,
      title: "Card Payments",
      description: "Accept all major card networks with local optimization",
      features: ["Visa", "Mastercard", "AMEX", "Local Cards", "Installments"],
      countries: "All MENA Countries"
    },
    {
      icon: Building,
      title: "Bank Transfers",
      description: "Direct bank integrations for seamless transfers",
      features: ["SAMA Instant", "EFTS", "Local Banks", "Real-time Settlement", "Bulk Payments"],
      countries: "KSA, UAE, Kuwait, Bahrain"
    },
    {
      icon: Wallet,
      title: "Digital Wallets",
      description: "Popular international and regional e-wallets",
      features: ["PayPal", "Apple Pay", "Google Pay", "Samsung Pay", "Regional Wallets"],
      countries: "Global Coverage"
    }
  ];

  const benefits = [
    "Single API integration for all payment methods",
    "Smart routing for optimal success rates",
    "Local currency settlement",
    "Regulatory compliance included",
    "24/7 technical support in Arabic & English"
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Complete <span className="text-primary">Payment Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access the entire MENA payment ecosystem through one unified platform. 
            From traditional cards to modern mobile wallets - we've got you covered.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="group hover:shadow-golden transition-all duration-300 border-border hover:border-primary/30">
                <CardHeader className="text-center">
                  <div className="mb-4 mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-2">Supported Methods:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Coverage:</strong> {solution.countries}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                Why Choose Aurei for MENA Payments?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="font-semibold text-foreground mb-2">Integration Time</h4>
                <p className="text-3xl font-bold font-serif text-primary mb-1">48 Hours</p>
                <p className="text-muted-foreground text-sm">Average implementation time</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="font-semibold text-foreground mb-2">Success Rate</h4>
                <p className="text-3xl font-bold font-serif text-primary mb-1">97.8%</p>
                <p className="text-muted-foreground text-sm">Average payment success rate</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="font-semibold text-foreground mb-2">Coverage</h4>
                <p className="text-3xl font-bold font-serif text-primary mb-1">15+</p>
                <p className="text-muted-foreground text-sm">MENA countries supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;