import './FeaturedText.css';

interface FeaturedTextProps {
  children: React.ReactNode;
  center?: boolean;
  white?: boolean;
  xxl?: boolean; 
  left?:boolean;
  className?: string;
  style?: React.CSSProperties;
}

const FeaturedText = ({
  children,
  center = false,
  white = false,
  xxl = false,
  left = false,
  className = '',
  style = {}
}: FeaturedTextProps) => {

  const textClass = [
    'featuredtext',
    center ? 'center' : '',
    white ? 'white' : '',
    xxl ? 'xxl' : '',
    left ? 'left' : '',
    className
  ].filter(Boolean).join(' ').trim();

  return (
    <p className={textClass} style={style}>
      {children}
    </p>
  );
};

export default FeaturedText;