import styled from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonRoot = styled.button<ButtonProps>`
  background-color: ${({ theme, variant = 'primary' }) =>
    theme.colors[variant][500]};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme, size = 'medium' }) => {
    switch (size) {
      case 'small':
        return `${theme.spacing.small} ${theme.spacing.medium}`;
      case 'large':
        return `${theme.spacing.large} ${theme.spacing.large}`;
      default:
        return `${theme.spacing.medium} ${theme.spacing.large}`;
    }
  }};
  border: ${({ theme }) => theme.border.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme, size = 'medium' }) => theme.fontSizes[size]};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, variant = 'primary' }) =>
      theme.colors[variant][600]};
  }

  &:disabled {
    background-color: ${({ theme, variant = 'primary' }) => {
      switch (variant) {
        case 'secondary':
          return theme.colors.secondary[200];
        case 'accent1':
          return theme.colors.accent1[200];
        case 'accent2':
          return theme.colors.accent2[200];
        default:
          return theme.colors.primary[200];
      }
    }};
    color: ${({ theme, variant = 'primary' }) => {
      switch (variant) {
        case 'secondary':
          return theme.colors.secondary[100];
        case 'accent1':
          return theme.colors.accent1[100];
        case 'accent2':
          return theme.colors.accent2[100];
        default:
          return theme.colors.primary[100];
      }
    }};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
