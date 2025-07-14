// components/molecules/ThreeCardsLayout.tsx
export interface CardData {  // <-- Añade 'export'
    imageSrc: string;
    imageAlt: string;
    featuredText: string;
    featuredTextSize?: 'xxl' | 'default';
    description: string;
    svgIconSrc?: string;
    buttonText: string;
    onButtonClick: () => void;
  }