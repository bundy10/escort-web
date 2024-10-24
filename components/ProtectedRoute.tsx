import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                router.push('/auth/loginPage');
            }
        };

        checkAuth();
    }, [router]);

    return <>{children}</>;
}