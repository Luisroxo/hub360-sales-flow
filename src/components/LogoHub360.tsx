export const LogoHub360: React.FC<LogoProps> = ({ 
  className = "", 
  width = 800, 
  height = 162 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <style>
          {`
            .logo-text { font-family: 'Arial Black', 'Arial Bold', sans-serif; font-weight: 900; }
            .logo-subtext { font-family: 'Arial', sans-serif; font-weight: 800; }
          `}
        </style>
      </defs>

      {/* ICON GROUP */}
      <g>
        {/* Main Circle Background - Blue Fill, White Stroke */}
        <circle cx="81" cy="81" r="78" fill="#0044CC" stroke="white" strokeWidth="6" />
        
        {/* Three waves - White, thick, with rounded caps */}
        {/* Wave 1 (Top) */}
        <path
          d="M15 75 C 35 55, 127 55, 147 75"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Wave 2 (Middle) */}
         <path
          d="M15 98 C 35 78, 127 78, 147 98"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Wave 3 (Bottom) */}
         <path
          d="M15 121 C 35 101, 127 101, 147 121"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* TEXT GROUP */}
      {/* Main Text: HUB360+ */}
      {/* Blue fill, Thick White Outline */}
      <text
        x="175"
        y="105"
        className="logo-text"
        fontSize="100"
        fill="#0044CC"
        stroke="white"
        strokeWidth="3"
        paintOrder="stroke"
      >
        HUB360+
      </text>

      {/* Subtext: JUNTOS VENDEMOS MAIS */}
      <text
        x="178"
        y="142"
        className="logo-subtext"
        fontSize="24"
        fill="#0044CC"
        letterSpacing="1"
        stroke="white" 
        strokeWidth="2.5" 
        paintOrder="stroke"
      >
        JUNTOS VENDEMOS MAIS
      </text>
    </svg>
  );
};
