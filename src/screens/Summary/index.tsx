import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';
import { Button } from '../../components/ui/Button';
import { Screen } from '../../components/ui/Screen';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import type { RootStackParamList } from '../../navigation/RootNavigator';
import { useAppStore } from '../../stores/AppStore';

const Title = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.title}px;
  font-weight: 700;
  margin-bottom: ${theme.spacing(2)}px;
`);

const Row = styled.View(({ theme }: { theme: DefaultTheme }) => `
  margin-bottom: ${theme.spacing(1)}px;
`);

const Label = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  color: ${theme.colors.muted};
`);

const Value = styled.Text(() => `
  font-weight: 600;
`);

type Props = NativeStackScreenProps<RootStackParamList, 'Summary'>;

function SummaryScreen({ navigation }: Props) {
  useAuthGuard();
  const email = useAppStore((s) => s.auth.email);
  const pref = useAppStore((s) => s.preference);
  const signOut = useAppStore((s) => s.signOut);

  return (
    <Screen>
      <Title>Summary</Title>
      <Row>
        <Label>Email</Label>
        <Value>{email}</Value>
      </Row>
      <Row>
        <Label>Preference</Label>
        <Value>{pref.type ?? '-'}</Value>
      </Row>
      {pref.address ? (
        <Row>
          <Label>Address</Label>
          <Value>{pref.address}</Value>
        </Row>
      ) : null}
      {pref.carDescription ? (
        <Row>
          <Label>Car</Label>
          <Value>{pref.carDescription}</Value>
        </Row>
      ) : null}
      {(pref.date || pref.time) ? (
        <Row>
          <Label>Date/Time</Label>
          <Value>{`${pref.date ?? ''} ${pref.time ?? ''}`.trim()}</Value>
        </Row>
      ) : null}

      <Button title="Edit" onPress={() => navigation.navigate('Preference')} />
      <Button title="Sign out" onPress={() => { signOut(); navigation.reset({ index: 0, routes: [{ name: 'Login' }] }); }} />
    </Screen>
  );
}

export default SummaryScreen;
