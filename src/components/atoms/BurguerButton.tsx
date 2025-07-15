import React from 'react';
import './BurguerButton.css';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`burger-button ${isOpen ? 'open' : ''}`}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="burger-lines">
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </div>
    </button>
  );
};