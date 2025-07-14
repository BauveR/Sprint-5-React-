import Accordion from 'react-bootstrap/Accordion';
import './Acordion.css';
import { Button } from '../atoms/Button';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';


interface AcordionProps {

  featuredText: string; 
  featuredTextSize?: 'xxl' | 'default'; 
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

function BasicExample({
  featuredText,
  featuredTextSize = 'default',
  description,
  buttonText,
  onButtonClick,  
}: AcordionProps) {

  return (

    <div className="acordion-container">
    {/* Sección de texto destacado */}
    <div className="acordion-header">
      <FeaturedText 
        center={true}
        className={featuredTextSize === 'xxl' ? 'xxl' : ''}
      >
        {featuredText}
      </FeaturedText>
      <TextSecondary center={true}>{description}</TextSecondary>
    </div>

    {}
    <div className="acordion-content">
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Bookmark?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can request a new browser?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is there a mobile app?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>What about other Chromium browsers?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

    {/* Botón */}
    <div className="card-button-container">
      <Button variant="primary" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  </div>
);
}

export default BasicExample;