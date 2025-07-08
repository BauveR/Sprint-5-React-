import React from 'react';
import './BlueShape.css';

interface BlueShapeProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
  align?: 'left' | 'right'; // Nueva prop para alineación
}

const BlueShape: React.FC<BlueShapeProps> = ({
  children,
  height = '400px',
  className = '',
  align = 'left' // Valor por defecto
}) => {
  // Determinar la clase de alineación
  const alignmentClass = align === 'right' ? 'right' : '';
  
  return (
    <div 
      className={`blue-shape-container ${alignmentClass} ${className}`} 
      style={{ height }}
    >
      <div className="blue-shape-background"></div>
      <div className="blue-shape-content">
        {children}
      </div>
    </div>
  );
};

export default BlueShape;