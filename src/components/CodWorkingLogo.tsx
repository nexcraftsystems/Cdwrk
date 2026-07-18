import React, { useState, useEffect } from 'react';

interface CodWorkingLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'header' | 'footer' | 'default';
}

export default function CodWorkingLogo({ className = '', size, showText = false, variant = 'default' }: CodWorkingLogoProps) {
  const [customLogo, setCustomLogo] = useState<string | null>(() => {
    return localStorage.getItem('custom_logo_data_url');
  });

  const [logoSize, setLogoSize] = useState<number>(() => {
    if (size !== undefined) return size;
    const stored = variant === 'header' 
      ? localStorage.getItem('logo_size_header') 
      : variant === 'footer' 
        ? localStorage.getItem('logo_size_footer') 
        : null;
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed)) return parsed;
    }
    if (variant === 'header') return 20;
    if (variant === 'footer') return 32; // "a bit bigger" as default
    return 32;
  });

  useEffect(() => {
    const handleLogoUpdate = () => {
      setCustomLogo(localStorage.getItem('custom_logo_data_url'));
      
      if (size === undefined) {
        const stored = variant === 'header' 
          ? localStorage.getItem('logo_size_header') 
          : variant === 'footer' 
            ? localStorage.getItem('logo_size_footer') 
            : null;
        if (stored) {
          const parsed = parseInt(stored, 10);
          if (!isNaN(parsed)) {
            setLogoSize(parsed);
            return;
          }
        }
        if (variant === 'header') setLogoSize(20);
        else if (variant === 'footer') setLogoSize(32);
        else setLogoSize(32);
      } else {
        setLogoSize(size);
      }
    };

    window.addEventListener('storage', handleLogoUpdate);
    window.addEventListener('custom_logo_updated', handleLogoUpdate);
    window.addEventListener('logo_sizes_updated', handleLogoUpdate);
    
    // Fallback interval to catch same-page updates instantly
    const interval = setInterval(handleLogoUpdate, 1000);

    return () => {
      window.removeEventListener('storage', handleLogoUpdate);
      window.removeEventListener('custom_logo_updated', handleLogoUpdate);
      window.removeEventListener('logo_sizes_updated', handleLogoUpdate);
      clearInterval(interval);
    };
  }, [variant, size]);

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`} id="codworking-logo">
      <div className="relative flex items-center justify-center">
        {customLogo ? (
          <img 
            src={customLogo} 
            alt="CodWorking Custom Logo" 
            style={{ height: `${logoSize}px`, width: 'auto' }}
            className="object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-500 hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg 
            width={logoSize * 2} 
            height={logoSize} 
            viewBox="0 0 120 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-500 hover:scale-[1.03]"
          >
            {/* Stylized codfish outline */}
            <path 
              d="M 8 30 
                 C 15 16, 28 8, 48 6 
                 C 56 5, 65 7, 73 11 
                 C 78 8, 85 6, 91 9 
                 C 97 11, 102 18, 108 22 
                 C 112 19, 115 15, 118 13 
                 L 115 28 
                 L 118 43 
                 C 115 41, 112 37, 108 34 
                 C 102 38, 97 45, 91 47 
                 C 85 50, 78 48, 73 45 
                 C 65 49, 56 51, 48 50 
                 C 28 48, 15 40, 8 30 Z" 
              stroke="currentColor" 
              strokeWidth="1.25" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="rgba(255, 255, 255, 0.02)"
            />
            
            {/* Gill lines */}
            <path 
              d="M 30 18 C 34 24, 34 32, 30 38 M 34 21 C 37 26, 37 31, 34 35" 
              stroke="currentColor" 
              strokeWidth="0.75" 
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Eye */}
            <circle 
              cx="18" 
              cy="26" 
              r="1.75" 
              fill="currentColor" 
            />
            <circle 
              cx="18.5" 
              cy="25.5" 
              r="0.5" 
              fill="black" 
            />

            {/* Fin accents */}
            <path 
              d="M 48 6 C 45 2, 41 2, 39 4 M 49 50 C 45 54, 41 54, 39 52" 
              stroke="currentColor" 
              strokeWidth="0.75" 
              strokeLinecap="round"
              opacity="0.4"
            />

            <path 
              d="M 108 22 C 111 23, 113 25, 115 26 M 108 34 C 111 33, 113 31, 115 30" 
              stroke="currentColor" 
              strokeWidth="0.75" 
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* Integrated script text 'Codwork' in Instrument Serif font */}
            <text 
              x="64" 
              y="35" 
              textAnchor="middle" 
              fill="currentColor" 
              className="font-serif italic text-[16px] tracking-wide select-none"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic' }}
            >
              Codwork
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-bold text-sm md:text-base tracking-[0.25em] text-white uppercase font-sans leading-none">
            CodWorking
          </span>
          <span className="text-[8px] md:text-[9px] text-white/30 tracking-[0.15em] font-mono uppercase mt-1 leading-none">
            Bespoke Systems
          </span>
        </div>
      )}
    </div>
  );
}
