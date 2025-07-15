
import Carousel from 'react-bootstrap/Carousel';
import TabColumn from './Tabcolumn';

interface ControlledCarouselProps {
    activeIndex: number;
    onSelect?: (selectedIndex: number) => void; // Hacer opcional para evitar advertencias
  }
  
  function ControlledCarousel({ activeIndex, onSelect }: ControlledCarouselProps) {
    return (
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={onSelect} 
        indicators={false}
        controls={false}   
        touch={false} 
        keyboard={false} 
        interval={null} 
        pause={false} 
      >
        <Carousel.Item>
          <TabColumn
            title="Bookmark in one click"
            description="Urganize your bookmarks nowever you lke. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
            imageUrl="src/assets/illustration-features-tab-1.svg"
            primaryButtonText="More Info"
            onPrimaryClick={() => console.log('Primary button clicked')}></TabColumn>
        </Carousel.Item>
        
        <Carousel.Item>
        <TabColumn
            title="Intelligent search"
            description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            imageUrl="src/assets/illustration-features-tab-2.svg"
            primaryButtonText="More Info"
            onPrimaryClick={() => console.log('Primary button clicked')}></TabColumn>
        </Carousel.Item>
        
        <Carousel.Item>
        <TabColumn
            title="Share your bookmarks"
            description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            imageUrl="src/assets/illustration-features-tab-3.svg"
            primaryButtonText="More Info"
            onPrimaryClick={() => console.log('Primary button clicked')}></TabColumn>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;