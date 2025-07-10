import './FeaturedText.css';

interface FeaturedTextProps {
  children: React.ReactNode;
  center?: boolean;
  white?: boolean;
  xxl?: boolean; // Prop específica para tamaño xxl
  className?: string;
  style?: React.CSSProperties;
}

const FeaturedText = ({
  children,
  center = false,
  white = false,
  xxl = false,
  className = '',
  style = {}
}: FeaturedTextProps) => {
  /**
   * Genera las clases CSS basadas en las props
   * - featuredtext: Clase base siempre presente
   * - center: Aplica text-align: center
   * - white: Aplica color blanco y tamaño lg
   * - xxl: Aplica tamaño lg y margen reducido
   * - className: Clases adicionales personalizadas
   */
  const textClass = [
    'featuredtext',
    center ? 'center' : '',
    white ? 'white' : '',
    xxl ? 'xxl' : '',
    className
  ].filter(Boolean).join(' ').trim();

  return (
    <p className={textClass} style={style}>
      {children}
    </p>
  );
};

export default FeaturedText;