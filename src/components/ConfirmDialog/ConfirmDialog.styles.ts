import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Backdrop = styled.Pressable(() => `
  flex: 1;
  background-color: rgba(0,0,0,0.7);
  align-items: center;
  justify-content: center;
`);

export const Sheet = styled.View(({ theme }: { theme: DefaultTheme }) => `
  width: 88%;
  max-width: 560px;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radii.lg}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  padding: ${theme.spacing(2)}px;
`);

export const Title = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.title}px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)}px;
`);

export const Description = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing(2)}px;
`);

export const Actions = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: row;
  gap: ${theme.spacing(1)}px;
  justify-content: flex-end;
`);

export const OutlinedButton = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  height: 44px;
  padding: 0 ${theme.spacing(2)}px;
  border-radius: ${theme.radii.md}px;
  border-width: 1px;
  border-color: ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  background-color: transparent;
`);

export const OutlinedLabel = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.primary};
  font-weight: 600;
`);

export const DangerButton = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  height: 44px;
  padding: 0 ${theme.spacing(2)}px;
  border-radius: ${theme.radii.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.danger};
`);

export const DangerLabel = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.primaryContrast};
  font-weight: 600;
`);


