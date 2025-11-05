export const colors = {
  background: '#FFFFFF',
  text: '#0A0A0A',
  primary: '#0A84FF',
  danger: '#FF3B30',
  border: '#E6E6E6',
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

export const theme = {
  colors,
  spacing,
  radii,
  typography,
};

export type Theme = typeof theme;


