import Footer from '../molecules/Footer';

const FooterContainer = () => {
  return (
    <Footer
      emailSection={{
        secondaryText: "35,000+ ALREADY JOINED",
        textColor: 'white',
        featuredText: "Stay up-to-date with what we're doing",
        placeholder: "tu@email.com",
        buttonText: "Suscribir",
        onSubscribe: (email) => console.log('Email registrado:', email)
      }}
      navigationSection={{
        logo: {
          src: "src/assets/logo-bookmark-white.svg",
          alt: "Logo de la empresa",
          width: "180px"
        },
        navItems: [
          { label: "FEATURES", onClick: () => {} },
          { label: "PRICING", onClick: () => {} },
          { label: "CONTACT", onClick: () => {} }
        ],
        socialIcons: [
          {
            iconSrc: "src/assets/icon-facebook.svg",
            altText: "Facebook",
            url: "https://facebook.com"
          },
          {
            iconSrc: "src/assets/icon-twitter.svg",
            altText: "Twitter",
            url: "https://twitter.com"
          }
        ]
      }}
    />
  );
};

export default FooterContainer;