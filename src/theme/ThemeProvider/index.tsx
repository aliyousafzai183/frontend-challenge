import { useColorScheme } from '@/src/hooks/useColorScheme/useColorScheme';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from '../tokens';

export function ThemeProvider({ children }: PropsWithChildren) {
  const scheme = useColorScheme() ?? 'light';
  const theme = scheme === 'dark' ? darkTheme : lightTheme;
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}

export { darkTheme, lightTheme } from '../tokens';


