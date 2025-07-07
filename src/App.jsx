import { Button } from "./components/atoms/Button";


function App() {
  return (
    <div className="space-y-4 p-6 bg-gray-900 min-h-screen">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
