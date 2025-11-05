import { useColorScheme } from "@/src/hooks/useColorScheme/useColorScheme";
import { RootNavigator } from "@/src/navigation/RootNavigator";
import { linking } from "@/src/navigation/RootNavigator/linking";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { DarkTheme as NavDarkTheme, DefaultTheme as NavLightTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const scheme = useColorScheme() ?? 'light';
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer linking={linking} theme={scheme === 'dark' ? NavDarkTheme : NavLightTheme}>
            <RootNavigator />
          </NavigationContainer>
          <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
