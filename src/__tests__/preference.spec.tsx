import PreferenceScreen from '@/src/screens/Preference';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

describe('Preference conditional fields', () => {
  it('shows delivery address when Delivery selected', () => {
    const ui = (
      <ThemeProvider>
        <NavigationContainer>
          <PreferenceScreen
            // @ts-expect-error minimal props for testing
            navigation={{ navigate: jest.fn() }}
            route={{ key: 'test', name: 'Preference', params: undefined }}
          />
        </NavigationContainer>
      </ThemeProvider>
    );

    const { getByText, getByLabelText } = render(ui);
    fireEvent.press(getByText('Delivery'));
    expect(getByLabelText('Address')).toBeTruthy();
  });
});


