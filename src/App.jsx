import Button from "./components /atoms/Button.jsx";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ¡Hola Tailwind + React!
      </h1>
      <Button onClick={() => alert("Botón clicado")}>Haz clic aquí</Button>
    </div>
  );
}
