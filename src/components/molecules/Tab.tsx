import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Tab.css';

interface UnderlineTabProps {
  defaultActiveKey: string;
  onSelect?: (eventKey: string | null) => void;
}

function UnderlineTab({ defaultActiveKey, onSelect }: UnderlineTabProps) {
  return (
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
  );
}

export default UnderlineTab;