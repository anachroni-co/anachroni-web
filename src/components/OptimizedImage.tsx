import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = 'lazy'
}) => {
  const [imageSrc, setImageSrc] = useState<string>(priority ? src : '');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    } else {
      setImageLoaded(true);
    }
  }, [src, priority]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      style={{
        opacity: imageLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      onLoad={() => setImageLoaded(true)}
    />
  );
};

export default OptimizedImage;
