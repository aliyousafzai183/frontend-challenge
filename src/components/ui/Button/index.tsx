import React from 'react';
import { ActivityIndicator } from 'react-native';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

const Pressable = styled.Pressable<{ disabled?: boolean }>(({ theme, disabled }: { theme: DefaultTheme; disabled?: boolean }) => `
  height: 48px;
  border-radius: ${theme.radii.md}px;
  background-color: ${theme.colors.primary};
  opacity: ${disabled ? 0.6 : 1};
  align-items: center;
  justify-content: center;
`);

const Label = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: white;
  font-size: ${theme.typography.label}px;
  font-weight: 600;
`);

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({ title, onPress, disabled, loading }: Props) {
  return (
    <Pressable onPress={onPress} disabled={disabled || loading} accessibilityRole="button">
      {loading ? <ActivityIndicator color="#fff" /> : <Label>{title}</Label>}
    </Pressable>
  );
}

export default Button;
