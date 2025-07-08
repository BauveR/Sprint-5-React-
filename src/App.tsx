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
        <h2>Forma izquierda</h2>
        <p>Bordes redondeados en el lado izquierdo</p>
      </BlueShape>

      {/* Versión derecha */}
      <BlueShape align="right" height="350px" className="custom-class">
        <h2>Forma derecha</h2>
        <p>Bordes redondeados en el lado derecho</p>
      </BlueShape>

      {/* Versión derecha con contenido alineado */}
      <BlueShape align="right" height="400px">
        <div style={{ maxWidth: '80%' }}>
          <h3>Contenido destacado</h3>
          <p>Texto alineado a la derecha con forma en ese lado</p>
        </div>
      </BlueShape>
    </div>
      
      
      

      
      
    </div>
      </div>
    </div>
  );
}

export default App;