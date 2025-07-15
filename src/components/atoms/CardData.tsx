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