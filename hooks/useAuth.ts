import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                const userId = await AsyncStorage.getItem('userId');
                if (userId) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    router.push('/auth/loginPage');
                }
            } catch (error) {
                console.error('Failed to check authentication status:', error);
                setIsAuthenticated(false);
            }
        })();
    }, []);

    return isAuthenticated;
};