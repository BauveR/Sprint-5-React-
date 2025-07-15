import React from 'react';
import BlueShape from '../atoms/BlueShape';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';
import { Button } from '../atoms/Button'; 
import './TabColumn.css';

interface TabColumnProps {
  featuredText: string;
  featuredTextSize?: 'left' | 'default';
  description?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
}

const TabColumn: React.FC<TabColumnProps> = ({
  featuredText,
  featuredTextSize = 'default',
  description,
  imageUrl,
  primaryButtonText,
  onPrimaryClick,
}) => {
  return (
    <div className="two-columns-standard">
   
      <div className="left-col">
        <BlueShape align="right" height="500px">
          <img src={imageUrl} alt="Feature" className="feature-image" />
        </BlueShape>
      </div>
      
      <div className="right-col">
        <FeaturedText 
          className="featured-text" 
          left={featuredTextSize === 'left'}
        >
          {featuredText}
        </FeaturedText>
        <TextSecondary>{description}</TextSecondary>
        
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