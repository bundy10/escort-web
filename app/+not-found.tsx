import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return <Redirect href="auth/loginPage" />;
}
