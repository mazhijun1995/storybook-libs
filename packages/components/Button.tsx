import React from 'react';
import './button.css';

import { cva } from 'class-variance-authority';
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const buttonVariants = cva('storybook-button', {
    variants: {
      variant: {
        primary: 'storybook-button--primary',
        secondary: 'storybook-button--secondary',
      },
      size: {
        small: 'w-[200px]',
        medium: 'w-[300px]',
        large: 'w-[400px]',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'medium',
      },
    },
  });
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size })}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
