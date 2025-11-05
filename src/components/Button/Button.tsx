import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Label, Pressable } from './Button.styles';

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
