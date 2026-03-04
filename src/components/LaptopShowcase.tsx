import laptopScreenshot from "@/assets/laptop-screenshot.png";

export const LaptopShowcase = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Abstract data network lines behind laptop */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wave lines */}
        <path d="M30 180 Q120 120 250 200 Q380 280 470 160" stroke="hsl(var(--stragy-node-blue))" strokeWidth="1" opacity="0.25" />
        <path d="M50 280 Q180 200 300 250 Q420 300 480 200" stroke="hsl(var(--stragy-node-pink))" strokeWidth="1" opacity="0.2" />
        <path d="M20 100 Q150 180 280 120 Q400 60 490 140" stroke="hsl(var(--stragy-node-blue))" strokeWidth="1" opacity="0.2" />
        <path d="M40 320 Q130 260 240 300 Q350 340 460 260" stroke="hsl(var(--stragy-node-pink))" strokeWidth="1" opacity="0.15" />
        <path d="M10 240 Q100 160 200 220 Q320 290 450 180" stroke="hsl(var(--stragy-node-blue))" strokeWidth="1" opacity="0.18" />
        <path d="M60 60 Q200 140 320 80 Q430 30 490 100" stroke="hsl(var(--stragy-node-pink))" strokeWidth="1" opacity="0.15" />

        {/* Glowing nodes - blue */}
        <circle cx="120" cy="150" r="3" fill="hsl(var(--stragy-node-blue))" opacity="0.35" />
        <circle cx="120" cy="150" r="12" fill="hsl(var(--stragy-node-blue))" opacity="0.08" filter="url(#glow)" />
        
        <circle cx="350" cy="180" r="2.5" fill="hsl(var(--stragy-node-blue))" opacity="0.3" />
        <circle cx="350" cy="180" r="10" fill="hsl(var(--stragy-node-blue))" opacity="0.06" filter="url(#glow)" />

        <circle cx="250" cy="120" r="2" fill="hsl(var(--stragy-node-blue))" opacity="0.25" />
        <circle cx="250" cy="120" r="14" fill="hsl(var(--stragy-node-blue))" opacity="0.05" filter="url(#glow)" />

        <circle cx="440" cy="160" r="2.5" fill="hsl(var(--stragy-node-blue))" opacity="0.3" />

        {/* Glowing nodes - pink */}
        <circle cx="200" cy="250" r="3" fill="hsl(var(--stragy-node-pink))" opacity="0.3" />
        <circle cx="200" cy="250" r="14" fill="hsl(var(--stragy-node-pink))" opacity="0.07" filter="url(#glow)" />

        <circle cx="400" cy="280" r="2" fill="hsl(var(--stragy-node-pink))" opacity="0.25" />
        <circle cx="400" cy="280" r="10" fill="hsl(var(--stragy-node-pink))" opacity="0.06" filter="url(#glow)" />

        <circle cx="80" cy="200" r="2.5" fill="hsl(var(--stragy-node-pink))" opacity="0.28" />
        <circle cx="80" cy="200" r="12" fill="hsl(var(--stragy-node-pink))" opacity="0.06" filter="url(#glow)" />

        <circle cx="300" cy="300" r="2" fill="hsl(var(--stragy-node-blue))" opacity="0.22" />
        <circle cx="460" cy="100" r="2" fill="hsl(var(--stragy-node-pink))" opacity="0.2" />
        <circle cx="60" cy="100" r="2" fill="hsl(var(--stragy-node-blue))" opacity="0.2" />

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Laptop with float animation */}
      <div className="relative z-10 w-[80%] animate-float">
        <img
          src={laptopScreenshot}
          alt="STRAGY Platform"
          className="w-full h-auto"
          draggable={false}
        />
        {/* Elliptical shadow under laptop */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--stragy-dark-text) / 0.15) 0%, transparent 70%)',
          }}
        />
        {/* Subtle glow under laptop */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--stragy-node-blue) / 0.12) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
    </div>
  );
};
