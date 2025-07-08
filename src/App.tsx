import {Button} from './components/atoms/Button';
import FeaturedText from './components/atoms/FeaturedText';
import Text from './components/atoms/Text';

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
      
      
      

      
      
    </div>
      </div>
    </div>
  );
}

export default App;