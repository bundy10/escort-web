import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";

export const handleLogin = async (values: { username: string; password: string }): Promise<boolean> => {
    const data = {
        userName: values.username,
        password: values.password
    };
    try {
        const response = await axios.post('http://localhost:8080/api/User/authenticate/login', data);
        if (typeof response.data === 'number') {
            await AsyncStorage.setItem('userId', response.data.toString());
            router.push('/(tabs)/explore');
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

export const handleSignUp = async (values: { firstname: string; lastname: string; username: string; email: string; password: string; phoneNumber: string }): Promise<boolean> => {
    const data = {
        firstName: values.firstname,
        lastName: values.lastname,
        userName: values.username,
        password: values.password,
        userContactDetails: {
            email: values.email,
            phoneNumber: values.phoneNumber
        }
    };
    console.log('Sending data to endpoint:', data);
    try {
        const response = await axios.post('http://localhost:8080/api/User', data);
        if (response.status === 201) {
            await AsyncStorage.setItem('signUpSuccess', 'true');
            router.push('/(tabs)/login');
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error hitting endpoint:', error);
        return false;
    }
};

export const getBookingsById = async (values: { firstname: string; lastname: string; username: string; email: string; password: string; phoneNumber: string }): Promise<boolean> => {
    const data = {
        firstName: values.firstname,
        lastName: values.lastname,
        userName: values.username,
        password: values.password,
        userContactDetails: {
            email: values.email,
            phoneNumber: values.phoneNumber
        }
    };
    console.log('Sending data to endpoint:', data);
    try {
        const response = await axios.post('http://localhost:8080/api/User', data);
        if (response.status === 201) {
            await AsyncStorage.setItem('signUpSuccess', 'true');
            router.push('/(tabs)/login');
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error hitting endpoint:', error);
        return false;
    }
};

export default {
    handleLogin,
    handleSignUp,
    getBookingsById
};