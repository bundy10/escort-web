import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from '../styles/authStyles';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must have at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
});

export default function SignUpPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            {/* Formik config */}
            <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Sign Up with:', values.email, values.password);
                    // TODO: Navigate to another page on successful sign-up
                }}
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
                            placeholder="Email Address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {/** Display error message */}
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
                        {/** Display error message */}
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                        ) : null}
                        <TouchableOpacity
                            style={styles.button}

                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            {/* End of Formik config */}
            <TouchableOpacity
                onPress={() => router.push('/auth/loginPage')}
                style={styles.toggleButton}
            >
                <Text>Already have an account? <Text style={styles.linkText}>Log in</Text></Text>
            </TouchableOpacity>
        </View>
    );
}
