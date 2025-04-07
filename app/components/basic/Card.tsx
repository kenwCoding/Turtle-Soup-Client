import React, { type ReactNode } from 'react';
import { backgrounds, borders, shadows } from '~/styling';

type CardVariant = 'surface' | 'surfaceAlt' | 'elevated' | 'outlined' | 'flat';

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

/**
 * Card component with multiple variants
 * 
 * @param variant - The card style variant
 *   - surface: Default white/dark background with subtle border and shadow
 *   - surfaceAlt: Light gray/dark gray background with subtle border
 *   - elevated: White/dark background with more pronounced shadow
 *   - outlined: White/dark background with more visible border, no shadow
 *   - flat: White/dark background with no border or shadow
 * 
 * @param padding - The amount of padding inside the card
 *   - none: No padding
 *   - small: p-4
 *   - medium: p-6 (default)
 *   - large: p-8
 */
export function Card({ 
  children, 
  variant = 'surface', 
  className = '',
  padding = 'medium'
}: CardProps) {
  // Base classes that all cards share
  const baseClasses = 'rounded-lg overflow-hidden';
  
  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  // Variant-specific classes
  const variantClasses = {
    surface: `${backgrounds.surface} border ${borders.surface} ${shadows.elevation1}`,
    surfaceAlt: `${backgrounds.surfaceAlt} border ${borders.surface}`,
    elevated: `${backgrounds.surface} border ${borders.surface} ${shadows.elevation3}`,
    outlined: `${backgrounds.surface} border-2 ${borders.surfaceMedium}`,
    flat: backgrounds.surface
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card.Header component for consistent card headers
 */
Card.Header = function CardHeader({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Card.Body component for consistent card content
 */
Card.Body = function CardBody({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

/**
 * Card.Footer component for consistent card footers
 */
Card.Footer = function CardFooter({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <div className={`mt-4 pt-4 border-t ${borders.surface} ${className}`}>
      {children}
    </div>
  );
};

export default Card; 