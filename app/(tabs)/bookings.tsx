import React from 'react';
import { ScrollView, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '../styles/bookingsStyles';
import ListingCard from '@/components/ListingCard';
import { dummyListingData } from  '../testData/data'

export default function BookingsScreen() {


    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.header}>
                <ThemedText type="title">Bookings</ThemedText>
            </View>
            {dummyListingData.map((item) => (
                <ListingCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </ScrollView>
    );
}
