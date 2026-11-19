import React from 'react';

interface CapibaraPlaceholderProps {
  variant: '1b' | '3b' | '9b';
  className?: string;
}

const CapibaraPlaceholder: React.FC<CapibaraPlaceholderProps> = ({ variant = '3b', className = '' }) => {
  const variants = {
    '1b': {
      background: 'from-black via-gray-900 to-red-900',
      accent: '#FF0000',
      title: '1B',
      subtitle: 'EMBEDDED',
      slogan: 'REVOLUCIÓN TECNOLÓGICA',
      noise: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+'
    },
    '3b': {
      background: 'from-black via-gray-800 to-gray-700',
      accent: '#FFFFFF',
      title: '3B',
      subtitle: 'BALANCED',
      slogan: 'PODER AL PROCESAMIENTO',
      noise: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjUiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg=='
    },
    '9b': {
      background: 'from-red-950 via-black to-gray-900',
      accent: '#FF0000',
      title: '9B',
      subtitle: 'ADVANCED',
      slogan: 'VANGUARDIA DIGITAL',
      noise: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjEwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg=='
    }
  };

  const config = variants[variant] || variants['3b'];

  return (
    <div className={`relative overflow-hidden rounded-none ${className}`}>
      {/* Fondo crudo y gastado */}
      <div className={`w-full h-full bg-gradient-to-br ${config.background} relative`}>
        
        {/* Textura de fotocopia */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url("${config.noise}")`,
            backgroundSize: '100px 100px',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        {/* Líneas de escaneo ásperas */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            )`
          }}></div>
        </div>

        {/* Manchas y deterioro */}
        <div className="absolute inset-0">
          <div className="absolute top-2 left-4 w-8 h-2 bg-black/40 transform rotate-12 blur-sm"></div>
          <div className="absolute top-16 right-8 w-4 h-6 bg-black/30 transform -rotate-45 blur-sm"></div>
          <div className="absolute bottom-8 left-12 w-6 h-3 bg-black/35 transform rotate-45 blur-sm"></div>
        </div>

        <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
          
          {/* Banner superior xerográfico */}
          <div className="w-full text-center mb-4">
            <div 
              className="text-sm font-black tracking-[0.2em] text-white transform rotate-1"
              style={{
                fontFamily: 'Courier New, monospace',
                textShadow: '2px 2px 0px rgba(0,0,0,1)',
                background: 'rgba(0,0,0,0.8)',
                padding: '6px 20px',
                display: 'inline-block',
                border: `2px solid ${config.accent}`,
                clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)'
              }}
            >
              ★ {config.slogan} ★
            </div>
          </div>

          {/* Capibara mejorado - más detallado y realista */}
          <div className="relative mb-4">
            <svg 
              viewBox="0 0 200 150" 
              className="w-52 h-40 relative z-10"
              fill="none"
              style={{
                filter: 'contrast(150%) brightness(1.0)',
                imageRendering: 'auto'
              }}
            >
              {/* Sombra más definida */}
              <ellipse cx="100" cy="140" rx="35" ry="6" fill="rgba(0,0,0,0.4)" />
              
              {/* Cuerpo principal del capibara */}
              <path 
                d="M 40 90 Q 35 70 45 50 Q 60 30 100 30 Q 140 30 155 50 Q 165 70 160 90 Q 165 110 155 125 Q 140 140 120 135 Q 100 130 80 135 Q 60 140 45 125 Q 35 110 40 90 Z" 
                fill={config.accent === '#FFFFFF' ? '#8B4513' : '#654321'}
                stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent}
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity="0.9"
              />
              
              {/* Orejas más detalladas */}
              <path 
                d="M 70 40 Q 65 25 75 20 Q 85 25 80 40 Q 75 45 70 40" 
                fill={config.accent === '#FFFFFF' ? '#A0522D' : '#8B4513'}
                stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path 
                d="M 120 40 Q 115 25 125 20 Q 135 25 130 40 Q 125 45 120 40" 
                fill={config.accent === '#FFFFFF' ? '#A0522D' : '#8B4513'}
                stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              
              {/* Ojos más expresivos */}
              <circle cx="85" cy="65" r="8" fill="black" />
              <circle cx="115" cy="65" r="8" fill="black" />
              <circle cx="87" cy="63" r="3" fill="white" />
              <circle cx="117" cy="63" r="3" fill="white" />
              
              {/* Hocico más detallado */}
              <ellipse cx="100" cy="85" rx="12" ry="8" fill={config.accent === '#FFFFFF' ? '#D2691E' : '#CD853F'} />
              
              {/* Fosas nasales */}
              <ellipse cx="96" cy="82" rx="2" ry="3" fill="black" />
              <ellipse cx="104" cy="82" rx="2" ry="3" fill="black" />
              
              {/* Boca */}
              <path 
                d="M 92 90 Q 100 95 108 90" 
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Patas frontales */}
              <rect x="75" y="125" width="8" height="15" rx="4" fill={config.accent === '#FFFFFF' ? '#8B4513' : '#654321'} />
              <rect x="117" y="125" width="8" height="15" rx="4" fill={config.accent === '#FFFFFF' ? '#8B4513' : '#654321'} />
              
              {/* Detalles de pelaje */}
              <path d="M 60 70 Q 65 68 70 70" stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent} strokeWidth="1" fill="none" opacity="0.6" />
              <path d="M 130 70 Q 135 68 140 70" stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent} strokeWidth="1" fill="none" opacity="0.6" />
              <path d="M 85 105 Q 90 103 95 105" stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent} strokeWidth="1" fill="none" opacity="0.6" />
              <path d="M 105 105 Q 110 103 115 105" stroke={config.accent === '#FFFFFF' ? '#5D4037' : config.accent} strokeWidth="1" fill="none" opacity="0.6" />
              
              {/* Elementos tech mejorados */}
              <g opacity="0.8">
                <rect x="170" y="45" width="8" height="8" fill={config.accent} stroke="black" strokeWidth="1" />
                <circle cx="174" cy="65" r="3" fill={config.accent} />
                <path d="M 165 75 L 175 75 M 170 70 L 170 80" stroke={config.accent} strokeWidth="2" />
                <rect x="172" y="85" width="4" height="4" fill={config.accent} opacity="0.7" />
              </g>
              
              {/* Circuitos decorativos */}
              <g opacity="0.5">
                <path d="M 20 60 L 30 60 L 30 70 L 25 70" stroke={config.accent} strokeWidth="1" fill="none" />
                <circle cx="25" cy="65" r="1" fill={config.accent} />
                <path d="M 20 100 L 35 100 L 35 110" stroke={config.accent} strokeWidth="1" fill="none" />
              </g>
            </svg>
          </div>
          
          {/* Tipografía xerográfica cruda */}
          <div className="text-center relative w-full">
            {/* Título con efectos de fotocopia */}
            <div 
              className="text-6xl font-black mb-2 transform rotate-1"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                color: config.accent,
                textShadow: `
                  4px 4px 0px rgba(0,0,0,1),
                  2px 2px 0px rgba(0,0,0,1),
                  -1px -1px 0px rgba(0,0,0,1)
                `,
                WebkitTextStroke: '1px black',
                letterSpacing: '0.1em'
              }}
            >
              CAPIBARA
            </div>
            
            {/* Número con distorsión */}
            <div 
              className="text-8xl font-black mb-2 transform -rotate-2"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                color: config.accent === '#FFFFFF' ? '#000000' : '#FFFFFF',
                textShadow: `
                  6px 6px 0px ${config.accent},
                  3px 3px 0px rgba(0,0,0,1)
                `,
                WebkitTextStroke: '2px black',
                filter: 'contrast(200%)'
              }}
            >
              {config.title}
            </div>
            
            {/* Subtitle con marco xerográfico */}
            <div 
              className="text-lg font-black tracking-[0.4em] transform rotate-1"
              style={{
                fontFamily: 'Courier New, monospace',
                color: 'white',
                textShadow: '3px 3px 0px rgba(0,0,0,1)',
                background: 'rgba(0,0,0,0.9)',
                border: `3px solid ${config.accent}`,
                padding: '8px 16px',
                display: 'inline-block',
                clipPath: 'polygon(2% 0, 100% 0, 98% 100%, 0% 100%)'
              }}
            >
              [{config.subtitle}]
            </div>
          </div>

          {/* Banner inferior distorsionado */}
          <div className="w-full mt-6">
            <div 
              className="text-center py-3 transform -rotate-1"
              style={{
                background: `repeating-linear-gradient(45deg, ${config.accent}, ${config.accent} 10px, black 10px, black 20px)`,
                clipPath: 'polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)'
              }}
            >
              <div 
                className="text-sm font-black text-black transform rotate-1"
                style={{ 
                  fontFamily: 'Courier New, monospace',
                  mixBlendMode: 'difference',
                  color: 'white'
                }}
              >
                ▲ REVOLUCIÓN DIGITAL ▲
              </div>
            </div>
          </div>
        </div>

        {/* Efectos de degradación */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Rasgaduras */}
          <div className="absolute top-0 left-1/4 w-1 h-20 bg-black transform rotate-12"></div>
          <div className="absolute bottom-0 right-1/3 w-1 h-16 bg-black transform -rotate-12"></div>
          
          {/* Bordes quemados */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default CapibaraPlaceholder;

// Ejemplo de uso
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <CapibaraPlaceholder variant="3b" className="w-80 h-96" />
    </div>
  );
};