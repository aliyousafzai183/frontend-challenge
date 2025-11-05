import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Title = styled.Text(
  ({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.title}px;
  font-weight: 700;
  margin-bottom: ${theme.spacing(2)}px;
`
);

export const Row = styled.View(
  ({ theme, last }: { theme: DefaultTheme; last?: boolean }) => `
  margin-bottom: ${theme.spacing(1)}px;
  flex-direction: row;
  gap: ${theme.spacing(1)}px;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
  padding-bottom: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(1)}px;
  ${last ? `border-bottom-width: 0; padding-bottom: 0; margin-bottom: 0;` : ""}
`
);

export const Label = styled.Text(
  ({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.muted};
  width: 50%;
`
);

export const Value = styled.Text(
  ({ theme }: { theme: DefaultTheme }) => `
  font-weight: 600;
  color: ${theme.colors.text};
  width: 50%;
`
);

export const ContainerCard = styled.View(
  ({ theme }: { theme: DefaultTheme }) => `
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radii.lg}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  padding: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(2)}px;
`
);

export const FloatingAction = styled.Pressable(
  ({ theme }: { theme: DefaultTheme }) => `
  position: absolute;
  right: ${theme.spacing(2)}px;
  bottom: ${theme.spacing(8)}px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${theme.colors.danger};
  border-width: 1px;
  border-color: ${theme.colors.border};
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  shadow-offset: 0px 2px;
  elevation: 4;
  z-index: 20;
`
);