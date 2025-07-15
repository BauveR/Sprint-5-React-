
import Header from './components/plantillas/Header';
import Hero from './components/plantillas/Hero';
import Cards from './components/plantillas/Cards';
import Footer from './components/molecules/Footer';
import Acordion from './components/plantillas/Acordion';

import 'bootstrap/dist/css/bootstrap.min.css';
import  TabCarouselContainer  from './components/molecules/TabCarouselContainer';



function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TabCarouselContainer/>
      <Cards/>
      
      <Acordion
        featuredText="Frequently Asked Questions"
        featuredTextSize="xxl"
        description="Here are some of our FAOs. If vou have anv other questions.
                    you'd like answered please feel free to email us."
        buttonText="More info"
        onButtonClick={() => console.log('Botón clickeado')}
      />
  
  <Footer
  emailSection={{
    secondaryText: "35 OOO+ ALREADY JOINED",
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

      
    </div>
  );
}

export default App;