import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  background-color: ${theme.colors.background};
`);

export const Content = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  padding: ${theme.spacing(2)}px;
`);
