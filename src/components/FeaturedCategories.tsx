import { Link } from "react-router-dom";
import { 
  Car, Ship, Home, Wrench, Sofa, Dog, TreePine, Hammer
} from "lucide-react";

const categories = [
  { name: "Vehicles", icon: Car, href: "/browse?category=vehicles", count: "Hot" },
  { name: "Boats & Marine", icon: Ship, href: "/browse?category=boats", count: "New" },
  { name: "Real Estate", icon: Home, href: "/browse?category=real-estate", count: "12" },
  { name: "Tools & Equipment", icon: Wrench, href: "/browse?category=tools", count: "8" },
  { name: "Furniture", icon: Sofa, href: "/browse?category=furniture", count: "15" },
  { name: "Pets & Livestock", icon: Dog, href: "/browse?category=pets", count: "5" },
  { name: "Outdoor & Camping", icon: TreePine, href: "/browse?category=outdoor", count: "New" },
  { name: "Building Materials", icon: Hammer, href: "/browse?category=materials", count: "10" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
            Shop by Category
          </h3>
          <Link 
            to="/browse" 
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/50 rounded-xl p-4 text-center transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 mb-2 transition-colors">
                <category.icon className="w-5 h-5 text-primary" />
                {(category.count === "Hot" || category.count === "New") && (
                  <span className={`absolute -top-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    category.count === "Hot" ? "bg-destructive text-white" : "bg-accent text-white"
                  }`}>
                    {category.count}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-foreground truncate">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
