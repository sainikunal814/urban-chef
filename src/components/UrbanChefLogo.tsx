import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showTagline?: boolean;
}

export const UrbanChefLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showTagline = false 
}) => {
  // Dimensions for SVG viewbox
  const width = 280;
  const height = 180;

  let sizeClass = 'h-10';
  if (size === 'sm') sizeClass = 'h-8';
  if (size === 'md') sizeClass = 'h-11';
  if (size === 'lg') sizeClass = 'h-16';
  if (size === 'xl') sizeClass = 'h-24';
  if (size === 'custom') sizeClass = '';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className={`relative ${sizeClass} aspect-[280/180] filter drop-shadow-sm transition-transform duration-300 hover:scale-105`}>
        <svg 
          viewBox="0 0 280 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Mask to split top yellow and bottom white inside trapezoid */}
            <clipPath id="trapezoid-clip">
              <path d="M 22 18 C 16 18, 12 22, 14 28 L 52 152 C 54 158, 60 162, 68 162 L 212 162 C 220 162, 226 158, 228 152 L 266 28 C 268 22, 264 18, 258 18 Z" />
            </clipPath>
            {/* Subtle gloss gradient */}
            <linearGradient id="gloss" x1="0" y1="0" x2="280" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Trapezoid Base Backgrounds */}
          <g clipPath="url(#trapezoid-clip)">
            {/* Upper Half - Yellow #FFD600 */}
            <rect x="0" y="0" width="280" height="90" fill="#FFD600" />
            {/* Lower Half - White #FFFFFF */}
            <rect x="0" y="90" width="280" height="90" fill="#FFFFFF" />
            {/* Divider Hairline */}
            <line x1="0" y1="90" x2="280" y2="90" stroke="#3A3A3A" strokeWidth="1" opacity="0.3" />
            {/* Gloss Overlay */}
            <rect x="0" y="0" width="280" height="180" fill="url(#gloss)" />
          </g>

          {/* Dark Grey Outer Border #3A3A3A */}
          <path 
            d="M 22 18 C 16 18, 12 22, 14 28 L 52 152 C 54 158, 60 162, 68 162 L 212 162 C 220 162, 226 158, 228 152 L 266 28 C 268 22, 264 18, 258 18 Z" 
            fill="none" 
            stroke="#3A3A3A" 
            strokeWidth="11" 
            strokeLinejoin="round" 
            strokeLinecap="round"
          />

          {/* Top Text: URBAN (#3A3A3A) */}
          <text 
            x="140" 
            y="72" 
            fill="#3A3A3A" 
            fontFamily="'Poppins', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="52" 
            letterSpacing="2" 
            textAnchor="middle"
          >
            URBAN
          </text>

          {/* Registered Trademark ® */}
          <text 
            x="240" 
            y="42" 
            fill="#3A3A3A" 
            fontFamily="'Arial', sans-serif" 
            fontWeight="bold" 
            fontSize="18"
          >
            ®
          </text>

          {/* Bottom Text: CHEF (#1F3F99) */}
          <text 
            x="140" 
            y="146" 
            fill="#1F3F99" 
            fontFamily="'Poppins', 'Arial Black', sans-serif" 
            fontWeight="900" 
            fontSize="52" 
            letterSpacing="2.5" 
            textAnchor="middle"
          >
            CHEF
          </text>
        </svg>
      </div>

      {showTagline && (
        <span className="mt-1 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-600 dark:text-slate-400">
          Cookware & Kitchenware
        </span>
      )}
    </div>
  );
};
