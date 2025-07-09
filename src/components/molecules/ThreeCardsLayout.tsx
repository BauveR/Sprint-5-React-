// components/molecules/ThreeCardsLayout.tsx
import React from 'react';
import Card from './Card';
import './ThreeCardsLayout.css';

interface CardData {
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
    cards: CardData[]; // Cambia a array normal en lugar de tupla
  alignment?: 'horizontal' | 'vertical' | 'staggered';
  minCards?: number; // Opcional: validar mínimo de cards
  maxCards?: number; // Opcional: validar máximo de cards
}

const ThreeCardsLayout: React.FC<ThreeCardsLayoutProps> = ({
  cards,
  alignment = 'horizontal',
  minCards = 3,
  maxCards = 3
}) => {
  // Validación opcional del número de cards
  if (cards.length < minCards || cards.length > maxCards) {
    console.warn(`ThreeCardsLayout espera entre ${minCards} y ${maxCards} cards`);
  }

  return (
    <div className={`three-cards-container ${alignment}`}>
      {cards.slice(0, maxCards).map((card, index) => (
        <div key={index} className={`card-wrapper pos-${index + 1}`}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default ThreeCardsLayout;