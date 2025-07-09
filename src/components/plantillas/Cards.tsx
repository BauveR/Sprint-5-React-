// components/plantillas/Cards.tsx
import React from 'react';
import ThreeCardsLayout from '../molecules/ThreeCardsLayout';

type CardData = Parameters<typeof ThreeCardsLayout>[0]['cards'][number];

const Cards: React.FC = () => {
    const cardsData: CardData[] =[
    {
      imageSrc: "src/assets/logo-chrome.svg",
      imageAlt: "Chrome extension",
      featuredText: "Add to Chrome",
      featuredTextSize: "xxl",
      description: "Minimum version 62",
      svgIconSrc: "src/assets/bg-dots.svg",
      buttonText: "Add & Install Extension",
      onButtonClick: () => console.log('Chrome install')
    },
    {
      imageSrc: "src/assets/logo-firefox.svg",
      imageAlt: "Firefox extension",
      featuredText: "Add to Firefox",
      featuredTextSize: "xxl",
      description: "Minimum version 55",
      svgIconSrc: "src/assets/bg-dots.svg",
      buttonText: "Add & Install Extension",
      onButtonClick: () => console.log('Firefox install')
    },
    {
      imageSrc: "src/assets/logo-opera.svg",
      imageAlt: "Opera extension",
      featuredText: "Add to Opera",
      featuredTextSize: "xxl",
      description: "Minimum version 46",
      svgIconSrc: "src/assets/bg-dots.svg",
      buttonText: "Add & Install Extension",
      onButtonClick: () => console.log('Opera install')
    }
  ];

  return (
    <ThreeCardsLayout 
      cards={cardsData} 
      alignment="staggered" 
    />
 
  );
};

export default Cards;