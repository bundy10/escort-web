import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles/authStyles';
import { handleSignUp } from '../axios/calls';

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must have at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), undefined], "Passwords must match").required("Required"),
    phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must be only digits').min(10, 'Phone number must be at least 10 digits')
});

export default function SignUpPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const authenticateSignUp = async (values: { firstname: string; lastname: string; username: string; email: string; password: string; confirmPassword: string; phoneNumber: string }) => {
        if (values.password !== values.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const success = await handleSignUp({ firstname: values.firstname, lastname: values.lastname, username: values.username, email: values.email, password: values.password, phoneNumber: values.phoneNumber });
            if (success) {
            } else {
                setError('Sign-up failed');
            }
        } catch (err) {
            setError('Sign-up failed');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Formik
                initialValues={{ firstname: "", lastname: "", username: "", email: "", password: "", confirmPassword: "", phoneNumber: "" }}
                validationSchema={validationSchema}
                onSubmit={authenticateSignUp}
            >
                {({
                      handleChange,
                      handleSubmit,
                      handleBlur,
                      values,
                      errors,
                      touched,
                  }) => (
                    <>
                        <View style={styles.formContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                onChangeText={handleChange('firstname')}
                                onBlur={handleBlur('firstname')}
                                value={values.firstname}
                            />
                            {errors.firstname && touched.firstname ? (
                                <Text style={styles.errorText}>{errors.firstname}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                onChangeText={handleChange('lastname')}
                                onBlur={handleBlur('lastname')}
                                value={values.lastname}
                            />
                            {errors.lastname && touched.lastname ? (
                                <Text style={styles.errorText}>{errors.lastname}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            {errors.username && touched.username ? (
                                <Text style={styles.errorText}>{errors.username}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            {errors.email && touched.email ? (
                                <Text style={styles.errorText}>{errors.email}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                secureTextEntry
                            />
                            {errors.password && touched.password ? (
                                <Text style={styles.errorText}>{errors.password}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                onChangeText={handleChange("confirmPassword")}
                                onBlur={handleBlur("confirmPassword")}
                                value={values.confirmPassword}
                                secureTextEntry
                            />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                            ) : null}
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                onChangeText={handleChange("phoneNumber")}
                                onBlur={handleBlur("phoneNumber")}
                                value={values.phoneNumber}
                                keyboardType="phone-pad"
                            />
                            {errors.phoneNumber && touched.phoneNumber ? (
                                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                            ) : null}
                            {error && <Text style={styles.errorText}>{error}</Text>}
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleSubmit()}
                            >
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
            <TouchableOpacity
                onPress={() => router.push('/auth/loginPage')}
                style={styles.toggleButton}
            >
                <Text>Already have an account? <Text style={styles.linkText}>Log in</Text></Text>
            </TouchableOpacity>
        </View>
    );
}