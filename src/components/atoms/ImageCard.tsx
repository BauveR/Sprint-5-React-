import React from 'react';
import './ImageCard.css'; 

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  className?: string; 
}

const ImageCard: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width = '100%', 
  className = '' 
}) => {
  return (
    <div className={`image-card-container ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="image-card"
        style={{ width }}
      />
    </div>
  );
};

export default ImageCard;