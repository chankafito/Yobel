import React, { useState } from "react";
import { cn } from "../../utils/cn";

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  blur?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  blur = true,
  ...props
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => setDidError(true);
  const handleLoad = () => setLoaded(true);

  const finalSrc = didError ? ERROR_IMG_SRC : src;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Blur placeholder */}
      {blur && !loaded && !didError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        data-original-url={src}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          didError ? "object-contain p-4 bg-gray-100" : "",
          className
        )}
        {...props}
      />
    </div>
  );
}
