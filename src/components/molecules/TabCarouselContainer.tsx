import { useState } from 'react';
import UnderlineTab from './Tab';
import ControlledCarousel from './Carousel';
import './TabCarouselContainer.css';

export default function TabCarouselContainer() {
    const [activeIndex, setActiveIndex] = useState(0); 
  
    const handleTabSelect = (eventKey: string | null) => {
      if (eventKey) {
        setActiveIndex(parseInt(eventKey));
      }
    };
  
    const handleCarouselSelect = (selectedIndex: number) => {
      setActiveIndex(selectedIndex);
    };
  
    return (
      <div className="tab-carousel-container">
        <div className="tabs-section">
          <UnderlineTab 
            defaultActiveKey={activeIndex.toString()}
            onSelect={handleTabSelect}
          />
        </div>
        
        <div className="carousel-section">
          <ControlledCarousel 
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
          />
        </div>
      </div>
    );
  }