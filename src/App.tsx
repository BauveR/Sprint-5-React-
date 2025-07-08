import {Button} from './components/atoms/Button';
import FeaturedText from './components/atoms/FeaturedText';
import Text from './components/atoms/Text';
import BlueShape from './components/atoms/BlueShape';

function App() {
  return (
    <div className="p-8 space-y-4">
      <Text center> Botones con Estilos Predefinidos</Text>
      
      <div className="space-x-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
      
      <div className="mt-6 w-64">
        <Button variant="outlined">Outlined Button</Button>

        <div>
        <Text>
        Este texto debería estar alineado a la izquierda
      </Text>
      
      <Text center>
        Este texto debería estar centrado
      </Text>
      
      <FeaturedText>A Simple Bookmark Manager</FeaturedText>

      <FeaturedText center>
        Texto destacado centrado
      </FeaturedText>

      <div>
      {/* Versión izquierda (por defecto) */}
      <BlueShape height="300px">
      <div style={{ maxWidth: '80%' }}>
        <img 
      src="/src/assets/illustration-features-tab-1.svg" 
      alt="Descripción de la imagen"
      style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    />
        </div>
      </BlueShape>


      {/* Versión derecha con contenido alineado */}
      <BlueShape align="right" height="400px">
        <div style={{ maxWidth: '80%' }}>
        <img 
      src="/src/assets/illustration-features-tab-1.svg" 
      alt="Descripción de la imagen"
      style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    />
        </div>
      </BlueShape>
    </div>
      
      
      

      
      
    </div>
      </div>
    </div>
  );
}

export default App;