import { Button } from '@/src/components/Button';
import { Screen } from '@/src/components/Screen';
import { useAuthGuard } from '@/src/hooks/useAuthGuard';
import type { RootStackParamList } from '@/src/navigation/RootNavigator/RootNavigator';
import { useAppStore } from '@/src/stores/AppStore';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Label, Row, Title, Value } from './Summary.styles';

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
