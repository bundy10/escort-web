import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useNavigationState} from "@react-navigation/native";
import {useEffect} from "react";

export default function NotFoundScreen() {
    const navigationState = useNavigationState((state) => state);
    useEffect(() => {
        console.log('Current navigation state: ', navigationState);
    }, [navigationState]);

    const currentRouteName = navigationState.routes[navigationState.index].name;
    console.log('Current route name: ', currentRouteName);

    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <ThemedView style={styles.container}>
                <ThemedText type="title">This screen doesn't exist.</ThemedText>
                <Link href="/explore" style={styles.link}>
                    <ThemedText type="link">Go to home screen!</ThemedText>
                </Link>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});
