import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: row;
  gap: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(2)}px;
`);

const Box = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  height: 48px;
  border-radius: ${theme.radii.md}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  align-items: center;
  justify-content: center;
`);

const BoxText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
`);

type Props = {
  date: string | undefined;
  time: string | undefined;
  onChange: (next: { date?: string; time?: string }) => void;
};

export function DateTimeField({ date, time, onChange }: Props) {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  return (
    <Row>
      <Box onPress={() => setShowDate(true)} accessibilityRole="button">
        <BoxText>{date || 'Select date'}</BoxText>
      </Box>
      <Box onPress={() => setShowTime(true)} accessibilityRole="button">
        <BoxText>{time || 'Select time'}</BoxText>
      </Box>
      {showDate && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode="date"
          display="default"
          onChange={(_, d) => {
            setShowDate(false);
            if (!d) return;
            const yyyy = d.getFullYear();
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            onChange({ date: `${yyyy}-${mm}-${dd}` });
          }}
        />
      )}
      {showTime && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour
          display="default"
          onChange={(_, d) => {
            setShowTime(false);
            if (!d) return;
            const hh = String(d.getHours()).padStart(2, '0');
            const mi = String(d.getMinutes()).padStart(2, '0');
            onChange({ time: `${hh}:${mi}` });
          }}
        />
      )}
    </Row>
  );
}

export default DateTimeField;
