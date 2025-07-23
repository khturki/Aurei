import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: '', email: '', company: '', volume: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Ready to <span className="text-primary">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses already processing payments across MENA. 
            Get started with a free consultation and custom integration plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border hover:shadow-golden transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Request a Demo</CardTitle>
              <CardDescription>
                Tell us about your business and we'll show you how Aurei can help you expand into MENA markets.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Your Company"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="volume">Monthly Transaction Volume</Label>
                  <Select value={formData.volume} onValueChange={(value) => handleChange('volume', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10K</SelectItem>
                      <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                      <SelectItem value="50k-250k">$50K - $250K</SelectItem>
                      <SelectItem value="250k-1m">$250K - $1M</SelectItem>
                      <SelectItem value="over-1m">Over $1M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Which MENA countries are you targeting? What payment challenges are you facing?"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-muted-foreground">hello@aurei.com</p>
                      <p className="text-muted-foreground">support@aurei.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-muted-foreground">+971 4 123 4567 (UAE)</p>
                      <p className="text-muted-foreground">+966 11 123 4567 (KSA)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-muted-foreground">Dubai Internet City</p>
                      <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Support Hours</p>
                      <p className="text-muted-foreground">24/7 Technical Support</p>
                      <p className="text-muted-foreground">9 AM - 6 PM GST (Sales)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Start</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-muted-foreground">Schedule a 30-minute demo</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-muted-foreground">Get custom integration plan</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-muted-foreground">Start processing in 48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;