import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../screens/Login/index';
import PreferenceScreen from '../../screens/Preference/index';
import SummaryScreen from '../../screens/Summary/index';

export type RootStackParamList = {
  Login: undefined;
  Preference: { type?: 'in_store' | 'delivery' | 'curbside' } | undefined;
  Summary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Preference" component={PreferenceScreen} options={{ title: 'Delivery Preference' }} />
      <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'Summary' }} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
