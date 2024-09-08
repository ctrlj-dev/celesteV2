import styled from 'styled-components';
import { ButtonProps } from './Button';

export const ButtonRoot = styled.button<ButtonProps>(
  ({ theme, variant = 'primary', size = 'medium' }) => ({
    backgroundColor: theme.colors[variant][500],
    color: theme.colors.black,
    border: theme.border.small,
    borderRadius: theme.borderRadius[size],
    fontSize: theme.fontSizes[size],
    padding: `${theme.spacing[size]} ${theme.spacing[size]}`,
    cursor: 'pointer',
    transition: 'background-color 0.3 ease',
    '&:hover': { backgroundColor: theme.colors[variant][600] },
    '&:disabled': {
      backgroundColor: theme.colors[variant][200],
      color: theme.colors[variant][200],
      cursor: 'not-allowed',
      opacity: '0.6',
    },
    '.btn-icon': {
      fontSize: theme.fontSizes[size],
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    '.btn-icon-start': {
      marginRight: 4,
    },
    '.btn-icon-end': {
      marginLeft: 4,
    },
  })
);