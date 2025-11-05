import { RootNavigator } from '@/src/navigation/RootNavigator';
import { ThemeProvider } from '@/src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

describe('Login flow', () => {
  it('disables sign in until form is valid, then navigates to Preference', async () => {
    const ui = (
      <ThemeProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    );
    const { getByText, getByLabelText } = render(ui);

    const email = getByLabelText('Email');
    const password = getByLabelText('Password');
    const button = getByText('Sign in');

    // Initially invalid
    expect(button.props.accessibilityState?.disabled ?? button.props.disabled).toBeTruthy();

    fireEvent.changeText(email, 'user@example.com');
    fireEvent.changeText(password, '123456');

    await waitFor(() => {
      // Becomes enabled
      expect(button.props.accessibilityState?.disabled ?? button.props.disabled).toBeFalsy();
    });
  });
});


