import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const spotlightRegions = [
  {
    name: "Soldotna",
    tagline: "Central Peninsula Hub",
    description: "The heart of the Kenai Peninsula with the most active marketplace",
    listings: 24,
    featured: true,
  },
  {
    name: "Homer",
    tagline: "End of the Road",
    description: "Artists, fishermen, and unique finds at the tip of the Spit",
    listings: 18,
    featured: false,
  },
  {
    name: "Kenai",
    tagline: "Historic Fishing City",
    description: "World-class salmon fishing and a thriving local economy",
    listings: 15,
    featured: false,
  },
  {
    name: "Seward",
    tagline: "Gateway to Adventure",
    description: "Cruise ships, kayakers, and outdoor enthusiasts gather here",
    listings: 12,
    featured: false,
  },
];

const RegionSpotlight = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Regional Spotlight
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Popular Areas on the Peninsula
            </h2>
          </div>
          <Link to="/browse" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group">
              Explore All Regions
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightRegions.map((region, index) => (
            <Link
              key={region.name}
              to={`/browse?region=${region.name.toLowerCase().replace(' ', '-')}`}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 opacity-0 animate-slide-up ${
                region.featured 
                  ? "bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 hover:border-primary/50" 
                  : "bg-card border border-border/50 hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {region.featured && (
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  Most Active
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {region.tagline}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {region.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {region.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  {region.listings} listings
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionSpotlight;
