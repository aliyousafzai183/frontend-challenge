/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from '@/src/hooks/useColorScheme/useColorScheme';
import { darkTheme, lightTheme } from '@/src/theme/tokens';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof lightTheme.colors & keyof typeof darkTheme.colors
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme === 'light' ? lightTheme.colors[colorName] : darkTheme.colors[colorName];
  }
}
