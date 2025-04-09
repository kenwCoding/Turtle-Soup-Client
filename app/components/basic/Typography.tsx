import React from 'react';
import { cn } from '~/lib/utils';
import { typography, textColors } from '~/styling';

// Define the common props that all typography components will accept
/**
 * Common props for all typography components
 * 
 * @property {React.ReactNode} children - The content to display
 * @property {string} [className] - Additional CSS classes to apply
 * @property {keyof typeof textColors | string} [color='onSurface'] - The text color to use
 * @property {keyof typeof typography} [sm] - Typography style to apply at the sm breakpoint (≥640px)
 * @property {keyof typeof typography} [md] - Typography style to apply at the md breakpoint (≥768px)
 * @property {keyof typeof typography} [lg] - Typography style to apply at the lg breakpoint (≥1024px)
 * @property {keyof typeof typography} [xl] - Typography style to apply at the xl breakpoint (≥1280px)
 * @property {keyof typeof typography} [2xl] - Typography style to apply at the 2xl breakpoint (≥1536px)
 * 
 * Note: For responsive breakpoints, only pre-defined typography tokens are supported.
 * For custom responsive styles, use Tailwind's responsive utilities directly in the className.
 */
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof textColors | string;
  // Responsive class props (only pre-defined typography classes)
  sm?: keyof typeof typography;
  md?: keyof typeof typography;
  lg?: keyof typeof typography;
  xl?: keyof typeof typography;
  '2xl'?: keyof typeof typography;
}

// Export these types to fix the import errors
export type TypographyColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit';
export type { TypographyProps };

// Helper function to generate responsive typography classes
const getResponsiveTypographyClasses = (
  baseClass: keyof typeof typography | string,
  props: {
    sm?: keyof typeof typography;
    md?: keyof typeof typography;
    lg?: keyof typeof typography;
    xl?: keyof typeof typography;
    '2xl'?: keyof typeof typography;
  }
) => {
  const { sm, md, lg, xl, '2xl': xxl } = props;
  
  // Get base class
  const baseClassValue = baseClass in typography ? typography[baseClass as keyof typeof typography] : baseClass;
  
  // Create an array to collect all responsive classes
  const responsiveClasses = [baseClassValue];
  
  // Add responsive classes if specified - only support pre-defined typography tokens
  if (sm && sm in typography) {
    const smKey = `sm:${sm}`;
    if (smKey in typography) {
      responsiveClasses.push(typography[smKey as keyof typeof typography]);
    }
  }
  
  if (md && md in typography) {
    const mdKey = `md:${md}`;
    if (mdKey in typography) {
      responsiveClasses.push(typography[mdKey as keyof typeof typography]);
    }
  }
  
  if (lg && lg in typography) {
    const lgKey = `lg:${lg}`;
    if (lgKey in typography) {
      responsiveClasses.push(typography[lgKey as keyof typeof typography]);
    }
  }
  
  if (xl && xl in typography) {
    const xlKey = `xl:${xl}`;
    if (xlKey in typography) {
      responsiveClasses.push(typography[xlKey as keyof typeof typography]);
    }
  }
  
  if (xxl && xxl in typography) {
    const xxlKey = `2xl:${xxl}`;
    if (xxlKey in typography) {
      responsiveClasses.push(typography[xxlKey as keyof typeof typography]);
    }
  }
  
  // Join all classes
  return cn(...responsiveClasses);
};

// Heading components
export const H1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('heading1', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <h1 className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </h1>
  );
};

export const H2: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('heading2', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <h2 className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </h2>
  );
};

export const H3: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('heading3', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <h3 className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </h3>
  );
};

export const H4: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('heading4', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <h4 className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </h4>
  );
};

export const H5: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('heading5', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <h5 className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </h5>
  );
};

export const H6: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('heading5', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <h6 className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </h6>
  );
};

// Body text components
export const Body1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('body1', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <p className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

export const Body2: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('body2', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <p className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

export const Body3: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('body3', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <p className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

// Label components
export const Label1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('label1', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <p className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

export const Label2: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('label2', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <p className={cn(typographyClasses, colorClass, className)} {...props}>
      {children}
    </p>
  );
};

// Code component
export const Code1: React.FC<TypographyProps> = ({ 
  children, 
  className = '',
  color = 'onSurface',
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}) => {
  const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
  const typographyClasses = getResponsiveTypographyClasses('code1', { sm, md, lg, xl, '2xl': xxl });
  
  return (
    <code className={cn(typographyClasses, colorClass, className)} {...props}>
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
  sm,
  md,
  lg,
  xl,
  '2xl': xxl,
  ...props 
}: { 
  variant?: TypographyVariant 
} & TypographyProps) {
  const typographyMap: Record<TypographyVariant, string> = {
    'h1': 'heading1',
    'h2': 'heading2',
    'h3': 'heading3',
    'h4': 'heading4',
    'h5': 'heading5',
    'h6': 'heading5',
    'body1': 'body1',
    'body2': 'body2',
    'body3': 'body3',
    'label1': 'label1',
    'label2': 'label2',
    'code1': 'code1',
    'caption': 'body3'
  };

  const baseClass = typographyMap[variant];
  
  switch (variant) {
    case 'h1':
      return <H1 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</H1>;
    case 'h2':
      return <H2 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</H2>;
    case 'h3':
      return <H3 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</H3>;
    case 'h4':
      return <H4 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</H4>;
    case 'h5':
      return <H5 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</H5>;
    case 'h6':
      return <H6 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</H6>;
    case 'body1':
      return <Body1 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Body1>;
    case 'body2':
      return <Body2 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Body2>;
    case 'body3':
      return <Body3 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Body3>;
    case 'label1':
      return <Label1 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Label1>;
    case 'label2':
      return <Label2 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Label2>;
    case 'code1':
      return <Code1 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Code1>;
    case 'caption':
      // For caption, create responsive classes using the same helper function
      const typographyClasses = getResponsiveTypographyClasses('body3', { sm, md, lg, xl, '2xl': xxl });
      const colorClass = color in textColors ? textColors[color as keyof typeof textColors] : color;
      return <span className={cn(typographyClasses, colorClass, className)} {...props}>{children}</span>;
    default:
      return <Body1 className={className} color={color} sm={sm} md={md} lg={lg} xl={xl} {...{ '2xl': xxl }} {...props}>{children}</Body1>;
  }
} 