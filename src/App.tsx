import Header from './components/plantillas/header';
import Hero from './components/plantillas/Hero';
import Card from './components/molecules/Card';

function App() {
  return (
    <div>
      <Header />
      <Hero />

      <Card
  imageSrc="src/assets/logo-firefox.svg"
  imageAlt="Download on Firefox"
  featuredText="Add to Chrome"
  description="Minimum version 62"
  svgIconSrc="src/assets/bg-dots.svg"
  buttonText="Add & Install Extension"
  onButtonClick={() => console.log('Install clicked')}
/>
      
    </div>
  );
}

export default App;