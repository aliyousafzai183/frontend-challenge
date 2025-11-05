import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  background-color: ${theme.colors.background};
`);

const Content = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  padding: ${theme.spacing(2)}px;
`);

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
