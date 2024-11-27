import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles/authStyles';
import { handleLogin } from '../axios/calls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Username is required")
        .label("Username"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must have at least 6 characters")
        .label("Password"),
});

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');

    useEffect(() => {
        const checkSignUpSuccess = async () => {
            const signUpSuccess = await AsyncStorage.getItem('signUpSuccess');
            console.log(signUpSuccess);
            if (signUpSuccess === 'true') {
                await AsyncStorage.removeItem('signUpSuccess');
            }
        };
    }, []);

    const authenticateLogin = async (values: { username: string; password: string }) => {
        try {
            const success = await handleLogin(values);
            if (success) {
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={authenticateLogin}
                validationSchema={validationSchema}
            >
                {({
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      values,
                      errors,
                      touched,
                  }) => (
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        {errors.username && touched.username && (
                            <Text style={styles.errorText}>{errors.username}</Text>
                        )}
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {errors.password && touched.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                        )}
                        {error && <Text style={styles.errorText}>{error}</Text>}
                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <TouchableOpacity
                onPress={() => router.push('/auth/signUpPage')}
                style={styles.toggleButton}
            >
                <Text>Don't have an account? <Text style={styles.linkText}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

/**const handleLogout = async () => {      to clear userId from async storage
    try {
        await AsyncStorage.removeItem('userId');
        router.push('/auth/loginPage');
    } catch (error) {
        console.error('Failed to clear userId:', error);
    }
}; */