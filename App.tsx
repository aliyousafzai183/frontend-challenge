import { RootNavigator } from "@/src/navigation/RootNavigator";
import { linking } from "@/src/navigation/RootNavigator/linking";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer linking={linking}>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
