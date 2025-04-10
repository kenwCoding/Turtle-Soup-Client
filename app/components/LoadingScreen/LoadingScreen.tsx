import React, { useState, useEffect, Suspense, useRef } from 'react';
import { 
  backgrounds, 
  textColors 
} from '~/styling';
import turtleLogo from '~/assets/images/logo-app-turtle.png';
import { H5 } from '../basic';

// Types for LoadingScreen props
interface LoadingScreenProps {
  text?: string;
  icon?: React.ReactNode;
  color?: string;
  interactive?: boolean;
  spinnerSize?: 'sm' | 'md' | 'lg';
  showProgressBar?: boolean;
}

// Types for LoadingSuspense props
interface LoadingSuspenseProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback: React.ReactNode;
}

/**
 * LoadingScreen - A customizable full-page loading screen
 * 
 * Provides a visually appealing loading experience with customization options
 * and optional interactive elements to engage users during loading.
 */
export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  text = 'Loading...',
  icon,
  color = '#3B82F6', // Tailwind blue-500
  interactive = true,
  spinnerSize = 'sm',
  showProgressBar = false,
}) => {
  // State for the fake progress bar
  const [progress, setProgress] = useState(0);
  
  // State for turtle rotation and hover effect
  const [centerRotation, setCenterRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [textScale, setTextScale] = useState(1);
  
  // Reference to the container for getting dimensions
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate fake progress for the progress bar
  useEffect(() => {
    if (!showProgressBar) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15;
        const newProgress = prev + increment;
        // Slow down as we approach 100%
        return newProgress > 90 ? 90 + (newProgress - 90) * 0.1 : newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [showProgressBar]);

  // Create continuous rotation animation for turtle
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setCenterRotation(prev => (prev + (isHovered ? 10 : 1)) % 720);
    }, 50);
    
    return () => clearInterval(rotateInterval);
  }, [isHovered]);

  // Animate loading text
  useEffect(() => {
    const textAnimation = setInterval(() => {
      setTextScale(prev => {
        const newScale = prev === 1 ? 1.03 : 1;
        return newScale;
      });
    }, 2000);
    
    return () => clearInterval(textAnimation);
  }, []);
  
  // Determine spinner/logo size
  const getSize = () => {
    const baseSize = {
      'sm': 'w-16 h-16',
      'md': 'w-24 h-24',
      'lg': 'w-32 h-32'
    };
    const sizes = ['sm', 'md', 'lg'];
    const indexOfSize = sizes.indexOf(spinnerSize);

    // Return larger size if hovered and interactive
    return isHovered && interactive 
      ? baseSize[sizes[Math.max(indexOfSize + 1, sizes.length - 1)] as keyof typeof baseSize]
      : baseSize[spinnerSize as keyof typeof baseSize];
  };

  // Handle turtle hover state
  const handleMouseEnter = () => {
    if (interactive) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Touch event support for mobile
  const handleTouchStart = () => {
    if (interactive) {
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 flex flex-col items-center justify-center ${backgrounds.accent} z-50`}
    >
      {/* Bubbles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
      </div>
      
      <div className="flex flex-col items-center relative z-10">
        {/* Rotating turtle in the center */}
        <div className="transition-opacity duration-300">
          {/* Logo or custom icon */}
          {icon ? (
            <div>{icon}</div>
          ) : (
            <div 
              className={`mb-8 transition-all duration-300 cursor-pointer`}
              style={{ 
                transform: `rotate(${centerRotation - 360}deg)`,
                transition: `transform 0.05s linear, scale 0.3s ease-out`
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={turtleLogo}
                alt="Terry the Turtle" 
                className={`${getSize()} object-contain mx-auto`}
                style={{ 
                  transition: 'width 0.3s ease, height 0.3s ease'
                }}
              />
            </div>
          )}
          
          {/* Loading text */}
          <H5
            className={`mt-4 text-center text-white/80 animate-pulse-slow tracking-wider`}
            style={{
              transform: `scale(${textScale})`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {isHovered ? "Whee!" : text}
          </H5>

          {/* Progress bar (optional) */}
          {showProgressBar && (
            <div className="w-64 h-2 mt-6 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${Math.min(progress, 100)}%`,
                  backgroundColor: color
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * LoadingSuspense - A wrapper component for React Suspense
 * 
 * Provides a clean way to handle loading states by displaying a fallback component
 * while the children components are loading.
 */
export const LoadingSuspense: React.FC<LoadingSuspenseProps> = ({ isLoading, children, fallback }) => {
  return (
    isLoading ? fallback : children
  );
};

export default LoadingScreen;
