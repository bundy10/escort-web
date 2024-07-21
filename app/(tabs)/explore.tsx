import React, { useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Modal, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '../styles/exploreStyles';
import ListingCard from '@/components/ListingCard';
import { dummyListingData } from '../testData/data';

export default function ExploreScreen() {
    interface Card {
        id: number;
        title: string;
        description: string;
        image: any; // any type because of dummy data
    }

    const [searchText, setSearchText] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const handleSearchOpen = () => setIsSearchVisible(true);
    const handleSearchClose = () => setIsSearchVisible(false);
    const openCardDetail = (card: Card) => {
        console.log('Selected card image:', card.image); // Logging image here
        setSelectedCard(card);
    };
    const closeCardDetail = () => setSelectedCard(null);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View>
                <TouchableOpacity onPress={handleSearchOpen} style={styles.searchButton}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
                        <Icon name="search" size={20} color="#000" />
                        <ThemedText style={styles.searchButtonText}>Search</ThemedText>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={isSearchVisible}
                    onRequestClose={handleSearchClose}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={handleSearchClose} style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 1}}>
                            <View style={styles.closeSearch}>
                                <Icon name="close" size={24} color="#000" />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search..."
                                value={searchText}
                                onChangeText={setSearchText}
                            />
                        </View>
                    </View>
                </Modal>
                {dummyListingData.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => openCardDetail(item)}>
                        <ListingCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </TouchableOpacity>
                ))}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={!!selectedCard}
                    onRequestClose={closeCardDetail}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <TouchableOpacity onPress={closeCardDetail} style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
                            <View style={styles.closeSearch}>
                            <Icon name="arrow-left" size={24} color="#000" />
                            </View>
                        </TouchableOpacity>
                        {selectedCard && (
                            <Image
                                source={selectedCard.image} // im directly using the image object 
                                style={styles.cardImage}
                            />
                        )}
                        {selectedCard && (
                            <View style={styles.floatBar}>
                                <Text>$0.00 Total</Text>
                                <Button title="Like" onPress={() => {}} />
                            </View>
                        )}
                    </ScrollView>
                </Modal>
            </View>
        </ScrollView>
    );
}
