import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Pressable = styled.Pressable<{ disabled?: boolean }>(({ theme, disabled }: { theme: DefaultTheme; disabled?: boolean }) => `
  height: 48px;
  border-radius: ${theme.radii.md}px;
  background-color: ${theme.colors.primary};
  opacity: ${disabled ? 0.6 : 1};
  align-items: center;
  justify-content: center;
`);

export const Label = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: white;
  font-size: ${theme.typography.label}px;
  font-weight: 600;
`);
