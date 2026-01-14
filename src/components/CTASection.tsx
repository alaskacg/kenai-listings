import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Image } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Beta Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent font-semibold text-sm">BETA: Free Listings!</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Don't Miss Out—Post Your Free Listing Today!
          </h2>
          
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            During our beta launch, all 60-day listings are <span className="text-primary font-semibold">completely free</span> for email-verified users. 
            Your listing will stay active for its full duration—even after we exit beta!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mb-4">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                <span className="line-through text-muted-foreground mr-2">$10</span>
                <span className="text-accent">FREE</span>
              </h3>
              <p className="text-muted-foreground text-sm">Beta special—no payment required</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">60 Day Duration</h3>
              <p className="text-muted-foreground text-sm">Full listing period, guaranteed</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-aurora-cyan/10 mb-4">
                <Image className="w-6 h-6 text-aurora-cyan" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Up to 5 Images</h3>
              <p className="text-muted-foreground text-sm">Showcase your item beautifully</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/post-listing">
            <Button variant="gold" size="xl" className="group">
              Claim Your Free Listing Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <p className="text-muted-foreground text-sm mt-4">
            Limited time offer • Verify your email to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
