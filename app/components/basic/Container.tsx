import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { cn } from "~/lib/utils";

export type ContainerVariant = 'default' | 'fluid' | 'narrow' | 'wide' | 'full';
export type ContainerPadding = 'none' | 'small' | 'medium' | 'large';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content to be rendered inside the container
   */
  children: ReactNode;
  
  /**
   * Container variant that controls the max-width behavior
   * - default: Uses the standard responsive container widths
   * - fluid: Uses 100% width with padding
   * - narrow: Uses smaller max-widths at each breakpoint
   * - wide: Uses larger max-widths at each breakpoint
   * - full: Uses 100% width without horizontal padding
   */
  variant?: ContainerVariant;
  
  /**
   * Controls the horizontal padding of the container
   */
  padding?: ContainerPadding;
  
  /**
   * Centers the container horizontally
   */
  centered?: boolean;
  
  /**
   * Additional CSS class names
   */
  className?: string;

  fluid?: boolean;
  size?: "default" | "narrow" | "wide";
}

/**
 * Container component that provides consistent width constraints and padding
 * following the design system's responsive behavior.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  centered = true,
  className,
  fluid = false,
  size = "default",
  ...props
}) => {
  const baseStyles = fluid 
    ? "w-full px-4 sm:px-6 lg:px-8" 
    : "container mx-auto px-4 sm:px-6 lg:px-8";
  
  const sizeStyles = {
    default: "",
    narrow: "max-w-3xl",
    wide: "max-w-7xl"
  };

  const containerClasses = classNames(
    {
      // Base container class
      'container': variant === 'default',
      
      // Variant classes
      'w-full': variant === 'fluid' || variant === 'full',
      'container-narrow': variant === 'narrow',
      'container-wide': variant === 'wide',
      
      // Padding classes
      'px-0': padding === 'none',
      'px-2': padding === 'small',
      'px-4': padding === 'medium',
      'px-6': padding === 'large',
      
      // Centering
      'mx-auto': centered,
    },
    className
  );

  return (
    <div className={cn(baseStyles, sizeStyles[size], containerClasses)} {...props}>
      {children}
    </div>
  );
};

export default Container; 