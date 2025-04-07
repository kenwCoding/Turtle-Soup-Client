import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { cn } from "~/lib/utils";
import { layout } from '~/styling';

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
  variant = 'fluid',
  padding = 'medium',
  centered = true,
  className,
  fluid = false,
  size = "default",
  ...props
}) => {
  // Map variant to the appropriate class from our styling system
  let containerClass = '';
  
  if (variant === 'fluid' || fluid) {
    containerClass = layout.containerFluid;
  } else if (variant === 'narrow' || size === 'narrow') {
    containerClass = layout.containerNarrow;
  } else if (variant === 'wide' || size === 'wide') {
    containerClass = layout.containerWide;
  } else if (variant === 'default') {
    containerClass = layout.containerFluid;
  }
  
  // Handle the 'full' variant which doesn't use horizontal padding
  const paddingClass = variant === 'full' ? '' : getPaddingClass(padding);
  
  const containerClasses = classNames(
    {
      // Base container class
      'container': variant === 'default',
      
      // Variant classes
      'w-full': variant === 'fluid' || variant === 'full',
      
      // Centering
      'mx-auto': centered,
    },
    paddingClass,
    className
  );

  return (
    <div 
      className={cn(
        containerClass,
        containerClasses
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

// Helper function to get padding class based on padding prop
function getPaddingClass(padding: ContainerPadding): string {
  switch (padding) {
    case 'none':
      return 'px-0';
    case 'small':
      return 'px-2';
    case 'medium':
      return 'px-4 sm:px-6';
    case 'large':
      return 'px-6 sm:px-8';
    default:
      return 'px-4 sm:px-6';
  }
}

export default Container; 