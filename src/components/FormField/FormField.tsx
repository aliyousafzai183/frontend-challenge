import React from "react";
import { ErrorText, Input, Label, Wrapper } from "./FormField.styles";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string | null;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "number-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  returnKeyType?: "done" | "next" | "go" | "send";
  onBlur?: () => void;
};

export function FormField({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry,
  keyboardType,
  autoCapitalize = "none",
  returnKeyType = "done",
  onBlur,
}: Props) {
  const hasError = Boolean(error);
  return (
    <Wrapper>
      <Label accessibilityRole="text">{label}</Label>
      <Input
        hasError={hasError}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
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
