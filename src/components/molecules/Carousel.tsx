
import Carousel from 'react-bootstrap/Carousel';
import BlueShape from '../atoms/BlueShape';

interface ControlledCarouselProps {
  activeIndex: number;
  onSelect: (selectedIndex: number) => void;
}

function ControlledCarousel({ activeIndex, onSelect }: ControlledCarouselProps) {
  return (
    <Carousel activeIndex={activeIndex} onSelect={onSelect} indicators={false}>
      <Carousel.Item>
        <BlueShape align="right" height="500px">
          <div className="blue-shape-content">
            <img
              src="/src/assets/illustration-features.svg"
              alt="Simple Bookmarking"
              className="image-medium image-right"
            />
          </div>
        </BlueShape>
        <Carousel.Caption className="custom-caption">
          <h3>Simple Bookmarking</h3>
          <p>Organize your bookmarks however you like.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <BlueShape align="right" height="500px">
          <div className="blue-shape-content">
            <img
              src="/src/assets/illustration-features.svg"
              alt="Speedy Searching"
              className="image-medium image-right"
            />
          </div>
        </BlueShape>
        <Carousel.Caption className="custom-caption">
          <h3>Speedy Searching</h3>
          <p>Find your saved sites in no time at all.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <BlueShape align="right" height="500px">
          <div className="blue-shape-content">
            <img
              src="/src/assets/illustration-features.svg"
              alt="Easy Sharing"
              className="image-medium image-right"
            />
          </div>
        </BlueShape>
        <Carousel.Caption className="custom-caption">
          <h3>Easy Sharing</h3>
          <p>Share your bookmarks with others easily.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;