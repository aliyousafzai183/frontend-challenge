import React from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

const Wrapper = styled.View(({ theme }: { theme: DefaultTheme }) => `
  margin-bottom: ${theme.spacing(2)}px;
`);

const Label = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.label}px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)}px;
`);

const Input = styled.TextInput<{ hasError?: boolean }>(({ theme, hasError }: { theme: DefaultTheme; hasError?: boolean }) => `
  height: 48px;
  border-width: 1px;
  border-color: ${hasError ? theme.colors.danger : theme.colors.border};
  border-radius: ${theme.radii.md}px;
  padding: 0 ${theme.spacing(1.5)}px;
  font-size: ${theme.typography.body}px;
`);

const ErrorText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  margin-top: ${theme.spacing(0.5)}px;
  color: ${theme.colors.danger};
  font-size: 12px;
`);

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string | null;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'number-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'done' | 'next' | 'go' | 'send';
};

export function FormField({ label, value, onChangeText, placeholder, error, secureTextEntry, keyboardType, autoCapitalize = 'none', returnKeyType = 'done' }: Props) {
  const hasError = Boolean(error);
  return (
    <Wrapper>
      <Label accessibilityRole="text">{label}</Label>
      <Input
        hasError={hasError}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        accessibilityLabel={label}
      />
      {hasError ? <ErrorText>{error}</ErrorText> : null}
    </Wrapper>
  );
}

export default FormField;
