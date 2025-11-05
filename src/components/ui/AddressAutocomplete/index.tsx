import React, { useMemo, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';
import { searchAddresses } from '../../../utils/address';
import { FormField } from '../FormField';

const Suggestion = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  padding: ${theme.spacing(1)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`);

const SuggestionText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
`);

type Props = {
  value: string;
  onChange: (text: string) => void;
  error?: string | null;
};

export function AddressAutocomplete({ value, onChange, error }: Props) {
  const [query, setQuery] = useState(value);
  const results = useMemo(() => searchAddresses(query, 6), [query]);
  return (
    <>
      <FormField
        label="Address"
        value={query}
        onChangeText={(t) => {
          setQuery(t);
          onChange(t);
        }}
        placeholder="Start typing address"
        error={error || null}
      />
      {results.map((r) => (
        <Suggestion key={r} onPress={() => { setQuery(r); onChange(r); }}>
          <SuggestionText>{r}</SuggestionText>
        </Suggestion>
      ))}
    </>
  );
}

export default AddressAutocomplete;
