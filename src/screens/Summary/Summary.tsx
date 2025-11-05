import { Button } from "@/src/components/Button";
import { Screen } from "@/src/components/Screen";
import { useAuthGuard } from "@/src/hooks/useAuthGuard";
import type { RootStackParamList } from "@/src/navigation/RootNavigator/RootNavigator";
import { useAppStore } from "@/src/stores/AppStore";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { DefaultTheme } from "styled-components";
import { useTheme } from "styled-components/native";
import {
  ContainerCard,
  FloatingAction,
  Label,
  Row,
  Title,
  Value,
} from "./Summary.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Summary">;

function SummaryScreen({ navigation }: Props) {
  useAuthGuard();
  const theme = useTheme();
  const email = useAppStore((s) => s.auth.email);
  const pref = useAppStore((s) => s.preference);
  const signOut = useAppStore((s) => s.signOut);

  return (
    <Screen
      bottomContent={
        <Button
          title="Edit"
          onPress={() => navigation.navigate("Preference")}
        />
      }
    >
      <Title>Summary</Title>
      <ContainerCard>
        <Row>
          <Label>Email</Label>
          <Value>{email ?? "--"}</Value>
        </Row>
        <Row>
          <Label>Preference</Label>
          <Value>{pref.type ?? "--"}</Value>
        </Row>
        {pref.address ? (
          <Row>
            <Label>Address</Label>
            <Value>{pref.address ?? "--"}</Value>
          </Row>
        ) : null}
        {pref.carDescription ? (
          <Row>
            <Label>Car</Label>
            <Value>{pref.carDescription ?? "--"}</Value>
          </Row>
        ) : null}
        {pref.date ? (
          <Row>
            <Label>Date</Label>
            <Value>{pref.date ?? "--"}</Value>
          </Row>
        ) : null}
        {pref.time ? (
          <Row last>
            <Label>Time</Label>
            <Value>{pref.time ?? "--"}</Value>
          </Row>
        ) : null}
      </ContainerCard>

      <FloatingAction
        accessibilityRole="button"
        accessibilityLabel="Sign out"
        onPress={() => {
          signOut();
          navigation.reset({ index: 0, routes: [{ name: "Login" }] });
        }}
      >
        <Ionicons
          name="log-out-outline"
          size={26}
          color={(theme as DefaultTheme).colors.primaryContrast}
        />
      </FloatingAction>
    </Screen>
  );
}

export default SummaryScreen;
