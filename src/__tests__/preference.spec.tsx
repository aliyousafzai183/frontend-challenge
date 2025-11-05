import { PreferenceScreen } from '@/src/screens/Preference';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { RootStackParamList } from '../navigation/RootNavigator';

// Disable auth guard side-effects for these unit tests
jest.mock('@/src/hooks/useAuthGuard', () => ({ useAuthGuard: () => {} }));

jest.mock('@/src/components/DateTimeField', () => {
  const React = require('react');
  const { Text, View } = require('react-native');
  return {
    __esModule: true,
    DateTimeField: ({ onChange }: any) => (
      React.createElement(View, {},
        React.createElement(Text, {
          accessibilityRole: 'button',
          accessibilityLabel: 'set-past',
          onPress: () => {
            onChange({ date: '2000-01-01' });
            onChange({ time: '00:00' });
          }
        }, 'set-past'),
        React.createElement(Text, {
          accessibilityRole: 'button',
          accessibilityLabel: 'set-future',
          onPress: () => {
            onChange({ date: '2999-01-01' });
            onChange({ time: '10:00' });
          }
        }, 'set-future')
      )
    )
  };
});

describe('Preference conditional fields', () => {
  it('shows delivery address when Delivery selected', () => {
    const ui = (
      <ThemeProvider>
        <NavigationContainer>
          <PreferenceScreen navigation={jest.fn() as unknown as NativeStackNavigationProp<RootStackParamList, 'Preference'>} route={jest.fn() as unknown as RouteProp<RootStackParamList, 'Preference'>} />
        </NavigationContainer>
      </ThemeProvider>
    );

    const { getByText, getByLabelText } = render(ui);
    fireEvent.press(getByText('Delivery'));
    expect(getByLabelText('Address')).toBeTruthy();
  });

  it('disables submit for past date/time and enables for future', () => {
    const navigate = jest.fn();
    const ui = (
      <ThemeProvider>
        <NavigationContainer>
          <PreferenceScreen navigation={navigate as unknown as NativeStackNavigationProp<RootStackParamList, 'Preference'>} route={jest.fn() as unknown as RouteProp<RootStackParamList, 'Preference'>} />
        </NavigationContainer>
      </ThemeProvider>
    );

    const { getByText, getByLabelText, getByRole } = render(ui);
    fireEvent.press(getByText('In-store'));

    // set past via mocked control
    fireEvent.press(getByLabelText('set-past'));
    const continueBtn = getByRole('button', { name: 'Continue' });
    expect(continueBtn).toBeDisabled();

    // set future via mocked control
    fireEvent.press(getByLabelText('set-future'));
    expect(continueBtn).not.toBeDisabled();
  });
});


