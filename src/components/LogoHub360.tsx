
interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}


export const LogoHub360: React.FC<LogoProps> = ({ 
  className = "", 
  width, 
  height 
}) => {
  return (
    <img
      src="/logo-hub360-v7.png"
      alt="HUB360+ Logo"
      className={className}
      width={typeof width === 'string' ? undefined : width}
      height={typeof height === 'string' ? undefined : height}
      style={{
        objectFit: 'contain'
      }}
    />
  );
};
