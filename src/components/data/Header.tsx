import Navbar from '../molecules/Navbar';

function Header() {
  const handleNavClick = (item: string) => {
    console.log(`Navegando a ${item}`);
  };

  const navItems = [
    { 
      label: 'FEATURES', 
      onClick: () => handleNavClick('Features'), 
      variant: 'navbutton' as const
    },
    { 
      label: 'PRICING', 
      onClick: () => handleNavClick('Pricing'), 
      variant: 'navbutton' as const
    },
    { 
      label: 'CONTACT', 
      onClick: () => handleNavClick('Contact'), 
      variant: 'navbutton' as const
    },
    { 
      label: 'LOGIN', 
      onClick: () => handleNavClick('Login'), 
      variant: 'secondary' as const
    }
  ];

  return (
    <div className="app-container">
      <Navbar 
        logo={{
          src: 'src/assets/logo-bookmark.svg',
          alt: 'Bookmark Logo',
          width: '210px'
        }}
        navItems={navItems}
      />
    </div>
  );
}

export default Header;