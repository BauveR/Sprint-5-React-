import './Text.css'; 

interface TextProps {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
  estilo?: React.CSSProperties;
}

const Text = ({
  children,
  center = false,
  className = '',
  estilo = {}
}: TextProps) => {
  const combinedClasses = [
    'text',
    center ? 'center' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <p className={combinedClasses} style={estilo}>
      {children}
    </p>
  );
};

export default Text;