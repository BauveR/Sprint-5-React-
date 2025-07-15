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
            featuredText="Features" 
            featuredTextSize="xxl"
            description="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices
so you call access them on the go." 
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