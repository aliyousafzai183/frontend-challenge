import React from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: row;
  gap: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(2)}px;
`);

const Chip = styled.Pressable<{ selected: boolean }>(({ theme, selected }: { theme: DefaultTheme; selected: boolean }) => `
  padding: ${theme.spacing(1)}px ${theme.spacing(1.5)}px;
  border-radius: ${theme.radii.sm}px;
  border-width: 1px;
  border-color: ${selected ? theme.colors.primary : theme.colors.border};
  background-color: ${selected ? '#E5F0FF' : 'transparent'};
`);

const ChipText = styled.Text<{ selected: boolean }>(({ theme, selected }: { theme: DefaultTheme; selected: boolean }) => `
  color: ${selected ? theme.colors.primary : theme.colors.text};
`);

export type Option<T extends string> = { label: string; value: T };

type Props<T extends string> = {
  options: Array<Option<T>>;
  value: T | null;
  onChange: (value: T) => void;
};

export function RadioGroup<T extends string>({ options, value, onChange }: Props<T>) {
  return (
    <Row>
      {options.map((opt) => (
        <Chip key={opt.value} selected={value === opt.value} onPress={() => onChange(opt.value)} accessibilityRole="button">
          <ChipText selected={value === opt.value}>{opt.label}</ChipText>
        </Chip>
      ))}
    </Row>
  );
}

export default RadioGroup;
