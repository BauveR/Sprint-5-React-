import React from 'react';
import { Button } from '../atoms/Button';
import Logo from '../atoms/Logo';
import FeaturedText from '../atoms/FeaturedText';
import TextSecondary from '../atoms/TextSecondary';
import './Footer.css';

interface FooterProps {
  emailSection: {
    featuredText: string;
    textVariant?: 'white' | 'center';
    secondaryText: string;
    textColor?: 'white' | 'default';
    placeholder: string;
    buttonText: string;
    onSubscribe: (email: string) => void;
  };
  navigationSection: {
    logo: {
      src: string;
      alt: string;
      width?: string | number;
    };
    navItems: Array<{
      label: string;
      onClick: () => void;
      variant?: 'primary' | 'secondary' | 'ghost' | 'outlined' | 'navbutton'| 'footer';
    }>;
  };
}

const Footer: React.FC<FooterProps> = ({ emailSection, navigationSection }) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailSection.onSubscribe(email);
    setEmail('');
  };

  return (
    <>
      {}
      <section className="footer-top-section">
        <div className="footer-email-content">
         
        <TextSecondary center white={emailSection.textColor === 'white'}>
  {emailSection.secondaryText}
</TextSecondary>
          <FeaturedText 
            center 
            white 
          >
            {emailSection.featuredText}
          </FeaturedText>
          
          <form onSubmit={handleSubmit} className="footer-email-form">
            <input
              type="email"
              placeholder={emailSection.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer-email-input"
            />
            <Button variant="secondary" type="submit">
              {emailSection.buttonText}
            </Button>
          </form>
        </div>
      </section>
      {}
<footer className="footer-bottom-section">
  <div className="footer-nav-content">
    <div className="footer-logo">
      <Logo 
        src={navigationSection.logo.src} 
        alt={navigationSection.logo.alt} 
        width={navigationSection.logo.width} 
      />
    </div>
    
    <div className="footer-nav-buttons">
      {navigationSection.navItems.map((item, index) => (
        <Button
          key={`footer-nav-${index}`}
          variant={item.variant || 'footer'}
          onClick={item.onClick}
        >
          {item.label}
        </Button>
      ))}
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;