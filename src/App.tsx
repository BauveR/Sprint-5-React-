
import TwoColumns from './components/molecules/TwoColumns';
import Header from './components/plantillas/header';

function App() {
  return (
    <div>
      <Header />
      <TwoColumns
          title={
            <>
              A Simple Bookmark<br />Manager
            </>
          }
        description={<>A clean and simple Interface to organize your favourite<br />
        websites. Open a new browser tab and see your sites load<br />
        instantly. Try it for free.</>}
        
        imageUrl="src/assets/illustration-hero.svg"
        primaryButtonText="Get it on Chrome"
        ghostButtonText="Get it on Firefox"
        onPrimaryClick={() => console.log('Primary clicked')}
        onGhostClick={() => console.log('Ghost clicked')}
      />
    </div>
  );
}

export default App;