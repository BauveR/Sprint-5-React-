import Counter from "./components /atoms/Counter.jsx";
import Text from "./components /atoms/Text2.jsx";



export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ¡Hola Tailwind + React!
      </h1>
      <Counter />
      <Text />
     
      
    </div>
  );
}
