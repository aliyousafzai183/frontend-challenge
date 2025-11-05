import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Container, Content } from './Screen.styles';

export function Screen({ children }: PropsWithChildren) {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={64}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
          <Content>{children}</Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default Screen;
