import React from 'react';
import Card from './Card';
import './ThreeCardsLayout.css';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';

export interface CardData {
  imageSrc: string;
  imageAlt: string;
  featuredText: string;
  featuredTextSize?: 'xxl' | 'default';
  description: string;
  svgIconSrc?: string;
  buttonText: string;
  onButtonClick: () => void;
}

interface ThreeCardsLayoutProps {
  cards: CardData[];
  alignment?: 'horizontal' | 'vertical' | 'staggered';
}

const ThreeCardsLayout: React.FC<ThreeCardsLayoutProps> = ({
  cards,
  alignment = 'horizontal'
}) => {
  return (
    <div className="three-cards-wrapper">
      <div className="three-cards-header">
        <FeaturedText className="xxl" center>
        Download the extension
        </FeaturedText>
        <TextSecondary className="center">
        We've aot more browsers in the pipeline. Please do let us know if
        vou ve aot a tavourite voud like us to prioritize.
        </TextSecondary>
      </div>
      
      <div className={`three-cards-container ${alignment}`}>
        {cards.map((card, index) => (
          <div key={index} className={`card-wrapper pos-${index + 1}`}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCardsLayout;