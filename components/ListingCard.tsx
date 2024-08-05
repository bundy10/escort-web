import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Styles/ListingCard';

interface ListingCardProps {
    image: any; // Adjust the type as needed
    title: string;
    description: string;
}

export default function ListingCard({ image, title, description }: ListingCardProps) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}