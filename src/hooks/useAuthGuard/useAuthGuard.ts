import type { RootStackParamList } from '@/src/navigation/RootNavigator';
import { useAppStore } from '@/src/stores/AppStore';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect } from 'react';

export function useAuthGuard() {
  const email = useAppStore((s) => s.auth.email);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!email) {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }
  }, [email, navigation]);
}
