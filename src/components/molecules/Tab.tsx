import Nav from 'react-bootstrap/Nav';
import './Tab.css';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';

interface UnderlineTabProps {
  defaultActiveKey: string;
  onSelect?: (eventKey: string | null) => void;
  featuredText?: string; // Hacer opcional si no siempre se usa
  featuredTextSize?: 'xxl' | 'default';
  description?: string;
}

function UnderlineTab({ 
  defaultActiveKey, 
  onSelect,
  featuredText = "Features", // Valor por defecto
  featuredTextSize = 'default',
  description = "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
}: UnderlineTabProps) {
  return (
    <div className="underline-tab-container">
      <FeaturedText xxl={featuredTextSize === 'xxl'} center>
        {featuredText}
      </FeaturedText>
      <TextSecondary center>
        {description}
      </TextSecondary>
      <Nav 
        variant="underline" 
        defaultActiveKey={defaultActiveKey}
        onSelect={onSelect}
        className="custom-nav-underline"
      >
        <Nav.Item>
          <Nav.Link eventKey="0" className="btn--navbutton">Simple Bookmarking</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" className="btn--navbutton">Speedy Searching</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" className="btn--navbutton">Easy Sharing</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default UnderlineTab;