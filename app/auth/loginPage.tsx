import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function LoginPage() {
    const [isLoginView, setIsLoginView] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); 
    const opacity = useState(new Animated.Value(1))[0];

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [isLoginView]);

    const handleLogin = () => {
        console.log('Login with:', username, password);
    };

    const handleSignup = () => {
        console.log('Sign Up with:', username, email, password); 
    };

    const toggleView = () => {
        opacity.setValue(0);
        setIsLoginView(!isLoginView);
    };

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <Text style={styles.title}>{isLoginView ? 'Login' : 'Sign up'}</Text>
            {isLoginView ? null : (
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={setEmail}
                />
            )}
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
            {isLoginView ? (
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity
                onPress={toggleView}
                style={styles.toggleButton}
            >
                <Text>{isLoginView ? "Don't have an account? " : 'Have an account? '}<Text style={{color: 'blue'}}>{isLoginView ? "Sign up" : 'Log in'}</Text></Text>
                </TouchableOpacity>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#000000',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
    },
    toggleButton: {
        marginTop: 20,
    },
});