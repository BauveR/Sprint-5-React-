import './TextSecondary.css'; 

interface TextSecondaryProps {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
  estilo?: React.CSSProperties;
}

const TextSecondary = ({
  children,
  center = false,
  className = '',
  estilo = {}
}: TextSecondaryProps) => {
  const combinedClasses = [
    'text-secondary',
    center ? 'center' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={combinedClasses} style={estilo}>
      {children}
    </p>
  );
};

export default TextSecondary;