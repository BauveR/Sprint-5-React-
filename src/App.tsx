import Header from './components/plantillas/header';
import Hero from './components/plantillas/Hero';
import Cards from './components/plantillas/Cards';
import Footer from './components/molecules/footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards/>
      <Footer
        emailSection={{
          
          secondaryText: "Recibe las últimas actualizaciones directamente en tu correo",
          featuredText: "Stay up-to-date with what we're doing",
          placeholder: "tu@email.com",
          buttonText: "Suscribir",
          onSubscribe: (email) => console.log('Email registrado:', email)
        }}
        navigationSection={{
          logo: {
            src: "/logo-white.svg",
            alt: "Logo de la empresa",
            width: "180px"
          },
          navItems: [
            { label: "Inicio", onClick: () => {} },
            { label: "Productos", onClick: () => {}, variant: "ghost" },
            { label: "Contacto", onClick: () => {} }
          ]
        }}
      />
      
    </div>
  );
}

export default App;