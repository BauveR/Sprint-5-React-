import './TextSecondary.css'; 

interface TextSecondaryProps {
  children: React.ReactNode;
  center?: boolean;
  white?: boolean;
  className?: string;
  estilo?: React.CSSProperties;
}

const TextSecondary = ({
  children,
  center = false,
  white = false,
  className = '',
  estilo = {}
}: TextSecondaryProps) => {
  const combinedClasses = [
    'text-secondary',
    center ? 'center' : '',
    white ? 'white' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={combinedClasses} style={estilo}>
      {children}
    </p>
  );
};

export default TextSecondary; 