import React from 'react';
import { Chip, ChipText, Row } from './RadioGroup.styles';

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
