import React from 'react';
import { cn } from '~/lib/utils';
import { typography, textColors } from '~/styling';

// Define the common props that all typography components will accept
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof textColors | string;
}

// Export these types to fix the import errors
export type TypographyColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit';
export type { TypographyProps };

// Heading components
export const H1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <h1 className={cn(typography.heading1, colorClass, className)} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <h2 className={cn(typography.heading2, colorClass, className)} {...props}>
      {children}
    </h2>
  );
};

export const H3: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <h3 className={cn(typography.heading3, colorClass, className)} {...props}>
      {children}
    </h3>
  );
};

export const H4: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <h4 className={cn(typography.heading4, colorClass, className)} {...props}>
      {children}
    </h4>
  );
};

export const H5: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <h5 className={cn(typography.heading5, colorClass, className)} {...props}>
      {children}
    </h5>
  );
};

export const H6: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <h6 className={cn(typography.heading5, colorClass, className)} {...props}>
      {children}
    </h6>
  );
};

// Body text components
export const Body1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <p className={cn(typography.body1, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

export const Body2: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <p className={cn(typography.body2, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

export const Body3: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <p className={cn(typography.body3, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

// Label components
export const Label1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <p className={cn(typography.label1, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

export const Label2: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <p className={cn(typography.label2, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

// Code component
export const Code1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  return (
    <code className={cn(typography.code1, colorClass, className)} {...props}>
      {children}
    </code>
  );
};

// Generic Typography component that can render any variant
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'body3' | 'label1' | 'label2' | 'code1' | 'caption';

export default function Typography({ 
  variant = 'body1', 
  children, 
  className = '',
  color = 'onSurface',
  ...props 
}: { 
  variant?: TypographyVariant 
} & TypographyProps) {
  switch (variant) {
    case 'h1':
      return <H1 className={className} color={color} {...props}>{children}</H1>;
    case 'h2':
      return <H2 className={className} color={color} {...props}>{children}</H2>;
    case 'h3':
      return <H3 className={className} color={color} {...props}>{children}</H3>;
    case 'h4':
      return <H4 className={className} color={color} {...props}>{children}</H4>;
    case 'h5':
      return <H5 className={className} color={color} {...props}>{children}</H5>;
    case 'h6':
      return <H6 className={className} color={color} {...props}>{children}</H6>;
    case 'body1':
      return <Body1 className={className} color={color} {...props}>{children}</Body1>;
    case 'body2':
      return <Body2 className={className} color={color} {...props}>{children}</Body2>;
    case 'body3':
      return <Body3 className={className} color={color} {...props}>{children}</Body3>;
    case 'label1':
      return <Label1 className={className} color={color} {...props}>{children}</Label1>;
    case 'label2':
      return <Label2 className={className} color={color} {...props}>{children}</Label2>;
    case 'code1':
      return <Code1 className={className} color={color} {...props}>{children}</Code1>;
    case 'caption':
      return <span className={cn(typography.body3, textColors[color as keyof typeof textColors] || color, className)} {...props}>{children}</span>;
    default:
      return <Body1 className={className} color={color} {...props}>{children}</Body1>;
  }
} 