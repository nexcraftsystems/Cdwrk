import React from 'react';

interface CountryFlagProps {
  code: string;
  size?: number;
  className?: string;
}

export default function CountryFlag({ code, size = 22, className = '' }: CountryFlagProps) {
  const normCode = code.toUpperCase();
  
  // Premium circular vector flag designs for cross-platform crispness (Windows/Mac/Mobile)
  switch (normCode) {
    case 'MY':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="16" fill="#FFFFFF" />
          <path d="M0 1.14H16M0 3.42H16M0 5.7H16M0 7.98H16M0 10.26H16M0 12.54H16M0 14.82H16" stroke="#CC1E25" strokeWidth="1.14" />
          <rect width="8.5" height="8.5" fill="#010066" />
          <circle cx="3.8" cy="4.2" r="2.2" fill="#FFCC00" />
          <circle cx="4.6" cy="4.2" r="2.2" fill="#010066" />
          <polygon points="5.5,3.2 5.8,4.1 6.7,4.2 6.0,4.7 6.2,5.6 5.5,5.0 4.8,5.6 5.0,4.7 4.3,4.2 5.2,4.1" fill="#FFCC00" />
        </svg>
      );
    case 'ID':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="8" fill="#E21C1C" />
          <rect y="8" width="16" height="8" fill="#FFFFFF" />
        </svg>
      );
    case 'PH':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="8" fill="#0038A8" />
          <rect y="8" width="16" height="8" fill="#CE1126" />
          <polygon points="0,0 8,8 0,16" fill="#FFFFFF" />
          <circle cx="2.5" cy="8" r="1.2" fill="#FCD116" />
          <circle cx="1.2" cy="3" r="0.4" fill="#FCD116" />
          <circle cx="1.2" cy="13" r="0.4" fill="#FCD116" />
          <circle cx="6" cy="8" r="0.4" fill="#FCD116" />
        </svg>
      );
    case 'AE':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect x="4.5" width="11.5" height="5.33" fill="#00732F" />
          <rect x="4.5" y="5.33" width="11.5" height="5.34" fill="#FFFFFF" />
          <rect x="4.5" y="10.67" width="11.5" height="5.33" fill="#000000" />
          <rect width="4.5" height="16" fill="#FF0000" />
        </svg>
      );
    case 'SG':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="8" fill="#EF3340" />
          <rect y="8" width="16" height="8" fill="#FFFFFF" />
          <circle cx="3.5" cy="4" r="2" fill="#FFFFFF" />
          <circle cx="4.2" cy="4" r="2" fill="#EF3340" />
          <circle cx="4.8" cy="3.2" r="0.3" fill="#FFFFFF" />
          <circle cx="5.6" cy="3.6" r="0.3" fill="#FFFFFF" />
          <circle cx="5.3" cy="4.5" r="0.3" fill="#FFFFFF" />
          <circle cx="4.4" cy="4.5" r="0.3" fill="#FFFFFF" />
          <circle cx="4.2" cy="3.6" r="0.3" fill="#FFFFFF" />
        </svg>
      );
    case 'FR':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="5.33" height="16" fill="#00209F" />
          <rect x="5.33" width="5.34" height="16" fill="#FFFFFF" />
          <rect x="10.67" width="5.33" height="16" fill="#E21C1C" />
        </svg>
      );
    case 'UK':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="16" fill="#00247D" />
          <path d="M0 0L16 16M16 0L0 16" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M0 0L16 16M16 0L0 16" stroke="#CF142B" strokeWidth="1" />
          <path d="M8 0V16M0 8H16" stroke="#FFFFFF" strokeWidth="4" />
          <path d="M8 0V16M0 8H16" stroke="#CF142B" strokeWidth="2.4" />
        </svg>
      );
    case 'TR':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="16" fill="#E30A17" />
          <circle cx="6.5" cy="8" r="3.2" fill="#FFFFFF" />
          <circle cx="7.6" cy="8" r="2.6" fill="#E30A17" />
          <polygon points="10.8,6.8 11.1,7.6 11.9,7.8 11.3,8.3 11.5,9.1 10.8,8.6 10.1,9.1 10.3,8.3 9.7,7.8 10.5,7.6" fill="#FFFFFF" />
        </svg>
      );
    case 'US':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className={`rounded-full shadow-sm border border-white/10 shrink-0 ${className}`}
        >
          <rect width="16" height="16" fill="#FFFFFF" />
          <path d="M0 1.23H16M0 3.69H16M0 6.15H16M0 8.61H16M0 11.07H16M0 13.53H16M0 15.99H16" stroke="#B22234" strokeWidth="1.23" />
          <rect width="8.5" height="8.5" fill="#3C3B6E" />
          <circle cx="2" cy="2" r="0.4" fill="#FFFFFF" />
          <circle cx="4" cy="2" r="0.4" fill="#FFFFFF" />
          <circle cx="6" cy="2" r="0.4" fill="#FFFFFF" />
          <circle cx="3" cy="3.5" r="0.4" fill="#FFFFFF" />
          <circle cx="5" cy="3.5" r="0.4" fill="#FFFFFF" />
          <circle cx="2" cy="5" r="0.4" fill="#FFFFFF" />
          <circle cx="4" cy="5" r="0.4" fill="#FFFFFF" />
          <circle cx="6" cy="5" r="0.4" fill="#FFFFFF" />
          <circle cx="3" cy="6.5" r="0.4" fill="#FFFFFF" />
          <circle cx="5" cy="6.5" r="0.4" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
}
