import { useState } from "react";

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-12 h-12 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect */}
      <div className={`absolute inset-0 rounded-xl blur-md transition-all duration-700 ${isHovered ? 'opacity-80 scale-125' : 'opacity-40 scale-100'}`}
        style={{
          background: 'linear-gradient(135deg, hsl(168 65% 38%) 0%, hsl(195 60% 35%) 50%, hsl(150 55% 28%) 100%)'
        }}
      />
      
      {/* Main logo container */}
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg"
        style={{
          background: 'linear-gradient(180deg, hsl(200 50% 22%) 0%, hsl(200 45% 12%) 100%)'
        }}
      >
        {/* Sky gradient with aurora effect */}
        <div className="absolute inset-0">
          {/* Aurora bands */}
          <div className={`absolute top-0 left-0 right-0 h-1/2 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-60'}`}>
            <div className="absolute inset-0 animate-aurora-1"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, hsl(168 65% 38% / 0.3) 30%, hsl(170 40% 75% / 0.2) 50%, transparent 70%)',
              }}
            />
            <div className="absolute inset-0 animate-aurora-2"
              style={{
                background: 'linear-gradient(180deg, transparent 10%, hsl(195 60% 35% / 0.25) 40%, hsl(150 55% 28% / 0.2) 60%, transparent 80%)',
              }}
            />
          </div>
          
          {/* Stars */}
          <div className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
            <div className="absolute top-1.5 left-2 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" />
            <div className="absolute top-2.5 right-2.5 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-300" />
            <div className="absolute top-1 right-4 w-[3px] h-[3px] bg-white rounded-full animate-twinkle delay-500" />
            <div className="absolute top-3 left-4 w-[2px] h-[2px] bg-white rounded-full animate-twinkle delay-700" />
          </div>
        </div>
        
        {/* Mountains - High definition SVG */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 48 48" 
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Back mountain range - distant */}
          <path 
            d="M-2 48 L-2 32 L8 24 L14 28 L20 22 L28 30 L34 26 L42 32 L50 28 L50 48 Z" 
            fill="hsl(200 40% 18%)"
            className={`transition-transform duration-700 ${isHovered ? 'translate-y-0' : 'translate-y-0.5'}`}
            style={{ filter: 'blur(0.5px)' }}
          />
          
          {/* Mid mountain - with snow */}
          <path 
            d="M-4 48 L-4 38 L6 26 L12 30 L16 28 L22 34 L26 32 L30 38 L32 36 L36 40 L52 40 L52 48 Z" 
            fill="hsl(195 35% 22%)"
            className={`transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-0.5'}`}
          />
          
          {/* Main mountain - left peak */}
          <path 
            d="M-2 48 L10 28 L16 32 L22 24 L28 28 L32 48 Z" 
            fill="hsl(150 30% 25%)"
            className={`transition-transform duration-500 ${isHovered ? 'scale-[1.02] origin-bottom' : 'scale-100'}`}
          />
          
          {/* Main mountain - right dominant peak */}
          <path 
            d="M18 48 L32 20 L38 26 L44 22 L52 30 L52 48 Z" 
            fill="hsl(168 35% 28%)"
            className={`transition-transform duration-500 ${isHovered ? 'scale-[1.02] origin-bottom' : 'scale-100'}`}
          />
          
          {/* Snow cap - main peak */}
          <path 
            d="M32 20 L34 24 L32 23 L29 26 L31 24 L28 25 L32 20 Z" 
            fill="hsl(180 30% 96%)"
            className="animate-snow-shimmer"
          />
          
          {/* Snow streak - right peak */}
          <path 
            d="M44 22 L46 26 L44 25 L42 28 L44 22 Z" 
            fill="hsl(180 20% 90%)"
            className="animate-snow-shimmer delay-200"
          />
          
          {/* Snow cap - left peak */}
          <path 
            d="M22 24 L24 27 L22 26 L20 28 L22 24 Z" 
            fill="hsl(180 25% 92%)"
            className="animate-snow-shimmer delay-400"
          />
          
          {/* Foreground ridge */}
          <path 
            d="M-2 48 L4 42 L10 44 L18 40 L24 42 L32 38 L38 42 L44 40 L50 44 L50 48 Z" 
            fill="hsl(200 45% 8%)"
          />
        </svg>
        
        {/* Water/Lake reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden">
          <div className="absolute inset-0 animate-water-ripple"
            style={{
              background: 'linear-gradient(180deg, hsl(195 60% 25% / 0.6) 0%, hsl(200 50% 20% / 0.8) 50%, hsl(200 45% 15%) 100%)'
            }}
          />
          <div className="absolute inset-0 animate-water-ripple-slow"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, hsl(168 65% 38% / 0.2) 25%, transparent 50%, hsl(168 65% 38% / 0.15) 75%, transparent 100%)'
            }}
          />
        </div>
        
        {/* Golden accent glow on hover */}
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(ellipse, hsl(43 70% 42% / 0.4) 0%, transparent 70%)',
            filter: 'blur(2px)'
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
