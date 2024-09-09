'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { ButtonRoot } from './Buttons.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary' | 'accent1' | 'accent2';
  $size?: 'small' | 'medium' | 'large';
  startAdornment?: IconType;
  endAdornment?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  $variant = 'primary',
  $size = 'medium',
  type = 'button',
  startAdornment: StartAdornment,
  endAdornment: EndAdornment,
  ...props
}) => {
  return (
    <ButtonRoot $variant={$variant} $size={$size} type={type} {...props}>
      <>
        {StartAdornment && (
          <StartAdornment className="btn-icon btn-icon-start" />
        )}
        {children}
        {EndAdornment && <EndAdornment className="btn-icon btn-icon-end" />}
      </>
    </ButtonRoot>
  );
};

export default Button;
