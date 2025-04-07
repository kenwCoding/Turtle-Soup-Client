import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { backgrounds, textColors, borders } from '~/styling';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonWidth = 'auto' | 'full' | 'fixed';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: ButtonWidth;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  showOutline?: boolean;
  showFocusRing?: boolean;
}

/**
 * Button component with multiple variants, sizes, and states
 * 
 * @param variant - The button style variant
 *   - primary: Main action button (default)
 *   - secondary: Secondary action button
 *   - accent: Accent colored button
 *   - success: Success/confirmation action
 *   - warning: Warning action
 *   - danger: Destructive action
 *   - outline: Outlined button with transparent background
 *   - ghost: Text-only button with no background or border
 * 
 * @param size - The button size
 *   - xs: Extra small
 *   - sm: Small
 *   - md: Medium (default)
 *   - lg: Large
 *   - xl: Extra large
 * 
 * @param width - The button width
 *   - auto: Fits content (default)
 *   - full: Full width of container
 *   - fixed: Fixed width (240px)
 * 
 * @param loading - Whether the button is in loading state
 * @param disabled - Whether the button is disabled
 * @param icon - Optional icon to display
 * @param iconPosition - Position of the icon ('left' or 'right')
 * @param showOutline - Whether to show border outline (only applies to outline variant)
 * @param showFocusRing - Whether to show focus ring when button is focused
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  width = 'auto',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
  showOutline = true,
  showFocusRing = true,
  ...props
}: ButtonProps) {
  // Base classes that all buttons share
  const baseClasses = `flex justify-center items-center rounded font-medium transition-all duration-200 ${showFocusRing ? 'focus:outline-none focus:ring-2 focus:ring-opacity-50' : 'focus:outline-none'}`;
  
  // Size classes
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-xl'
  };
  
  // Width classes
  const widthClasses = {
    auto: 'inline-flex',
    full: 'flex w-full',
    fixed: 'flex w-60'
  };
  
  // Determine outline classes based on showOutline prop
  const outlineVariantClass = showOutline 
    ? `bg-transparent border ${borders.primary} ${textColors.primary} hover:bg-opacity-10 hover:bg-slate-500` 
    : `bg-transparent ${textColors.primary} hover:bg-opacity-10 hover:bg-slate-500`;

  // Variant-specific classes
  const variantClasses = {
    primary: `${backgrounds.primary} ${textColors.onPrimary} hover:opacity-90 ${showFocusRing ? `focus:${borders.focus}` : ''}`,
    secondary: `${backgrounds.secondary} ${textColors.onSecondary} hover:opacity-90 ${showFocusRing ? `focus:${borders.focus}` : ''}`,
    accent: `${backgrounds.accent} ${textColors.onAccent} hover:opacity-90 ${showFocusRing ? `focus:${borders.focus}` : ''}`,
    success: `${backgrounds.success} ${textColors.onSuccess} hover:opacity-90 ${showFocusRing ? `focus:${borders.focus}` : ''}`,
    warning: `${backgrounds.warning} ${textColors.onWarning} hover:opacity-90 ${showFocusRing ? `focus:${borders.focus}` : ''}`,
    danger: `${backgrounds.danger} ${textColors.onDanger} hover:opacity-90 ${showFocusRing ? `focus:${borders.focus}` : ''}`,
    outline: outlineVariantClass + (showFocusRing ? ` focus:${borders.focus}` : ''),
    ghost: `bg-transparent ${textColors.primary} hover:bg-slate-100 dark:hover:bg-slate-800 ${showFocusRing ? `focus:${borders.focus}` : ''}`
  };
  
  // Disabled state overrides variant styling
  const disabledClasses = `${backgrounds.disabled} ${textColors.onPrimary} cursor-not-allowed`;
  
  // Loading state adds opacity
  const loadingClasses = 'opacity-80 cursor-wait';
  
  // Determine final classes based on props
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${widthClasses[width]}
    ${disabled ? disabledClasses : variantClasses[variant]}
    ${loading ? loadingClasses : ''}
    ${className}
  `;

  // Determine content based on loading state
  const buttonContent = (
    <span className='flex justify-between items-center gap-2'>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading
        ? <span className="flex justify-between items-center">{icon}</span>
        : null
      }
      {children
        ? <span>{children}</span>
        : null
      }
      {icon && iconPosition === 'right'
        ? <span className="flex justify-between items-center">{icon}</span>
        : null
      }
    </span>
  );
  
  return (
    <button 
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </button>
  );
}

export default Button; 