import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Box, BoxText, Row } from './DateTimeField.styles';

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
