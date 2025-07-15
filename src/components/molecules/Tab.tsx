import Nav from 'react-bootstrap/Nav';
import './Tab.css';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';

interface UnderlineTabProps {
  defaultActiveKey: string;
  featuredText: string;
  featuredTextSize?: 'xxl' | 'default';
  description?: string;
  onSelect?: (eventKey: string | null) => void;
}

function UnderlineTab({ defaultActiveKey, onSelect }: UnderlineTabProps) {
  return (
    <div className="underline-tab-container">
      <FeaturedText className="xxl" left={false}>
        Features
      </FeaturedText>
      <TextSecondary className="center">
      Our aim is to make it quick and easy for your to access your favourite websites. Your bookmarks sync between your devices
      so you call access them on the go.
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