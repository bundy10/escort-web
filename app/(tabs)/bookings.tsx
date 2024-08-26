import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '../styles/bookingsStyles';

export default function BookingsScreen() {
    const router = useRouter();

    const handleSearch = () => {
        router.push('explore');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <ThemedText type="title">Bookings</ThemedText>
            </View>
            <View style={styles.noBookingsContainer}>
                <ThemedText>No bookings... yet!</ThemedText>
                <TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>Start Searching</Text>
                </TouchableOpacity>
    
                

            </View>
        </ScrollView>
    );
}