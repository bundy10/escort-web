import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Modal, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/exploreStyles';
import ListingCard from '@/components/ListingCard';
import { dummyListingData } from '../testData/data';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProtectedRoute from '@/components/ProtectedRoute';
import { getListingById } from '@/api/listingApi';




const getUserId = async () => {
    try {
        const userId = await AsyncStorage.getItem('userId');
        if (userId !== null) {
            // Use the userId for API requests or other logic
            console.log('User ID:', userId);
        }
    } catch (error) {
        console.error('Failed to retrieve userId:', error);
    }
};
export default function ExploreScreen() {
    interface Card {
        id: number;
        title: string;
        description: string;
        image: any; // any type because of dummy data
    }

    const [searchText, setSearchText] = useState('');
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const [filteredData, setFilteredData] = useState(dummyListingData);
    const [listingId, setListingId] = useState('');

    // test
    const getListing = async () => {
        try {
            const data = await getListingById(listingId);
            console.log('Listing data:', data);
        } catch (error) {
            console.error('Error fetching listing:', error);
        }
    };
    // test
    useEffect(() => {
        if (searchText === '') {
            setFilteredData(dummyListingData);
        } else {
            const filtered = dummyListingData.filter(item =>
                item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                item.description.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchText]);

    const openCardDetail = (card: Card) => {
        console.log('Selected card image:', card.image); // Logging image here
        setSelectedCard(card);
    };
    const closeCardDetail = () => setSelectedCard(null);
    getUserId();

    return (
        <ProtectedRoute>
            {/* test */}
            <View>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                    backgroundColor: 'white'}} 
                    value={listingId} onChangeText={setListingId} placeholder='put the listing ID in here, then check console'/>
                <Button title="Get Listing By Id" onPress={getListing} />
            </View>
            {/* above is testing the data */}
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {filteredData.map((item) => (
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
                                    <Button title="Like" onPress={() => { }} />
                                </View>
                            )}
                        </ScrollView>
                    </Modal>
                </ScrollView>
            </View>
        </ProtectedRoute>
    );
}