import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentListings from "@/components/RecentListings";
import EcosystemSites from "@/components/EcosystemSites";
import CTASection from "@/components/CTASection";
import TrustIndicators from "@/components/TrustIndicators";
import BetaBanner from "@/components/BetaBanner";
import BetaPromoSection from "@/components/BetaPromoSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import RegionSpotlight from "@/components/RegionSpotlight";
import EmpireNetwork from "@/components/EmpireNetwork";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BetaBanner />
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <FeaturedCategories />
        <BetaPromoSection />
        <RegionSpotlight />
        <RecentListings />
        <EcosystemSites />
        <CTASection />
        <EmpireNetwork currentSite="kenai-listings" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
