import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ActivityIndicator, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName="auth/loginPage">
          <Stack.Screen name="auth/loginPage" options={{ headerShown: false }} />
          <Stack.Screen name="auth/signUpPage" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/wallet/wallet" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/wallet/help" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/wallet/paymentMethods" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/notifications" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/privacySharing" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/personalInformation" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/loginSecurity" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/accessibility" options={{ headerShown: false }} />
          <Stack.Screen name="userSettingPages/tos" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
  );
}
