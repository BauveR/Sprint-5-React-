import type React from 'react';
import TwoColumns from '../molecules/TwoColumns';




const Hero: React.FC = () => {
    // Estos son los valores por defecto para el Hero
    const heroData = {
      title: "A Simple Bookmark Manager",
      description: "A clean and simple Interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
      imageUrl: "src/assets/illustration-hero.svg", 
      primaryButtonText: "Get it on Chrome",
      ghostButtonText: "Get it on Firefox",
      onPrimaryClick: () => console.log("Acción principal del Hero"),
      onGhostClick: () => console.log("Acción secundaria del Hero")
    };
  
    return <TwoColumns {...heroData} />;
  };
  
  export default Hero;

