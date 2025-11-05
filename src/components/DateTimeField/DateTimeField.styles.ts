import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

export const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: row;
  gap: ${theme.spacing(2)}px;
`);

export const Column = styled.View(({ theme }: { theme: DefaultTheme }) => `
  flex-direction: column;
  gap: ${theme.spacing(2)}px;
`);

export const Box = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  flex: 1;
  height: 48px;
  border-radius: ${theme.radii.md}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  background-color: ${theme.colors.surface};
  align-items: center;
  justify-content: center;
`);

export const BoxText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.body}px;
  color: ${theme.colors.text};
`);

export const ModalBackdrop = styled.Pressable(() => `
  flex: 1;
  background-color: rgba(0,0,0,0.35);
  justify-content: flex-end;
`);

export const ModalSheet = styled.View(({ theme }: { theme: DefaultTheme }) => `
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing(2)}px;
  border-top-left-radius: ${theme.radii.lg}px;
  border-top-right-radius: ${theme.radii.lg}px;
  border-top-width: 1px;
  border-color: ${theme.colors.border};
`);

export const DoneButton = styled.Pressable(({ theme }: { theme: DefaultTheme }) => `
  margin-top: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(2)}px;
  height: 44px;
  border-radius: ${theme.radii.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
`);

export const DoneLabel = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.primaryContrast};
  font-size: ${theme.typography.label}px;
  font-weight: 600;
`);

export const InfoBox = styled.View(({ theme }: { theme: DefaultTheme }) => `
  padding: ${theme.spacing(1.5)}px ${theme.spacing(2)}px;
  background-color: ${theme.colors.warningBackground};
  border-width: 1px;
  border-color: ${theme.colors.warningBorder};
  border-radius: ${theme.radii.md}px;
`);

export const InfoText = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.warningText};
  font-size: 12px;
`);
