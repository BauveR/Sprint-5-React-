import './FeaturedText.css';

interface FeaturedTextProps {
  children: React.ReactNode;
  center?: boolean; // Nueva prop para centrado
  className?: string;
  estilo?: React.CSSProperties;
}

const FeaturedText = ({
  children,
  center = false, // Valor por defecto false
  className = '',
  estilo = {}
}: FeaturedTextProps) => {
  // Combina las clases condicionalmente
  const textClass = `featuredtext ${center ? 'center' : ''} ${className}`.trim();

  return (
    <p className={textClass} style={estilo}>
      {children}
    </p>
  );
};

export default FeaturedText;