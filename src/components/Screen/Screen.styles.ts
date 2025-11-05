import { isTablet } from '@/src/utils/responsive';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled(RNSafeAreaView)(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  background-color: ${theme.colors.background};
`);

const getContentStyles = () => {
  if (isTablet) {
    return `
      max-width: 600px;
      align-self: center;
      width: 100%;
    `;
  }
  return '';
};

export const Content = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  padding: ${theme.spacing(2)}px;
  ${getContentStyles()}
`);

export const FooterOverlay = styled.View(({ theme }: { theme: DefaultTheme }) => `
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${theme.spacing(2)}px;
  padding: ${theme.spacing(2)}px;
`);
