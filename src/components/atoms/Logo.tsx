import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
  width?: string | number;
}

const Logo: React.FC<LogoProps> = ({ src, alt, width = '500px' }) => {
  return (
    <div className="logo-container">
      <img 
        src={src} 
        alt={alt} 
        style={{ width, height: 'auto' }}
      />
    </div>
  );
};

export default Logo;