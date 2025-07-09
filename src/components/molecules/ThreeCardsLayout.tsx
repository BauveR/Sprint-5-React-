// components/molecules/ThreeCardsLayout.tsx
import React from 'react';
import Card from './Card';
import './ThreeCardsLayout.css';

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
    cards: CardData[]; // Array normal
    alignment?: 'horizontal' | 'vertical' | 'staggered';
  }
  
  const ThreeCardsLayout: React.FC<ThreeCardsLayoutProps> = ({
    cards,
    alignment = 'horizontal'
  }) => {
    return (
      <div className={`three-cards-container ${alignment}`}>
        {cards.map((card, index) => (
          <div key={index} className={`card-wrapper pos-${index + 1}`}>
            <Card {...card} />
          </div>
        ))}
      </div>
    );
  };

  export default ThreeCardsLayout;