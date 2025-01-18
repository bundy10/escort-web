import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false}}>
          <Stack.Screen
              name="index"
          />
          <Stack.Screen
              name="auth/welcomePage"
          />
          <Stack.Screen
              name="auth/loginPage"
          />
          <Stack.Screen
              name="auth/signUpPage"
          />
          <Stack.Screen
              name="(tabs)"
          />
        </Stack>
      </ThemeProvider>
  );
}