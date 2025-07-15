import React from 'react';
import BlueShape from '../atoms/BlueShape';
import FeaturedText from '../atoms/FeaturedText';
import Text from '../atoms/Text';
import { Button } from '../atoms/Button';
import './TwoColumns.css';


interface TwoColumnsProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  ghostButtonText?: string;
  onPrimaryClick?: () => void;
  onGhostClick?: () => void;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({
  title,
  description,
  imageUrl,
  primaryButtonText,
  ghostButtonText,
  onPrimaryClick,
  onGhostClick
}) => {
  return (
    <div className="two-columns">

      <div className="left-col">
        <FeaturedText>{title}</FeaturedText>
        <Text>{description}</Text>
        
        <div className="buttons">
          <Button variant="primary" onClick={onPrimaryClick}>
            {primaryButtonText}
          </Button>
          <Button variant="ghost" onClick={onGhostClick}>
            {ghostButtonText}
          </Button>
        </div>
      </div>
      
      <div className="right-col">
        <BlueShape align="left" height="80%">
          <img src={imageUrl} alt="Feature" className="feature-img" />
        </BlueShape>
      </div>
    </div>
  );
};

export default TwoColumns;