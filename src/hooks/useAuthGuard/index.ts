import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import type { RootStackParamList } from '../../navigation/RootNavigator';
import { useAppStore } from '../../stores/AppStore';

export function useAuthGuard() {
  const email = useAppStore((s) => s.auth.email);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!email) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }
  }, [email, navigation]);
}
