import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const BetaBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-white text-sm md:text-base font-medium">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span className="text-center">
          <span className="font-bold">🎉 BETA LAUNCH:</span> All 60-day listings are{" "}
          <span className="font-bold underline decoration-2">FREE</span> for verified users!
        </span>
        <Link 
          to="/post-listing" 
          className="hidden md:inline-flex items-center gap-1 ml-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
        >
          Post Free Now <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default BetaBanner;
