import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote, TrendingUp, Globe, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "MenaCart",
      industry: "Fashion E-commerce",
      logo: "MC",
      challenge: "Struggling with low payment success rates across MENA region",
      solution: "Implemented Aurei's smart routing and local payment methods",
      results: [
        { metric: "Payment Success Rate", improvement: "+34%" },
        { metric: "Revenue Growth", improvement: "+127%" },
        { metric: "Customer Satisfaction", improvement: "+45%" }
      ],
      testimonial: "Aurei transformed our payment experience. We went from struggling with regional payments to becoming the leading fashion platform in MENA.",
      author: "Sarah Al-Mansouri",
      role: "Chief Technology Officer"
    },
    {
      company: "TechSouq",
      industry: "Electronics Marketplace",
      logo: "TS",
      challenge: "Complex payment flows causing cart abandonment",
      solution: "Streamlined checkout with Aurei's unified payment gateway",
      results: [
        { metric: "Cart Abandonment", improvement: "-28%" },
        { metric: "Conversion Rate", improvement: "+41%" },
        { metric: "Processing Time", improvement: "-67%" }
      ],
      testimonial: "The integration was seamless and the results were immediate. Our customers love the simplified payment experience.",
      author: "Ahmed Hassan",
      role: "Founder & CEO"
    },
    {
      company: "GulfDelivery",
      industry: "Food Delivery",
      logo: "GD",
      challenge: "Need for instant payments and multiple currency support",
      solution: "Deployed Aurei's instant settlement and multi-currency features",
      results: [
        { metric: "Settlement Speed", improvement: "T+3 to Instant" },
        { metric: "Currency Coverage", improvement: "+200%" },
        { metric: "Operational Efficiency", improvement: "+89%" }
      ],
      testimonial: "Aurei's instant settlement feature revolutionized our cash flow. We can now pay our partners immediately after delivery.",
      author: "Fatima Al-Zahra",
      role: "Head of Finance"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Success Stories from <span className="text-primary">MENA Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading e-commerce businesses transformed their payment operations 
            and accelerated growth with Aurei's platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-golden transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-primary/10">
                    <AvatarFallback className="text-primary font-bold">
                      {study.logo}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{study.company}</CardTitle>
                    <CardDescription>{study.industry}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-muted-foreground text-sm">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Results</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{result.metric}</span>
                        <span className="text-sm font-semibold text-primary">{result.improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <Quote className="h-5 w-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "{study.testimonial}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{study.author}</p>
                      <p className="text-xs text-muted-foreground">{study.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <TrendingUp className="h-8 w-8 text-primary mx-auto" />
            <p className="text-3xl font-bold font-serif text-foreground">150%</p>
            <p className="text-muted-foreground">Average Revenue Growth</p>
          </div>
          <div className="space-y-2">
            <Globe className="h-8 w-8 text-primary mx-auto" />
            <p className="text-3xl font-bold font-serif text-foreground">15+</p>
            <p className="text-muted-foreground">MENA Countries Covered</p>
          </div>
          <div className="space-y-2">
            <Users className="h-8 w-8 text-primary mx-auto" />
            <p className="text-3xl font-bold font-serif text-foreground">500+</p>
            <p className="text-muted-foreground">Active Merchants</p>
          </div>
          <div className="space-y-2">
            <Quote className="h-8 w-8 text-primary mx-auto" />
            <p className="text-3xl font-bold font-serif text-foreground">98%</p>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;