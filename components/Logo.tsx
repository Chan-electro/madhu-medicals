
import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  return (
    <img
      src={logoImage}
      alt="Madhu Medicals - Wellness Since 1986"
      className={`${className} w-auto object-contain`}
    />
  );
};

export default Logo;
