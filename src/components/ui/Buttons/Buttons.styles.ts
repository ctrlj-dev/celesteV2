import styled from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonRoot = styled.button<ButtonProps>(
  ({ theme, $variant = 'primary', $size = 'medium' }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors[$variant][500],
    color: theme.colors.black,
    border: theme.border.small,
    borderRadius: theme.borderRadius[$size],
    fontSize: theme.fontSizes[$size],
    padding: theme.spacing.custom(2, 3),
    cursor: 'pointer',
    transition: 'background-color 300ms ease',
    '&:hover': {
      backgroundColor: theme.colors[$variant][600],
      boxShadow: theme.shadows.hover,
      transition: 'all 300ms ease-in-out',
      '.btn-icon': {
        transform: theme.effects.transform,
      },
    },
    '&:disabled': {
      backgroundColor: theme.colors[$variant][200],
      color: theme.colors[$variant][200],
      cursor: 'not-allowed',
      opacity: '0.6',
    },
    '.btn-icon': {
      fontSize: theme.fontSizes[$size],
      display: 'inline-block',
      transition: 'all 300ms ease-in-out',
    },
    '.btn-icon-start': {
      marginRight: 4,
    },
    '.btn-icon-end': {
      marginLeft: 4,
    },
  })
);