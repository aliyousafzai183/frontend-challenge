import { SummaryScreen } from '@/src/screens/Summary';
import { useAppStore } from '@/src/stores/AppStore';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { render } from '@testing-library/react-native';
import React from 'react';
import { RootStackParamList } from '../navigation/RootNavigator';

function seedStore() {
  const { signIn, setPreference } = useAppStore.getState() as any;
  signIn('user@example.com');
  setPreference({ type: 'delivery', address: '123 Main Street', date: '2999-01-01', time: '10:00' });
}

describe('Summary reflects entered data', () => {
  it('shows email, type, and fields', () => {
    seedStore();
    const { getByText } = render(
      <ThemeProvider>
        <NavigationContainer>
          <SummaryScreen navigation={jest.fn() as unknown as NativeStackNavigationProp<RootStackParamList, 'Summary'>} route={jest.fn() as unknown as RouteProp<RootStackParamList, 'Summary'>} />
        </NavigationContainer>
      </ThemeProvider>
    );

    expect(getByText('user@example.com')).toBeTruthy();
    expect(getByText('delivery')).toBeTruthy();
    expect(getByText('123 Main Street')).toBeTruthy();
    expect(getByText('2999-01-01')).toBeTruthy();
    expect(getByText('10:00')).toBeTruthy();
  });
});
