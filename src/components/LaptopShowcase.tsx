import laptopScreenshot from "@/assets/laptop-screenshot.png";

export const LaptopShowcase = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Abstract data network — behind and around laptop */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow filters */}
        <defs>
          <filter id="nodeGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="bigGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wave lines — thin, 1px, 20-30% opacity */}
        <path d="M20 160 Q80 80 180 140 Q280 200 380 120 Q440 80 490 130" stroke="#7FA8FF" strokeWidth="1" opacity="0.28" />
        <path d="M10 220 Q100 160 200 210 Q300 260 400 180 Q460 140 500 190" stroke="#E7B6D9" strokeWidth="1" opacity="0.25" />
        <path d="M30 100 Q130 160 230 100 Q330 40 430 120 Q470 150 500 110" stroke="#7FA8FF" strokeWidth="1" opacity="0.22" />
        <path d="M0 280 Q80 220 180 270 Q280 320 380 240 Q450 190 500 250" stroke="#E7B6D9" strokeWidth="1" opacity="0.2" />
        <path d="M40 320 Q140 260 240 310 Q340 350 440 270 Q480 240 500 280" stroke="#7FA8FF" strokeWidth="1" opacity="0.18" />
        <path d="M0 60 Q100 120 200 70 Q300 20 400 90 Q460 120 500 80" stroke="#E7B6D9" strokeWidth="1" opacity="0.2" />
        {/* Cross-behind lines */}
        <path d="M60 350 Q160 200 300 180 Q420 160 490 50" stroke="#7FA8FF" strokeWidth="1" opacity="0.22" />
        <path d="M0 40 Q120 180 250 210 Q380 240 500 350" stroke="#E7B6D9" strokeWidth="1" opacity="0.2" />

        {/* Blue nodes with glow */}
        <circle cx="110" cy="140" r="3" fill="#7FA8FF" opacity="0.5" />
        <circle cx="110" cy="140" r="18" fill="#7FA8FF" opacity="0.15" filter="url(#bigGlow)" />

        <circle cx="330" cy="120" r="2.5" fill="#7FA8FF" opacity="0.45" />
        <circle cx="330" cy="120" r="14" fill="#7FA8FF" opacity="0.12" filter="url(#nodeGlow)" />

        <circle cx="230" cy="100" r="2" fill="#7FA8FF" opacity="0.4" />
        <circle cx="230" cy="100" r="16" fill="#7FA8FF" opacity="0.1" filter="url(#bigGlow)" />

        <circle cx="440" cy="120" r="2.5" fill="#7FA8FF" opacity="0.4" />
        <circle cx="60" cy="280" r="2" fill="#7FA8FF" opacity="0.35" />
        <circle cx="60" cy="280" r="14" fill="#7FA8FF" opacity="0.1" filter="url(#nodeGlow)" />
        <circle cx="300" cy="310" r="2.5" fill="#7FA8FF" opacity="0.4" />

        {/* Pink nodes with glow */}
        <circle cx="200" cy="210" r="3" fill="#E7B6D9" opacity="0.5" />
        <circle cx="200" cy="210" r="20" fill="#E7B6D9" opacity="0.15" filter="url(#bigGlow)" />

        <circle cx="400" cy="240" r="2.5" fill="#E7B6D9" opacity="0.45" />
        <circle cx="400" cy="240" r="16" fill="#E7B6D9" opacity="0.12" filter="url(#bigGlow)" />

        <circle cx="80" cy="160" r="2" fill="#E7B6D9" opacity="0.4" />
        <circle cx="80" cy="160" r="14" fill="#E7B6D9" opacity="0.1" filter="url(#nodeGlow)" />

        <circle cx="460" cy="270" r="2.5" fill="#E7B6D9" opacity="0.4" />
        <circle cx="460" cy="270" r="12" fill="#E7B6D9" opacity="0.12" filter="url(#nodeGlow)" />

        <circle cx="150" cy="60" r="2" fill="#E7B6D9" opacity="0.35" />
        <circle cx="150" cy="60" r="16" fill="#E7B6D9" opacity="0.1" filter="url(#nodeGlow)" />
        <circle cx="350" cy="340" r="2" fill="#E7B6D9" opacity="0.35" />
      </svg>

      {/* Laptop — 78-82% of right column width, with float animation */}
      <div className="relative z-10 w-[96%] animate-float">
        <img
          src={laptopScreenshot}
          alt="STRAGY Platform"
          className="w-full h-auto"
          draggable={false}
        />
        {/* Elliptical shadow */}
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[75%] h-5 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(31,35,64,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Subtle glow */}
        <div
          className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-[60%] h-10 rounded-[50%]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(127,168,255,0.15) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
      </div>
    </div>
  );
};
