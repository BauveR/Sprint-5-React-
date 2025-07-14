import Nav from 'react-bootstrap/Nav'
import './Tab.css'


function UnderlineTab() {
    return (
      <Nav variant="underline" defaultActiveKey="/home" className="custom-nav-underline">
         <Nav.Item>
          <Nav.Link eventKey="link-1" className="btn--navbutton">Simple Bookmarking</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="btn--navbutton">Speedy Searching</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="btn--navbutton">Easy Sharing</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

export default UnderlineTab;