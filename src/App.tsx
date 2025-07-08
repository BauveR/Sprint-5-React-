import {Button} from './components/atoms/Button';

function App() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Botones con Estilos Predefinidos</h1>
      
      <div className="space-x-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
      
      <div className="mt-6 w-64">
        <Button variant="outlined">Outlined Button</Button>
      </div>
    </div>
  );
}

export default App;