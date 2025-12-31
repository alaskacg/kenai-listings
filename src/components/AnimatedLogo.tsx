import { useEffect, useState } from "react";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-10 h-10 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow ring */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-kenai-teal to-kenai-forest opacity-80 blur-sm transition-all duration-500 ${isHovered ? 'scale-125 opacity-100' : 'scale-100'}`} />
      
      {/* Main logo container */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary via-kenai-ocean to-kenai-deep overflow-hidden">
        {/* Animated wave layers */}
        <div className="absolute inset-0">
          {/* Wave 1 */}
          <svg 
            className="absolute bottom-0 left-0 w-full animate-wave-slow" 
            viewBox="0 0 40 12" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0 12 L0 8 Q5 4 10 8 T20 8 T30 8 T40 8 L40 12 Z" 
              className="fill-kenai-seafoam/40"
            />
          </svg>
          
          {/* Wave 2 */}
          <svg 
            className="absolute bottom-0 left-0 w-full animate-wave-medium" 
            viewBox="0 0 40 12" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0 12 L0 9 Q5 5 10 9 T20 9 T30 9 T40 9 L40 12 Z" 
              className="fill-primary/30"
            />
          </svg>
        </div>
        
        {/* Mountain peaks */}
        <svg 
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          viewBox="0 0 40 40" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Back mountain */}
          <path 
            d="M5 32 L15 12 L25 32 Z" 
            className="fill-kenai-forest/60"
          />
          {/* Front mountain with snow cap */}
          <path 
            d="M12 32 L24 8 L36 32 Z" 
            className="fill-primary-foreground/90"
          />
          {/* Snow cap */}
          <path 
            d="M20 8 L24 8 L27 14 L24 12 L20 14 L17 12 L14 14 Z" 
            className="fill-white"
          />
        </svg>
        
        {/* Animated aurora/glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-kenai-seafoam/20 to-primary/10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Sparkle effects */}
        <div className={`absolute top-2 right-2 w-1 h-1 rounded-full bg-white animate-pulse-glow ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
        <div className={`absolute top-3 right-3.5 w-0.5 h-0.5 rounded-full bg-white animate-pulse-glow ${isHovered ? 'opacity-100' : 'opacity-40'}`} style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

export default AnimatedLogo;
