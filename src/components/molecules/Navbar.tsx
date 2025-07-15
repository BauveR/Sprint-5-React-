import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { BurgerButton } from '../atoms/BurguerButton';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Logo src={logo.src} alt={logo.alt} width={logo.width} />
        </div>

        <div className="desktop-menu">
          {navItems.map((item, index) => (
            <Button key={`nav-btn-${index}`} variant={item.variant || 'ghost'} onClick={item.onClick}>
              {item.label}
            </Button>
          ))}
        </div>

        <BurgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {/* Menú móvil */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <Button
            key={`mobile-nav-btn-${index}`}
            variant={item.variant || 'ghost'}
            onClick={() => {
              item.onClick();
              setIsMenuOpen(false);
            }}
            className="mobile-menu-item"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;