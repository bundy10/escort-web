import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './Styles/ListingCard'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type ListingCardProps = {
    image: number | string;
    title: string;
    description: string;
};
const ListingCard = ({ image, title, description }: ListingCardProps) => {
    const isLocalImage = typeof image === 'number';

    return (
        <View style={styles.card}>
            <Image source={isLocalImage ? image : { uri: image }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <ThemedText type="subtitle">{title}</ThemedText>
                <ThemedText style={styles.description}>{description}</ThemedText>
            </View>
        </View>
    );
};

export default ListingCard;
