import RegionCard from "./RegionCard";

const regions = [
  {
    name: "Soldotna",
    description: "Central hub of the Kenai Peninsula",
    href: "/browse?region=soldotna",
    external: false,
  },
  {
    name: "Kenai",
    description: "Historic city on Cook Inlet",
    href: "/browse?region=kenai",
    external: false,
  },
  {
    name: "Homer",
    description: "End of the road, artists & fishing",
    href: "/browse?region=homer",
    external: false,
  },
  {
    name: "Seward",
    description: "Gateway to Kenai Fjords",
    href: "/browse?region=seward",
    external: false,
  },
  {
    name: "Cooper Landing",
    description: "Russian River corridor",
    href: "/browse?region=cooper-landing",
    external: false,
  },
  {
    name: "Ninilchik",
    description: "Deep Creek & Russian heritage",
    href: "/browse?region=ninilchik",
    external: false,
  },
  {
    name: "Anchor Point",
    description: "Most westerly highway point",
    href: "/browse?region=anchor-point",
    external: false,
  },
  {
    name: "Kasilof",
    description: "Sterling Highway community",
    href: "/browse?region=kasilof",
    external: false,
  },
];

const RegionsSection = () => {
  return (
    <section className="py-20 md:py-28 kenai-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 opacity-0 animate-slide-up" style={{ animationFillMode: 'forwards' }}>
            Explore by Area
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Find listings in your local community across the Kenai Peninsula
          </p>
        </div>

        {/* Region Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <RegionCard
              key={region.name}
              name={region.name}
              description={region.description}
              href={region.href}
              external={region.external}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;