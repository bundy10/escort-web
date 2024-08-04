import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/authStyles';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        console.log('Login with:', username, password);
        // @ts-ignore
        router.push('/(tabs)/explore');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.push('/auth/signUpPage')}
                style={styles.toggleButton}
            >
                <Text>Don't have an account? <Text style={{color: 'blue'}}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}
