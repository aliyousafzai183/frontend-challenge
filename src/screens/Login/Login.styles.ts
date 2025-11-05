import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Title = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.title}px;
  font-weight: 700;
  margin-bottom: ${theme.spacing(2)}px;
`);
