
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  const primaryColor = light ? "#ffffff" : "#004d5e";
  const secondaryColor = light ? "#4ecdc4" : "#4ecdc4";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto fill-none stroke-current" style={{ color: secondaryColor }}>
        {/* Three petals */}
        <path d="M50 45 C35 25 15 35 15 55 C15 75 35 65 50 65" strokeWidth="2.5" />
        <path d="M50 45 C65 25 85 35 85 55 C85 75 65 65 50 65" strokeWidth="2.5" />
        <path d="M50 15 C35 15 35 45 50 45 C65 45 65 15 50 15" strokeWidth="2.5" />
        
        {/* Triangle with inner pattern */}
        <path d="M50 45 L65 70 L35 70 Z" fill="white" stroke={primaryColor} strokeWidth="3" />
        <path d="M50 50 L53 58 L47 58 Z M50 65 L53 57 L47 57 Z M42 58 L58 58" stroke={primaryColor} strokeWidth="1" />
        <circle cx="50" cy="58" r="4" stroke={primaryColor} strokeWidth="1" />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg md:text-xl tracking-wider leading-none" style={{ color: primaryColor }}>
            MADHU MEDICALS
          </span>
          <div className="h-[1px] w-full my-1" style={{ background: primaryColor, opacity: 0.3 }}></div>
          <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.25em] uppercase opacity-70" style={{ color: primaryColor }}>
            Wellness Since 1986
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
