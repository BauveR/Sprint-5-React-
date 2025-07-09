import React from 'react';
import { Button } from '../atoms/Button';
import Logo from '../atoms/Logo';
import './Navbar.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined' | 'navbutton';

interface NavItem {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
}

interface NavbarProps {
  logo: {
    src: string;
    alt: string;
    width?: string | number;
  };
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Logo src={logo.src} alt={logo.alt} width={logo.width} />
      </div>
      
      <div className="navbar-buttons-wrapper">
        {navItems.map((item, index) => (
          <Button
            key={`nav-btn-${index}`}
            variant={item.variant || 'ghost'}
            onClick={item.onClick}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;