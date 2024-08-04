import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles/authStyles';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required").email().label("Email"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must have at least 6 characters")
        .label("Password"),
});

export default function LoginPage() {
   
    const router = useRouter();

    // const handleLogin = () => {          will change this to use handleSubmit from Formik
    //     router.push('/(tabs)/explore');
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {/* Formik config */}
            <Formik
            initialValues={{email:"", password:""}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema} 
            >
            {({
                handleChange, 
                handleSubmit, 
                handleBlur,
                values, 
                errors, 
                touched,}) => (
                <View style={styles.formContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType='email-address'
                    />
                    {/** Display error message */}
                    {errors.email && touched.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {/** Display error message */}
                    {errors.password && touched.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/explore')}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            )}
            </Formik>
            {/* End of Formik config */}
            <TouchableOpacity
                onPress={() => router.push('/auth/signUpPage')}
                style={styles.toggleButton}
            >
                <Text>Don't have an account? <Text style={{color: 'blue'}}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}
