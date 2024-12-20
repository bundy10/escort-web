import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "@/app/auth/welcomePage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
    );
  }

  return (
      <Stack.Navigator initialRouteName="auth/welcomePage">
        <Stack.Screen name="auth/welcomePage" component={WelcomeScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
  );
}
