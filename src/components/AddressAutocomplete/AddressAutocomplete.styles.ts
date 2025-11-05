import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Wrapper = styled.View(() => `
  position: relative;
`);

export const SuggestionsContainer = styled.View(({ theme }: { theme: DefaultTheme }) => `
  position: absolute;
  top: 80%;
  left: 0;
  right: 0;
  margin-top: ${theme.spacing(1)}px;
  background-color: ${theme.colors.surface};
  border-width: 1px;
  border-color: ${theme.colors.border};
  border-radius: ${theme.radii.md}px;
  max-height: 240px;
  overflow: hidden;
  shadow-color: #000;
  shadow-opacity: 0.12;
  shadow-radius: 12px;
  shadow-offset: 0px 4px;
  elevation: 3;
  z-index: 10;
`);

export const Suggestion = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  padding: ${theme.spacing(1.5)}px ${theme.spacing(2)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
  background-color: ${theme.colors.surface};
`);

export const SuggestionText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
  color: ${theme.colors.text};
`);
