import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Suggestion = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  padding: ${theme.spacing(1)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`);

export const SuggestionText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
`);
