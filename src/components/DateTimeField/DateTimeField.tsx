import { withinStoreHours } from "@/src/utils/validation";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Modal, Platform } from "react-native";
import {
  Box,
  BoxText,
  Column,
  DoneButton,
  DoneLabel,
  InfoBox,
  InfoText,
  ModalBackdrop,
  ModalSheet,
  Row,
} from "./DateTimeField.styles";

type Props = {
  date: string | undefined;
  time: string | undefined;
  onChange: (next: { date?: string; time?: string }) => void;
};

export function DateTimeField({ date, time, onChange }: Props) {
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(
    date ? new Date(date) : new Date()
  );
  const [tempTime, setTempTime] = useState<Date>(new Date());
  const [wasClamped, setWasClamped] = useState(false);
  const LOCALE = Platform.OS === "ios" ? "en_GB" : undefined;

  const clampToStoreHours = (d: Date): Date => {
    const hh = d.getHours();
    const mi = d.getMinutes();
    const str = `${String(hh).padStart(2, "0")}:${String(mi).padStart(2, "0")}`;
    if (withinStoreHours(str)) return d;
    const adjusted = new Date(d);
    if (hh < 9) adjusted.setHours(9, 0, 0, 0);
    else adjusted.setHours(21, 0, 0, 0);
    return adjusted;
  };

  return (
    <Column>
      <Row>
        <Box onPress={() => setShowDate(true)} accessibilityRole="button">
          <BoxText>{date || "Select date"}</BoxText>
        </Box>
        <Box onPress={() => setShowTime(true)} accessibilityRole="button">
          <BoxText>{time || "Select time"}</BoxText>
        </Box>

        {Platform.OS === 'ios' ? (
          <Modal
            visible={showDate}
            transparent
            animationType="fade"
            onRequestClose={() => setShowDate(false)}
          >
            <ModalBackdrop onPress={() => setShowDate(false)}>
              <ModalSheet>
                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="spinner"
                  locale={LOCALE}
                  onChange={(_event: any, d?: Date) => {
                    if (d) setTempDate(d);
                  }}
                />
                <DoneButton
                  onPress={() => {
                    const d = tempDate;
                    const yyyy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    onChange({ date: `${yyyy}-${mm}-${dd}` });
                    setShowDate(false);
                  }}
                >
                  <DoneLabel>Done</DoneLabel>
                </DoneButton>
              </ModalSheet>
            </ModalBackdrop>
          </Modal>
        ) : (
          showDate ? (
            <DateTimePicker
              value={tempDate}
              mode="date"
              display="default"
              onChange={(event: any, d?: Date) => {
                if (event.type === 'set' && d) {
                  const yyyy = d.getFullYear();
                  const mm = String(d.getMonth() + 1).padStart(2, '0');
                  const dd = String(d.getDate()).padStart(2, '0');
                  onChange({ date: `${yyyy}-${mm}-${dd}` });
                }
                setShowDate(false);
              }}
            />
          ) : null
        )}

        {Platform.OS === 'ios' ? (
          <Modal
            visible={showTime}
            transparent
            animationType="fade"
            onRequestClose={() => setShowTime(false)}
          >
            <ModalBackdrop onPress={() => setShowTime(false)}>
              <ModalSheet>
                {wasClamped ? (
                  <InfoBox>
                    <InfoText>
                      Selected time is adjusted to the closest store opening hours
                      (09:00–21:00).
                    </InfoText>
                  </InfoBox>
                ) : null}
                <DateTimePicker
                  value={tempTime}
                  mode="time"
                  is24Hour
                  display="spinner"
                  locale={LOCALE}
                  onChange={(_event: any, d?: Date) => {
                    if (d) {
                      const adj = clampToStoreHours(d);
                      setWasClamped(
                        adj.getHours() !== d.getHours() ||
                        adj.getMinutes() !== d.getMinutes()
                      );
                      setTempTime(adj);
                    }
                  }}
                />
                <DoneButton
                  onPress={() => {
                    const d = clampToStoreHours(tempTime);
                    const hh = String(d.getHours()).padStart(2, '0');
                    const mi = String(d.getMinutes()).padStart(2, '0');
                    onChange({ time: `${hh}:${mi}` });
                    setShowTime(false);
                  }}
                >
                  <DoneLabel>Done</DoneLabel>
                </DoneButton>
              </ModalSheet>
            </ModalBackdrop>
          </Modal>
        ) : (
          showTime ? (
            <DateTimePicker
              value={tempTime}
              mode="time"
              is24Hour
              display="default"
              onChange={(event: any, d?: Date) => {
                if (event.type === 'set' && d) {
                  const adj = clampToStoreHours(d);
                  setWasClamped(
                    adj.getHours() !== d.getHours() ||
                    adj.getMinutes() !== d.getMinutes()
                  );
                  const hh = String(adj.getHours()).padStart(2, '0');
                  const mi = String(adj.getMinutes()).padStart(2, '0');
                  onChange({ time: `${hh}:${mi}` });
                }
                setShowTime(false);
              }}
            />
          ) : null
        )}
      </Row>
      <InfoBox>
        <InfoText>
          Availability: 09:00–21:00. Please choose between these.
        </InfoText>
      </InfoBox>
    </Column>
  );
}

export default DateTimeField;
