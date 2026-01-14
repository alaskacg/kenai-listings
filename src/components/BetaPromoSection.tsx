import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gift, CheckCircle, Clock, Zap, ArrowRight } from "lucide-react";

const BetaPromoSection = () => {
  const benefits = [
    { icon: Gift, text: "100% Free during beta" },
    { icon: Clock, text: "Full 60-day listing duration" },
    { icon: CheckCircle, text: "Listings stay up after beta ends" },
    { icon: Zap, text: "Just verify your email to start" },
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Beta badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 text-primary font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Limited Time Beta Offer
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            Post Your Listings <span className="text-primary">Completely Free</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl text-center mb-10 max-w-2xl mx-auto">
            We're in beta and celebrating by giving all email-verified users free 60-day listings. 
            Your listings will remain active for their full duration—even after we exit beta!
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.text}
                className="bg-glass rounded-xl p-4 text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/post-listing">
              <Button variant="gold" size="xl" className="group">
                Claim Your Free Listing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">
                Create Free Account
              </Button>
            </Link>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            No credit card required • Just verify your email to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaPromoSection;
