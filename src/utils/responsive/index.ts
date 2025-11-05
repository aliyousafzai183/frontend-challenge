import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const isTablet = width >= 768;
export const isSmallScreen = width < 375;

export const getResponsiveValue = <T,>(mobile: T, tablet: T): T => {
  return isTablet ? tablet : mobile;
};

export const getMaxWidth = () => (isTablet ? 600 : '100%');
