import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: row;
  gap: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(2)}px;
`);

export const Box = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  height: 48px;
  border-radius: ${theme.radii.md}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  align-items: center;
  justify-content: center;
`);

export const BoxText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
`);
