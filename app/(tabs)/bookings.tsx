import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/bookingsStyles';
export default function BookingsScreen() {
    const router = useRouter();

    const bookings = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
            name: 'Yugashima Golf Club & Hotel Resort',
            dates: '17 Aug - 19 Aug',
            price: '¥39,200',
            status: 'Completed',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            name: 'Randor Residential Hotel Kyoto Suites',
            dates: '16 Aug - 17 Aug',
            price: '¥16,200',
            status: 'Completed',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            name: 'Daiwa Roynet Hotel Kyoto-Hachijoguchi',
            dates: '14 Aug - 16 Aug',
            price: '¥24,443',
            status: 'Completed',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Trips</Text>
                <View style={styles.tabContainer}>
                    <Text style={[styles.tab, styles.activeTab]}>Active</Text>
                    <Text style={[styles.tab, styles.inactiveTab]}>Past</Text>
                    <Text style={[styles.tab, styles.inactiveTab]}>Cancelled</Text>
                </View>
            </View>
            <View style={styles.content}>
                {bookings.map((booking) => (
                    <View key={booking.id} style={styles.bookingCard}>
                        <Image source={{ uri: booking.image }} style={styles.image} />
                        <View style={styles.details}>
                            <Text style={styles.name}>{booking.name}</Text>
                            <Text style={styles.dates}>{booking.dates}</Text>
                            <Text style={styles.price}>{booking.price}</Text>
                            <Text style={styles.status}>{booking.status}</Text>
                            <TouchableOpacity
                                style={styles.rebookButton}
                                onPress={() => router.push('/rebook')}
                            >
                                <Text style={styles.rebookButtonText}>Rebook this property</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
