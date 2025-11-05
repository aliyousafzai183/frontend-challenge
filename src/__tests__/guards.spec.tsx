import { RootNavigator } from '@/src/navigation/RootNavigator';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Auth guards', () => {
  it('redirects unauthenticated users to Login', () => {
    const ui = (
      <ThemeProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    );
    const { getByRole } = render(ui);
    expect(getByRole('button', { name: 'Sign in' })).toBeTruthy();
  });
});


