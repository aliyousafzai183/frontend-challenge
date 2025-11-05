const lightColors = {
  background: '#FFFFFF',
  surface: '#FFFFFF',
  text: '#0A0A0A',
  textSecondary: '#666A70',
  primary: '#0A84FF',
  primaryContrast: '#FFFFFF',
  danger: '#FF3B30',
  border: '#E6E6E6',
  muted: '#8E8E93',
};

const darkColors = {
  background: '#0B0B0C',
  surface: '#141416',
  text: '#F2F2F2',
  textSecondary: '#B0B3B8',
  primary: '#0A84FF',
  primaryContrast: '#FFFFFF',
  danger: '#FF453A',
  border: '#2A2A2E',
  muted: '#8E8E93',
};

export const spacing = (n: number) => n * 8;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
};

export const typography = {
  body: 16,
  label: 14,
  title: 20,
};

export const lightTheme = {
  colors: lightColors,
  spacing,
  radii,
  typography,
};

export const darkTheme = {
  colors: darkColors,
  spacing,
  radii,
  typography,
};

export type Theme = typeof lightTheme;


