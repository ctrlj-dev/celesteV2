/*
 *Calculate spacing and returning margin / padding shorthand
 */

import { theme } from '../theme';

const spacing = (...multipliers: number[]): string => {
  if (multipliers.length > 4) {
    throw new Error('A maximum of 4 multipliers is allowed.');
  }

  const defaultSpacing = theme.spacing.default;
  return multipliers
    .map(multiplier => `${multiplier * defaultSpacing}px`)
    .join(' ');
};

export { spacing };
