import React from 'react';
import { cn } from '~/lib/utils';

// Define the common props that all typography components will accept
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

// Export these types to fix the import errors
export type TypographyColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit';
export type { TypographyProps };
export type { TypographyVariant };

// Heading components
export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("text-4xl font-bold tracking-tight", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-3xl font-bold tracking-tight", className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn("text-2xl font-bold tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4 className={cn("text-xl font-bold tracking-tight", className)} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className, ...props }: TypographyProps) {
  return (
    <h5 className={cn("text-lg font-bold tracking-tight", className)} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, className, ...props }: TypographyProps) {
  return (
    <h6 className={cn("text-base font-bold tracking-tight", className)} {...props}>
      {children}
    </h6>
  );
}

// Paragraph component
export function P({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-base leading-7", className)} {...props}>
      {children}
    </p>
  );
}

// Span component
export function Span({ children, className, ...props }: TypographyProps) {
  return (
    <span className={cn("", className)} {...props}>
      {children}
    </span>
  );
}

// For backward compatibility, maintain the Typography component
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';

interface TypographyComponentProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;  // Make variant optional
  children: React.ReactNode;
  className?: string;
}

export function Typography({ variant, children, className, ...props }: TypographyComponentProps) {
  switch (variant) {
    case 'h1':
      return <H1 className={className} {...props}>{children}</H1>;
    case 'h2':
      return <H2 className={className} {...props}>{children}</H2>;
    case 'h3':
      return <H3 className={className} {...props}>{children}</H3>;
    case 'h4':
      return <H4 className={className} {...props}>{children}</H4>;
    case 'h5':
      return <H5 className={className} {...props}>{children}</H5>;
    case 'h6':
      return <H6 className={className} {...props}>{children}</H6>;
    case 'body1':
      return <P className={className} {...props}>{children}</P>;
    case 'body2':
      return <p className={cn("text-sm leading-6", className)} {...props}>{children}</p>;
    case 'caption':
      return <span className={cn("text-xs text-gray-500", className)} {...props}>{children}</span>;
    default:
      return <p className={cn("text-base leading-7", className)} {...props}>{children}</p>;
  }
} 