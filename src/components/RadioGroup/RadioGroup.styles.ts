import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: row;
  gap: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(2)}px;
`);

export const Chip = styled.Pressable<{ selected: boolean }>(({ theme, selected }: { theme: DefaultTheme; selected: boolean }) => `
  padding: ${theme.spacing(1)}px ${theme.spacing(1.5)}px;
  border-radius: ${theme.radii.sm}px;
  border-width: 1px;
  border-color: ${selected ? theme.colors.primary : theme.colors.border};
  background-color: ${selected ? '#E5F0FF' : 'transparent'};
`);

export const ChipText = styled.Text<{ selected: boolean }>(({ theme, selected }: { theme: DefaultTheme; selected: boolean }) => `
  color: ${selected ? theme.colors.primary : theme.colors.text};
`);
