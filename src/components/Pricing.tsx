import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "2.9%",
      description: "Perfect for small businesses entering MENA markets",
      features: [
        "Up to $50K monthly volume",
        "5 payment methods",
        "Basic analytics dashboard",
        "Email support",
        "Standard settlement (T+3)",
        "Basic fraud protection"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "2.4%",
      description: "Ideal for growing e-commerce businesses",
      features: [
        "Up to $500K monthly volume",
        "15+ payment methods",
        "Advanced analytics & reporting",
        "Priority phone & email support",
        "Fast settlement (T+1)",
        "Advanced fraud protection",
        "Multi-currency support",
        "Custom checkout experience"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations and enterprise needs",
      features: [
        "Unlimited monthly volume",
        "All payment methods + custom",
        "Real-time analytics & insights",
        "Dedicated account manager",
        "Instant settlement available",
        "AI-powered fraud prevention",
        "White-label solutions",
        "Custom integrations",
        "SLA guarantee",
        "Regional compliance support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no setup costs. Pay only for successful transactions 
            with competitive rates for MENA region payments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-golden transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-golden scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary font-serif">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-2">per transaction</span>
                  )}
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'variant-hero' : ''}`}
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 24/7 support, API access, and regulatory compliance assistance
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>• No setup fees</span>
            <span>• No monthly minimums</span>
            <span>• Cancel anytime</span>
            <span>• 30-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;