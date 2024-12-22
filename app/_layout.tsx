import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import 'react-native-reanimated';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/app/auth/welcomePage";
import LoginScreen from "@/app/auth/loginPage";
import SignupScreen from "@/app/auth/signUpPage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function RootLayout() {

  return (
      <Stack.Navigator initialRouteName="auth/welcomePage">
        <Stack.Screen name="auth/welcomePage" component={WelcomeScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="auth/loginPage" component={LoginScreen} options={{ headerShown: false }}  />
          <Stack.Screen name="auth/signupPage" component={SignupScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
  );
}
