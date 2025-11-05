import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';
import { Button } from '../../components/ui/Button';
import { FormField } from '../../components/ui/FormField';
import { Screen } from '../../components/ui/Screen';
import type { RootStackParamList } from '../../navigation/RootNavigator';
import { useAppStore } from '../../stores/AppStore';
import { loginSchema, type LoginValues } from './validations';

const Title = styled.Text(({ theme }: { theme: DefaultTheme }) => `
  font-size: ${theme.typography.title}px;
  font-weight: 700;
  margin-bottom: ${theme.spacing(2)}px;
`);

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function LoginScreen({ navigation }: Props) {
  const signIn = useAppStore((s) => s.signIn);
  const emailInStore = useAppStore((s) => s.auth.email);

  const [values, setValues] = useState<LoginValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const isValid = useMemo(() => {
    try {
      loginSchema.validateSync(values, { abortEarly: false });
      return true;
    } catch (e: any) {
      return false;
    }
  }, [values]);

  React.useEffect(() => {
    if (emailInStore) {
      navigation.replace('Preference');
    }
  }, [emailInStore, navigation]);

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      await loginSchema.validate(values, { abortEarly: false });
      signIn(values.email);
      navigation.replace('Preference');
    } catch (e: any) {
      const next: any = {};
      e?.inner?.forEach((err: any) => {
        if (err.path) next[err.path] = err.message;
      });
      setErrors(next);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Screen>
      <Title>Sign in</Title>
      <FormField
        label="Email"
        value={values.email}
        onChangeText={(t) => setValues((v) => ({ ...v, email: t }))}
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        error={errors.email || null}
      />
      <FormField
        label="Password"
        value={values.password}
        onChangeText={(t) => setValues((v) => ({ ...v, password: t }))}
        placeholder="••••••"
        secureTextEntry
        returnKeyType="done"
        error={errors.password || null}
      />
      <Button title="Sign in" onPress={onSubmit} disabled={!isValid} loading={submitting} />
    </Screen>
  );
}

export default LoginScreen;
