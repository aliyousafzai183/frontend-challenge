import React, { useMemo, useState } from 'react';
import { ScrollView } from 'react-native';
import { searchAddresses } from '../../utils/address';
import { FormField } from '../FormField';
import { Suggestion, SuggestionText, SuggestionsContainer, Wrapper } from './AddressAutocomplete.styles';

type Props = {
  value: string;
  onChange: (text: string) => void;
  error?: string | null;
};

export function AddressAutocomplete({ value, onChange, error }: Props) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const results = useMemo(() => searchAddresses(query, 6), [query]);
  return (
    <Wrapper>
      <FormField
        label="Address"
        value={query}
        onChangeText={(t) => {
          setQuery(t);
          onChange(t);
          setIsOpen(true);
        }}
        placeholder="Start typing address"
        error={error || null}
      />
      {isOpen && results.length > 0 ? (
        <SuggestionsContainer>
          <ScrollView keyboardShouldPersistTaps="handled">
            {results.map((r) => (
              <Suggestion key={r} onPress={() => { setQuery(r); onChange(r); setIsOpen(false); }}>
                <SuggestionText>{r}</SuggestionText>
              </Suggestion>
            ))}
          </ScrollView>
        </SuggestionsContainer>
      ) : null}
    </Wrapper>
  );
}

export default AddressAutocomplete;
