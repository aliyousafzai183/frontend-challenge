import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Wrapper = styled.View(({ theme }: { theme: DefaultTheme }) => `
  margin-bottom: ${theme.spacing(2)}px;
`);

export const Label = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.label}px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)}px;
`);

export const Input = styled.TextInput.attrs<{ hasError?: boolean }>((props: { theme: DefaultTheme }) => ({
  placeholderTextColor: (props.theme as DefaultTheme).colors.textSecondary,
}))<{
  hasError?: boolean;
}>(({ theme, hasError }: { theme: DefaultTheme; hasError?: boolean }) => `
  height: 48px;
  border-width: 1px;
  border-color: ${hasError ? theme.colors.danger : theme.colors.border};
  border-radius: ${theme.radii.md}px;
  padding: 0 ${theme.spacing(1.5)}px;
  font-size: ${theme.typography.body}px;
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text};
`);

export const ErrorText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  margin-top: ${theme.spacing(0.5)}px;
  color: ${theme.colors.danger};
  font-size: 12px;
`);
