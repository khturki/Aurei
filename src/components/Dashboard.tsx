import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  BarChart3, 
  Settings, 
  TrendingUp,
  Eye,
  ToggleLeft,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const dashboardFeatures = [
    {
      title: "Real-time Payment Dashboard",
      description: "Monitor all transactions, success rates, and payment flows in real-time with comprehensive analytics.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Live transaction monitoring", "Payment success rates", "Revenue analytics", "Regional breakdowns"]
    },
    {
      title: "Analytics Reports Control",
      description: "Enable or disable analytics reports, customize reporting periods, and control data visibility for your team.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Report scheduling", "Data export controls", "Team permissions", "Custom metrics"]
    },
    {
      title: "Payment Flow Management",
      description: "Complete control over payment methods, routing rules, and checkout experience customization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Method enable/disable", "Smart routing setup", "Checkout customization", "Fee management"]
    }
  ];

  const controlFeatures = [
    {
      icon: Monitor,
      title: "Unified Control Panel",
      description: "Single dashboard to manage all payment operations"
    },
    {
      icon: BarChart3,
      title: "Analytics Toggle",
      description: "Turn reports on/off with granular control"
    },
    {
      icon: Settings,
      title: "Payment Configuration",
      description: "Enable/disable methods and set routing rules"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor success rates and optimize flows"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Live transaction tracking and alerts"
    },
    {
      icon: ToggleLeft,
      title: "Feature Management",
      description: "Control platform features and integrations"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Merchant <span className="text-primary">Control Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take full control of your payment operations with our comprehensive admin dashboard. 
            Manage payment flows, control analytics, and customize checkout experiences.
          </p>
        </div>

        {/* Dashboard Screenshots */}
        <div className="space-y-16 mb-20">
          {dashboardFeatures.map((item, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="rounded-xl shadow-golden border border-border w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Control Features Grid */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Complete Merchant Control
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your payment operations at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {controlFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;