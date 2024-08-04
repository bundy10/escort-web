import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/authStyles';

export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();

    const handleSignup = () => {
        console.log('Sign Up with:', username, email, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
            />
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
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.push('/auth/loginPage')}
                style={styles.toggleButton}
            >
                <Text>Have an account? <Text style={{color: 'blue'}}>Log in</Text></Text>
            </TouchableOpacity>
        </View>
    );
}