import React from 'react';
import clsx from 'clsx';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'inherit';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'inherit',
  component,
  className,
  children,
  htmlFor,
  ...props
}) => {
  const Component = component || getDefaultComponent(variant);
  
  return (
    <Component
      className={clsx(
        'typography',
        `typography-${variant}`,
        `typography-color-${color}`,
        className
      )}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </Component>
  );
};

function getDefaultComponent(variant: TypographyVariant): React.ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
}

export default Typography; 