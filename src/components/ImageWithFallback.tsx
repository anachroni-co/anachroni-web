import React, { useState, useCallback, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  fallbackText?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  fallbackText,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
    console.warn(`Failed to load image: ${src}`);
  }, [onError, src]);

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setImageSrc(src);
  }, [src]);

  // Generar SVG de fallback
  const generateFallbackSvg = () => {
    const w = typeof width === 'number' ? width : 400;
    const h = typeof height === 'number' ? height : 400;
    const text = fallbackText || alt || 'Image';
    
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" rx="8"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" dominant-baseline="middle">
          ${text}
        </text>
      </svg>
    `)}`;
  };

  if (hasError) {
    return (
      <img
        src={generateFallbackSvg()}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
      />
    );
  }

  return (
    <>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className={`flex justify-center items-center bg-gray-800 animate-pulse ${className}`}
          style={{ width, height }}
        >
          <div className="text-sm text-gray-400">Loading...</div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={!isLoaded ? { position: 'absolute', visibility: 'hidden' } : {}}
      />
    </>
  );
};

export default ImageWithFallback;