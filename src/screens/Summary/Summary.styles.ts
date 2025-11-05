import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Title = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.title}px;
  font-weight: 700;
  margin-bottom: ${theme.spacing(2)}px;
`);

export const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  margin-bottom: ${theme.spacing(1)}px;
`);

export const Label = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.muted};
`);

export const Value = styled.Text(() => `
  font-weight: 600;
`);
