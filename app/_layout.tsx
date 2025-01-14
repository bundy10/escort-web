import 'react-native-reanimated';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/app/auth/welcomePage";
import LoginScreen from "@/app/auth/loginPage";
import SignupScreen from "@/app/auth/signUpPage";
import Tabs from "@/app/(tabs)/_layout";
import Explore from "@/app/(tabs)/explore";
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [isReady, setIsReady] = React.useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack.Navigator initialRouteName="auth/welcomePage">
        <Stack.Screen name="auth/welcomePage" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="auth/loginPage" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="auth/signupPage" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="explore" component={Explore} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  );
}