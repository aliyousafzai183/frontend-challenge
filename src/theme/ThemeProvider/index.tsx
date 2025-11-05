import React, { PropsWithChildren } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import { theme } from '../tokens';

export function ThemeProvider({ children }: PropsWithChildren) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}

export { theme } from '../tokens';


