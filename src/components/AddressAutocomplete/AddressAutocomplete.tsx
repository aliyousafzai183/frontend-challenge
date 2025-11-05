import React, { useMemo, useState } from 'react';
import { searchAddresses } from '../../utils/address';
import { FormField } from '../FormField';
import { Suggestion, SuggestionText } from './AddressAutocomplete.styles';

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
