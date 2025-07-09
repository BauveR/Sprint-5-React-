import React from 'react';
import ImageCard from '../atoms/ImageCard';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';
import { Button } from '../atoms/Button';
import SvgIcon from '../atoms/SvgIcon'; // Asegúrate de que la ruta sea correcta
import './Card.css';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  featuredText: string;
  description: string;
  svgIconSrc?: string; // Cambiado a svgIconSrc para mayor claridad
  svgIconAlt?: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  featuredText,
  description,
  svgIconSrc,
  svgIconAlt = "divider", // Valor por defecto
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <ImageCard src={imageSrc} alt={imageAlt} width="100%" />
      </div>
      
      <div className="card-content">
        <FeaturedText center={true}>{featuredText}</FeaturedText>
        <TextSecondary center={true}>{description}</TextSecondary>
      </div>
      
      {svgIconSrc && (
        <div className="svg-container">
          <SvgIcon 
            src={svgIconSrc} 
            alt={svgIconAlt}
            width="100%"
          />
        </div>
      )}
      
      <div className="card-button-container">
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;