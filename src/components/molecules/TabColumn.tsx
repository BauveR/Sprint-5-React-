import React from 'react';
import BlueShape from '../atoms/BlueShape';
import FeaturedText from '../atoms/FeaturedText';
import Text from '../atoms/Text';
import { Button } from '../atoms/Button'; 
import './TwoColumns.css';


interface TabColumnProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;

}

const TabColumn: React.FC<TabColumnProps> = ({
  title,
  description,
  imageUrl,
  primaryButtonText,
  onPrimaryClick,
}) => {

  return (
    <div className="two-columns">
    {/* Columna Izquierda - Imagen con BlueShape */}
    <div className="left-col">
      <BlueShape align="right" height="500px">
        <img src={imageUrl} alt="Feature" className="feature-image" />
      </BlueShape>
    </div>
    
    {/* Columna Derecha - Texto y Botones */}
    <div className="right-col">
      <FeaturedText>{title}</FeaturedText>
      <Text>{description}</Text>
      
      <div className="buttons">
        <Button variant="primary" onClick={onPrimaryClick}>
          {primaryButtonText}
        </Button>
      </div>
    </div>
  </div>

  );
};

export default TabColumn;