import React, { PropsWithChildren, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Container, Content, FooterOverlay } from './Screen.styles';

type Props = PropsWithChildren & { bottomContent?: ReactNode };

export function Screen({ children, bottomContent }: Props) {
  return (
    <Container edges={['left', 'right', 'bottom']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={64}
      >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
          <Content>{children}</Content>
        </ScrollView>
      </KeyboardAvoidingView>
      {bottomContent ? <FooterOverlay>{bottomContent}</FooterOverlay> : null}
    </Container>
  );
}

export default Screen;
