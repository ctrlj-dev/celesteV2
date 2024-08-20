'use client';

import React from 'react';
import { ButtonRoot } from './Buttons.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent1' | 'accent2';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  ...props
}) => {
  return (
    <ButtonRoot
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </ButtonRoot>
  );
};

export default Button;
