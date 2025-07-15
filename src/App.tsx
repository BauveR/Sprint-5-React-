// src/App.tsx
import Header from './components/data/Header';
import Hero from './components/data/Hero';
import Cards from './components/data/Cards';
import TabCarouselContainer from './components/molecules/TabCarouselContainer';
import AccordionContainer from './components/data/AcordionContainer';
import FooterContainer from './components/data/FooterContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TabCarouselContainer/>
      <Cards/>
      <AccordionContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;